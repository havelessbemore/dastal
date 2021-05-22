import { LinkedList, List } from '../list';
import { Stack } from './stack';

/**
 * A linked list implementation of the {@link Stack} interface
 */
export class LinkedStack<T> implements Stack<T> {
    /**
     * The list containing every element.
     */
    protected list: List<T>;
    /**
     * Instantiate the stack.
     *
     * @param elements - A set of elements to initialize the stack with.
     */
    constructor(elements?: Iterable<T>) {
        this.list = new LinkedList();
        for (const element of elements || []) {
            this.push(element);
        }
    }

    clear(): void {
        this.list.clear();
    }

    peek(): T | undefined {
        return this.list.get(0);
    }

    pop(): T | undefined {
        return this.list.shift();
    }

    push(element: T): number {
        return this.list.unshift(element);
    }

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
