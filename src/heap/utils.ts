import { LinkedNode } from 'src/list';
import { BinaryTreeNode } from 'src/tree/binaryTreeNode';
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
export function mergeKSorted<T>(compareFn: CompareFn<T>, lists: LinkedNode<T>[]): LinkedNode<T> {
    // Heapify the list of lists based on
    // the value at the head of each list.
    const compare: CompareFn<LinkedNode<T>> = (a, b) => compareFn(a.value, b.value);
    heapify(compare, lists);

    // Combine the lists into a single list.
    const list: LinkedNode<T> = lists[0];
    for (let tail = list; lists.length > 1; tail = tail.next) {
        lists[0] = lists[0].next ?? lists.pop()!;
        sinkDown(0, compare, lists);
        tail.next = lists[0];
    }

    return list;
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
    heaps: (BinaryTreeNode<T> | undefined)[],
): BinaryTreeNode<T> | undefined {
    // Remove undefineds and initialize a list for each heap
    const lists: LinkedNode<BinaryTreeNode<T>>[] = [];
    for (let i = 0; i < heaps.length; ++i) {
        if (heaps[i] != null) {
            lists.push({ value: heaps[i]! });
        }
    }

    // Check if nothing to merge with
    if (lists.length < 2) {
        return lists[0]?.value;
    }

    // Split each heap into subheaps by cutting every right path; From the root
    // node, sever the right node to make the right child its own heap. Repeat
    // until you can't go right. This will turn each heap into a list of heaps
    // where the root either only has a left child or no children at all. The
    // lists of heaps will be in desc order (from bottom to top).
    for (let i = 0; i < lists.length; ++i) {
        let list = lists[i];
        let tree: BinaryTreeNode<T> | undefined = list.value;
        while ((tree = tree.right)) {
            list = { next: list, value: tree };
        }
        lists[i] = list;
    }

    // Combine the lists into a single list in desc order
    let list: LinkedNode<BinaryTreeNode<T>> | undefined = mergeKSorted(
        (a, b) => compareFn(b.value, a.value),
        lists,
    );

    // While there are still multiple heaps, iteratively combine
    // the first two (from left to right). If the root of the second-to-first
    // subtree has a left child, swap it to be the right child. Link the root
    // of the last subtree as the left child of the second-to-first subtree.
    let heap = list.value;
    while ((list = list.next)) {
        const node = list.value;
        node.right = node.left;
        node.left = heap;
        heap = node;
    }

    return heap;
}
