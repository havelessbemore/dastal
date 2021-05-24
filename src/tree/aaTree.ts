import { CompareFn } from '..';
import { AATreeNode } from './aaTreeNode';
import { clone, inOrderTraverse, preOrderTraverse } from './binaryTreeUtils';
import { SortedTree } from './sortedTree';
import { insert, remove } from './aaTreeUtils';
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
    constructor(compareFn: CompareFn<T>, elements?: Iterable<T>) {
        this.compare = compareFn;
        this.length = 0;
        this.build(elements ?? []);
    }

    add(element: T): number {
        this.root = insert(element, this.root, this.compare);
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
        let node = this.root;
        while (node != null) {
            if (element === node.value) {
                return true;
            }
            node = this.compare(element, node.value) < 0 ? node.left : node.right;
        }
        return false;
    }

    delete(element: T): boolean {
        const res = remove(element, this.root, this.compare);
        this.root = res[0];
        this.length -= +res[1];
        return res[1];
    }

    max(): T | undefined {
        let node = this.root;
        if (node == null) {
            return undefined;
        }
        while (node.right != null) {
            node = node.right;
        }
        return node.value;
    }

    min(): T | undefined {
        let node = this.root;
        if (node == null) {
            return undefined;
        }
        while (node.left != null) {
            node = node.left;
        }
        return node.value;
    }

    pop(): T | undefined {
        const value = this.max();
        if (value != null) {
            this.root = remove(value, this.root, this.compare)[0];
            --this.length;
        }
        return value;
    }

    shift(): T | undefined {
        const value = this.min();
        if (value != null) {
            this.root = remove(value, this.root, this.compare)[0];
            --this.length;
        }
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
