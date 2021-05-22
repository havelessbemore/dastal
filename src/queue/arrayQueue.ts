import { Queue } from './queue';

/**
 * An implementation of the {@link Queue} interface using an array
 */
export class ArrayQueue<T> implements Queue<T> {
    /**
     * The array containing every element.
     */
    protected array: T[];
    /**
     * Instantiate the queue.
     *
     * @param elements - A set of elements to initialize the queue with.
     */
    constructor(elements?: Iterable<T>) {
        this.array = elements ? Array.from(elements) : [];
    }

    clear(): void {
        this.array.length = 0;
    }

    dequeue(): T | undefined {
        return this.size < 1 ? undefined : this.array.shift();
    }

    enqueue(element: T): number {
        return this.array.push(element);
    }

    peek(): T | undefined {
        return this.size < 1 ? undefined : this.array[0];
    }

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
