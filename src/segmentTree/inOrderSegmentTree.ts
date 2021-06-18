import { lsb, lsp, msb, msp } from '../math/u32';
import { CombineFn } from '..';
import { MAX_ARRAY_LENGTH } from 'src/collection/arrayUtils';
import { SegmentTree } from './segmentTree';

/*
    mca(a, b) = lsp(a | msp(b - a)) ; // where a <= b
    left(i) = i - (lsp(i + 1) >>> 1)
    right(i) = i + (lsp(i + 1) >>> 1)
    parent(i) =
        offset = lsp(i + 1)
        i + offset - ((i & 2*offset) >>> 0)
*/

/**
 * A {@link SegmentTree} with entries stored in in-order traversal.
 * Inspired by [Tristan Hume's IForestIndex](https://thume.ca/2021/03/14/iforests) ([github](https://github.com/trishume/gigatrace))
 *
 * Memory usage: n elements require 2n space.
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
        if (this.array.length < 1) {
            return undefined;
        }

        // Un-complete aggregation nodes
        const i = this.array.length - 1;
        for (let mask = 2; i & mask; mask *= 2) {
            this.array[i - mask] = this.array[i - mask - (mask >>> 1)];
        }

        // Return element
        const out = this.array[i - 1];
        this.array.length -= 2;
        return out;
    }

    push(element: T): number {
        if (this.array.length + 2 > MAX_ARRAY_LENGTH) {
            throw new RangeError(`Invalid length`);
        }

        // Add element
        const i = this.array.length;
        this.array[i + 1] = this.set(i, element);

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

        // Continue jumping aggregation nodes until max is reached
        for (min += offset; min < max; min += offset) {
            offset = lsp(min | msp(max - min));
            value = this.combine(value, this.array[min - 1 + (offset >>> 1)]);
        }

        return value;
    }

    get size(): number {
        return this.array.length >>> 1;
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
            value = this.set(min, operation(this.array[min], min >>> 1));
            min += 2;
        } while (min < max);

        // Update remaining aggregation nodes
        let dc = 0;
        let dp = lsp(min);
        max = msb(min ^ this.array.length) - lsb(min);
        for (--min; max > 0; --max) {
            value = this.combine(value, this.array[min + (dp >>> 1) - dc]);
            this.array[min] = value;
            dc = (min & (2 * dp)) >>> 0;
            min += dp - dc;
            dp *= 2;
        }

        // Update the incomplete aggregation node
        this.array[min] = value;
    }
    /**
     * A helper method to update complete aggregation nodes for an index.
     */
    protected set(index: number, element: T): T {
        // Set the index
        this.array[index++] = element;

        // Update complete aggregation nodes, from lowest to highest
        for (let mask = 2; index & mask; mask *= 2) {
            element = this.combine(this.array[index - mask - (mask >>> 1)], element);
            this.array[index - mask] = element;
        }

        return element;
    }
}
