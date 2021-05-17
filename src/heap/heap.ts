export interface Heap<T> extends Iterable<T>, Sorted<T> {
    clear(): void;
    comparator(): Comparator<T>;
    heapify(...iterables: Iterable<T>[]): Heap<T>;
    merge(heap: Heap<T>): Heap<T>;
    peek(): T | undefined;
    pop(): T | undefined; // Aka extract, delete
    push(element: T): number; // Aka insert, add
    pushPop(element: T): T;
    replace(element: T): T; // Aka popPush
    readonly size: number;
}

export interface Comparator<T> {
    compare: CompareFn<T>;
}

export interface CompareFn<T> {
    (a: T, b: T): number;
}

export interface Sortable<T> {
    sort: SortFn<T>;
}

export interface Sorted<T> {
    comparator(): Comparator<T>;
}

export interface SortFn<T> {
    (comparator: Comparator<T>): void;
}
