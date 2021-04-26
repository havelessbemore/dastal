import { BinaryHeap } from './binaryHeap';
import { Heap } from './heap';

export class BinaryMaxHeap<T> extends BinaryHeap<T> {
    protected ate(a: T, b: T): boolean {
        return this._comparator.compare(a, b) >= 0;
    }

    heapify(iterable: Iterable<T>): BinaryMaxHeap<T> {
        const array = Array.from(iterable);
        this._heapify(array);
        return new BinaryMaxHeap(this._comparator, array);
    }

    meld(heap: Heap<T>): BinaryMaxHeap<T> {
        const out = new BinaryMaxHeap(this._comparator, Array.from(this.array));
        return out.merge(heap);
    }
}
