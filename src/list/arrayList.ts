import { List } from './list';
import { batch, clamp, wrap } from './utils';

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
     * @param index - The index to add into
     * @param element - The element to add
     *
     * @returns The new size of the list
     */
    add(index: number, element: T): number {
        if (index >= 0 && index <= this.size) {
            this.array.splice(index, 0, element);
        }
        return this.size;
    }
    /**
     * Add elements at the specified index.
     *
     * @param index - The index to add into
     * @param element - The elements to add
     *
     * @returns The new size of the list
     */
    addAll(index: number, elements: Iterable<T>): number {
        if (index >= 0 && index <= this.size) {
            for (const items of batch(10000, elements)) {
                this.array.splice(index, 0, ...items);
                index += items.length;
            }
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
            out.addAll(out.size, list);
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
        index = wrap(index ?? 0, 0, this.size);
        min = wrap(min ?? 0, 0, this.size);
        max = wrap(max ?? this.size, 0, this.size);
        this.array.copyWithin(index, min, max);
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
        min = wrap(min ?? 0, 0, this.size);
        max = wrap(max ?? this.size, 0, this.size);
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
        return index < 0 || index >= this.size ? undefined : this.array[index];
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
        let value: T | undefined = undefined;
        if (index >= 0 && index < this.size) {
            value = this.array[index];
            this.array[index] = callback(value);
        }
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
        return index < 0 || index >= this.size ? undefined : this.array.splice(index, 1)[0];
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
        min = wrap(min ?? 0, 0, this.size);
        max = wrap(max ?? this.size, 0, this.size) - 1;
        while (min < max) {
            const temp = this.array[min];
            this.array[min++] = this.array[max];
            this.array[max--] = temp;
        }
        return this;
    }
    /**
     * Update the element at the specified index.
     *
     * @param index - The index to retrieve
     * @param element - The new element to insert at index
     *
     * @returns The previous element in the index, or undefined if the index is invalid
     */
    set(index: number, element: T): T | undefined {
        let prev: T | undefined = undefined;
        if (index >= 0 && index < this.size) {
            prev = this.array[index];
            this.array[index] = element;
        }
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
     * Removes elements from the list and optionally inserts new elements in their place.
     * Returns any deleted elements.
     *
     * @param start - The index from which to start removing elements. Defaults to 0
     *
     * If > size, start will be set to size. In this case, no element will be
     * deleted but the method can still add elements to the end of the list.
     *
     * If < 0, start will indicate an offset from the end of the list. For example,
     * -2 refers to the second to last element of the list.
     *
     * If < -size, start will be set to 0
     * @param count - The number of elements to remove. Defaults to size - start
     *
     * If >= size - start (that is, if it's >= than the number of elements from start
     * until the end of the list), then all the elements from start until the end of
     * the list will be removed.
     *
     * If <= 0, no elements are removed
     * @param elements - The new elements to insert at start. Defaults to none
     *
     * @returns A new list of deleted elements
     */
    splice(start?: number, count?: number, elements?: Iterable<T>): List<T> {
        start = wrap(start ?? 0, 0, this.size);
        count = clamp(count ?? this.size, 0, this.size - start);
        const list = new ArrayList(this.array.splice(start, count));
        for (const items of batch(10000, elements ?? [])) {
            this.array.splice(start, 0, ...items);
            start += items.length;
        }
        return list;
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
     * Update the elements of the list
     *
     * @param callback - A function called for each index. Returns the new element
     *
     * @returns The list on which this method was called
     */
    update(callback: (element: T, index: number) => T): this;
    /**
     * Update the elements of the list
     *
     * Negative indices can be used to indicate an offset from the
     * end of the list. For example, -2 refers to the second to last element of the list.
     *
     * @param min - Where to start filling the list, inclusive. Defaults to 0
     * @param callback - A function called for each index. Returns the new element
     *
     * @returns The list on which this method was called
     */
    update(min: number | undefined, callback: (element: T, index: number) => T): this;
    /**
     * Update the elements of the list
     *
     * Negative indices can be used for min and max to indicate an offset from the
     * end of the list. For example, -2 refers to the second to last element of the list.
     *
     * @param min - Where to start filling the list, inclusive. Defaults to 0
     * @param max - Where to stop filling the list, exclusive. Defaults to list.size
     * @param callback - A function called for each index. Returns the new element
     *
     * @returns The list on which this method was called
     */
    update(
        min: number | undefined,
        max: number | undefined,
        callback: (element: T, index: number) => T,
    ): this;
    update(
        min: number | undefined | ((element: T, index: number) => T),
        max?: number | ((element: T, index: number) => T),
        callback?: (element: T, index: number) => T,
    ): this {
        if (callback == null) {
            if (arguments.length < 2) {
                callback = min as (element: T, index: number) => T;
                min = undefined;
            } else {
                callback = max as (element: T, index: number) => T;
                max = undefined;
            }
        }
        min = wrap((min as number) ?? 0, 0, this.size);
        max = wrap((max as number) ?? this.size, 0, this.size);
        while (min < max) {
            this.array[min] = callback(this.array[min], min);
            ++min;
        }
        return this;
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
        min = wrap(min ?? 0, 0, this.size);

        let len: () => number;
        if (max == null) {
            len = () => this.size;
        } else if (max >= 0) {
            len = () => Math.min(max, this.size);
        } else {
            len = () => this.size + max;
        }

        while (min < len()) {
            yield this.array[min++];
        }
    }
}
