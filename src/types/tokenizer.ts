export interface Tokenizer<Key, Token> {
    tokenize: TokenizerFn<Key, Token>;
}

export interface TokenizerFn<Key, Token> {
    (key: Key): Iterable<Token>;
}
