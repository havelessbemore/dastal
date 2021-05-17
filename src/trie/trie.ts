export interface Trie<Key, Value> {
    // extends Iterable<[Key, Value]> {}
    clear(): void;
    delete(key: Key): Value | undefined;
    // entries(): Iterator<[Key, Value]>;
    get(key: Key): Value | undefined;
    getSet(key: Key, callback: (element: Value | undefined) => Value): void;
    has(key: Key): boolean;
    // keys(): Iterator<Key>;
    set(key: Key, element: Value): Value | undefined;
    readonly size: number;
    values(): Iterator<Value>;
}
