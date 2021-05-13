// export * from './graph';
// export * from './heap';
export * from './list';
// export * from './queue';
// export * from './segmentTree';
// export * from './stack';
// export * from './tree';
// xport * from './trie';

/**
 *
 */
export interface Combinator<T> {
    combine: CombineFn<T>;
}

/**
 *
 */
export interface CombineFn<T> {
    (a: T, b: T): T;
}

/**
 *
 */
export interface Comparator<T> {
    compare: CompareFn<T>;
}

/**
 *
 */
export interface CompareFn<T> {
    (a: T, b: T): number;
}

/**
 *
 */
export interface Sortable<T> {
    sort: SortFn<T>;
}

/**
 *
 */
export interface Sorted<T> {
    comparator(): Comparator<T>;
}

/**
 *
 */
export interface SortFn<T> {
    (comparator: Comparator<T>): void;
}

/**
 *
 */
export interface TokenizeFn<Key, Token> {
    (key: Key): Iterable<Token>;
}

/**
 *
 */
export interface Tokenizer<Key, Token> {
    tokenize: TokenizeFn<Key, Token>;
}
