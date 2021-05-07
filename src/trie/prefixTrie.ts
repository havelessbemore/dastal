import { GenericTrie } from './genericTrie';

export class PrefixTrie<Value> extends GenericTrie<string, number, Value> {
    constructor() {
        super(tokenize);
        function* tokenize(key: string): Generator<number> {
            const n = key.length;
            for (let i = 0; i < n; ++i) {
                yield key.charCodeAt(i);
            }
        }
    }
}
