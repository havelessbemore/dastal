/**
 * A linked node interface.
 *
 * Each node links to its next neighbor.
 */
export interface LinkedNode<T> {
    /**
     * A link to the node's neighbor.
     */
    next?: LinkedNode<T>;
    /**
     * The value of the node.
     */
    value: T;
}
