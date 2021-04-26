export function arrayFrom<T>(...iterables: Iterable<T>[]): Array<T> {
    const array = [];
    for (const iterable of iterables) {
        for (const element of iterable) {
            array.push(element);
        }
    }
    return array;
}
