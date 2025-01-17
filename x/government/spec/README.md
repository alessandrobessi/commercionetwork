<!--
order: 0
title: Government Overview
parent:
  title: "covernment"
-->

# Government 

## Abstract

In order to allow some specific operations to be performed only by a small set of individuals, 
inside Commercio.network we introduced the `government` module. 

This module allows for two simple operations: 

1. Set a government address that will later be used as a sort of on-chain authentication method. 
2. Read the government address that has been set. 

### Setting a government address 
The address identified as the `government` can be set **only during the genesis**.
This operation can be performed using the following command: 

```bash
commercionetworkd set-genesis-government-address <ADDRESS-TO-USE>
```

:::danger
**Note**: you can run this command only once.
Running it several times after the first value has been set will result in an error been thrown inside the console.
:::

 - via **CLI**, `commercionetworkd query government gov-address`
 - via **REST**, by making a GET request to the `/commercionetwork/government/governmentAddress` endpoint 

## Contents

1. **[State](01_state.md)**
