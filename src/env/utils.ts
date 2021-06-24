import { MAX_ARRAY_LENGTH } from './index';

/**
 * Find the intended index given a comparison function.
 * If not found, returns the closest index.
 *
 * @param min - The minimum index
 * @param max - The maximum index
 * @param compareFn - The comparison function
 */
export function search(min: number, max: number, compareFn: (index: number) => number): number {
    while (min < max) {
        const mid = min + Math.ceil((max - min) / 2);
        const cmp = compareFn(mid);
        if (cmp < 0) {
            max = mid - 1;
        } else if (cmp > 0) {
            min = mid;
        } else {
            return mid;
        }
    }
    return min;
}
/**
 * Get the maximum number of arguments allowed for a function.
 *
 * @param guess - A starting point for finding the output. Useful
 * for providing the previous maximum or best guess as the starting point.
 */
export function getMaxArgumentsLength(guess = 262144): number {
    const fn = (...args: number[]) => 1;
    const test = (length: number) => {
        try {
            return fn.apply(fn, new Array(length));
        } catch (e) {
            return -1;
        }
    };
    let min = 0;
    guess = Math.max(1, Math.floor(guess));
    for (let offset = 1; test(guess) > 0; offset <<= 1) {
        min = guess;
        guess += offset;
    }
    return search(min, guess - 1, test);
}
/**
 * Get the maximum length of an array.
 */
export function getMaxArrayLength(): number {
    return search(0, Number.MAX_SAFE_INTEGER, (i) => {
        try {
            new Array(i);
            return 1;
        } catch (e) {
            return -1;
        }
    });
}
