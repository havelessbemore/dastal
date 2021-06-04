import { Sorted } from '..';

/**
 * A specialized tree-based data structure that satisfies the heap property
 * ([source](https://en.wikipedia.org/wiki/Heap_(data_structure))).
 *
 * **Heap property**: For any given node N, the key (e.g. value) of N is
 * greater than or equal to the key of its children.
 *
 * In a heap, the highest priority element (relative to its ordering) is always stored at the root.
 * However, a heap is not a sorted structure; it can be regarded as being partially ordered.
 * The heap property only applies between a parent node and its descendants. There is no
 * implied ordering between siblings or cousins and no implied sequence for an ordered traversal.
 *
 * A heap is a useful data structure when it is necessary to repeatedly
 * remove the object with the highest priority. In the sense, it can be used to implement
 * a priority queue.
 *
 * #### At a Glance
 *
 * Iterate
 * - Iterate the heap: {@link [Symbol.iterator]}
 * - Iterate the heap in sorted order: {@link sorted}
 *
 * Get
 * - Get the size of the heap: {@link size}
 * - Get the top element: {@link peek}
 * - Check if the heap contains a given element: {@link contains}
 * - Get the heap's sorting method: {@link comparator}
 *
 * Set
 * - Update an element: {@link update}
 *
 * Add
 * - Add 1 element: {@link push}
 * - Add 1 heap: {@link merge}
 * - Add multiple elements: {@link addAll}
 *
 * Remove
 * - Remove the top element: {@link pop}
 * - Delete a given element: {@link delete}
 * - Remove all elements: {@link clear}
 *
 * Add & Remove
 * - Add and then remove the top element: {@link pushPop}
 * - Remove the top element and then add an element: {@link replace}
 */
export interface Heap<T> extends Iterable<T>, Sorted<T> {
    /**
     * Insert a set of elements into the heap.
     *
     * @param elements - The elements to insert.
     *
     * @returns The new size of the list.
     */
    addAll(elements: Iterable<T>): number;
    /**
     * Remove all elements.
     */
    clear(): void;
    /**
     * Check if an element is in the heap.
     *
     * @param element - The element to find.
     *
     * @returns `true` if the element was found, otherwise `false`.
     */
    contains(element: T): boolean;
    /**
     * Delete an element from the heap.
     *
     * @param element - The element to delete.
     *
     * @returns `true` if the element was found and deleted, otherwise `false`.
     */
    delete(element: T): boolean;
    /**
     * Join with a different heap and modify the existing heap to
     * contain elements of both. Does not modify the input.
     *
     * @param heap - The heap to join with.
     *
     * @returns The heap.
     */
    merge(heap: Heap<T>): this;
    /**
     * Retrieves, but does not remove, the top of the heap.
     *
     * @returns The element at the top of the heap or `undefined` if empty.
     */
    peek(): T | undefined;
    /**
     * Remove the top of the heap (AKA extract).
     *
     * @returns The element at the top of the heap or `undefined` if empty.
     */
    pop(): T | undefined;
    /**
     * Inserts an element into the heap (AKA insert, add).
     *
     * @param element - The element to be inserted.
     *
     * @returns The new size of the heap.
     */
    push(element: T): number; // Aka insert, add
    /**
     * Insert an element and then remove the top of the heap.
     *
     * @param element - The element to be inserted.
     *
     * @returns The element at the top of the heap.
     */
    pushPop(element: T): T;
    /**
     * Remove the top of the heap and then insert a new element (AKA popPush).
     *
     * @param element - The element to be inserted.
     *
     * @returns The element at the top of the heap or `undefined` if empty.
     */
    replace(element: T): T | undefined;
    /**
     * The number of elements in the heap.
     */
    readonly size: number;
    /**
     * Iterate through the heap in sorted order.
     *
     * **Note:** Unexpected behavior can occur if the collection is modified during iteration.
     */
    sorted(): Iterable<T>;
    /**
     * Update a specific element.
     *
     * @param curElement - The element to update.
     * @param newElement - The new element to insert.
     *
     * @returns `true` if curElement was found and updated, otherwise `false`.
     */
    update(curElement: T, newElement: T): boolean;
}
