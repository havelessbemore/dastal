import { Collection } from 'src/collection/collection';

/**
 * An ordered collection of elements in FIFO (first-in-first-out) order
 * ([source](https://en.wikipedia.org/wiki/Queue_(abstract_data_type))).
 *
 * Typically FIFO refers to the insertion order of elements. However, it
 * can refer to other types of ordering. For example, priority queues order elements
 * over the elements natural ordering (e.g. 2 before 4) or according to a given comparator.
 * LIFO queues (e.g. stacks) order elements in last-in-first-out order.
 *
 * Regardless, a call to dequeue() should return the first element relative to its order.
 * Every implementation should specify its ordering properties. Otherwise, insertion order should be used.
 */
export interface Queue<T> extends Collection<T> {
    /**
     * Removes all elements.
     */
    clear(): void;
    /**
     * Retrieves and removes the head of this queue
     *
     * @returns The value at the head of the queue or `undefined` if this queue is empty.
     */
    dequeue(): T | undefined;
    /**
     * Inserts the specified value into this queue
     *
     * @param element - The element to be inserted
     *
     * @returns The new size of the queue
     */
    enqueue(element: T): number;
    /**
     * Retrieves, but does not remove, the head of this queue
     *
     * @returns The value at the head of the queue or `undefined` if this queue is empty.
     */
    peek(): T | undefined;
}
