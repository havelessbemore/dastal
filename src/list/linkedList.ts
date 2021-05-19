import { List } from './list';
import { wrap } from '../utils';

/**
 * A linked node interface.
 *
 * Each node links to its next neighbor.
 */
export interface LinkedNode<T> {
    /**
     * A link to the node's neighbor
     */
    next?: LinkedNode<T>;
    /**
     * The value of the node
     */
    value: T;
}
/**
 * A (circular) linked list implementation of the {@link List} interface.
 */
export class LinkedList<T> implements List<T> {
    /**
     * @ignore
     */
    protected length: number;
    /**
     * @ignore
     */
    protected root: LinkedNode<T>;
    /**
     * @ignore
     */
    protected tail: LinkedNode<T>;

    constructor(elements?: Iterable<T>) {
        this.length = 0;
        this.root = {} as LinkedNode<T>;
        this.tail = this.root.next = this.root;
        for (const element of elements || []) {
            this.push(element);
        }
    }
    /**
     * Add the element at the specified index.
     *
     * @param index - The index to add into (0 <= index <= size)
     * @param element - The element to add
     *
     * @returns The new size of the list
     */
    add(index: number, value: T): number {
        if (index < 0 || index >= this.length) {
            return index == this.length ? this.push(value) : this.length;
        }
        const prev = this._get(index - 1);
        prev.next = { value, next: prev.next };
        return ++this.length;
    }
    /**
     * Add elements at the specified index.
     *
     * @param index - The index to add into (0 <= index <= size)
     * @param element - The elements to add
     *
     * @returns The new size of the list
     */
    addAll(index: number, elements: Iterable<T>): number {
        if (index < 0 || index >= this.length) {
            if (index == this.length) {
                for (const element of elements) {
                    this.push(element);
                }
            }
            return this.length;
        }
        let prev = this._get(index - 1);
        const next = prev.next!;
        for (const value of elements) {
            const node = { value };
            prev.next = node;
            prev = node;
            ++this.length;
        }
        prev.next = next;
        return this.length;
    }
    /**
     * Removes all elements
     */
    clear(): void {
        this.length = 0;
        this.tail = this.root.next = this.root;
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
    concat(...lists: Iterable<T>[]): LinkedList<T> {
        const out = new LinkedList(this);
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
        // Check if copying to the same section
        index = wrap(index, 0, this.length);
        min = wrap(min ?? 0, 0, this.length);
        if (min === index) {
            return this;
        }

        // Check if the section to copy has no length
        max = wrap(max ?? this.length, 0, this.length);
        max = min + Math.min(max - min, this.length - index);
        if (min >= max) {
            return this;
        }

        // Check for overlap edge case
        if (min < index && index < max) {
            let prev = this._get(index - 1);
            this._reverse(prev, max - min);
            prev = this._copyWithin(this._get(min - 1), prev, index - min);
            this._reverse(prev, max - index);
            return this;
        }

        // Copy the section to the destination
        this._copyWithin(this._get(min - 1), this._get(index - 1), max - min);
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
        min = wrap(min ?? 0, 0, this.length);
        max = wrap(max ?? this.length, 0, this.length);
        if (min < max) {
            let node = this._get(min);
            do {
                node.value = element;
                node = node.next!;
            } while (++min < max);
        }
        return this;
    }
    /**
     * Return the element at the specified index.
     *
     * @param index - The index to retrieve (0 <= index < size)
     *
     * @returns The element at the index, or `undefined` if index is invalid
     */
    get(index: number): T | undefined {
        return index < 0 || index >= this.length ? undefined : this._get(index).value;
    }
    /**
     * Update the element at the specified index.
     *
     * @param index - The index to retrieve (0 <= index < size)
     * @param callback - A function that receives the previous element and returns
     * the new element. The function is only called if the index is valid
     *
     * @returns The previous element at the index, or `undefined` if index is invalid
     */
    getSet(index: number, callback: (element: T) => T): T | undefined {
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        const node = this._get(index);
        const value = node.value;
        node.value = callback(node.value);
        return value;
    }
    /**
     * Retrieves and removes the end of the list
     *
     * @returns The value at the end of the list, or `undefined` if empty.
     */
    pop(): T | undefined {
        return this.remove(this.length - 1);
    }
    /**
     * Inserts the specified value into the end of the list
     *
     * @param element - The element to be inserted
     *
     * @returns `true` upon success, otherwise `false`
     */
    push(value: T): number {
        const tail: LinkedNode<T> = { value } as LinkedNode<T>;
        tail.next = this.root;
        this.tail.next = tail;
        this.tail = tail;
        return ++this.length;
    }
    /**
     * Retrieves and removes the element at the given index.
     *
     * @param index - The index to remove (0 <= index < size)
     *
     * @returns The value at the index, or `undefined` if the index is invalid
     */
    remove(index: number): T | undefined {
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        const prev = this._get(index - 1);
        const node = prev.next!;
        prev.next = node.next;
        --this.length;
        return node.value;
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
        min = wrap(min ?? 0, 0, this.length);
        max = wrap(max ?? this.length, 0, this.length);
        if (max - min > 1) {
            const prev = this._get(min - 1);
            this.tail = max >= this.length ? prev.next! : this.tail;
            this._reverse(prev, max - min);
        }
        return this;
    }
    /**
     * Update the element at the specified index.
     *
     * @param index - The index to retrieve (0 <= index < size)
     * @param element - The new element to insert at index
     *
     * @returns The previous element in the index, or undefined if the index is invalid
     */
    set(index: number, element: T): T | undefined {
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        const node = this._get(index);
        const value = node.value;
        node.value = element;
        return value;
    }
    /**
     * Retrieves and removes the first element in the list
     *
     * @returns The value at the front of the list or `undefined` if this list is empty.
     */
    shift(): T | undefined {
        if (this.length < 1) {
            return undefined;
        }
        const head = this.root.next!;
        this.root.next = head.next;
        --this.length;
        return head.value;
    }
    /**
     * The number of elements in this list
     */
    get size(): number {
        return this.length;
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
    slice(min?: number, max?: number): LinkedList<T> {
        return new LinkedList(this.view(min, max));
    }
    /**
     * Receive an iterator through the list.
     *
     * **Note:** Unexpected behavior can occur if the collection is modified during iteration.
     *
     * @returns An iterator through the list
     */
    *[Symbol.iterator](): Iterator<T> {
        let node = this.root;
        for (let i = 0; i < this.length; ++i) {
            node = node!.next!;
            yield node.value;
        }
    }
    /**
     * Inserts the specified value into the front of the list
     *
     * @param element - The element to be inserted
     *
     * @returns `true` upon success, otherwise `false`
     */
    unshift(value: T): number {
        const head: LinkedNode<T> = { value } as LinkedNode<T>;
        head.next = this.root.next;
        this.root.next = head;
        return ++this.length;
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
        min = wrap(min ?? 0, 0, this.length);

        let len = () => Math.min(max!, this.length);
        if (max == null) {
            len = () => this.length;
        } else if (max < 0) {
            len = () => this.length + max!;
        }

        if (min < len()) {
            let prev = this._get(min);
            do {
                yield prev.value;
                prev = prev.next!;
            } while (++min < len());
        }
    }
    /**
     * @ignore
     * Copy values from 'from' to 'to'.
     *
     * @param from - The initial node to copy from
     * @param prev - The root of the initial node to copy to
     * @param count - The number of values to copy
     */
    protected _copyWithin(from: LinkedNode<T>, to: LinkedNode<T>, count: number): LinkedNode<T> {
        while (count-- > 0) {
            from = from.next!;
            to = to.next!;
            to.value = from.value;
        }
        return to;
    }
    /**
     * @ignore
     * Get the node at the given index.
     *
     * @param index - The index to retrieve
     *
     * @returns The node at the given index
     */
    protected _get(index: number): LinkedNode<T> {
        let node = this.root!;
        while (index-- >= 0) {
            node = node.next!;
        }
        return node;
    }
    /**
     * @ignore
     * Reverse 'count' nodes beginning from 'node'
     *
     * @param node - The initial node to reverse from
     * @param count - The number of values to reverse
     *
     * @returns
     */
    protected _reverse(root: LinkedNode<T>, count: number): void {
        const tail = root.next!;
        let prev = tail;
        let node = tail.next!;
        while (--count > 0) {
            const next = node.next!;
            node.next = prev;
            prev = node;
            node = next;
        }
        root.next = prev;
        tail.next = node;
    }
}
