import { CompareFn } from 'src';
import { AVLTreeNode } from './avlTreeNode';
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
    removeStack,
} from './binaryTreeUtils';
import { SortedTree } from './sortedTree';
import { isArray } from 'src/utils/arrayUtils';
import { LinkedNode } from 'src/list';

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
    protected root: AVLTreeNode<T>;
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
        this.root = {} as AVLTreeNode<T>;
        this.build(elements ?? []);
    }

    add(element: T): this {
        // Find the element
        let edge: Edge<AVLTreeNode<T>> = { from: this.root, label: 'left', to: this.root.left };
        let stack = searchStack(element, { value: edge }, this.compare, this.dupeWeight);

        // If element already exists
        if (stack.value.to != null) {
            return this;
        }

        // Add element
        edge = stack.value;
        let label = edge.label;
        edge.from![label!] = { balanceFactor: 0, value: element };

        // Balance the tree
        while (stack.next) {
            stack = stack.next;
            edge = stack.value;
            edge.to!.balanceFactor += label === 'left' ? -1 : 1;
            edge.to = balance(edge.to!);
            edge.from![(label = edge.label!)] = edge.to;
            if (edge.to!.balanceFactor === 0) {
                break;
            }
        }

        // Update state
        ++this.length;
        return this;
    }

    clear(): void {
        this.root.left = undefined;
        this.length = 0;
    }

    comparator(): CompareFn<T> {
        return this.compare;
    }

    delete(element: T): boolean {
        // Remove the element if found
        const edge: Edge<AVLTreeNode<T>> = { from: this.root, label: 'left', to: this.root.left };
        const stack = searchStack(element, { value: edge }, this.compare, 0);
        const removed = remove(stack);

        // Update state
        this.length -= +removed;
        return removed;
    }

    has(element: T): boolean {
        return search(element, this.root.left, this.compare) != null;
    }

    max(): T | undefined {
        return rightmost(this.root.left)?.value;
    }

    min(): T | undefined {
        return leftmost(this.root.left)?.value;
    }

    pop(): T | undefined {
        // Find the maximum value
        const edge: Edge<AVLTreeNode<T>> = { from: this.root, label: 'left', to: this.root.left };
        const stack = rightmostStack({ value: edge });
        const value = stack.value.to?.value;

        // Remove the value
        const removed = remove(stack);

        // Update state
        this.length -= +removed;
        return value;
    }

    shift(): T | undefined {
        // Find the minimum value
        const edge: Edge<AVLTreeNode<T>> = { from: this.root, label: 'left', to: this.root.left };
        const stack = leftmostStack({ value: edge });
        const value = stack.value.to?.value;

        // Remove the value
        const removed = remove(stack);

        // Update state
        this.length -= +removed;
        return value;
    }

    get size(): number {
        return this.length;
    }

    *sorted(): Iterable<T> {
        for (const node of inOrderTraverse(this.root.left)) {
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
        for (const node of preOrderTraverse(this.root.left)) {
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
    stack = removeStack(stack);

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
