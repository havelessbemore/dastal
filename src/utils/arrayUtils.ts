import { maxArgumentsLength } from 'src/env';
import { clamp, wrapLeft } from 'src/math/numberUtils';

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
 * @returns - An array containing the deleted elements.
 */
export function splice<T>(array: T[], start?: number, count?: number, elements?: T[]): T[] {
    start = clamp(wrapLeft(start ?? 0, 0, array.length), 0, array.length);
    count = clamp(count ?? array.length, 0, array.length - start);

    // Base case.
    if (elements == null) {
        return array.splice(start, count);
    }

    // Perform the initial splice.
    const numArgs = Math.floor(0.625 * maxArgumentsLength() - 2);

    let args = elements.slice(0, numArgs);
    const out = array.splice.bind(array, start, count).apply(array, args);

    // Splice in new elements as long as there is space in the array
    const n = elements.length;
    for (let i = args.length; i < n; i += args.length) {
        args = elements.splice(i, numArgs);
        array.splice.bind(array, start + i, 0).apply(array, args);
    }

    // Return deleted elements.
    return out;
}
