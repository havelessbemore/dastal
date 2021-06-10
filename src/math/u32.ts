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
    return u32(a ^ (b | (b - 1)));
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
    return u32(a & -a);
}
/**
 * Get the Least Significant Power Set of a 32-bit unsigned number.
 *
 * Example: 54 (110110) -> 4 (000110)
 *
 * @param a
 */
export function lsps(a: number): number {
    return u32(a & (lsp(a + lsp(a)) - 1));
}
/**
 * Get the Most Least Significant Power of a 32-bit unsigned number.
 *
 * Example: 54 (110110) -> 4 (000100)
 *
 * 111111
 * 000000
 * 000000
 *
 * 000010
 * 111000
 * 001000
 * 000100
 *
 * @param a
 */
export function mlsp(a: number): number {
    return lsp(a + lsp(a)) >>> 1 || u32(0x80000000 & a);
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
    return u32(b);
}
/**
 * Get the Most Significant Power Set of a 32-bit unsigned number.
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
    return u32(a);
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
 * Reverse a 32-bit unsigned number.
 *
 * Example: 50 (110010) -> 19 (010011)
 *
 * @param a
 */
export function reverse(a: number): number {
    a = ((a & 0xaaaaaaaa) >>> 1) | ((a & 0x55555555) << 1);
    a = ((a & 0xcccccccc) >>> 2) | ((a & 0x33333333) << 2);
    a = ((a & 0xf0f0f0f0) >>> 4) | ((a & 0x0f0f0f0f) << 4);
    a = ((a & 0xff00ff00) >>> 8) | ((a & 0x00ff00ff) << 8);
    return u32((a >>> 16) | (a << 16));
}
/**
 * Turn a number into an unsigned 32-bit number
 *
 * @param a
 */
export function u32(a: number): number {
    return a >>> 0;
}
