[dastal - v1.0.0](../README.md) / Queue

# Interface: Queue<T\>

An ordered collection of elements in FIFO (first-in-first-out) order.

Typically FIFO refers to the insertion order of elements. However, it
can refer to other types of ordering. For example, priority queues order elements
over the elements natural ordering (e.g. 2 before 4) or according to a given comparator.
LIFO queues (e.g. stacks) order elements in last-in-first-out order.

Regardless, a call to dequeue() should return the first element relative to its order.
Every implementation should specify its ordering properties. Otherwise, insertion order should be used.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

* *Iterable*<T\>

  ↳ **Queue**

## Implemented by

* [*ArrayQueue*](../classes/arrayqueue.md)
* [*LinkedQueue*](../classes/linkedqueue.md)

## Table of contents

### Properties

- [size](queue.md#size)

### Methods

- [[Symbol.iterator]](queue.md#[symbol.iterator])
- [clear](queue.md#clear)
- [dequeue](queue.md#dequeue)
- [enqueue](queue.md#enqueue)
- [peek](queue.md#peek)

## Properties

### size

• `Readonly` **size**: *number*

The number of elements in this queue

Defined in: [src/queue/queue.ts:40](https://github.com/havelessbemore/dastal/blob/4d87fc5/src/queue/queue.ts#L40)

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator*<T, any, undefined\>

**Returns:** *Iterator*<T, any, undefined\>

Inherited from: Iterable.\_\_@iterator

Defined in: node_modules/typescript/lib/lib.es2015.iterable.d.ts:51

___

### clear

▸ **clear**(): *void*

Removes all elements from this queue

**Returns:** *void*

Defined in: [src/queue/queue.ts:16](https://github.com/havelessbemore/dastal/blob/4d87fc5/src/queue/queue.ts#L16)

___

### dequeue

▸ **dequeue**(): *undefined* \| T

Retrieves and removes the head of this queue

**Returns:** *undefined* \| T

The value at the head of the queue or `undefined` if this queue is empty.

Defined in: [src/queue/queue.ts:22](https://github.com/havelessbemore/dastal/blob/4d87fc5/src/queue/queue.ts#L22)

___

### enqueue

▸ **enqueue**(`element`: T): *number*

Inserts the specified value into this queue

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | T | The element to be inserted |

**Returns:** *number*

The new size of the queue

Defined in: [src/queue/queue.ts:30](https://github.com/havelessbemore/dastal/blob/4d87fc5/src/queue/queue.ts#L30)

___

### peek

▸ **peek**(): *undefined* \| T

Retrieves, but does not remove, the head of this queue

**Returns:** *undefined* \| T

The value at the head of the queue or `undefined` if this queue is empty.

Defined in: [src/queue/queue.ts:36](https://github.com/havelessbemore/dastal/blob/4d87fc5/src/queue/queue.ts#L36)