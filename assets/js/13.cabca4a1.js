(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{427:function(e,t,o){"use strict";o.r(t);var n=o(56),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"the-commercio-network-blockchain-documentation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#the-commercio-network-blockchain-documentation"}},[e._v("#")]),e._v(" The Commercio.network Blockchain Documentation")]),e._v(" "),o("p",[e._v("Commercio.network is an "),o("a",{attrs:{href:"https://github.com/commercionetwork",target:"_blank",rel:"noopener noreferrer"}},[e._v("Open Source Blockchain"),o("OutboundLink")],1),e._v(" that allows people to create:")]),e._v(" "),o("ul",[o("li",[e._v("eID  electronic identities")]),e._v(" "),o("li",[e._v("eSignatures electronic signature")]),e._v(" "),o("li",[e._v("eDelivery  certified delivery")])]),e._v(" "),o("p",[e._v("Anyone can exchange electronic documents in a legally binding way thanks to our eIDAS Compliance.")]),e._v(" "),o("h2",{attrs:{id:"what-is-a-blockchain"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#what-is-a-blockchain"}},[e._v("#")]),e._v(" What is a blockchain ?")]),e._v(" "),o("p",[e._v("A blockchain is a big distributed database. Think of it as a huge spreadsheet runned simultaneously on millions of worldwide computers. It’s a peer to peer network of nodes where you can settle transactions without the need of any trusted third party.")]),e._v(" "),o("p",[e._v("A node is a computer that is running the Commercio.network node software\nit is connected to other computers on the same network and there are two kind of nodes:")]),e._v(" "),o("ul",[o("li",[o("p",[o("strong",[e._v("Full node")]),e._v(" Full nodes are nodes that stores the whole transaction history. They connect to the blockchain and each time a new block is finalized, they write it on their hard disk. This means that being a full node you will be able to read the whole chain transaction history, you will need to have a large hard disk space if you want to keep it running.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Validator node")]),e._v("  Validator nodes are  full nodes with the added ability of validating new transactions that should be added to the chain. In order to do so, they possess a private key with which they sign the transactions marking them as valid. In exchange of their work, they get  a reward that is given to them each time a new block is created.")])])]),e._v(" "),o("h2",{attrs:{id:"what-is-the-the-software-that-allow-this-blockchain-to-exist"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#what-is-the-the-software-that-allow-this-blockchain-to-exist"}},[e._v("#")]),e._v(" What is the the software that allow this blockchain to exist ?")]),e._v(" "),o("p",[o("code",[e._v("cn")]),e._v(" is the name of the "),o("a",{attrs:{href:"https://commercio.network",target:"_blank",rel:"noopener noreferrer"}},[e._v("Commercio.network"),o("OutboundLink")],1),e._v(" blockchain application."),o("br"),e._v("\nIt is shipped with "),o("code",[e._v("commercionetworkd")]),e._v(": The Commercio.network software provide daemon to runs a full-node of the "),o("code",[e._v("cn")]),e._v(" application and the command-line interface, which enables interaction with a Commercio.network full-node.")]),e._v(" "),o("p",[o("code",[e._v("cn")]),e._v(" is built on top of the "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos SDK"),o("OutboundLink")],1),e._v(" using the following modules:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("x/auth")]),e._v(": Accounts and signatures.")]),e._v(" "),o("li",[o("code",[e._v("x/bank")]),e._v(": Tokens transfers.")]),e._v(" "),o("li",[o("code",[e._v("x/staking")]),e._v(": Staking logic.")]),e._v(" "),o("li",[o("code",[e._v("x/distribution")]),e._v(": Fee distribution logic.")]),e._v(" "),o("li",[o("code",[e._v("x/slashing")]),e._v(": Slashing logic.")]),e._v(" "),o("li",[o("code",[e._v("x/params")]),e._v(": Handles app-level parameters.")]),e._v(" "),o("li",[o("code",[e._v("x/ibc")]),e._v(": (wip).")]),e._v(" "),o("li",[o("code",[e._v("x/wasm")]),e._v(": (wip).")])]),e._v(" "),o("p",[e._v("On top of that "),o("code",[e._v("cn")]),e._v(" comes with the following custom modules:")]),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/modules/ante/"}},[o("code",[e._v("x/ante")])]),e._v(": Custom fees.")],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/modules/documents/"}},[o("code",[e._v("x/documents")])]),e._v(": Documents sharing.")],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/modules/did/"}},[o("code",[e._v("x/did")])]),e._v(": Self sovereign  identities creation.")],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/modules/government/"}},[o("code",[e._v("x/government")])]),e._v(": On-chain government.")],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/modules/commerciokyc/"}},[o("code",[e._v("x/commerciokyc")])]),e._v(": Invite new members and get ABR rewards.")],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/modules/commerciomint/"}},[o("code",[e._v("x/commerciomint")])]),e._v(": Mint CCCs.")],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/modules/vbr/"}},[o("code",[e._v("x/vbr")])]),e._v(": Run Validator nodes and get VBR rewards")],1)]),e._v(" "),o("h3",{attrs:{id:"can-i-run-this-cn-node-software"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#can-i-run-this-cn-node-software"}},[e._v("#")]),e._v(" Can I run this "),o("code",[e._v("cn")]),e._v(" Node software ?")]),e._v(" "),o("p",[e._v("Sure. Please follow the step by step instructions on Running Nodes")]),e._v(" "),o("h3",{attrs:{id:"how-can-i-develop-an-app-on-commercio-network"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-can-i-develop-an-app-on-commercio-network"}},[e._v("#")]),e._v(" How can I develop an app on commercio.Network ?")]),e._v(" "),o("p",[o("strong",[e._v("API")])]),e._v(" "),o("p",[e._v("The EASY WAY is to signup to "),o("a",{attrs:{href:"https://commercio.app",target:"_blank",rel:"noopener noreferrer"}},[e._v("commercio.app"),o("OutboundLink")],1),e._v(" and use the CommercioAPI. You can start developing blockchain solutions in minutes with the programming language you are most familiar.")]),e._v(" "),o("p",[e._v("The CommmercioAPI removes the complexity and the security of managing your users' wallets.")]),e._v(" "),o("p",[o("strong",[e._v("SDK")])]),e._v(" "),o("p",[e._v("Sdks are deprecated e no longer mantained. If you want to move forward the develop of the follow packages you can fork them and pull request upgrades.")]),e._v(" "),o("p",[e._v("We have released SDK in 4 main languages")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th"),e._v(" "),o("th",[e._v("Dart/Flutter")]),e._v(" "),o("th",[e._v("Kotlin/Java")]),e._v(" "),o("th",[e._v("C#/Dot.net")]),e._v(" "),o("th",[e._v("GoLang")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[o("strong",[e._v("Sacco")])]),e._v(" "),o("td",[o("a",{attrs:{href:"https://github.com/commercionetwork/sacco.dart",target:"_blank",rel:"noopener noreferrer"}},[e._v("Repo"),o("OutboundLink")],1)]),e._v(" "),o("td",[o("a",{attrs:{href:"https://github.com/commercionetwork/sacco.kt",target:"_blank",rel:"noopener noreferrer"}},[e._v("Repo"),o("OutboundLink")],1)]),e._v(" "),o("td",[o("a",{attrs:{href:"https://github.com/commercionetwork/sacco.cs",target:"_blank",rel:"noopener noreferrer"}},[e._v("Repo"),o("OutboundLink")],1)]),e._v(" "),o("td",[o("a",{attrs:{href:"https://github.com/commercionetwork/sacco.go",target:"_blank",rel:"noopener noreferrer"}},[e._v("Repo"),o("OutboundLink")],1)])]),e._v(" "),o("tr",[o("td",[o("strong",[e._v("CommercioSDK")])]),e._v(" "),o("td",[o("a",{attrs:{href:"https://github.com/commercionetwork/commercio-sdk.dart",target:"_blank",rel:"noopener noreferrer"}},[e._v("Repo"),o("OutboundLink")],1)]),e._v(" "),o("td",[o("a",{attrs:{href:"https://github.com/commercionetwork/commercio-sdk.kt",target:"_blank",rel:"noopener noreferrer"}},[e._v("Repo"),o("OutboundLink")],1)]),e._v(" "),o("td",[o("a",{attrs:{href:"https://github.com/commercionetwork/commercio-sdk.cs",target:"_blank",rel:"noopener noreferrer"}},[e._v("Repo"),o("OutboundLink")],1)]),e._v(" "),o("td",[e._v("Later")])])])]),e._v(" "),o("h2",{attrs:{id:"what-is-eidas-compliance"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#what-is-eidas-compliance"}},[e._v("#")]),e._v(" What is eIDAS Compliance ?")]),e._v(" "),o("p",[e._v("The eIDAS directive (Electronic Identification, Authentication and Trust Services) is an EU regulation on electronic identification and trust services for electronic transactions in the European Single Market.")]),e._v(" "),o("p",[e._v("The eIDAS org oversees electronic identification and trust services for electronic transactions in the European Union's internal market. It regulates electronic signatures, electronic transactions, involved bodies, and their embedding processes to provide a safe way for users to conduct business online like electronic funds transfer or transactions with public services. Both the signatory and the recipient can have more convenience and security. Instead of relying on traditional methods, such as appearing in person to submit paper-based documents, they may now perform transactions across borders.")]),e._v(" "),o("h3",{attrs:{id:"the-advantage-of-using-a-eidas-compliant-blockchain"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#the-advantage-of-using-a-eidas-compliant-blockchain"}},[e._v("#")]),e._v(" The advantage of using a eIDAS Compliant blockchain")]),e._v(" "),o("p",[e._v("According to Article 25.1 of the eIDAS Regulation, a standard electronic signature may not be denied legal effect and admissibility as evidence in legal proceedings solely on the grounds that it is in an electronic form or that it does not meet the requirements for qualified electronic signatures.")]),e._v(" "),o("h2",{attrs:{id:"the-commercio-token-com"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#the-commercio-token-com"}},[e._v("#")]),e._v(" The Commercio Token (COM)")]),e._v(" "),o("p",[e._v("Commercio.network is a sovereign network that has its own native crypto currency which serves for:")]),e._v(" "),o("ul",[o("li",[e._v("Incentivize users to manage the nodes of this network")]),e._v(" "),o("li",[e._v("Incentivize users to grow this network by inviting other users.")])]),e._v(" "),o("p",[e._v("Through this Token all active participants can benefit from the growth of the network.")]),e._v(" "),o("p",[e._v("The Commercio Token (COM) in not inflationary since it has a 60 million limited supply")]),e._v(" "),o("ul",[o("li",[e._v("The main purpose of the Token is to be a unit of value that can be placed on stake to secure the network of Commercio.network by the validators nodes It is a STAKING TOKEN (utility Token)")]),e._v(" "),o("li",[e._v("The price is VARIABLE and is determined according supply and demand by the market")])]),e._v(" "),o("h2",{attrs:{id:"the-commercio-cash-credit-ccc"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#the-commercio-cash-credit-ccc"}},[e._v("#")]),e._v(" The Commercio Cash Credit (CCC)")]),e._v(" "),o("p",[e._v("Commercio.network  is an Enterprise-grade third generation blockchain that removes some complexity problems of second generation blockchain like BitCoin or Ethereum:")]),e._v(" "),o("p",[o("strong",[e._v("Any transaction Cost on our chain is defined in EURO and it costs €0.01 which makes it maybe the first StableChain in history.")])]),e._v(" "),o("p",[e._v("Through this Token all active participants can benefit from the growth of the network.")]),e._v(" "),o("p",[e._v("The Commercio Cash Credit (CCC)  ha an unlimited supply and can be minted only by freezing the COM Token")]),e._v(" "),o("ul",[o("li",[e._v("The main purpose of the Token is to be a unit of value that can be used to perform transazction on chain. It is a FEE TOKEN (utility Token)")]),e._v(" "),o("li",[e._v("The price is FIXED and is 1 EURO/CCC + VAT")])]),e._v(" "),o("p",[o("strong",[e._v("NB")]),e._v(": tansaction fees could be paid with COM, but the cost is fixed to 0.01 COM.")]),e._v(" "),o("h2",{attrs:{id:"test-net-vs-main-net"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#test-net-vs-main-net"}},[e._v("#")]),e._v(" Test-net Vs Main-Net")]),e._v(" "),o("h2",{attrs:{id:"the-test-net"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#the-test-net"}},[e._v("#")]),e._v(" The Test-Net")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://testnet.commercio.network",target:"_blank",rel:"noopener noreferrer"}},[e._v("testnet.commercio.network"),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("Testnet, as the name suggests, is an alternative network for the developers for testing purposes. You can view a testnet as a demo network for experimenting. It’s like the beta stage of a blockchain network. A testnet is a blockchain made available for developers. It allows anyone to conduct experiments without wasting real tokens. A testnet is like a demo network where tokens do not have any value You can easily test out any app on a testnet because it provides you a sandbox environment separate from the main blockchain.")]),e._v(" "),o("h2",{attrs:{id:"the-main-net"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#the-main-net"}},[e._v("#")]),e._v(" The Main-net")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://mainnet.commercio.network",target:"_blank",rel:"noopener noreferrer"}},[e._v("mainnet.commercio.network"),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("Mainnet is the complete opposite of the testnet. Mainnet is the main blockchain of Commercio.network. If someone says Commercio mainnet, it means the real Commercio.network blockchain.")]),e._v(" "),o("p",[e._v("Unlike testnet which is an open network for testing purposes, mainnet is the real deal. Tokens on the Commercio.network mainnet have real economic value, be carefull.")])])}),[],!1,null,null,null);t.default=a.exports}}]);