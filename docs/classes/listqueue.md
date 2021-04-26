[dastal - v1.0.0](../README.md) / ListQueue

# Class: ListQueue<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

* [*Queue*](../interfaces/queue.md)<T\>

## Table of contents

### Constructors

- [constructor](listqueue.md#constructor)

### Properties

- [list](listqueue.md#list)

### Accessors

- [size](listqueue.md#size)

### Methods

- [clear](listqueue.md#clear)
- [dequeue](listqueue.md#dequeue)
- [enqueue](listqueue.md#enqueue)
- [peek](listqueue.md#peek)
- [toArray](listqueue.md#toarray)

## Constructors

### constructor

\+ **new ListQueue**<T\>(`list?`: [*List*](../interfaces/list.md)<T\>): [*ListQueue*](listqueue.md)<T\>

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type |
| :------ | :------ |
| `list` | [*List*](../interfaces/list.md)<T\> |

**Returns:** [*ListQueue*](listqueue.md)<T\>

Defined in: [structures/queue/listQueue.ts:5](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/queue/listQueue.ts#L5)

## Properties

### list

• `Protected` **list**: [*List*](../interfaces/list.md)<T\>

Defined in: [structures/queue/listQueue.ts:5](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/queue/listQueue.ts#L5)

## Accessors

### size

• get **size**(): *number*

The number of elements in this queue

**Returns:** *number*

Implementation of: [Queue](../interfaces/queue.md).[size](../interfaces/queue.md#size)

Defined in: [structures/queue/listQueue.ts:27](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/queue/listQueue.ts#L27)

## Methods

### clear

▸ **clear**(): *void*

Removes all elements from this queue

**Returns:** *void*

Implementation of: [Queue](../interfaces/queue.md)

Defined in: [structures/queue/listQueue.ts:11](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/queue/listQueue.ts#L11)

___

### dequeue

▸ **dequeue**(): *undefined* \| T

Retrieves and removes the head of this queue

**Returns:** *undefined* \| T

Implementation of: [Queue](../interfaces/queue.md)

Defined in: [structures/queue/listQueue.ts:15](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/queue/listQueue.ts#L15)

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

Defined in: [structures/queue/listQueue.ts:19](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/queue/listQueue.ts#L19)

___

### peek

▸ **peek**(): *undefined* \| T

Retrieves, but does not remove, the head of this queue

**Returns:** *undefined* \| T

Implementation of: [Queue](../interfaces/queue.md)

Defined in: [structures/queue/listQueue.ts:23](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/queue/listQueue.ts#L23)

___

### toArray

▸ **toArray**(): T[]

Convert the queue into an array

**Returns:** T[]

Implementation of: [Queue](../interfaces/queue.md)

Defined in: [structures/queue/listQueue.ts:31](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/queue/listQueue.ts#L31)
