import { bubbleUp, heapify, sinkDown } from './heapify';
import { Comparator } from '.';
import { Heap } from './heap';

export abstract class BinaryHeap<T> implements Heap<T> {
    protected _comparator: Comparator<T>;
    protected array: Array<T>;

    constructor(comparator: Comparator<T>, array: Array<T> = []) {
        this._comparator = comparator;
        this.array = array;
    }

    protected abstract isAboveOrEqual(a: T, b: T): boolean;
    abstract heapify(...iterables: Iterable<T>[]): BinaryHeap<T>;

    clear(): void {
        this.array.length = 0;
    }

    comparator(): Comparator<T> {
        return this._comparator;
    }

    /*
    contains(element: T): boolean {
        return this.array.indexOf(element) >= 0;
    }

    delete(element: T): boolean {
        const index = this.array.indexOf(element);
        if (index < 0) {
            return false;
        }

        // If deleting the last value
        const last = this.array.pop()!;
        if (index >= this.array.length) {
            return true;
        }

        // Add the last value to the
        // deleted index and update the heap
        this.array[index] = last;
        sinkDown(index, (a, b) => this.isAboveOrEqual(a, b), this.array);
        return true;
    }
    */

    merge(heap: Heap<T>): this {
        for (const element of heap) {
            this.array.push(element);
        }
        heapify((a, b) => this.isAboveOrEqual(a, b), this.array);
        return this;
    }

    peek(): T | undefined {
        return this.array.length > 0 ? this.array[0] : undefined;
    }

    pop(): T | undefined {
        if (this.array.length < 1) {
            return undefined;
        }

        // Get the root and the last value
        const value = this.array[0];
        const last = this.array.pop();

        // If value != last
        if (this.array.length > 0) {
            // Add the last value to
            // the root and update the heap
            this.array[0] = last!;
            sinkDown(0, (a, b) => this.isAboveOrEqual(a, b), this.array);
        }

        return value;
    }

    push(value: T): number {
        // Add new value to the end of the heap
        this.array.push(value);

        // Update the heap
        bubbleUp(this.array.length - 1, (a, b) => this.isAboveOrEqual(a, b), this.array);
        return this.size;
    }

    // Push a new value to the heap and then pop the root
    pushPop(value: T): T {
        // If empty or value is above or equal to root
        if (this.array.length < 1 || this.isAboveOrEqual(value, this.array[0])) {
            return value;
        }

        // Swap the root and value
        const root = this.array[0];
        this.array[0] = value;
        sinkDown(0, (a, b) => this.isAboveOrEqual(a, b), this.array);
        return root;
    }

    // Pop the root of the heap and then push a new value
    replace(value: T): T {
        // If not empty
        if (this.array.length > 0) {
            // Swap the root with value
            const root = this.array[0];
            this.array[0] = value;
            value = root;

            // Update the heap
            sinkDown(0, (a, b) => this.isAboveOrEqual(a, b), this.array);
        }

        return value;
    }

    get size(): number {
        return this.array.length;
    }

    /*
    update(element: T): boolean {
        const index = this.array.indexOf(element);
        if (index < 0) {
            return false;
        }
        const fn = (a: T, b: T) => this.isAboveOrEqual(a, b);
        sinkDown(index, fn, this.array);
        bubbleUp(index, fn, this.array);
        return true;
    }
    */

    [Symbol.iterator](): Iterator<T> {
        return Array.from(this.array)
            .sort((a, b) => this._comparator.compare(a, b))
            [Symbol.iterator]();
    }
}
