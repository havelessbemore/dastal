export interface Stack<T> extends Iterable<T> {
    /**
     * Removes all elements from the stack
     */
    clear(): void;
    /**
     * Retrieves, but does not remove, the top of the stack
     *
     * @returns The value at the top of the stack or `undefined` if empty.
     */
    peek(): T | undefined;
    /**
     * Retrieves and removes the top of the stack
     *
     * @returns The value at the top of the stack or `undefined` if empty.
     */
    pop(): T | undefined;
    /**
     * Inserts a value into the stack
     *
     * @param element - The value to be inserted
     *
     * @returns `true` upon success, otherwise `false`
     */
    push(element: T): boolean;
    /**
     * The number of elements in the stack
     */
    readonly size: number;
}
