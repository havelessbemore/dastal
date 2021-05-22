import { LinkedList, List } from '../list';
import { Queue } from './queue';

/**
 * A linked list implementation of the {@link Queue} interface
 */
export class LinkedQueue<T> implements Queue<T> {
    /**
     * The list containing every element.
     */
    protected list: List<T>;
    /**
     * Instantiate the queue.
     *
     * @param elements - A set of elements to initialize the queue with.
     */
    constructor(elements?: Iterable<T>) {
        this.list = new LinkedList(elements);
    }

    clear(): void {
        this.list.clear();
    }

    dequeue(): T | undefined {
        return this.list.shift();
    }

    enqueue(element: T): number {
        return this.list.push(element);
    }

    peek(): T | undefined {
        return this.list.get(0);
    }

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
