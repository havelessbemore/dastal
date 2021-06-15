[dastal - v3.0.0](../README.md) / DoublyLinkedNode

# Interface: DoublyLinkedNode<T\>

A doubly-linked node version of the [LinkedNode](linkednode.md) interface.

Each node links to its neighbors on the left (prev) and right (next) of it.

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Properties

- [next](doublylinkednode.md#next)
- [prev](doublylinkednode.md#prev)
- [value](doublylinkednode.md#value)

## Properties

### next

• `Optional` **next**: [DoublyLinkedNode](doublylinkednode.md)<T\>

A link to the node's next (right) neighbor

#### Defined in

[src/list/doublyLinkedNode.ts:10](https://github.com/havelessbemore/dastal/blob/e94627b/src/list/doublyLinkedNode.ts#L10)

___

### prev

• `Optional` **prev**: [DoublyLinkedNode](doublylinkednode.md)<T\>

A link to the node's previous (left) neighbor

#### Defined in

[src/list/doublyLinkedNode.ts:14](https://github.com/havelessbemore/dastal/blob/e94627b/src/list/doublyLinkedNode.ts#L14)

___

### value

• **value**: `T`

The value of the node

#### Defined in

[src/list/doublyLinkedNode.ts:18](https://github.com/havelessbemore/dastal/blob/e94627b/src/list/doublyLinkedNode.ts#L18)
