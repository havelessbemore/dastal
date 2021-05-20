[dastal - v1.3.1](../README.md) / LinkedQueue

# Class: LinkedQueue<T\>

A linked list implementation of the [Queue](../interfaces/queue.md) interface

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

* [*Queue*](../interfaces/queue.md)<T\>

## Table of contents

### Constructors

- [constructor](linkedqueue.md#constructor)

### Accessors

- [size](linkedqueue.md#size)

### Methods

- [[Symbol.iterator]](linkedqueue.md#[symbol.iterator])
- [clear](linkedqueue.md#clear)
- [dequeue](linkedqueue.md#dequeue)
- [enqueue](linkedqueue.md#enqueue)
- [peek](linkedqueue.md#peek)

## Constructors

### constructor

\+ **new LinkedQueue**<T\>(`elements?`: *Iterable*<T\>): [*LinkedQueue*](linkedqueue.md)<T\>

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type |
| :------ | :------ |
| `elements?` | *Iterable*<T\> |

**Returns:** [*LinkedQueue*](linkedqueue.md)<T\>

Defined in: [src/queue/linkedQueue.ts:11](https://github.com/havelessbemore/dastal/blob/0f470df/src/queue/linkedQueue.ts#L11)

## Accessors

### size

• get **size**(): *number*

The number of elements in this queue

**Returns:** *number*

Implementation of: [Queue](../interfaces/queue.md).[size](../interfaces/queue.md#size)

Defined in: [src/queue/linkedQueue.ts:49](https://github.com/havelessbemore/dastal/blob/0f470df/src/queue/linkedQueue.ts#L49)

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator*<T, any, undefined\>

Receive an iterator through the queue.

**Note:** Unexpected behavior can occur if the collection is modified during iteration.

**Returns:** *Iterator*<T, any, undefined\>

An iterator through the queue

Implementation of: [Queue](../interfaces/queue.md)

Defined in: [src/queue/linkedQueue.ts:59](https://github.com/havelessbemore/dastal/blob/0f470df/src/queue/linkedQueue.ts#L59)

___

### clear

▸ **clear**(): *void*

Removes all elements from this queue

**Returns:** *void*

Implementation of: [Queue](../interfaces/queue.md)

Defined in: [src/queue/linkedQueue.ts:19](https://github.com/havelessbemore/dastal/blob/0f470df/src/queue/linkedQueue.ts#L19)

___

### dequeue

▸ **dequeue**(): *undefined* \| T

Retrieves and removes the head of this queue

**Returns:** *undefined* \| T

The element at the head of the queue or `undefined` if this queue is empty.

Implementation of: [Queue](../interfaces/queue.md)

Defined in: [src/queue/linkedQueue.ts:27](https://github.com/havelessbemore/dastal/blob/0f470df/src/queue/linkedQueue.ts#L27)

___

### enqueue

▸ **enqueue**(`element`: T): *number*

Inserts the specified element into this queue

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | T | The element to be inserted |

**Returns:** *number*

Implementation of: [Queue](../interfaces/queue.md)

Defined in: [src/queue/linkedQueue.ts:35](https://github.com/havelessbemore/dastal/blob/0f470df/src/queue/linkedQueue.ts#L35)

___

### peek

▸ **peek**(): *undefined* \| T

Retrieves, but does not remove, the head of this queue

**Returns:** *undefined* \| T

The element at the head of the queue or `undefined` if this queue is empty.

Implementation of: [Queue](../interfaces/queue.md)

Defined in: [src/queue/linkedQueue.ts:43](https://github.com/havelessbemore/dastal/blob/0f470df/src/queue/linkedQueue.ts#L43)
