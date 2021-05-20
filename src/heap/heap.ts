import { Sorted } from '..';

/**
 *
 */
export interface Heap<T> extends Iterable<T>, Sorted<T> {
    /**
     *
     */
    clear(): void;
    /**
     *
     * @param element
     */
    contains(element: T): boolean;
    /**
     *
     * Aka extract, remove
     * @param element
     *
     * @returns
     */
    delete(element: T): boolean;
    /**
     *
     */
    dump(): Iterable<T>;
    /**
     *
     * @param elements
     * @returns
     */
    merge(elements: Iterable<T>): number;
    /**
     *
     * @returns
     */
    peek(): T | undefined;
    /**
     *
     * @returns
     */
    pop(): T | undefined;
    /**
     *
     * @param element
     *
     * @returns
     */
    push(element: T): number; // Aka insert, add
    /**
     *
     * @param element
     *
     * @returns
     */
    pushPop(element: T): T;
    /**
     *
     * @param element
     *
     * @returns
     */
    replace(element: T): T | undefined; // Aka popPush
    /**
     *
     */
    readonly size: number;
    /**
     *
     * @param curElement
     * @param newElement
     *
     * @returns
     */
    update(curElement: T, newElement: T): boolean;
}
