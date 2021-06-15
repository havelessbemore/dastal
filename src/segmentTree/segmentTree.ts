import { Collection } from 'src/collection/collection';

export interface SegmentTree<T> extends Collection<T> {
    /**
     * Removes all elements.
     */
    clear(): void;
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
     * Update the elements of a given range in the tree
     *
     * @param min - The start index of the range, inclusive
     * @param max - The end index of the range, exclusive
     * @param operation - The update to perform
     */
    update(min: number, max: number, operation: (element: T, index: number) => T): void;
}
