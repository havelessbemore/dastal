[dastal - v1.1.0](../README.md) / ArrayStack

# Class: ArrayStack<T\>

An implementation of the [Stack](../interfaces/stack.md) interface using an array

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

* [*Stack*](../interfaces/stack.md)<T\>

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

\+ **new ArrayStack**<T\>(`elements?`: *Iterable*<T\>): [*ArrayStack*](arraystack.md)<T\>

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type |
| :------ | :------ |
| `elements?` | *Iterable*<T\> |

**Returns:** [*ArrayStack*](arraystack.md)<T\>

Defined in: [src/stack/arrayStack.ts:10](https://github.com/havelessbemore/dastal/blob/f1eca00/src/stack/arrayStack.ts#L10)

## Accessors

### size

• get **size**(): *number*

The number of elements in the stack

**Returns:** *number*

Implementation of: [Stack](../interfaces/stack.md).[size](../interfaces/stack.md#size)

Defined in: [src/stack/arrayStack.ts:50](https://github.com/havelessbemore/dastal/blob/f1eca00/src/stack/arrayStack.ts#L50)

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator*<T, any, undefined\>

Receive an iterator through the stack.

**Note:** Unexpected behavior can occur if the collection is modified during iteration.

**Returns:** *Iterator*<T, any, undefined\>

An iterator through the stack

Implementation of: [Stack](../interfaces/stack.md)

Defined in: [src/stack/arrayStack.ts:60](https://github.com/havelessbemore/dastal/blob/f1eca00/src/stack/arrayStack.ts#L60)

___

### clear

▸ **clear**(): *void*

Removes all elements from the stack

**Returns:** *void*

Implementation of: [Stack](../interfaces/stack.md)

Defined in: [src/stack/arrayStack.ts:18](https://github.com/havelessbemore/dastal/blob/f1eca00/src/stack/arrayStack.ts#L18)

___

### peek

▸ **peek**(): *undefined* \| T

Retrieves, but does not remove, the top of the stack

**Returns:** *undefined* \| T

The element at the top of the stack or `undefined` if empty.

Implementation of: [Stack](../interfaces/stack.md)

Defined in: [src/stack/arrayStack.ts:26](https://github.com/havelessbemore/dastal/blob/f1eca00/src/stack/arrayStack.ts#L26)

___

### pop

▸ **pop**(): *undefined* \| T

Retrieves and removes the top of the stack

**Returns:** *undefined* \| T

The element at the top of the stack or `undefined` if empty.

Implementation of: [Stack](../interfaces/stack.md)

Defined in: [src/stack/arrayStack.ts:34](https://github.com/havelessbemore/dastal/blob/f1eca00/src/stack/arrayStack.ts#L34)

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

Defined in: [src/stack/arrayStack.ts:44](https://github.com/havelessbemore/dastal/blob/f1eca00/src/stack/arrayStack.ts#L44)
