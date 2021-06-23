import { CompareFn } from "src";
import { isArray } from "src/utils/arrayUtils";
import { SortedTree } from "src/tree";
import { clone, Edge, inOrderTraverse, leftmost, leftmostStack, preOrderTraverse, rightmost, rightmostStack, search, searchStack } from "src/tree/binaryTreeUtils";
import { RedBlackTreeNode } from "./redBlackTreeNode";

export class RedBlackTree<T> implements SortedTree<T> {
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
    protected root: RedBlackTreeNode<T> | undefined;
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
        throw new Error("TODO");
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
        const sentinel = { left: this.root } as RedBlackTreeNode<T>;
        const edge: Edge<RedBlackTreeNode<T>> = { from: sentinel, label: 'left', to: this.root };
        const stack = searchStack(element, { value: edge }, this.compare, 0);
        
        throw new Error("TODO");
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
        const sentinel = { left: this.root } as RedBlackTreeNode<T>;
        const edge: Edge<RedBlackTreeNode<T>> = { from: sentinel, label: 'left', to: this.root };
        const stack = rightmostStack({ value: edge });
        const value = stack.value.to?.value;

        throw new Error("TODO");
    }

    shift(): T | undefined {
        // Find the minimum value
        const sentinel = { left: this.root } as RedBlackTreeNode<T>;
        const edge: Edge<RedBlackTreeNode<T>> = { from: sentinel, label: 'left', to: this.root };
        const stack = leftmostStack({ value: edge });
        const value = stack.value.to?.value;

        throw new Error("TODO");
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
        } else if (obj instanceof RedBlackTree && this.compare === obj.compare) {
            this.root = clone(obj.root);
            this.length = obj.size;
        } else {
            for (const element of obj) {
                this.add(element);
            }
        }
    }
}