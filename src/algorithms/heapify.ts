import { Comparator, ComparatorFn } from 'src/comparable';

export function maxHeapify<T>(comparator: Comparator<T>, array: Array<T>): void {
    heapify((a, b) => comparator.compare(a, b) >= 0, array);
}

export function minHeapify<T>(comparator: Comparator<T>, array: Array<T>): void {
    heapify((a, b) => comparator.compare(a, b) <= 0, array);
}

export function heapify<T>(ate: (a: T, b: T) => boolean, array: Array<T>): void {
    let i = Math.floor((array.length + 1) / 2) - 1;
    while (i >= 0) {
        sinkDown(--i, ate, array);
    }
}

export function bubbleUp<T>(index: number, ate: (a: T, b: T) => boolean, array: Array<T>): void {
    const value = array[index];

    // Until we reach the top of the heap
    while (index > 0) {
        // Get the parent
        const parentIndex = Math.floor((index + 1) / 2) - 1;
        const parent = array[parentIndex]!;

        // If the parent is above or equal to value, the heap is in order
        if (ate(parent, value)) {
            break;
        }

        // Swap the parent with value and continue
        array[parentIndex] = value;
        array[index] = parent;
        index = parentIndex;
    }
}

export function sinkDown<T>(index: number, ate: (a: T, b: T) => boolean, array: Array<T>): void {
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
        if (childIndex + 1 < n && ate(array[childIndex + 1]!, child)) {
            child = array[++childIndex]!;
        }

        // If value <= child
        if (ate(value, child)) {
            break;
        }

        // Swap value and child
        array[index] = child;
        array[childIndex] = value;
        index = childIndex;
    } while (true);
}
