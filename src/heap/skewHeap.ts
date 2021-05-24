import { isArray } from 'src/array/utils';
import { BinaryTreeNode } from 'src/tree/binaryTreeNode';
import { clone, preOrderTraverse, toBinaryTree } from 'src/tree/binaryTreeUtils';
import { CompareFn } from '..';
import { BinaryHeap } from './binaryHeap';
import { Heap } from './heap';
import { skewMerge } from './utils';

/**
 * A skew heap is a heap implemented as a binary tree
 * ([source](https://en.wikipedia.org/wiki/Skew_heap)).
 *
 * A skew heap is a self-adjusting heap which attempts to maintain balance
 * by unconditionally swapping all nodes in the merge path when merging two heaps. Every
 * operation that modifies the heap (e.g. push, pop, merge) is considered a merge and is done
 * by using a skew heap merge.
 *
 * Skew heaps can merge more quickly than binary heaps. This can seem contradictory, since
 * skew heaps have no structural constraints and no guarantee that the height of the tree is
 * logarithmic (i.e. balanced). However, amortized complexity analysis can demonstrate that
 * all operations on a skew heap can be done in O(log(n). More specifically, the
 * amortized complexity is known to be log<sub>φ</sub>(n) where φ is the golden ratio. This is
 * approximately 1.44*log<sub>2</sub>(n).
 *
 * #### Complexity
 *
 * | Property | Average  | Worst |
 * | :------- | :------  | :---- |
 * | Space    | O(n)     | O(n)
 * | Push     | O(log n) | O(log n)
 * | Peek     | O(1)	 | O(1)
 * | Pop      | O(log n) | O(log n)
 * | Search   | O(n)     | O(n)
 */
export class SkewHeap<T> implements Heap<T> {
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
    protected root: BinaryTreeNode<T> | undefined;
    /**
     * Instantiate a heap.
     *
     * @param compareFn - The function to determine the order of elements.
     * @param elements - A set of elements to initialize the heap with.
     */
    constructor(compareFn: CompareFn<T>, elements?: Iterable<T>) {
        this.compare = compareFn;
        this.length = 0;
        this.addAll(elements ?? []);
    }

    addAll(elements: Iterable<T>): number {
        if (isArray(elements)) {
            for (let i = 0; i < elements.length; ++i) {
                this.push(elements[i]);
            }
        } else if (elements instanceof SkewHeap || elements instanceof BinaryHeap) {
            this.merge(elements);
        } else {
            for (const element of elements) {
                this.push(element);
            }
        }
        return this.length;
    }

    clear(): void {
        this.length = 0;
        this.root = undefined;
    }

    comparator(): CompareFn<T> {
        return this.compare;
    }

    contains(element: T): boolean {
        for (const node of preOrderTraverse(this.root)) {
            if (element === node.value) {
                return true;
            }
        }
        return false;
    }

    delete(element: T): boolean {
        if (this.root == null) {
            return false;
        }
        if (this.root.value === element) {
            this.pop()!;
            return true;
        }
        for (const par of preOrderTraverse(this.root)) {
            const key: keyof BinaryTreeNode<T> | undefined =
                par.left && par.left.value === element
                    ? 'left'
                    : par.right && par.right.value === element
                    ? 'right'
                    : undefined;
            if (key != null) {
                const node = par[key]!;
                par[key] = skewMerge(this.compare, [node.left, node.right]);
                --this.length;
                return true;
            }
        }
        return false;
    }

    merge(heap: Heap<T>): this {
        if (this.compare !== heap.comparator()) {
            this.addAll(heap);
        } else if (heap instanceof SkewHeap) {
            this.root = skewMerge(this.compare, [this.root, clone(heap.root)]);
            this.length += heap.size;
        } else if (heap instanceof BinaryHeap) {
            this.root = skewMerge(this.compare, [this.root, toBinaryTree(heap['array'])!]);
            this.length += heap.size;
        } else {
            this.addAll(heap);
        }
        return this;
    }

    peek(): T | undefined {
        return this.root?.value;
    }

    pop(): T | undefined {
        if (this.root == null) {
            return undefined;
        }
        const value = this.root.value;
        this.root = skewMerge(this.compare, [this.root.left, this.root.right]);
        --this.length;
        return value;
    }

    push(value: T): number {
        this.root = skewMerge(this.compare, [this.root, { value }]);
        return ++this.length;
    }

    pushPop(value: T): T {
        this.push(value);
        return this.pop()!;
    }

    replace(value: T): T | undefined {
        if (this.root == null) {
            this.root = { value };
            this.length = 1;
            return undefined;
        }
        const out = this.root.value;
        this.root = skewMerge(this.compare, [this.root.left, this.root.right, { value }]);
        return out;
    }

    get size(): number {
        return this.length;
    }

    *sorted(): Iterable<T> {
        if (this.root == null) {
            return;
        }
        const heap = new SkewHeap<BinaryTreeNode<T>>(
            (a, b) => this.compare(a.value, b.value),
            [this.root],
        );
        do {
            const node = heap.pop()!;
            yield node.value;
            node.left && heap.push(node.left);
            node.right && heap.push(node.right);
        } while (heap.size > 0);
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
        if (this.root == null) {
            return false;
        }

        if (this.root.value === curElement) {
            this.root = skewMerge(this.compare, [
                this.root.left,
                this.root.right,
                { value: newElement },
            ]);
            return true;
        }

        let node: BinaryTreeNode<T> | undefined = undefined;
        for (const par of preOrderTraverse(this.root)) {
            if (par.left && par.left.value === curElement) {
                node = par.left;
                par.left = undefined;
                break;
            }
            if (par.right && par.right.value === curElement) {
                node = par.right;
                par.right = undefined;
                break;
            }
        }

        if (node == null) {
            return false;
        }

        this.root = skewMerge(this.compare, [
            this.root,
            node.left,
            node.right,
            { value: newElement },
        ]);
        return true;
    }
}
