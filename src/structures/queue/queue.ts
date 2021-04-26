export interface Queue<T> {
    /**
     * Removes all elements from this queue
     */
    clear(): void;
    /**
     * Retrieves and removes the head of this queue
     *
     * @returns The value at the head of the queue or `undefined` if this queue is empty.
     */
    dequeue(): T | undefined;
    /**
     * Inserts the specified value into this queue
     *
     * @param value - The element to be inserted
     *
     * @returns `true` upon success, otherwise `false`
     */
    enqueue(value: T): boolean;
    /**
     * Retrieves, but does not remove, the head of this queue
     *
     * @returns The value at the head of the queue or `undefined` if this queue is empty.
     */
    peek(): T | undefined;
    /**
     * The number of elements in this queue
     */
    readonly size: number;
    /**
     * Convert the queue into an array
     */
    toArray(): T[];
}
