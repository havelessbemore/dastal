import { Stack } from './stack';

/**
 * An implementation of the {@link Stack} interface using an array
 */
export class ArrayStack<T> implements Stack<T> {
    /**
     * @ignore
     */
    protected array: T[];

    constructor(elements?: Iterable<T>) {
        this.array = elements ? Array.from(elements) : [];
    }
    /**
     * Removes all elements from the stack
     */
    clear(): void {
        this.array.length = 0;
    }
    /**
     * Retrieves, but does not remove, the top of the stack
     *
     * @returns The element at the top of the stack or `undefined` if empty.
     */
    peek(): T | undefined {
        return this.array[this.array.length - 1];
    }
    /**
     * Retrieves and removes the top of the stack
     *
     * @returns The element at the top of the stack or `undefined` if empty.
     */
    pop(): T | undefined {
        return this.array.pop();
    }
    /**
     * Inserts a element into the stack
     *
     * @param element - The element to be inserted
     *
     * @returns The new size of the stack
     */
    push(element: T): number {
        return this.array.push(element);
    }
    /**
     * The number of elements in the stack
     */
    get size(): number {
        return this.array.length;
    }
    /**
     * Receive an iterator through the stack.
     *
     * **Note:** Unexpected behavior can occur if the collection is modified during iteration.
     *
     * @returns An iterator through the stack
     */
    *[Symbol.iterator](): Iterator<T> {
        const array = this.array;
        for (let i = array.length; i > 0; yield array[--i]) {}
    }
}
