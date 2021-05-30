[dastal - v2.1.0](../README.md) / ArrayQueue

# Class: ArrayQueue<T\>

An implementation of the [Queue](../interfaces/queue.md) interface using an array

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- [*Queue*](../interfaces/queue.md)<T\>

## Table of contents

### Constructors

- [constructor](arrayqueue.md#constructor)

### Accessors

- [size](arrayqueue.md#size)

### Methods

- [[Symbol.iterator]](arrayqueue.md#[symbol.iterator])
- [clear](arrayqueue.md#clear)
- [dequeue](arrayqueue.md#dequeue)
- [enqueue](arrayqueue.md#enqueue)
- [peek](arrayqueue.md#peek)

## Constructors

### constructor

\+ **new ArrayQueue**<T\>(`elements?`: *Iterable*<T\>): [*ArrayQueue*](arrayqueue.md)<T\>

Instantiate the queue.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `elements?` | *Iterable*<T\> | A set of elements to initialize the queue with. |

**Returns:** [*ArrayQueue*](arrayqueue.md)<T\>

Defined in: [src/queue/arrayQueue.ts:10](https://github.com/havelessbemore/dastal/blob/99eb870/src/queue/arrayQueue.ts#L10)

## Accessors

### size

• get **size**(): *number*

The number of elements in this queue

**Returns:** *number*

Implementation of: [Queue](../interfaces/queue.md).[size](../interfaces/queue.md#size)

Defined in: [src/queue/arrayQueue.ts:36](https://github.com/havelessbemore/dastal/blob/99eb870/src/queue/arrayQueue.ts#L36)

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator*<T, any, undefined\>

Receive an iterator through the queue.

**Note:** Unexpected behavior can occur if the collection is modified during iteration.

**Returns:** *Iterator*<T, any, undefined\>

An iterator through the queue

Implementation of: [Queue](../interfaces/queue.md)

Defined in: [src/queue/arrayQueue.ts:46](https://github.com/havelessbemore/dastal/blob/99eb870/src/queue/arrayQueue.ts#L46)

___

### clear

▸ **clear**(): *void*

Removes all elements from this queue

**Returns:** *void*

Implementation of: [Queue](../interfaces/queue.md)

Defined in: [src/queue/arrayQueue.ts:20](https://github.com/havelessbemore/dastal/blob/99eb870/src/queue/arrayQueue.ts#L20)

___

### dequeue

▸ **dequeue**(): *undefined* \| T

Retrieves and removes the head of this queue

**Returns:** *undefined* \| T

Implementation of: [Queue](../interfaces/queue.md)

Defined in: [src/queue/arrayQueue.ts:24](https://github.com/havelessbemore/dastal/blob/99eb870/src/queue/arrayQueue.ts#L24)

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

Defined in: [src/queue/arrayQueue.ts:28](https://github.com/havelessbemore/dastal/blob/99eb870/src/queue/arrayQueue.ts#L28)

___

### peek

▸ **peek**(): *undefined* \| T

Retrieves, but does not remove, the head of this queue

**Returns:** *undefined* \| T

Implementation of: [Queue](../interfaces/queue.md)

Defined in: [src/queue/arrayQueue.ts:32](https://github.com/havelessbemore/dastal/blob/99eb870/src/queue/arrayQueue.ts#L32)
