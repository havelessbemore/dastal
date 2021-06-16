import { CompareFn } from '..';
import { DoublyLinkedNode } from './doublyLinkedNode';
import { LinkedNode } from './linkedNode';

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
export function linkedMergeSort<T, Node extends LinkedNode<T>>(
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
    const heads = linkedMergeSort(node, lens[0], isDoubly, compareFn);
    const tails = linkedMergeSort(heads[1].next as Node, lens[1], isDoubly, compareFn);

    // Group the heads and tails together
    node = heads[1];
    heads[1] = tails[0];
    tails[0] = node;
    tails[0].next = tails[1].next;

    // Merge the sorted halves
    const prev = (heads[0] as DoublyLinkedNode<T>).prev;
    node = linkedMergeSorted(heads, lens, isDoubly, compareFn);
    if (isDoubly) {
        (node as DoublyLinkedNode<T>).prev = prev;
    }

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
export function linkedMergeSorted<T, Node extends LinkedNode<T>>(
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
        if (isDoubly) {
            (node.next as DoublyLinkedNode<T>).prev = node;
        }
        node = node.next as Node;
        heads[index] = node.next as Node;
        --lens[index];
    } while (lens[0] > 0 && lens[1] > 0);

    // Add any remaining nodes
    node.next = heads[+(lens[0] < 1)];
    if (isDoubly && node.next) {
        (node.next as DoublyLinkedNode<T>).prev = node;
    }
    return root.next as Node;
}
