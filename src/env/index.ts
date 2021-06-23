import { getMaxArrayLength } from './utils';

export { getMaxArgumentsLength } from './utils';
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
