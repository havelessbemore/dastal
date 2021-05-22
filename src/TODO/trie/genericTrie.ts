import { LinkedQueue } from 'src/queue';
import { TokenizeFn } from '.';
import { Trie } from './trie';

export interface GenericTrieNode<Token, Value> {
    children: Map<Token, GenericTrieNode<Token, Value>>;
    isKey: boolean;
    value?: Value;
}

export class GenericTrie<Key, Token, Value> implements Trie<Key, Value> {
    protected length: number;
    protected root: GenericTrieNode<Token, Value>;
    protected tokenize: TokenizeFn<Key, Token>;

    constructor(tokenize: TokenizeFn<Key, Token>) {
        this.length = 0;
        this.root = { children: new Map(), isKey: false };
        this.tokenize = tokenize;
    }

    clear(): void {
        this.length = 0;
        this.root = { children: new Map(), isKey: false };
    }

    delete(key: Key): Value | undefined {
        const ancestors: [Token, GenericTrieNode<Token, Value>][] = [];

        // Get the intended node and store the path to it
        let node: GenericTrieNode<Token, Value> | undefined = this.root;
        for (const token of this.tokenize(key)) {
            ancestors.push([token, node]);
            node = node.children.get(token);
            if (node == null) {
                return undefined;
            }
        }

        // Check if the key exists
        if (!node.isKey) {
            return undefined;
        }

        // Delete the node's value
        const value = node.value;
        node.isKey = false;
        node.value = undefined;
        --this.length;

        // Truncate empty paths
        while (!node.isKey && ancestors.length > 0 && node.children.size < 1) {
            const [token, node] = ancestors.pop()!;
            node.children.delete(token);
        }

        return value;
    }

    get(key: Key): Value | undefined {
        const node = this.getNode(key);
        return node?.value;
    }

    getSet(key: Key, callback: (element: Value | undefined) => Value): void {
        throw new Error('TODO');
    }

    protected getNode(key: Key): GenericTrieNode<Token, Value> | undefined {
        let node: GenericTrieNode<Token, Value> | undefined = this.root;
        for (const token of this.tokenize(key)) {
            node = node.children.get(token);
            if (node == null) {
                return undefined;
            }
        }
        return node;
    }

    has(key: Key): boolean {
        return this.getNode(key) !== undefined;
    }

    *keys(): Iterator<Key> {
        throw new Error('TODO');
    }

    set(key: Key, value: Value): Value | undefined {
        let node = this.root;

        // Get or create the intended node
        for (const token of this.tokenize(key)) {
            let child = node.children.get(token);
            if (child == null) {
                child = { children: new Map(), isKey: false };
                node.children.set(token, child);
            }
            node = child;
        }

        // If adding a new key
        if (!node.isKey) {
            node.isKey = true;
            ++this.length;
        }

        // Set new value and return previous value
        const out = node.value;
        node.value = value;
        return out;
    }

    get size(): number {
        return this.length;
    }

    *[Symbol.iterator](): Iterator<[Key, Value]> {
        throw new Error('TODO');
    }

    *values(): Iterator<Value> {
        const q = new LinkedQueue<GenericTrieNode<Token, Value>>();
        q.enqueue(this.root);
        do {
            const node = q.dequeue()!;
            if (node.isKey) {
                yield node.value!;
            }
            for (const child of node.children.values()) {
                q.enqueue(child);
            }
        } while (q.size > 0);
    }
}
