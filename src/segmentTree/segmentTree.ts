export interface LazyOperation<T> {
    (element: T, min: number, max: number): T;
}

export interface Operation<T> {
    (element: T, index: number): T;
}

/*
export interface Combinator<T, K = T> {
    combine: CombineFn<T, K>;
}
*/

export interface CombineFn<T, K = T> {
    (a: T, b: T): K;
}

export interface SegmentTree<T> extends Iterable<T> {
    /**
     * Removes all elements
     */
    clear(): void;
    /**
     *
     */
    // lazyUpdate(min: number, max: number, operation: LazyOperation<T>): void;
    /**
     * Retrieves and removes the last element
     *
     * @returns The last element or `undefined` if empty.
     */
    pop(): T | undefined;
    /**
     * Appends an element to the tree
     *
     * @param element - The element to be inserted
     *
     * @returns The new size of the tree
     */
    push(element: T): number;
    /**
     * Get the aggregated result of a given range in the tree
     *
     * @param min - The start index of the range, inclusive
     * @param max - The end index of the range, exclusive
     *
     * @returns The aggregated result for range [min, max)
     */
    query(min: number, max: number): T;
    /**
     * The number of elements in the tree
     */
    readonly size: number;
    /**
     * Update the elements of a given range in the tree
     *
     * @param min - The start index of the range, inclusive
     * @param max - The end index of the range, exclusive
     * @param operation - The update to perform
     */
    update(min: number, max: number, operation: Operation<T>): void;
}
