// export * from './graph';
export * from './heap';
export * from './list';
export * from './queue';
// export * from './segmentTree';
export * from './stack';
// export * from './tree';
// export * from './trie';

/**
 *
 */
export interface CompareFn<T> {
    /**
     *
     */
    (a: T, b: T): number;
}

/**
 *
 */
export interface Sortable<T> {
    /**
     *
     */
    sort: SortFn<T>;
}

/**
 *
 */
export interface SortFn<T> {
    /**
     *
     */
    (compareFn: CompareFn<T>): void;
}

/**
 *
 */
export interface Sorted<T> {
    /**
     *
     */
    comparator(): CompareFn<T>;
}
