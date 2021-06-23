[dastal - v5.0.0](../README.md) / ArrayStack

# Class: ArrayStack<T\>

An implementation of the [Stack](../interfaces/stack.md) interface using an array

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- [Stack](../interfaces/stack.md)<T\>

## Table of contents

### Constructors

- [constructor](arraystack.md#constructor)

### Accessors

- [size](arraystack.md#size)

### Methods

- [[Symbol.iterator]](arraystack.md#[symbol.iterator])
- [clear](arraystack.md#clear)
- [peek](arraystack.md#peek)
- [pop](arraystack.md#pop)
- [push](arraystack.md#push)

## Constructors

### constructor

• **new ArrayStack**<T\>(`elements?`)

Instantiate the stack.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `elements?` | `Iterable`<T\> | A set of elements to initialize the stack with. |

#### Defined in

[src/stack/arrayStack.ts:10](https://github.com/havelessbemore/dastal/blob/93b846d/src/stack/arrayStack.ts#L10)

## Accessors

### size

• `get` **size**(): `number`

The number of elements in the collection.

#### Returns

`number`

#### Implementation of

[Stack](../interfaces/stack.md).[size](../interfaces/stack.md#size)

#### Defined in

[src/stack/arrayStack.ts:36](https://github.com/havelessbemore/dastal/blob/93b846d/src/stack/arrayStack.ts#L36)

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): `Iterator`<T, any, undefined\>

Receive an iterator through the stack.

**Note:** Unexpected behavior can occur if the collection is modified during iteration.

#### Returns

`Iterator`<T, any, undefined\>

An iterator through the stack

#### Implementation of

[Stack](../interfaces/stack.md).[[Symbol.iterator]](../interfaces/stack.md#[symbol.iterator])

#### Defined in

[src/stack/arrayStack.ts:46](https://github.com/havelessbemore/dastal/blob/93b846d/src/stack/arrayStack.ts#L46)

___

### clear

▸ **clear**(): `void`

Removes all elements.

#### Returns

`void`

#### Implementation of

[Stack](../interfaces/stack.md).[clear](../interfaces/stack.md#clear)

#### Defined in

[src/stack/arrayStack.ts:20](https://github.com/havelessbemore/dastal/blob/93b846d/src/stack/arrayStack.ts#L20)

___

### peek

▸ **peek**(): `undefined` \| `T`

Retrieves, but does not remove, the top of the stack

#### Returns

`undefined` \| `T`

#### Implementation of

[Stack](../interfaces/stack.md).[peek](../interfaces/stack.md#peek)

#### Defined in

[src/stack/arrayStack.ts:24](https://github.com/havelessbemore/dastal/blob/93b846d/src/stack/arrayStack.ts#L24)

___

### pop

▸ **pop**(): `undefined` \| `T`

Retrieves and removes the top of the stack

#### Returns

`undefined` \| `T`

#### Implementation of

[Stack](../interfaces/stack.md).[pop](../interfaces/stack.md#pop)

#### Defined in

[src/stack/arrayStack.ts:28](https://github.com/havelessbemore/dastal/blob/93b846d/src/stack/arrayStack.ts#L28)

___

### push

▸ **push**(`element`): `number`

Inserts an element into the stack

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `T` |

#### Returns

`number`

#### Implementation of

[Stack](../interfaces/stack.md).[push](../interfaces/stack.md#push)

#### Defined in

[src/stack/arrayStack.ts:32](https://github.com/havelessbemore/dastal/blob/93b846d/src/stack/arrayStack.ts#L32)
