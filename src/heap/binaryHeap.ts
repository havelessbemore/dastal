import { CompareFn } from '..';
import { Heap } from './heap';
import { bubbleUp, heapify, sinkDown } from './utils';

/**
 *
 */
export class BinaryHeap<T> implements Heap<T> {
    /**
     * @ignore
     */
    protected array: T[];
    /**
     * @ignore
     */
    protected compare: CompareFn<T>;

    constructor(compareFn: CompareFn<T>, elements?: Iterable<T>) {
        this.compare = compareFn;
        this.array = Array.from(elements ?? []);
        heapify(this.compare, this.array);
    }

    clear(): void {
        this.array.length = 0;
    }

    comparator(): CompareFn<T> {
        return this.compare;
    }

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
        sinkDown(index, this.compare, this.array);
        bubbleUp(index, this.compare, this.array);
        return true;
    }

    *dump(): Iterable<T> {
        for (let i = 0; i < this.array.length; ++i) {
            yield this.array[i];
        }
    }

    merge(elements: Iterable<T>): number {
        const array = this.array;
        const length = array.length;
        try {
            for (const element of elements) {
                array.push(element);
            }
        } catch (error) {
            throw error;
        } finally {
            if (length != array.length) {
                heapify(this.compare, array);
            }
        }
        return this.size;
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
            sinkDown(0, this.compare, this.array);
        }

        return value;
    }

    push(value: T): number {
        // Add new value to the end of the heap
        this.array.push(value);

        // Update the heap
        bubbleUp(this.array.length - 1, this.compare, this.array);
        return this.size;
    }

    // Push a new value to the heap and then pop the root
    pushPop(value: T): T {
        // If empty or value is above or equal to root
        if (this.array.length < 1 || this.compare(value, this.array[0]) <= 0) {
            return value;
        }

        // Swap the root and value
        const root = this.array[0];
        this.array[0] = value;
        sinkDown(0, this.compare, this.array);
        return root;
    }

    // Pop the root of the heap and then push a new value
    replace(value: T): T | undefined {
        // If empty
        if (this.array.length < 1) {
            this.array.push(value);
            return undefined;
        }

        // Swap the root with value
        const root = this.array[0];
        this.array[0] = value;
        value = root;

        // Update the heap
        sinkDown(0, this.compare, this.array);

        return value;
    }

    get size(): number {
        return this.array.length;
    }

    [Symbol.iterator](): Iterator<T> {
        return Array.from(this.array).sort(this.compare)[Symbol.iterator]();
    }

    update(curElement: T, newElement: T): boolean {
        const index = this.array.indexOf(curElement);
        if (index < 0) {
            return false;
        }
        this.array[index] = newElement;
        sinkDown(index, this.compare, this.array);
        bubbleUp(index, this.compare, this.array);
        return true;
    }
}
