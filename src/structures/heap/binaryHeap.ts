import { Comparator } from '../../comparable';
import { Heap } from './heap';

export abstract class BinaryHeap<T> implements Heap<T> {
    protected _comparator: Comparator<T>;

    constructor(comparator: Comparator<T>, protected array: Array<T> = []) {
        this._comparator = comparator;
    }

    protected abstract ate(a: T, b: T): boolean;
    abstract heapify(arr: Iterable<T>): BinaryHeap<T>;
    abstract meld(heap: Heap<T>): BinaryHeap<T>;

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
        if (this.array.length < 1 || this.ate(value, this.array[0])) {
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

    protected _bubbleUp(index: number, array: Array<T>): void {
        const value = array[index];

        // Until we reach the top of the heap
        while (index > 0) {
            // Get the parent
            const parentIndex = Math.floor((index + 1) / 2) - 1;
            const parent = array[parentIndex]!;

            // If the parent is above or equal to value, the heap is in order
            if (this.ate(parent, value)) {
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
            if (childIndex + 1 < n && this.ate(array[childIndex + 1]!, child)) {
                child = array[++childIndex]!;
            }

            // If value <= child
            if (this.ate(value, child)) {
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
