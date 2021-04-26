import { BinaryHeap } from './binaryHeap';
import { Heap } from './heap';

export class BinaryMinHeap<T> extends BinaryHeap<T> {
    protected ate(a: T, b: T): boolean {
        return this._comparator.compare(a, b) <= 0;
    }

    heapify(iterable: Iterable<T>): BinaryMinHeap<T> {
        const array = Array.from(iterable);
        this._heapify(array);
        return new BinaryMinHeap(this._comparator, array);
    }

    meld(heap: Heap<T>): BinaryMinHeap<T> {
        const out = new BinaryMinHeap(this._comparator, Array.from(this.array));
        return out.merge(heap);
    }
}
