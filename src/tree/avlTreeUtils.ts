/**
 * Special thanks to [Gil Hamilton and MaksymB](https://cs.stackexchange.com/a/67818)
 * in understanding balance factor changes after rotations
 */
import { AVLTreeNode } from './avlTreeNode';
import { Edge, removeStack as del } from './binaryTreeUtils';
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
    const node = edge.to;

    // If not found
    if (node == null) {
        return false;
    }

    // Remove the node
    stack = del(stack);

    // Balance the tree
    let label = stack.value.label;
    while (stack.next) {
        stack = stack.next;
        edge = stack.value;
        edge.to!.balanceFactor -= label === 'left' ? -1 : 1;
        edge.to = balance(edge.to!);
        edge.from![(label = edge.label)!] = edge.to;
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
