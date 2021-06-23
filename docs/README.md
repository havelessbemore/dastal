dastal - v5.0.0

# dastal - v5.0.0

## Table of contents

### Namespaces

- [ArrayUtils](modules/arrayutils.md)
- [IteratorUtils](modules/iteratorutils.md)
- [NumberUtils](modules/numberutils.md)
- [StringUtils](modules/stringutils.md)
- [env](modules/env.md)
- [u32](modules/u32.md)

### Classes

- [AATree](classes/aatree.md)
- [AVLTree](classes/avltree.md)
- [ArrayList](classes/arraylist.md)
- [ArrayQueue](classes/arrayqueue.md)
- [ArrayStack](classes/arraystack.md)
- [BinaryHeap](classes/binaryheap.md)
- [DoublyLinkedList](classes/doublylinkedlist.md)
- [InOrderSegmentTree](classes/inordersegmenttree.md)
- [LevelOrderSegmentTree](classes/levelordersegmenttree.md)
- [LinkedList](classes/linkedlist.md)
- [LinkedQueue](classes/linkedqueue.md)
- [LinkedStack](classes/linkedstack.md)
- [SkewHeap](classes/skewheap.md)

### Interfaces

- [AATreeNode](interfaces/aatreenode.md)
- [AVLTreeNode](interfaces/avltreenode.md)
- [BinaryTreeNode](interfaces/binarytreenode.md)
- [Collection](interfaces/collection.md)
- [DoublyLinkedNode](interfaces/doublylinkednode.md)
- [Heap](interfaces/heap.md)
- [LinkedNode](interfaces/linkednode.md)
- [List](interfaces/list.md)
- [Queue](interfaces/queue.md)
- [SegmentTree](interfaces/segmenttree.md)
- [Sortable](interfaces/sortable.md)
- [Sorted](interfaces/sorted.md)
- [SortedTree](interfaces/sortedtree.md)
- [Stack](interfaces/stack.md)
- [Tree](interfaces/tree.md)

### Type aliases

- [CombineFn](README.md#combinefn)
- [CompareFn](README.md#comparefn)

### Functions

- [isCollection](README.md#iscollection)

## Type aliases

### CombineFn

Ƭ **CombineFn**<T, K\>: (`a`: `T`, `b`: `T`) => `K`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | `K` = `T` |

#### Type declaration

▸ (`a`, `b`): `K`

A function that combines two elements into another.
The output may or may not be of the same type as
the inputs, depending on the use case.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `T` | The first element |
| `b` | `T` | The second element |

##### Returns

`K`

The combination of the given elements

#### Defined in

[src/index.ts:23](https://github.com/havelessbemore/dastal/blob/389210e/src/index.ts#L23)

___

### CompareFn

Ƭ **CompareFn**<T\>: (`a`: `T`, `b`: `T`) => `number`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (`a`, `b`): `number`

A function used to determine the order of a set of elements.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `T` | The first element |
| `b` | `T` | The second element |

##### Returns

`number`

- A negative value if a < b
- Zero if a == b
- A positive value if a > b

#### Defined in

[src/index.ts:35](https://github.com/havelessbemore/dastal/blob/389210e/src/index.ts#L35)

## Functions

### isCollection

▸ **isCollection**(`obj`): obj is Collection<unknown\>

Check if a value is a [Collection](interfaces/collection.md).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `any` | The value to check. |

#### Returns

obj is Collection<unknown\>

- `true` if obj is a Collection, `false` otherwise.

#### Defined in

[src/collection/index.ts:12](https://github.com/havelessbemore/dastal/blob/389210e/src/collection/index.ts#L12)
