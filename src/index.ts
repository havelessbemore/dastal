// export * from './graph';
// export * from './heap';
export * from './list';
export * from './queue';
// export * from './segmentTree';
export * from './stack';
// export * from './tree';
// export * from './trie';

export interface Combinator<T, K = T> {
    combine: CombineFn<T, K>;
}

export interface CombineFn<T, K = T> {
    (a: T, b: T): K;
}
