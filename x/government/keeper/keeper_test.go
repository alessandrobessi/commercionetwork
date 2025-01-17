package keeper

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

func TestKeeper_SetGovernmentAddress(t *testing.T) {

	tests := []struct {
		name            string
		governmentToSet sdk.AccAddress
		governmentOld   sdk.AccAddress
		wantErr         bool
	}{
		{
			"empty store",
			governmentTestAddress,
			nil,
			false,
		},
		{
			"same government already set",
			governmentTestAddress,
			governmentTestAddress,
			true,
		},
		{
			"new government with government already set",
			notGovernmentAddress,
			governmentTestAddress,
			true,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			k, ctx := setupKeeperWithGovernmentAddress(t, tt.governmentOld)

			if err := k.SetGovernmentAddress(ctx, tt.governmentToSet); (err != nil) != tt.wantErr {
				t.Errorf("Keeper.SetGovernmentAddress() error = %v, wantErr %v", err, tt.wantErr)
			}
			var expected sdk.AccAddress
			if tt.wantErr {
				expected = tt.governmentOld
			} else {
				expected = tt.governmentToSet
			}

			require.Equal(t, expected, k.GetGovernmentAddress(ctx))
		})
	}
}

func TestKeeper_GetGovernmentAddress(t *testing.T) {

	tests := []struct {
		name    string
		address sdk.AccAddress
	}{
		{
			"expected government",
			governmentTestAddress,
		},
		{
			"empty government",
			nil,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			k, ctx := setupKeeperWithGovernmentAddress(t, tt.address)
			require.Equal(t, tt.address, k.GetGovernmentAddress(ctx))
		})
	}
}
