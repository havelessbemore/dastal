export interface List<T> extends Iterable<T> {
    /**
     * Add the element at the specified index
     *
     * @param index - The index to add into
     * @param element - The element to add
     */
    add(index: number, element: T): boolean;
    /**
     * Removes all elements
     */
    clear(): void;
    /**
     * Return the element at the specified index
     *
     * @param index - The index to retrieve
     */
    get(index: number): T | undefined;
    /**
     * Update the element at the specified index
     *
     * @param index - The index to retrieve
     * @param callback - A function that receives the previous element and returns the new element
     */
    getSet(index: number, callback: (element: T) => T): void;
    /**
     * Retrieves and removes the end of the list
     *
     * @returns The value at the end of the list or `undefined` if empty.
     */
    pop(): T | undefined;
    /**
     * Inserts the specified value into the end of the list
     *
     * @param element - The element to be inserted
     *
     * @returns `true` upon success, otherwise `false`
     */
    push(element: T): boolean;
    /**
     * Retrieves and removes the element at the given index
     *
     * @param index - The index to remove
     *
     * @returns The value at the index or `undefined` if the index does not exist
     */
    remove(index: number): T | undefined;
    /**
     * Update the element at the specified index
     *
     * @param index - The index to retrieve
     * @param element - The new element to insert at index
     *
     * @returns The previous element in the index, or undefined if the index does not exist
     */
    set(index: number, element: T): T | undefined;
    /**
     * Retrieves and removes the first element in the list
     *
     * @returns The value at the front of the list or `undefined` if this list is empty.
     */
    shift(): T | undefined;
    /**
     * The number of elements in this list
     */
    readonly size: number;
    /**
     * Inserts the specified value into the front of the list
     *
     * @param element - The element to be inserted
     *
     * @returns `true` upon success, otherwise `false`
     */
    unshift(element: T): boolean;
}
