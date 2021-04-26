[dastal - v1.0.0](../README.md) / ArrayQueue

# Class: ArrayQueue<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

* [*Queue*](../interfaces/queue.md)<T\>

## Table of contents

### Constructors

- [constructor](arrayqueue.md#constructor)

### Properties

- [array](arrayqueue.md#array)

### Accessors

- [size](arrayqueue.md#size)

### Methods

- [clear](arrayqueue.md#clear)
- [dequeue](arrayqueue.md#dequeue)
- [enqueue](arrayqueue.md#enqueue)
- [peek](arrayqueue.md#peek)
- [toArray](arrayqueue.md#toarray)

## Constructors

### constructor

\+ **new ArrayQueue**<T\>(`array?`: T[]): [*ArrayQueue*](arrayqueue.md)<T\>

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type | Default value |
| :------ | :------ | :------ |
| `array` | T[] | [] |

**Returns:** [*ArrayQueue*](arrayqueue.md)<T\>

Defined in: [structures/queue/arrayQueue.ts:3](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/queue/arrayQueue.ts#L3)

## Properties

### array

• `Protected` **array**: T[]= []

## Accessors

### size

• get **size**(): *number*

The number of elements in this queue

**Returns:** *number*

Implementation of: [Queue](../interfaces/queue.md).[size](../interfaces/queue.md#size)

Defined in: [structures/queue/arrayQueue.ts:23](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/queue/arrayQueue.ts#L23)

## Methods

### clear

▸ **clear**(): *void*

Removes all elements from this queue

**Returns:** *void*

Implementation of: [Queue](../interfaces/queue.md)

Defined in: [structures/queue/arrayQueue.ts:6](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/queue/arrayQueue.ts#L6)

___

### dequeue

▸ **dequeue**(): *undefined* \| T

Retrieves and removes the head of this queue

**Returns:** *undefined* \| T

Implementation of: [Queue](../interfaces/queue.md)

Defined in: [structures/queue/arrayQueue.ts:15](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/queue/arrayQueue.ts#L15)

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

Defined in: [structures/queue/arrayQueue.ts:10](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/queue/arrayQueue.ts#L10)

___

### peek

▸ **peek**(): *undefined* \| T

Retrieves, but does not remove, the head of this queue

**Returns:** *undefined* \| T

Implementation of: [Queue](../interfaces/queue.md)

Defined in: [structures/queue/arrayQueue.ts:19](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/queue/arrayQueue.ts#L19)

___

### toArray

▸ **toArray**(): T[]

Convert the queue into an array

**Returns:** T[]

Implementation of: [Queue](../interfaces/queue.md)

Defined in: [structures/queue/arrayQueue.ts:27](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/queue/arrayQueue.ts#L27)
