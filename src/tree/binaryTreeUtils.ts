import { LinkedNode } from 'src/list';
import { CompareFn } from '..';
import { BinaryTreeNode } from './binaryTreeNode';

/**
 * @internal
 */
export interface Edge<Node extends BinaryTreeNode<unknown>> {
    label?: 'left' | 'right';
    prev?: Node;
    next?: Node;
}
/**
 * [source](https://stackoverflow.com/questions/51419176/how-to-get-a-subset-of-keyof-t-whose-value-tk-are-callable-functions-in-typ)
 * 
 * @internal
 *
export type KeyOfType<T, U> = {[K in keyof T]: T[K] extends U ? K: never}[keyof T];
/
/**
 * @internal
 */
export function clone<T, Node extends BinaryTreeNode<T>>(node?: undefined): undefined;
export function clone<T, Node extends BinaryTreeNode<T>>(node: Node): Node;
export function clone<T, Node extends BinaryTreeNode<T>>(node: Node | undefined): Node | undefined;
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
    } while (stack);
    return out;
}
/**
 * @internal
 */
export function* inOrderTraverse<T, Node extends BinaryTreeNode<T>>(
    node: Node | undefined,
): Generator<Node> {
    let stack: LinkedNode<Node> | undefined = undefined;

    while (node) {
        stack = { next: stack, value: node };
        node = node.left;
    }

    while (stack) {
        node = stack.value;
        stack = stack.next;
        yield node;
        node = node.right;
        while (node) {
            stack = { next: stack, value: node };
            node = node.left;
        }
    }
}
/**
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
            if (node) {
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
/**
 * Assumes sorted
 * @internal
 */
export function max<T, Node extends BinaryTreeNode<T>>(node?: undefined): undefined;
export function max<T, Node extends BinaryTreeNode<T>>(node: Node): LinkedNode<Edge<Node>>;
export function max<T, Node extends BinaryTreeNode<T>>(
    node: Node | undefined,
): LinkedNode<Edge<Node>> | undefined;
export function max<T, Node extends BinaryTreeNode<T>>(
    node: Node | undefined,
): LinkedNode<Edge<Node>> | undefined {
    if (node == null) {
        return undefined;
    }
    let stack: LinkedNode<Edge<Node>> = { value: { next: node } };
    while (node.right) {
        stack = { next: stack, value: { label: 'right', prev: node, next: node.right } };
        node = node.right;
    }
    return stack;
}
/**
 * Assumes sorted
 * @internal
 */
export function min<T, Node extends BinaryTreeNode<T>>(node?: undefined): undefined;
export function min<T, Node extends BinaryTreeNode<T>>(node: Node): LinkedNode<Edge<Node>>;
export function min<T, Node extends BinaryTreeNode<T>>(
    node: Node | undefined,
): LinkedNode<Edge<Node>> | undefined;
export function min<T, Node extends BinaryTreeNode<T>>(
    node: Node | undefined,
): LinkedNode<Edge<Node>> | undefined {
    if (node == null) {
        return undefined;
    }
    let stack: LinkedNode<Edge<Node>> = { value: { next: node } };
    while (node.left) {
        stack = { next: stack, value: { label: 'left', prev: node, next: node.left } };
        node = node.left;
    }
    return stack;
}
/**
 * @internal
 */
export function* postOrderTraverse<T, Node extends BinaryTreeNode<T>>(
    node: Node | undefined,
): Generator<Node> {
    interface Meta {
        seen: boolean;
        node?: Node;
    }
    let stack: LinkedNode<Meta> | undefined = { value: { seen: false, node } };
    do {
        const meta = stack.value;
        stack = stack.next;
        if (meta.node) {
            if (meta.seen) {
                yield meta.node;
            } else {
                meta.seen = true;
                stack = { next: stack, value: meta };
                stack = { next: stack, value: { seen: false, node: meta.node.right } };
                stack = { next: stack, value: { seen: false, node: meta.node.left } };
            }
        }
    } while (stack);
}
/**
 * @internal
 */
export function* preOrderTraverse<T, Node extends BinaryTreeNode<T>>(
    node: Node | undefined,
): Generator<Node> {
    let stack: LinkedNode<Node | undefined> | undefined = { value: node };
    do {
        node = stack.value;
        stack = stack.next;
        if (node) {
            yield node;
            stack = { next: stack, value: node.right };
            stack = { next: stack, value: node.left };
        }
    } while (stack);
}
/**
 * Assumes sorted
 * @internal
 */
export function search<T, Node extends BinaryTreeNode<T>>(
    element: T,
    node: undefined,
    compareFn: CompareFn<T>,
    dupeWeight: number,
): undefined;
export function search<T, Node extends BinaryTreeNode<T>>(
    element: T,
    node: Node,
    compareFn: CompareFn<T>,
    dupeWeight: number,
): LinkedNode<Edge<Node>>;
export function search<T, Node extends BinaryTreeNode<T>>(
    element: T,
    node: Node | undefined,
    compareFn: CompareFn<T>,
    dupeWeight: number,
): LinkedNode<Edge<Node>> | undefined;
export function search<T, Node extends BinaryTreeNode<T>>(
    element: T,
    node: Node | undefined,
    compareFn: CompareFn<T>,
    dupeWeight = 0,
): LinkedNode<Edge<Node>> | undefined {
    if (node == null) {
        return undefined;
    }
    const paths: ['left', 'right'] = ['left', 'right'];
    let stack: LinkedNode<Edge<Node>> = { value: { next: node } };
    do {
        const comp: number = compareFn(element, node.value) || dupeWeight;
        if (comp === 0) {
            break;
        }
        const label = paths[+(comp > 0)];
        stack = { next: stack, value: { label, prev: node, next: node[label] } };
        node = node[label]!;
    } while (node != null);

    return stack;
}
/**
 * @internal
 */
export function toBinaryTree<T>(
    elements: (T | undefined)[] | undefined,
): BinaryTreeNode<T> | undefined {
    if (elements == null || elements.length < 1 || elements[0] == null) {
        return undefined;
    }
    const n = elements.length;
    const nodes: BinaryTreeNode<T>[] = new Array(n);
    nodes[0] = { value: elements[0] };
    for (let i = 1; i < n; ++i) {
        if (elements[i] == null) {
            continue;
        }
        const par = nodes[(i - 1) >>> 1];
        const node = { value: elements[i]! };
        nodes[i] = node;
        if (i & 1) {
            par.left = node;
        } else {
            par.right = node;
        }
    }
    return nodes[0];
}
