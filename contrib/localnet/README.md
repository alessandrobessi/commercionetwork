# Commercio.network - Using localnet full stack

It is possible to test the blockchain and its functionality through the use of a complete docker stack including 4 nodes + endpoints for lcd + rpc with websocket.    
From root project folder execute the below commands.

If it is the first time that you build the docker images:
```bash
make build-image-to-donwload-libraries localnet-start
```

If you have already built the project once, use:
```bash
make build-image-libraries-cached localnet-start
```

In particular, build-image-to-donwload-libraries, build two docker images, one containeining the libraries for the project and one with the project built inside, the second one start building from the first permitting to avoid the donwloading of all the dependencies each time.

To send in backgroud the stack use 

```bash
make build-image-libraries-cached localnet-start >/dev/null 2>&1 &
```

or 

```bash
make build-image-libraries-cached localnet-start-demon
```

You can see logs with

```bash
docker-compose logs
```


To stop stack use `ctrl + c` or

```bash
make localnet-stop
```

You can reset chain without delete genesis or accounts with 

```bash
make localnet-reset
```

You can delete all data of the local chain and all binaries with

```bash
make clean
```


If there are no problems, the nodes listen on the follow ports

```
commercionetworknode0   0.0.0.0:26656-26657->26656-26657/tcp, 0.0.0.0:9090->9090/tcp, 0.0.0.0:1317->1317/tcp              
commercionetworknode1   0.0.0.0:26659->26656/tcp, 0.0.0.0:26660->26657/tcp, 0.0.0.0:9091->9090/tcp
commercionetworknode2   0.0.0.0:26661->26656/tcp, 0.0.0.0:26662->26657/tcp, 0.0.0.0:9092->9090/tcp   
commercionetworknode3   0.0.0.0:26663->26656/tcp, 0.0.0.0:26664->26657/tcp, 0.0.0.0:9093->9090/tcp
```

Lcd and Rpc + websocket + Grpc
```
proxy-nginx   0.0.0.0:7123->7123/tcp, 0.0.0.0:7124->7124/tcp, 0.0.0.0:7125->7125/tcp  
```

## Lcd local access

```
http://localhost:7123
```

## Rpc local access
```
http://localhost:7124
```

## GRpc local access
```
http://localhost:7125
```


## Websocket local access
```
ws://localhost:7124/websocket
```

## Node data

Every node account mnemonics are in 

```
/build/node<N>/key_seed.json
```

where `<N>` is the id of node.  
Government wallet is in node0.    

Every node configs are under 


```
/build/node<N>/commercionetwork/config
```

Logs

```
/build/node<N>/commercionetwork/commercionetwork.log
```

## Add Node (WIP)

If you want add a new node you can start a new container of `commercionetworknode` with new configuration

### Compile binary


```bash
make build
```


### Create new configuration



```bash
./build/commercionetworkd init node4 --home ./build/node4/commercionetwork
```

### Copy default genesis in config file

```bash
cp ./build/base_config/genesis.json ./build/node4/commercionetwork/config/
```

### Setup persistent

```bash
PERSISTENT=$(cat ./build/base_config/persistent.txt)
sed -i -e "s/persistent_peers = \".*\"/persistent_peers = \"$PERSISTENT\"/g" ./build/node4/commercionetwork/config/config.toml
```

### Start docker node



```bash
docker run \
   -v /Users/marco/Sviluppo/Go/commercionetwork/build:/commercionetwork:Z \
   -e ID=4 \
   -p 26691-26692:26656-26657 \
   -p 9191:9090 \
   --ip 192.168.10.10 \
   --name node4 \
   --network commercionetwork_localnet \
   -d \
   commercionetwork/commercionetworknode
```



You can see logs with

```bash
docker logs node4 -f
```
