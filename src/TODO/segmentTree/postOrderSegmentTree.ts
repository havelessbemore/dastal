import { bitsSet } from '../../math/u32';
import { SegmentTree } from '../../segmentTree/segmentTree';
/*
export class PostOrderSegmentTree<T> implements SegmentTree<T> {
    protected array: T[];
    protected length: number;

    constructor() {
        this.array = [];
        this.length = 0;
    }

    clear(): void {
        this.array.length = 0;
        this.length = 0;
    }

    pop(): T | undefined {
        throw new Error('TODO');
    }

    push(element: T): number {
        throw new Error('TODO');
    }

    query(min: number, max: number): T {
        throw new Error('TODO');
    }

    get size(): number {
        throw new Error('TODO');
    }

    *[Symbol.iterator](): Iterator<T> {
        let i = 0;
        for (let j = 0; j < this.length; j = 2 * i - onBits(i)) {
            yield this.array[j];
            ++i;
        }
    }

    update(min: number, max: number, operation: Operation<T>): void {
        throw new Error('TODO');
    }
}
*/

/*
/**
     * A helper method to apply updates to a given range. This method
     * applies updates down only to the necessary aggregation nodes
     * for the range.
     *
     * @param min - The start index of the range, inclusive.
     * @param max - The end index of the range, exclusive.
     *
 protected propagate(min: number, max: number): void {
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
}
/**
 * A helper method to apply updates to a given range. This method
 * applies updates down to individual elements in the range.
 *
 * @param min - The start index of the range, inclusive.
 * @param max - The end index of the range, exclusive.
 *
protected flush(min: number, max: number): void {
    throw new Error('TODO');
}
*/

/*
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
        this.propagate(min, max);

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
    */

/*
    protected propagate(min: number, max: number): void {
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
    }
    */
