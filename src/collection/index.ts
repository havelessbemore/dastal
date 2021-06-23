import { Collection } from './collection';

export * from './collection';

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
