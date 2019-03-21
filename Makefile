DEP := $(shell command -v dep 2> /dev/null)

get_tools:
ifndef DEP
	@echo "Installing dep"
	go get -u -v github.com/golang/dep/cmd/dep
else
	@echo "Dep is already installed..."
endif

get_vendor_deps:
	@echo "--> Generating vendor directory via dep ensure"
	@dep ensure -v -vendor-only

update_vendor_deps:
	@echo "--> Running dep ensure"
	@dep ensure -v -update

install:
	go install ./cmd/cnd
	go install ./cmd/cncli

crossbuild_windows_linux:
	set GOARCH=amd64
	set GOOS=linux
	go build -o "cnd" ./cmd/cnd/main.go
	go build -o "cncli" ./cmd/cncli/main.go