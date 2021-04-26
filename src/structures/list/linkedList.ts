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
        if (index < 0 || index > this.length) {
            return false;
        }
        if (index === this.length) {
            return this.push(value);
        }
        ++this.length;
        const parent = this._get(index - 1);
        parent.next = { value, next: parent.next };
        return true;
    }

    clear(): void {
        this.length = 0;
        this.tail = undefined;
    }

    get(index: number): T | undefined {
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        return this._get(index).value;
    }

    push(value: T): boolean {
        this.unshift(value);
        this.tail = this.tail!.next;
        return true;
    }

    remove(index: number): T | undefined {
        if (index < 0 || index >= this.length) {
            return undefined;
        }

        const parent = this._get(index - 1);
        const value = parent.next.value;
        parent.next = parent.next.next;
        if (--this.length < 1) {
            this.tail = undefined;
        }
        return value;
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

        let par = this.tail;
        for (let i = 0; i < n; ++i) {
            par = par!.next;
            out[i] = par.value;
        }

        return out;
    }

    unshift(value: T): boolean {
        const head: LinkedNode<T> = { value } as any;
        ++this.length;

        if (this.tail == null) {
            head.next = head;
            this.tail = head;
        } else {
            head.next = this.tail.next;
            this.tail.next = head;
        }

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
