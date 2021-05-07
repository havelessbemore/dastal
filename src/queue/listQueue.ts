import { List } from '../list';
import { Queue } from './queue';

export class ListQueue<T> implements Queue<T> {
    protected list: List<T>;

    constructor(list: List<T>) {
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
