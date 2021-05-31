import { AATreeNode } from './aaTreeNode';
import { LinkedNode } from 'src/list';
import { Edge, removeStack as del } from './binaryTreeUtils';

/**
 * @internal
 */
export function remove<T>(stack: LinkedNode<Edge<AATreeNode<T>>>): boolean {
    let edge = stack.value;
    let node = edge.to;

    // If not found
    if (node == null) {
        return false;
    }

    // Remove the node
    stack = del(stack);

    // Update the tree
    while (stack.next) {
        stack = stack.next;
        edge = stack.value;
        node = edge.to!;

        // Decrease levels
        const level = 1 + Math.min(node.left?.level ?? 0, node.right?.level ?? 0);
        if (level < node.level) {
            node.level = level;
            if (node.right != null && level < node.right.level) {
                node.right.level = level;
            }
        }

        // Balance
        node = skew(node);
        node.right = skew(node.right);
        if (node.right != null) {
            node.right.right = skew(node.right.right);
        }
        node = split(node);
        node.right = split(node.right);

        // Make the update
        edge.from![edge.label!] = edge.to = node;
    }

    return true;
}
/**
 * @internal
 */
export function skew<T>(node?: undefined): undefined;
export function skew<T>(node: AATreeNode<T>): AATreeNode<T>;
export function skew<T>(node?: AATreeNode<T>): AATreeNode<T> | undefined;
export function skew<T>(node?: AATreeNode<T>): AATreeNode<T> | undefined {
    if (node == null || node.left == null || node.level != node.left.level) {
        return node;
    }
    const left = node.left;
    node.left = left.right;
    left.right = node;
    return left;
}
/**
 * @internal
 */
export function split<T>(node?: undefined): undefined;
export function split<T>(node: AATreeNode<T>): AATreeNode<T>;
export function split<T>(node?: AATreeNode<T>): AATreeNode<T> | undefined;
export function split<T>(node?: AATreeNode<T>): AATreeNode<T> | undefined {
    if (
        node == null ||
        node.right == null ||
        node.right.right == null ||
        node.level != node.right.right.level
    ) {
        return node;
    }
    const right = node.right;
    node.right = right.left;
    right.left = node;
    ++right.level;
    return right;
}
