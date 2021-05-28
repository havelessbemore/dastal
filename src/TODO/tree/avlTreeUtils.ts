import { CompareFn } from '../..';
import { AVLTreeNode } from './avlTreeNode';
import { BinaryTreeNode } from '../../tree/binaryTreeNode';
import { levelOrderTraverse } from '../../tree/binaryTreeUtils';

/**
 * @internal
 *
export function insert<T>(
    value: T,
    node: AVLTreeNode<T> | undefined,
    compareFn: CompareFn<T>,
): AVLTreeNode<T> {

    // If the tree is empty
    if (node == null) {
        return { height: 0, value };
    }

    // If value < node
    const comp = compareFn(value, node.value);
    if (comp < 0) {
        node.left = insert(value, node.left, compareFn);

    // If value >= node
    } else if (comp > 0) {
        node.right = insert(value, node.right, compareFn);
    }

    // Balance the tree
    node.height = height(node);
    return balance(node);
}
*/
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
export function remove<T>(
    value: T,
    node: AVLTreeNode<T> | undefined,
    compareFn: CompareFn<T>,
): AVLTreeNode<T> | undefined {
    // If the tree is empty
    if (node == null) {
        return node;
    }

    // If value < node
    const comp = compareFn(value, node.value);
    if (comp < 0) {
        node.left = remove(value, node.left, compareFn);

        // If value >= node
    } else if (comp > 0) {
        node.right = remove(value, node.right, compareFn);
    } else {
        throw new Error('TODO');
    }
    throw new Error('TODO');
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
export function rotateLR<T>(P: AVLTreeNode<T>): AVLTreeNode<T> {
    const L = P.left!;
    const LR = L.right!;
    L.right = LR.left;
    P.left = LR.right;
    LR.left = L;
    LR.right = P;
    L.height = height(L);
    P.height = height(P);
    LR.height = height(LR);
    return LR;
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
/**
 * @internal
 */
export function rotateRL<T>(P: AVLTreeNode<T>): AVLTreeNode<T> {
    const R = P.right!;
    const RL = R.left!;
    P.right = RL.left;
    R.left = RL.right;
    RL.left = P;
    RL.right = R;
    P.height = height(P);
    R.height = height(R);
    RL.height = height(RL);
    return RL;
}
/**
 * @internal
 */
export function debug<N extends BinaryTreeNode<T>, T = any>(
    node: N | undefined,
    mapFn?: (node: N) => any,
): void {
    mapFn = mapFn == null ? (n) => n.value : mapFn;
    const array = Array.from(levelOrderTraverse(node, true));
    const levels = [];
    for (let n = 1; array.length > 0; n *= 2) {
        levels.push(array.splice(0, n));
    }
    const str = levels
        .map((level) => {
            return level
                .map((v) => {
                    return v == null ? '_' : `${mapFn!(v)}`;
                })
                .join(', ');
        })
        .join('\n');
    console.log(str, '\n');
}
