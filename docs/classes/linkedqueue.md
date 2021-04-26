[dastal - v1.0.0](../README.md) / LinkedQueue

# Class: LinkedQueue<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

* [*Queue*](../interfaces/queue.md)<T\>

## Table of contents

### Constructors

- [constructor](linkedqueue.md#constructor)

### Properties

- [length](linkedqueue.md#length)
- [tail](linkedqueue.md#tail)

### Accessors

- [size](linkedqueue.md#size)

### Methods

- [clear](linkedqueue.md#clear)
- [dequeue](linkedqueue.md#dequeue)
- [enqueue](linkedqueue.md#enqueue)
- [peek](linkedqueue.md#peek)
- [toArray](linkedqueue.md#toarray)

## Constructors

### constructor

\+ **new LinkedQueue**<T\>(): [*LinkedQueue*](linkedqueue.md)<T\>

#### Type parameters:

| Name |
| :------ |
| `T` |

**Returns:** [*LinkedQueue*](linkedqueue.md)<T\>

Defined in: structures/queue/linkedQueue.ts:10

## Properties

### length

• `Protected` **length**: *number*

Defined in: structures/queue/linkedQueue.ts:9

___

### tail

• `Protected` `Optional` **tail**: [*LinkedNode*](../interfaces/linkednode.md)<T\>

Defined in: structures/queue/linkedQueue.ts:10

## Accessors

### size

• get **size**(): *number*

The number of elements in this queue

**Returns:** *number*

Implementation of: [Queue](../interfaces/queue.md).[size](../interfaces/queue.md#size)

Defined in: structures/queue/linkedQueue.ts:54

## Methods

### clear

▸ **clear**(): *void*

Removes all elements from this queue

**Returns:** *void*

Implementation of: [Queue](../interfaces/queue.md)

Defined in: structures/queue/linkedQueue.ts:16

___

### dequeue

▸ **dequeue**(): ``null`` \| T

Retrieves and removes the head of this queue

**Returns:** ``null`` \| T

Implementation of: [Queue](../interfaces/queue.md)

Defined in: structures/queue/linkedQueue.ts:21

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

Defined in: structures/queue/linkedQueue.ts:35

___

### peek

▸ **peek**(): ``null`` \| T

Retrieves, but does not remove, the head of this queue

**Returns:** ``null`` \| T

Implementation of: [Queue](../interfaces/queue.md)

Defined in: structures/queue/linkedQueue.ts:50

___

### toArray

▸ **toArray**(): T[]

Convert the queue into an array

**Returns:** T[]

Implementation of: [Queue](../interfaces/queue.md)

Defined in: structures/queue/linkedQueue.ts:58
