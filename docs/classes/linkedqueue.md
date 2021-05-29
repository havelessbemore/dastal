[dastal - v2.0.1](../README.md) / LinkedQueue

# Class: LinkedQueue<T\>

A linked list implementation of the [Queue](../interfaces/queue.md) interface

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- [*Queue*](../interfaces/queue.md)<T\>

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

Instantiate the queue.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `elements?` | *Iterable*<T\> | A set of elements to initialize the queue with. |

**Returns:** [*LinkedQueue*](linkedqueue.md)<T\>

Defined in: [src/queue/linkedQueue.ts:11](https://github.com/havelessbemore/dastal/blob/8c69c82/src/queue/linkedQueue.ts#L11)

## Accessors

### size

• get **size**(): *number*

The number of elements in this queue

**Returns:** *number*

Implementation of: [Queue](../interfaces/queue.md).[size](../interfaces/queue.md#size)

Defined in: [src/queue/linkedQueue.ts:37](https://github.com/havelessbemore/dastal/blob/8c69c82/src/queue/linkedQueue.ts#L37)

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator*<T, any, undefined\>

Receive an iterator through the queue.

**Note:** Unexpected behavior can occur if the collection is modified during iteration.

**Returns:** *Iterator*<T, any, undefined\>

An iterator through the queue

Implementation of: [Queue](../interfaces/queue.md)

Defined in: [src/queue/linkedQueue.ts:47](https://github.com/havelessbemore/dastal/blob/8c69c82/src/queue/linkedQueue.ts#L47)

___

### clear

▸ **clear**(): *void*

Removes all elements from this queue

**Returns:** *void*

Implementation of: [Queue](../interfaces/queue.md)

Defined in: [src/queue/linkedQueue.ts:21](https://github.com/havelessbemore/dastal/blob/8c69c82/src/queue/linkedQueue.ts#L21)

___

### dequeue

▸ **dequeue**(): *undefined* \| T

Retrieves and removes the head of this queue

**Returns:** *undefined* \| T

Implementation of: [Queue](../interfaces/queue.md)

Defined in: [src/queue/linkedQueue.ts:25](https://github.com/havelessbemore/dastal/blob/8c69c82/src/queue/linkedQueue.ts#L25)

___

### enqueue

▸ **enqueue**(`element`: T): *number*

Inserts the specified value into this queue

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | T |

**Returns:** *number*

Implementation of: [Queue](../interfaces/queue.md)

Defined in: [src/queue/linkedQueue.ts:29](https://github.com/havelessbemore/dastal/blob/8c69c82/src/queue/linkedQueue.ts#L29)

___

### peek

▸ **peek**(): *undefined* \| T

Retrieves, but does not remove, the head of this queue

**Returns:** *undefined* \| T

Implementation of: [Queue](../interfaces/queue.md)

Defined in: [src/queue/linkedQueue.ts:33](https://github.com/havelessbemore/dastal/blob/8c69c82/src/queue/linkedQueue.ts#L33)
