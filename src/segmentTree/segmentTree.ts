export interface SegmentTree<T> extends Iterable<T> {
    clear(): void;
    pop(): T | undefined;
    push(value: T): void;
    query(min: number, max: number): T;
    readonly size: number;
    update(min: number, max: number, transform: (value: T, index: number) => T): void;
}
