/**
 * Bit hacks for 32-bit unsigned numbers.
 */

/**
 * Invert the bits of a 32-bit unsigned number.
 *
 * Example: 11 (1011) -> 4 (0100)
 *
 * @param a The number to invert
 *
 * @returns The inverted number
 */
export function invert(a: number): number {
    const b = msp(a);
    return (a ^ (b | (b - 1))) >>> 0;
}
/**
 * Get the Least Significant Bit of a 32-bit unsigned number
 *
 * @param a
 *
 * @returns The lowest bit set
 */
export function lsb(a: number): number {
    let b = -1;
    for (a = lsp(a); a !== 0; a >>>= 1) {
        ++b;
    }
    return b;
}
/**
 * Get the Least Significant Power of a 32-bit unsigned number
 *
 * @param a
 *
 * @returns 2**lsb(a)
 */
export function lsp(a: number): number {
    return (a & -a) >>> 0;
}
/**
 * Get the number of bits set (on) of a 32-bit unsigned number
 *
 * @param a
 */
export function onBits(a: number): number {
    let b = 0;
    while (a) {
        ++b;
        a &= a - 1;
    }
    return b;
}
/**
 * Get the Most Significant Bit of a 32-bit unsigned number
 *
 * @param a
 *
 * @returns ⌊log2(a)⌋ : the highest bit set
 */
export function msb(a: number): number {
    let b = -1;
    while (a !== 0) {
        ++b;
        a >>>= 1;
    }
    return b;
}
/**
 * Get the Most Significant Power of a 32-bit unsigned number
 *
 * @param a
 *
 * @returns 2**msb(a)
 */
export function msp(a: number): number {
    let b = a & -a;
    while (a != b) {
        a ^= b;
        b = a & -a;
    }
    return b >>> 0;
}
/**
 * Get the Most Significant Powers of a 32-bit unsigned number;
 * a set of 1s followed by a set of 0s
 *
 * Example: 50 (110010) -> 48 (110000)
 *
 * @param a
 */
export function msps(a: number): number {
    let b = a & -a;
    while (a & (a + b)) {
        a ^= b;
        b = a & -a;
    }
    return a >>> 0;
}
