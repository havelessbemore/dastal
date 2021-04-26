import { Sorted } from 'src/sortable';
import { Comparator } from '../../comparable';

export interface Heap<T> extends Sorted<T> {
    clear(): void;
    comparator(): Comparator<T>;
    heapify(...iterables: Iterable<T>[]): Heap<T>;
    merge(heap: Heap<T>): Heap<T>;
    peek(): T | undefined;
    pop(): T | undefined; // Aka extract, delete
    replace(element: T): T; // Aka popPush
    push(element: T): void; // Aka insert, add
    pushPop(element: T): T;
    readonly size: number;
    toArray(): T[];
    // contains(element: T): boolean;
    // delete(element: T): boolean;
    // update(element: T): boolean;
}
