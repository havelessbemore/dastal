import { Stack } from './stack';

export class ArrayStack<T> implements Stack<T> {
    constructor(protected array: Array<T> = []) {}
    /**
     * Removes all elements from the stack
     */
    clear(): void {
        this.array.length = 0;
    }
    /**
     * Retrieves, but does not remove, the top of the stack
     *
     * @returns The value at the top of the stack or `undefined` if empty.
     */
    peek(): T | undefined {
        return this.array[this.array.length - 1];
    }
    /**
     * Retrieves and removes the top of the stack
     *
     * @returns The value at the top of the stack or `undefined` if empty.
     */
    pop(): T | undefined {
        return this.array.pop();
    }
    /**
     * Inserts a value into the stack
     *
     * @param element - The value to be inserted
     *
     * @returns `true` upon success, otherwise `false`
     */
    push(element: T): boolean {
        this.array.push(element);
        return true;
    }
    /**
     * The number of elements in the stack
     */
    get size(): number {
        return this.array.length;
    }
    /**
     * Convert the stack into an array
     */
    toArray(): T[] {
        return Array.from(this.array);
    }
}
