import { List } from './list';

export interface LinkedNode<T> {
    next: LinkedNode<T>;
    value: T;
}

export class LinkedList<T> implements List<T> {
    protected length: number;
    protected tail?: LinkedNode<T>;

    constructor() {
        this.length = 0;
    }

    /**
     * Add the element at the specified index
     *
     * @param index - The index to add into
     * @param element - The element to add
     */
    add(index: number, value: T): boolean {
        if (index < 0 || index >= this.length) {
            return index == this.length ? this.push(value) : false;
        }
        const prev = this._get(index - 1);
        prev.next = { value, next: prev.next };
        ++this.length;
        return true;
    }

    /**
     * Removes all elements
     */
    clear(): void {
        this.length = 0;
        this.tail = undefined;
    }

    /**
     * Return the element at the specified index
     *
     * @param index - The index to retrieve
     */
    get(index: number): T | undefined {
        return index < 0 || index >= this.length ? undefined : this._get(index).value;
    }

    /**
     * Update the element at the specified index
     *
     * @param index - The index to retrieve
     * @param callback - A function that receives the previous element and returns the new element
     */
    getSet(index: number, callback: (element: T) => T): void {
        if (index >= 0 && index < this.length) {
            const node = this._get(index);
            node.value = callback(node.value);
        }
    }

    /**
     * Retrieves and removes the end of the list
     *
     * @returns The value at the end of the list or `undefined` if empty.
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
    push(value: T): boolean {
        this.unshift(value);
        this.tail = this.tail!.next;
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
        if (index < 0 || index >= this.length) {
            return undefined;
        }

        const prev = this._get(index - 1);
        prev.next = prev.next.next;
        if (--this.length < 1) {
            this.tail = undefined;
        }

        return prev.value;
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

        const head = this.tail.next;
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
     * Receive an iterator through the list
     *
     * @returns An iterator through the list
     */
    *[Symbol.iterator](): Iterator<T> {
        let node = this.tail;
        for (let i = 0; i < this.length; ++i) {
            node = node!.next;
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
    unshift(value: T): boolean {
        const head: LinkedNode<T> = { value } as LinkedNode<T>;

        if (this.tail == null) {
            head.next = head;
            this.tail = head;
        } else {
            head.next = this.tail.next;
            this.tail.next = head;
        }

        ++this.length;
        return true;
    }

    protected _get(index: number): LinkedNode<T> {
        let node = this.tail!;
        while (index-- >= 0) {
            node = node.next;
        }
        return node;
    }
}
