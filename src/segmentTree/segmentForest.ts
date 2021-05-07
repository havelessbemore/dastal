import { lsb, lsp, msb, msp } from 'src/math/bits';
import { CombineFn } from '..';
import { SegmentTree } from './segmentTree';

/**
 * A {@link SegmentTree} with entries stored in in-order traversal.
 * Allows for a memory efficient implementation; n elements require only 2n entries.
 *
 * Inspired by [Tristan Hume's IForestIndex](https://thume.ca/2021/03/14/iforests)([github](https://github.com/trishume/gigatrace))
 */
export class SegmentForest<T> implements SegmentTree<T> {
    /**
     * The maximum amount of values that can be added.
     *
     * According to [ECMA-262](https://tc39.es/ecma262/#array-index):
     *    0 <= array.length <= 2^32 - 2
     *
     * So since every push adds 2 elements to our internal array:
     *    0 <= size <= (2^32 - 2) / 2
     */
    static readonly MAX_SIZE = 2147483647;

    /**
     * The internal array used to store values and aggregation nodes
     */
    protected array: Array<T>;

    /**
     * The function used to aggregate values
     */
    protected combine: CombineFn<T>;

    /**
     * Construct a new {@link SegmentForest}
     *
     * @param combinFn - The function used to aggregate segment information
     * @param values - Initial values to {@link push} into the forest
     */
    constructor(combineFn: CombineFn<T>, values: Iterable<T> = []) {
        this.array = [];
        this.combine = combineFn;
        for (const value of values) {
            this.push(value);
        }
    }

    /**
     * Remove all values
     */
    clear(): void {
        this.array.length = 0;
    }

    /**
     * Remove the last added value
     *
     * @returns The last added value or `undefined` if empty.
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

        // Return value
        const out = this.array[i - 1];
        this.array.length -= 2;
        return out;
    }

    /**
     * Insert the given value into the end of the forest
     *
     * @param value - The value to be inserted
     *
     */
    push(value: T): void {
        // Sanitize range
        if (this.size >= SegmentForest.MAX_SIZE) {
            throw new RangeError(`Invalid array length`);
        }

        // Add the new value
        this.array.push(value);

        // Complete aggregation nodes
        const i = this.array.length;
        for (let mask = 2; i & mask; mask *= 2) {
            value = this.combine(this.array[i - mask], value);
            this.array[i - mask] = value;
        }

        // Push new aggregation node
        this.array.push(value);
    }

    /**
     * Get the aggregated information for values in a given range
     *
     * @param min - The start of the range, inclusive
     * @param max - The end of the range, exclusive
     *
     * @returns The aggregated information for values in range [min, max)
     */
    query(min: number, max: number): T {
        // Sanitize range
        if (min >= max || min < 0 || max > this.size) {
            throw new RangeError(`Range [${min}..${max}) is empty or not in [0..${this.size})`);
        }

        // Translate range to interior indices
        min *= 2;
        max *= 2;

        // Get first value
        let offset = lsp(min | msp(max - min));
        let value = this.array[min - 1 + (offset >>> 1)];
        min += offset;

        // Combine with longest reaching aggregation nodes
        while (min < max) {
            offset = lsp(min | msp(max - min));
            value = this.combine(value, this.array[min - 1 + (offset >>> 1)]);
            min += offset;
        }

        return value;
    }

    /**
     * The number of values in the forest
     *    0 <= size <= {@link SegmentForest.MAX_SIZE}
     */
    get size(): number {
        return this.array.length >>> 1;
    }

    /**
     * Update values in a given range
     *
     * @param min - The start of the range, inclusive
     * @param max - The end of the range, exclusive
     * @param transform - The callback function doing the updating
     */
    update(min: number, max: number, transform: (value: T, index: number) => T): void {
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

        // For each new value...
        let value: T;
        do {
            // Update the index
            value = transform(this.array[min], min >>> 1);
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

/*
function left(index: number): number {
    return index - (lsp(index + 1) >>> 1);
}

function parent(index: number): number {
    const offset = lsp(index + 1);
    return index + offset - ((index & 2*offset) >>> 0) ;
}

function right(index: number): number {
    return index + (lsp(index + 1) >>> 1);
}
*/
