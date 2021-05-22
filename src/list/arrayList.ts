import { CompareFn } from '..';
import { List } from './list';
import { batch, clamp, cwrap } from './utils';

/**
 * An implementation of the {@link List} interface using an array
 */
export class ArrayList<T> implements List<T> {
    /**
     * The array containing every element.
     */
    protected array: Array<T>;
    /**
     * Instantiate the list.
     *
     * @param elements - A set of elements to initialize the list with.
     */
    constructor(elements?: Iterable<T>) {
        this.array = elements ? Array.from(elements) : [];
    }

    add(index: number, element: T): number {
        if (index >= 0 && index <= this.size) {
            this.array.splice(index, 0, element);
        }
        return this.size;
    }

    addAll(index: number, elements: Iterable<T>): number {
        if (index >= 0 && index <= this.size) {
            for (const items of batch(10000, elements)) {
                this.array.splice(index, 0, ...items);
                index += items.length;
            }
        }
        return this.size;
    }

    clear(): void {
        this.array.length = 0;
    }

    concat(...lists: Iterable<T>[]): ArrayList<T> {
        const out = new ArrayList(this);
        for (const list of lists) {
            out.addAll(out.size, list);
        }
        return out;
    }

    copyWithin(index: number, min?: number, max?: number): this {
        index = cwrap(index ?? 0, 0, this.size);
        min = cwrap(min ?? 0, 0, this.size);
        max = cwrap(max ?? this.size, 0, this.size);
        this.array.copyWithin(index, min, max);
        return this;
    }

    fill(element: T, min?: number, max?: number): this {
        min = cwrap(min ?? 0, 0, this.size);
        max = cwrap(max ?? this.size, 0, this.size);
        this.array.fill(element, min, max);
        return this;
    }

    get(index: number): T | undefined {
        return index < 0 || index >= this.size ? undefined : this.array[index];
    }

    getSet(index: number, callback: (element: T) => T): T | undefined {
        let value: T | undefined = undefined;
        if (index >= 0 && index < this.size) {
            value = this.array[index];
            this.array[index] = callback(value);
        }
        return value;
    }

    pop(): T | undefined {
        return this.array.pop();
    }

    push(element: T): number {
        return this.array.push(element);
    }

    remove(index: number): T | undefined {
        return index < 0 || index >= this.size ? undefined : this.array.splice(index, 1)[0];
    }

    reverse(min?: number, max?: number): this {
        min = cwrap(min ?? 0, 0, this.size);
        max = cwrap(max ?? this.size, 0, this.size) - 1;
        while (min < max) {
            const temp = this.array[min];
            this.array[min++] = this.array[max];
            this.array[max--] = temp;
        }
        return this;
    }

    set(index: number, element: T): T | undefined {
        let prev: T | undefined = undefined;
        if (index >= 0 && index < this.size) {
            prev = this.array[index];
            this.array[index] = element;
        }
        return prev;
    }

    shift(): T | undefined {
        return this.array.shift();
    }

    get size(): number {
        return this.array.length;
    }

    slice(min?: number, max?: number): ArrayList<T> {
        return new ArrayList(this.array.slice(min, max));
    }

    splice(start?: number, count?: number, elements?: Iterable<T>): List<T> {
        start = cwrap(start ?? 0, 0, this.size);
        count = clamp(count ?? this.size, 0, this.size - start);
        const list = new ArrayList(this.array.splice(start, count));
        for (const items of batch(10000, elements ?? [])) {
            this.array.splice(start, 0, ...items);
            start += items.length;
        }
        return list;
    }

    sort(compareFn: CompareFn<T>): this {
        this.array.sort(compareFn);
        return this;
    }
    /**
     * Receive an iterator through the list.
     *
     * **Note:** Unexpected behavior can occur if the collection is modified during iteration.
     *
     * @returns An iterator through the list
     */
    [Symbol.iterator](): Iterator<T> {
        return this.array[Symbol.iterator]();
    }

    unshift(element: T): number {
        return this.array.unshift(element);
    }

    update(callback: (element: T, index: number) => T): this;
    update(min: number | undefined, callback: (element: T, index: number) => T): this;
    update(
        min: number | undefined,
        max: number | undefined,
        callback: (element: T, index: number) => T,
    ): this;
    update(
        min: number | undefined | ((element: T, index: number) => T),
        max?: number | ((element: T, index: number) => T),
        callback?: (element: T, index: number) => T,
    ): this {
        if (callback == null) {
            if (arguments.length < 2) {
                callback = min as (element: T, index: number) => T;
                min = undefined;
            } else {
                callback = max as (element: T, index: number) => T;
                max = undefined;
            }
        }
        min = cwrap((min as number) ?? 0, 0, this.size);
        max = cwrap((max as number) ?? this.size, 0, this.size);
        while (min < max) {
            this.array[min] = callback(this.array[min], min);
            ++min;
        }
        return this;
    }

    *view(min?: number, max?: number): Iterable<T> {
        min = cwrap(min ?? 0, 0, this.size);

        let len: () => number;
        if (max == null) {
            len = () => this.size;
        } else if (max >= 0) {
            len = () => Math.min(max, this.size);
        } else {
            len = () => this.size + max;
        }

        while (min < len()) {
            yield this.array[min++];
        }
    }
}
