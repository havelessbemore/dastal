[dastal - v4.1.1](../README.md) / AVLTreeNode

# Interface: AVLTreeNode<T\>

An AVLTree node interface ([source](https://en.wikipedia.org/wiki/AVL_tree)).

In an AVL tree, the heights of the two child subtrees of any node differ by at most one.
If at any time they differ by more than one, rebalancing is done to restore this property.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [BinaryTreeNode](binarytreenode.md)<T\>

  ↳ **AVLTreeNode**

## Table of contents

### Properties

- [balanceFactor](avltreenode.md#balancefactor)
- [left](avltreenode.md#left)
- [right](avltreenode.md#right)
- [value](avltreenode.md#value)

## Properties

### balanceFactor

• **balanceFactor**: `number`

The delta rank of the node.

#### Defined in

[src/tree/avlTreeNode.ts:13](https://github.com/havelessbemore/dastal/blob/351eddf/src/tree/avlTreeNode.ts#L13)

___

### left

• `Optional` **left**: [AVLTreeNode](avltreenode.md)<T\>

A link to the node's left child.

#### Inherited from

[BinaryTreeNode](binarytreenode.md).[left](binarytreenode.md#left)

#### Defined in

[src/tree/binaryTreeNode.ts:10](https://github.com/havelessbemore/dastal/blob/351eddf/src/tree/binaryTreeNode.ts#L10)

___

### right

• `Optional` **right**: [AVLTreeNode](avltreenode.md)<T\>

A link to the node's right child.

#### Inherited from

[BinaryTreeNode](binarytreenode.md).[right](binarytreenode.md#right)

#### Defined in

[src/tree/binaryTreeNode.ts:14](https://github.com/havelessbemore/dastal/blob/351eddf/src/tree/binaryTreeNode.ts#L14)

___

### value

• **value**: `T`

The value of the node

#### Inherited from

[BinaryTreeNode](binarytreenode.md).[value](binarytreenode.md#value)

#### Defined in

[src/tree/binaryTreeNode.ts:18](https://github.com/havelessbemore/dastal/blob/351eddf/src/tree/binaryTreeNode.ts#L18)
