import { CompareFn } from '..';

/**
 * @ignore
 */
export function bubbleUp<T>(index: number, compareFn: CompareFn<T>, array: Array<T>): void {
    const value = array[index];

    // Until we reach the top of the heap
    while (index > 0) {
        // Get the parent
        const parentIndex = Math.floor((index + 1) / 2) - 1;
        const parent = array[parentIndex]!;

        // If the parent is above or equal to value, the heap is in order
        if (compareFn(parent, value) <= 0) {
            break;
        }

        // Swap the parent with value and continue
        array[parentIndex] = value;
        array[index] = parent;
        index = parentIndex;
    }
}
/**
 * @ignore
 */
export function heapify<T>(compareFn: CompareFn<T>, array: T[]): void {
    for (let i = (array.length + 1) >>> 1; i > 0; sinkDown(--i, compareFn, array)) {}
}
/**
 * @ignore
 */
export function sinkDown<T>(index: number, compareFn: CompareFn<T>, array: Array<T>): void {
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
        if (childIndex + 1 < n && compareFn(array[childIndex + 1], child) <= 0) {
            child = array[++childIndex]!;
        }
        //console.log(value, child);

        // If value <= child
        if (compareFn(value, child) <= 0) {
            break;
        }

        // Swap value and child
        array[index] = child;
        array[childIndex] = value;
        index = childIndex;
    } while (true);
}
