[dastal - v5.0.0](../README.md) / LinkedStack

# Class: LinkedStack<T\>

A linked list implementation of the [Stack](../interfaces/stack.md) interface

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- [Stack](../interfaces/stack.md)<T\>

## Table of contents

### Constructors

- [constructor](linkedstack.md#constructor)

### Accessors

- [size](linkedstack.md#size)

### Methods

- [[iterator]](linkedstack.md#[iterator])
- [clear](linkedstack.md#clear)
- [peek](linkedstack.md#peek)
- [pop](linkedstack.md#pop)
- [push](linkedstack.md#push)

## Constructors

### constructor

• **new LinkedStack**<T\>(`elements?`)

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

[src/stack/linkedStack.ts:11](https://github.com/havelessbemore/dastal/blob/eccb3d4/src/stack/linkedStack.ts#L11)

## Accessors

### size

• `get` **size**(): `number`

The number of elements in the collection.

#### Returns

`number`

#### Implementation of

[Stack](../interfaces/stack.md).[size](../interfaces/stack.md#size)

#### Defined in

[src/stack/linkedStack.ts:40](https://github.com/havelessbemore/dastal/blob/eccb3d4/src/stack/linkedStack.ts#L40)

## Methods

### [iterator]

▸ **[iterator]**(): `Iterator`<T, any, undefined\>

Receive an iterator through the stack.

**Note:** Unexpected behavior can occur if the collection is modified during iteration.

#### Returns

`Iterator`<T, any, undefined\>

An iterator through the stack

#### Implementation of

[Stack](../interfaces/stack.md).[[iterator]](../interfaces/stack.md#[iterator])

#### Defined in

[src/stack/linkedStack.ts:50](https://github.com/havelessbemore/dastal/blob/eccb3d4/src/stack/linkedStack.ts#L50)

___

### clear

▸ **clear**(): `void`

Removes all elements.

#### Returns

`void`

#### Implementation of

[Stack](../interfaces/stack.md).[clear](../interfaces/stack.md#clear)

#### Defined in

[src/stack/linkedStack.ts:24](https://github.com/havelessbemore/dastal/blob/eccb3d4/src/stack/linkedStack.ts#L24)

___

### peek

▸ **peek**(): `undefined` \| `T`

Retrieves, but does not remove, the top of the stack

#### Returns

`undefined` \| `T`

#### Implementation of

[Stack](../interfaces/stack.md).[peek](../interfaces/stack.md#peek)

#### Defined in

[src/stack/linkedStack.ts:28](https://github.com/havelessbemore/dastal/blob/eccb3d4/src/stack/linkedStack.ts#L28)

___

### pop

▸ **pop**(): `undefined` \| `T`

Retrieves and removes the top of the stack

#### Returns

`undefined` \| `T`

#### Implementation of

[Stack](../interfaces/stack.md).[pop](../interfaces/stack.md#pop)

#### Defined in

[src/stack/linkedStack.ts:32](https://github.com/havelessbemore/dastal/blob/eccb3d4/src/stack/linkedStack.ts#L32)

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

[src/stack/linkedStack.ts:36](https://github.com/havelessbemore/dastal/blob/eccb3d4/src/stack/linkedStack.ts#L36)
