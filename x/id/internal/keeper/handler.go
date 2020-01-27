package keeper

import (
	"fmt"

	sdkErr "github.com/cosmos/cosmos-sdk/types/errors"

	"github.com/commercionetwork/commercionetwork/x/government"
	"github.com/commercionetwork/commercionetwork/x/id/internal/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// NewHandler returns a handler for type messages and is essentially a sub-router that directs
// messages coming into this module to the proper handler.
func NewHandler(keeper Keeper, govKeeper government.Keeper) sdk.Handler {
	return func(ctx sdk.Context, msg sdk.Msg) (*sdk.Result, error) {
		switch msg := msg.(type) {
		case types.MsgSetIdentity:
			return handleMsgSetIdentity(ctx, keeper, msg)
		case types.MsgRequestDidDeposit:
			return handleMsgRequestDidDeposit(ctx, keeper, msg)
		case types.MsgInvalidateDidDepositRequest:
			return handleMsgInvalidateDidDepositRequest(ctx, keeper, govKeeper, msg)
		case types.MsgRequestDidPowerUp:
			return handleMsgRequestDidPowerUp(ctx, keeper, msg)
		case types.MsgInvalidateDidPowerUpRequest:
			return handleMsgInvalidateDidPowerUpRequest(ctx, keeper, govKeeper, msg)
		case types.MsgMoveDeposit:
			return handleMsgMoveDeposit(ctx, keeper, govKeeper, msg)
		case types.MsgPowerUpDid:
			return handleMsgPowerUpDid(ctx, keeper, govKeeper, msg)
		default:
			errMsg := fmt.Sprintf("Unrecognized %s message type: %v", types.ModuleName, msg.Type())
			return sdkErr.Wrap(sdkErr.ErrUnknownRequest, errMsg)
		}
	}
}

// handleMsgSetIdentity allows to handle a MsgSetIdentity checking that the user that wants to set an identity is
// the real owner of that identity.
// If the user is not allowed to use that identity, returns an error.
func handleMsgSetIdentity(ctx sdk.Context, keeper Keeper, msg types.MsgSetIdentity) (*sdk.Result, error) {
	if err := keeper.SaveDidDocument(ctx, types.DidDocument(msg)); err != nil {
		return err
	}

	return sdk.Result{}, nil
}

// ----------------------------
// --- Did deposit requests
// ----------------------------

func handleMsgRequestDidDeposit(ctx sdk.Context, keeper Keeper, msg types.MsgRequestDidDeposit) (*sdk.Result, error) {

	// Create the request
	request := types.DidDepositRequest{
		Recipient:     msg.Recipient,
		Amount:        msg.Amount,
		Proof:         msg.Proof,
		EncryptionKey: msg.EncryptionKey,
		FromAddress:   msg.FromAddress,
	}

	if err := keeper.StoreDidDepositRequest(ctx, request); err != nil {
		return err
	}

	return sdk.Result{}, nil
}

func handleMsgInvalidateDidDepositRequest(ctx sdk.Context, keeper Keeper, govKeeper government.Keeper,
	msg types.MsgInvalidateDidDepositRequest) (*sdk.Result, error) {

	// Check the status
	if msg.Status.Type != types.StatusRejected && msg.Status.Type != types.StatusCanceled {
		return sdkErr.Wrap(sdkErr.ErrUnknownRequest, fmt.Sprintf("Invalid status: %s", msg.Status.Type))
	}

	// Check the signer if status is approved or rejected
	validGovernment := govKeeper.GetGovernmentAddress(ctx).Equals(msg.Editor)
	if msg.Status.Type == types.StatusRejected && !validGovernment {
		msg := fmt.Sprintf("Cannot set status of type %s without being the government", msg.Status.Type)
		return sdkErr.Wrap(sdkErr.ErrInvalidAddress, msg)
	}

	// Get the existing request
	existing, found := keeper.GetDidDepositRequestByProof(ctx, msg.DepositProof)
	if !found {
		msg := fmt.Sprintf("Did deposit request with proof %s not found", msg.DepositProof)
		return sdkErr.Wrap(sdkErr.ErrUnknownRequest, msg)
	}

	// Check the signer if status is canceled
	if msg.Status.Type == types.StatusCanceled && !existing.FromAddress.Equals(msg.Editor) {
		return sdkErr.Wrap(sdkErr.ErrInvalidAddress, "Cannot edit this request without being the original poster")
	}

	// Check that the existing request does not have a status set yet
	if existing.Status != nil {
		msg := fmt.Sprintf("Did deposit request with proof %s already has a valid status", existing.Proof)
		return sdkErr.Wrap(sdkErr.ErrUnknownRequest, msg)
	}

	// Change the status, return any result
	if err := keeper.ChangeDepositRequestStatus(ctx, msg.DepositProof, msg.Status); err != nil {
		return err
	}

	return sdk.Result{}, nil
}

// ----------------------------
// --- Did power up requests
// ----------------------------

func handleMsgRequestDidPowerUp(ctx sdk.Context, keeper Keeper, msg types.MsgRequestDidPowerUp) (*sdk.Result, error) {

	// Crete the request
	request := types.DidPowerUpRequest{
		Claimant:      msg.Claimant,
		Amount:        msg.Amount,
		Proof:         msg.Proof,
		EncryptionKey: msg.EncryptionKey,
	}

	if err := keeper.StorePowerUpRequest(ctx, request); err != nil {
		return err
	}

	return sdk.Result{}, nil
}

func handleMsgInvalidateDidPowerUpRequest(ctx sdk.Context, keeper Keeper, govKeeper government.Keeper,
	msg types.MsgInvalidateDidPowerUpRequest) (*sdk.Result, error) {

	// Check the status
	if msg.Status.Type != types.StatusRejected && msg.Status.Type != types.StatusCanceled {
		return sdkErr.Wrap(sdkErr.ErrUnknownRequest, fmt.Sprintf("Invalid status: %s", msg.Status.Type))
	}

	// Check the signer if status is approved or rejected
	validGovernment := govKeeper.GetGovernmentAddress(ctx).Equals(msg.Editor)
	if msg.Status.Type == types.StatusRejected && !validGovernment {
		msg := fmt.Sprintf("Cannot set status of type %s without being the government", msg.Status.Type)
		return sdkErr.Wrap(sdkErr.ErrInvalidAddress, msg)
	}

	// Get the existing request
	existing, found := keeper.GetPowerUpRequestByProof(ctx, msg.PowerUpProof)
	if !found {
		msg := fmt.Sprintf("Did power up request with proof %s not found", msg.PowerUpProof)
		return sdkErr.Wrap(sdkErr.ErrUnknownRequest, msg)
	}

	// Check the signer if status is canceled
	if msg.Status.Type == types.StatusCanceled && !existing.Claimant.Equals(msg.Editor) {
		return sdkErr.Wrap(sdkErr.ErrInvalidAddress, "Cannot edit this request without being the original poster")
	}

	// Check that the existing request does not have a status set yet
	if existing.Status != nil {
		msg := fmt.Sprintf("Did power up request with proof %s already has a valid status", existing.Proof)
		return sdkErr.Wrap(sdkErr.ErrUnknownRequest, msg)
	}

	// Change the status, return any result
	if err := keeper.ChangePowerUpRequestStatus(ctx, msg.PowerUpProof, msg.Status); err != nil {
		return err
	}

	return sdk.Result{}, nil
}

// ------------------------
// --- Deposits handling
// ------------------------

func handleMsgMoveDeposit(ctx sdk.Context, keeper Keeper, govKeeper government.Keeper, msg types.MsgMoveDeposit) (*sdk.Result, error) {

	// Validate the signer
	if !govKeeper.GetGovernmentAddress(ctx).Equals(msg.Signer) {
		msg := fmt.Sprintf("Invalid signer, must be government: %s", msg.Signer)
		return sdkErr.Wrap(sdkErr.ErrInvalidAddress, msg)
	}

	// Get the existing request
	existing, found := keeper.GetDidDepositRequestByProof(ctx, msg.DepositProof)
	if !found {
		msg := fmt.Sprintf("Deposit request with proof %s not found", msg.DepositProof)
		return sdkErr.Wrap(sdkErr.ErrUnknownRequest, msg)
	}

	// Check that the existing request does not have a status set yet
	if existing.Status != nil {
		msg := fmt.Sprintf("Did deposit request with proof %s already has a valid status", existing.Proof)
		return sdkErr.Wrap(sdkErr.ErrUnknownRequest, msg)
	}

	// Move the deposit amount
	if err := keeper.DepositIntoPool(ctx, existing.FromAddress, existing.Amount); err != nil {
		return err
	}

	// Update the request
	status := types.RequestStatus{Type: types.StatusApproved}
	if err := keeper.ChangeDepositRequestStatus(ctx, existing.Proof, status); err != nil {
		return err
	}

	return sdk.Result{}, nil
}

func handleMsgPowerUpDid(ctx sdk.Context, keeper Keeper, govKeeper government.Keeper, msg types.MsgPowerUpDid) (*sdk.Result, error) {

	// Validate the signer
	if !govKeeper.GetGovernmentAddress(ctx).Equals(msg.Signer) {
		msg := fmt.Sprintf("Invalid signer, must be government: %s", msg.Signer)
		return sdkErr.Wrap(sdkErr.ErrInvalidAddress, msg)
	}

	// Get the existing references
	references := keeper.GetHandledPowerUpRequestsReferences(ctx)
	if references.Contains(msg.ActivationReference) {
		msg := fmt.Sprintf("Power up with reference %s already handled", msg.ActivationReference)
		return sdkErr.Wrap(sdkErr.ErrUnknownRequest, msg)
	}

	// Move the deposit amount
	if err := keeper.FundAccount(ctx, msg.Recipient, msg.Amount); err != nil {
		return err
	}

	// Set the request as handled
	keeper.SetPowerUpRequestHandled(ctx, msg.ActivationReference)

	return sdk.Result{}, nil
}
