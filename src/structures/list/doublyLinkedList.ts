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

    clear(): void {
        this.length = 0;
        this.root.prev = this.root.next = this.root;
    }

    get(index: number): T | undefined {
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        return this._get(index).value;
    }

    push(value: T): boolean {
        const tail = this.root.prev;
        const node = { next: this.root, prev: tail, value };
        tail.next = this.root.prev = node;
        ++this.length;
        return true;
    }

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
        const head = this.root.next;
        head.next.prev = this.root;
        this.root.next = head.next;
        --this.length;
        return head.value;
    }

    get size(): number {
        return this.length;
    }

    toArray(): T[] {
        const n = this.length;
        const out = new Array(n);

        let node = this.root;
        for (let i = 0; i < n; ++i) {
            node = node.next;
            out[i] = node.value;
        }

        return out;
    }

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
