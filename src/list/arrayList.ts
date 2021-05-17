import { List } from './list';

/**
 * An implementation of the {@link List} interface using an array
 */
export class ArrayList<T> implements List<T> {
    /**
     * @ignore
     */
    protected array: Array<T>;

    constructor(elements?: Iterable<T>) {
        this.array = elements ? Array.from(elements) : [];
    }
    /**
     * Add the element at the specified index
     *
     * @param index - The index to add into
     * @param element - The element to add
     *
     * @returns The new size of the list
     */
    add(index: number, element: T): number {
        if (index >= 0 && index <= this.array.length) {
            this.array.splice(index, 0, element);
        }
        return this.size;
    }
    /**
     * Removes all elements
     */
    clear(): void {
        this.array.length = 0;
    }
    /**
     * Return the element at the specified index
     *
     * @param index - The index to retrieve
     *
     * @returns The element at the index, or `undefined` if index is invalid
     */
    get(index: number): T | undefined {
        if (index < 0 || index >= this.array.length) {
            return undefined;
        }
        return this.array[index];
    }
    /**
     * Update the element at the specified index
     *
     * @param index - The index to retrieve
     * @param callback - A function that receives the previous element and returns the new element.
     * Note: The function is only called if the index is valid
     *
     * @returns The previous element at the index, or `undefined` if index is invalid
     */
    getSet(index: number, callback: (element: T) => T): T | undefined {
        if (index < 0 || index >= this.array.length) {
            return undefined;
        }
        const value = this.array[index];
        this.array[index] = callback(value);
        return value;
    }
    /**
     * Retrieves and removes the end of the list
     *
     * @returns The element at the end of the list, or `undefined` if empty.
     */
    pop(): T | undefined {
        return this.array.pop();
    }
    /**
     * Inserts the specified element into the end of the list
     *
     * @param element - The element to be inserted
     *
     * @returns The new size of the list
     */
    push(element: T): number {
        return this.array.push(element);
    }
    /**
     * Retrieves and removes the element at the given index
     *
     * @param index - The index to remove
     *
     * @returns The element at the index or `undefined` if the index is invalid
     */
    remove(index: number): T | undefined {
        if (index < 0 || index >= this.array.length) {
            return undefined;
        }
        return this.array.splice(index, 1)[0];
    }
    /**
     * Update the element at the specified index
     *
     * @param index - The index to retrieve
     * @param element - The new element to insert at index
     *
     * @returns The previous element in the index, or undefined if the index is invalid
     */
    set(index: number, element: T): T | undefined {
        if (index < 0 || index >= this.array.length) {
            return undefined;
        }
        const prev = this.array[index];
        this.array[index] = element;
        return prev;
    }
    /**
     * Retrieves and removes the first element in the list
     *
     * @returns The element at the front of the list or `undefined` if this list is empty.
     */
    shift(): T | undefined {
        return this.array.shift();
    }
    /**
     * The number of elements in this list
     */
    get size(): number {
        return this.array.length;
    }
    /**
     * Receive an iterator through the list.
     *
     * **Note:** Unexpected behavior can occur if the collection is modified during iteration.
     *
     * @returns An iterator through the list
     */
    [Symbol.iterator](): Iterator<T> {
        return this.array[Symbol.iterator]();
    }
    /**
     * Inserts the specified element into the front of the list
     *
     * @param element - The element to be inserted
     *
     * @returns The new size of the list
     */
    unshift(element: T): number {
        return this.array.unshift(element);
    }
}
