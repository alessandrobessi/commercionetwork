package documents

import (
	"fmt"

	"github.com/commercionetwork/commercionetwork/x/documents/keeper"
	"github.com/commercionetwork/commercionetwork/x/documents/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// InitGenesis sets documents and receipts information for genesis.
func InitGenesis(ctx sdk.Context, keeper keeper.Keeper, data types.GenesisState) {
	for _, doc := range data.Documents {
		if err := keeper.SaveDocument(ctx, *doc); err != nil {
			panic(err)
		}
	}

	for _, receipt := range data.Receipts {
		if err := keeper.SaveReceipt(ctx, *receipt); err != nil {
			panic(err)
		}
	}
}

// ExportGenesis returns the genesis state for a given context and keeper.
func ExportGenesis(ctx sdk.Context, keeper keeper.Keeper) types.GenesisState {
	documents := []*types.Document{}
	receipts := []*types.DocumentReceipt{}

	documentsIterator := keeper.DocumentsIterator(ctx)
	defer documentsIterator.Close()
	for ; documentsIterator.Valid(); documentsIterator.Next() {
		keyDocumentUUIDVal := documentsIterator.Key()
		documentUUID := string(keyDocumentUUIDVal[len(types.DocumentStorePrefix):])
		document, err := keeper.GetDocumentByID(ctx, documentUUID)
		if err != nil {
			panic(fmt.Sprintf("could not find document with UUID %s", documentUUID))
		}

		documents = append(documents, &document)

		receiptsIterator := keeper.UUIDDocumentsReceiptsIterator(ctx, documentUUID)
		for ; receiptsIterator.Valid(); receiptsIterator.Next() {
			keyReceiptUUIDVal := receiptsIterator.Key()
			receiptUUID := string(keyReceiptUUIDVal[len(types.DocumentsReceiptsPrefix+documentUUID+":"):])
			receipt, err := keeper.GetReceiptByID(ctx, receiptUUID)
			if err != nil {
				panic(fmt.Sprintf("could not find receipt with UUID %s", receiptUUID))
			}
			receipts = append(receipts, &receipt)
		}
	}

	return types.GenesisState{
		Documents: documents,
		Receipts:  receipts,
	}
}

// exportDocuments exports all the documents in the store.
// func exportDocuments(ctx sdk.Context, keeper keeper.Keeper) []*types.Document {
// 	documents := []*types.Document{}
// 	di := keeper.DocumentsIterator(ctx)
// 	defer di.Close()
// 	for ; di.Valid(); di.Next() {
// 		keyVal := di.Key()
// 		uuid := string(keyVal[len(types.DocumentStorePrefix):])
// 		document, err := keeper.GetDocumentByID(ctx, uuid)
// 		if err != nil {
// 			panic(fmt.Sprintf("could not find document with UUID %s", uuid))
// 		}

// 		documents = append(documents, &document)
// 	}

// 	return documents
// }

// exportReceipts exports all the receipts in the store.
// func exportReceipts(ctx sdk.Context, keeper keeper.Keeper) []*types.DocumentReceipt {
// 	receipts := []*types.DocumentReceipt{}

// 	sentDri, _ := keeper.ReceiptsIterators(ctx)
// 	defer sentDri.Close()

// 	// just iterate through sent receipts, received receipts should be the same:
// 	// the per-user selection logic happens on the key-level
// 	for ; sentDri.Valid(); sentDri.Next() {
// 		uuid := string(sentDri.Value())
// 		receipt, err := keeper.GetReceiptByID(ctx, uuid)
// 		if err != nil {
// 			panic(fmt.Sprintf("could not find document receipt with UUID %s", uuid))
// 		}

// 		receipts = append(receipts, &receipt)
// 	}

// 	return receipts
// }
