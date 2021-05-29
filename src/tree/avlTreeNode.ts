import { BinaryTreeNode } from './binaryTreeNode';

/**
 * An AVLTree node interface ([source](https://en.wikipedia.org/wiki/AVL_tree)).
 *
 * In an AVL tree, the heights of the two child subtrees of any node differ by at most one.
 * If at any time they differ by more than one, rebalancing is done to restore this property.
 */
export interface AVLTreeNode<T> extends BinaryTreeNode<T> {
    /**
     * The balance factor of the node.
     */
    balanceFactor: number;
}
