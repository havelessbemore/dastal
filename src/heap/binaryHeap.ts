import { MAX_ARRAY_LENGTH } from 'src/array/utils';
import { CompareFn } from '..';
import { Heap } from './heap';
import { SkewHeap } from './skewHeap';
import { bubbleUp, heapify, sinkDown } from './utils';

/**
 *
 */
export class BinaryHeap<T> implements Heap<T> {
    /**
     * The array containing every element.
     */
    protected array: T[];
    /**
     * The function to determine the order of elements.
     */
    protected compare: CompareFn<T>;
    /**
     * Instantiate a heap.
     *
     * @param compareFn - The function to determine the order of elements.
     * @param elements - A set of elements to initialize the list with.
     */
    constructor(compareFn: CompareFn<T>, elements?: Iterable<T>) {
        this.compare = compareFn;
        this.array = [];
        this.addAll(elements ?? []);
    }

    addAll(elements: Iterable<T>): number {
        const array = this.array;

        // Add new elements
        const length = array.length;
        for (const element of elements) {
            if (array.length >= MAX_ARRAY_LENGTH) {
                throw new RangeError('Invalid heap length');
            }
            array.push(element);
        }

        // Update the heap
        if (length < array.length) {
            heapify(this.compare, array);
        }

        return array.length;
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
        for (const value of this.array) {
            yield value;
        }
    }

    merge(heap: Heap<T>): this {
        const array = this.array;

        if (heap.size < 1) {
            return this;
        }
        if (array.length + heap.size > MAX_ARRAY_LENGTH) {
            throw new RangeError('Invalid heap length');
        }

        const elements = heap instanceof BinaryHeap ? heap.array : heap.dump();
        for (const element of elements) {
            array.push(element);
        }

        heapify(this.compare, array);
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
            // Move the last value to the root and update the heap
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

    pushPop(value: T): T {
        // If empty or value is <= to root
        if (this.array.length < 1 || this.compare(value, this.array[0]) <= 0) {
            return value;
        }

        // Swap the root and value
        const root = this.array[0];
        this.array[0] = value;
        sinkDown(0, this.compare, this.array);
        return root;
    }

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
    /**
     * Iterate through the heap in sorted order.
     *
     * **Note:** Unexpected behavior can occur if the collection is modified during iteration.
     *
     * @returns An iterator through the heap.
     */
    *[Symbol.iterator](): Iterator<T> {
        if (this.array.length < 1) {
            return;
        }
        const array = this.array;
        const heap = new BinaryHeap<number>((a, b) => this.compare(array[a], array[b]), [0]);
        do {
            let index = heap.pop()!;
            if (index < array.length) {
                yield array[index];
                index = 2 * index + 1;
                index < array.length && heap.push(index);
                ++index < array.length && heap.push(index);
            }
        } while (heap.size > 0);
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
