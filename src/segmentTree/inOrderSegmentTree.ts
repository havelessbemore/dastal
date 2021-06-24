/**
 * Inspired by [Tristan Hume's IForestIndex](https://thume.ca/2021/03/14/iforests) ([github](https://github.com/trishume/gigatrace))
 *
 * An InOrderSegmentTree is a SegmentTree that's internally represented as a binary
 * tree within an array, with nodes stored in in-order traversal. The tree's leaf nodes
 * represent the elements of the segment tree:
 *                                                                                                                               +
 *                                /''''''''''''''''''''''''''''''+''''''''''''''''''''''''''''''\                                |
 *                /''''''''''''''+''''''''''''''\                |               /'''''''''''''''+''''''''''''''\                |
 *        /''''''+''''''\        |        /''''''+'''''\         |        /''''''+'''''\         |        /''''''+'''''\         |
 *    /''+''\    |    /''+''\    |    /''+''\    |    /''+''\    |    /''+''\    |    /''+''\    |    /''+''\    |    /''+''\    |
 *   0   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32
 * --------------------------------------------------------------------------------------------------------------------------------------
 *   0   1   0   1   0   1   0   1   0   1   0   1   0   1   0   1   0   1   0   1   0   1   0   1   0   1   0   1   0   1   0   1   0
 *   0   0   1   1   0   0   1   1   0   0   1   1   0   0   1   1   0   0   1   1   0   0   1   1   0   0   1   1   0   0   1   1   0
 *   0   0   0   0   1   1   1   1   0   0   0   0   1   1   1   1   0   0   0   0   1   1   1   1   0   0   0   0   1   1   1   1   0
 *   0   0   0   0   0   0   0   0   1   1   1   1   1   1   1   1   0   0   0   0   0   0   0   0   1   1   1   1   1   1   1   1   0
 *   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   1   1   1   1   1   1   1   1   1   1   1   1   1   1   1   1   0
 *   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   1
 *
 * Given this layout, we can observe:
 * 1. All leaf nodes have even indices
 * 2. All interior nodes have odd indices
 *
 * # Push()
 *
 * Getting more specific, the internal array does not hold one
 * binary tree, but rather a set of perfect binary trees. Until
 * stated otherwise, all mentions of "tree" or "subtree" henceforth
 * is shorthand for "perfect binary tree". A perfect binary tree is
 * a binary tree in which all interior nodes have two children and
 * all leaves have the same depth ([source](https://en.wikipedia.org/wiki/Binary_tree)).
 *
 * As elements are inserted, an internal node is inserted before it and
 * trees are joined when doing so can create a larger tree.
 * For example, let's say our data structure has 3 elements. Internally,
 * this would be two trees: The first with root at index 1 and the
 * second with root at index 4. The node at index 3 is considered not
 * associated with any tree.
 *
 *               +
 *    /''+''\    |
 *   0   1   2   3   4
 *
 * If another element is added, we can join the trees into one with
 * its root at index 3:
 *
 *        /''''''+''''''\
 *    /''+''\    |    /''+''\
 *   0   1   2   3   4   5   6
 *
 * # Pop()
 *
 * If an element is removed, the internal node inserted with it is also
 * removed. In our example, the data structure returns to having two trees.
 * The node at index 3 is once again considered not associated with
 * any tree.
 *
 *    /''+''\    |
 *   0   1   2   3   4
 *
 * # Query()
 *
 * We can see visually that nodes at the same height h occur at intervals
 * of 2^h. For instance, leaf nodes (h = 1) occur every 2 indices, their
 * parents (h = 2) every 4 indices, trees of h = 3 every 8 indices, etc.
 * For any subtree with root node N at index i:
 * 3. The height N_h is: lsb(N_i+1)
 * 4. The number of leaf nodes N_l is: 2^N_h
 * 5. The total number of nodes (size) N_s is: 2^(N_h+1) - 1 = 2*N_l - 1
 * 6. The root node's index N_i is: 2^N_h - 1 = (N_s - 1) / 2
 * 7. The most left leaf L's index L_i is: N_i & (N_i+1)
 * 8. The most right leaf R's index R_i is: (N_i | (N_i+1)) - 1
 * 9. The size N_s can also be calculated as: R_i - L_i + 1
 * 10. The leftmost leaf of the tree's next neighbor is: R_i + 2 = L_i + N_s + 1
 *
 * From a leaf's perspective, we can observe that for any leaf node L at index L_i:
 * 11. The largest tree with root N of which it is the leftmost leaf is: L_i - 1 + (lsp(L_i) >>> 1)
 * 12. The rightmost leaf R of N is: L_i + lsp(L_i) - 2
 * 13. The size of N's subtree N_s is: R_i - L_i + 1 = L_i + lsp(L_i) - 2 - L_i + 1 = lsp(L_i) - 1
 * 14. The leftmost leaf of the tree's next neighbor is: R_i + 2 = L_i + lsp(L_i) + 1
 *
 * Restructuring 11 - 14, we get:
 * 11. N_i = L_i - 1 + ((N_s + 1) / 2)
 * 12. R_i = L_i + N_s - 1
 * 13. N_s = R_i - L_i + 1 = lsp(L_i) - 1.
 * 14. R_i + 2 = L_i + N_s + 1
 *
 * 15. Following from 4 & 5, a tree's size roughly doubles as its height increases; To
 * merge a tree with x elements, 2*x total elements is required. If a segment tree has
 * y elements such that x < y < 2x, then it cannot be merged and there will still be multiple
 * trees. The largest tree in this case has 2**floor(log2(y)) elements, which is equal to msp(y).
 *
 * 16. Let's say we want to query for the first tree fully within a given range. The range
 * is defined by indices min and max where A) both represent leaf nodes, B) min < max and
 * C) max is exclusive. From 13, we know the size of the largest tree min could be a part of is:
 *    - N_s = lsp(min) - 1
 * From 12, we know the index of the tree's rightmost leaf node is:
 *    - R_i = L_i + N_s - 1 = min + lsp(min) - 2
 * Since max is exclusive, max must be greater than R_i. From 14:
 *    - The tree's neighboring leaf node is R_i + 2
 * Thus:
 *    - max >= R_i + 2 = min + lsp(min)
 *    - max - min >= lsp(min)
 *
 * 17. From 1, we know that there are (max - min)/2 leaf nodes in the range. From 5 & 15, we know
 * that the largest tree with y leaf nodes has msp(y) leaves:
 *    - N_l = msp((max - min)/2) = msp(max - min) / 2
 *    - N_s = 2*N_l - 1 = 2*msp(max - min) / 2 - 1 = msp(max - min) - 1
 *    - R_i = min + N_s - 1 = min + msp(max - min) - 2
 * From 14:
 *    - R_i + 2 = min + msp(max - min)
 * Similar to 16:
 *    - max >= R_i + 2 = min + msp(max - min)
 *    - max - min >= msp(max - min)
 *
 * With 15 - 17, we have found 2 definitions for the first and largest tree within [min, max); its size and
 * its rightmost node. 16 shows that at minimum the size of the range must be lsp(min) for the tree to
 * be within it. 17 shows the minimum size of the range must be msp(max - min). Combined:
 * 18. R_i + 2 = min + Math.min(lsp(min), msp(max - min))
 *
 * Since both inputs to Math.min() are powers of 2, it can be reformulated as:
 * 18. R_i + 2 = min + lsp(min | msp(max - min))
 *
 * We can finally say: given [min, max), the first and largest tree within it has the following properties:
 *    - Its leftmost leaf has index min
 *    - From 18, its size is N_s = lsp(min | msp(max - min)) - 1
 *    - From 12, its rightmost leaf is R_i = min + N_s - 1
 *    - From 14, its neighbor's leftmost leaf is: R_i + 2 = min + N_s + 1 = min + lsp(min | msp(max - min))
 *    - From 11, its root is N_i = min - 1 + ((N_s + 1) / 2)
 *        = min - 1 + (lsp(min | msp(max - min)) - 1 + 1) / 2
 *        = min - 1 + lsp(min | msp(max - min))/2
 *
 * @module
 */
import { lsb, lsp, msb, msp } from '../math/u32';
import { CombineFn } from '..';
import { MAX_ARRAY_LENGTH } from 'src/env';
import { SegmentTree } from './segmentTree';

/**
 * A {@link SegmentTree} internally represented as a binary tree within an array,
 * with nodes stored in in-order traversal. The tree's leaf nodes then represent
 * the elements of the data structure.
 *
 * Memory usage: n elements require 2n - 1 space.
 *
 */
export class InOrderSegmentTree<T> implements SegmentTree<T> {
    /**
     * The set of elements and aggregation nodes for the tree
     */
    protected array: T[];
    /**
     * The function used to aggregate elements
     */
    protected combine: CombineFn<T>;
    /**
     * Construct a new segment tree
     *
     * @param combine - The function used to aggregate segment information
     * @param elements - A set of elements to add into the initial tree
     */
    constructor(combine: CombineFn<T>, elements: Iterable<T> = []) {
        this.array = [];
        this.combine = combine;
        for (const element of elements) {
            this.push(element);
        }
    }

    clear(): void {
        this.array.length = 0;
    }

    pop(): T | undefined {
        // Sanitize range
        if (this.array.length < 2) {
            return this.array.pop();
        }

        // Return element
        const out = this.array[this.array.length - 1];
        this.array.length -= 2;
        return out;
    }

    push(element: T): number {
        // Sanitize range
        if (this.array.length < 1) {
            this.array[0] = element;
            return 1;
        }

        if (this.array.length + 2 > MAX_ARRAY_LENGTH) {
            throw new RangeError(`Invalid length`);
        }

        // Add element
        this.array.push(element, element);
        this.aggregate(this.array.length - 1);
        return this.size;
    }

    query(min: number, max: number): T {
        // Sanitize range
        if (min >= max) {
            throw new RangeError(`Range [${min}..${max}) is empty`);
        }
        if (min < 0 || max > this.size) {
            throw new RangeError(`Range [${min}..${max}) not in [0..${this.size})`);
        }

        // Translate range to interior indices
        min *= 2;
        max *= 2;

        // Jump to min's highest aggregation node that is fully within the range
        let offset = lsp(min | msp(max - min));
        let value = this.array[min - 1 + (offset >>> 1)];

        // Continue jumping top aggregation nodes until max is reached
        for (min += offset; min < max; min += offset) {
            offset = lsp(min | msp(max - min));
            value = this.combine(value, this.array[min - 1 + (offset >>> 1)]);
        }

        return value;
    }

    get size(): number {
        return (this.array.length + 1) >>> 1;
    }

    /**
     * Return an iterator through the tree's elements
     */
    *[Symbol.iterator](): Iterator<T> {
        for (let i = 0; i < this.array.length; i += 2) {
            yield this.array[i];
        }
    }

    update(min: number, max: number, operation: (element: T, index: number) => T): void {
        // Sanitize range
        if (min >= max) {
            return;
        }
        if (min < 0 || max > this.size) {
            throw new RangeError(`Range [${min}..${max}) not in [0..${this.size})`);
        }

        // Translate range to interior indices
        min *= 2;
        max *= 2;

        // Update the values
        let value: T;
        do {
            this.array[min] = operation(this.array[min], min >>> 1);
            value = this.aggregate(min);
            min += 2;
        } while (min < max);

        // Update remaining aggregation nodes
        let dc = 0;
        let dp = lsp(min);
        max = msb(min ^ (this.array.length + 1)) - lsb(min);
        for (--min; max > 0; --max) {
            value = this.combine(value, this.array[min + (dp >>> 1) - dc]);
            this.array[min] = value;
            dc = (min & (2 * dp)) >>> 0;
            min += dp - dc;
            dp *= 2;
        }
    }
    /**
     * A helper method to update complete aggregation nodes for an index.
     *
     * @params index - The index whose aggregation nodes will be updated.
     *
     * @returns - The top aggregation node's new value.
     */
    protected aggregate(index: number): T {
        let element = this.array[index++];
        for (let mask = 2; index & mask; mask *= 2) {
            element = this.combine(this.array[index - mask - (mask >>> 1)], element);
            this.array[index - mask] = element;
        }
        return element;
    }
}
