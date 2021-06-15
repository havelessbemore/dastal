export interface Collection<T> extends Iterable<T> {
    /**
     * The number of elements in the collection.
     */
    readonly size: number;
}
