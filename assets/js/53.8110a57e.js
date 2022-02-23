(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{470:function(t,e,s){"use strict";s.r(e);var a=s(56),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"associating-a-did-document-to-your-identity"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#associating-a-did-document-to-your-identity"}},[t._v("#")]),t._v(" Associating a Did Document to your identity")]),t._v(" "),s("p",[t._v("Being your account address a Did, using the Commercio Network blockchain you can associate to it a Did Document\ncontaining the information that are related to your public (or private) identity."),s("br"),t._v("\nIn order to do so you will need to perform a transaction and so your account must have first received some tokens. To\nknow how to get them, please take a look at the "),s("RouterLink",{attrs:{to:"/docs2.1.2/x/id/tx/create-an-identity.html#using-an-identity"}},[s("em",[t._v('"Using an identity"')]),t._v(" section")]),t._v(".")],1),t._v(" "),s("h2",{attrs:{id:"transaction-message"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transaction-message"}},[t._v("#")]),t._v(" Transaction message")]),t._v(" "),s("p",[t._v("In order to properly send a transaction to set a DID Document associating it to your identity, you will need\nto create and sign the following message:")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"commercio/MsgSetIdentity"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"value"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"@context"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://www.w3.org/ns/did/v1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"did:com:14zk9u8894eg7fhgw0dsesnqzmlrx85ga9rvnjc"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"publicKey"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"did:com:14zk9u8894eg7fhgw0dsesnqzmlrx85ga9rvnjc#keys-1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"RsaVerificationKey2018"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"controller"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"did:com:14zk9u8894eg7fhgw0dsesnqzmlrx85ga9rvnjc"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"publicKeyPem"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-----BEGIN PUBLIC KEY----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDMr3V+Auyc+zvt2qX+jpwk3wM+m2DbfLjimByzQDIfrzSHMTQ8erL0kg69YsXHYXVX9mIZKRzk6VNwOBOQJSsIDf2jGbuEgI8EB4c3q1XykakCTvO3Ku3PJgZ9PO4qRw7QVvTkCbc91rT93/pD3/Ar8wqd4pNXtgbfbwJGviZ6kQIDAQAB-----END PUBLIC KEY-----\\r\\n"')]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"did:com:14zk9u8894eg7fhgw0dsesnqzmlrx85ga9rvnjc#keys-2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"RsaSignature2018"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"controller"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"did:com:14zk9u8894eg7fhgw0dsesnqzmlrx85ga9rvnjc"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"publicKeyPem"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-----BEGIN PUBLIC KEY----MIGfM3TvO3Ku3PJgZ9PO4qRw7+Auyc+zvt2qX+jpwk3wM+m2DbfLjimByzQDIfrzSHMTQ8erL0kg69YsXHYXVX9mIZKRzk6VNwOBOQJSsIDf2jGbuEgI8EB4c3q1XykakCQVvTkCbc9A0GCSqGSIbqd4pNXtgbfbwJGviZ6kQIDAQAB-----END PUBLIC KEY-----\\r\\n"')]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"proof"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"EcdsaSecp256k1VerificationKey2019"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"created"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-02-08T16:02:20Z"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"proofPurpose"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"authentication"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"controller"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"did:com:14zk9u8894eg7fhgw0dsesnqzmlrx85ga9rvnjc"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"verificationMethod"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<did bech32 pubkey>"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"signatureValue"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"QNB13Y7Q91tzjn4w=="')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br")])]),s("h3",{attrs:{id:"value-fields-requirements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#value-fields-requirements"}},[t._v("#")]),t._v(" "),s("code",[t._v("value")]),t._v(" fields requirements")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("Field")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Required")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("@context")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Yes (Must be "),s("code",[t._v("https://www.w3.org/ns/did/v1")]),t._v(")")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("id")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("publicKey")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("proof")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])])])]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("id")]),t._v(" field represents the DID you want to associate the provided identity to.")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("publicKey")]),t._v(" field represents the public keys users can use to communicate safely with you.")]),t._v(" "),s("p",[t._v("Each key "),s("strong",[t._v("must")]),t._v(" have an "),s("code",[t._v("id")]),t._v(" field defined by the concatenation of the content of the "),s("code",[t._v("id")]),t._v(" field, along with a "),s("code",[t._v("#keys-NUMBER")]),t._v(" suffix, where "),s("code",[t._v("NUMBER")]),t._v(" must be an integer.")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("controller")]),t._v(" key field must be equal to the "),s("code",[t._v("id")]),t._v(" field content.")]),t._v(" "),s("p",[t._v("The commercio.network blockchain requires at least two keys, defined in the following way:")]),t._v(" "),s("ul",[s("li",[t._v("key with suffix "),s("code",[t._v("#keys-1")]),t._v(" must be of type "),s("code",[t._v("RsaVerificationKey2018")]),t._v(", and must be a valid RSA PKIX public key;")]),t._v(" "),s("li",[t._v("key with suffix "),s("code",[t._v("#keys-2")]),t._v(" must be of type "),s("code",[t._v("RsaSignature2018")]),t._v(", and must be a valid RSA PKIX public key.")])]),t._v(" "),s("p",[t._v("A "),s("code",[t._v("commercio/MsgSetIdentity")]),t._v(" transaction that "),s("strong",[t._v("doesn't")]),t._v(" meet these requirements will be discarded.")]),t._v(" "),s("h3",{attrs:{id:"proof-fields-requirements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#proof-fields-requirements"}},[t._v("#")]),t._v(" Proof fields requirements")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("Field")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Value")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("type")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("must always be "),s("code",[t._v("EcdsaSecp256k1VerificationKey2019")])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("created")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("creation date in UTC format")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("proofPurpose")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("must always be "),s("code",[t._v("authentication")])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("controller")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("same value specified in the "),s("code",[t._v("id")]),t._v(" field")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("verificationMethod")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("bech32-encoded public key associated with the address specified in the "),s("code",[t._v("id")]),t._v(" field")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("signatureValue")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("see explaination below")])])])]),t._v(" "),s("h3",{attrs:{id:"creating-the-signaturevalue-value"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-the-signaturevalue-value"}},[t._v("#")]),t._v(" Creating the "),s("code",[t._v("signatureValue")]),t._v(" value")]),t._v(" "),s("p",[t._v("In order to create "),s("code",[t._v("signatureValue")]),t._v(", the following steps must be followed")]),t._v(" "),s("ol",[s("li",[t._v("Create a "),s("code",[t._v("value")]),t._v(" JSON as specified earlier, including only the "),s("code",[t._v("@context")]),t._v(", "),s("code",[t._v("id")]),t._v(" and "),s("code",[t._v("publicKey")]),t._v(" fields:")])]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"@context"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://www.w3.org/ns/did/v1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"your DID"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"publicKey"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"your public keys"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("alphabetically sort the "),s("code",[t._v("did_document_unsigned")]),t._v(" and remove all the white spaces and line endings characters.")]),t._v(" "),s("li",[t._v("obtain hash of resulting string bytes using "),s("strong",[t._v("SHA-256")]),t._v(".")]),t._v(" "),s("li",[t._v("sign the result of the hashing process using your DID's public key, which you assigned to the "),s("code",[t._v("verificationMethod")]),t._v(" "),s("code",[t._v("proof")]),t._v(" JSON field")]),t._v(" "),s("li",[t._v("encode the result in "),s("strong",[t._v("base64")]),t._v(" obtaining "),s("code",[t._v("signatureValue")]),t._v(".")])]),t._v(" "),s("p",[t._v("The signature commercio.network accepts is "),s("code",[t._v("EcdsaSecp256k1VerificationKey2019")]),t._v(", which is a type of elliptic-curve signature scheme.")]),t._v(" "),s("p",[t._v("The signature format produced in step 4, must be of the "),s("code",[t._v("r || s")]),t._v(" kind, otherwise the identity creation "),s("strong",[t._v("will")]),t._v(" fail.")]),t._v(" "),s("h2",{attrs:{id:"action-type"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#action-type"}},[t._v("#")]),t._v(" Action type")]),t._v(" "),s("p",[t._v("If you want to "),s("RouterLink",{attrs:{to:"/docs2.1.2/developers/listing-transactions.html"}},[t._v("list past transactions")]),t._v(" including this kind of message,\nyou need to use the following "),s("code",[t._v("message.action")]),t._v(" value:")],1),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("setIdentity\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);