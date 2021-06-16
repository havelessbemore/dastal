/**
 *  Thanks to [Douglas Wilhelm Harder](https://ece.uwaterloo.ca/~dwharder/aads/Algorithms/Array_resizing/)
 *  for their analysis on array resizing
 */
import { isArray, MAX_ARRAY_LENGTH } from 'src/collection/arrayUtils';
import { isCollection } from 'src/collection';
import { Collection } from 'src/collection/collection';
import { CombineFn } from '..';
import { isPow2, lsp, msp } from '../math/u32';
import { SegmentTree } from './segmentTree';

/**
 * A {@link SegmentTree} with entries stored in level-order traversal.
 * Memory usage: n elements require between 2n-1 to 4(n-1)-1 entries
 *
 */
export class LevelOrderSegmentTree<T> implements SegmentTree<T> {
    /**
     * The maximum number of elements that can be added.
     *
     * n elements require 2^⌈log2(2n)⌉ - 1 memory:
     */
    static readonly MAX_SIZE: number = (MAX_ARRAY_LENGTH + 1) / 2;
    /**
     * The internal array used to store elements and aggregation nodes
     */
    protected array: Array<T>;
    /**
     * The function used to aggregate elements
     */
    protected combine: CombineFn<T>;
    /**
     * The used length (size) of our internal array
     */
    protected length: number;
    /**
     * The start index for the lowest level
     */
    protected level: number;
    /**
     * Construct a new {@link SegmentTree}
     *
     * @param combinFn - The function used to aggregate elements
     * @param elements - Initial elements to build into the tree
     */
    constructor(combine: CombineFn<T>, elements: Iterable<T> = []) {
        this.array = [];
        this.combine = combine;
        this.length = 0;
        this.level = 0;
        this.build(elements);
    }

    clear(): void {
        this.length = 0;
        this.level = 0;
        this.array.length = 0;
    }

    pop(): T | undefined {
        // Sanitize range
        if (this.length <= this.level) {
            return undefined;
        }

        // Remove element
        const out = this.array[--this.length];

        // If level is <= 1/4 full
        if (this.length <= (this.array.length + 1) >>> 2) {
            this.shrink();
        }

        return out;
    }

    push(element: T): number {
        // If array is full
        if (this.length >= this.array.length) {
            this.grow();
        }

        // Add the new element
        this.array[this.length++] = element;

        // Update aggregation nodes
        for (let i = this.length; i & 1; this.array[i - 1] = element) {
            element = this.combine(this.array[i - 2], element);
            i >>>= 1;
        }

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

        // Translate range to interior indices and align with powers of 2
        min += this.level + 1;
        max += this.level + 1;

        // Take the longest possible jump from min
        let offset = lsp(min | msp(max - min));
        let value: T = this.array[min / offset - 1];
        min += offset;

        // Continue jumping until max
        while (min < max) {
            offset = lsp(min | msp(max - min));
            value = this.combine(value, this.array[min / offset - 1]);
            min += offset;
        }

        return value;
    }

    get size(): number {
        return this.length - this.level;
    }

    /**
     * Return an iterator through the elements
     */
    *[Symbol.iterator](): Iterator<T> {
        for (let i = 0; i < this.size; ++i) {
            yield this.array[this.level + i];
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
        min += this.level;
        max += this.level;

        // Update the range
        for (let i = min; i < max; ++i) {
            this.array[i] = operation(this.array[i], i - this.level);
        }

        // Update the range's aggregation nodes
        this.aggregate(min, max);
    }
    /**
     * A helper method to aggregate a range of elements
     */
    protected aggregate(min: number, max: number): void {
        // Align indices with powers of 2
        ++min;
        ++max;

        // Aggregate elements
        for (let cap = this.length + 1; min < max; cap >>>= 1) {
            max += max & ((max - cap) >>> 31);
            for (let i = (min | 1) >>> 0; i < max; i += 2) {
                this.array[(i >>> 1) - 1] = this.combine(this.array[i - 2], this.array[i - 1]);
            }
            min >>>= 1;
            max >>>= 1;
        }
    }
    /**
     * A helper method used to build the tree
     *
     * @param elements The initial set of elements to add into the tree
     */
    protected build(elements: Collection<T> | Iterable<T>): void {
        let key: string | undefined = undefined;

        // Check if the iterable's size can be known.
        if (isArray(elements)) {
            key = 'length';
        } else if (isCollection(elements)) {
            key = 'size';
        } else {
            for (const element of elements) {
                this.push(element);
            }
            return;
        }

        // Get the iterable's size
        const n: number = (elements as any)[key];

        // Check for base case
        if (n < 1) {
            this.array.length = 0;
            this.length = 0;
            this.level = 0;
            return;
        }

        // Check if max capacity reached
        if (n >= LevelOrderSegmentTree.MAX_SIZE) {
            throw new RangeError('Invalid length');
        }

        // Allocate the array
        this.level = 2 * msp(n - 1) - 1;
        this.length = this.level;
        this.array.length = 2 * this.level + 1;

        // Add the elements
        for (const element of elements) {
            this.array[this.length++] = element;
        }

        // Update aggregation nodes
        this.aggregate(this.level, this.length);
    }
    /**
     * Shift the tree down a level
     */
    protected grow(): void {
        // Check base case
        if (this.size < 1) {
            this.array.length = 1;
            return;
        }

        // Check if max capacity reached
        if (this.size >= LevelOrderSegmentTree.MAX_SIZE) {
            throw new RangeError('Invalid length');
        }

        // Extend capacity
        this.array.length += this.array.length + 1;

        // Shift the tree down a level
        let min = this.level + 1;
        for (let max = this.length + 1; min < max; max >>>= 1) {
            this.array.copyWithin(2 * min - 1, min - 1, max - 1);
            min >>>= 1;
        }

        // Update pointers
        this.length += this.level + 1;
        this.level += this.level + 1;
    }
    /**
     * Shrink the tree to the smallest size
     */
    protected shrink(): void {
        const length = this.length - this.level;

        // Check base case
        if (length < 2) {
            this.array.copyWithin(0, this.level, this.length);
            this.level = 0;
            this.length = length;
            this.array.length = length;
            return;
        }

        // Get the highest node
        let min = this.level + 1;
        let mask = msp(length);
        min = min / lsp(min | mask) - 1;

        // Update the tree
        this.level = +!isPow2(length);
        for (let max = min + 1; mask; this.level += this.level + 1) {
            this.array.copyWithin(this.level, min, max);
            mask >>>= 1;
            min += min + 1;
            max += max + 2 + +((length & mask) > 0);
        }

        // Update pointers
        this.length = this.level + length;
        this.array.length = 2 * this.level + 1;
    }
}
