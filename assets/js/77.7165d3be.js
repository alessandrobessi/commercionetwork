(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{495:function(a,e,t){"use strict";t.r(e);var s=t(56),r=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"becoming-a-validator"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#becoming-a-validator"}},[a._v("#")]),a._v(" Becoming a validator")]),a._v(" "),t("p",[a._v("Once you've properly set up a "),t("RouterLink",{attrs:{to:"/docs2.2.0/nodes/full-node-installation.html"}},[a._v("full node")]),a._v(", if you wish you can become a validator node and\nstart in earning by  validating  the chain transactions.")],1),a._v(" "),t("p",[a._v("Before you start, we recommend that you run the command")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("cncli config chain-id "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$CHAINID")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("In this way you can omit the flag "),t("code",[a._v('--chain-id="$CHAINID"')]),a._v(" in every command of the "),t("strong",[a._v("cncli")])]),a._v(" "),t("h2",{attrs:{id:"requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[a._v("#")]),a._v(" Requirements")]),a._v(" "),t("p",[a._v("If you want to become a Commercio.network validator you need to:")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("Be a full node."),t("br"),a._v("\nIf you are not, please follow the "),t("RouterLink",{attrs:{to:"/docs2.2.0/nodes/full-node-installation.html"}},[a._v("full node installation guide")]),a._v(".")],1)]),a._v(" "),t("li",[t("p",[a._v("Own enough tokens."),t("br"),a._v("\nTo become a validator you need two wallets: one with at least one token to create the validator and another with 50,000 tokens to delegate to the validator node.")])])]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),t("p",[a._v("If you have any problems with the procedure try to read the section "),t("strong",[t("a",{attrs:{href:"#_common-errors"}},[a._v("Common errors")])]),a._v(".")])]),a._v(" "),t("h2",{attrs:{id:"_1-add-wallet-key"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-add-wallet-key"}},[a._v("#")]),a._v(" 1. Add wallet key")]),a._v(" "),t("p",[a._v("Inside the testnet you can use the "),t("strong",[a._v("Ledger")]),a._v(", but you can also use the wallet software with the "),t("code",[a._v("cncli")]),a._v("."),t("br"),a._v("\nHowever, if you wish to use "),t("strong",[a._v("Ledger")]),a._v(", please add the "),t("code",[a._v("--ledger")]),a._v(" flat to any command.")]),a._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),t("p",[a._v("Please remember to copy the 24 words seed phrase in a secure place."),t("br"),a._v("\nThey are your mnemonic and if you loose them you lose all your tokens and the whole access to your validator.")])]),a._v(" "),t("p",[a._v("Create the first wallet with the following command")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("cncli keys "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$NODENAME")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Enter a password that you can remember")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("The output of the command will provide the 24 words that are the mnemonic.")]),a._v(" "),t("p",[a._v("If you are using the "),t("strong",[a._v("Ledger")]),a._v(" device you must first connect it to your computer, start the cosmos application and run the command")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("cncli keys "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$NODENAME")]),a._v(" --ledger\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Enter a password that you can remember")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("In this case the 24 words are not provided because they have already been configured in the "),t("strong",[a._v("Ledger")]),a._v(" initialization")]),a._v(" "),t("p",[a._v("Copy your public address. It should have the format "),t("code",[a._v("did:com:<data>")]),a._v(".")]),a._v(" "),t("p",[a._v("The second wallet must be requested through a message on the "),t("a",{attrs:{href:"https://t.me/commercionetworkvipsTelegram",target:"_blank",rel:"noopener noreferrer"}},[a._v("Telegram group"),t("OutboundLink")],1),a._v(". With a private message will be sent the information of the second wallet.")]),a._v(" "),t("p",[t("strong",[a._v("ATTENTION")]),a._v(": from now on we will refer to the value of your public address of the first wallet as "),t("code",[a._v("<your pub addr creator val>")]),a._v(" notation.\nWe will refer to the second wallet as "),t("code",[a._v("<your pub addr delegator>")]),a._v(" notation.")]),a._v(" "),t("h2",{attrs:{id:"_2-get-the-tokens"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-get-the-tokens"}},[a._v("#")]),a._v(" 2. Get the tokens")]),a._v(" "),t("p",[a._v("To get your tokens inside our mainnet or testnet, you are required to purchase them using an exchange or having received a black card."),t("br"),a._v(" "),t("strong",[a._v("The black card is the wallet "),t("code",[a._v("<your pub addr delegator>")])])]),a._v(" "),t("p",[a._v("Read "),t("a",{attrs:{href:"#1-add-wallet-key"}},[a._v("Add wallet key")]),a._v(" to create your own "),t("code",[a._v("<your pub addr creator val>")]),a._v(".")]),a._v(" "),t("p",[t("strong",[a._v("Use the ledger or another hsm to make a recovery from 24 words for the second wallet "),t("code",[a._v("<your pub addr delegator>")]),a._v(" with the black card.")])]),a._v(" "),t("p",[a._v("Send one token to the "),t("code",[a._v("<your pub addr creator val>")]),a._v(" wallet using the following command")]),a._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),t("p",[a._v("This transaction is expected to be done with an hsm as Ledger. If you are using a Ledger add the "),t("code",[a._v("--ledger")]),a._v(" flag.")])]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("cncli tx send "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("your pub addr delegator"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("your pub addr creator val"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n1110000ucommercio "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--fees"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("10000ucommercio  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--chain-id"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$CHAINID")]),a._v('"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-y\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br")])]),t("p",[a._v("Once you've been confirmed the successful transaction, please check using the following command:")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("cncli query account "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("your pub addr creator val"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --chain-id "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$CHAINID")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("The output should look like this:")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('- denom: ucommercio\n  amount: "1000000"\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("h2",{attrs:{id:"_3-create-a-validator"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-create-a-validator"}},[a._v("#")]),a._v(" 3. Create a validator")]),a._v(" "),t("p",[a._v("Once you have the tokens, you can create a validator. If you want, while doing so you can also specify the following parameters")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("--moniker")]),a._v(": the name you want to assign to your validator. Spaces and special characters are accepted")]),a._v(" "),t("li",[t("code",[a._v("--details")]),a._v(": a brief description about your node or your company")]),a._v(" "),t("li",[t("code",[a._v("--identity")]),a._v(": your "),t("a",{attrs:{href:"https://keybase.io",target:"_blank",rel:"noopener noreferrer"}},[a._v("Keybase"),t("OutboundLink")],1),a._v(" identity")]),a._v(" "),t("li",[t("code",[a._v("--website")]),a._v(": a public website of your node or your company")])]),a._v(" "),t("p",[a._v("The overall command to create a validator is the following:")]),a._v(" "),t("h3",{attrs:{id:"testnet"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#testnet"}},[a._v("#")]),a._v(" Testnet")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("VALIDATOR_PUBKEY")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("cnd tendermint show-validator"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"mainnet"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mainnet"}},[a._v("#")]),a._v(" Mainnet")]),a._v(" "),t("p",[a._v("If you have a "),t("strong",[a._v("kms")]),a._v(" you got the value of the public address in the node from the keys registered in your "),t("strong",[a._v("hsm")]),a._v(". If you have it put that value in the "),t("code",[a._v("pubkey")]),a._v(" transaction parameter for creating the validator")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("VALIDATOR_PUBKEY")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"did:com:valconspub1zcjduepq592mn5xucyqvfrvjegruhnx15rruffkrfq0rryu809fzkgwg684qmetxxs"')]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),t("p",[a._v("Warning: a did address can create one and only one validator and a validator can have one and only one creation address")])]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("cncli tx staking create-validator "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --amount"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("1100000ucommercio "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --pubkey"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$VALIDATOR_PUBKEY")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --moniker"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$NODENAME")]),a._v('"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --chain-id"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$CHAINID")]),a._v('"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --identity"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('""')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --website"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('""')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --details"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('""')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --commission-rate"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"0.10"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --commission-max-rate"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"0.20"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --commission-max-change-rate"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"0.01"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --min-self-delegation"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"1"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --from"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("your pub addr creator val"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --fees"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("10000ucommercio "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  -y\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("##Twice input password required")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br")])]),t("p",[a._v("The output should look like this:")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('height: 0\ntxhash: C41B87615308550F867D42BB404B64343CB62D453A69F11302A68B02FAFB557C\ncodespace: ""\ncode: 0\ndata: ""\nrawlog: \'[]\'\nlogs: []\ninfo: ""\ngaswanted: 0\ngasused: 0\ntx: null\ntimestamp: ""\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br")])]),t("h2",{attrs:{id:"_4-delegate-tokens-to-the-validator"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-delegate-tokens-to-the-validator"}},[a._v("#")]),a._v(" 4. Delegate tokens to the validator")]),a._v(" "),t("h3",{attrs:{id:"confirm-your-validator-is-active"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#confirm-your-validator-is-active"}},[a._v("#")]),a._v(" Confirm your validator is active")]),a._v(" "),t("p",[a._v("Please confirm that your validator is active by running the following command:")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("cncli query staking validators --chain-id "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$CHAINID")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("fgrep")]),a._v(" -B "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$VALIDATOR_PUBKEY")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("The output should look like this:")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("  operatoraddress: did:com:valoper1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n  conspubkey: did:com:valconspub1zcjduepq592mn5xucyqvfrvjegruhnx15rruffkrfq0rryu809fzkgwg684qmetxxs\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("Copy the value of "),t("code",[a._v("operatoraddress")]),a._v(".")]),a._v(" "),t("p",[a._v("You can also verify that the validator is active by browsing the")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://testnet.commercio.network/it/validators",target:"_blank",rel:"noopener noreferrer"}},[a._v("Commercio.network explorer Testnet"),t("OutboundLink")],1),a._v("."),t("br"),a._v(" "),t("a",{attrs:{href:"https://mainnet.commercio.network/it/validators",target:"_blank",rel:"noopener noreferrer"}},[a._v("Commercio.network explorer Mainnet"),t("OutboundLink")],1),a._v(".")]),a._v(" "),t("p",[a._v("If you see your validator in the list click on its name."),t("br"),a._v("\nThe validator tab should have the value "),t("strong",[a._v("Operator")]),a._v(". That value is your "),t("code",[a._v("operatoraddress")])]),a._v(" "),t("p",[a._v("Register the value of "),t("code",[a._v("operatoraddress")]),a._v(".")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("OPERATOR_ADDRESS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"did:com:valoper1zcjx15rruffkrfq0rryu809fzkgwg684qmetxxs"')]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"delegate-tokens"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#delegate-tokens"}},[a._v("#")]),a._v(" Delegate tokens")]),a._v(" "),t("p",[a._v("Once received the second wallet must be loaded on the ledger or keyring through the command")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("cncli keys "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("name of second wallet"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --recover\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("where "),t("code",[a._v("<name of second wallet>")]),a._v(" is an arbitrary name."),t("br"),a._v("\nWhen requested, the 24 keywords must be entered")]),a._v(" "),t("p",[a._v("If you are using the "),t("strong",[a._v("Ledger")]),a._v(" device you must first connect it to your computer, start the cosmos application and run the command")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("cncli keys "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("name of second wallet"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --ledger\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Enter a password that you can remember")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("In this case the 24 words are not provided because they have already been configured in the "),t("strong",[a._v("Ledger")]),a._v(" initialization")]),a._v(" "),t("p",[a._v("Now you can delegate "),t("strong",[a._v("50,000 tokens")]),a._v(" to the validator node")]),a._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),t("p",[a._v("This transaction is expected to be done with an hsm as a "),t("strong",[a._v("Ledger")]),a._v(" device . If you are using a "),t("strong",[a._v("Ledger")]),a._v(" add the "),t("code",[a._v("--ledger")]),a._v(" flag.")])]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("cncli tx staking delegate "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$OPERATOR_ADDRESS")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  50000000000ucommercio "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --from "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("your pub addr delegator"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --chain-id"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$CHAINID")]),a._v('"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --fees"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("10000ucommercio "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  -y\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br")])]),t("p",[a._v("The output should look like this:")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('height: 0\ntxhash: 027B85834DA5486085BC56FFD2759443EFD3101BD1023FA9A681262E5C85A845\ncodespace: ""\ncode: 0\ndata: ""\nrawlog: \'[]\'\nlogs: []\ninfo: ""\ngaswanted: 0\ngasused: 0\ntx: null\ntimestamp: ""\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br")])]),t("p",[t("strong",[a._v("Testnet")]),a._v(" You should now see your validator with 50001 staked tokens inside the "),t("a",{attrs:{href:"https://testnet.commercio.network",target:"_blank",rel:"noopener noreferrer"}},[a._v("Commercio.network explorer testnet"),t("OutboundLink")],1),a._v(" "),t("strong",[a._v("Mainnet")]),a._v(" You should now see your validator with 50001 staked tokens inside the "),t("a",{attrs:{href:"https://mainnet.commercio.network",target:"_blank",rel:"noopener noreferrer"}},[a._v("Commercio.network explorer mainnet"),t("OutboundLink")],1)]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),t("p",[a._v("Congratulations, you are now a Commercio.network validator 🎉")])]),a._v(" "),t("h2",{attrs:{id:"note"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#note"}},[a._v("#")]),a._v(" Note")]),a._v(" "),t("p",[a._v("If you want to make transactions with the "),t("strong",[a._v("Nano Ledger")]),a._v(" from another machine a full node must be created locally or a full node must be configured to accept remote connections."),t("br"),a._v("\nEdit the "),t("code",[a._v(".cnd/config/config.toml")]),a._v(" file by changing from")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('laddr = "tcp://127.0.0.1:26657"\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("to")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('laddr = "tcp://0.0.0.0:26657"\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("and restart your node")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("systemctl restart cnd\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("and use the transaction this way")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("cncli tx staking delegate "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("validator-addr"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  50000000000ucommercio "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --from "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("your pub addr delegator"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --node tcp://"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("ip of your fulle node"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(":26657 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --chain-id"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$CHAINID")]),a._v('"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --fees"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("10000ucommercio "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --ledger "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  -y\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br")])]),t("h2",{attrs:{id:"common-errors"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#common-errors"}},[a._v("#")]),a._v(" Common errors")]),a._v(" "),t("h3",{attrs:{id:"account-does-not-exists"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#account-does-not-exists"}},[a._v("#")]),a._v(" Account does not exists")]),a._v(" "),t("h4",{attrs:{id:"problem"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#problem"}},[a._v("#")]),a._v(" Problem")]),a._v(" "),t("p",[a._v("If I try to search for my address with the command")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("cncli query account did:com:1sl4xupdgsgptr2nr7wdtygjp5cw2dr8ncmdsyp --chain-id "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$CHAINID")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("returns the message")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("ERROR: unknown address: account did:com:1sl4xupdgsgptr2nr7wdtygjp5cw2dr8ncmdsyp does not exist\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h4",{attrs:{id:"solution"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#solution"}},[a._v("#")]),a._v(" Solution")]),a._v(" "),t("p",[a._v("Check if your node has completed the sync.\nOn https://testnet.commercio.network you can view the height of the chain at the current state")]),a._v(" "),t("p",[a._v("Use the command")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('journal -u cnd -f | egrep " cnd+.*Committed state"\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("to check the height that reach your node")]),a._v(" "),t("h3",{attrs:{id:"failed-validator-creation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#failed-validator-creation"}},[a._v("#")]),a._v(" Failed validator creation")]),a._v(" "),t("h4",{attrs:{id:"problem-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#problem-2"}},[a._v("#")]),a._v(" Problem")]),a._v(" "),t("p",[a._v("I executed the validator "),t("a",{attrs:{href:"#_3-create-a-validator"}},[a._v("creation transaction")]),a._v(" but I don't appear in validators explorer page.")]),a._v(" "),t("h4",{attrs:{id:"solution-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#solution-2"}},[a._v("#")]),a._v(" Solution")]),a._v(" "),t("p",[a._v("It may be that by failing one or more transactions the tokens are not sufficient to execute the transaction.")]),a._v(" "),t("p",[a._v("Send more funds to your "),t("code",[a._v("<your pub addr creator val>")]),a._v(" and repeat the validator creation transaction")]),a._v(" "),t("h3",{attrs:{id:"db-errors"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#db-errors"}},[a._v("#")]),a._v(" DB errors")]),a._v(" "),t("h4",{attrs:{id:"problem-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#problem-3"}},[a._v("#")]),a._v(" Problem")]),a._v(" "),t("p",[a._v("Trying to start the rest server or query the chain I get this error")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("panic: Error initializing DB: resource temporarily unavailable\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h4",{attrs:{id:"solution-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#solution-3"}},[a._v("#")]),a._v(" Solution")]),a._v(" "),t("p",[a._v("Maybe "),t("code",[a._v("cnd")]),a._v(" and/or "),t("code",[a._v("cncli")]),a._v(" services have been left active.\nUse the following commands")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("systemctl stop cnd\nsystemctl stop cncli\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("pkill")]),a._v(" -9 cnd\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("pkill")]),a._v(" -9 cncli\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("p",[a._v("and repeat the procedure")])])}),[],!1,null,null,null);e.default=r.exports}}]);