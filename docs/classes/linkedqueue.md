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

- [list](linkedqueue.md#list)

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

\+ **new LinkedQueue**<T\>(`list?`: [*List*](../interfaces/list.md)<T\>): [*LinkedQueue*](linkedqueue.md)<T\>

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type |
| :------ | :------ |
| `list` | [*List*](../interfaces/list.md)<T\> |

**Returns:** [*LinkedQueue*](linkedqueue.md)<T\>

Defined in: [structures/queue/linkedQueue.ts:5](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/queue/linkedQueue.ts#L5)

## Properties

### list

• `Protected` **list**: [*List*](../interfaces/list.md)<T\>

Defined in: [structures/queue/linkedQueue.ts:5](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/queue/linkedQueue.ts#L5)

## Accessors

### size

• get **size**(): *number*

The number of elements in this queue

**Returns:** *number*

Implementation of: [Queue](../interfaces/queue.md).[size](../interfaces/queue.md#size)

Defined in: [structures/queue/linkedQueue.ts:27](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/queue/linkedQueue.ts#L27)

## Methods

### clear

▸ **clear**(): *void*

Removes all elements from this queue

**Returns:** *void*

Implementation of: [Queue](../interfaces/queue.md)

Defined in: [structures/queue/linkedQueue.ts:11](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/queue/linkedQueue.ts#L11)

___

### dequeue

▸ **dequeue**(): *undefined* \| T

Retrieves and removes the head of this queue

**Returns:** *undefined* \| T

Implementation of: [Queue](../interfaces/queue.md)

Defined in: [structures/queue/linkedQueue.ts:15](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/queue/linkedQueue.ts#L15)

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

Defined in: [structures/queue/linkedQueue.ts:19](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/queue/linkedQueue.ts#L19)

___

### peek

▸ **peek**(): *undefined* \| T

Retrieves, but does not remove, the head of this queue

**Returns:** *undefined* \| T

Implementation of: [Queue](../interfaces/queue.md)

Defined in: [structures/queue/linkedQueue.ts:23](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/queue/linkedQueue.ts#L23)

___

### toArray

▸ **toArray**(): T[]

Convert the queue into an array

**Returns:** T[]

Implementation of: [Queue](../interfaces/queue.md)

Defined in: [structures/queue/linkedQueue.ts:31](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/queue/linkedQueue.ts#L31)
