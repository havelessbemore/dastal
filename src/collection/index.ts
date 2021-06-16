import { Collection } from './collection';

export * as ArrayUtils from './arrayUtils';
export * from './collection';
export * as IteratorUtils from './iteratorUtils';

/**
 * Check if a value is a {@link Collection}.
 *
 * @param obj - The value to check.
 *
 * @returns - `true` if obj is a Collection, `false` otherwise.
 */
export function isCollection(obj: any): obj is Collection<unknown> {
    return (
        obj != null && typeof obj['size'] === 'number' && typeof obj[Symbol.iterator] === 'function'
    );
}
