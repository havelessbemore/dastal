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

    add(index: number, value: T): boolean {
        if (index < 0 || index >= this.length) {
            return index == this.length ? this.push(value) : false;
        }
        const prev = this._get(index - 1);
        prev.next = { value, next: prev.next };
        ++this.length;
        return true;
    }

    clear(): void {
        this.length = 0;
        this.tail = undefined;
    }

    get(index: number): T | undefined {
        return index < 0 || index >= this.length ? undefined : this._get(index).value;
    }

    push(value: T): boolean {
        this.unshift(value);
        this.tail = this.tail!.next;
        return true;
    }

    pop(): T | undefined {
        return this.remove(this.length - 1);
    }

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

    get size(): number {
        return this.length;
    }

    toArray(): T[] {
        const n = this.length;
        const out = new Array(n);

        let node = this.tail;
        for (let i = 0; i < n; ++i) {
            node = node!.next;
            out[i] = node.value;
        }

        return out;
    }

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
