import { LinkedStack } from 'src/stack';
import { BinaryTreeNode } from '.';

/**
 *
 * @param node
 *
 * @returns
 *
 * @internal
 */
export function clone<T>(node: BinaryTreeNode<T> | undefined): BinaryTreeNode<T> | undefined {
    if (node == null) {
        return undefined;
    }
    const out: BinaryTreeNode<T> = Object.assign({}, node);
    const stack = new LinkedStack<BinaryTreeNode<T>>([out]);
    do {
        node = stack.pop()!;
        if (node.left) {
            stack.push((node.left = Object.assign({}, node.left)));
        } else if (node.right) {
            stack.push((node.right = Object.assign({}, node.right)));
        }
    } while (stack.size > 0);
    return out;
}
/**
 *
 * @param elements
 *
 * @returns
 *
 * @internal
 */
export function toBinaryTree<T>(elements: T[] | undefined): BinaryTreeNode<T> | undefined {
    if (elements == null || elements.length < 1) {
        return undefined;
    }
    const n = elements.length;
    const nodes = new Array(n);
    nodes[0] = { value: elements[0] };
    for (let i = 1; i < n; ++i) {
        const par = nodes[(i - 1) >>> 1];
        const node = { value: elements[i] };
        nodes[i] = node;
        if (i & 1) {
            par.left = node;
        } else {
            par.right = node;
        }
    }
    return nodes[0];
}
/**
 *
 * @param node
 *
 * @returns
 *
 * @internal
 */
export function* inOrderTraverse<T>(
    node: BinaryTreeNode<T> | undefined,
): Iterable<BinaryTreeNode<T>> {
    const stack = new LinkedStack<BinaryTreeNode<T>>();

    while (node != null) {
        stack.push(node);
        node = node.left;
    }

    while (stack.size > 0) {
        node = stack.pop()!;
        yield node;
        node = node.right;
        while (node != null) {
            stack.push(node);
            node = node.left;
        }
    }
}
/**
 *
 * @param node
 *
 * @returns
 *
 * @internal
 */
export function* postOrderTraverse<T>(
    node: BinaryTreeNode<T> | undefined,
): Iterable<BinaryTreeNode<T>> {
    interface Meta {
        seen: boolean;
        node?: BinaryTreeNode<T>;
    }
    const stack = new LinkedStack<Meta>([{ seen: false, node }]);
    do {
        const meta = stack.pop()!;
        if (meta.node != null) {
            if (meta.seen) {
                yield meta.node;
            } else {
                meta.seen = true;
                stack.push(meta);
                stack.push({ seen: false, node: meta.node.right });
                stack.push({ seen: false, node: meta.node.left });
            }
        }
    } while (stack.size > 0);
}
/**
 *
 * @param node
 *
 * @returns
 *
 * @internal
 */
export function* preOrderTraverse<T>(
    node: BinaryTreeNode<T> | undefined,
): Iterable<BinaryTreeNode<T>> {
    const stack = new LinkedStack<BinaryTreeNode<T> | undefined>([node]);
    do {
        node = stack.pop()!;
        if (node != null) {
            yield node;
            stack.push(node.right);
            stack.push(node.left);
        }
    } while (stack.size > 0);
}
