import { Queue } from './queue';

export class ArrayQueue<T> implements Queue<T> {
    constructor(protected array: Array<T> = []) {}

    clear(): void {
        this.array.length = 0;
    }

    enqueue(value: T): boolean {
        this.array.push(value);
        return true;
    }

    dequeue(): T | undefined {
        return this.size < 1 ? undefined : this.array.shift()!;
    }

    peek(): T | undefined {
        return this.size < 1 ? undefined : this.array[0];
    }

    get size(): number {
        return this.array.length;
    }

    toArray(): T[] {
        return Array.from(this.array);
    }
}
