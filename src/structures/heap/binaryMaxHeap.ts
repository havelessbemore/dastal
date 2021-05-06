import { BinaryHeap } from './binaryHeap';
import { heapify } from 'src/algorithms/heapify';

export class BinaryMaxHeap<T> extends BinaryHeap<T> {
    protected isAboveOrEqual(a: T, b: T): boolean {
        return this._comparator.compare(a, b) >= 0;
    }

    heapify(array: T[]): BinaryMaxHeap<T> {
        heapify((a, b) => this.isAboveOrEqual(a, b), array);
        return new BinaryMaxHeap(this._comparator, array);
    }
}
