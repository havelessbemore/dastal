/**
 * A doubly-linked node version of the {@link LinkedNode} interface.
 *
 * Each node links to its neighbors on the left (prev) and right (next) of it.
 */
export interface DoublyLinkedNode<T> {
    /**
     * A link to the node's next (right) neighbor
     */
    next?: DoublyLinkedNode<T>;
    /**
     * A link to the node's previous (left) neighbor
     */
    prev?: DoublyLinkedNode<T>;
    /**
     * The value of the node
     */
    value: T;
}
