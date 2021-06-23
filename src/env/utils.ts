import { clamp } from 'src/math/numberUtils';

/**
 * Find the intended value given a comparison function. If not found,
 * finds the closest intended value.
 *
 * @param min - The minimum value
 * @param max - The maximum value
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
 * Get the maximum number of arguments that
 * can be passed to a simple function.
 *
 * According to the [ECMA-262](https://tc39.es/ecma262/#sec-list-and-record-specification-type),
 * there is no maximum. In practice, different environments impose their own
 * limit. The limit closely depends on available stack memory.
 *
 * @param accuracy - A number from  0 - 1 to determine
 * if calculation prioritizes speed vs accuracy, with 1
 * being most accurate and 0 being speediest. Be default,
 * speed is preferred.
 *
 * **Note 1**: The output depends on the available
 * stack memory at the time this function is called.
 * For that reason, any output should be used as soon
 * as possible and in its original context.
 *
 * **Note 2**: When `accuracy = 1`, the output has
 * an error margin of +- 0.85% from the actual maximum.
 * When `accuracy = 0`, the output has an error margin of -25%.
 *
 * **Note 3**: Even with a simple function, it may
 * still cause a stack overflow if `accuracy` is high.
 * The margin of error should be taken into account
 * before usage, such as multiplying the output
 * by <= 1 - error_margin (for example: `0.99*output`).
 *
 * **Note 4**: The actual maximum depends on the
 * amount of stack memory to be used by the intended function.
 * For that reason, the actual maximum may be lower
 * than this function's output. The output should only be
 * used as an upper bound / starting point for
 * an actual maximum.
 *
 *    - The simplest way to do this
 * is to decrease the multiple mentioned in note 3 (such as
 * to 80%). This should work for most usage, as most functions
 * are relatively flat (little to no nested function calls)
 * and/or use a reasonable amount of variables.
 *
 *    - For more accuracy, the intended function can be
 * profiled to come up with a more exact estimate.
 */
export function getMaxArgumentsLength(accuracy = 0): number {
    /**
     * Let:
     * - T = total stack memory
     * - U = used stack memory
     * - F = size of a function call in the stack
     * - V = size of a variable in the stack
     *
     * Then:
     *    T ~= aF + bV + U
     *
     * If we set the number of variables `b`, we can find `a`
     * by calling the function recursively until the stack overflows:
     *    1: T ~= a_1F + b_1V + U
     *
     * If we change `b` to a different number:
     *    2: T ~= a_2F + b_2V + U
     *
     * Putting them together:
     *    a_1F + b_1V + U ~= a_2F + b_2V + U
     *    a_1F + b_1V ~= a_2F + b_2V
     *    (a_1 - a_2)F ~= (b_2 - b_1)V
     *    F ~= ((b_2 - b_1) / (a_1 - a_2))V
     *
     * Replacing F in #1, we can find the maximum number of variables
     * given the available stack memory:
     *    T ~= a_1F + b_1V + U
     *    T ~= a_1*((b_2 - b_1) / (a_1 - a_2))V + b_1V + U
     *    T - U ~= (a_1*((b_2 - b_1) / (a_1 - a_2)) + b_1)V
     *    (T - U) / V ~= (a_1*((b_2 - b_1) / (a_1 - a_2)) + b_1)
     *
     * Note: The stack will overflow on a whole number of functions. So
     * the larger `b` is, the smaller and less accurate 'a' is. So
     * the result is more accurate for lower number of variables.
     * But less variables take longer to overflow the stack.
     * The tradeoff between quick vs accuracy is thus decided
     * via an input parameter.
     */
    accuracy = 7 * (1 - clamp(accuracy, 0, 1));
    let a1 = 0,
        a2 = 0,
        b1 = 0,
        b2 = 0;
    function test(length: number): number {
        let i = 0;
        try {
            (function fn(...args: number[]) {
                ++i;
                fn(...args);
            })(...new Array(length).fill(0));
        } catch (err) {}
        return i;
    }
    do {
        b2 = 2 << accuracy;
        b1 = b2 - 1;
        a1 = test(b1);
        a2 = test(b2);
    } while (a1 === a2 && --accuracy >= 0);
    if (a1 === a2) {
        return 0;
    }
    return Math.floor(((a1 + 2) * (a2 * b2 - a1 * b1)) / (a1 - a2) + a1 * b1 + 10);
}
/**
 * Get the maximum length of an array.
 *
 * At the time of implementation, the [ECMA-262](https://tc39.es/ecma262/#array-index)
 * defines the maximum as: `0 <= array.length <= 2**32 - 1`
 *
 * That said, the actual maximum may change over time and/or unique environments.
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
