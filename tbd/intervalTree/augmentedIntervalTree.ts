import { IntervalTree } from "./intervalTree";

export class AugmentedIntervalTree<T> implements IntervalTree<T> {
    /**
     * The number of intervals in the tree.
     */
    protected length: number;

    constructor(elements?: Iterable<T>) {
        throw new Error("TODO");
    }

    clear(): void {
        throw new Error("TODO");
    }

    get size(): number {
        return this.length;
    }

    [Symbol.iterator](): Iterator<T> {
        throw new Error("TODO");
    }
}