import { BinaryHeap } from './binaryHeap';
import { maxHeapify } from 'src/algorithms/heapify';
import { arrayFrom } from 'src/utils';

export class BinaryMaxHeap<T> extends BinaryHeap<T> {
    protected ate(a: T, b: T): boolean {
        return this._comparator.compare(a, b) >= 0;
    }

    heapify(...iterables: Iterable<T>[]): BinaryMaxHeap<T> {
        const array = arrayFrom(...iterables);
        maxHeapify(this._comparator, array);
        return new BinaryMaxHeap(this._comparator, array);
    }
}
