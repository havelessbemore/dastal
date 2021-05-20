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
} /*
export function* first<T>(num: number, iterator: Iterator<T>): Generator<T> {
    while (num-- > 0) {
        const res = iterator.next();
        if (res.done) {
            break;
        }
        yield res.value;
    }
}
*/ /*
export function* iterate<T>(iterator: Iterator<T>): Generator<T> {
    let res = iterator.next();
    while (!res.done) {
        yield res.value;
        res = iterator.next();
    }
}
*/
/**
 * @ignore
 */
/**
 * @ignore
 */
/**
 * @ignore
 */ export function wrap(num: number, min: number, max: number): number {
    return clamp(num < 0 ? max + num : num, min, max);
}
