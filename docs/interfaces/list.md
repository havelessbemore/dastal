[dastal - v1.0.0](../README.md) / List

# Interface: List<T\>

An ordered collection (also known as a sequence). A list allows exactly stating where an element is inserted.

Elements can be accessed by their integer index (position in the list)

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

Defined in: [src/list/list.ts:78](https://github.com/havelessbemore/dastal/blob/4d87fc5/src/list/list.ts#L78)

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator*<T, any, undefined\>

**Returns:** *Iterator*<T, any, undefined\>

Inherited from: Iterable.\_\_@iterator

Defined in: node_modules/typescript/lib/lib.es2015.iterable.d.ts:51

___

### add

▸ **add**(`index`: *number*, `element`: T): *number*

Add the element at the specified index

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | *number* | The index to add into |
| `element` | T | The element to add |

**Returns:** *number*

The new size of the list

Defined in: [src/list/list.ts:15](https://github.com/havelessbemore/dastal/blob/4d87fc5/src/list/list.ts#L15)

___

### clear

▸ **clear**(): *void*

Removes all elements

**Returns:** *void*

Defined in: [src/list/list.ts:19](https://github.com/havelessbemore/dastal/blob/4d87fc5/src/list/list.ts#L19)

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

Defined in: [src/list/list.ts:27](https://github.com/havelessbemore/dastal/blob/4d87fc5/src/list/list.ts#L27)

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

Defined in: [src/list/list.ts:37](https://github.com/havelessbemore/dastal/blob/4d87fc5/src/list/list.ts#L37)

___

### pop

▸ **pop**(): *undefined* \| T

Retrieves and removes the end of the list

**Returns:** *undefined* \| T

The value at the end of the list, or `undefined` if empty.

Defined in: [src/list/list.ts:43](https://github.com/havelessbemore/dastal/blob/4d87fc5/src/list/list.ts#L43)

___

### push

▸ **push**(`element`: T): *number*

Inserts the specified value into the end of the list

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | T | The element to be inserted |

**Returns:** *number*

The new size of the list

Defined in: [src/list/list.ts:51](https://github.com/havelessbemore/dastal/blob/4d87fc5/src/list/list.ts#L51)

___

### remove

▸ **remove**(`index`: *number*): *undefined* \| T

Retrieves and removes the element at the given index

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | *number* | The index to remove |

**Returns:** *undefined* \| T

The value at the index, or `undefined` if the index is invalid

Defined in: [src/list/list.ts:59](https://github.com/havelessbemore/dastal/blob/4d87fc5/src/list/list.ts#L59)

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

Defined in: [src/list/list.ts:68](https://github.com/havelessbemore/dastal/blob/4d87fc5/src/list/list.ts#L68)

___

### shift

▸ **shift**(): *undefined* \| T

Retrieves and removes the first element in the list

**Returns:** *undefined* \| T

The value at the front of the list or `undefined` if this list is empty.

Defined in: [src/list/list.ts:74](https://github.com/havelessbemore/dastal/blob/4d87fc5/src/list/list.ts#L74)

___

### unshift

▸ **unshift**(`element`: T): *number*

Inserts the specified value into the front of the list

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | T | The element to be inserted |

**Returns:** *number*

The new size of the list

Defined in: [src/list/list.ts:86](https://github.com/havelessbemore/dastal/blob/4d87fc5/src/list/list.ts#L86)
