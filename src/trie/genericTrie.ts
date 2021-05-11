import { TokenizeFn } from '..';
import { Trie } from './trie';

export interface GenericTrieNode<Token, Value> {
    children: Map<Token, GenericTrieNode<Token, Value>>;
    isKey: boolean;
    value?: Value;
}

export class GenericTrie<Key, Token, Value> implements Trie<Key, Value> {
    protected length!: number;
    protected root!: GenericTrieNode<Token, Value>;

    constructor(protected tokenize: TokenizeFn<Key, Token>) {
        this.clear();
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
}
