package types

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/assert"
)

var validService = Service{
	ID:              "https://bar.example.com",
	Type:            "agent",
	ServiceEndpoint: "https://commerc.io/agent/serviceEndpoint/",
}

func TestService_isValid(t *testing.T) {

	tests := []struct {
		name    string
		service func() *Service
		wantErr bool
	}{
		{
			"valid",
			func() *Service {
				return &validService
			},
			false,
		},
		{
			"not defined",
			func() *Service {
				return nil
			},
			true,
		},
		{
			"{ID} empty",
			func() *Service {
				service := validService
				service.ID = ""
				return &service
			},
			true,
		},
		{
			"{ID} against the rules of RFC3986",
			func() *Service {
				service := validService
				service.ID = "$" + validService.ID
				return &service
			},
			true,
		},
		{
			"{type} empty",
			func() *Service {
				service := validService
				service.Type = ""
				return &service
			},
			true,
		},
		{
			"{serviceEndpoint} empty",
			func() *Service {
				service := validService
				service.ServiceEndpoint = ""
				return &service
			},
			true,
		},
		{
			"{serviceEndpoint} against the rules of RFC3986",
			func() *Service {
				service := validService
				service.ServiceEndpoint = "$" + validService.ServiceEndpoint
				return &service
			},
			true,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if err := tt.service().isValid(); (err != nil) != tt.wantErr {
				t.Errorf("Service.isValid() for service %s error = %v, wantErr %v", tt.service(), err, tt.wantErr)
			}
		})
	}
}

var validVerificationMethodRsaVerificationKey2018 = VerificationMethod{
	ID:                 didSubject + RsaVerificationKey2018NameSuffix,
	Type:               RsaVerificationKey2018,
	Controller:         didSubject,
	PublicKeyMultibase: "m" + "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDMr3V+Auyc+zvt2qX+jpwk3wM+m2DbfLjimByzQDIfrzSHMTQ8erL0kg69YsXHYXVX9mIZKRzk6VNwOBOQJSsIDf2jGbuEgI8EB4c3q1XykakCTvO3Ku3PJgZ9PO4qRw7QVvTkCbc91rT93/pD3/Ar8wqd4pNXtgbfbwJGviZ6kQIDAQAB",
}

var validVerificationMethodRsaSignature2018 = VerificationMethod{
	ID:                 didSubject + RsaSignature2018NameSuffix,
	Type:               RsaSignature2018,
	Controller:         didSubject,
	PublicKeyMultibase: "H3C2AVvLMv6gmMNam3uVAjZpfkcJCwDwnZn6z3wXmqPV",
}

func TestVerificationMethod_isValid(t *testing.T) {

	tests := []struct {
		name               string
		verificationMethod func() *VerificationMethod
		wantErr            bool
	}{
		{
			"valid",
			func() *VerificationMethod {
				return &validVerificationMethodRsaVerificationKey2018
			},
			false,
		},
		{
			"not defined",
			func() *VerificationMethod {
				return nil
			},
			true,
		},
		{
			"{ID} empty",
			func() *VerificationMethod {
				verificationMethod := validVerificationMethodRsaVerificationKey2018
				verificationMethod.ID = ""
				return &verificationMethod
			},
			true,
		},
		{
			"{ID} against the DID url specification",
			func() *VerificationMethod {
				verificationMethod := validVerificationMethodRsaVerificationKey2018
				verificationMethod.ID = "$" + validVerificationMethodRsaVerificationKey2018.ID
				return &verificationMethod
			},
			true,
		},
		{
			"{type} empty",
			func() *VerificationMethod {
				verificationMethod := validVerificationMethodRsaVerificationKey2018
				verificationMethod.Type = ""
				return &verificationMethod
			},
			true,
		},
		{
			"{type} not supported",
			func() *VerificationMethod {
				verificationMethod := validVerificationMethodRsaVerificationKey2018
				verificationMethod.Type = "NotSupported2077"
				return &verificationMethod
			},
			true,
		},
		{
			"{type} and {ID} mismatch for " + RsaVerificationKey2018,
			func() *VerificationMethod {
				verificationMethod := validVerificationMethodRsaVerificationKey2018
				verificationMethod.ID = didSubject + RsaSignature2018NameSuffix
				return &verificationMethod
			},
			true,
		},
		{
			"{type} and {ID} mismatch for " + RsaSignature2018,
			func() *VerificationMethod {
				verificationMethod := validVerificationMethodRsaSignature2018
				verificationMethod.ID = didSubject + RsaVerificationKey2018NameSuffix
				return &verificationMethod
			},
			true,
		},
		{
			"{controller} empty",
			func() *VerificationMethod {
				verificationMethod := validVerificationMethodRsaVerificationKey2018
				verificationMethod.Controller = ""
				return &verificationMethod
			},
			true,
		},
		{
			"{controller} against the DID specification",
			func() *VerificationMethod {
				verificationMethod := validVerificationMethodRsaVerificationKey2018
				verificationMethod.Controller = "$" + didSubject
				return &verificationMethod
			},
			true,
		},
		{
			"{controller} different from subject",
			func() *VerificationMethod {
				verificationMethod := validVerificationMethodRsaVerificationKey2018
				verificationMethod.Controller = didNoSubject
				return &verificationMethod
			},
			true,
		},
		{
			"{publicKeyMultibase} empty",
			func() *VerificationMethod {
				verificationMethod := validVerificationMethodRsaVerificationKey2018
				verificationMethod.PublicKeyMultibase = ""
				return &verificationMethod
			},
			true,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			assert.NotEqual(t, didSubject, didNoSubject)
			if err := tt.verificationMethod().isValid(didSubject); (err != nil) != tt.wantErr {
				t.Errorf("VerificationMethod.isValid() for verificationMethod %s error = %v, wantErr %v", tt.verificationMethod(), err, tt.wantErr)
			}
		})
	}
}

const didSubject = "did:com:14zk9u8894eg7fhgw0dsesnqzmlrx85ga9rvnjc"
const didNoSubject = "did:com:18h03de6awcjk4u9gaz8s5l0xxl8ulxjctzsytd"

func Test_isValidDidCom(t *testing.T) {

	tests := []struct {
		name    string
		did     string
		wantErr bool
	}{
		{"didSubject", didSubject, false},
		{"didNoSubject", didNoSubject, false},
		{"not valid suffix", didSubject + "$", true},
		{"not valid prefix", "$" + didSubject, true},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if err := isValidDidCom(tt.did); (err != nil) != tt.wantErr {
				t.Errorf("isValidDidCom() error = %v, wantErr %v", err, tt.wantErr)
			}
		})
	}
}

// package initialization for correct validation of commercionetwork addresses
func init() {
	AccountAddressPrefix := "did:com:"
	AccountPubKeyPrefix := AccountAddressPrefix + "pub"
	ValidatorAddressPrefix := AccountAddressPrefix + "valoper"
	ValidatorPubKeyPrefix := AccountAddressPrefix + "valoperpub"
	ConsNodeAddressPrefix := AccountAddressPrefix + "valcons"
	ConsNodePubKeyPrefix := AccountAddressPrefix + "valconspub"
	config := sdk.GetConfig()
	config.SetBech32PrefixForAccount(AccountAddressPrefix, AccountPubKeyPrefix)
	config.SetBech32PrefixForValidator(ValidatorAddressPrefix, ValidatorPubKeyPrefix)
	config.SetBech32PrefixForConsensusNode(ConsNodeAddressPrefix, ConsNodePubKeyPrefix)
	config.Seal()
}
