import { first } from 'src/collection/iteratorUtils';
import { clamp, wrapLeft } from 'src/math/numberUtils';

/**
 * The maximum length of an array.
 *
 * According to the [ECMA-262](https://tc39.es/ecma262/#array-index):
 *     0 <= array.length <= 2^32 - 1
 *
 * If this value should be updated, please
 * submit a pull request with details supporting a new max length.
 */
export const MAX_ARRAY_LENGTH = 4294967295;
/**
 * The maximum number of arguments that can be safely accepted by a function.
 *
 * According to the [ECMA-262](https://tc39.es/ecma262/#sec-list-and-record-specification-type), there is no maximum. In practice, different
 * environments impose their own limit ([source](https://stackoverflow.com/questions/22747068/is-there-a-max-number-of-arguments-javascript-functions-can-accept)).
 *
 * This value was chosen through research, local testing and iteration. The actual number of arguments
 * accepted in an environment may be larger but hopefully not smaller. If errors are raised,
 * please submit a bug with your environment details and a new max length.
 */
export const MAX_SAFE_ARGUMENT_LENGTH = 32767;
/**
 * Check if a value is an Array or TypedArray.
 *
 * @param obj - The value to check.
 *
 * @returns `true` if an Array or TypedArray, otherwise `false`.
 */
export function isArray<T = any>(obj: unknown): obj is T[] {
    return obj instanceof Array || isTypedArray(obj);
}
/**
 * Check if a value is a TypedArray.
 *
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)
 * for more details.
 *
 * @param obj - The value to check.
 *
 * @returns `true` if a TypedArray, otherwise `false`.
 */
export const isTypedArray = (() => {
    const TypedArray = Object.getPrototypeOf(Uint8Array);
    return function isTypedArray<T = any>(obj: unknown): obj is T[] {
        return obj instanceof TypedArray;
    };
})();
/**
 * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
 *
 * Contrary to Array.splice, this will not throw an error if too many new elements are given as arguments.
 *
 * @param array - The array to splice.
 * @param start - The zero-based location in the array from which to start removing elements.
 * @param count - The number of elements to remove.
 * @param elements - The new elements to splice in.
 *
 * @returns - An array containing the elements that were deleted.
 */
export function splice<T>(array: T[], start?: number, count?: number, elements?: Iterable<T>): T[] {
    start = clamp(wrapLeft(start ?? 0, 0, array.length), 0, array.length);
    count = clamp(count ?? array.length, 0, array.length - start);

    // Base case
    if (elements == null) {
        return array.splice(start, count);
    }

    const maxStepSize = MAX_SAFE_ARGUMENT_LENGTH - 2;
    const iterator = elements[Symbol.iterator]();

    // Perform the initial splice
    let stepSize = array.length - count;
    const maxElems = MAX_ARRAY_LENGTH - stepSize;
    let n = Math.min(maxStepSize, maxElems);
    const out = array.splice(start, count, ...{ [Symbol.iterator]: () => first(n, iterator) });
    stepSize = array.length - stepSize;
    start += stepSize;

    // Splice in new elements as long as there is space in the array
    for (n = maxElems - stepSize; n >= maxStepSize && stepSize >= maxStepSize; n -= stepSize) {
        stepSize = array.length;
        array.splice(start, 0, ...{ [Symbol.iterator]: () => first(maxStepSize, iterator) });
        stepSize = array.length - stepSize;
        start += stepSize;
    }
    if (n > 0 && stepSize >= maxStepSize) {
        array.splice(start, 0, ...{ [Symbol.iterator]: () => first(n, iterator) });
    }

    // If maximum array capacity reached
    if (iterator.next().done != true) {
        throw new RangeError('Invalid array length');
    }

    return out;
}
