(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{543:function(t,e,s){"use strict";s.r(e);var a=s(56),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"x-did"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#x-did"}},[t._v("#")]),t._v(" x/did")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("did")]),t._v(" module allows the management of "),s("em",[t._v("identitities")]),t._v(" by associating a\nDID document to a "),s("code",[t._v("did:com:")]),t._v(" address.\nThe module is also responsible for the historicization of identities.")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("Commercio.network")]),t._v(" blockchain is the Verifiable Data Registry that should be used to perform DID resolution for the "),s("code",[t._v("did:com:")]),t._v(" method.\nIn fact, the query functionalities of the "),s("code",[t._v("did")]),t._v(" module provide all the necessary information to perform DID resolution for a certain address, requesting:")]),t._v(" "),s("ul",[s("li",[t._v("The latest DID document and the corresponding metadata.")]),t._v(" "),s("li",[t._v("The list of updates to the DID document and corresponding metadata.")])]),t._v(" "),s("h2",{attrs:{id:"creating-an-identity"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-an-identity"}},[t._v("#")]),t._v(" Creating an identity")]),t._v(" "),s("p",[t._v("First of all, let's define what an "),s("strong",[t._v("identity")]),t._v(" is inside the Commercio Network blockchain.")]),t._v(" "),s("blockquote",[s("p",[t._v("An identity is the method used inside the Commercio Network blockchain in order to identify documents' senders and recipients.")])]),t._v(" "),s("p",[t._v("In order to create an identity, you simply have to create a Commercio Network address, which will have the following form:")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("did:com:<unique part>\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("In order to do so, you can use the CLI and execute the following command:")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("commercionetworkd keys "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("key-name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("You will be required to set a password in order to safely store the key on your computer.")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("Please note that password will be later asked you when signing the transactions so be sure you remember it.")])]),t._v(" "),s("p",[t._v("After inserting the password, you will be shown the mnemonic that can be used in order to import your account (and identity) into a wallet.")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('- name: jack\n  type: local\n  address: did:com:13jckgxmj3v8jpqdeq8zxwcyhv7gc3dzmrqqger\n  pubkey: did:com:pub1addwnpepqfdl6s8hdwdya9zvn5wtx8ty3qsqqqd2ddvygc5zutnrryh5x9ju73jdfg8\n  mnemonic: ""\n  threshold: 0\n  pubkeys: []\n\n\n**Important** write this mnemonic phrase in a safe place.\nIt is the only way to recover your account if you ever forget your password.\n\nscorpion what indoor keen topic cricket uphold inch cactus six suffer coin popular honey vendor clown day twin during vague midnight emerge man inform\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br")])]),s("h3",{attrs:{id:"using-an-identity"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-an-identity"}},[t._v("#")]),t._v(" Using an identity")]),t._v(" "),s("p",[t._v("Once you have created it, in order to start performing a transaction with your identity you firstly have to fund your identity.\nEach and every transaction on the blockchain has a cost, and to pay for it you must have some tokens."),s("br"),t._v("\nIf you want to receive some tokens in "),s("strong",[t._v("Test-net")]),t._v(", please use faucet service or tell us inside our "),s("a",{attrs:{href:"https://t.me/commercionetwork",target:"_blank",rel:"noopener noreferrer"}},[t._v("official Telegram group"),s("OutboundLink")],1),t._v("\nand we will send you some as soon as possible.")]),t._v(" "),s("h3",{attrs:{id:"associating-a-did-document-to-your-identity"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#associating-a-did-document-to-your-identity"}},[t._v("#")]),t._v(" Associating a Did Document to your identity")]),t._v(" "),s("p",[t._v("Being your account address a Did, using the Commercio Network blockchain you can associate to it a Did Document containing the information that are related to your public (or private) identity."),s("br"),t._v("\nIn order to do so you will need to perform a transaction and so your account must have first received some tokens.")]),t._v(" "),s("h3",{attrs:{id:"updating-an-identity"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#updating-an-identity"}},[t._v("#")]),t._v(" Updating an identity")]),t._v(" "),s("p",[t._v("Updating an "),s("code",[t._v("Identity")]),t._v(" means appending to the blockchain store a new version of the DID document.\nThe transaction used to associate a DID document can be used to update the Identity.")]),t._v(" "),s("h2",{attrs:{id:"transaction-message"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transaction-message"}},[t._v("#")]),t._v(" Transaction message")]),t._v(" "),s("p",[t._v("In order to properly send a transaction to set a DID Document associating it to your identity, you will need to create and sign the following message:")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"commercio/MsgSetIdentity"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"value"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"didDocument"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@context"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://www.w3.org/ns/did/v1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"verificationMethod"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"controller"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"publicKeyMultiBase"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"controller"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"publicKeyMultiBase"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"authentication"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"assertionMethod"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"keyAgreement"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"capabilityInvocation"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"capabilityDelegation"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"service"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"serviceEndpoint"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br"),s("span",{staticClass:"line-number"},[t._v("33")]),s("br"),s("span",{staticClass:"line-number"},[t._v("34")]),s("br"),s("span",{staticClass:"line-number"},[t._v("35")]),s("br"),s("span",{staticClass:"line-number"},[t._v("36")]),s("br"),s("span",{staticClass:"line-number"},[t._v("37")]),s("br"),s("span",{staticClass:"line-number"},[t._v("38")]),s("br"),s("span",{staticClass:"line-number"},[t._v("39")]),s("br"),s("span",{staticClass:"line-number"},[t._v("40")]),s("br"),s("span",{staticClass:"line-number"},[t._v("41")]),s("br"),s("span",{staticClass:"line-number"},[t._v("42")]),s("br"),s("span",{staticClass:"line-number"},[t._v("43")]),s("br"),s("span",{staticClass:"line-number"},[t._v("44")]),s("br"),s("span",{staticClass:"line-number"},[t._v("45")]),s("br"),s("span",{staticClass:"line-number"},[t._v("46")]),s("br"),s("span",{staticClass:"line-number"},[t._v("47")]),s("br"),s("span",{staticClass:"line-number"},[t._v("48")]),s("br"),s("span",{staticClass:"line-number"},[t._v("49")]),s("br")])]),s("p",[t._v("The message must include a DID document conform to the rules of Decentralized Identitfiers (DIDs) v1.0 plus additional rules defined by commercionetwork.\nPlease refer to "),s("a",{attrs:{href:""}},[t._v("https://www.w3.org/TR/2021/PR-did-core-20210803/")]),t._v(" and to the following requirements.\nA "),s("code",[t._v("commercio/MsgSetIdentity")]),t._v(" transaction that "),s("strong",[t._v("doesn't")]),t._v(" meet these requirements will be discarded.")]),t._v(" "),s("p",[t._v("Fields that are NOT required can be omitted from the message.")]),t._v(" "),s("h3",{attrs:{id:"diddocument-fields-requirements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#diddocument-fields-requirements"}},[t._v("#")]),t._v(" "),s("code",[t._v("didDocument")]),t._v(" fields requirements")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("Field")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Value")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("@context")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v('["https://www.w3.org/ns/did/v1","https://w3id.org/security/suites/ed25519-2018/v1"]')])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("id")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v('"did:com:18h03de6awcjk4u9gaz8s5l0xxl8ulxjctzsytd"')])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("verificationMethod")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Consider the values in the description below")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("authentication")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v('"#keys-authentication"')])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("assertionMethod")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v('"#keys-assertionMethod"')])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("keyAgreement")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v('"#keys-keyAgreement"')])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("capabilityInvocation")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v('"#keys-capabilityInvocation"')])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("capabilityDelegation")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v('"#keys-capabilityDelegation"')])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("service")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Consider the values in the description below")])])])]),t._v(" "),s("h3",{attrs:{id:"verificationmethod-fields-requirements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#verificationmethod-fields-requirements"}},[t._v("#")]),t._v(" "),s("code",[t._v("verificationMethod")]),t._v(" fields requirements")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("Field")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Value")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("id")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v('"did:com:18h03de6awcjk4u9gaz8s5l0xxl8ulxjctzsytdw#keys-1"')])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("type")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v('"RsaVerificationKey2018"')])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("controller")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v('"did:com:18h03de6awcjk4u9gaz8s5l0xxl8ulxjctzsytd"')])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("publicKeyMultiBase")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v('"mMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIB...3awGwIDAQAB"')])])])])]),t._v(" "),s("p",[s("code",[t._v("controller")]),t._v(" must be equal to the DID document "),s("code",[t._v("id")]),t._v(" field.")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("id")]),t._v(" field supports both absolute (e.g. "),s("code",[t._v('"did:com:18h03de6awcjk4u9gaz8s5l0xxl8ulxjctzsytdw#keys-1"')]),t._v(") and relative ("),s("code",[t._v('"#keys-1"')]),t._v(") identifiers.")]),t._v(" "),s("p",[t._v("Supported values for the "),s("code",[t._v("type")]),t._v(" field are: "),s("code",[t._v("Ed25519Signature2018")]),t._v(", "),s("code",[t._v("Ed25519VerificationKey2018")]),t._v(", "),s("code",[t._v("RsaSignature2018")]),t._v(", "),s("code",[t._v("RsaVerificationKey2018")]),t._v(", "),s("code",[t._v("EcdsaSecp256k1Signature2019")]),t._v(", "),s("code",[t._v("EcdsaSecp256k1VerificationKey2019")]),t._v(", "),s("code",[t._v("EcdsaSecp256k1RecoverySignature2020")]),t._v(", "),s("code",[t._v("EcdsaSecp256k1RecoveryMethod2020")]),t._v(", "),s("code",[t._v("JsonWebSignature2020")]),t._v(", "),s("code",[t._v("JwsVerificationKey2020")]),t._v(", "),s("code",[t._v("GpgSignature2020")]),t._v(", "),s("code",[t._v("GpgVerificationKey2020")]),t._v(", "),s("code",[t._v("JcsEd25519Signature2020")]),t._v(", "),s("code",[t._v("JcsEd25519Key2020")]),t._v(", "),s("code",[t._v("BbsBlsSignature2020")]),t._v(", "),s("code",[t._v("BbsBlsSignatureProof2020")]),t._v(", "),s("code",[t._v("Bls12381G1Key2020")]),t._v(", "),s("code",[t._v("Bls12381G2Key2020")]),t._v(".")]),t._v(" "),s("p",[t._v("For more information about the "),s("code",[t._v("publicKeyMultiBase")]),t._v(" field, please refer to "),s("a",{attrs:{href:""}},[t._v("https://tools.ietf.org/id/draft-multiformats-multibase-00.html#rfc.section.2.1")])]),t._v(" "),s("p",[t._v("Additional requirements:")]),t._v(" "),s("ul",[s("li",[t._v("a verification method of type "),s("code",[t._v("RsaVerificationKey2018")]),t._v(" must have the suffix "),s("code",[t._v("#keys-1")]),t._v(" in the "),s("code",[t._v("id")]),t._v(" field, and must be a valid "),s("em",[t._v("RSA PKIX")]),t._v(" public key;")]),t._v(" "),s("li",[t._v("a verification method of type "),s("code",[t._v("RsaSignatureKey2018")]),t._v(", must have the suffix "),s("code",[t._v("#keys-2")]),t._v(" in the "),s("code",[t._v("id")]),t._v(" field, and must be a valid "),s("em",[t._v("RSA PKIX")]),t._v(" public key.")])]),t._v(" "),s("h3",{attrs:{id:"service-fields-requirements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#service-fields-requirements"}},[t._v("#")]),t._v(" "),s("code",[t._v("service")]),t._v(" fields requirements")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("Field")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Value")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("id")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v('"Service001"')])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("type")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v('"agent"')])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("serviceEndpoint")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v('"https://commercio.network/agent/serviceEndpoint/"')])])])])]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("id")]),t._v(" and "),s("code",[t._v("serviceEndpoint")]),t._v(" fields must conform to the rules of RFC3986 for URIs.\nPlease refer to "),s("a",{attrs:{href:""}},[t._v("https://datatracker.ietf.org/doc/html/rfc3986")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"did-resolution"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#did-resolution"}},[t._v("#")]),t._v(" DID Resolution")]),t._v(" "),s("p",[t._v("In "),s("code",[t._v("commercionetwork")]),t._v(", an identity is represented as the history of DID document updates made by a certain address.")]),t._v(" "),s("p",[t._v("Following the latest "),s("a",{attrs:{href:"https://www.w3.org/TR/2021/PR-did-core-20210803/",target:"_blank",rel:"noopener noreferrer"}},[t._v("W3C Decentralized Identifiers (DIDs) v1.0 specification"),s("OutboundLink")],1),t._v(", a DID resolution with no additional options should result in the latest version of the DID document for a certain DID plus additional metadata.")]),t._v(" "),s("p",[t._v("Querying for an "),s("code",[t._v("Identity")]),t._v(" means asking for the most recent version of the "),s("code",[t._v("DidDocument")]),t._v(", along with the associated "),s("code",[t._v("Metadata")]),t._v(".\nThe result will be an "),s("code",[t._v("Identity")]),t._v(" made of two fields:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("DidDocument")]),t._v(" - the stored DID document JSON-LD representation")]),t._v(" "),s("li",[s("code",[t._v("Metadata")]),t._v(" - including the "),s("code",[t._v("Created")]),t._v(" and "),s("code",[t._v("Updated")]),t._v(" timestamps")])]),t._v(" "),s("h3",{attrs:{id:"historicization"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#historicization"}},[t._v("#")]),t._v(" Historicization")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("did")]),t._v(" module has been updated to support the historicization of DID documents.\nA DID document can be updated and its previous versions should remain accessible.")]),t._v(" "),s("p",[t._v("Querying for an "),s("code",[t._v("IdentityHistory")]),t._v(" means asking for the list of updates to an "),s("code",[t._v("Identity")]),t._v(", sorted in chronological order.")])])}),[],!1,null,null,null);e.default=n.exports}}]);