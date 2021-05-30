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
    rightmost,
    rightmostStack,
    searchStack,
} from './binaryTreeUtils';
import { SortedTree } from './sortedTree';
import { remove, skew, split } from './aaTreeUtils';
import { isArray } from 'src/array/utils';

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

    add(element: T): number {
        // Find the element
        const sentinel = { left: this.root } as AATreeNode<T>;
        let edge: Edge<AATreeNode<T>> = { from: sentinel, label: 'left', to: this.root };
        let stack = searchStack(element, { value: edge }, this.compare, this.dupeWeight);

        // If element already exists
        if (stack.value.to != null) {
            return this.length;
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
        this.root = sentinel.left;
        return ++this.length;
    }

    clear(): void {
        this.root = undefined;
        this.length = 0;
    }

    comparator(): CompareFn<T> {
        return this.compare;
    }

    contains(element: T): boolean {
        return search(element, this.root, this.compare) != null;
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
