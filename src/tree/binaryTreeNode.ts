/**
 * A binary tree node interface.
 *
 * Each node links to its left and right child.
 */
export interface BinaryTreeNode<T> {
    /**
     * A link to the node's left child.
     */
    left?: this;
    /**
     * A link to the node's right child.
     */
    right?: this;
    /**
     * The value of the node
     */
    value: T;
}
