(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{511:function(t,e,a){"use strict";a.r(e);var s=a(56),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"adding-a-metadata-schema-as-officially-supported"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-a-metadata-schema-as-officially-supported"}},[t._v("#")]),t._v(" Adding a metadata schema as officially supported")]),t._v(" "),a("p",[t._v("When "),a("RouterLink",{attrs:{to:"/docs2.2.0/x/documents/tx/send-document.html"}},[t._v("sharing a document")]),t._v(", you have the option to specify an officially recognized metadata schema\nusing the "),a("code",[t._v("schema_type")]),t._v(" field.")],1),t._v(" "),a("p",[t._v("In this page we describe how to add a new schema specification as officially recognized.")]),t._v(" "),a("h2",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),a("p",[t._v("First of all, you need to be an "),a("strong",[t._v("trusted metadata schema proposer")]),t._v(". If you wish to become one, please refer\nto the "),a("RouterLink",{attrs:{to:"/docs2.2.0/x/documents/trusted-metadata-schema-proposers.html"}},[t._v("proper page")]),t._v(".")],1),t._v(" "),a("p",[t._v("If you have more than one account that is a trusted schema proposer, you can use whichever you want.")]),t._v(" "),a("h2",{attrs:{id:"transaction-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transaction-message"}},[t._v("#")]),t._v(" Transaction message")]),t._v(" "),a("p",[t._v("In order to add a metadata schema as officially recognized, you need to use the\n"),a("code",[t._v("commercio/MsgAddSupportedMetadataSchema")]),t._v(" message:")]),t._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"commercio/MsgAddSupportedMetadataSchema"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"value"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"signer"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<Proposal signer>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"schema"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<Unique metadata schema type>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"schema_uri"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<Uri linking to the schema definition>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<Version of the schema>"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("h3",{attrs:{id:"fields-requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fields-requirements"}},[t._v("#")]),t._v(" Fields requirements")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Field")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Required")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("signer")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes *"),a("sup",[t._v("1")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("schema")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])])])]),t._v(" "),a("ul",[a("li",[t._v("*"),a("sup",[t._v("1")]),t._v(" The "),a("code",[t._v("signer")]),t._v(" value should be the address of the account used to sign the transaction,\nwhich should also be a "),a("strong",[t._v("trusted metadata schema proposer")]),t._v(". Read the "),a("a",{attrs:{href:"#requirements"}},[t._v("requirements")]),t._v(" for more details.")])]),t._v(" "),a("h4",{attrs:{id:"metadata"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#metadata"}},[t._v("#")]),t._v(" "),a("code",[t._v("metadata")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Field")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Required")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("type")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("schema_uri")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("version")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])])])]),t._v(" "),a("h2",{attrs:{id:"action-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#action-type"}},[t._v("#")]),t._v(" Action type")]),t._v(" "),a("p",[t._v("If you want to "),a("RouterLink",{attrs:{to:"/docs2.2.0/developers/listing-transactions.html"}},[t._v("list past transactions")]),t._v(" including this kind of message,\nyou need to use the following "),a("code",[t._v("message.action")]),t._v(" value:")],1),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("addSupportedMetadataSchema\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);