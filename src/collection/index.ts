import { Collection } from './collection';

export * from './collection';

export function isCollection(obj: any): obj is Collection<unknown> {
    return 'size' in obj && typeof obj['size'] === 'number';
}
