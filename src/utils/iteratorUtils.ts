/**
 * Get an iterator that always returns a given value.
 */
export function always<T = any>(fn: () => T): Iterator<T> {
    return { next: () => ({ done: false, value: fn() }) };
}
/**
 * Get an iterator that returns a value a given amount of times.
 */
export function fill<T = any>(length: number, fn: () => T): Iterator<T> {
    return {
        next: () => {
            if (length < 1) {
                return { done: true, value: undefined };
            }
            --length;
            return { done: false, value: fn() };
        },
    };
}
/**
 * Iterate through the first num elements of an iterator.
 *
 * @param n - The number of elements to iterate.
 * @param iterator - The iterator.
 *
 * @returns - An iterator limited to the next n elements.
 */
export function first<T = any>(n: number, iterator: Iterator<T>): Iterator<T> {
    return {
        next: () => {
            if (n < 1) {
                return { done: true, value: undefined };
            }
            const res = iterator.next();
            n = res.done ? 0 : n - 1;
            return res;
        },
    };
}
/**
 * Join multiple iterators into one.
 *
 * @param iterators - The iterators to join.
 */
export function join<T = any>(iterators: Iterator<Iterator<T>>): Iterator<T> {
    let iterator: Iterator<T> | undefined = { next: () => ({ done: true, value: undefined }) };
    return {
        next: () => {
            if (iterator == null) {
                return { done: true, value: undefined };
            }
            let res = iterator.next();
            while (res.done) {
                const res2 = iterators.next();
                if (res2.done) {
                    iterator = undefined;
                    return { done: true, value: undefined };
                }
                iterator = res2.value;
                res = iterator.next();
            }
            return res;
        },
    };
}
/**
 * Get an empty iterator.
 */
export function never<T = any>(): Iterator<T> {
    return { next: () => ({ done: true, value: undefined }) };
}
/**
 * Wrap a value in an iterator.
 */
export function once<T = any>(fn: () => T): Iterator<T> {
    let done = false;
    return {
        next: () => {
            const res = { done, value: fn() };
            done = true;
            fn = () => undefined!;
            return res;
        },
    };
}
/**
 * Skip the next num elements of an iterator.
 *
 * @param n - The number of elements to skip.
 * @param iterator - The iterator.
 *
 * @returns - The iterator after skipping n elements.
 */
export function skip<T = any>(n: number, iterator: Iterator<T>): Iterator<T> {
    let fn = () => {
        let res: IteratorResult<T> = { done: false, value: undefined! };
        while (n-- > 0 && !res.done) {
            res = iterator.next();
        }
        fn = iterator.next.bind(iterator);
        return res;
    };
    return { next: () => fn() };
}
/**
 * Split an iterator into multiple iterators of a given length.
 *
 * @param length - The length of each iterator.
 * @param iterator - The iterator to split.
 *
 * @returns - An iterator of the resulting iterators.
 */
export function split<T = any>(length: number, iterator: Iterator<T>): Iterator<Iterator<T>> {
    if (length < 1) {
        return { next: () => ({ done: true, value: undefined }) };
    }
    let done = false;
    return {
        next: () => {
            if (done) {
                return { done, value: undefined };
            }
            const iter = first(length, iterator);
            const res = iter.next();
            if (res.done) {
                done = true;
                return { done, value: undefined };
            }
            return { done, value: join([once(() => res.value), iter][Symbol.iterator]()) };
        },
    };
}
