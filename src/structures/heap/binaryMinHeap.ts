import { BinaryHeap } from './binaryHeap';
import { heapify } from 'src/algorithms/heapify';

export class BinaryMinHeap<T> extends BinaryHeap<T> {
    protected isAboveOrEqual(a: T, b: T): boolean {
        return this._comparator.compare(a, b) <= 0;
    }

    heapify(array: T[]): BinaryMinHeap<T> {
        heapify((a, b) => this.isAboveOrEqual(a, b), array);
        return new BinaryMinHeap(this._comparator, array);
    }
}
