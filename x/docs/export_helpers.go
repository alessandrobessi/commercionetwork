package docs

import (
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

// exportDocuments exports all the Documents in the store to a slice.
func exportDocuments(ctx sdk.Context, keeper Keeper) []Document {
	documents := []Document{}
	di := keeper.DocumentsIterator(ctx)
	defer di.Close()
	for ; di.Valid(); di.Next() {
		document, duuid, err := keeper.ExtractDocument(ctx, di.Value())
		if err != nil {
			panic(
				fmt.Sprintf(
					"could not find document with UUID %s even though the user has an associated received document",
					duuid,
				),
			)
		}

		documents = append(documents, document)
	}

	return documents
}

// exportReceipts exports all the Receipts in the store to a slice.
func exportReceipts(ctx sdk.Context, keeper Keeper) []DocumentReceipt {
	receipts := []DocumentReceipt{}
	sentDri, receivedDri := keeper.ReceiptsIterators(ctx)
	defer sentDri.Close()
	defer receivedDri.Close()

	// sent receipts
	for ; sentDri.Valid(); sentDri.Next() {
		receipt, uuid, err := keeper.ExtractReceipt(ctx, sentDri.Value())
		if err != nil {
			panic(
				fmt.Sprintf(
					"could not find document receipt with UUID %s even though the user has an associated document with it",
					uuid,
				),
			)
		}

		receipts = append(receipts, receipt)
	}

	// received receipts
	for ; receivedDri.Valid(); receivedDri.Next() {
		receipt, uuid, err := keeper.ExtractReceipt(ctx, receivedDri.Value())
		if err != nil {
			panic(
				fmt.Sprintf(
					"could not find document receipt with UUID %s even though the user has an associated document with it",
					uuid,
				),
			)
		}

		receipts = append(receipts, receipt)
	}

	return receipts
}

// exportMetadataSchema exports all the MetadataSchema in the store to a slice.
func exportMetadataSchemes(ctx sdk.Context, keeper Keeper) []MetadataSchema {
	sms := []MetadataSchema{}
	smsi := keeper.SupportedMetadataSchemesIterator(ctx)
	defer smsi.Close()

	for ; smsi.Valid(); smsi.Next() {
		sms = append(sms, keeper.ExtractMetadataSchema(smsi.Value()))
	}

	return sms
}

// exportTrustedSchemaProviders exports all the TrustedSchemaProviders in the store to a slice.
func exportTrustedSchemaProviders(ctx sdk.Context, keeper Keeper) []sdk.AccAddress {
	tsps := []sdk.AccAddress{}
	tspi := keeper.TrustedSchemaProposersIterator(ctx)
	defer tspi.Close()

	for ; tspi.Valid(); tspi.Next() {
		tsps = append(tsps, keeper.ExtractTrustedSchemaProposer(tspi.Value()))
	}

	return tsps
}
