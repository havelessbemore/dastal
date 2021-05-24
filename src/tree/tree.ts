/**
 * Represents a tree data structure ([source](https://en.wikipedia.org/wiki/Tree_(data_structure))).
 *
 * A tree is a widely used abstract data type that simulates a hierarchical tree structure.
 * It can defined recursively as a collection of nodes (starting at a root node),
 * where each node consists of a value and a list of references to other nodes ('children'), with the
 * constraints that no reference is duplicated and none point to the root.
 *
 * #### At a Glance
 *
 * Iterate
 * - Iterate the tree: {@link [Symbol.iterator]}
 *
 * Get
 * - Get the size of the tree: {@link size}
 * - Check if the tree contains a given element: {@link contains}
 *
 * Set
 * - Update an element: {@link update}
 *
 * Add
 * - Add 1 element: {@link add}
 *
 * Remove
 * - Delete a given element: {@link delete}
 * - Remove all elements: {@link clear}
 */
export interface Tree<T> extends Iterable<T> {
    /**
     * Inserts an element into the tree.
     *
     * @param element - The element to be inserted.
     *
     * @returns The new size of the tree.
     */
    add(element: T): number;
    /**
     * Remove all elements.
     */
    clear(): void;
    /**
     * Check if an element is in the tree.
     *
     * @param element - The element to find.
     *
     * @returns `true` if the element was found, otherwise `false`.
     */
    contains(element: T): boolean;
    /**
     * Delete an element from the tree.
     *
     * @param element - The element to delete.
     *
     * @returns `true` if the element was found and deleted, otherwise `false`.
     */
    delete(element: T): boolean;
    /**
     * The number of elements in the tree.
     */
    readonly size: number;
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
