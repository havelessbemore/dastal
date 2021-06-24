import { getMaxArgumentsLength, getMaxArrayLength } from './utils';
/**
 * The memoized maximum arguments length. While it can be dynamic,
 * it is A) static in some environments, and B) does not generally
 * fluctuate by a large amount. For this reason, the previous
 * maximum is stored here and used as the starting point for finding
 * the current maximum.
 */
let MAX_ARGUMENTS_LENGTH = 1 << 18;
/**
 * Get the maximum number of arguments allowed for a function.
 *
 * According to the [ECMA-262](https://tc39.es/ecma262/#sec-list-and-record-specification-type),
 * there is no maximum. In practice, different environments impose their own
 * limit. Some limits (like in Google Chrome v91.0.4472.114) are dynamic and
 * depend on available stack memory (among other factors). Other limits (like in Firefox v89.0.1
 * and Safari v14.1.1) appear to be static (500,000 and 65,536, respectively).
 *
 * In environments where the maximum is dynamic:
 *
 * - The output should be used as soon as possible and in its original context.
 * It should not be stored for future use. If context changes, such as stack usage,
 * the output should be recalculated.
 *
 * - Using the output directly as the number of arguments to a function
 * may still throw an error. A [factor of safety](https://en.wikipedia.org/wiki/Factor_of_safety)
 * should be used to adjust the output, such as multiplying it by a margin of safety.
 * For example: `0.625*output`.
 */
export const maxArgumentsLength = () =>
    (MAX_ARGUMENTS_LENGTH = getMaxArgumentsLength(MAX_ARGUMENTS_LENGTH));
/**
 * The maximum length of an array.
 *
 * At the time of implementation, the [ECMA-262](https://tc39.es/ecma262/#array-index)
 * defines the maximum as: `0 <= array.length <= 2**32 - 1`
 *
 * The actual maximum may change over time and/or unique environments.
 * For that reason, the value is calculated on first import.
 */
export const MAX_ARRAY_LENGTH: number = getMaxArrayLength();
