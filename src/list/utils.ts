/**
 * @ignore
 */
export function* batch<T>(size: number, elements: Iterable<T>): Generator<T[]> {
    let array: T[] = [];
    for (const element of elements) {
        if (array.push(element) >= size) {
            yield array;
            array = [];
        }
    }
    if (array.length > 0) {
        yield array;
    }
}
/**
 * @ignore
 */
export function clamp(num: number, min: number, max: number): number {
    return Math.min(max, Math.max(min, num));
}
/**
 * @ignore
 */
export function wrap(num: number, min: number, max: number): number {
    return clamp(num < 0 ? max + num : num, min, max);
}
