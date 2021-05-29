import { AVLTreeNode } from './avlTreeNode';
import { Edge, successor } from './binaryTreeUtils';
import { LinkedNode } from 'src/list';

/**
 * @internal
 */
export function balance<T>(node: AVLTreeNode<T>): AVLTreeNode<T> {
    const bf = balanceFactor(node);
    if (bf > 1) {
        if (balanceFactor(node.right!) < 0) {
            node.right = rotateR(node.right!);
        }
        node = rotateL(node);
    } else if (bf < -1) {
        if (balanceFactor(node.left!) > 0) {
            node.left = rotateL(node.left!);
        }
        node = rotateR(node);
    }
    return node;
}
/**
 * @internal
 */
export function balanceFactor(node: AVLTreeNode<unknown>): number {
    return (node.right?.height ?? -1) - (node.left?.height ?? -1);
}
/**
 * @internal
 */
export function height(node: AVLTreeNode<unknown>): number {
    return 1 + Math.max(node.right?.height ?? -1, node.left?.height ?? -1);
}
/**
 * @internal
 */
export function remove<T>(stack: LinkedNode<Edge<AVLTreeNode<T>>>): boolean {
    let edge = stack.value;
    let node = edge.to;

    // If not found
    if (node == null) {
        return false;
    }

    // Find the replacement
    if (node.right == null) {
        // If no right child, replace with left
        node = node.left;
    } else if (node.left == null) {
        // If no left child, replace with right
        node = node.right;
    } else {
        // If two children, find the successor
        stack = successor(stack);
        edge = stack.value;

        // Swap with the successor
        const temp = edge.to!;
        node.value = temp.value;

        // Replace with the successor's right child
        node = temp.right;
    }

    // Make the replacement / update the tree
    edge.from![edge.label!] = edge.to = node;

    // Balance the tree
    while (stack.next) {
        stack = stack.next;
        const edge = stack.value;
        edge.to!.height = height(edge.to!);
        edge.from![edge.label!] = balance(edge.to!);
    }

    return true;
}
/**
 * @internal
 */
export function rotateL<T>(P: AVLTreeNode<T>): AVLTreeNode<T> {
    const R = P.right!;
    P.right = R.left;
    R.left = P;
    P.height = height(P);
    R.height = height(R);
    return R;
}
/**
 * @internal
 */
export function rotateR<T>(P: AVLTreeNode<T>): AVLTreeNode<T> {
    const L = P.left!;
    P.left = L.right;
    L.right = P;
    P.height = height(P);
    L.height = height(L);
    return L;
}
