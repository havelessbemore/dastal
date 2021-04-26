[dastal - v1.0.0](../README.md) / PriorityQueue

# Class: PriorityQueue<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

* [*Queue*](../interfaces/queue.md)<T\>
* *Sorted*<T\>

## Table of contents

### Constructors

- [constructor](priorityqueue.md#constructor)

### Properties

- [heap](priorityqueue.md#heap)

### Accessors

- [size](priorityqueue.md#size)

### Methods

- [clear](priorityqueue.md#clear)
- [comparator](priorityqueue.md#comparator)
- [dequeue](priorityqueue.md#dequeue)
- [enqueue](priorityqueue.md#enqueue)
- [peek](priorityqueue.md#peek)
- [toArray](priorityqueue.md#toarray)

## Constructors

### constructor

\+ **new PriorityQueue**<T\>(`heap`: [*Heap*](../interfaces/heap.md)<T\>): [*PriorityQueue*](priorityqueue.md)<T\>

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type |
| :------ | :------ |
| `heap` | [*Heap*](../interfaces/heap.md)<T\> |

**Returns:** [*PriorityQueue*](priorityqueue.md)<T\>

Defined in: structures/queue/priorityQueue.ts:5

## Properties

### heap

• `Protected` **heap**: [*Heap*](../interfaces/heap.md)<T\>

## Accessors

### size

• get **size**(): *number*

The number of elements in this queue

**Returns:** *number*

Implementation of: [Queue](../interfaces/queue.md).[size](../interfaces/queue.md#size)

Defined in: structures/queue/priorityQueue.ts:29

## Methods

### clear

▸ **clear**(): *void*

Removes all elements from this queue

**Returns:** *void*

Implementation of: [Queue](../interfaces/queue.md)

Defined in: structures/queue/priorityQueue.ts:8

___

### comparator

▸ **comparator**(): *Comparator*<T\>

**Returns:** *Comparator*<T\>

Implementation of: Sorted.comparator

Defined in: structures/queue/priorityQueue.ts:12

___

### dequeue

▸ **dequeue**(): ``null`` \| T

Retrieves and removes the head of this queue

**Returns:** ``null`` \| T

Implementation of: [Queue](../interfaces/queue.md)

Defined in: structures/queue/priorityQueue.ts:21

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

Defined in: structures/queue/priorityQueue.ts:16

___

### peek

▸ **peek**(): ``null`` \| T

Retrieves, but does not remove, the head of this queue

**Returns:** ``null`` \| T

Implementation of: [Queue](../interfaces/queue.md)

Defined in: structures/queue/priorityQueue.ts:25

___

### toArray

▸ **toArray**(): T[]

Convert the queue into an array

**Returns:** T[]

Implementation of: [Queue](../interfaces/queue.md)

Defined in: structures/queue/priorityQueue.ts:33
