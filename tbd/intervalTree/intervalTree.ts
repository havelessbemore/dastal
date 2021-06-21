import { Collection } from "src/collection";

export interface IntervalTree<T> extends Collection<T> {
    /**
     * Removes all elements.
     */
    clear(): void;
}