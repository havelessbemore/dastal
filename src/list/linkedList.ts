import { List } from './list';
import { clamp, first, iterate, wrap } from '../utils';

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
        // Check if copying to itself
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

        // Copy to earlier in the list
        if (index < min) {
            const node = this._get(index - 1);
            this._copyWithin(this._get(min - index - 1, node), node, max - min);
            return this;
        }

        // Copy to later in the list
        if (index > max) {
            const node = this._get(min - 1);
            this._copyWithin(node, this._get(index - min - 1, node), max - min);
            return this;
        }

        // Copy to overlapping destination
        const nodeA = this._get(min - 1);
        const nodeC = this._get(max - min - 1, nodeA);
        const nodeD = this._copyWithin(nodeA, nodeC, index - min);
        if (index + (max - min) >= this.length) {
            this.tail = nodeC;
        }
        const temp = nodeA.next;
        nodeA.next = nodeC.next;
        nodeC.next = nodeD.next;
        nodeD.next = temp;
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
        if (max - min < 2) {
            return this;
        }
        const root = this._get(min - 1);
        this.tail = max >= this.length ? root.next! : this.tail;
        const tail = root.next!;
        let prev = tail;
        let node = tail.next!;
        while (++min < max) {
            const next = node.next!;
            node.next = prev;
            prev = node;
            node = next;
        }
        root.next = prev;
        tail.next = node;
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
        const newTail = start + count >= this.size;
        const list = new LinkedList<T>();
        const iterator = (elements ?? [])[Symbol.iterator]();

        // Replace elements
        let prev = this._get(start - 1);
        for (const element of first(count, iterator)) {
            const node = prev.next!;
            list.push(node.value);
            node.value = element;
            prev = node;
            --count;
        }

        // Delete elements
        if (count > 0) {
            do {
                const node = prev.next!;
                list.push(node.value);
                prev.next = node.next;
                --this.length;
            } while (--count > 0);

            // Add elements
        } else {
            for (const value of iterate(iterator)) {
                const node = { next: prev.next, value };
                prev.next = node;
                prev = node;
                ++start;
                ++this.length;
            }
        }

        // Update state
        if (newTail) {
            this.tail = prev;
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
    protected _get(index: number, root: LinkedNode<T> = this.root): LinkedNode<T> {
        let node = root!;
        while (index-- >= 0) {
            node = node.next!;
        }
        return node;
    }
}
