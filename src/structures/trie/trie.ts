export interface Trie<Key, Value> {
    clear(): void;
    delete(key: Key): Value | undefined;
    get(key: Key): Value | undefined;
    has(key: Key): boolean;
    set(key: Key, element: Value): Value | undefined;
    readonly size: number;
}
