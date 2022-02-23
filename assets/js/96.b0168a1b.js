(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{514:function(t,e,a){"use strict";a.r(e);var s=a(56),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"sending-a-document"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sending-a-document"}},[t._v("#")]),t._v(" Sending a document")]),t._v(" "),a("p",[t._v("In order to send a document you are required to have an identity with some tokens inside it.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("To know what an identity is, how to create it and how to get tokens, please refer to the\n"),a("RouterLink",{attrs:{to:"/docs2.2.0/x/id/tx/create-an-identity.html"}},[a("em",[t._v('"Creating an identity"')]),t._v(" section")]),t._v(".")],1)]),t._v(" "),a("h2",{attrs:{id:"transaction-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transaction-message"}},[t._v("#")]),t._v(" Transaction message")]),t._v(" "),a("p",[t._v("In order to properly send a transaction to share a document, you will need to create and sign the\nfollowing message.")]),t._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"commercio/MsgShareDocument"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"value"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sender"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<Sender Did>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"recipients"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<Recipient address>"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"uuid"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<Document UUID>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"content_uri"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<Document content URI>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"metadata"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"content_uri"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<Metadata content URI>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"schema"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"uri"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<Metadata schema definition URI>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<Metadata schema version>"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"schema_type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<Metadata schema type>"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"checksum"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"value"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<Document content checksum value>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"algorithm"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<Document content checksum algorithm>"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"encryption_data"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"keys"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"recipient"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<Recipient address>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"value"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<Encrypted and encoded symmetric key value>"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"encrypted_data"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<Encrypted field identifier>"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"do_sign"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"storage_uri"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"uri://storage"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"signer_instance"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"did S"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sdn_data"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"firstName"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                \n                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lastName"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                \n                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sin"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                \n                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"email"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"vcrId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<identity VCR Identifier"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"certificateProfile"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<one of the profiles supported by S>"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br"),a("span",{staticClass:"line-number"},[t._v("37")]),a("br"),a("span",{staticClass:"line-number"},[t._v("38")]),a("br"),a("span",{staticClass:"line-number"},[t._v("39")]),a("br"),a("span",{staticClass:"line-number"},[t._v("40")]),a("br"),a("span",{staticClass:"line-number"},[t._v("41")]),a("br"),a("span",{staticClass:"line-number"},[t._v("42")]),a("br"),a("span",{staticClass:"line-number"},[t._v("43")]),a("br"),a("span",{staticClass:"line-number"},[t._v("44")]),a("br"),a("span",{staticClass:"line-number"},[t._v("45")]),a("br"),a("span",{staticClass:"line-number"},[t._v("46")]),a("br")])]),a("h3",{attrs:{id:"fields-requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fields-requirements"}},[t._v("#")]),t._v(" Fields requirements")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Field")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Required")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("sender")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("recipients")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("uuid")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("content_uri")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("metadata")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("checksum")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("encryption_data")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")])])])]),t._v(" "),a("h5",{attrs:{id:"metadata"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#metadata"}},[t._v("#")]),t._v(" "),a("code",[t._v("metadata")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Field")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Required")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("content_uri")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("schema_type")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("No *"),a("sup",[t._v("1")]),t._v(" *"),a("sup",[t._v("2")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("schema")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("No *"),a("sup",[t._v("1")])])])])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("*"),a("sup",[t._v("1")]),t._v(" The "),a("code",[t._v("schema_type")]),t._v(" and "),a("code",[t._v("schema")]),t._v(" fields are mutually exclusive.\nThis means that if the first one exists the second will not be used.")])]),t._v(" "),a("li",[a("p",[t._v("*"),a("sup",[t._v("2")]),t._v(" You can read which "),a("code",[t._v("schema_type")]),t._v(" values are supported inside\nthe "),a("RouterLink",{attrs:{to:"/docs2.2.0/x/documents/metadata-schemes.html#supported-metadata-schemes"}},[t._v("supported metadata schemes section")])],1)])]),t._v(" "),a("h6",{attrs:{id:"metadata-schema"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#metadata-schema"}},[t._v("#")]),t._v(" "),a("code",[t._v("metadata.schema")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Field")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Required")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("uri")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("version")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])])])]),t._v(" "),a("h5",{attrs:{id:"checksum"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#checksum"}},[t._v("#")]),t._v(" "),a("code",[t._v("checksum")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Field")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Required")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("value")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("algorithm")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes *"),a("sup",[t._v("1")])])])])]),t._v(" "),a("ul",[a("li",[t._v("*"),a("sup",[t._v("1")]),t._v(" You can read which "),a("code",[t._v("checksum.algorithm")]),t._v(" values are supported inside the\n"),a("a",{attrs:{href:"#supported-checksum-algorithm"}},[t._v("supported checksum algorithms section")])])]),t._v(" "),a("h5",{attrs:{id:"encryption-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#encryption-data"}},[t._v("#")]),t._v(" "),a("code",[t._v("encryption_data")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Field")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Required")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("key")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("encrypted_data")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])])])]),t._v(" "),a("h5",{attrs:{id:"do-sign"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#do-sign"}},[t._v("#")]),t._v(" "),a("code",[t._v("do_sign")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Field")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Required")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("storage_uri")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes ??")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("signer_instance")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("sdn_data")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("vcrId")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("certificateProfile")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes/No ??")])])])]),t._v(" "),a("ul",[a("li",[t._v("storage_uri")]),t._v(" "),a("li",[t._v("signer_instance")]),t._v(" "),a("li",[t._v("sdn_data: contains an array with a list of required fields for Subject Distinguish Name. The names of fields are x509 standard compliant")])]),t._v(" "),a("h2",{attrs:{id:"supported-checksum-algorithm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#supported-checksum-algorithm"}},[t._v("#")]),t._v(" Supported checksum algorithm")]),t._v(" "),a("p",[t._v("When computing the checksum of a document's contents, you must use one of the following supported checksum algorithms."),a("br"),t._v("\nNot using one of these will result in your transaction being rejected or mishandled by recipients.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Algorithm")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Specification")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("md5")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("a",{attrs:{href:"https://www.ietf.org/rfc/rfc1321.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("MD5"),a("OutboundLink")],1)])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("sha-1")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("a",{attrs:{href:"https://tools.ietf.org/html/rfc3174",target:"_blank",rel:"noopener noreferrer"}},[t._v("SHA-1"),a("OutboundLink")],1)])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("sha-224")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("a",{attrs:{href:"https://tools.ietf.org/html/rfc4634",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC 4634"),a("OutboundLink")],1)])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("sha-256")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("a",{attrs:{href:"https://tools.ietf.org/html/rfc4634",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC 4634"),a("OutboundLink")],1)])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("sha-384")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("a",{attrs:{href:"https://tools.ietf.org/html/rfc4634",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC 4634"),a("OutboundLink")],1)])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("sha-512")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("a",{attrs:{href:"https://tools.ietf.org/html/rfc4634",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC 4634"),a("OutboundLink")],1)])])])]),t._v(" "),a("h4",{attrs:{id:"checksum-validity-check"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#checksum-validity-check"}},[t._v("#")]),t._v(" Checksum validity check")]),t._v(" "),a("p",[t._v("Please note that, when sending a document that has an associated checksum, the validity of the checksum itself is\nchecked only formally. This means that we only check that the hash value has a valid length, but we do not check\nif the given has is indeed the hash of the document's content. It should be the client responsibility to perform this\ncheck.")]),t._v(" "),a("h2",{attrs:{id:"encrypting-the-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#encrypting-the-data"}},[t._v("#")]),t._v(" Encrypting the data")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("The following is just an example on how to do file encryption, you're free to use any other algorithm!")])]),t._v(" "),a("p",[t._v("In order to properly encrypting the data that you want to avoid being shared publicly,\nthe following procedure should be followed.")]),t._v(" "),a("p",[t._v("We'll use AES-256 in CBC mode to encrypt a file, and let the recipient decrypt it by sharing with\nit the AES encryption key.")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Generate a safe AES-256 encryption key. A key size of 256 bits is recommended.")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("aes_key = get_random_aes_key(key_size = 256)\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("Use the AES key to encrypt the data you desire using the AES-256 CBC method.")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("encrypted_data = aes_encrypt_cbc(\n  key = aes_key, \n  initialization_vector = null\n)\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("Encrypt the AES-256 key using the recipient's public encryption key")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("encrypted_aes_key = rsa_encrypt(\n  key = recipient.public_rsa_encryption_key,\n  value = aes_key\n)    \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("Encode the encrypted AES-256 key")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("encoded_encryption_key = hex_encode(encrypted_aes_key)\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("Compose the encryption data")]),t._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"encryption_data"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"keys"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"recipient"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<Recipient address>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"value"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<Hex encoded encryption key>"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"encrypted_data"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<Your encrypted data identifier>"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])])])]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("encrypted_data")]),t._v(" field does not contain the encrypted payload itself, but rather denotes what message property is encrypted with "),a("code",[t._v("aes_key")]),t._v(".")]),t._v(" "),a("p",[a("code",[t._v("encrypted_data")]),t._v(" only accepts the following identifiers:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("content_uri")])]),t._v(" "),a("li",[a("code",[t._v("metadata.content_uri")])]),t._v(" "),a("li",[a("code",[t._v("metadata.schema.uri")])])]),t._v(" "),a("p",[t._v("A special identifier, "),a("code",[t._v("content")]),t._v(", can be used to specify that "),a("code",[t._v("aes_key")]),t._v(" has been used to encrypt a file exchanged by other means of communication.")]),t._v(" "),a("h3",{attrs:{id:"supported-encrypted-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#supported-encrypted-data"}},[t._v("#")]),t._v(" Supported encrypted data")]),t._v(" "),a("p",[t._v("Please note that when specifying which data you have encrypted for the document recipient, you need to use one or\nmore of the following identifiers inside the "),a("code",[t._v("encryption_data.encrypted_data")]),t._v(" field."),a("br"),t._v("\nInserting other non supported values inside such a field will result in the transactions being rejected as not valid.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Identifier")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Referenced data")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("content")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Document's file contents")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("content_uri")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Value of the "),a("code",[t._v("content_uri")]),t._v(" field")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("metadata.content_uri")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Value of the "),a("code",[t._v("content_uri")]),t._v(" field inside the "),a("code",[t._v("metadata")]),t._v(" object")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("metadata.schema.uri")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Value of the "),a("code",[t._v("uri")]),t._v(" field inside the "),a("code",[t._v("metadata")]),t._v("'s "),a("code",[t._v("schema")]),t._v(" sub-object")])])])]),t._v(" "),a("h2",{attrs:{id:"action-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#action-type"}},[t._v("#")]),t._v(" Action type")]),t._v(" "),a("p",[t._v("If you want to "),a("RouterLink",{attrs:{to:"/docs2.2.0/developers/listing-transactions.html"}},[t._v("list past transactions")]),t._v(" including this kind of message,\nyou need to use the following "),a("code",[t._v("message.action")]),t._v(" value:")],1),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("shareDocument\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"transaction-cost"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transaction-cost"}},[t._v("#")]),t._v(" Transaction cost")]),t._v(" "),a("p",[t._v("To make sure every person on the network has predictable costs when sending a document, you are required to set\na minimum "),a("code",[t._v("fee.amount")]),t._v(" value inside the transaction when using the "),a("code",[t._v("commercio/MsgShareDocument")]),t._v(" message type.")]),t._v(" "),a("p",[t._v("This minimum fee value is always equivalent at 0.01 euro and can be paid in two different methods:")]),t._v(" "),a("ol",[a("li",[t._v("Using "),a("code",[t._v("10000uccc")]),t._v(", which are millionth of Commercio Cash Credits."),a("br"),t._v("\nIn order to know how to get the Commercio Cash Credits, please refer to the "),a("RouterLink",{attrs:{to:"/docs2.2.0/x/commerciomint/#mint-commercio-cash-credit-ccc"}},[a("em",[t._v('"Opening a Etp"')]),t._v(" page")])],1),t._v(" "),a("li",[t._v("Using the 0.01 euro equivalent of Commercio Tokens."),a("br"),t._v("\nPlease note that the usage of such tokens is discouraged as it is more difficult to properly have an estimate on how\nmany tokens are needed. When using it you should set a 10% more of the minimum tokens required.")])])])}),[],!1,null,null,null);e.default=n.exports}}]);