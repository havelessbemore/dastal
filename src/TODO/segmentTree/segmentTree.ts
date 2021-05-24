export interface Operation<T> {
    (element: T, index: number): T;
}

export interface CombineFn<T, K = T> {
    (a: T, b: T): K;
}

export interface SegmentTree<T> extends Iterable<T> {
    /**
     * Remove all elements.
     */
    clear(): void;
    /**
     * Retrieves and removes the last element
     *
     * @returns The last element or `undefined` if empty.
     */
    pop(): T | undefined;
    /**
     * Appends an element to the tree
     *
     * @param element - The element to be inserted
     *
     * @returns The new size of the tree
     */
    push(element: T): number;
    /**
     * Get the aggregated result of a given range in the tree
     *
     * @param min - The start index of the range, inclusive
     * @param max - The end index of the range, exclusive
     *
     * @returns The aggregated result for range [min, max)
     */
    query(min: number, max: number): T;
    /**
     * The number of elements in the tree
     */
    readonly size: number;
    /**
     * Update the elements of a given range in the tree
     *
     * @param min - The start index of the range, inclusive
     * @param max - The end index of the range, exclusive
     * @param operation - The update to perform
     */
    update(min: number, max: number, operation: Operation<T>): void;
}

// lazyUpdate(min: number, max: number, type: OperationType, operation: LazyOperation<T>): void;

export enum OperationType {
    Assignment = 'assignment',
    /**
     * Represents an operation that
     */
    Identity = 'identity',
}
export interface AssignmentOperation<T> {
    (): T;
}
export interface IdentityOperation<T> {
    (): T;
}

// commutative: one can change the order of the terms and still get the same result.
// a + b = b + a
// f(a, b) = f(b, a)

// associative: The grouping of operations does not change the result.
// (a + b) + c = a + (b + c)
// f(f((a, b), c) = f(a, f(b, c))

// distributive:
// a*(b + c) = a*b + a*c
// g(a, f(b, c)) = f(g(a, b), g(a, c))

// assignment:
// a = x
// f(a) = x

// identity:
// a + 0 = a
// f(a) = a

export interface LazyOperation<T> {
    (element: T, min: number, max: number): T;
}
