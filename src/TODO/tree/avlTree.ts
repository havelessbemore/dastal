import { CompareFn } from '../..';
import { AVLTreeNode } from './avlTreeNode';
import {
    clone,
    inOrderTraverse,
    max,
    min,
    preOrderTraverse,
    search,
} from '../../tree/binaryTreeUtils';
import { SortedTree } from '../../tree/sortedTree';
import { isArray } from 'src/array/utils';
import { balance, debug, height } from './avlTreeUtils';

/**
 * An AVL tree is a self-balancing binary search tree ([source](https://en.wikipedia.org/wiki/AVL_tree)).
 *
 * It is named after inventors Georgy Adelson-Velsky and Evgenii Landis and was the first such
 * data structure to be invented. In an AVL tree, the heights of the two child
 * subtrees of any node differ by at most one; if at any time they differ by more
 * than one, rebalancing is done to restore this property.
 *
 * Lookup, insertion, and deletion all take O(log(n)) time in both the average and worst cases,
 * where n is the number of nodes in the tree prior to the operation. Insertions and deletions
 * may require the tree to be rebalanced by one or more tree rotations.
 *
 * AVL trees are often compared with red–black trees as both take O(log(n))
 * time for the basic operations. For lookup-intensive applications, AVL trees are
 * faster than red–black trees because they are more strictly balanced.
 * Similar to red–black trees, AVL trees are height-balanced.
 */
export class AVLTree<T> implements SortedTree<T> {
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
     * The root of the tree.
     */
    protected root: AVLTreeNode<T> | undefined;
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
        let stack = search(element, this.root, this.compare, this.dupeWeight);

        // If tree is empty
        if (stack == null) {
            this.root = { height: 0, value: element };
            return ++this.length;
        }

        // If element already exists
        if (stack.value.next != null) {
            return this.length;
        }

        // Add element
        const node = stack.value.prev!;
        node[stack.value.label!] = { height: 0, value: element };

        // Balance the tree
        for (stack = stack.next; stack; stack = stack.next) {
            const edge = stack.value;
            edge.next!.height = height(edge.next!);
            if (edge.prev == null) {
                this.root = balance(edge.next!);
                break;
            }
            edge.prev![edge.label!] = balance(edge.next!);
        }

        // Update state
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
        const edges = search(element, this.root, this.compare, 0);
        return edges != null && edges.value.next != null;
    }

    delete(element: T): boolean {
        const edges = search(element, this.root, this.compare, 0);
        if (edges == null || edges.value.next == null) {
            return false;
        }
        throw new Error('TODO');
        return true;
    }

    max(): T | undefined {
        if (this.root == null) {
            return undefined;
        }
        return max(this.root).value.next!.value;
    }

    min(): T | undefined {
        if (this.root == null) {
            return undefined;
        }
        return min(this.root).value.next!.value;
    }

    pop(): T | undefined {
        if (this.root == null) {
            return undefined;
        }
        const q = max(this.root);
        throw new Error('TODO');
    }

    shift(): T | undefined {
        if (this.root == null) {
            return undefined;
        }
        const q = min(this.root);
        throw new Error('TODO');
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
        throw new Error('TODO');
    }

    protected build(obj: Iterable<T>): void {
        if (isArray(obj)) {
            for (let i = 0; i < obj.length; ++i) {
                this.add(obj[i]);
            }
        } else if (obj instanceof AVLTree && this.compare === obj.compare) {
            this.root = clone(obj.root);
            this.length = obj.size;
        } else {
            for (const element of obj) {
                this.add(element);
            }
        }
    }
}
