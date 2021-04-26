[dastal - v1.0.0](../README.md) / Queue

# Interface: Queue<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Implemented by

* [*ArrayQueue*](../classes/arrayqueue.md)
* [*HeapQueue*](../classes/heapqueue.md)
* [*ListQueue*](../classes/listqueue.md)

## Table of contents

### Properties

- [size](queue.md#size)

### Methods

- [clear](queue.md#clear)
- [dequeue](queue.md#dequeue)
- [enqueue](queue.md#enqueue)
- [peek](queue.md#peek)
- [toArray](queue.md#toarray)

## Properties

### size

• `Readonly` **size**: *number*

The number of elements in this queue

Defined in: [structures/queue/queue.ts:29](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/queue/queue.ts#L29)

## Methods

### clear

▸ **clear**(): *void*

Removes all elements from this queue

**Returns:** *void*

Defined in: [structures/queue/queue.ts:5](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/queue/queue.ts#L5)

___

### dequeue

▸ **dequeue**(): *undefined* \| T

Retrieves and removes the head of this queue

**Returns:** *undefined* \| T

The value at the head of the queue or `undefined` if this queue is empty.

Defined in: [structures/queue/queue.ts:11](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/queue/queue.ts#L11)

___

### enqueue

▸ **enqueue**(`value`: T): *boolean*

Inserts the specified value into this queue

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | T | The element to be inserted |

**Returns:** *boolean*

`true` upon success, otherwise `false`

Defined in: [structures/queue/queue.ts:19](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/queue/queue.ts#L19)

___

### peek

▸ **peek**(): *undefined* \| T

Retrieves, but does not remove, the head of this queue

**Returns:** *undefined* \| T

The value at the head of the queue or `undefined` if this queue is empty.

Defined in: [structures/queue/queue.ts:25](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/queue/queue.ts#L25)

___

### toArray

▸ **toArray**(): T[]

Convert the queue into an array

**Returns:** T[]

Defined in: [structures/queue/queue.ts:33](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/queue/queue.ts#L33)
