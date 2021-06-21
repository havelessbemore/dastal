import { Collection } from 'src/collection/collection';

export interface Trie<Key, Value> extends Collection<[Key, Value]> {
    clear(): void;
    delete(key: Key): Value | undefined;
    entries(): Iterable<[Key, Value]>;
    get(key: Key): Value | undefined;
    getSet(key: Key, callback: (element: Value | undefined) => Value): void;
    has(key: Key): boolean;
    keys(): Iterable<Key>;
    set(key: Key, element: Value): Value | undefined;
    values(): Iterable<Value>;
}
