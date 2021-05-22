// export * from './graph';
export * from './heap';
export * from './list';
export * from './queue';
// export * from './segmentTree';
export * from './stack';
// export * from './tree';
// export * from './trie';

/**
 * A function used to determine the order of a set of elements.
 *
 * @param a - The first element
 * @param b - The second element
 *
 * @returns
 * - A negative value if a < b
 * - Zero if a == b
 * - A positive value if a > b
 */
export type CompareFn<T> = (a: T, b: T) => number;
/**
 * Represents an object containing a set of elements that can be sorted.
 */
export interface Sortable<T> {
    /**
     * Sorts the elements in place.
     *
     * @param compareFn - A function used to determine the order of elements.
     *
     * It is expected to return:
     * - A negative value if first argument < second argument
     * - Zero if first argument == second argument
     * - A positive value if first argument > second argument
     *
     * @returns The object this method was called on
     */
    sort(compareFn: CompareFn<T>): this;
}
/**
 * Represents an object containing a set of sorted elements.
 */
export interface Sorted<T> {
    /**
     * @returns The function with which elements are sorted
     */
    comparator(): CompareFn<T>;
}
