[dastal - v2.0.0](../README.md) / AATreeNode

# Interface: AATreeNode<T\>

An AATree node interface.

In addition to being a binary tree node,
each node requires a balancing mechanism in the form of a numeric 'level'
that has the following properties ([source](https://en.wikipedia.org/wiki/AA_tree)):
1. The level of every leaf node is one.
1. The level of every left child is exactly one less than that of its parent.
1. The level of every right child is equal to or one less than that of its parent.
1. The level of every right grandchild is strictly less than that of its grandparent.
1. Every node of level greater than one has two children.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

* [*BinaryTreeNode*](binarytreenode.md)<T\>

  ↳ **AATreeNode**

## Table of contents

### Properties

- [left](aatreenode.md#left)
- [level](aatreenode.md#level)
- [right](aatreenode.md#right)
- [value](aatreenode.md#value)

## Properties

### left

• `Optional` **left**: [*AATreeNode*](aatreenode.md)<T\>

A link to the node's left child.

Inherited from: [BinaryTreeNode](binarytreenode.md).[left](binarytreenode.md#left)

Defined in: src/tree/binaryTreeNode.ts:10

___

### level

• **level**: *number*

The level of the node.

Defined in: src/tree/aaTreeNode.ts:19

___

### right

• `Optional` **right**: [*AATreeNode*](aatreenode.md)<T\>

A link to the node's right child.

Inherited from: [BinaryTreeNode](binarytreenode.md).[right](binarytreenode.md#right)

Defined in: src/tree/binaryTreeNode.ts:14

___

### value

• **value**: T

The value of the node

Inherited from: [BinaryTreeNode](binarytreenode.md).[value](binarytreenode.md#value)

Defined in: src/tree/binaryTreeNode.ts:18
