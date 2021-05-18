[dastal - v1.1.0](../README.md) / ArrayQueue

# Class: ArrayQueue<T\>

An implementation of the [Queue](../interfaces/queue.md) interface using an array

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

* [*Queue*](../interfaces/queue.md)<T\>

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

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type |
| :------ | :------ |
| `elements?` | *Iterable*<T\> |

**Returns:** [*ArrayQueue*](arrayqueue.md)<T\>

Defined in: [src/queue/arrayQueue.ts:10](https://github.com/havelessbemore/dastal/blob/f1eca00/src/queue/arrayQueue.ts#L10)

## Accessors

### size

• get **size**(): *number*

The number of elements in this queue

**Returns:** *number*

Implementation of: [Queue](../interfaces/queue.md).[size](../interfaces/queue.md#size)

Defined in: [src/queue/arrayQueue.ts:48](https://github.com/havelessbemore/dastal/blob/f1eca00/src/queue/arrayQueue.ts#L48)

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator*<T, any, undefined\>

Receive an iterator through the queue.

**Note:** Unexpected behavior can occur if the collection is modified during iteration.

**Returns:** *Iterator*<T, any, undefined\>

An iterator through the queue

Implementation of: [Queue](../interfaces/queue.md)

Defined in: [src/queue/arrayQueue.ts:58](https://github.com/havelessbemore/dastal/blob/f1eca00/src/queue/arrayQueue.ts#L58)

___

### clear

▸ **clear**(): *void*

Removes all elements from this queue

**Returns:** *void*

Implementation of: [Queue](../interfaces/queue.md)

Defined in: [src/queue/arrayQueue.ts:18](https://github.com/havelessbemore/dastal/blob/f1eca00/src/queue/arrayQueue.ts#L18)

___

### dequeue

▸ **dequeue**(): *undefined* \| T

Retrieves and removes the head of this queue

**Returns:** *undefined* \| T

The element at the head of the queue or `undefined` if this queue is empty.

Implementation of: [Queue](../interfaces/queue.md)

Defined in: [src/queue/arrayQueue.ts:26](https://github.com/havelessbemore/dastal/blob/f1eca00/src/queue/arrayQueue.ts#L26)

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

Defined in: [src/queue/arrayQueue.ts:34](https://github.com/havelessbemore/dastal/blob/f1eca00/src/queue/arrayQueue.ts#L34)

___

### peek

▸ **peek**(): *undefined* \| T

Retrieves, but does not remove, the head of this queue

**Returns:** *undefined* \| T

The value at the head of the queue or `undefined` if this queue is empty.

Implementation of: [Queue](../interfaces/queue.md)

Defined in: [src/queue/arrayQueue.ts:42](https://github.com/havelessbemore/dastal/blob/f1eca00/src/queue/arrayQueue.ts#L42)
