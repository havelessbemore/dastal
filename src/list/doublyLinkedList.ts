import { List } from './list';

export interface DoublyLinkedNode<T> {
    next: DoublyLinkedNode<T>;
    prev: DoublyLinkedNode<T>;
    value: T;
}

export class DoublyLinkedList<T> implements List<T> {
    protected length: number;
    protected root: DoublyLinkedNode<T>;

    constructor() {
        this.length = 0;
        this.root = {} as DoublyLinkedNode<T>;
        this.root.prev = this.root.next = this.root;
    }

    /**
     * Add the element at the specified index
     *
     * @param index - The index to add into
     * @param element - The element to add
     */
    add(index: number, value: T): boolean {
        if (index < 0 || index > this.length) {
            return false;
        }
        const prev = this._get(index - 1);
        const node = { next: prev.next, prev, value };
        prev.next = node.next.prev = node;
        ++this.length;
        return true;
    }

    /**
     * Removes all elements
     */
    clear(): void {
        this.length = 0;
        this.root.prev = this.root.next = this.root;
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
        if (this.length < 1) {
            return undefined;
        }
        const tail = this.root.prev;
        tail.prev.next = this.root;
        this.root.prev = tail.prev;
        --this.length;
        return tail.value;
    }

    /**
     * Inserts the specified value into the end of the list
     *
     * @param element - The element to be inserted
     *
     * @returns `true` upon success, otherwise `false`
     */
    push(value: T): boolean {
        const tail = this.root.prev;
        const node = { next: this.root, prev: tail, value };
        tail.next = this.root.prev = node;
        ++this.length;
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
        const node = this._get(index);
        node.prev.next = node.next;
        node.next.prev = node.prev;
        --this.length;
        return node.value;
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
        if (this.length < 1) {
            return undefined;
        }
        const head = this.root.next;
        head.next.prev = this.root;
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
     * Receive an iterator through the list
     *
     * @returns An iterator through the list
     */
    *[Symbol.iterator](): Iterator<T> {
        let node = this.root;
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
        const head = this.root.next;
        const node = { next: head, prev: this.root, value };
        this.root.next = head.prev = node;
        ++this.length;
        return true;
    }

    protected _get(index: number): DoublyLinkedNode<T> {
        let node = this.root;

        if (index < this.length / 2) {
            while (index-- >= 0) {
                node = node.next;
            }
        } else {
            index = this.length - index;
            while (index-- > 0) {
                node = node.prev;
            }
        }

        return node;
    }
}
