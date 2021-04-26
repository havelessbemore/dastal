import { BinaryHeap } from './binaryHeap';
import { Heap } from './heap';

export class BinaryMinHeap<T> extends BinaryHeap<T> {
    protected _ate(a: T, b: T): boolean {
        return this._comparator.compare(a, b) <= 0;
    }

    heapify(...iterables: Iterable<T>[]): BinaryMinHeap<T> {
        const array = [];
        for (const iterable of iterables) {
            for (const element of iterable) {
                array.push(element);
            }
        }
        this._heapify(array);
        return new BinaryMinHeap(this._comparator, array);
    }
}
