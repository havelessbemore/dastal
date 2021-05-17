import { LinkedList, List } from '../list';
import { Queue } from './queue';

/**
 * A linked list implementation of the {@link Queue} interface
 */
export class LinkedQueue<T> implements Queue<T> {
    /**
     * @ignore
     */
    protected list: List<T>;

    constructor(elements?: Iterable<T>) {
        this.list = new LinkedList(elements);
    }
    /**
     * Removes all elements from this queue
     */
    clear(): void {
        this.list.clear();
    }
    /**
     * Retrieves and removes the head of this queue
     *
     * @returns The element at the head of the queue or `undefined` if this queue is empty.
     */
    dequeue(): T | undefined {
        return this.list.shift();
    }
    /**
     * Inserts the specified element into this queue
     *
     * @param element - The element to be inserted
     */
    enqueue(element: T): number {
        return this.list.push(element);
    }
    /**
     * Retrieves, but does not remove, the head of this queue
     *
     * @returns The element at the head of the queue or `undefined` if this queue is empty.
     */
    peek(): T | undefined {
        return this.list.get(0);
    }
    /**
     * The number of elements in this queue
     */
    get size(): number {
        return this.list.size;
    }
    /**
     * Receive an iterator through the queue.
     *
     * **Note:** Unexpected behavior can occur if the collection is modified during iteration.
     *
     * @returns An iterator through the queue
     */
    [Symbol.iterator](): Iterator<T> {
        return this.list[Symbol.iterator]();
    }
}
