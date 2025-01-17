<!--
order: 2
-->

# Messages

## Mint Commercio Cash Credit (CCC)

### Transaction message
To mint CCC you need to create and sign the following message:
  
```json
{
  "type": "commercio/MsgMintCCC",
  "value": {
    "depositor": "<user address>",
    "deposited_amount": [
      {
        "denom": "<token denom to be deposited>",
        "amount": "<amount to be deposited>"
      }
    ],
    "id": "<Mint UUID>"
  }
}
```


#### Fields requirements
| Field | Required | Limit/Format |
| :---: | :------: | :------: |
| `depositor` | Yes | bech32 | 
| `deposited_amount` | Yes |  | 
| `id` | Yes | [uuid-v4](https://en.wikipedia.org/wiki/Universally_unique_identifier) | 

### Action type
If you want to [list past transactions](../../../docs/developers/listing-transactions.md) including this kind of message,
you need to use the following `message.action` value: 

```
mintCCC
```  


## Burn Commercio Cash Credit (CCC)

#### Transaction message

To burn previously minteted CCC you need to create and sign the following message:

```json
{
  "type": "commercio/MsgBurnCCC",
  "value": {
    "signer": "<user address>",
    "amount": {
      "denom": "<token denom to be burned>",
      "amount": "<amount to be burned>"
    },
    "id": "<Mint UUID>"
  }
}
```

##### Fields requirements
| Field | Required | Limit/Format |
| :---: | :------: | :------: |
| `signer` | Yes | bech32 | 
| `amount` | Yes | |
| `id` | Yes | [uuid-v4](https://en.wikipedia.org/wiki/Universally_unique_identifier) |


#### Action type
If you want to [list past transactions](../../../docs/developers/listing-transactions.md) including this kind of message,
you need to use the following `message.action` value: 

```
burnCCC
```



## Set Parameters (Conversion Rate & Freeze Period)

:::warning  
This transaction type is accessible only to the [government](../../government/spec/README.md).  
Trying to perform this transaction without being the government will result in an error.  
:::

#### Transaction message

To set module params you need to create and sign the following message:

```json
{
  "type": "commercio/MsgSetParams",
  "value": {
    "signer": "<government address>",
    "params": {
      "conversion_rate": "<floating-point collateral rate>",
      "freeze_period": "<nono seconds freeze period>"
    },
  }
}
```

##### Fields requirements
| Field | Required | Limit/Format |
| :---: | :------: | :------: |
| `signer` | Yes | bech32 | 
| `params` | Yes | |



#### Action type
If you want to [list past transactions](../../../docs/developers/listing-transactions.md) including this kind of message,
you need to use the following `message.action` value: 

```
setParams
```