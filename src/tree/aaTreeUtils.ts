import { AATreeNode } from './aaTreeNode';
import { CompareFn } from '..';

/**
 *
 * @param value
 * @param node
 * @param compareFn
 *
 * @returns
 *
 * @internal
 */
export function insert<T>(
    value: T,
    node: AATreeNode<T> | undefined,
    compareFn: CompareFn<T>,
): AATreeNode<T> {
    // If the tree is empty
    if (node == null) {
        return { level: 1, value };
    }

    // If value < node
    if (compareFn(value, node.value) < 0) {
        node.left = insert(value, node.left, compareFn);

        // If value >= node
    } else {
        node.right = insert(value, node.right, compareFn);
    }

    // Balance the tree
    node = skew(node);
    node = split(node);
    return node!;
}
/**
 *
 * @param value
 * @param node
 * @param compareFn
 *
 * @returns
 *
 * @internal
 */
export function remove<T>(
    value: T,
    node: AATreeNode<T> | undefined,
    compareFn: CompareFn<T>,
): [AATreeNode<T> | undefined, boolean] {
    if (node == null) {
        return [undefined, false];
    }

    let found = false;
    const comparison = compareFn(value, node.value);
    if (comparison < 0) {
        [node.left, found] = remove(value, node.left, compareFn);
    } else if (comparison > 0) {
        [node.right, found] = remove(value, node.right, compareFn);
    } else if (node.left != null) {
        found = true;

        // Replace node with predecessor
        let par = node.left;
        let chi = par.right;
        if (chi == null) {
            node.value = par.value;
            node.left = par.left;
        } else {
            while (chi.right != null) {
                par = chi;
                chi = chi.right;
            }
            node.value = chi.value;
            par.right = chi.left;
        }
    } else if (node.right != null) {
        found = true;

        // Replace node with successor
        let par = node.right;
        let chi = par.left;
        if (chi == null) {
            node.value = par.value;
            node.right = par.right;
        } else {
            while (chi.left != null) {
                par = chi;
                chi = chi.left;
            }
            node.value = chi.value;
            par.left = chi.right;
        }
    } else {
        return [undefined, true];
    }

    if (!found) {
        return [node, false];
    }

    // Decrease levels.
    const level = Math.min(node.left?.level ?? 0, node.right?.level ?? 0) + 1;
    if (level < node.level) {
        node.level = level;
        if (node.right != null && level < node.right.level) {
            node.right.level = level;
        }
    }

    // Rebalance the tree.
    node = skew(node)!;
    node.right = skew(node.right);
    if (node.right != null) {
        node.right.right = skew(node.right.right);
    }
    node = split(node)!;
    node.right = split(node.right);
    return [node, true];
}

/**
 *
 * @param node
 *
 * @returns
 *
 * @internal
 */
export function skew<T>(node: AATreeNode<T> | undefined): AATreeNode<T> | undefined {
    if (node == null || node.left == null || node.level != node.left.level) {
        return node;
    }
    const left = node.left;
    node.left = left.right;
    left.right = node;
    return left;
}
/**
 *
 * @param node
 *
 * @returns
 *
 * @internal
 */
export function split<T>(node: AATreeNode<T> | undefined): AATreeNode<T> | undefined {
    if (
        node == null ||
        node.right == null ||
        node.right.right == null ||
        node.level != node.right.right.level
    ) {
        return node;
    }
    const right = node.right;
    node.right = right.left;
    right.left = node;
    ++right.level;
    return right;
}
