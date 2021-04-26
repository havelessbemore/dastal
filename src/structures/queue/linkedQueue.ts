import { LinkedList, List } from '../list';
import { Queue } from './queue';

export class LinkedQueue<T> implements Queue<T> {
    protected list: List<T>;

    constructor(list: List<T> = new LinkedList()) {
        this.list = list;
    }

    clear(): void {
        this.list.clear();
    }

    dequeue(): T | undefined {
        return this.list.shift();
    }

    enqueue(value: T): boolean {
        return this.list.push(value);
    }

    peek(): T | undefined {
        return this.list.get(0);
    }

    get size(): number {
        return this.list.size;
    }

    toArray(): T[] {
        return this.list.toArray();
    }
}
