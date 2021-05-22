import { Stack } from './stack';

/**
 * An implementation of the {@link Stack} interface using an array
 */
export class ArrayStack<T> implements Stack<T> {
    /**
     * The array containing every element.
     */
    protected array: T[];
    /**
     * Instantiate the stack.
     *
     * @param elements - A set of elements to initialize the stack with.
     */
    constructor(elements?: Iterable<T>) {
        this.array = elements ? Array.from(elements) : [];
    }

    clear(): void {
        this.array.length = 0;
    }

    peek(): T | undefined {
        return this.array[this.array.length - 1];
    }

    pop(): T | undefined {
        return this.array.pop();
    }

    push(element: T): number {
        return this.array.push(element);
    }

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
