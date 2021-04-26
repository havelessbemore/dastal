[dastal - v1.0.0](../README.md) / ArrayStack

# Class: ArrayStack<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

* [*Stack*](../interfaces/stack.md)<T\>

## Table of contents

### Constructors

- [constructor](arraystack.md#constructor)

### Properties

- [array](arraystack.md#array)

### Accessors

- [size](arraystack.md#size)

### Methods

- [clear](arraystack.md#clear)
- [peek](arraystack.md#peek)
- [pop](arraystack.md#pop)
- [push](arraystack.md#push)
- [toArray](arraystack.md#toarray)

## Constructors

### constructor

\+ **new ArrayStack**<T\>(`array?`: T[]): [*ArrayStack*](arraystack.md)<T\>

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type | Default value |
| :------ | :------ | :------ |
| `array` | T[] | [] |

**Returns:** [*ArrayStack*](arraystack.md)<T\>

Defined in: [structures/stack/arrayStack.ts:3](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/stack/arrayStack.ts#L3)

## Properties

### array

• `Protected` **array**: T[]= []

## Accessors

### size

• get **size**(): *number*

The number of elements in the stack

**Returns:** *number*

Implementation of: [Stack](../interfaces/stack.md).[size](../interfaces/stack.md#size)

Defined in: [structures/stack/arrayStack.ts:41](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/stack/arrayStack.ts#L41)

## Methods

### clear

▸ **clear**(): *void*

Removes all elements from the stack

**Returns:** *void*

Implementation of: [Stack](../interfaces/stack.md)

Defined in: [structures/stack/arrayStack.ts:8](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/stack/arrayStack.ts#L8)

___

### peek

▸ **peek**(): *undefined* \| T

Retrieves, but does not remove, the top of the stack

**Returns:** *undefined* \| T

The value at the top of the stack or `undefined` if empty.

Implementation of: [Stack](../interfaces/stack.md)

Defined in: [structures/stack/arrayStack.ts:16](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/stack/arrayStack.ts#L16)

___

### pop

▸ **pop**(): *undefined* \| T

Retrieves and removes the top of the stack

**Returns:** *undefined* \| T

The value at the top of the stack or `undefined` if empty.

Implementation of: [Stack](../interfaces/stack.md)

Defined in: [structures/stack/arrayStack.ts:24](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/stack/arrayStack.ts#L24)

___

### push

▸ **push**(`element`: T): *boolean*

Inserts a value into the stack

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | T | The value to be inserted |

**Returns:** *boolean*

`true` upon success, otherwise `false`

Implementation of: [Stack](../interfaces/stack.md)

Defined in: [structures/stack/arrayStack.ts:34](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/stack/arrayStack.ts#L34)

___

### toArray

▸ **toArray**(): T[]

Convert the stack into an array

**Returns:** T[]

Implementation of: [Stack](../interfaces/stack.md)

Defined in: [structures/stack/arrayStack.ts:47](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/stack/arrayStack.ts#L47)
