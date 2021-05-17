[dastal - v1.0.0](../README.md) / LinkedList

# Class: LinkedList<T\>

A (circular) linked list implementation of the [List](../interfaces/list.md) interface.

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

* [*List*](../interfaces/list.md)<T\>

## Table of contents

### Constructors

- [constructor](linkedlist.md#constructor)

### Accessors

- [size](linkedlist.md#size)

### Methods

- [[Symbol.iterator]](linkedlist.md#[symbol.iterator])
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

\+ **new LinkedList**<T\>(`elements?`: *Iterable*<T\>): [*LinkedList*](linkedlist.md)<T\>

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type |
| :------ | :------ |
| `elements?` | *Iterable*<T\> |

**Returns:** [*LinkedList*](linkedlist.md)<T\>

Defined in: [src/list/linkedList.ts:29](https://github.com/havelessbemore/dastal/blob/4d87fc5/src/list/linkedList.ts#L29)

## Accessors

### size

• get **size**(): *number*

The number of elements in this list

**Returns:** *number*

Implementation of: [List](../interfaces/list.md).[size](../interfaces/list.md#size)

Defined in: [src/list/linkedList.ts:161](https://github.com/havelessbemore/dastal/blob/4d87fc5/src/list/linkedList.ts#L161)

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator*<T, any, undefined\>

Receive an iterator through the list.

**Note:** Unexpected behavior can occur if the collection is modified during iteration.

**Returns:** *Iterator*<T, any, undefined\>

An iterator through the list

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:171](https://github.com/havelessbemore/dastal/blob/4d87fc5/src/list/linkedList.ts#L171)

___

### add

▸ **add**(`index`: *number*, `value`: T): *number*

Add the element at the specified index

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | *number* | The index to add into |
| `value` | T | - |

**Returns:** *number*

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:43](https://github.com/havelessbemore/dastal/blob/4d87fc5/src/list/linkedList.ts#L43)

___

### clear

▸ **clear**(): *void*

Removes all elements

**Returns:** *void*

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:54](https://github.com/havelessbemore/dastal/blob/4d87fc5/src/list/linkedList.ts#L54)

___

### get

▸ **get**(`index`: *number*): *undefined* \| T

Return the element at the specified index

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | *number* | The index to retrieve |

**Returns:** *undefined* \| T

The element at the index, or `undefined` if index is invalid

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:65](https://github.com/havelessbemore/dastal/blob/4d87fc5/src/list/linkedList.ts#L65)

___

### getSet

▸ **getSet**(`index`: *number*, `callback`: (`element`: T) => T): *undefined* \| T

Update the element at the specified index

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | *number* | The index to retrieve |
| `callback` | (`element`: T) => T | A function that receives the previous element and returns the new element. Note: The function is only called if the index is valid |

**Returns:** *undefined* \| T

The previous element at the index, or `undefined` if index is invalid

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:77](https://github.com/havelessbemore/dastal/blob/4d87fc5/src/list/linkedList.ts#L77)

___

### pop

▸ **pop**(): *undefined* \| T

Retrieves and removes the end of the list

**Returns:** *undefined* \| T

The value at the end of the list, or `undefined` if empty.

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:91](https://github.com/havelessbemore/dastal/blob/4d87fc5/src/list/linkedList.ts#L91)

___

### push

▸ **push**(`value`: T): *number*

Inserts the specified value into the end of the list

#### Parameters:

| Name | Type |
| :------ | :------ |
| `value` | T |

**Returns:** *number*

`true` upon success, otherwise `false`

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:101](https://github.com/havelessbemore/dastal/blob/4d87fc5/src/list/linkedList.ts#L101)

___

### remove

▸ **remove**(`index`: *number*): *undefined* \| T

Retrieves and removes the element at the given index

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | *number* | The index to remove |

**Returns:** *undefined* \| T

The value at the index or `undefined` if the index is invalid

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:113](https://github.com/havelessbemore/dastal/blob/4d87fc5/src/list/linkedList.ts#L113)

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

The previous element in the index, or undefined if the index is invalid

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:133](https://github.com/havelessbemore/dastal/blob/4d87fc5/src/list/linkedList.ts#L133)

___

### shift

▸ **shift**(): *undefined* \| T

Retrieves and removes the first element in the list

**Returns:** *undefined* \| T

The value at the front of the list or `undefined` if this list is empty.

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:147](https://github.com/havelessbemore/dastal/blob/4d87fc5/src/list/linkedList.ts#L147)

___

### unshift

▸ **unshift**(`value`: T): *number*

Inserts the specified value into the front of the list

#### Parameters:

| Name | Type |
| :------ | :------ |
| `value` | T |

**Returns:** *number*

`true` upon success, otherwise `false`

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:185](https://github.com/havelessbemore/dastal/blob/4d87fc5/src/list/linkedList.ts#L185)
