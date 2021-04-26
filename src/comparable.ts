/**
 * @ignore
 */
export interface Comparator<T> {
    compare: ComparatorFn<T>;
}

/**
 * @ignore
 */
export interface ComparatorFn<T> {
    (a: T, b: T): number;
}

/**
 * @ignore
 */
export interface Sorted<T> {
    comparator(): Comparator<T>;
}
