import { ArrayList, List } from '../list';
import { Stack } from './stack';

export class ListStack<T> implements Stack<T> {
    constructor(protected list: List<T> = new ArrayList()) {}
    /**
     * Removes all elements from the stack
     */
    clear(): void {
        this.list.clear();
    }
    /**
     * Retrieves, but does not remove, the top of the stack
     *
     * @returns The value at the top of the stack or `undefined` if empty.
     */
    peek(): T | undefined {
        return this.list.get(this.list.size - 1);
    }
    /**
     * Retrieves and removes the top of the stack
     *
     * @returns The value at the top of the stack or `undefined` if empty.
     */
    pop(): T | undefined {
        return this.list.pop();
    }
    /**
     * Inserts a value into the stack
     *
     * @param element - The value to be inserted
     *
     * @returns `true` upon success, otherwise `false`
     */
    push(element: T): boolean {
        return this.list.push(element);
    }
    /**
     * The number of elements in the stack
     */
    get size(): number {
        return this.list.size;
    }
    /**
     * Convert the stack into an array
     */
    toArray(): T[] {
        return this.list.toArray();
    }
}
