import { CompareFn } from '..';
import { AATreeNode } from './aaTreeNode';
import {
    clone,
    search,
    Edge,
    inOrderTraverse,
    leftmost,
    leftmostStack,
    preOrderTraverse,
    removeStack,
    rightmost,
    rightmostStack,
    searchStack,
    debug,
} from './binaryTreeUtils';
import { SortedTree } from './sortedTree';
import { isArray } from 'src/utils/arrayUtils';
import { LinkedNode } from 'src/list';

/**
 * An AA tree is a form of balanced tree used for storing and retrieving ordered data efficiently
 * ([source](https://en.wikipedia.org/wiki/AA_tree)).
 *
 * AA trees are named for Arne Andersson, their inventor. They are a variation of the red–black tree,
 * which supports efficient addition and deletion of entries. Unlike red–black trees, additional
 * constraints on the balancing mechanism greatly simplifies the implementation as well as
 * maintenance operations; While a red–black tree needs to consider seven different shapes
 * to properly balance the tree, an AA tree only needs to consider two shapes.
 *
 * The performance of an AA tree is equivalent to the performance of a red–black tree.
 * While an AA tree makes more rotations than a red-black tree, the simpler algorithms
 * tend to be faster, which balances out to similar performance. A red-black tree is
 * more consistent in its performance, but an AA tree tends to be flatter, which results
 * in slightly faster search times.
 */
export class AATree<T> implements SortedTree<T> {
    /**
     * The function to determine the order of elements.
     */
    protected compare: CompareFn<T>;
    /**
     * Indicates how to handle duplicates:
     * - < 0 : Add to left subtree
     * - = 0 : Do now allow duplicates
     * - > 0 : Add to right subtree
     */
    protected dupeWeight: number;
    /**
     * The number of elements in the list.
     */
    protected length: number;
    /**
     * The node at the "top" of the heap.
     */
    protected root: AATreeNode<T> | undefined;
    /**
     * Instantiate a tree.
     *
     * @param compareFn - The function to determine the order of elements.
     * @param elements - A set of elements to initialize the tree with.
     */
    constructor(compareFn: CompareFn<T>, elements?: Iterable<T>);
    /**
     * Instantiate a tree.
     *
     * @param compareFn - The function to determine the order of elements.
     * @param allowDuplicates - Whether to allow duplicates
     * @param elements - A set of elements to initialize the tree with.
     */
    constructor(compareFn: CompareFn<T>, allowDuplicates: boolean, elements?: Iterable<T>);
    constructor(
        compareFn: CompareFn<T>,
        allowDuplicates?: boolean | Iterable<T>,
        elements?: Iterable<T>,
    ) {
        if (typeof allowDuplicates !== 'boolean') {
            elements = allowDuplicates;
            allowDuplicates = true;
        }
        this.compare = compareFn;
        this.dupeWeight = +allowDuplicates;
        this.length = 0;
        this.build(elements ?? []);
    }

    add(element: T): this {
        // Find the element
        const sentinel = { left: this.root } as AATreeNode<T>;
        let edge: Edge<AATreeNode<T>> = { from: sentinel, label: 'left', to: this.root };
        let stack = searchStack(element, { value: edge }, this.compare, this.dupeWeight);

        // If element already exists
        if (stack.value.to != null) {
            return this;
        }

        // Add element
        edge = stack.value;
        let label = edge.label;
        edge.from![label!] = { level: 1, value: element };

        // Balance the tree
        while (stack.next) {
            stack = stack.next;
            edge = stack.value;
            edge.to = split(skew(edge.to));
            edge.from![(label = edge.label!)] = edge.to;
        }

        // Update state
        ++this.length;
        this.root = sentinel.left;
        return this;
    }

    clear(): void {
        this.root = undefined;
        this.length = 0;
    }

    comparator(): CompareFn<T> {
        return this.compare;
    }

    delete(element: T): boolean {
        // Remove the element if found
        const sentinel = { left: this.root } as AATreeNode<T>;
        const edge: Edge<AATreeNode<T>> = { from: sentinel, label: 'left', to: this.root };
        const stack = searchStack(element, { value: edge }, this.compare, 0);
        const removed = remove(stack);

        // Update state
        this.root = sentinel.left;
        this.length -= +removed;
        return removed;
    }

    has(element: T): boolean {
        return search(element, this.root, this.compare) != null;
    }

    max(): T | undefined {
        return rightmost(this.root)?.value;
    }

    min(): T | undefined {
        return leftmost(this.root)?.value;
    }

    pop(): T | undefined {
        // Find the maximum value
        const sentinel = { left: this.root } as AATreeNode<T>;
        const edge: Edge<AATreeNode<T>> = { from: sentinel, label: 'left', to: this.root };
        const stack = rightmostStack({ value: edge });
        const value = stack.value.to?.value;

        // Remove the value
        const removed = remove(stack);

        // Update state
        this.root = sentinel.left;
        this.length -= +removed;
        return value;
    }

    shift(): T | undefined {
        // Find the minimum value
        const sentinel = { left: this.root } as AATreeNode<T>;
        const edge: Edge<AATreeNode<T>> = { from: sentinel, label: 'left', to: this.root };
        const stack = leftmostStack({ value: edge });
        const value = stack.value.to?.value;

        // Remove the value
        const removed = remove(stack);

        // Update state
        this.root = sentinel.left;
        this.length -= +removed;
        return value;
    }

    get size(): number {
        return this.length;
    }

    *sorted(): Iterable<T> {
        for (const node of inOrderTraverse(this.root)) {
            yield node.value;
        }
    }
    /**
     * Receive an iterator through the list.
     *
     * **Note:** Unexpected behavior can occur if the collection is modified during iteration.
     *
     * @returns An iterator through the list
     */
    *[Symbol.iterator](): Iterator<T> {
        for (const node of preOrderTraverse(this.root)) {
            yield node.value;
        }
    }

    update(curElement: T, newElement: T): boolean {
        if (this.delete(curElement)) {
            this.add(newElement);
            return true;
        }
        return false;
    }

    protected build(obj: Iterable<T>): void {
        if (isArray(obj)) {
            for (let i = 0; i < obj.length; ++i) {
                this.add(obj[i]);
            }
        } else if (obj instanceof AATree && this.compare === obj.compare) {
            this.root = clone(obj.root);
            this.length = obj.size;
        } else {
            for (const element of obj) {
                this.add(element);
            }
        }
    }
}
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
    stack = removeStack(stack);

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
