export interface SegmentTree<T> {
    pop(): T | undefined;
    push(value: T): void;
    query(min: number, max: number): T;
    readonly size: number;
    update(min: number, max: number, transformFn: (value: T, index: number) => T): void;
}
