import { CompareFn } from '..';
import { List } from './list';
import { clamp, mergeSort, cwrap } from './utils';

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
     * The number of elements in the list
     */
    protected length: number;
    /**
     * The sentinel node at the fron of the list
     */
    protected root: DoublyLinkedNode<T>;
    /**
     * Instantiate the list.
     *
     * @param elements - A set of elements to initialize the list with.
     */
    constructor(elements?: Iterable<T>) {
        this.length = 0;
        this.root = {} as DoublyLinkedNode<T>;
        this.root.prev = this.root.next = this.root;
        this._addAll(this.root, elements ?? []);
    }

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

    addAll(index: number, elements: Iterable<T>): number {
        if (index >= 0 && index <= this.length) {
            this._addAll(this._get(index), elements);
        }
        return this.length;
    }

    clear(): void {
        this.length = 0;
        this.root.prev = this.root.next = this.root;
    }

    concat(...lists: Iterable<T>[]): DoublyLinkedList<T> {
        const out = new DoublyLinkedList(this);
        for (const list of lists) {
            out.addAll(out.size, list);
        }
        return out;
    }

    copyWithin(index: number, min?: number, max?: number): this {
        // Check if copying to the same section
        index = cwrap(index, 0, this.length);
        min = cwrap(min ?? 0, 0, this.length);
        if (min === index) {
            return this;
        }

        // Check if the section to copy has no length
        max = cwrap(max ?? this.length, 0, this.length);
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

    fill(element: T, min?: number, max?: number): this {
        min = cwrap(min ?? 0, 0, this.length);
        max = cwrap(max ?? this.length, 0, this.length);
        if (min < max) {
            let node = this._get(min);
            do {
                node.value = element;
                node = node.next!;
            } while (++min < max);
        }
        return this;
    }

    get(index: number): T | undefined {
        return index < 0 || index >= this.length ? undefined : this._get(index).value;
    }

    getSet(index: number, callback: (element: T) => T): T | undefined {
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        const node = this._get(index);
        const value = node.value;
        node.value = callback(node.value);
        return value;
    }

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

    push(value: T): number {
        const prev = this.root.prev!;
        const node = { next: this.root, prev, value };
        prev.next = this.root.prev = node;
        return ++this.length;
    }

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

    reverse(min?: number, max?: number): this {
        min = cwrap(min ?? 0, 0, this.length);
        max = cwrap(max ?? this.length, 0, this.length);
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

    set(index: number, element: T): T | undefined {
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        const node = this._get(index);
        const value = node.value;
        node.value = element;
        return value;
    }

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

    get size(): number {
        return this.length;
    }

    slice(min?: number, max?: number): DoublyLinkedList<T> {
        return new DoublyLinkedList(this.view(min, max));
    }

    splice(start?: number, count?: number, elements?: Iterable<T>): List<T> {
        start = cwrap(start ?? 0, 0, this.size);
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

    sort(compareFn: CompareFn<T>): this {
        if (this.length > 1) {
            const [head, tail] = mergeSort(this.root.next!, this.length, true, compareFn);
            this.root.next = head;
            tail.next!.prev = tail;
        }
        return this;
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

    unshift(value: T): number {
        const head = this.root.next!;
        const node = { next: head, prev: this.root, value };
        this.root.next = head.prev = node;
        return ++this.length;
    }

    update(callback: (element: T, index: number) => T): this;
    update(min: number | undefined, callback: (element: T, index: number) => T): this;
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
        min = cwrap((min as number) ?? 0, 0, this.length);
        max = cwrap((max as number) ?? this.length, 0, this.length);
        if (min < max) {
            let node = this._get(min);
            do {
                node.value = callback(node.value, min);
                node = node.next!;
            } while (++min < max);
        }
        return this;
    }

    *view(min?: number, max?: number): Iterable<T> {
        min = cwrap(min ?? 0, 0, this.length);

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
