import { List } from './list';
import { wrap } from '../utils';

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
     * Add the element at the specified index.
     *
     * A negative index can be used to indicate an offset from the end of the list.
     * For example, -2 refers to the second to last element of the list.
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
     * Add elements at the specified index.
     *
     * A negative index can be used to indicate an offset from the end of the list.
     * For example, -2 refers to the second to last element of the list.
     *
     * @param index - The index to add into
     * @param element - The elements to add
     *
     * @returns The new size of the list
     */
    addAll(index: number, elements: Iterable<T>): number {
        if (index < 0 || index > this.array.length) {
            return this.size;
        }

        const iterator = elements[Symbol.iterator]();
        const max = 10000;
        let res = iterator.next();
        while (!res.done) {
            const array: T[] = [];
            do {
                array.push(res.value);
                res = iterator.next();
            } while (!res.done && array.length < max);
            this.array.splice(index, 0, ...array);
            index += array.length;
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
     * Combines the list with multiple iterables into a new list.
     * Does not modify the existing list or inputs.
     *
     * @param lists — Additional iterables to add to the end of the list.
     *
     * @returns A new list consisting of the elements in the list on which
     * it is called, followed in order by the elements of each argument. It
     * does not recurse into nested iterable arguments
     */
    concat(...lists: Iterable<T>[]): ArrayList<T> {
        const out = new ArrayList(this);
        for (const list of lists) {
            for (const element of list) {
                out.push(element);
            }
        }
        return out;
    }
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
    copyWithin(index: number, min?: number, max?: number): this {
        this.array.copyWithin(index, min ?? 0, max);
        return this;
    }
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
    fill(element: T, min?: number, max?: number): this {
        this.array.fill(element, min, max);
        return this;
    }
    /**
     * Return the element at the specified index.
     *
     * A negative index can be used for to indicate an offset from the
     * end of the list. For example, -2 refers to the second to last element of the list.
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
     * Update the element at the specified index.
     *
     * A negative index can be used to indicate an offset from the
     * end of the list. For example, -2 refers to the second to last element of the list.
     *
     * @param index - The index to retrieve
     * @param callback - A function that receives the previous element and returns
     * the new element. The function is only called if the index is valid
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
     * Retrieves and removes the element at the given index.
     *
     * A negative index can be used to indicate an offset from the
     * end of the list. For example, -2 refers to the second to last element of the list.
     *
     * @param index - The index to remove
     *
     * @returns The value at the index, or `undefined` if the index is invalid
     */
    remove(index: number): T | undefined {
        if (index < 0 || index >= this.array.length) {
            return undefined;
        }
        return this.array.splice(index, 1)[0];
    }
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
    reverse(min?: number, max?: number): this {
        min = wrap(min ?? 0, 0, this.array.length);
        max = wrap(max ?? this.array.length, 0, this.array.length);
        if (max - min > 1) {
            this.array.splice(min, max - min, ...this.array.slice(min, max).reverse());
        }
        return this;
    }
    /**
     * Update the element at the specified index.
     *
     * A negative index can be used to indicate an offset from the
     * end of the list. For example, -2 refers to the second to last element of the list.
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
    slice(min?: number, max?: number): ArrayList<T> {
        return new ArrayList(this.array.slice(min, max));
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
    *view(min?: number, max?: number): Iterable<T> {
        min = wrap(min ?? 0, 0, this.array.length);

        let len = () => Math.min(max!, this.array.length);
        if (max == null) {
            len = () => this.array.length;
        } else if (max < 0) {
            len = () => this.array.length + max!;
        }

        while (min < len()) {
            yield this.array[min++];
        }
    }
}
