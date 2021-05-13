[dastal - v1.0.0](../README.md) / List

# Interface: List<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

* *Iterable*<T\>

  ↳ **List**

## Implemented by

* [*ArrayList*](../classes/arraylist.md)
* [*DoublyLinkedList*](../classes/doublylinkedlist.md)
* [*LinkedList*](../classes/linkedlist.md)

## Table of contents

### Properties

- [size](list.md#size)

### Methods

- [[Symbol.iterator]](list.md#[symbol.iterator])
- [add](list.md#add)
- [clear](list.md#clear)
- [get](list.md#get)
- [getSet](list.md#getset)
- [pop](list.md#pop)
- [push](list.md#push)
- [remove](list.md#remove)
- [set](list.md#set)
- [shift](list.md#shift)
- [unshift](list.md#unshift)

## Properties

### size

• `Readonly` **size**: *number*

The number of elements in this list

Defined in: [src/list/list.ts:66](https://github.com/havelessbemore/dastal/blob/7516240/src/list/list.ts#L66)

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator*<T, any, undefined\>

**Returns:** *Iterator*<T, any, undefined\>

Inherited from: Iterable.\_\_@iterator

Defined in: node_modules/typescript/lib/lib.es2015.iterable.d.ts:51

___

### add

▸ **add**(`index`: *number*, `element`: T): *boolean*

Add the element at the specified index

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | *number* | The index to add into |
| `element` | T | The element to add |

**Returns:** *boolean*

Defined in: [src/list/list.ts:8](https://github.com/havelessbemore/dastal/blob/7516240/src/list/list.ts#L8)

___

### clear

▸ **clear**(): *void*

Removes all elements

**Returns:** *void*

Defined in: [src/list/list.ts:12](https://github.com/havelessbemore/dastal/blob/7516240/src/list/list.ts#L12)

___

### get

▸ **get**(`index`: *number*): *undefined* \| T

Return the element at the specified index

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | *number* | The index to retrieve |

**Returns:** *undefined* \| T

Defined in: [src/list/list.ts:18](https://github.com/havelessbemore/dastal/blob/7516240/src/list/list.ts#L18)

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

Defined in: [src/list/list.ts:25](https://github.com/havelessbemore/dastal/blob/7516240/src/list/list.ts#L25)

___

### pop

▸ **pop**(): *undefined* \| T

Retrieves and removes the end of the list

**Returns:** *undefined* \| T

The value at the end of the list or `undefined` if empty.

Defined in: [src/list/list.ts:31](https://github.com/havelessbemore/dastal/blob/7516240/src/list/list.ts#L31)

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

Defined in: [src/list/list.ts:39](https://github.com/havelessbemore/dastal/blob/7516240/src/list/list.ts#L39)

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

Defined in: [src/list/list.ts:47](https://github.com/havelessbemore/dastal/blob/7516240/src/list/list.ts#L47)

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

Defined in: [src/list/list.ts:56](https://github.com/havelessbemore/dastal/blob/7516240/src/list/list.ts#L56)

___

### shift

▸ **shift**(): *undefined* \| T

Retrieves and removes the first element in the list

**Returns:** *undefined* \| T

The value at the front of the list or `undefined` if this list is empty.

Defined in: [src/list/list.ts:62](https://github.com/havelessbemore/dastal/blob/7516240/src/list/list.ts#L62)

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

Defined in: [src/list/list.ts:74](https://github.com/havelessbemore/dastal/blob/7516240/src/list/list.ts#L74)
