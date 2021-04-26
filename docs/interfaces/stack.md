[dastal - v1.0.0](../README.md) / Stack

# Interface: Stack<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Implemented by

* [*ArrayStack*](../classes/arraystack.md)
* [*ListStack*](../classes/liststack.md)

## Table of contents

### Properties

- [size](stack.md#size)

### Methods

- [clear](stack.md#clear)
- [peek](stack.md#peek)
- [pop](stack.md#pop)
- [push](stack.md#push)
- [toArray](stack.md#toarray)

## Properties

### size

• `Readonly` **size**: *number*

The number of elements in the stack

Defined in: [structures/stack/stack.ts:29](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/stack/stack.ts#L29)

## Methods

### clear

▸ **clear**(): *void*

Removes all elements from the stack

**Returns:** *void*

Defined in: [structures/stack/stack.ts:5](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/stack/stack.ts#L5)

___

### peek

▸ **peek**(): *undefined* \| T

Retrieves, but does not remove, the top of the stack

**Returns:** *undefined* \| T

The value at the top of the stack or `undefined` if empty.

Defined in: [structures/stack/stack.ts:11](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/stack/stack.ts#L11)

___

### pop

▸ **pop**(): *undefined* \| T

Retrieves and removes the top of the stack

**Returns:** *undefined* \| T

The value at the top of the stack or `undefined` if empty.

Defined in: [structures/stack/stack.ts:17](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/stack/stack.ts#L17)

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

Defined in: [structures/stack/stack.ts:25](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/stack/stack.ts#L25)

___

### toArray

▸ **toArray**(): T[]

Convert the stack into an array

**Returns:** T[]

Defined in: [structures/stack/stack.ts:33](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/stack/stack.ts#L33)
