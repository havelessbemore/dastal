[dastal - v1.0.0](../README.md) / Stack

# Interface: Stack<T\>

An ordered collection of elements in LIFO (last-in-first-out) order.

Typically LIFO refers to the insertion order of elements. However, it
can refer to other types of ordering via a different implementation or a given comparator.
FIFO stacks (e.g. queues) order elements in first-in-first-out order.

Regardless, a call to pop() should return the last element relative to its order.
Every implementation should specify its ordering properties. Otherwise, insertion order should be used.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

* *Iterable*<T\>

  ↳ **Stack**

## Implemented by

* [*ArrayStack*](../classes/arraystack.md)
* [*LinkedStack*](../classes/linkedstack.md)

## Table of contents

### Properties

- [size](stack.md#size)

### Methods

- [[Symbol.iterator]](stack.md#[symbol.iterator])
- [clear](stack.md#clear)
- [peek](stack.md#peek)
- [pop](stack.md#pop)
- [push](stack.md#push)

## Properties

### size

• `Readonly` **size**: *number*

The number of elements in the stack

Defined in: [src/stack/stack.ts:39](https://github.com/havelessbemore/dastal/blob/4d87fc5/src/stack/stack.ts#L39)

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator*<T, any, undefined\>

**Returns:** *Iterator*<T, any, undefined\>

Inherited from: Iterable.\_\_@iterator

Defined in: node_modules/typescript/lib/lib.es2015.iterable.d.ts:51

___

### clear

▸ **clear**(): *void*

Removes all elements from the stack

**Returns:** *void*

Defined in: [src/stack/stack.ts:15](https://github.com/havelessbemore/dastal/blob/4d87fc5/src/stack/stack.ts#L15)

___

### peek

▸ **peek**(): *undefined* \| T

Retrieves, but does not remove, the top of the stack

**Returns:** *undefined* \| T

The element at the top of the stack or `undefined` if empty.

Defined in: [src/stack/stack.ts:21](https://github.com/havelessbemore/dastal/blob/4d87fc5/src/stack/stack.ts#L21)

___

### pop

▸ **pop**(): *undefined* \| T

Retrieves and removes the top of the stack

**Returns:** *undefined* \| T

The element at the top of the stack or `undefined` if empty.

Defined in: [src/stack/stack.ts:27](https://github.com/havelessbemore/dastal/blob/4d87fc5/src/stack/stack.ts#L27)

___

### push

▸ **push**(`element`: T): *number*

Inserts an element into the stack

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | T | The element to be inserted |

**Returns:** *number*

The new size of the stack

Defined in: [src/stack/stack.ts:35](https://github.com/havelessbemore/dastal/blob/4d87fc5/src/stack/stack.ts#L35)