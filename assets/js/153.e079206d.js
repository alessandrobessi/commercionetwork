(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{571:function(e,t,a){"use strict";a.r(t);var r=a(56),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"handling-a-validator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#handling-a-validator"}},[e._v("#")]),e._v(" Handling a validator")]),e._v(" "),a("p",[e._v("Once you've properly set up a "),a("RouterLink",{attrs:{to:"/nodes/validator-node-installation.html"}},[e._v("validator node")]),e._v(", it must be subject to certain rules and certain operations must be carried out to manage it.")],1),e._v(" "),a("h2",{attrs:{id:"downtime-rules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#downtime-rules"}},[e._v("#")]),e._v(" Downtime rules")]),e._v(" "),a("p",[e._v("The node can only stay offline for a certain amount of time."),a("br"),e._v("\nIn the case of "),a("strong",[e._v("Commercio Network")]),e._v(" this period has been fixed at 10,000 blocks lost, approximately corresponding to 17/18 hours.\nValidator must validate at least 5% of the 10,000 blocks.\nIf the node remains offline or fails to produce blocks for a period longer than the limit, it will incur slashing, i.e. an immediate loss of a certain amount of the staked tokens."),a("br"),e._v(" "),a("strong",[e._v('For "Commercio Network" the slashing percentage for downtime is set at '),a("code",[e._v("1%")]),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"double-sign-rules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#double-sign-rules"}},[e._v("#")]),e._v(" Double sign rules")]),e._v(" "),a("p",[e._v("A validator node must be unique on the chain, so only a node can sign with that private key."),a("br"),e._v("\nIf there was another node with the same private key, this would result in a double signature, and therefore an immediate jail entry of the node with no exit possibility."),a("br"),e._v(" "),a("strong",[e._v('For "Commercio Network" the slashing percentage for double sing is set at '),a("code",[e._v("5%")]),e._v(".")]),a("br"),e._v("\nIf you run into double signatures all tokens must be unbond and you must create a new validator node with new private keys.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("The unbond period is 21 days, so is necessary to wait this period to get back in possession of your tokens.")])]),e._v(" "),a("h2",{attrs:{id:"unjail-procedure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unjail-procedure"}},[e._v("#")]),e._v(" Unjail procedure")]),e._v(" "),a("p",[e._v("In case a validator ended up jail for downtime, it is necessary that the wallet that created the validator performs a ujail transaction."),a("br"),e._v("\nThe follow command must be performed")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("commercionetworkd tx slashing "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  unjail "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --from "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your pub addr creator val"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --fees"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("10000ucommercio  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --chain-id"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$CHAINID")]),e._v('"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  -y\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])]),a("p",[a("strong",[e._v("Note")]),e._v(": You can use "),a("code",[e._v("uccc")]),e._v(" tokens instead "),a("code",[e._v("ucommercio")]),e._v(" for the "),a("code",[e._v("fees")]),e._v(" value")]),e._v(" "),a("p",[e._v("If you are using the "),a("strong",[e._v("Ledger device")]),e._v(" you must first connect it to your computer, start the cosmos application and add "),a("code",[e._v("--ledger")]),e._v(" flag to the command.")]),e._v(" "),a("h2",{attrs:{id:"unbond-procedure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unbond-procedure"}},[e._v("#")]),e._v(" Unbond procedure")]),e._v(" "),a("p",[e._v("Tokens can be delegated to any validator to increase its stake."),a("br"),e._v("\nIn case you want to remove all or part of the delegated tokens, an "),a("code",[e._v("unbond transaction")]),e._v(" must be performed."),a("br"),e._v("\nThe undelegated period is "),a("strong",[e._v("21 days")]),e._v(", so is necessary to wait this period to get back in possession of your tokens."),a("br"),e._v("\nTo perform "),a("code",[e._v("unbond transaction")]),e._v(" use the follow command")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("commercionetworkd tx staking "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  unbond "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("validator-operator-addr"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  50000000000ucommercio "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --from "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your pub addr delegator"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --fees"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("10000ucommercio  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --chain-id"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$CHAINID")]),e._v('"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  -y\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br")])]),a("p",[a("strong",[e._v("Note")]),e._v(": You can use "),a("code",[e._v("uccc")]),e._v(" tokens instead "),a("code",[e._v("ucommercio")]),e._v(" for the "),a("code",[e._v("fees")]),e._v(" value")]),e._v(" "),a("p",[e._v("value of "),a("code",[e._v("<validator-operator-addr>")]),e._v(" can be obtain from explorer:")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://testnet.commercio.network/it/validators",target:"_blank",rel:"noopener noreferrer"}},[e._v("Commercio.network explorer Testnet"),a("OutboundLink")],1),e._v("."),a("br"),e._v(" "),a("a",{attrs:{href:"https://mainnet.commercio.network/it/validators",target:"_blank",rel:"noopener noreferrer"}},[e._v("Commercio.network explorer Mainnet"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("If you see your validator in the list click on its name."),a("br"),e._v("\nThe validator tab should have the value "),a("strong",[e._v("Operator")]),e._v(". That value is your "),a("code",[e._v("<validator-operator-addr>")])]),e._v(" "),a("p",[e._v("If you are using the "),a("strong",[e._v("Ledger device")]),e._v(" you must first connect it to your computer, start the cosmos application and add "),a("code",[e._v("--ledger")]),e._v(" flag to the command.")]),e._v(" "),a("h2",{attrs:{id:"redelegate-procedure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redelegate-procedure"}},[e._v("#")]),e._v(" Redelegate procedure")]),e._v(" "),a("p",[e._v("It is possible to perform a procedure of moving tokens in stake from one validator to another through the "),a("code",[e._v("redelegate transaction")]),e._v("."),a("br"),e._v("\nTo perform "),a("code",[e._v("redelegate transaction")]),e._v(" use the follow command")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("commercionetworkd tx staking "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  redelegate "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("source-validator-operator-addr"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("destination-validator-operator-addr"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  50000000000ucommercio "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --from "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your pub addr delegator"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --fees"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("10000ucommercio "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --chain-id"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$CHAINID")]),e._v('"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  -y\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br")])]),a("p",[a("strong",[e._v("Note")]),e._v(": You can use "),a("code",[e._v("uccc")]),e._v(" tokens instead "),a("code",[e._v("ucommercio")]),e._v(" for the "),a("code",[e._v("fees")]),e._v(" value")]),e._v(" "),a("p",[e._v("value of "),a("code",[e._v("<source-validator-operator-addr>")]),e._v(" and "),a("code",[e._v("<destination-validator-operator-addr>")]),e._v(" can be obtains from explorer:")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://testnet.commercio.network/it/validators",target:"_blank",rel:"noopener noreferrer"}},[e._v("Commercio.network explorer Testnet"),a("OutboundLink")],1),e._v("."),a("br"),e._v(" "),a("a",{attrs:{href:"https://mainnet.commercio.network/it/validators",target:"_blank",rel:"noopener noreferrer"}},[e._v("Commercio.network explorer Mainnet"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Search your source validator in the list, i.e. the validator you want to move the tokens from, and click on its name."),a("br"),e._v("\nThe validator tab should have the value "),a("strong",[e._v("Operator")]),e._v(". That value is your "),a("code",[e._v("<source-validator-operator-addr>")]),a("br"),e._v("\nReturn to the list of validators and search your destination validator, i.e. the validator you want to move the tokens to, and click on its name."),a("br"),e._v("\nThe validator tab should have the value "),a("strong",[e._v("Operator")]),e._v(". That value is your "),a("code",[e._v("<destination-validator-operator-addr>")])]),e._v(" "),a("p",[e._v("If you are using the "),a("strong",[e._v("Ledger device")]),e._v(" you must first connect it to your computer, start the cosmos application and add "),a("code",[e._v("--ledger")]),e._v(" flag to the command.")])])}),[],!1,null,null,null);t.default=s.exports}}]);