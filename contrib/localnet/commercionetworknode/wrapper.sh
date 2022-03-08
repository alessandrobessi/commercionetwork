#!/usr/bin/env sh

##
## Input parameters
##
ID=${ID:-0}
LOG=${LOG:-cnd.log}

##
## Assert linux binary
##
if ! [ -f "/app/build/commercionetworkd" ]; then
	echo "The binary /app/build/commercionetworkd cannot be found. Please add the binary to the shared folder."
	exit 1
fi

#BINARY_CHECK="$(file "${BINARY}" | grep 'ELF 64-bit LSB executable, x86-64')"
#if [ -z "${BINARY_CHECK}" ]; then
#	echo "Binary needs to be OS linux, ARCH amd64"
#	exit 1
#fi

##
## Run binary with all parameters
##
export CNDHOME="/commercionetwork/node${ID}/commercionetwork"
#export CNDHOME="/app/build/node${ID}/cnd"
#sed -i 's/main:info,state:info,\*:error/info/g' /app/build/node${ID}/cnd/config/config.toml

if [ -d "$(dirname "${CNDHOME}"/"${LOG}")" ]; then
  "/app/build/commercionetworkd" --home "${CNDHOME}" "$@" | tee "${CNDHOME}/${LOG}"
else
  "/app/build/commercionetworkd" --home "${CNDHOME}" "$@"
fi


