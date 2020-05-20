
/**
 * An YOUChain transaction.
 */

import {Buffer} from 'buffer'
import {BufferLike, PrefixedHexString, TxData, TransactionOptions} from './types'
import Transaction from "./transaction";


export default class YOUTransaction extends Transaction {

    constructor(
        data: Buffer | PrefixedHexString | BufferLike[] | TxData = {},
        opts: TransactionOptions = {},
    ) {
        if (!opts.common) {
            if (!opts.chain) {
                opts.chain = "youchain"
            }
            if (!opts.hardfork) {
                opts.hardfork = ""
            }
        }
        super(data, opts);
    }


}
