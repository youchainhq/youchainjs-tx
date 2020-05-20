# youchainjs-tx

This is the personal package to be used to sign txs.

# INSTALL

`npm install youchainjs-tx`

# USAGE

- [example](https://github.com/youchainjs/youchainjs-tx/blob/master/examples/transactions.ts)


####1、默认配置
```javascript
const YOUTransaction = require('youchainjs-tx').YOUTransaction;
const privateKey = Buffer.from(
  'e331b6d69882b4cb4ea581d88e0b604039a3de5967688d3dcffdd2270c0fd109',
  'hex',
);

const txParams = {
  nonce: '0x00',
  gasPrice: '0x09184e72a000',
  gasLimit: '0x2710',
  to: '0x0000000000000000000000000000000000000000',
  value: '0x00',
  data: '0x7f7465737432000000000000000000000000000000000000000000000000000000600057',
};

// The second parameter is not necessary if these values are used
// const tx = new YOUTransaction(txParams, { chain: "youchain"  });
// const tx = new YOUTransaction(txParams, { chain: 2  });
const tx = new YOUTransaction(txParams);
tx.sign(privateKey);
const serializedTx = tx.serialize();
```

####2、设置 networkId 
```javascript
const YOUTransaction = require('youchainjs-tx').YOUTransaction;
const privateKey = Buffer.from(
  'e331b6d69882b4cb4ea581d88e0b604039a3de5967688d3dcffdd2270c0fd109',
  'hex',
);
const Common = require('youchainjs-tx').Common;
const customCommon = Common.forCustomChain(
  'youchain',
  {
    name: 'my-network',
    networkId: 2,
  }
);

const txParams = {
  nonce: '0x00',
  gasPrice: '0x09184e72a000',
  gasLimit: '0x2710',
  to: '0x0000000000000000000000000000000000000000',
  value: '0x00',
  data: '0x7f7465737432000000000000000000000000000000000000000000000000000000600057',
};

const tx = new YOUTransaction(txParams,   { common: customCommon });
tx.sign(privateKey);
const serializedTx = tx.serialize();
```

# Chain and Hardfork Support

The `Transaction` and `FakeTransaction` constructors receives a second parameter that lets you specify the chain and hardfork
to be used. By default, `mainnet` and `petersburg` will be used.

There are two ways of customizing these. The first one, as shown in the previous section, is by
using an object with `chain` and `hardfork` names. You can see en example of this in [./examples/ropsten-tx.ts](./examples/ropsten-tx.ts).

The second option is by passing the option `common` set to an instance of [common]' Common. This is specially useful for custom networks or chains/hardforks not yet supported by `ethereumjs-common`. You can see en example of this in [./examples/custom-chain-tx.ts](./examples/custom-chain-tx.ts).


# API

[./docs/](./docs/README.md)