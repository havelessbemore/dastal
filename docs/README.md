dastal - v1.4.0

# dastal - v1.4.0

## Table of contents

### Classes

- [ArrayList](classes/arraylist.md)
- [ArrayQueue](classes/arrayqueue.md)
- [ArrayStack](classes/arraystack.md)
- [BinaryHeap](classes/binaryheap.md)
- [DoublyLinkedList](classes/doublylinkedlist.md)
- [LinkedList](classes/linkedlist.md)
- [LinkedQueue](classes/linkedqueue.md)
- [LinkedStack](classes/linkedstack.md)
- [SkewHeap](classes/skewheap.md)

### Interfaces

- [DoublyLinkedNode](interfaces/doublylinkednode.md)
- [Heap](interfaces/heap.md)
- [LinkedNode](interfaces/linkednode.md)
- [List](interfaces/list.md)
- [Queue](interfaces/queue.md)
- [Sortable](interfaces/sortable.md)
- [Sorted](interfaces/sorted.md)
- [Stack](interfaces/stack.md)

### Type aliases

- [CompareFn](README.md#comparefn)

## Type aliases

### CompareFn

Ƭ **CompareFn**<T\>: (`a`: T, `b`: T) => *number*

A function used to determine the order of a set of elements.

**`param`** The first element

**`param`** The second element

**`returns`** 
- A negative value if a < b
- Zero if a == b
- A positive value if a > b

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Type declaration:

▸ (`a`: T, `b`: T): *number*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `a` | T |
| `b` | T |

**Returns:** *number*

Defined in: [src/index.ts:21](https://github.com/havelessbemore/dastal/blob/dba59a5/src/index.ts#L21)
