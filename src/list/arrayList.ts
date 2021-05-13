import { List } from './list';

export class ArrayList<T> implements List<T> {
    protected array: Array<T>;

    constructor(array: Array<T> = []) {
        this.array = array;
    }

    /**
     * Add the element at the specified index
     *
     * @param index - The index to add into
     * @param element - The element to add
     */
    add(index: number, value: T): boolean {
        this.array.splice(index, 0, value);
        return true;
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
     */
    get(index: number): T | undefined {
        return this.array[index];
    }

    /**
     * Update the element at the specified index
     *
     * @param index - The index to retrieve
     * @param callback - A function that receives the previous element and returns the new element
     */
    getSet(index: number, callback: (element: T) => T): void {
        if (index >= 0 && index < this.array.length) {
            this.array[index] = callback(this.array[index]);
        }
    }

    /**
     * Retrieves and removes the end of the list
     *
     * @returns The value at the end of the list or `undefined` if empty.
     */
    pop(): T | undefined {
        return this.array.pop();
    }

    /**
     * Inserts the specified value into the end of the list
     *
     * @param element - The element to be inserted
     *
     * @returns `true` upon success, otherwise `false`
     */
    push(value: T): boolean {
        this.array.push(value);
        return true;
    }

    /**
     * Retrieves and removes the element at the given index
     *
     * @param index - The index to remove
     *
     * @returns The value at the index or `undefined` if the index does not exist
     */
    remove(index: number): T | undefined {
        return this.array.splice(index, 1)[0];
    }

    /**
     * Update the element at the specified index
     *
     * @param index - The index to retrieve
     * @param element - The new element to insert at index
     *
     * @returns The previous element in the index, or undefined if the index does not exist
     */
    set(index: number, element: T): T | undefined {
        if (index < 0 || index >= this.array.length) {
            return undefined;
        }
        const value = this.array[index];
        this.array[index] = element;
        return value;
    }

    /**
     * Retrieves and removes the first element in the list
     *
     * @returns The value at the front of the list or `undefined` if this list is empty.
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
     * Receive an iterator through the list
     *
     * @returns An iterator through the list
     */
    [Symbol.iterator](): Iterator<T> {
        return this.array[Symbol.iterator]();
    }

    /**
     * Inserts the specified value into the front of the list
     *
     * @param element - The element to be inserted
     *
     * @returns `true` upon success, otherwise `false`
     */
    unshift(value: T): boolean {
        this.array.unshift(value);
        return true;
    }
}
