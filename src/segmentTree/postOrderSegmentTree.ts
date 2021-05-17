import { onBits } from '../math/bits';
import { Operation, SegmentTree } from './segmentTree';

export class PostOrderSegmentTree<T> implements SegmentTree<T> {
    protected array: T[];
    protected length: number;

    constructor() {
        this.array = [];
        this.length = 0;
    }
    clear(): void {
        this.array.length = 0;
        this.length = 0;
    }
    pop(): T | undefined {
        throw new Error('TODO');
    }
    push(element: T): number {
        throw new Error('TODO');
    }
    query(min: number, max: number): T {
        throw new Error('TODO');
    }
    get size(): number {
        throw new Error('TODO');
    }
    *[Symbol.iterator](): Iterator<T> {
        let i = 0;
        for (let j = 0; j < this.length; j = 2 * i - onBits(i)) {
            yield this.array[j];
            ++i;
        }
    }
    update(min: number, max: number, operation: Operation<T>): void {
        throw new Error('TODO');
    }
}
