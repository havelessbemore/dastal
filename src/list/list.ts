/**
 * An ordered collection (also known as a sequence). A list allows exactly stating where an element is inserted.
 *
 * Elements can be accessed by their integer index (position in the list)
 */
export interface List<T> extends Iterable<T> {
    /**
     * Add the element at the specified index
     *
     * @param index - The index to add into
     * @param element - The element to add
     *
     * @returns The new size of the list
     */
    add(index: number, element: T): number;
    /**
     * Removes all elements
     */
    clear(): void;
    /**
     * Return the element at the specified index
     *
     * @param index - The index to retrieve
     *
     * @returns The element at the index, or `undefined` if index is invalid
     */
    get(index: number): T | undefined;
    /**
     * Update the element at the specified index
     *
     * @param index - The index to retrieve
     * @param callback - A function that receives the previous element and returns the new element.
     * Note: The function is only called if the index is valid
     *
     * @returns The previous element at the index, or `undefined` if index is invalid
     */
    getSet(index: number, callback: (element: T) => T): T | undefined;
    /**
     * Retrieves and removes the end of the list
     *
     * @returns The value at the end of the list, or `undefined` if empty.
     */
    pop(): T | undefined;
    /**
     * Inserts the specified value into the end of the list
     *
     * @param element - The element to be inserted
     *
     * @returns The new size of the list
     */
    push(element: T): number;
    /**
     * Retrieves and removes the element at the given index
     *
     * @param index - The index to remove
     *
     * @returns The value at the index, or `undefined` if the index is invalid
     */
    remove(index: number): T | undefined;
    /**
     * Update the element at the specified index
     *
     * @param index - The index to retrieve
     * @param element - The new element to insert at index
     *
     * @returns The previous element in the index, or undefined if the index is invalid
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
     * @returns The new size of the list
     */
    unshift(element: T): number;
}
