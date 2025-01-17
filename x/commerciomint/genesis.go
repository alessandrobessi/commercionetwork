package commerciomint

import (
	"fmt"

	"github.com/commercionetwork/commercionetwork/x/commerciomint/keeper"
	"github.com/commercionetwork/commercionetwork/x/commerciomint/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.

// InitGenesis sets documents information for genesis.
// TODO move all keeper invocation in keeper package
func InitGenesis(ctx sdk.Context, keeper keeper.Keeper, data types.GenesisState) {

	// Get the module account
	moduleAcc := keeper.GetModuleAccount(ctx)
	if moduleAcc == nil {
		panic(fmt.Sprintf("%s module account has not been set", types.ModuleName))
	}

	// Get the initial pool coins
	// TODO RESOLVE POOL ISSUE
	if keeper.GetModuleBalance(ctx, moduleAcc.GetAddress()).IsZero() {
		if err := keeper.SetLiquidityPoolToAccount(ctx, data.PoolAmount); err != nil {
			panic(err)
		}
		keeper.SetModuleAccount(ctx, moduleAcc)
	}

	params := types.Params{
		ConversionRate: data.Params.ConversionRate,
		FreezePeriod:   data.Params.FreezePeriod,
	}

	if err := keeper.UpdateParams(ctx, params); err != nil {
		panic(err)
	}

	for _, position := range data.Positions {
		if err := keeper.SetPosition(ctx, *position); err != nil {
			panic(err)
		}
	}

}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	// this line is used by starport scaffolding # genesis/module/export
	genesis.Params = k.GetParams(ctx)

	genesis.PoolAmount = k.GetLiquidityPoolAmount(ctx)

	genesis.Positions = append(genesis.Positions, k.GetAllPositions(ctx)...)

	return genesis
}

// ValidateGenesis performs basic validation of genesis data returning an
// error for any failed validation criteria.
func ValidateGenesis(state types.GenesisState) error {
	for _, position := range state.Positions {
		err := position.Validate()
		if err != nil {
			return err
		}
	}
	// PoolAmount

	freezePeriod := state.Params.FreezePeriod
	err := types.ValidateFreezePeriod(freezePeriod)
	if err != nil {
		return err
	}

	err = types.ValidateConversionRate(state.Params.ConversionRate)
	if err != nil {
		return err
	}

	return nil
}
