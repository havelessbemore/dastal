[dastal - v1.0.0](../README.md) / ListStack

# Class: ListStack<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

* [*Stack*](../interfaces/stack.md)<T\>

## Table of contents

### Constructors

- [constructor](liststack.md#constructor)

### Properties

- [list](liststack.md#list)

### Accessors

- [size](liststack.md#size)

### Methods

- [clear](liststack.md#clear)
- [peek](liststack.md#peek)
- [pop](liststack.md#pop)
- [push](liststack.md#push)
- [toArray](liststack.md#toarray)

## Constructors

### constructor

\+ **new ListStack**<T\>(`list?`: [*List*](../interfaces/list.md)<T\>): [*ListStack*](liststack.md)<T\>

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type |
| :------ | :------ |
| `list` | [*List*](../interfaces/list.md)<T\> |

**Returns:** [*ListStack*](liststack.md)<T\>

Defined in: [structures/stack/listStack.ts:4](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/stack/listStack.ts#L4)

## Properties

### list

• `Protected` **list**: [*List*](../interfaces/list.md)<T\>

## Accessors

### size

• get **size**(): *number*

The number of elements in the stack

**Returns:** *number*

Implementation of: [Stack](../interfaces/stack.md).[size](../interfaces/stack.md#size)

Defined in: [structures/stack/listStack.ts:41](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/stack/listStack.ts#L41)

## Methods

### clear

▸ **clear**(): *void*

Removes all elements from the stack

**Returns:** *void*

Implementation of: [Stack](../interfaces/stack.md)

Defined in: [structures/stack/listStack.ts:9](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/stack/listStack.ts#L9)

___

### peek

▸ **peek**(): *undefined* \| T

Retrieves, but does not remove, the top of the stack

**Returns:** *undefined* \| T

The value at the top of the stack or `undefined` if empty.

Implementation of: [Stack](../interfaces/stack.md)

Defined in: [structures/stack/listStack.ts:17](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/stack/listStack.ts#L17)

___

### pop

▸ **pop**(): *undefined* \| T

Retrieves and removes the top of the stack

**Returns:** *undefined* \| T

The value at the top of the stack or `undefined` if empty.

Implementation of: [Stack](../interfaces/stack.md)

Defined in: [structures/stack/listStack.ts:25](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/stack/listStack.ts#L25)

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

Defined in: [structures/stack/listStack.ts:35](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/stack/listStack.ts#L35)

___

### toArray

▸ **toArray**(): T[]

Convert the stack into an array

**Returns:** T[]

Implementation of: [Stack](../interfaces/stack.md)

Defined in: [structures/stack/listStack.ts:47](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/stack/listStack.ts#L47)
