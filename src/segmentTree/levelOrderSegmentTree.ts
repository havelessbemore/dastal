/**
 *  Thanks to [Douglas Wilhelm Harder](https://ece.uwaterloo.ca/~dwharder/aads/Algorithms/Array_resizing/)
 *  for their analysis on array resizing
 */
import { isArray } from 'src/utils/arrayUtils';
import { isCollection } from 'src/collection';
import { Collection } from 'src/collection/collection';
import { CombineFn } from '..';
import { lsp, msp } from '../math/u32';
import { SegmentTree } from './segmentTree';
import { MAX_ARRAY_LENGTH } from 'src/env';

/**
 * A {@link SegmentTree} with entries stored in level-order traversal.
 *
 * Memory usage: n elements require n - 1 + 2**(⌊log<sub>2</sub>(n-1)⌋ + 1) space.
 *
 */
export class LevelOrderSegmentTree<T> implements SegmentTree<T> {
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
        if (this.size <= (this.level + 1) >>> 2) {
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
        if (n < 2) {
            this.level = 0;
            this.length = n;
            this.array.length = 0;
            this.array.push(...elements);
            return;
        }

        // Check if max capacity reached
        const level = 2 * msp(n - 1) - 1;
        if (level + n > MAX_ARRAY_LENGTH) {
            throw new RangeError('Invalid length');
        }

        // Allocate the array
        this.level = level;
        this.length = level;
        this.array.length = Math.min(2 * level + 1, MAX_ARRAY_LENGTH);

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
        // Check if max capacity reached
        const level = 2 * this.level + 1;
        if (level + this.size + 1 > MAX_ARRAY_LENGTH) {
            throw new RangeError('Invalid length');
        }

        // Check base case
        if (this.length < 1) {
            this.array.length = 1;
            return;
        }

        // Extend capacity
        this.array.length = Math.min(2 * level + 1, MAX_ARRAY_LENGTH);

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
     * Shift the tree to the highest non-full level
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

        // Check if shrinking is possible
        if (min < 2) {
            return;
        }

        // Update the tree
        this.level = 0;
        for (let max = min + 1; mask; min += min + 1) {
            this.level += this.level + 1;
            this.array.copyWithin(this.level, min, max);
            mask >>>= 1;
            max += max + 2 + +((length & mask) > 0);
        }

        // Update pointers
        this.length = this.level + length;
        this.array.length = 2 * this.level + 1;
    }
}
