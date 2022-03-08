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

**NB**: becouse the compilation could be very heavy the production of the swagger documentation is disabled by default. To generate the swagger production use

```bash
make GENERATE=1 build-image-libraries-cached localnet-start
```


To stop stack use `ctrl + c` or

```bash
make localnet-stop
```

You can reset chain without delete genesis ora accounts with 

```bash
make localnet-reset
```

You can delete all data of the local chain and all binaries with

```bash
make clean
```


If there are no problems, the nodes listen on the follow ports

```
cndnode0   0.0.0.0:26656-26657->26656-26657/tcp                 
cndnode1   0.0.0.0:26659->26656/tcp, 0.0.0.0:26660->26657/tcp
cndnode2   0.0.0.0:26661->26656/tcp, 0.0.0.0:26662->26657/tcp   
cndnode3   0.0.0.0:26663->26656/tcp, 0.0.0.0:26664->26657/tcp
```

Lcd and Rpc + websocket
```
proxy-nginx   0.0.0.0:7123->7123/tcp, 0.0.0.0:7124->7124/tcp 
```

## Lcd local access

```
http://localhost:7123
```

## Rpc local access
```
http://localhost:7124
```

## Websocket local access
```
ws://localhost:7124/websocket
```

## Node data

Every node account mnemonics are in 

```
/build/node<N>/cncli/key_seed.json
```

where `<N>` is the id of node.  
Government wallet is in node0.    

Every node configs are under 


```
/build/node<N>/cnd/config
```

Logs

```
/build/node<N>/cnd/cnd.log
```
