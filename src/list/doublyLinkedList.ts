import { List } from './list';

/**
 * A doubly-linked node version of the {@link LinkedNode} interface.
 *
 * Each node links to its neighbors on the left (prev) and right (next) of it.
 */
export interface DoublyLinkedNode<T> {
    /**
     * A link to the node's next (right) neighbor
     */
    next?: DoublyLinkedNode<T>;
    /**
     * A link to the node's previous (left) neighbor
     */
    prev?: DoublyLinkedNode<T>;
    /**
     * The value of the node
     */
    value: T;
}
/**
 * A (circular) doubly-linked list implementation of the {@link List} interface.
 *
 * Operations that index into the list will traverse the list from the beginning or the end, whichever is closer to the specified index.
 */
export class DoublyLinkedList<T> implements List<T> {
    /**
     * @ignore
     * The number of elements in this list
     */
    protected length: number;
    /**
     * @ignore
     * The first node in the list
     */
    protected root: DoublyLinkedNode<T>;

    constructor(elements?: Iterable<T>) {
        this.length = 0;
        this.root = {} as DoublyLinkedNode<T>;
        this.root.prev = this.root.next = this.root;
        for (const element of elements || []) {
            this.push(element);
        }
    }
    /**
     * Add the element at the specified index
     *
     * @param index - The index to add into
     * @param value - The element to add
     */
    add(index: number, value: T): number {
        if (index < 0 || index > this.length) {
            return this.length;
        }
        const prev = this._get(index - 1);
        const node = { next: prev.next, prev, value };
        prev.next = node.next!.prev = node;
        return ++this.length;
    }
    /**
     * Removes all elements
     */
    clear(): void {
        this.length = 0;
        this.root.prev = this.root.next = this.root;
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
    concat(...lists: Iterable<T>[]): DoublyLinkedList<T> {
        const out = new DoublyLinkedList(this);
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
     * @param callback - A function that receives the previous element and returns the new element
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
     * @returns The element at the end of the list, or `undefined` if empty.
     */
    pop(): T | undefined {
        if (this.length < 1) {
            return undefined;
        }
        const tail = this.root.prev!;
        tail.prev!.next = this.root;
        this.root.prev = tail.prev;
        --this.length;
        return tail.value;
    }
    /**
     * Inserts the specified element into the end of the list
     *
     * @param element - The element to be inserted
     *
     * @returns `true` upon success, otherwise `false`
     */
    push(value: T): number {
        const tail = this.root.prev!;
        const node = { next: this.root, prev: tail, value };
        tail.next = this.root.prev = node;
        return ++this.length;
    }
    /**
     * Retrieves and removes the element at the given index
     *
     * @param index - The index to remove
     *
     * @returns The element at the index or `undefined` if the index is invalid
     */
    remove(index: number): T | undefined {
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        const node = this._get(index);
        node.prev!.next = node.next;
        node.next!.prev = node.prev;
        --this.length;
        return node.value;
    }
    /**
     * Reverses the elements in the list in place.
     *
     * @returns a reference to the same list
     */
    reverse(): this {
        let node = this.root;
        for (let n = this.length; n >= 0; --n) {
            const temp = node.next!;
            node.next = node.prev;
            node.prev = temp;
            node = temp;
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
        const prev = node.value;
        node.value = element;
        return prev;
    }
    /**
     * Retrieves and removes the first element in the list
     *
     * @returns The element at the front of the list or `undefined` if this list is empty.
     */
    shift(): T | undefined {
        if (this.length < 1) {
            return undefined;
        }
        const head = this.root.next!;
        head.next!.prev = this.root;
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
     * Receive an iterator through the list.
     *
     * **Note:** Unexpected behavior can occur if the collection is modified during iteration.
     *
     * @returns An iterator through the list
     */
    *[Symbol.iterator](): Iterator<T> {
        let node = this.root;
        for (let i = 0; i < this.length; ++i) {
            node = node.next!;
            yield node.value;
        }
    }
    /**
     * Inserts the specified element into the front of the list
     *
     * @param element - The element to be inserted
     *
     * @returns `true` upon success, otherwise `false`
     */
    unshift(value: T): number {
        const head = this.root.next!;
        const node = { next: head, prev: this.root, value };
        this.root.next = head.prev = node;
        return ++this.length;
    }
    /**
     * @ignore
     * A helper method to iterate and return the node at the given index.
     *
     * Depending on the index, the list will be traversed from beginning or end; whichever is closest to the specified index.
     *
     * @param index - The index to retrieve
     *
     * @returns The node at the given index
     */
    protected _get(index: number): DoublyLinkedNode<T> {
        let node = this.root;

        if (index < this.length / 2) {
            while (index-- >= 0) {
                node = node.next!;
            }
        } else {
            for (index = this.length - index; index > 0; --index) {
                node = node.prev!;
            }
        }

        return node;
    }
}
