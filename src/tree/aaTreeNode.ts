import { BinaryTreeNode } from './binaryTreeNode';

/**
 * An AATree node interface.
 *
 * In addition to being a binary tree node,
 * each node requires a balancing mechanism in the form of a numeric 'level'
 * that has the following properties ([source](https://en.wikipedia.org/wiki/AA_tree)):
 * 1. The level of every leaf node is one.
 * 1. The level of every left child is exactly one less than that of its parent.
 * 1. The level of every right child is equal to or one less than that of its parent.
 * 1. The level of every right grandchild is strictly less than that of its grandparent.
 * 1. Every node of level greater than one has two children.
 */
export interface AATreeNode<T> extends BinaryTreeNode<T> {
    /**
     * The level of the node.
     */
    level: number;
}
