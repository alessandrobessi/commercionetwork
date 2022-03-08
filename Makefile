PACKAGES=$(shell go list ./... | grep -v '/simulation')

VERSION := $(shell echo $(shell git describe --tags) | sed 's/^v//')
COMMIT := $(shell git log -1 --format='%H')
LEDGER_ENABLED ?= true
BINDIR ?= $(GOPATH)/bin

MOCKS_DIR = $(CURDIR)/tests/mocks
REPOSITORY_BASE := github.com/commercionetwork/commercionetwork
HTTPS_GIT := https://$(REPOSITORY_BASE).git

DOCKER := $(shell which docker)

build_tags = netgo
ifeq ($(LEDGER_ENABLED),true)
  ifeq ($(OS),Windows_NT)
    GCCEXE = $(shell where gcc.exe 2> NUL)
    ifeq ($(GCCEXE),)
      $(error gcc.exe not installed for ledger support, please install or set LEDGER_ENABLED=false)
    else
      build_tags += ledger
    endif
  else
    UNAME_S = $(shell uname -s)
    ifeq ($(UNAME_S),OpenBSD)
      $(warning OpenBSD detected, disabling ledger support (https://github.com/cosmos/cosmos-sdk/issues/1988))
    else
      GCC = $(shell command -v gcc 2> /dev/null)
      ifeq ($(GCC),)
        $(error gcc not installed for ledger support, please install or set LEDGER_ENABLED=false)
      else
        build_tags += ledger
      endif
    endif
  endif
endif

ifeq (cleveldb,$(findstring cleveldb,$(COMMERCIO_BUILD_OPTIONS)))
  build_tags += gcc
endif
build_tags += $(BUILD_TAGS)
build_tags := $(strip $(build_tags))

whitespace :=
whitespace += $(whitespace)
comma := ,
build_tags_comma_sep := $(subst $(whitespace),$(comma),$(build_tags))



ldflags = -X github.com/cosmos/cosmos-sdk/version.Name=blog \
	-X github.com/cosmos/cosmos-sdk/version.ServerName=blogd \
	-X github.com/cosmos/cosmos-sdk/version.Version=$(VERSION) \
	-X github.com/cosmos/cosmos-sdk/version.Commit=$(COMMIT) 

BUILD_FLAGS := -ldflags '$(ldflags)'

all: install

build-darwin: go.sum generate
	env GOOS=darwin GOARCH=amd64 go build -mod=readonly -o ./build/Darwin-AMD64/commercionetworkd $(BUILD_FLAGS) ./cmd/commercionetworkd

build-linux: go.sum generate
	env GOOS=linux GOARCH=amd64 go build -mod=readonly -o ./build/Linux-AMD64/commercionetworkd $(BUILD_FLAGS) ./cmd/commercionetworkd

build-linux-docker:
	env GOOS=linux GOARCH=amd64 go build -mod=readonly -o ./build/Linux-AMD64/commercionetworkd $(BUILD_FLAGS) ./cmd/commercionetworkd

build-local-linux: go.sum generate
	env GOOS=linux GOARCH=amd64 go build -mod=readonly -o ./build/commercionetworkd $(BUILD_FLAGS) ./cmd/commercionetworkd

build-windows: go.sum generate
	env GOOS=windows GOARCH=amd64 go build -mod=readonly -o ./build/Windows-AMD64/commercionetworkd.exe $(BUILD_FLAGS) ./cmd/commercionetworkd

build-all: go.sum
	make build-darwin
	make build-linux
	make build-windows

prepare-release: go.sum build-all
	rm -f ./build/Darwin-386.zip ./build/Darwin-AMD64.zip
	rm -f ./build/Linux-386.zip ./build/Linux-AMD64.zip
	rm -f ./build/Windows-386.zip ./build/Windows-AMD64.zip
	zip -jr ./build/Darwin-AMD64.zip ./build/Darwin-AMD64/commercionetworkd
	zip -jr ./build/Linux-AMD64.zip ./build/Linux-AMD64/commercionetworkd
	zip -jr ./build/Windows-AMD64.zip ./build/Windows-AMD64/commercionetworkd.exe

########################################
### Tools & dependencies

git-hooks:
	@git config --local core.hooksPath $(REPO_ROOT)/.githooks/

go-mod-cache: go.sum
	@echo "--> Download go modules to local cache"
	@go mod download

go.sum: git-hooks go.mod
	@echo "--> Ensure dependencies have not been modified"
	go mod verify

lint:
	golangci-lint run
	find . -name '*.go' -type f -not -path "./vendor*" -not -path "*.git*" | xargs gofmt -d -s
	go mod verify

generate:
ifeq ($(GENERATE),1)
	GOFLAGS=-mod=mod go generate ./...
endif

.PHONY: git-hooks

install: go.sum
	@echo "--> Installing commercionetwork"
	@go install -mod=readonly $(BUILD_FLAGS) ./cmd/commercionetworkd

build: go.sum generate
	@echo "--> Building commercionetwork"
	@go build -mod=readonly -o ./build/commercionetworkd $(BUILD_FLAGS) ./cmd/commercionetworkd

#go.sum: go.mod
#	@echo "--> Ensure dependencies have not been modified"
#	GO111MODULE=on go mod verify

########################################
### Testing

test:
	@go test -mod=readonly $(PACKAGES)

## TODO test unit ledger ecc. ecc.

.PHONY: lint test test_unit go-mod-cache build go.sum go.mod


########################################
### Docker

#localnet-start: localnet-stop build-local-linux
#	@if ! [ -f build/node0/cnd/config/genesis.json ]; then docker run --rm -v $(CURDIR)/build:/cnd:Z commercionetwork/cndnode testnet --v 4 -o . --starting-ip-address 192.168.10.2 --keyring-backend=test ; fi
#	@if ! [ -f build/nginx/nginx.conf ]; then cp -r contrib/localnet/nginx build/nginx; fi
#	docker-compose up
localnet-start: localnet-stop
	@if ! [ -f build/node0/cnd/config/genesis.json ]; then docker run --rm -v $(CURDIR)/build:/commercionetwork:Z commercionetwork/commercionetworknode testnet --v 4 -o . --starting-ip-address 192.168.10.2 --keyring-backend=test; fi
	@if ! [ -f build/nginx/nginx.conf ]; then cp -r contrib/localnet/nginx build/nginx; fi
	docker-compose up
# -e BINARY=/app/build/commercionetworkd

localnet-reset: localnet-stop $(TARGET_BUILD)
	@for node in 0 1 2 3; do build/$(TARGET_BIN)/commercionetworkd unsafe-reset-all --home ./build/node$$node/cnd; done

localnet-stop:
	docker-compose down

clean:
	rm -rf build/

build-image-libraries-cached:
	docker build -t commercionetwork/commercionetworknode -f contrib/localnet/commercionetworknode/Dockerfile --build-arg generate=$(GENERATE) .

build-image-to-donwload-libraries:
	docker build -t commercionetwork/libraries -f DockerfileLibraries --build-arg generate=$(GENERATE) .
	docker build -t commercionetwork/commercionetworknode -f contrib/localnet/commercionetworknode/Dockerfile --build-arg generate=$(GENERATE) .


.PHONY: localnet-start localnet-stop build-docker-cndode clean localnet-reset