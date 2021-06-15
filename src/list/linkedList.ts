import { clamp } from 'src/math';
import { CompareFn } from '..';
import { LinkedNode } from './linkedNode';
import { List } from './list';
import { linkedMergeSort, cwrap } from './utils';

/**
 * A (circular) linked list implementation of the {@link List} interface.
 */
export class LinkedList<T> implements List<T> {
    /**
     * The number of elements in the list.
     */
    protected length: number;
    /**
     * The sentinel node at the front of the list.
     */
    protected root: LinkedNode<T>;
    /**
     * The last node of the list.
     */
    protected tail: LinkedNode<T>;
    /**
     * Instantiate the list.
     *
     * @param elements - A set of elements to initialize the list with.
     */
    constructor(elements?: Iterable<T>) {
        this.length = 0;
        this.root = {} as LinkedNode<T>;
        this.root.next = this.root;
        this.tail = this._addAll(this.root, elements ?? []);
    }

    add(index: number, value: T): number {
        if (index >= 0 && index < this.length) {
            const prev = this._get(index - 1);
            prev.next = { value, next: prev.next };
            ++this.length;
        } else if (index === this.length) {
            this.push(value);
        }
        return this.length;
    }

    addAll(index: number, elements: Iterable<T>): number {
        if (index >= 0 && index < this.length) {
            this._addAll(this._get(index - 1), elements);
        } else if (index === this.length) {
            this.tail = this._addAll(this.tail, elements);
        }
        return this.length;
    }

    clear(): void {
        this.length = 0;
        this.tail = this.root.next = this.root;
    }

    concat(...lists: Iterable<T>[]): LinkedList<T> {
        const out = new LinkedList(this);
        for (const list of lists) {
            out.addAll(out.size, list);
        }
        return out;
    }

    copyWithin(index: number, min?: number, max?: number): this {
        // Check if copying to itself
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
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        return index < this.length - 1 ? this._get(index).value : this.tail.value;
    }

    getSet(index: number, callback: (element: T) => T): T | undefined {
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        const node = index < this.length - 1 ? this._get(index) : this.tail;
        const value = node.value;
        node.value = callback(node.value);
        return value;
    }

    pop(): T | undefined {
        if (this.length < 1) {
            return undefined;
        }
        const value = this.tail.value;
        this.tail = this._get(this.length - 2);
        this.tail.next = this.root;
        --this.length;
        return value;
    }

    push(value: T): number {
        const tail: LinkedNode<T> = { next: this.root, value };
        this.tail.next = tail;
        this.tail = tail;
        return ++this.length;
    }

    remove(index: number): T | undefined {
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        const prev = this._get(index - 1);
        const node = prev.next!;
        prev.next = node.next;
        if (index === --this.length) {
            this.tail = prev;
        }
        return node.value;
    }

    reverse(min?: number, max?: number): this {
        min = cwrap(min ?? 0, 0, this.length);
        max = cwrap(max ?? this.length, 0, this.length);
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
        return this.remove(0);
    }

    get size(): number {
        return this.length;
    }

    slice(min?: number, max?: number): LinkedList<T> {
        return new LinkedList(this.view(min, max));
    }

    splice(start?: number, count?: number, elements?: Iterable<T>): List<T> {
        start = cwrap(start ?? 0, 0, this.size);
        count = clamp(count ?? this.size, 0, this.size - start);

        // If not modifying the list
        const deleted = new LinkedList<T>();
        if (elements == null && count < 1) {
            return deleted;
        }

        // Delete elements
        let prev = this._get(start - 1);
        const newTail = start + count >= this.size;
        while (count-- > 0) {
            const node = prev.next!;
            deleted.push(node.value);
            prev.next = node.next;
            --this.length;
        }

        // Add elements
        prev = this._addAll(prev, elements ?? []);
        this.tail = newTail ? prev : this.tail;

        return deleted;
    }

    sort(compareFn: CompareFn<T>): this {
        if (this.length > 1) {
            const [head, tail] = linkedMergeSort(this.root.next!, this.length, false, compareFn);
            this.root.next = head;
            this.tail = tail;
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
        return this.add(0, value);
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

    protected _addAll(prev: LinkedNode<T>, elements: Iterable<T>): LinkedNode<T> {
        const next = prev.next!;
        for (const value of elements) {
            const node = { value };
            prev.next = node;
            prev = node;
            ++this.length;
        }
        prev.next = next;
        return prev;
    }
    /**
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
