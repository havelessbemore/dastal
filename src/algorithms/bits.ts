/**
 * Get the Least Significant Bit of a number
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
 * Get the Least Significant Power of a number
 *
 * @param a
 *
 * @returns 2**lsb(a)
 */
export function lsp(a: number): number {
    return (a & -a) >>> 0;
}

/**
 * Get the Most Significant Bit of a number
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
 * Get the Most Significant Power of a number
 *
 * @param a
 *
 * @returns 2**msb(a)
 */
export function msp(a: number): number {
    for (let b = a & -a; a !== b; b = a & -a) {
        a ^= b;
    }
    return a >>> 0;
}
