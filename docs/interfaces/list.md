[dastal - v1.0.0](../README.md) / List

# Interface: List<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Implemented by

* [*LinkedList*](../classes/linkedlist.md)

## Table of contents

### Properties

- [size](list.md#size)

### Methods

- [add](list.md#add)
- [clear](list.md#clear)
- [get](list.md#get)
- [push](list.md#push)
- [remove](list.md#remove)
- [set](list.md#set)
- [shift](list.md#shift)
- [toArray](list.md#toarray)
- [unshift](list.md#unshift)

## Properties

### size

• `Readonly` **size**: *number*

The number of elements in this list

Defined in: [structures/list/list.ts:53](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/list/list.ts#L53)

## Methods

### add

▸ **add**(`index`: *number*, `element`: T): *boolean*

Add the element at the specified index

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | *number* | The index to add into |
| `element` | T | The element to add |

**Returns:** *boolean*

Defined in: [structures/list/list.ts:8](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/list/list.ts#L8)

___

### clear

▸ **clear**(): *void*

Removes all elements

**Returns:** *void*

Defined in: [structures/list/list.ts:12](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/list/list.ts#L12)

___

### get

▸ **get**(`index`: *number*): *undefined* \| T

Return the element at the specified index

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | *number* | The index to retrieve |

**Returns:** *undefined* \| T

Defined in: [structures/list/list.ts:18](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/list/list.ts#L18)

___

### push

▸ **push**(`element`: T): *boolean*

Inserts the specified value into the end of the list

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | T | The element to be inserted |

**Returns:** *boolean*

`true` upon success, otherwise `false`

Defined in: [structures/list/list.ts:26](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/list/list.ts#L26)

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

Defined in: [structures/list/list.ts:34](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/list/list.ts#L34)

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

Defined in: [structures/list/list.ts:43](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/list/list.ts#L43)

___

### shift

▸ **shift**(): *undefined* \| T

Retrieves and removes the first element in the list

**Returns:** *undefined* \| T

The value at the front of the list or `undefined` if this list is empty.

Defined in: [structures/list/list.ts:49](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/list/list.ts#L49)

___

### toArray

▸ **toArray**(): T[]

Converts the list into an array

**Returns:** T[]

Defined in: [structures/list/list.ts:57](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/list/list.ts#L57)

___

### unshift

▸ **unshift**(`element`: T): *boolean*

Inserts the specified value into the front of the list

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | T | The element to be inserted |

**Returns:** *boolean*

`true` upon success, otherwise `false`

Defined in: [structures/list/list.ts:65](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/list/list.ts#L65)
