/**
 * @ignore
 */
export function wrap(index: number, min: number, max: number): number {
    return Math.min(max, Math.max(min, index < 0 ? max + index : index));
}
