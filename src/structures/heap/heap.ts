import { Comparator, Sorted } from '../../comparable';

export interface Heap<T> extends Sorted<T> {
    clear(): void;
    comparator(): Comparator<T>;
    heapify(iterable: Iterable<T>): Heap<T>;
    meld(heap: Heap<T>): Heap<T>;
    merge(heap: Heap<T>): Heap<T>;
    peek(): T | undefined;
    pop(): T | undefined; // Aka extract, delete
    replace(value: T): T; // Aka popPush
    push(value: T): void; // Aka insert, add
    pushPop(value: T): T;
    readonly size: number;
    toArray(): T[];
}
