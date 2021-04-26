[dastal - v1.0.0](../README.md) / HeapQueue

# Class: HeapQueue<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

* [*Queue*](../interfaces/queue.md)<T\>
* [*Sorted*](../interfaces/sorted.md)<T\>

## Table of contents

### Constructors

- [constructor](heapqueue.md#constructor)

### Properties

- [heap](heapqueue.md#heap)

### Accessors

- [size](heapqueue.md#size)

### Methods

- [clear](heapqueue.md#clear)
- [comparator](heapqueue.md#comparator)
- [dequeue](heapqueue.md#dequeue)
- [enqueue](heapqueue.md#enqueue)
- [peek](heapqueue.md#peek)
- [toArray](heapqueue.md#toarray)

## Constructors

### constructor

\+ **new HeapQueue**<T\>(`heap`: [*Heap*](../interfaces/heap.md)<T\>): [*HeapQueue*](heapqueue.md)<T\>

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type |
| :------ | :------ |
| `heap` | [*Heap*](../interfaces/heap.md)<T\> |

**Returns:** [*HeapQueue*](heapqueue.md)<T\>

Defined in: [structures/queue/heapQueue.ts:6](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/queue/heapQueue.ts#L6)

## Properties

### heap

• `Protected` **heap**: [*Heap*](../interfaces/heap.md)<T\>

## Accessors

### size

• get **size**(): *number*

The number of elements in this queue

**Returns:** *number*

Implementation of: [Queue](../interfaces/queue.md).[size](../interfaces/queue.md#size)

Defined in: [structures/queue/heapQueue.ts:30](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/queue/heapQueue.ts#L30)

## Methods

### clear

▸ **clear**(): *void*

Removes all elements from this queue

**Returns:** *void*

Implementation of: [Queue](../interfaces/queue.md)

Defined in: [structures/queue/heapQueue.ts:9](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/queue/heapQueue.ts#L9)

___

### comparator

▸ **comparator**(): [*Comparator*](../interfaces/comparator.md)<T\>

**Returns:** [*Comparator*](../interfaces/comparator.md)<T\>

Implementation of: [Sorted](../interfaces/sorted.md)

Defined in: [structures/queue/heapQueue.ts:13](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/queue/heapQueue.ts#L13)

___

### dequeue

▸ **dequeue**(): *undefined* \| T

Retrieves and removes the head of this queue

**Returns:** *undefined* \| T

Implementation of: [Queue](../interfaces/queue.md)

Defined in: [structures/queue/heapQueue.ts:22](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/queue/heapQueue.ts#L22)

___

### enqueue

▸ **enqueue**(`value`: T): *boolean*

Inserts the specified value into this queue

#### Parameters:

| Name | Type |
| :------ | :------ |
| `value` | T |

**Returns:** *boolean*

Implementation of: [Queue](../interfaces/queue.md)

Defined in: [structures/queue/heapQueue.ts:17](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/queue/heapQueue.ts#L17)

___

### peek

▸ **peek**(): *undefined* \| T

Retrieves, but does not remove, the head of this queue

**Returns:** *undefined* \| T

Implementation of: [Queue](../interfaces/queue.md)

Defined in: [structures/queue/heapQueue.ts:26](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/queue/heapQueue.ts#L26)

___

### toArray

▸ **toArray**(): T[]

Convert the queue into an array

**Returns:** T[]

Implementation of: [Queue](../interfaces/queue.md)

Defined in: [structures/queue/heapQueue.ts:34](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/queue/heapQueue.ts#L34)
