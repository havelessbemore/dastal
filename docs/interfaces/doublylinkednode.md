[dastal - v1.4.0](../README.md) / DoublyLinkedNode

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

• `Optional` **next**: [*DoublyLinkedNode*](doublylinkednode.md)<T\>

A link to the node's next (right) neighbor

Defined in: [src/list/doublyLinkedList.ts:14](https://github.com/havelessbemore/dastal/blob/dba59a5/src/list/doublyLinkedList.ts#L14)

___

### prev

• `Optional` **prev**: [*DoublyLinkedNode*](doublylinkednode.md)<T\>

A link to the node's previous (left) neighbor

Defined in: [src/list/doublyLinkedList.ts:18](https://github.com/havelessbemore/dastal/blob/dba59a5/src/list/doublyLinkedList.ts#L18)

___

### value

• **value**: T

The value of the node

Defined in: [src/list/doublyLinkedList.ts:22](https://github.com/havelessbemore/dastal/blob/dba59a5/src/list/doublyLinkedList.ts#L22)
