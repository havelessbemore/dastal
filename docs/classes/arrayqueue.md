[dastal - v5.0.0](../README.md) / ArrayQueue

# Class: ArrayQueue<T\>

An implementation of the [Queue](../interfaces/queue.md) interface using an array

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- [Queue](../interfaces/queue.md)<T\>

## Table of contents

### Constructors

- [constructor](arrayqueue.md#constructor)

### Accessors

- [size](arrayqueue.md#size)

### Methods

- [[iterator]](arrayqueue.md#[iterator])
- [clear](arrayqueue.md#clear)
- [dequeue](arrayqueue.md#dequeue)
- [enqueue](arrayqueue.md#enqueue)
- [peek](arrayqueue.md#peek)

## Constructors

### constructor

• **new ArrayQueue**<T\>(`elements?`)

Instantiate the queue.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `elements?` | `Iterable`<T\> | A set of elements to initialize the queue with. |

#### Defined in

[src/queue/arrayQueue.ts:10](https://github.com/havelessbemore/dastal/blob/7d85137/src/queue/arrayQueue.ts#L10)

## Accessors

### size

• `get` **size**(): `number`

The number of elements in the collection.

#### Returns

`number`

#### Implementation of

[Queue](../interfaces/queue.md).[size](../interfaces/queue.md#size)

#### Defined in

[src/queue/arrayQueue.ts:36](https://github.com/havelessbemore/dastal/blob/7d85137/src/queue/arrayQueue.ts#L36)

## Methods

### [iterator]

▸ **[iterator]**(): `Iterator`<T, any, undefined\>

Receive an iterator through the queue.

**Note:** Unexpected behavior can occur if the collection is modified during iteration.

#### Returns

`Iterator`<T, any, undefined\>

An iterator through the queue

#### Implementation of

[Queue](../interfaces/queue.md).[[iterator]](../interfaces/queue.md#[iterator])

#### Defined in

[src/queue/arrayQueue.ts:46](https://github.com/havelessbemore/dastal/blob/7d85137/src/queue/arrayQueue.ts#L46)

___

### clear

▸ **clear**(): `void`

Removes all elements.

#### Returns

`void`

#### Implementation of

[Queue](../interfaces/queue.md).[clear](../interfaces/queue.md#clear)

#### Defined in

[src/queue/arrayQueue.ts:20](https://github.com/havelessbemore/dastal/blob/7d85137/src/queue/arrayQueue.ts#L20)

___

### dequeue

▸ **dequeue**(): `undefined` \| `T`

Retrieves and removes the head of this queue

#### Returns

`undefined` \| `T`

#### Implementation of

[Queue](../interfaces/queue.md).[dequeue](../interfaces/queue.md#dequeue)

#### Defined in

[src/queue/arrayQueue.ts:24](https://github.com/havelessbemore/dastal/blob/7d85137/src/queue/arrayQueue.ts#L24)

___

### enqueue

▸ **enqueue**(`element`): `number`

Inserts the specified value into this queue

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `T` |

#### Returns

`number`

#### Implementation of

[Queue](../interfaces/queue.md).[enqueue](../interfaces/queue.md#enqueue)

#### Defined in

[src/queue/arrayQueue.ts:28](https://github.com/havelessbemore/dastal/blob/7d85137/src/queue/arrayQueue.ts#L28)

___

### peek

▸ **peek**(): `undefined` \| `T`

Retrieves, but does not remove, the head of this queue

#### Returns

`undefined` \| `T`

#### Implementation of

[Queue](../interfaces/queue.md).[peek](../interfaces/queue.md#peek)

#### Defined in

[src/queue/arrayQueue.ts:32](https://github.com/havelessbemore/dastal/blob/7d85137/src/queue/arrayQueue.ts#L32)
