/**
 * An ordered collection (also known as a sequence). A list allows exactly stating where an element is inserted.
 *
 * Elements can be accessed by their integer index (position in the list)
 */
export interface List<T> extends Iterable<T> {
    /**
     * Add the element at the specified index.
     *
     * @param index - The index to add into (0 <= index <= size)
     * @param element - The element to add
     *
     * @returns The new size of the list
     */
    add(index: number, element: T): number;
    /**
     * Add elements at the specified index.
     *
     * @param index - The index to add into (0 <= index <= size)
     * @param element - The elements to add
     *
     * @returns The new size of the list
     */
    addAll(index: number, elements: Iterable<T>): number;
    /**
     * Removes all elements
     */
    clear(): void;
    /**
     * Combines the list with multiple iterables into a new list. Does not modify the existing list or inputs.
     *
     * @param lists — Additional iterables to add to the end of the list.
     *
     * @returns A new list consisting of the elements in the list on which it is called,
     * followed in order by the elements of each argument (if the argument is an iterable)
     * or the argument itself. It does not recurse into nested iterable arguments
     */
    concat(...lists: Iterable<T>[]): List<T>;
    /**
     * Copies a section of the list identified by min and max to the same array at position index.
     *
     * Negative indices can be used for index, min and max to indicate an offset from the
     * end of the list. For example, -2 refers to the second to last element of the list.
     *
     * Note that this method will not change the size of the list. If index is after min,
     * the copied sequence will be trimmed to fit list.size
     *
     * @param index - Where to copy the sequence to
     * @param min - Where to start copying elements from, inclusive. Defaults to 0
     * @param max - Where to end copying elements from, exclusive. Defaults to list.size
     *
     * @returns The list
     */
    copyWithin(index: number, min?: number, max?: number): this;
    /**
     * Returns the this object after filling the section identified by min and max with element.
     *
     * Negative indices can be used for min and max to indicate an offset from the
     * end of the list. For example, -2 refers to the second to last element of the list.
     *
     * @param element — element to fill list section with
     * @param min - Where to start filling the list, inclusive. Defaults to 0
     * @param end - Where to stop filling the list, exclusive. Defaults to list.size
     *
     * @returns The list on which this method was called
     */
    fill(element: T, min?: number, max?: number): this;
    /**
     * Return the element at the specified index.
     *
     * @param index - The index to retrieve (0 <= index < size)
     *
     * @returns The element at the index, or `undefined` if index is invalid
     */
    get(index: number): T | undefined;
    /**
     * Update the element at the specified index.
     *
     * @param index - The index to retrieve (0 <= index < size)
     * @param callback - A function that receives the previous element and returns
     * the new element. The function is only called if the index is valid
     *
     * @returns The previous element at the index, or `undefined` if index is invalid
     */
    getSet(index: number, callback: (element: T) => T): T | undefined;
    /**
     * Retrieves and removes the end of the list.
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
     * Retrieves and removes the element at the given index.
     *
     * A negative index can be used to indicate an offset from the
     * end of the list. For example, -2 refers to the second to last element of the list.
     *
     * @param index - The index to remove
     *
     * @returns The value at the index, or `undefined` if the index is invalid
     */
    remove(index: number): T | undefined;
    /**
     * Reverses the elements in the list in place.
     *
     * Negative indices can be used for min and max to indicate an offset from the
     * end of the list. For example, -2 refers to the second to last element of the list.
     *
     * @param min - The beginning index of the specified portion of the list, inclusive. Defaults to 0
     * @param max - The end index of the specified portion of the list, exclusive. Defaults to list.size
     *
     * @returns a reference to the same list
     */
    reverse(min?: number, max?: number): this;
    /**
     * Update the element at the specified index.
     *
     * @param index - The index to retrieve (0 <= index < size)
     * @param element - The new element to insert at index
     *
     * @returns The previous element in the index, or undefined if the index is invalid
     */
    set(index: number, element: T): T | undefined;
    /**
     * Retrieves and removes the first element in the list.
     *
     * @returns The value at the front of the list or `undefined` if this list is empty.
     */
    shift(): T | undefined;
    /**
     * The number of elements in this list
     */
    readonly size: number;
    /**
     * Returns a copy of a section of the list.
     *
     * Negative indices can be used for min and max to indicate an offset from the
     * end of the list. For example, -2 refers to the second to last element of the list.
     *
     * @param min - The beginning index of the specified portion of the list, inclusive. Defaults to 0
     * @param max - The end index of the specified portion of the list, exclusive. Defaults to list.size
     *
     * @returns A new list with a copy of the indicated section of the original list
     */
    slice(min?: number, max?: number): List<T>;
    /**
     * Inserts the specified value into the front of the list
     *
     * @param element - The element to be inserted
     *
     * @returns The new size of the list
     */
    unshift(element: T): number;
    /**
     * Receive an iterator through a section of the list.
     *
     * Negative indices can be used for min and max to indicate an offset from the
     * end of the list. For example, -2 refers to the second to last element of the list.
     *
     * **Note:** Unexpected behavior can occur if the collection is modified during iteration.
     *
     * @param min - The beginning index of the specified portion of the list, inclusive. Defaults to 0
     * @param max - The end index of the specified portion of the list, exclusive. Defaults to list.size
     *
     * @returns An iterator through the indicated section of the list
     */
    view(min?: number, max?: number): Iterable<T>;
}
