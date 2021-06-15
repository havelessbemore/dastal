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
