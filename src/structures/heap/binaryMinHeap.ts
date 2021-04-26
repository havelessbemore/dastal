import { BinaryHeap } from './binaryHeap';
import { minHeapify } from 'src/algorithms/heapify';
import { arrayFrom } from 'src/utils';

export class BinaryMinHeap<T> extends BinaryHeap<T> {
    protected ate(a: T, b: T): boolean {
        return this._comparator.compare(a, b) <= 0;
    }

    heapify(...iterables: Iterable<T>[]): BinaryMinHeap<T> {
        const array = arrayFrom(...iterables);
        minHeapify(this._comparator, array);
        return new BinaryMinHeap(this._comparator, array);
    }
}
