[dastal - v1.0.0](../README.md) / LinkedList

# Class: LinkedList<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

* [*List*](../interfaces/list.md)<T\>

## Table of contents

### Constructors

- [constructor](linkedlist.md#constructor)

### Properties

- [length](linkedlist.md#length)
- [tail](linkedlist.md#tail)

### Accessors

- [size](linkedlist.md#size)

### Methods

- [[Symbol.iterator]](linkedlist.md#[symbol.iterator])
- [\_get](linkedlist.md#_get)
- [add](linkedlist.md#add)
- [clear](linkedlist.md#clear)
- [get](linkedlist.md#get)
- [getSet](linkedlist.md#getset)
- [pop](linkedlist.md#pop)
- [push](linkedlist.md#push)
- [remove](linkedlist.md#remove)
- [set](linkedlist.md#set)
- [shift](linkedlist.md#shift)
- [unshift](linkedlist.md#unshift)

## Constructors

### constructor

\+ **new LinkedList**<T\>(): [*LinkedList*](linkedlist.md)<T\>

#### Type parameters:

| Name |
| :------ |
| `T` |

**Returns:** [*LinkedList*](linkedlist.md)<T\>

Defined in: [src/list/linkedList.ts:10](https://github.com/havelessbemore/dastal/blob/7516240/src/list/linkedList.ts#L10)

## Properties

### length

• `Protected` **length**: *number*

Defined in: [src/list/linkedList.ts:9](https://github.com/havelessbemore/dastal/blob/7516240/src/list/linkedList.ts#L9)

___

### tail

• `Protected` `Optional` **tail**: [*LinkedNode*](../interfaces/linkednode.md)<T\>

Defined in: [src/list/linkedList.ts:10](https://github.com/havelessbemore/dastal/blob/7516240/src/list/linkedList.ts#L10)

## Accessors

### size

• get **size**(): *number*

The number of elements in this list

**Returns:** *number*

Implementation of: [List](../interfaces/list.md).[size](../interfaces/list.md#size)

Defined in: [src/list/linkedList.ts:145](https://github.com/havelessbemore/dastal/blob/7516240/src/list/linkedList.ts#L145)

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator*<T, any, undefined\>

Receive an iterator through the list

**Returns:** *Iterator*<T, any, undefined\>

An iterator through the list

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:154](https://github.com/havelessbemore/dastal/blob/7516240/src/list/linkedList.ts#L154)

___

### \_get

▸ `Protected`**_get**(`index`: *number*): [*LinkedNode*](../interfaces/linkednode.md)<T\>

#### Parameters:

| Name | Type |
| :------ | :------ |
| `index` | *number* |

**Returns:** [*LinkedNode*](../interfaces/linkednode.md)<T\>

Defined in: [src/list/linkedList.ts:184](https://github.com/havelessbemore/dastal/blob/7516240/src/list/linkedList.ts#L184)

___

### add

▸ **add**(`index`: *number*, `value`: T): *boolean*

Add the element at the specified index

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | *number* | The index to add into |
| `value` | T | - |

**Returns:** *boolean*

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:22](https://github.com/havelessbemore/dastal/blob/7516240/src/list/linkedList.ts#L22)

___

### clear

▸ **clear**(): *void*

Removes all elements

**Returns:** *void*

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:35](https://github.com/havelessbemore/dastal/blob/7516240/src/list/linkedList.ts#L35)

___

### get

▸ **get**(`index`: *number*): *undefined* \| T

Return the element at the specified index

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | *number* | The index to retrieve |

**Returns:** *undefined* \| T

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:45](https://github.com/havelessbemore/dastal/blob/7516240/src/list/linkedList.ts#L45)

___

### getSet

▸ **getSet**(`index`: *number*, `callback`: (`element`: T) => T): *void*

Update the element at the specified index

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | *number* | The index to retrieve |
| `callback` | (`element`: T) => T | A function that receives the previous element and returns the new element |

**Returns:** *void*

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:55](https://github.com/havelessbemore/dastal/blob/7516240/src/list/linkedList.ts#L55)

___

### pop

▸ **pop**(): *undefined* \| T

Retrieves and removes the end of the list

**Returns:** *undefined* \| T

The value at the end of the list or `undefined` if empty.

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:67](https://github.com/havelessbemore/dastal/blob/7516240/src/list/linkedList.ts#L67)

___

### push

▸ **push**(`value`: T): *boolean*

Inserts the specified value into the end of the list

#### Parameters:

| Name | Type |
| :------ | :------ |
| `value` | T |

**Returns:** *boolean*

`true` upon success, otherwise `false`

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:78](https://github.com/havelessbemore/dastal/blob/7516240/src/list/linkedList.ts#L78)

___

### remove

▸ **remove**(`index`: *number*): *undefined* \| T

Retrieves and removes the element at the given index

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | *number* | The index to remove |

**Returns:** *undefined* \| T

The value at the index or `undefined` if the index does not exist

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:91](https://github.com/havelessbemore/dastal/blob/7516240/src/list/linkedList.ts#L91)

___

### set

▸ **set**(`index`: *number*, `element`: T): *undefined* \| T

Update the element at the specified index

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | *number* | The index to retrieve |
| `element` | T | The new element to insert at index |

**Returns:** *undefined* \| T

The previous element in the index, or undefined if the index does not exist

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:113](https://github.com/havelessbemore/dastal/blob/7516240/src/list/linkedList.ts#L113)

___

### shift

▸ **shift**(): *undefined* \| T

Retrieves and removes the first element in the list

**Returns:** *undefined* \| T

The value at the front of the list or `undefined` if this list is empty.

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:128](https://github.com/havelessbemore/dastal/blob/7516240/src/list/linkedList.ts#L128)

___

### unshift

▸ **unshift**(`value`: T): *boolean*

Inserts the specified value into the front of the list

#### Parameters:

| Name | Type |
| :------ | :------ |
| `value` | T |

**Returns:** *boolean*

`true` upon success, otherwise `false`

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:169](https://github.com/havelessbemore/dastal/blob/7516240/src/list/linkedList.ts#L169)
