import { Comparator } from './comparable';

/**
 *
 */
export interface Sortable<T> {
    sort: SortableFn<T>;
}

/**
 *
 */
export interface SortableFn<T> {
    (comparator: Comparator<T>): void;
}

/**
 *
 */
export interface Sorted<T> {
    comparator(): Comparator<T>;
}
