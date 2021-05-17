import { LinkedList, List } from '../list';
import { Stack } from './stack';

/**
 * A linked list implementation of the {@link Stack} interface
 */
export class LinkedStack<T> implements Stack<T> {
    /**
     * @ignore
     */
    protected list: List<T>;

    constructor(elements?: Iterable<T>) {
        this.list = new LinkedList();
        for (const element of elements || []) {
            this.push(element);
        }
    }
    /**
     * Removes all elements from the stack
     */
    clear(): void {
        this.list.clear();
    }
    /**
     * Retrieves, but does not remove, the top of the stack
     *
     * @returns The element at the top of the stack or `undefined` if empty.
     */
    peek(): T | undefined {
        return this.list.get(0);
    }
    /**
     * Retrieves and removes the top of the stack
     *
     * @returns The element at the top of the stack or `undefined` if empty.
     */
    pop(): T | undefined {
        return this.list.shift();
    }
    /**
     * Inserts a element into the stack
     *
     * @param element - The element to be inserted
     *
     * @returns The new size of the stack
     */
    push(element: T): number {
        return this.list.unshift(element);
    }
    /**
     * The number of elements in the stack
     */
    get size(): number {
        return this.list.size;
    }
    /**
     * Receive an iterator through the stack.
     *
     * **Note:** Unexpected behavior can occur if the collection is modified during iteration.
     *
     * @returns An iterator through the stack
     */
    [Symbol.iterator](): Iterator<T> {
        return this.list[Symbol.iterator]();
    }
}
