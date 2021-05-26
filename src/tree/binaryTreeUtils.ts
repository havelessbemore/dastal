import { LinkedNode } from 'src/list';
import { BinaryTreeNode } from './binaryTreeNode';

/**
 *
 * @param node
 *
 * @returns
 *
 * @internal
 */
export function clone<T, Node extends BinaryTreeNode<T>>(node: Node | undefined): Node | undefined {
    if (node == null) {
        return undefined;
    }
    const out: Node = Object.assign({}, node);
    let stack: LinkedNode<Node> | undefined = { value: out };
    do {
        node = stack.value;
        stack = stack.next;
        if (node.left) {
            stack = { next: stack, value: (node.left = Object.assign({}, node.left)) };
        }
        if (node.right) {
            stack = { next: stack, value: (node.right = Object.assign({}, node.right)) };
        }
    } while (stack != null);
    return out;
}
/**
 *
 * @param node
 *
 * @returns
 *
 * @internal
 */
export function* inOrderTraverse<T, Node extends BinaryTreeNode<T>>(
    node: Node | undefined,
): Generator<Node> {
    let stack: LinkedNode<Node> | undefined = undefined;

    while (node != null) {
        stack = { next: stack, value: node };
        node = node.left;
    }

    while (stack != null) {
        node = stack.value;
        stack = stack.next;
        yield node;
        node = node.right;
        while (node != null) {
            stack = { next: stack, value: node };
            node = node.left;
        }
    }
}
/*
 *
 * @param node
 *
 * @returns
 *
 * @internal
 */
export function levelOrderTraverse<T, Node extends BinaryTreeNode<T>>(
    node: Node | undefined,
    padded?: false,
): Generator<Node>;
export function levelOrderTraverse<T, Node extends BinaryTreeNode<T>>(
    node: Node | undefined,
    padded: true,
): Generator<Node | undefined>;
export function* levelOrderTraverse<T, Node extends BinaryTreeNode<T>>(
    node: Node | undefined,
    padded = false,
): Generator<Node | undefined> {
    const nil = {} as LinkedNode<Node | undefined>;
    let head: LinkedNode<Node | undefined> = { value: node };
    let tail = head;
    for (let cont = node != null; cont; head = head.next!) {
        tail = tail.next = nil;
        for (cont = false; head !== nil; head = head.next!) {
            node = head.value;
            if (node != null) {
                yield node;
                cont ||= node.left != null || node.right != null;
                tail = tail.next = { value: node.left };
                tail = tail.next = { value: node.right };
            } else if (padded) {
                yield undefined;
                tail = tail.next = { value: undefined };
                tail = tail.next = { value: undefined };
            }
        }
    }
}
/*
 *
 * @param node
 *
 * @returns
 *
 * @internal
 *
export function *postOrderTraverse<T>(
    node: BinaryTreeNode<T> | undefined,
): Generator<BinaryTreeNode<T>> {
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
*/
/**
 *
 * @param node
 *
 * @returns
 *
 * @internal
 */
export function* preOrderTraverse<T, Node extends BinaryTreeNode<T>>(
    node: Node | undefined,
): Generator<Node> {
    let stack: LinkedNode<Node | undefined> | undefined = { value: node };
    do {
        node = stack.value;
        stack = stack.next;
        if (node != null) {
            yield node;
            stack = { next: stack, value: node.right };
            stack = { next: stack, value: node.left };
        }
    } while (stack != null);
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
