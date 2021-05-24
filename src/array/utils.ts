/**
 * The maximum length of an array.
 *
 * According to [ECMA-262](https://tc39.es/ecma262/#array-index):
 *     0 <= array.length <= 2^32 - 1
 */
export const MAX_ARRAY_LENGTH = 4294967295;
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
