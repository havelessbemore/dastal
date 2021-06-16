/**
 * Limits a number to be within a given range.
 *
 * f(x, min, max) = y, where min <= y <= max
 *
 * @param num - The number to clamp
 * @param min - The minimum result value, inclusive
 * @param max - The maximum result value, inclusive
 *
 * @returns The clamped number
 */
export function clamp(num: number, min: number, max: number): number {
    return Math.min(max, Math.max(min, num));
}
/**
 * Wraps a number if below a given range
 *
 * f(x, min, max) = {
 *    x, where x >= min
 *    max - (min - x), where x < min
 * }
 *
 * @param num - The number to wrap
 * @param min - The minimum result value, inclusive
 * @param max - The maximum result value, inclusive
 *
 * @returns - The wrapped number
 */
export function wrapLeft(num: number, min: number, max: number): number {
    return num < min ? max - min + num : num;
}
/**
 * Wraps a number if above a given range
 *
 * f(x, min, max) = {
 *    x, where x <= max
 *    min + (x - max), where x > max
 * }
 *
 * @param num - The number to wrap
 * @param min - The minimum result value, inclusive
 * @param max - The maximum result value, inclusive
 *
 * @returns - The wrapped number
 */
export function wrapRight(num: number, min: number, max: number): number {
    return num > max ? min + (num - max) : num;
}
/**
 * Wraps a number if outside a given range
 *
 * @param num - The number to wrap
 * @param min - The minimum result value, inclusive
 * @param max - The maximum result value, inclusive
 *
 * @returns - The wrapped number
 */
export function wrap(num: number, min: number, max: number): number {
    return num < min ? max - min + num : wrapRight(num, min, max);
}
