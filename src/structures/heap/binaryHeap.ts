import { Comparator } from '../../comparable';
import { Heap } from './heap';

export abstract class BinaryHeap<T> implements Heap<T> {
    protected _comparator: Comparator<T>;

    constructor(comparator: Comparator<T>, protected array: Array<T> = []) {
        this._comparator = comparator;
    }

    protected abstract _ate(a: T, b: T): boolean;
    abstract heapify(...iterables: Iterable<T>[]): BinaryHeap<T>;

    protected _find(element: T): number {
        const n = this.array.length;
        for (let i = 0; i < n; ++i) {
            if (this.array[i] === element) {
                return i;
            }
        }
        return -1;
    }

    protected _heapify(array: Array<T>): void {
        let i = Math.floor((array.length + 1) / 2) - 1;
        while (i >= 0) {
            this._sinkDown(--i, array);
        }
    }

    clear(): void {
        this.array.length = 0;
    }

    comparator(): Comparator<T> {
        return this._comparator;
    }

    contains(element: T): boolean {
        return this._find(element) >= 0;
    }

    delete(element: T): boolean {
        const index = this._find(element);
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
        this._sinkDown(index, this.array);
        return true;
    }

    merge(heap: Heap<T>): this {
        for (const element of heap.toArray()) {
            this.array.push(element);
        }
        this._heapify(this.array);
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
            this._sinkDown(0, this.array);
        }

        return value;
    }

    push(value: T): void {
        // Add new value to the end of the heap
        this.array.push(value);

        // Update the heap
        this._bubbleUp(this.array.length - 1, this.array);
    }

    // Push a new value to the heap and then pop the root
    pushPop(value: T): T {
        // If empty or value is above or equal to root
        if (this.array.length < 1 || this._ate(value, this.array[0])) {
            return value;
        }

        // Swap the root and value
        const root = this.array[0];
        this.array[0] = value;
        this._sinkDown(0, this.array);
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
            this._sinkDown(0, this.array);
        }

        return value;
    }

    get size(): number {
        return this.array.length;
    }

    update(element: T): boolean {
        const index = this._find(element);
        if (index < 0) {
            return false;
        }
        this._sinkDown(index, this.array);
        this._bubbleUp(index, this.array);
        return true;
    }

    protected _bubbleUp(index: number, array: Array<T>): void {
        const value = array[index];

        // Until we reach the top of the heap
        while (index > 0) {
            // Get the parent
            const parentIndex = Math.floor((index + 1) / 2) - 1;
            const parent = array[parentIndex]!;

            // If the parent is above or equal to value, the heap is in order
            if (this._ate(parent, value)) {
                break;
            }

            // Swap the parent with value and continue
            array[parentIndex] = value;
            array[index] = parent;
            index = parentIndex;
        }
    }

    protected _sinkDown(index: number, array: Array<T>): void {
        const n = array.length;
        const value = array[index];

        do {
            // Compute the left child's index
            let childIndex = 2 * index + 1;

            // If no children exist
            if (childIndex >= n) {
                break;
            }

            // Decide which child to compare with
            let child = array[childIndex];
            if (childIndex + 1 < n && this._ate(array[childIndex + 1]!, child)) {
                child = array[++childIndex]!;
            }

            // If value <= child
            if (this._ate(value, child)) {
                break;
            }

            // Swap value and child
            array[index] = child;
            array[childIndex] = value;
            index = childIndex;
        } while (true);
    }

    toArray(): T[] {
        return Array.from(this.array);
    }
}
