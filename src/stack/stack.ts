import { Collection } from 'src/collection/collection';

/**
 * An ordered collection of elements in LIFO (last-in-first-out) order.
 *
 * Typically LIFO refers to the insertion order of elements. However, it
 * can refer to other types of ordering via a different implementation or a given comparator.
 * FIFO stacks (e.g. queues) order elements in first-in-first-out order.
 *
 * Regardless, a call to pop() should return the last element relative to its order.
 * Every implementation should specify its ordering properties. Otherwise, insertion order should be used.
 */
export interface Stack<T> extends Collection<T> {
    /**
     * Removes all elements.
     */
    clear(): void;
    /**
     * Retrieves, but does not remove, the top of the stack
     *
     * @returns The element at the top of the stack or `undefined` if empty.
     */
    peek(): T | undefined;
    /**
     * Retrieves and removes the top of the stack
     *
     * @returns The element at the top of the stack or `undefined` if empty.
     */
    pop(): T | undefined;
    /**
     * Inserts an element into the stack
     *
     * @param element - The element to be inserted
     *
     * @returns The new size of the stack
     */
    push(element: T): number;
}
