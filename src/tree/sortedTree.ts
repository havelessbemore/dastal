import { Sorted } from '..';
import { Tree } from './tree';

/**
 * Represents a sorted tree data structure.
 */
export interface SortedTree<T> extends Tree<T>, Sorted<T> {
    /**
     * Get the maximum element.
     */
    max(): T | undefined;
    /**
     * Get the minimum element.
     */
    min(): T | undefined;
    /**
     * Remove the maximum element.
     */
    pop(): T | undefined;
    /**
     * Remove the minimum element.
     */
    shift(): T | undefined;
    /**
     * Iterate through the tree in sorted order (i.e in-order traversal).
     *
     * **Note:** Unexpected behavior can occur if the collection is modified during iteration.
     */
    sorted(): Iterable<T>;
}
