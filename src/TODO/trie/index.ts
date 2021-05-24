export * from './genericTrie';
export * from './prefixTrie';
export * from './trie';

export interface TokenizeFn<Key, Token> {
    (key: Key): Iterable<Token>;
}
