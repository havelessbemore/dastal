import { LinkedList } from 'src/list';
import { BinaryTreeNode } from 'src/tree';
import { CompareFn } from '..';

/**
 * @internal
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
 * @internal
 */
export function heapify<T>(compareFn: CompareFn<T>, array: T[]): void {
    for (let i = (array.length + 1) >>> 1; i > 0; sinkDown(--i, compareFn, array)) {}
}
/**
 * @internal
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
/**
 * See: https://en.wikipedia.org/wiki/Skew_heap#Merging_two_heaps
 *
 * @param compareFn - A function used to determine the order of the heap.
 *
 * It is expected to return:
 * - A negative value if first argument < second argument
 * - Zero if first argument == second argument
 * - A positive value if first argument > second argument
 * @param heaps - An iterable of heaps to merge
 *
 * @returns The new heap
 */
export function skewMerge<T>(
    compareFn: CompareFn<T>,
    heaps: Iterable<BinaryTreeNode<T> | undefined>,
): BinaryTreeNode<T> | undefined {
    // Sanitize inputs
    const list = new LinkedList<BinaryTreeNode<T>>();
    for (const node of heaps) {
        if (node != null) {
            list.push(node);
        }
    }
    if (list.size < 2) {
        return list.pop()!;
    }

    // Split each heap into subtrees by cutting every path.
    // (From the root node, sever the right node and make the right
    // child its own subtree.) This will result in a set of trees
    // in which the root either only has a left child or no children at all.
    for (const node of list) {
        if (node.right != null) {
            list.push(node.right);
            node.right = undefined;
        }
    }

    // Sort the subtrees in descending order based on the
    // value of the root node of each subtree.
    list.sort((a, b) => compareFn(b.value, a.value));

    // While there are still multiple subtrees, iteratively recombine
    // the first two (from left to right). If the root of the second-to-first
    // subtree has a left child, swap it to be the right child. Link the root
    // of the last subtree as the left child of the second-to-first subtree.
    let heap = list.shift()!;
    do {
        const next = list.shift()!;
        next.right = next.left;
        next.left = heap;
        heap = next;
    } while (list.size > 0);

    return heap;
}
