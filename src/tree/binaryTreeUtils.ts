import { LinkedNode } from 'src/list';
import { CompareFn } from '..';
import { BinaryTreeNode } from './binaryTreeNode';

/**
 * @internal
 */
export interface Edge<Node extends BinaryTreeNode<unknown>> {
    label?: 'left' | 'right';
    from?: Node;
    to?: Node;
}
/**
 * [source](https://stackoverflow.com/questions/51419176/how-to-get-a-subset-of-keyof-t-whose-value-tk-are-callable-functions-in-typ)
 * 
 * @internal
 *
export type KeyOfType<T, U> = {[K in keyof T]: T[K] extends U ? K: never}[keyof T];
*/
/**
 * @internal
 */
export function debug<N extends BinaryTreeNode<T>, T = any>(
    root: N | undefined,
    mapFn?: (node: N) => any,
): void {
    mapFn = mapFn == null ? (n) => n.value : mapFn;

    // Turn the tree into an array in level-order
    const array: string[] = [];
    for (const node of levelOrderTraverse(root, true)) {
        array.push(node ? `${mapFn(node)}` : '?');
    }

    // If empty
    if (array.length < 1) {
        console.log('<empty>\n');
        return;
    }

    // Find the longest value string
    const lenV = array.reduce((p, c) => Math.max(p, c.length), 0);

    // Pad each value
    for (let i = 0; i < array.length; ++i) {
        array[i] = pad(array[i], lenV, ' ');
    }

    // Split values into levels
    const levels = [];
    for (let n = 1; array.length > 0; n *= 2) {
        levels.push(array.splice(0, n));
    }

    // Initialize formatting variables
    let branch = '_'.repeat(1 + lenV / 2);
    let offset = '';
    const offsetOffset = ' '.repeat(branch.length);
    let separator = ' '.repeat(1 + ((lenV - 1) & 1));
    const separatorOffset = ' '.repeat(lenV);

    // Build the last level
    array.length = levels.length;
    array[array.length - 1] = levels.pop()!.join(separator);

    // Build remaining levels in reverse
    for (let n = levels.length - 1; n >= 0; --n) {
        const level = levels.pop()!;
        for (let j = 0; j < level.length; ++j) {
            level[j] = branch + level[j] + branch;
        }
        array[n] = offset + level.join(separator);
        branch += branch;
        offset += offset + offsetOffset;
        separator += separator + separatorOffset;
    }

    // Output
    console.log(array.join('\n'), '\n');
}
/**
 * @internal
 */
export function removeStack<Node extends BinaryTreeNode<unknown>>(
    stack: LinkedNode<Edge<Node>>,
    dir = true,
): LinkedNode<Edge<Node>> {
    let edge = stack.value;
    let node = edge.to;

    // Input check
    if (node == null) {
        return stack;
    }

    // Find the replacement
    if (node.right == null) {
        // If no right child, replace with left
        node = node.left;
    } else if (node.left == null) {
        // If no left child, replace with right
        node = node.right;
    } else if (dir) {
        // Replace with the successor
        stack = successorStack(stack);
        edge = stack.value;
        const temp = edge.to!;
        node.value = temp.value;
        node = temp.right;
    } else {
        // Replace with the predecessor
        stack = predecessorStack(stack);
        edge = stack.value;
        const temp = edge.to!;
        node.value = temp.value;
        node = temp.left;
    }

    // Make the replacement / update the tree
    edge.to = node;
    if (edge.from) {
        edge.from[edge.label!] = edge.to = node;
    }

    return stack;
}
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
export function leftmost<Node extends BinaryTreeNode<unknown>>(node?: undefined): undefined;
export function leftmost<Node extends BinaryTreeNode<unknown>>(node: Node): Node;
export function leftmost<Node extends BinaryTreeNode<unknown>>(node?: Node): Node | undefined;
export function leftmost<Node extends BinaryTreeNode<unknown>>(node?: Node): Node | undefined {
    if (node == null) {
        return undefined;
    }
    while (node.left) {
        node = node.left;
    }
    return node;
}
/**
 * @internal
 */
export function leftmostStack<Node extends BinaryTreeNode<unknown>>(
    stack: LinkedNode<Edge<Node>>,
): LinkedNode<Edge<Node>> {
    let node = stack.value.to;
    if (node == null) {
        return stack;
    }
    while (node.left) {
        stack = { next: stack, value: { label: 'left', from: node, to: node.left } };
        node = node.left;
    }
    return stack;
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
 * @internal
 */
function pad(str: string, maxLen: number, fillString: string): string {
    const len = str.length;
    if (len >= maxLen) {
        return str;
    }
    const diff = maxLen - len;
    return str.padStart(len + diff / 2, fillString).padEnd(len + diff, fillString);
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
export function predecessor<Node extends BinaryTreeNode<unknown>>(node?: Node): Node | undefined {
    return node == null ? undefined : rightmost(node.left);
}
/**
 * @internal
 */
export function predecessorStack<Node extends BinaryTreeNode<unknown>>(
    stack: LinkedNode<Edge<Node>>,
): LinkedNode<Edge<Node>> {
    const node = stack.value.to;
    if (node == null) {
        return stack;
    }
    stack = { next: stack, value: { label: 'left', from: node, to: node.left } };
    return rightmostStack(stack);
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
 * @internal
 */
export function reverse<Node extends BinaryTreeNode<unknown>>(root?: Node): void {
    if (root == null) {
        return;
    }
    for (const node of preOrderTraverse(root)) {
        const left = node.left;
        node.left = node.right;
        node.right = left;
    }
}
/**
 * @internal
 */
export function rightmost<Node extends BinaryTreeNode<unknown>>(node?: undefined): undefined;
export function rightmost<Node extends BinaryTreeNode<unknown>>(node: Node): Node;
export function rightmost<Node extends BinaryTreeNode<unknown>>(node?: Node): Node | undefined;
export function rightmost<Node extends BinaryTreeNode<unknown>>(node?: Node): Node | undefined {
    if (node == null) {
        return undefined;
    }
    while (node.right) {
        node = node.right;
    }
    return node;
}
/**
 * @internal
 */
export function rightmostStack<Node extends BinaryTreeNode<unknown>>(
    stack: LinkedNode<Edge<Node>>,
): LinkedNode<Edge<Node>> {
    let node = stack.value.to;
    if (node == null) {
        return stack;
    }
    while (node.right) {
        stack = { next: stack, value: { label: 'right', from: node, to: node.right } };
        node = node.right;
    }
    return stack;
}
/**
 * Assumes sorted by compareFn
 * @internal
 */
export function search<T, Node extends BinaryTreeNode<T>>(
    element: T,
    node: Node | undefined,
    compareFn: CompareFn<T>,
): Node | undefined {
    while (node) {
        const comp: number = compareFn(element, node.value);
        if (comp == 0) {
            break;
        }
        node = comp < 0 ? node.left : node.right;
    }
    return node;
}
/**
 * Assumes sorted by compareFn
 * @internal
 */
export function searchStack<T, Node extends BinaryTreeNode<T>>(
    element: T,
    stack: LinkedNode<Edge<Node>>,
    compareFn: CompareFn<T>,
    dupeWeight = 0,
): LinkedNode<Edge<Node>> {
    const paths: ['left', 'right'] = ['left', 'right'];
    let node = stack.value.to;
    while (node) {
        const comp: number = compareFn(element, node.value) || dupeWeight;
        if (comp === 0) {
            break;
        }
        const label = paths[+(comp > 0)];
        stack = { next: stack, value: { label, from: node, to: node[label] } };
        node = node[label]!;
    }
    return stack;
}
/**
 * @internal
 */
export function successor<Node extends BinaryTreeNode<unknown>>(node?: Node): Node | undefined {
    return node == null ? undefined : leftmost(node.right);
}
/**
 * @internal
 */
export function successorStack<Node extends BinaryTreeNode<unknown>>(
    stack: LinkedNode<Edge<Node>>,
): LinkedNode<Edge<Node>> {
    const node = stack.value.to;
    if (node == null) {
        return stack;
    }
    stack = { next: stack, value: { label: 'right', from: node, to: node.right } };
    return leftmostStack(stack);
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
