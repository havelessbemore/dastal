import { Comparator, Sorted } from '..';
import { Heap } from '../heap';
import { Queue } from './queue';

export class HeapQueue<T> implements Queue<T>, Sorted<T> {
    constructor(protected heap: Heap<T>) {}

    clear(): void {
        this.heap.clear();
    }

    comparator(): Comparator<T> {
        return this.heap.comparator();
    }

    enqueue(value: T): boolean {
        this.heap.push(value);
        return true;
    }

    dequeue(): T | undefined {
        return this.heap.pop();
    }

    peek(): T | undefined {
        return this.heap.peek();
    }

    get size(): number {
        return this.heap.size;
    }

    toArray(): T[] {
        return this.heap.toArray();
    }
}
