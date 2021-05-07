import { Comparator, Sorted } from 'src';

export interface Heap<T> extends Sorted<T> {
    clear(): void;
    comparator(): Comparator<T>;
    heapify(...iterables: Iterable<T>[]): Heap<T>;
    merge(heap: Heap<T>): Heap<T>;
    peek(): T | undefined;
    pop(): T | undefined; // Aka extract, delete
    push(element: T): void; // Aka insert, add
    pushPop(element: T): T;
    replace(element: T): T; // Aka popPush
    readonly size: number;
    toArray(): T[];
}
