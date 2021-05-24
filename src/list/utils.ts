import { isArray } from '../array/utils';
import { CompareFn } from '..';
import { DoublyLinkedNode } from './doublyLinkedNode';
import { LinkedNode } from './linkedNode';

/**
 * Groups an iterable into batches of a given size.
 *
 * @param size - The maximum batch size
 * @param iterable - The iterable to batch
 *
 * @returns An iterable of batches
 *
 * @internal
 */
export function batch<T>(
    size: number,
    iterable: Iterable<T>,
): Generator<T[], void, number | undefined> {
    if (isArray(iterable)) {
        return batchArray(size, iterable);
    }
    return batchIterable(size, iterable);
}
/**
 * Groups an iterable into batches of a given size.
 *
 * @param size - The maximum batch size
 * @param iterable - The iterable to batch
 *
 * @returns An iterable of batches
 *
 * @internal
 */
export function* batchArray<T>(size: number, array: T[]): Generator<T[], void, number | undefined> {
    let min = 0;
    while (min < array.length) {
        const max = min + size;
        size = (yield array.slice(min, max)) ?? size;
        min = max;
    }
}
/**
 * Groups an iterable into batches of a given size.
 *
 * @param size - The maximum batch size
 * @param iterable - The iterable to batch
 *
 * @returns An iterable of batches
 *
 * @internal
 */
export function* batchIterable<T>(
    size: number,
    iterable: Iterable<T>,
): Generator<T[], void, number | undefined> {
    let array: T[] = [];
    for (const value of iterable) {
        if (array.push(value) >= size) {
            size = (yield array) ?? size;
            array = [];
        }
    }
    if (array.length > 0) {
        yield array;
    }
}
/**
 * Limits a number to be within a given range.
 *
 * f(x, min, max) = y, where min <= y <= max
 *
 * @param num - The number to clamp
 * @param min - The minimum result value, inclusive
 * @param max - The maximum result value, inclusive
 *
 * @returns The clamped number
 *
 * @internal
 */
export function clamp(num: number, min: number, max: number): number {
    return Math.min(max, Math.max(min, num));
}
/**
 * Wraps and then clamps a number within a given range.
 *
 * @param num - The number to wrap and then clamp
 * @param min - The minimum result value, inclusive
 * @param max - The wrap pivot and maximum result value, inclusive
 *
 * @returns The crwapped number
 *
 * @internal
 */
export function cwrap(num: number, min: number, max: number): number {
    return clamp(wrap(num, max), min, max);
}
/**
 * Sorts a list in place.
 *
 * Works on complete lists as well as sublists and circular lists:
 * - Linked lists will keep the link to the next node beyond the sorted section
 * - Doubly linked lists will keep links to the prev and next nodes outside the sorted section
 *
 * @param node - The head of the list
 * @param len - The length of the list beginning from node
 * @param isDoubly - Whether node is a doubly linked node
 * @param compareFn - A function used to determine the order of elements.
 *
 * It is expected to return:
 * - A negative value if first argument < second argument
 * - Zero if first argument == second argument
 * - A positive value if first argument > second argument
 *
 * @returns The new head and tail of the sorted list
 *
 * @internal
 */
export function mergeSort<T, Node extends LinkedNode<T>>(
    node: Node,
    len: number,
    isDoubly: boolean,
    compareFn: CompareFn<T>,
): [Node, Node] {
    // Base case
    if (len < 2) {
        return [node, node];
    }

    // Split the list into two halves and sort them
    len = len / 2;
    const lens: [number, number] = [Math.ceil(len), Math.floor(len)];
    const heads = mergeSort(node, lens[0], isDoubly, compareFn);
    const tails = mergeSort(heads[1].next as Node, lens[1], isDoubly, compareFn);

    // Group the heads and tails together
    node = heads[1];
    heads[1] = tails[0];
    tails[0] = node;
    tails[0].next = tails[1].next;

    // Merge the sorted halves
    const prev = (heads[0] as DoublyLinkedNode<T>).prev;
    node = mergeSorted(heads, lens, isDoubly, compareFn);
    isDoubly && ((node as DoublyLinkedNode<T>).prev = prev);

    // Return the head and tail
    return [node, tails[+(lens[0] < 1)]];
}
/**
 * Merges two sorted lists.
 *
 * @param nodes - The heads of the lists
 * @param lens - The lengths of the lists
 * @param isDoubly - Whether the lists are a doubly linked
 * @param compareFn - A function used to determine the order of elements.
 *
 * It is expected to return:
 * - A negative value if first argument < second argument
 * - Zero if first argument == second argument
 * - A positive value if first argument > second argument
 *
 * @returns The new head of the sorted list
 *
 * @internal
 */
export function mergeSorted<T, Node extends LinkedNode<T>>(
    heads: [Node, Node],
    lens: [number, number],
    isDoubly: boolean,
    compareFn: CompareFn<T>,
): Node {
    const root = {} as Node;

    let node = root;
    do {
        const index = +(compareFn(heads[0].value, heads[1].value) > 0);
        node.next = heads[index];
        isDoubly && ((node.next as DoublyLinkedNode<T>).prev = node);
        node = node.next as Node;
        heads[index] = node.next as Node;
        --lens[index];
    } while (lens[0] > 0 && lens[1] > 0);

    // Add any remaining nodes
    node.next = heads[+(lens[0] < 1)];
    isDoubly && node.next && ((node.next as DoublyLinkedNode<T>).prev = node);
    return root.next as Node;
}
/**
 * Wraps a number around a pivot
 *
 * f(x, min, pivot) = {
 *    x, where x >= 0
 *    pivot + x, where x < 0
 * }
 *
 * @param num - The number to wrap
 * @param pivot - The number to pivot on
 *
 * @returns - The wrapped number
 *
 * @internal
 */
export function wrap(num: number, pivot: number): number {
    return num < 0 ? pivot + num : num;
}
/**
 * Moves a given number of spaces forward in a list
 *
 * @param head - The head of the list
 * @param len - The number of spaces to move
 *
 * @returns - The node len spaces ahead from head
 *
 * @internal
 *
export function next<T, Node extends LinkedNode<T>>(head: Node, len: number): Node {
    while (len-- > 0) {
        head = head.next as Node;
    }
    return head;
}
*/
