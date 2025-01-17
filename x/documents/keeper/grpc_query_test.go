package keeper

import (
	"fmt"
	"sort"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	uuid "github.com/satori/go.uuid"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	"github.com/commercionetwork/commercionetwork/x/documents/types"
)

func createNDocument(keeper *Keeper, ctx sdk.Context, n int) []*types.Document {
	items := []*types.Document{}
	for i := 0; i < n; i++ {
		item := &types.Document{
			Sender:     types.ValidDocument.Sender,
			Recipients: []string{types.ValidDocumentReceiptRecipient1.Sender},
			UUID:       uuid.NewV4().String(),
		}
		items = append(items, item)

		_ = keeper.SaveDocument(ctx, *items[i])
	}
	return items
}

func createNDocumentReceipt(keeper *Keeper, ctx sdk.Context, n int) []*types.DocumentReceipt {
	docs := createNDocument(keeper, ctx, n)

	items := []*types.DocumentReceipt{}
	for i := range docs {
		item := &types.DocumentReceipt{
			Sender:       docs[i].Recipients[0],
			DocumentUUID: docs[i].UUID,
			Recipient:    docs[i].Sender,
			UUID:         uuid.NewV4().String(),
		}
		items = append(items, item)

		_ = keeper.SaveReceipt(ctx, *items[i])
	}
	return items
}

func TestDocumentQuerySingle(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNDocument(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetDocumentRequest
		response *types.QueryGetDocumentResponse
		err      error
	}{
		{
			desc:     "First",
			request:  &types.QueryGetDocumentRequest{UUID: msgs[0].UUID},
			response: &types.QueryGetDocumentResponse{Document: msgs[0]},
		},
		{
			desc:     "Second",
			request:  &types.QueryGetDocumentRequest{UUID: msgs[1].UUID},
			response: &types.QueryGetDocumentResponse{Document: msgs[1]},
		},
		{
			desc:    "KeyNotFound",
			request: &types.QueryGetDocumentRequest{UUID: fmt.Sprint(len(msgs))},
			err:     sdkerrors.ErrKeyNotFound,
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.Document(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.Equal(t, tc.response, response)
			}
		})
	}
}

func TestDocumentQueryPaginated(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNDocument(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryGetSentDocumentsRequest {
		return &types.QueryGetSentDocumentsRequest{
			Address: types.ValidDocument.Sender,
			Pagination: &query.PageRequest{
				Key:        next,
				Offset:     offset,
				Limit:      limit,
				CountTotal: total,
			},
		}
	}
	t.Run("ByOffset", func(t *testing.T) {
		//  sort the msgs slice by UUID
		sort.Slice(msgs, func(i, j int) bool {
			return msgs[i].GetUUID() < msgs[j].GetUUID()
		})

		for step := 1; step < 5; step++ {
			index := 0

			for i := 0; i < len(msgs); i += step {
				resp, err := keeper.SentDocuments(wctx, request(nil, uint64(i), uint64(step), false))
				require.NoError(t, err)

				for _, r := range resp.Document {
					assert.Equal(t, msgs[index].UUID, r.UUID)
					index++
				}
			}
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.SentDocuments(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			for _, respDocument := range resp.Document {
				assert.Contains(t, msgs, respDocument)
			}
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.SentDocuments(wctx, request(nil, 2, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.SentDocuments(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}

func TestSentDocuments(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNDocument(keeper, ctx, 5)

	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetSentDocumentsRequest
		response *types.QueryGetSentDocumentsResponse
		err      error
	}{
		{
			desc:     "First",
			request:  &types.QueryGetSentDocumentsRequest{Address: msgs[0].Sender},
			response: &types.QueryGetSentDocumentsResponse{Document: msgs},
		},
		{
			desc:    "Invalid address",
			request: &types.QueryGetSentDocumentsRequest{},
			err:     sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "invalid address: "),
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.SentDocuments(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.Len(t, tc.response.Document, len(response.Document))
				for i := range tc.response.Document {
					require.Contains(t, response.Document, tc.response.Document[i])
				}
			}
		})
	}
}

func TestReceivedDocument(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNDocument(keeper, ctx, 5)

	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetReceivedDocumentRequest
		response *types.QueryGetReceivedDocumentResponse
		err      error
	}{
		{
			desc:     "All received documents",
			request:  &types.QueryGetReceivedDocumentRequest{Address: msgs[0].Recipients[0]},
			response: &types.QueryGetReceivedDocumentResponse{ReceivedDocument: msgs},
		},
		{
			desc:    "Invalid address",
			request: &types.QueryGetReceivedDocumentRequest{},
			err:     sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "invalid address: "),
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.ReceivedDocument(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.Len(t, tc.response.ReceivedDocument, len(response.ReceivedDocument))
				for i := range tc.response.ReceivedDocument {
					require.Contains(t, response.ReceivedDocument, tc.response.ReceivedDocument[i])
				}
			}
		})
	}
}

func TestSentDocumentsReceipts(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNDocumentReceipt(keeper, ctx, 5)

	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetSentDocumentsReceiptsRequest
		response *types.QueryGetSentDocumentsReceiptsResponse
		err      error
	}{
		{
			desc:     "All sent receipt by user",
			request:  &types.QueryGetSentDocumentsReceiptsRequest{Address: msgs[0].Sender},
			response: &types.QueryGetSentDocumentsReceiptsResponse{Receipt: msgs},
		},
		{
			desc:    "Invalid address",
			request: &types.QueryGetSentDocumentsReceiptsRequest{},
			err:     sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "invalid address: "),
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.SentDocumentsReceipts(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.Len(t, tc.response.Receipt, len(response.Receipt))
				for i := range tc.response.Receipt {
					require.Contains(t, response.Receipt, tc.response.Receipt[i])
				}
			}
		})
	}
}

func TestReceivedDocumentsReceipts(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNDocumentReceipt(keeper, ctx, 5)

	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetReceivedDocumentsReceiptsRequest
		response *types.QueryGetReceivedDocumentsReceiptsResponse
		err      error
	}{
		{
			desc:     "All received receipt by user",
			request:  &types.QueryGetReceivedDocumentsReceiptsRequest{Address: msgs[0].Recipient},
			response: &types.QueryGetReceivedDocumentsReceiptsResponse{ReceiptReceived: msgs},
		},
		{
			desc:    "Invalid address",
			request: &types.QueryGetReceivedDocumentsReceiptsRequest{},
			err:     sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "invalid address: "),
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.ReceivedDocumentsReceipts(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.Len(t, tc.response.ReceiptReceived, len(response.ReceiptReceived))
				for i := range tc.response.ReceiptReceived {
					require.Contains(t, response.ReceiptReceived, tc.response.ReceiptReceived[i])
				}
			}
		})
	}
}
