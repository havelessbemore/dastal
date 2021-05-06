import { lsp, msp } from 'src/algorithms/bits';
import { SegmentTree } from './segmentTree';

/**
 * Inspired by: https://thume.ca/2021/03/14/iforests
 */
export class SegmentForest<T> implements SegmentTree<T> {
    protected array: Array<T>;

    constructor(
        protected clone: (a: T) => T,
        protected combine: (a: T, b: T) => T,
        values: Iterable<T> = [],
    ) {
        this.array = [];
        for (const value of values) {
            this.push(value);
        }
    }

    pop(): T | undefined {
        // Sanitize range
        if (this.size < 1) {
            return undefined;
        }

        // Un-complete aggregation nodes
        const i = this.array.length - 1;
        for (let mask = 2; i & mask; mask *= 2) {
            this.array[i - mask] = this.clone(this.array[i - mask - (mask >>> 1)]);
        }

        // Return value
        const out = this.array[i - 1];
        this.array.length -= 2;
        return out;
    }

    push(value: T): void {
        // Sanitize range
        if (this.array.length > 0xfffffffd) {
            // 2^32 - 3
            // No space for 2 more entries
            // 0 <= array.length < (2^32 - 1)
            // See: https://tc39.es/ecma262/#array-index
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
        this.array.push(this.clone(value));
    }

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

    get size(): number {
        return this.array.length >>> 1;
    }

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

        // For each updating value...
        for (let i = min++; i < max; i += 2) {
            // Update the value
            let value = transform(this.array[i], i >>> 1);
            this.array[i] = value;

            // Update aggregation nodes
            let ancestor = ++i;
            for (let mask = 2; i & mask; mask *= 2) {
                ancestor = i - mask;
                value = this.combine(this.array[ancestor - (mask >>> 1)], value);
                this.array[ancestor] = value;
            }

            // Skip completed aggregation nodes
            min = ancestor <= min ? i : min;
        }

        // Update remaining complete aggregation nodes
        let offset = lsp(min + 1) >>> 1;
        max = msp(this.size) - 1;
        while (min < max) {
            this.array[min] = this.combine(this.array[min - offset], this.array[min + offset]);
            offset *= 2;
            min += offset - ((min & (2 * offset)) >>> 0);
        }

        // Update the incomplete aggregation node
        this.array[min] = this.clone(this.array[min - offset]);
    }
}

/*
function left(index: number): number {
    return index - (lsp(index + 1) >>> 1);
}

function parent(index: number): number {
    const offset = lsp(index + 1);
    return index - ((index & 2*offset) >>> 0) + offset;
}

function right(index: number): number {
    return index + (lsp(index + 1) >>> 1);
}
*/
