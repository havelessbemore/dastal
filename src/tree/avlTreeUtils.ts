/**
 * Special thanks to [Gil Hamilton and MaksymB](https://cs.stackexchange.com/a/67818)
 * for understanding balance factor changes after rotations
 */
import { AVLTreeNode } from './avlTreeNode';
import { Edge, successorStack } from './binaryTreeUtils';
import { LinkedNode } from 'src/list';

/**
 * @internal
 */
export function balance<T>(node: AVLTreeNode<T>): AVLTreeNode<T> {
    if (node.balanceFactor > 1) {
        if (node.right!.balanceFactor < 0) {
            node.right = rotateR(node.right!);
        }
        node = rotateL(node);
    } else if (node.balanceFactor < -1) {
        if (node.left!.balanceFactor > 0) {
            node.left = rotateL(node.left!);
        }
        node = rotateR(node);
    }
    return node;
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
        stack = successorStack(stack);
        edge = stack.value;

        // Swap with the successor
        const temp = edge.to!;
        node.value = temp.value;

        // Replace with the successor's right child
        node = temp.right;
    }

    // Make the replacement / update the tree
    let label = edge.label;
    edge.from![label!] = edge.to = node;

    // Balance the tree
    while (stack.next) {
        stack = stack.next;
        edge = stack.value;
        edge.to!.balanceFactor -= label === 'left' ? -1 : 1;
        edge.to = balance(edge.to!);
        edge.from![(label = edge.label!)] = edge.to;
        if (edge.to!.balanceFactor !== 0) {
            break;
        }
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
    P.balanceFactor -= 1 + Math.max(0, R.balanceFactor);
    R.balanceFactor -= 1 - Math.min(0, P.balanceFactor);
    return R;
}
/**
 * @internal
 */
export function rotateR<T>(P: AVLTreeNode<T>): AVLTreeNode<T> {
    const L = P.left!;
    P.left = L.right;
    L.right = P;
    P.balanceFactor += 1 - Math.min(0, L.balanceFactor);
    L.balanceFactor += 1 + Math.max(0, P.balanceFactor);
    return L;
}
