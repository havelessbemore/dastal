import { Queue } from './queue';

export interface LinkedNode<T> {
    next?: LinkedNode<T>;
    value: T;
}

export class LinkedQueue<T> implements Queue<T> {
    protected length: number;
    protected tail?: LinkedNode<T>;

    constructor() {
        this.length = 0;
    }

    clear(): void {
        this.length = 0;
        this.tail = undefined;
    }

    dequeue(): T | null {
        if (this.tail == null) {
            return null;
        }

        const head = this.tail.next!;
        this.tail.next = head.next;
        if (--this.length < 1) {
            this.tail = undefined;
        }

        return head.value;
    }

    enqueue(value: T): boolean {
        const tail: LinkedNode<T> = { value };

        if (this.tail == null) {
            tail.next = tail;
        } else {
            tail.next = this.tail.next;
            this.tail.next = tail;
        }

        this.tail = tail;
        ++this.length;
        return true;
    }

    peek(): T | null {
        return this.tail == null ? null : this.tail.next!.value;
    }

    get size(): number {
        return this.length;
    }

    toArray(): T[] {
        const n = this.length;
        const out = new Array(n);

        let par = this.tail;
        for (let i = 0; i < n; ++i) {
            par = par!.next!;
            out[i] = par.value;
        }

        return out;
    }
}
