package keeper

import (
	"testing"

	"github.com/commercionetwork/commercionetwork/x/did/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func TestIdentityQuerySingle(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNIdentity(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryResolveDidDocumentRequest
		response *types.QueryResolveDidDocumentResponse
		err      error
	}{
		{
			desc:     "First",
			request:  &types.QueryResolveDidDocumentRequest{ID: msgs[0].ID},
			response: &types.QueryResolveDidDocumentResponse{DidDocument: &msgs[0]},
		},
		{
			desc:     "Second",
			request:  &types.QueryResolveDidDocumentRequest{ID: msgs[1].ID},
			response: &types.QueryResolveDidDocumentResponse{DidDocument: &msgs[1]},
		},
		{
			desc:    "KeyNotFound",
			request: &types.QueryResolveDidDocumentRequest{ID: "x"},
			err:     sdkerrors.ErrKeyNotFound,
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.Identity(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.Equal(t, tc.response, response)
			}
		})
	}
}