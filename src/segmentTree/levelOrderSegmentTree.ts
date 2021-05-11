import { CombineFn } from '..';
import { lsp, msb, msp } from '../math/bits';
import { SegmentTree } from './segmentTree';

/**
 * A {@link SegmentTree} with entries stored in level-order traversal.
 * Memory usage: n elements require between 2n-1 to 4(n-1)-1 entries
 */
export class LevelOrderSegmentTree<T> implements SegmentTree<T> {
    /**
     * The maximum number of elements that can be added.
     *
     * According to [ECMA-262](https://tc39.es/ecma262/#array-index):
     *     0 <= array.length <= 2^32 - 1
     *
     * So since n elements require 2^⌊log2(2n)⌋ - 1 memory:
     *     0 <= size <= 2^31
     */
    static readonly MAX_SIZE: number = 2147483648;

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

    /**
     * A helper method used to build the tree
     *
     * @param elements The initial set of elements to add into the tree
     */
    protected build(elements: Iterable<T>): void {
        let key = '';

        // Check if the iterable's size can be known.
        // For example: array.length or map.size
        if ('length' in elements && typeof elements['length'] !== 'number') {
            key = 'length';
        } else if ('size' in elements && typeof elements['size'] !== 'number') {
            key = 'size';
        }

        // Iterate normally if size is not given
        if (key.length < 1) {
            for (const element of elements) {
                this.push(element);
            }
            return;
        }

        // Get the iterable's size
        const n = (elements as any)[key];

        // Check for base case
        if (n < 1) {
            this.array.length = 0;
            this.length = 0;
            this.level = 0;
            return;
        }

        // Check if max capacity reached
        if (n >= LevelOrderSegmentTree.MAX_SIZE) {
            throw new RangeError(`Invalid SegmentTree length`);
        }

        // Allocate the array
        this.level = 2 * msp(n - 1) - 1;
        this.length = this.level + n;
        this.array.length = 2 * this.level + 1;

        // Build the tree
        const it = elements[Symbol.iterator]();
        this.update(0, n, (_) => it.next().value);
    }

    /**
     * Shift the tree down a level
     */
    protected grow(): void {
        // Check if max capacity reached
        if (this.size >= LevelOrderSegmentTree.MAX_SIZE) {
            throw new RangeError(`Invalid SegmentTree length`);
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
     * Shift the tree up a level
     */
    protected shrink(): void {
        // Get the tree's Lowest Common Ancestor (root)
        let min = this.level + 1;
        let max = msb(min ^ this.length) + 1;
        min >>>= max;

        // Shift the tree up a level
        ++this.level;
        if (min > 0) {
            for (max = min + 1; min <= this.level; max *= 2) {
                this.array.copyWithin((min >>> 1) - 1, min - 1, max - 1);
                min *= 2;
            }
        }

        // Update pointers and capacity
        this.level -= (this.level >>> 1) + 1;
        this.length -= (this.length + 1) >>> 1;
        this.array.length = this.length - this.level + this.length;
    }

    /**
     * Remove all elements
     */
    clear(): void {
        this.length = 0;
        this.level = 0;
        this.array.length = 0;
    }

    /**
     * Remove the last added element
     *
     * @returns The last added element or `undefined` if empty.
     */
    pop(): T | undefined {
        // Sanitize range
        if (this.length <= this.level) {
            return undefined;
        }

        // Remove element
        const out = this.array[--this.length];

        // If level is <= 1/4 full
        if (this.length < 0.625 * (this.array.length + 1)) {
            this.shrink();
        }

        return out;
    }

    /**
     * Insert the given element into the end of the tree
     *
     * @param element - The element to be inserted
     */
    push(element: T): void {
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
    }

    /**
     * Get the aggregated information for elements in a given range
     *
     * @param min - The start of the range, inclusive
     * @param max - The end of the range, exclusive
     *
     * @returns The aggregated information for elements in range [min, max)
     */
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

    /**
     * The number of elements in the tree:
     *     0 <= size <= {@link MAX_SIZE}
     */
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

    /**
     * Update elements in a given range
     *
     * @param min - The start of the range, inclusive
     * @param max - The end of the range, exclusive
     * @param transform - The callback function doing the updating
     */
    update(min: number, max: number, transform: (element: T, index: number) => T): void {
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
            this.array[i] = transform(this.array[i], i - this.level);
        }

        // Update the range's aggregation nodes
        ++min;
        ++max;
        for (let cap = this.length + 1; min < max; cap >>>= 1) {
            max += max & ((max - cap) >>> 31);
            for (let i = (min | 1) >>> 0; i < max; i += 2) {
                this.array[(i >>> 1) - 1] = this.combine(this.array[i - 2], this.array[i - 1]);
            }
            min >>>= 1;
            max >>>= 1;
        }
    }
}
