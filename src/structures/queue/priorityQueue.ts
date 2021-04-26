import { Comparator, Sorted } from '../../comparable';
import { Heap } from '../heap';
import { Queue } from './queue';

export class PriorityQueue<T> implements Queue<T>, Sorted<T> {
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

    dequeue(): T | null {
        return this.heap.pop() || null;
    }

    peek(): T | null {
        return this.heap.peek() || null;
    }

    get size(): number {
        return this.heap.size;
    }

    toArray(): T[] {
        return this.heap.toArray();
    }
}
