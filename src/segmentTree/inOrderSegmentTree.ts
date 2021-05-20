import { LinkedList } from '../list/linkedList';
import { lsb, lsp, msb, msp } from '../math/bits';
import { LazyOperation, Operation, SegmentTree } from './segmentTree';
import { CombineFn } from '.';

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
 */
export class InOrderSegmentTree<T> implements SegmentTree<T> {
    /**
     * The maximum amount of elements that can be added.
     *
     * According to [ECMA-262](https://tc39.es/ecma262/#array-index):
     *     0 <= array.length <= 2^32 - 1
     *
     * Because n elements require 2n memory:
     *     0 <= size <= 2^31 - 1
     */
    static readonly MAX_SIZE: number = 2147483647;

    /**
     * The set of elements and aggregation nodes for the tree
     */
    protected array: T[];

    /**
     * The function used to aggregate elements
     */
    protected combine: CombineFn<T>;

    /**
     * The set of pending operations to perform on element ranges
     */
    protected lazy: (LinkedList<LazyOperation<T>> | undefined)[];

    /**
     * Construct a new {@link InOrderSegmentTree}
     *
     * @param combine - The function used to aggregate segment information
     * @param elements - A set of elements to add into the initial tree
     */
    constructor(combine: CombineFn<T>, elements: Iterable<T> = []) {
        this.array = [];
        this.combine = combine;
        this.lazy = [];
        this.build(elements);
    }

    /**
     * A helper method used to build the tree
     *
     * @param elements The initial set of elements to add into the tree
     */
    protected build(elements: Iterable<T>) {
        for (const element of elements) {
            this.push(element);
        }
    }

    /**
     * Remove all elements
     */
    clear(): void {
        this.array.length = 0;
        this.lazy.length = 0;
    }

    protected lazyPropagate(min: number, max: number): void {
        // (a +1) & -(a + 1)
        const stack: number[] = [];

        // Get top complete aggregation nodes in the range
        // for (let i = msp(min); i < max; stack.push(i - 1)) {
        //     i += lsp(i | msp(this.array.length - i));
        // }

        // Get top complete aggregation nodes in the range in reverse

        // Iterate through the range, jumping across the largest possible subranges
        do {
            const offset = lsp(min | msp(max - min));
            const mid = min + (offset >>> 1) - 1;
            min += offset;

            // Apply updates down to the current subrange
            do {
                const par = stack.pop()!;
                if (this.lazy[par]) {
                }
            } while (true);

            // let value = operation(this.array[top], min >>> 1, (min + offset) >>> 1);
        } while (min < max);

        throw new Error('Figure out initial i');
        /*
        let i = msp(max);
        for (i = lsp(i | msp(this.array.length - i)); i > min; i -= i & -i) {
            stack.push(i - (lsp(i) >>> 1) - 1);
        }

        // Take the longest possible jumps from min to max
        while (min < max) {
            const offset = lsp(min | msp(max - min));
            min += offset;
            
            const i = min - 1 + (offset >>> 1);

            
        }
        */

        // Check each level

        /*
        // Get existing
        const q = [];
        for (let i = min; i < max; ) {
            const offset = lsp(min | msp(max - min));
            i += offset;
        }

        max = msb(min ^ this.array.length) - lsb(min);
        */
    }

    /**
     * Lazily updates elements in a given range
     *
     * @param min - The start of the range, inclusive
     * @param max - The end of the range, exclusive
     * @param operation - The operation to perform on the range
     */
    lazyUpdate(min: number, max: number, operation: LazyOperation<T>): void {
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

        // Apply pending updates on the range
        this.lazyPropagate(min, max);

        // Taking the longest possible jumps from min to max...
        let value: T;
        do {
            // Make the jump and update its lowest common ancestor
            const offset = lsp(min | msp(max - min));
            const top = min + (offset >>> 1) - 1;
            value = operation(this.array[top], min >>> 1, (min + offset) >>> 1);
            this.array[top] = value;
            min += offset - 1;

            // Mark children for lazy update
            if (top & 1) {
                (this.lazy[top] ?? new LinkedList()).push(operation);
            }

            // Update aggregation nodes
            for (let mask = 2 * lsp(top + 1); min & mask; mask *= 2) {
                value = this.combine(this.array[min - mask - (mask >>> 1)], value);
                this.array[min - mask] = value;
            }
        } while (++min < max);

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
     * Remove the last added element
     *
     * @returns The last added element or `undefined` if empty.
     */
    pop(): T | undefined {
        // Sanitize range
        if (this.size < 1) {
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
        this.lazy.length -= 2;
        return out;
    }

    /**
     * Insert the given element into the end of the tree
     *
     * @param element - The element to be inserted
     *
     */
    push(element: T): number {
        // Sanitize range
        if (this.size >= InOrderSegmentTree.MAX_SIZE) {
            throw new RangeError(`Invalid SegmentTree length`);
        }

        // Add the new element
        this.array.push(element);

        // Complete aggregation nodes
        const i = this.array.length;
        for (let mask = 2; i & mask; mask *= 2) {
            element = this.combine(this.array[i - mask], element);
            this.array[i - mask] = element;
        }

        // Push new aggregation node
        this.array.push(element);
        this.lazy.length += 2;
        return this.size;
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

        // Translate range to interior indices
        min *= 2;
        max *= 2;

        // Take the longest possible jump from min
        let offset = lsp(min | msp(max - min));
        let value = this.array[min - 1 + (offset >>> 1)];
        min += offset;

        // Continue jumping until max
        while (min < max) {
            offset = lsp(min | msp(max - min));
            value = this.combine(value, this.array[min - 1 + (offset >>> 1)]);
            min += offset;
        }

        return value;
    }

    /**
     * The number of elements in the tree:
     *     0 <= size <= {@link MAX_SIZE}
     */
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

    /**
     * Update elements in a given range
     *
     * @param min - The start of the range, inclusive
     * @param max - The end of the range, exclusive
     * @param operation - The operation to perform on the range
     */
    update(min: number, max: number, operation: Operation<T>): void {
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

        // For each new value in range
        let value: T;
        do {
            // Update the value
            value = operation(this.array[min], min >>> 1);
            this.array[min++] = value;

            // Update aggregation nodes
            for (let mask = 2; min & mask; mask *= 2) {
                value = this.combine(this.array[min - mask - (mask >>> 1)], value);
                this.array[min - mask] = value;
            }
        } while (++min < max);

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
}
