import { Queue } from './queue';

/**
 * An implementation of the {@link Queue} interface using an array
 */
export class ArrayQueue<T> implements Queue<T> {
    /**
     * @ignore
     */
    protected array: T[];

    constructor(elements?: Iterable<T>) {
        this.array = elements ? Array.from(elements) : [];
    }
    /**
     * Removes all elements from this queue
     */
    clear(): void {
        this.array.length = 0;
    }
    /**
     * Retrieves and removes the head of this queue
     *
     * @returns The element at the head of the queue or `undefined` if this queue is empty.
     */
    dequeue(): T | undefined {
        return this.size < 1 ? undefined : this.array.shift();
    }
    /**
     * Inserts the specified element into this queue
     *
     * @param element - The element to be inserted
     */
    enqueue(element: T): number {
        return this.array.push(element);
    }
    /**
     * Retrieves, but does not remove, the head of this queue
     *
     * @returns The value at the head of the queue or `undefined` if this queue is empty.
     */
    peek(): T | undefined {
        return this.size < 1 ? undefined : this.array[0];
    }
    /**
     * The number of elements in this queue
     */
    get size(): number {
        return this.array.length;
    }
    /**
     * Receive an iterator through the queue.
     *
     * **Note:** Unexpected behavior can occur if the collection is modified during iteration.
     *
     * @returns An iterator through the queue
     */
    [Symbol.iterator](): Iterator<T> {
        return this.array[Symbol.iterator]();
    }
}
