package types

import (
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// -------------------------
// --- MsgIncrementBlockRewardsPool
// -------------------------

var _ sdk.Msg = &MsgIncrementBlockRewardsPool{}

func NewMsgIncrementBlockRewardsPool(funder string, amount sdk.Coins) *MsgIncrementBlockRewardsPool {
	return &MsgIncrementBlockRewardsPool{
		Funder: funder,
		Amount: amount,
	}
}

func (msg *MsgIncrementBlockRewardsPool) Route() string {
	return RouterKey
}

func (msg *MsgIncrementBlockRewardsPool) Type() string {
	return MsgTypeIncrementBlockRewardsPool
}

func (msg *MsgIncrementBlockRewardsPool) GetSigners() []sdk.AccAddress {
	funder, err := sdk.AccAddressFromBech32(msg.Funder)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{funder}
}

func (msg *MsgIncrementBlockRewardsPool) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgIncrementBlockRewardsPool) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Funder)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid funder address (%s)", err)
	}

	if msg.Amount.IsZero() || msg.Amount.IsAnyNegative() {
		return sdkerrors.Wrap(sdkerrors.ErrUnknownRequest, "You can't transfer a null or negative amount")
	}

	return nil
}


// -------------------------
// --- MsgSetParams
// -------------------------

var _ sdk.Msg = &MsgSetParams{}

func NewMsgSetParams(government string, epochIdentifier string, earnRate sdk.Dec) *MsgSetParams {
	return &MsgSetParams{
		Government: government,
		DistrEpochIdentifier: epochIdentifier,
		EarnRate: earnRate,
	}
}

func (msg *MsgSetParams) Route() string {
	return RouterKey
}

func (msg *MsgSetParams) Type() string {
	return MsgTypeSetParams
}

func (msg *MsgSetParams) GetSigners() []sdk.AccAddress {
	gov, err := sdk.AccAddressFromBech32(msg.Government)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{gov}
}

func (msg *MsgSetParams) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSetParams) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Government)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid government address (%s)", err)
	}
	if msg.DistrEpochIdentifier != EpochDay && msg.DistrEpochIdentifier != EpochWeek && msg.DistrEpochIdentifier != EpochMinute{
		return sdkerrors.Wrap(sdkerrors.ErrInvalidType, fmt.Sprintf("invalid epoch identifier: %s", msg.DistrEpochIdentifier))
	}
	if msg.EarnRate.IsNegative() {
		return sdkerrors.Wrap(sdkerrors.ErrUnauthorized, fmt.Sprintf("invalid vbr earn rate: %s", msg.EarnRate))
	}
	return nil
}

