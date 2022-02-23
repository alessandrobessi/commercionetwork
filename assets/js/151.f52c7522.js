(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{569:function(s,t,e){"use strict";e.r(t);var a=e(56),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"installing-a-full-node"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installing-a-full-node"}},[s._v("#")]),s._v(" Installing a full node")]),s._v(" "),e("p",[s._v("After you've setup your hardware following the "),e("RouterLink",{attrs:{to:"/nodes/hardware-requirements.html"}},[s._v("hardware requirements")]),s._v(" you are now ready to\nbecome a Commercio.network full node.")],1),s._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),e("p",[s._v("Make sure you have read the "),e("RouterLink",{attrs:{to:"/nodes/hardware-requirements.html"}},[s._v("hardware requirements")]),s._v(" before starting")],1)]),s._v(" "),e("h2",{attrs:{id:"_1-installing-the-software-requirements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-installing-the-software-requirements"}},[s._v("#")]),s._v(" 1. Installing the software requirements")]),s._v(" "),e("p",[s._v("In order to update the OS so that you can work properly, execute the following commands:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" update "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" upgrade -y\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" gcc "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("unzip")]),s._v("\nsnap "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --classic go\n\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NODENAME")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<your-moniker>"')]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'export GOPATH=\"$HOME/go\"'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.profile\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'export PATH=\"$GOPATH/bin:$PATH\"'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.profile\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'export PATH=\"$PATH:/snap/bin\"'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.profile\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"export NODENAME='),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$NODENAME")]),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v('"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.profile\n\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.profile\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("h2",{attrs:{id:"_2-chain-selection"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-chain-selection"}},[s._v("#")]),s._v(" 2. Chain selection")]),s._v(" "),e("p",[s._v("Before installing the node, please select which chain you would like to connect to (for example "),e("strong",[s._v("testent11k")]),s._v(")")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf commercio-chains\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" commercio-chains "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" commercio-chains\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/commercionetwork/chains.git "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" commercio-"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("chain-version"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),e("p",[s._v("Always remember to pick the latest chain version listed inside "),e("a",{attrs:{href:"https://github.com/commercionetwork/chains",target:"_blank",rel:"noopener noreferrer"}},[s._v("chains repo"),e("OutboundLink")],1)])]),s._v(" "),e("h2",{attrs:{id:"_3-install-binaries-genesis-file-and-setup-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-install-binaries-genesis-file-and-setup-configuration"}},[s._v("#")]),s._v(" 3. Install binaries, genesis file and setup configuration")]),s._v(" "),e("p",[s._v("Compile binaries")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("pkill")]),s._v(" commercionetworkd\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" \n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" origin https://github.com/commercionetwork/commercionetwork.git\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout tags/"),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" .data "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -oP "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Release\\s+\\K\\S+'")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\ngo mod verify\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("Test if you have the correct binaries version:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("commercionetworkd version\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Should output the same version written inside the .data file.")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat .data | grep -oP 'Release\\s+\\K\\S+'")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("Setup the validator node name. We will use the same name for node as well as the wallet key:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CHAINID")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("commercio-"),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" .data "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -oP "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Name\\s+\\K\\S+'")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF"),e("span",{pre:!0,attrs:{class:"token bash punctuation"}},[s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.profile")]),s._v('\nexport CHAINID="'),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$CHAINID")]),s._v('"\nEOF')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("Init the "),e("code",[s._v(".commercionetwork")]),s._v(" folder with the basic configuration")]),s._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),e("p",[s._v("At this point there may be some differences if you are using "),e("code",[s._v("KMS")]),s._v(" with "),e("code",[s._v("HSM")]),s._v(". Specifications will be published shortly.")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("commercionetworkd unsafe-reset-all\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# If you get a error because .commercionetwork folder is not present don't worry ")]),s._v("\n\ncommercionetworkd init "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$NODENAME")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# If you get a error because .commercionetwork folder is present don't worry ")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("Install "),e("code",[s._v("genesis.json")]),s._v(" file")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf ~/.commercionetwork/config/genesis.json\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" genesis.json ~/.commercionetwork/config\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("Change the persistent peers inside "),e("code",[s._v("config.toml")]),s._v(" file")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -e "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"s|persistent_peers = '),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v(".*"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("|persistent_peers = "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" .data "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -oP "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Persistent peers\\s+\\K\\S+'")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v('|g"')]),s._v(" ~/.commercionetwork/config/config.toml "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ~/.commercionetwork/config/config.toml.tmp\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" ~/.commercionetwork/config/config.toml.tmp  ~/.commercionetwork/config/config.toml\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("Change the seeds inside the "),e("code",[s._v("config.toml")]),s._v(" file")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -e "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"s|seeds = '),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v(".*"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("|seeds = "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" .data "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -oP "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Seeds\\s+\\K\\S+'")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v('|g"')]),s._v(" ~/.commercionetwork/config/config.toml "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ~/.commercionetwork/config/config.toml.tmp\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" ~/.commercionetwork/config/config.toml.tmp  ~/.commercionetwork/config/config.toml\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("Change "),e("code",[s._v("external_address")]),s._v(" value to contact your node using public ip of your node:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PUB_IP")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -s -4 icanhazip.com"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -e "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"s|external_address = '),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v(".*"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("|external_address = "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PUB_IP")]),s._v(":26656"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v('|g"')]),s._v(" ~/.commercionetwork/config/config.toml "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ~/.commercionetwork/config/config.toml.tmp\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" ~/.commercionetwork/config/config.toml.tmp  ~/.commercionetwork/config/config.toml\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h2",{attrs:{id:"_4-configure-the-service"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-configure-the-service"}},[s._v("#")]),s._v(" 4. Configure the service")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" /etc/systemd/system/commercionetworkd.service "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /dev/null "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF  \n[Unit]\nDescription=Commercio Node\nAfter=network-online.target\n\n[Service]\nUser=root\nExecStart=/root/go/bin/commercionetwork start\nRestart=always\nRestartSec=3\nLimitNOFILE=4096\n\n[Install]\nWantedBy=multi-user.target\nEOF")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br")])]),e("h2",{attrs:{id:"_5-sync-node"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-sync-node"}},[s._v("#")]),s._v(" 5. Sync node")]),s._v(" "),e("p",[s._v("Choose 1 of these 3 ways to syncronize your node to the blockchain:")]),s._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"#from-the-start"}},[s._v("From the start")])]),s._v(" "),e("li",[e("a",{attrs:{href:"#using-the-state-sync-feature"}},[s._v("Using the state sync future")])]),s._v(" "),e("li",[e("a",{attrs:{href:"#using-the-quicksync-dump"}},[s._v("Using the quicksync dump")])])]),s._v(" "),e("h3",{attrs:{id:"from-the-start"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#from-the-start"}},[s._v("#")]),s._v(" From the start")]),s._v(" "),e("p",[s._v("If you intend to syncronize eveything from the start you can skip this part and continue with the configuration."),e("br"),s._v("\n100.000 blocks should synchronize within an hour.")]),s._v(" "),e("h3",{attrs:{id:"using-the-state-sync-feature"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-the-state-sync-feature"}},[s._v("#")]),s._v(" Using the state sync feature")]),s._v(" "),e("p",[s._v("Under the state sync section in "),e("code",[s._v("~/.commercionetwork/config/config.toml")]),s._v(" you will find multiple settings that need to be configured in order for your node to use state sync.\nYou need get information from chain about trusted block using")]),s._v(" "),e("p",[s._v("Select open rpc services of chains")]),s._v(" "),e("ul",[e("li",[s._v("Testnet:\n"),e("ul",[e("li",[s._v("With name: rpc-testnet.commercio.network, rpc2-testnet.commercio.network")]),s._v(" "),e("li",[s._v("With ip: 157.230.110.18:26657, 46.101.146.48:26657")])])]),s._v(" "),e("li",[s._v("Mainnet: (WIP)\n"),e("ul",[e("li",[s._v("https://rpc-mainnet.commercio.network, https://rpc2-mainnet.commercio.network (WIP)")])])])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("TRUST_RPC1")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"157.230.110.18:26657"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("TRUST_RPC2")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"46.101.146.48:26657"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -s "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://'),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$TRUST_RPC1")]),s._v('/block"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" jq -r "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.result.block.header.height + \"\\n\" + .result.block_id.hash'")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("The command should be return block height and hash of block as follow:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("5075021\nEB1032C6DFC9F2708B16DF8163CAB2258B0F1E1452AEF031CA3F32004F54C9D1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("Edit these settings accordingly:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('[statesync]\n\nenable = true\n\nrpc_servers = "$TRUST_RPC1,$TRUST_RPC2"\ntrust_height = 5075021\ntrust_hash = "EB1032C6DFC9F2708B16DF8163CAB2258B0F1E1452AEF031CA3F32004F54C9D1"\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("h3",{attrs:{id:"using-the-quicksync-dump"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-the-quicksync-dump"}},[s._v("#")]),s._v(" Using the quicksync dump:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://quicksync.commercio.network/'),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$CHAINID")]),s._v('.latest.tgz"')]),s._v(" -P ~/.commercionetwork/\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Check if the checksum matches the one present inside https://quicksync.commercio.network")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/.commercionetwork/\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxf "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" $CHAINID"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(".latest.tgz\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("Now you can start you full node. Enable the newly created server and try starting it using:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Start the node  ")]),s._v("\nsystemctl "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" commercionetworkd  \nsystemctl start commercionetworkd\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("Control if the sync was started. Use "),e("code",[s._v("Ctrl + C")]),s._v(" to interrupt the "),e("code",[s._v("journalctl")]),s._v(" command")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("journalctl -u commercionetworkd -f\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# OUTPUT SHOULD BE LIKE BELOW")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Aug 13 16:30:20 commerciotestnet-node4 commercionetworkd[351]: I[2019-08-13|16:30:20.722] Executed block                               module=state height=1 validTxs=0 invalidTxs=0")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Aug 13 16:30:20 commerciotestnet-node4 commercionetworkd[351]: I[2019-08-13|16:30:20.728] Committed state                              module=state height=1 txs=0 appHash=9815044185EB222CE9084AA467A156DFE6B4A0B1BAAC6751DE86BB31C83C4B08")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Aug 13 16:30:20 commerciotestnet-node4 commercionetworkd[351]: I[2019-08-13|16:30:20.745] Executed block                               module=state height=2 validTxs=0 invalidTxs=0")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Aug 13 16:30:20 commerciotestnet-node4 commercionetworkd[351]: I[2019-08-13|16:30:20.751] Committed state                              module=state height=2 txs=0 appHash=96BFD9C8714A79193A7913E5F091470691B195E1E6F028BC46D6B1423F7508A5")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Aug 13 16:30:20 commerciotestnet-node4 commercionetworkd[351]: I[2019-08-13|16:30:20.771] Executed block                               module=state height=3 validTxs=0 invalidTxs=0")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("h2",{attrs:{id:"_6-start-the-rest-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-start-the-rest-api"}},[s._v("#")]),s._v(" 6. Start the REST API")]),s._v(" "),e("p",[s._v("Each full node can start up its own REST API service.\nThis will allow it to expose some endpoints that can be used in order to query the chain state at any moment.")]),s._v(" "),e("p",[s._v("If you want to start such a service, you need to change the parameters of your "),e("code",[s._v("~/.commercionetwork/config/app.toml")]),s._v(" as follow")]),s._v(" "),e("div",{staticClass:"language-toml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-toml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token table class-name"}},[s._v("api")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Enable defines if the API server should be enabled.")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token key property"}},[s._v("enable")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Swagger defines if swagger documentation should automatically be registered.")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token key property"}},[s._v("swagger")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Address defines the API server to listen on.")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token key property"}},[s._v("address")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tcp://0.0.0.0:1317"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])]),e("p",[s._v("Apply the configuration using")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("systemctl restart commercionetworkd\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("This will start up the REST server and make it reachable using the port "),e("code",[s._v("1317")]),s._v("."),e("br"),s._v(" "),e("strong",[s._v("From here, if you want you can use services such as "),e("a",{attrs:{href:"https://www.nginx.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Nginx"),e("OutboundLink")],1),s._v(" in order to make it available to other devices.")])]),s._v(" "),e("h2",{attrs:{id:"next-step"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#next-step"}},[s._v("#")]),s._v(" Next step")]),s._v(" "),e("p",[s._v("Now that you are a Commercio.network full node, if you want you can become a validator.\nIf you wish to do so, please read the "),e("RouterLink",{attrs:{to:"/nodes/validator-node-installation.html"}},[e("em",[s._v("Becoming a validator")]),s._v(" guide")]),s._v(".")],1)])}),[],!1,null,null,null);t.default=n.exports}}]);