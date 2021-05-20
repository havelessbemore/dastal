import { List } from './list';
import { clamp, wrap } from './utils';

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
        this._addAll(this.root, elements ?? []);
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
        if (index < 0 || index > this.length) {
            return this.length;
        }
        const prev = this._get(index - 1);
        const node = { next: prev.next, prev, value };
        prev.next = node;
        node.next!.prev = node;
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
        if (index >= 0 && index <= this.length) {
            this._addAll(this._get(index), elements);
        }
        return this.length;
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
            let nodeA = this._get(max);
            let nodeB = this._get(index + (max - min));
            do {
                nodeA = nodeA.prev!;
                nodeB = nodeB.prev!;
                nodeB.value = nodeA.value;
            } while (++min < max);
            return this;
        }

        // Copy the section to the destination
        let nodeA = this._get(min);
        let nodeB = this._get(index);
        do {
            nodeB.value = nodeA.value;
            nodeA = nodeA.next!;
            nodeB = nodeB.next!;
        } while (++min < max);
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
        const prev = this.root.prev!;
        const node = { next: this.root, prev, value };
        prev.next = this.root.prev = node;
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
        const node = this._get(index);
        node.prev!.next = node.next;
        node.next!.prev = node.prev;
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
        if (max - min < 2) {
            return this;
        }
        const root = this._get(min - 1);
        const tail = root.next!;
        let node = tail;
        do {
            const temp = node.next!;
            node.next = node.prev;
            node.prev = temp;
            root.next = node;
            node = temp;
        } while (++min < max);
        tail.next = node;
        node.prev = tail;
        root.next!.prev = root;
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
    slice(min?: number, max?: number): DoublyLinkedList<T> {
        return new DoublyLinkedList(this.view(min, max));
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

        // If not modifying the list
        const list = new DoublyLinkedList<T>();
        if (elements == null && count < 1) {
            return list;
        }

        // Delete elements
        let node = this._get(start);
        while (count-- > 0) {
            list.push(node.value);
            node.prev!.next = node.next!;
            node.next!.prev = node.prev!;
            node = node.next!;
            --this.length;
        }

        // Add elements
        this._addAll(node, elements ?? []);

        return list;
    }
    /**
     * Receive an iterator through the list.
     *
     * **Note:** Unexpected behavior can occur if the collection is modified during iteration.
     *
     * @returns An iterator through the list
     */
    *[Symbol.iterator](): Iterator<T> {
        for (let node = this.root.next!; node !== this.root; node = node.next!) {
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
        min = wrap((min as number) ?? 0, 0, this.length);
        max = wrap((max as number) ?? this.length, 0, this.length);
        if (min < max) {
            let node = this._get(min);
            do {
                node.value = callback(node.value, min);
                node = node.next!;
            } while (++min < max);
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
        min = wrap(min ?? 0, 0, this.length);

        let len: () => number;
        if (max == null) {
            len = () => this.length;
        } else if (max >= 0) {
            len = () => max;
        } else {
            len = () => this.length + max;
        }

        if (min < len()) {
            let node = this._get(min);
            do {
                yield node.value;
                node = node.next!;
            } while (++min < len() && node !== this.root);
        }
    }
    /**
     * @ignore
     *
     */
    protected _addAll(next: DoublyLinkedNode<T>, elements: Iterable<T>): void {
        let prev = next.prev!;
        for (const value of elements) {
            const node = { prev, value };
            prev.next = node;
            prev = node;
            ++this.length;
        }
        prev.next = next;
        next.prev = prev;
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
