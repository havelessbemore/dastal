[dastal - v1.3.0](../README.md) / LinkedStack

# Class: LinkedStack<T\>

A linked list implementation of the [Stack](../interfaces/stack.md) interface

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

* [*Stack*](../interfaces/stack.md)<T\>

## Table of contents

### Constructors

- [constructor](linkedstack.md#constructor)

### Accessors

- [size](linkedstack.md#size)

### Methods

- [[Symbol.iterator]](linkedstack.md#[symbol.iterator])
- [clear](linkedstack.md#clear)
- [peek](linkedstack.md#peek)
- [pop](linkedstack.md#pop)
- [push](linkedstack.md#push)

## Constructors

### constructor

\+ **new LinkedStack**<T\>(`elements?`: *Iterable*<T\>): [*LinkedStack*](linkedstack.md)<T\>

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type |
| :------ | :------ |
| `elements?` | *Iterable*<T\> |

**Returns:** [*LinkedStack*](linkedstack.md)<T\>

Defined in: [src/stack/linkedStack.ts:11](https://github.com/havelessbemore/dastal/blob/cb5e8f6/src/stack/linkedStack.ts#L11)

## Accessors

### size

• get **size**(): *number*

The number of elements in the stack

**Returns:** *number*

Implementation of: [Stack](../interfaces/stack.md).[size](../interfaces/stack.md#size)

Defined in: [src/stack/linkedStack.ts:54](https://github.com/havelessbemore/dastal/blob/cb5e8f6/src/stack/linkedStack.ts#L54)

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator*<T, any, undefined\>

Receive an iterator through the stack.

**Note:** Unexpected behavior can occur if the collection is modified during iteration.

**Returns:** *Iterator*<T, any, undefined\>

An iterator through the stack

Implementation of: [Stack](../interfaces/stack.md)

Defined in: [src/stack/linkedStack.ts:64](https://github.com/havelessbemore/dastal/blob/cb5e8f6/src/stack/linkedStack.ts#L64)

___

### clear

▸ **clear**(): *void*

Removes all elements from the stack

**Returns:** *void*

Implementation of: [Stack](../interfaces/stack.md)

Defined in: [src/stack/linkedStack.ts:22](https://github.com/havelessbemore/dastal/blob/cb5e8f6/src/stack/linkedStack.ts#L22)

___

### peek

▸ **peek**(): *undefined* \| T

Retrieves, but does not remove, the top of the stack

**Returns:** *undefined* \| T

The element at the top of the stack or `undefined` if empty.

Implementation of: [Stack](../interfaces/stack.md)

Defined in: [src/stack/linkedStack.ts:30](https://github.com/havelessbemore/dastal/blob/cb5e8f6/src/stack/linkedStack.ts#L30)

___

### pop

▸ **pop**(): *undefined* \| T

Retrieves and removes the top of the stack

**Returns:** *undefined* \| T

The element at the top of the stack or `undefined` if empty.

Implementation of: [Stack](../interfaces/stack.md)

Defined in: [src/stack/linkedStack.ts:38](https://github.com/havelessbemore/dastal/blob/cb5e8f6/src/stack/linkedStack.ts#L38)

___

### push

▸ **push**(`element`: T): *number*

Inserts a element into the stack

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | T | The element to be inserted |

**Returns:** *number*

The new size of the stack

Implementation of: [Stack](../interfaces/stack.md)

Defined in: [src/stack/linkedStack.ts:48](https://github.com/havelessbemore/dastal/blob/cb5e8f6/src/stack/linkedStack.ts#L48)
