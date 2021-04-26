/**
 *
 */
export interface Comparator<T> {
    compare: ComparatorFn<T>;
}

/**
 *
 */
export interface ComparatorFn<T> {
    (a: T, b: T): number;
}
