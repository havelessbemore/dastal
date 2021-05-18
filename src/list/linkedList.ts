import { List } from './list';

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
    protected tail?: LinkedNode<T>;

    constructor(elements?: Iterable<T>) {
        this.length = 0;
        for (const element of elements || []) {
            this.push(element);
        }
    }
    /**
     * Add the element at the specified index
     *
     * @param index - The index to add into
     * @param element - The element to add
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
     * Removes all elements
     */
    clear(): void {
        this.length = 0;
        this.tail = undefined;
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
     * Returns the this object after filling the section identified by min and max with element
     *
     * @param element — element to fill list section with
     * @param min - index to start filling the list at. If start is negative,
     * it is treated as length+start where length is the length of the list.
     * @param end - index to stop filling the list at. If end is negative,
     * it is treated as length+end where length is the length of the list.
     *
     * @returns The list on which this method was called
     */
    fill(element: T, min?: number, max?: number): this {
        min = min == null ? 0 : min < 0 ? this.length + min : min;
        max = max == null ? this.length : max < 0 ? this.length + max : max;
        min = Math.min(this.length, Math.max(0, min));
        max = Math.min(this.length, Math.max(0, max));
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
     * Return the element at the specified index
     *
     * @param index - The index to retrieve
     *
     * @returns The element at the index, or `undefined` if index is invalid
     */
    get(index: number): T | undefined {
        return index < 0 || index >= this.length ? undefined : this._get(index).value;
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
        this.unshift(value);
        this.tail = this.tail!.next;
        return this.length;
    }
    /**
     * Retrieves and removes the element at the given index
     *
     * @param index - The index to remove
     *
     * @returns The value at the index or `undefined` if the index is invalid
     */
    remove(index: number): T | undefined {
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        const prev = this._get(index - 1);
        const node = prev.next!;
        prev.next = node.next;
        if (--this.length < 1) {
            this.tail = undefined;
        }
        return node.value;
    }
    /**
     * Reverses the elements in the list in place.
     *
     * @returns a reference to the same list
     */
    reverse(): this {
        if (this.length > 1) {
            let prev = this.tail!;
            let node = prev.next!;
            this.tail = node;
            for (let n = this.length; n > 0; --n) {
                const next = node.next!;
                node.next = prev;
                prev = node;
                node = next;
            }
        }
        return this;
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
        if (this.tail == null) {
            return undefined;
        }
        const head = this.tail.next!;
        this.tail.next = head.next;
        if (--this.length < 1) {
            this.tail = undefined;
        }
        return head.value;
    }
    /**
     * The number of elements in this list
     */
    get size(): number {
        return this.length;
    }
    /**
     * Receive an iterator through the list.
     *
     * **Note:** Unexpected behavior can occur if the collection is modified during iteration.
     *
     * @returns An iterator through the list
     */
    *[Symbol.iterator](): Iterator<T> {
        let node = this.tail;
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
        if (this.tail == null) {
            head.next = head;
            this.tail = head;
        } else {
            head.next = this.tail.next;
            this.tail.next = head;
        }
        return ++this.length;
    }
    /**
     * @ignore
     * A helper method to iterate and return the node at the given index.
     *
     * @param index - The index to retrieve
     *
     * @returns The node at the given index
     */
    protected _get(index: number): LinkedNode<T> {
        let node = this.tail!;
        while (index-- >= 0) {
            node = node.next!;
        }
        return node;
    }
}
