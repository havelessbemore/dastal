[dastal - v1.0.0](../README.md) / DoublyLinkedList

# Class: DoublyLinkedList<T\>

A (circular) doubly-linked list implementation of the [List](../interfaces/list.md) interface.

Operations that index into the list will traverse the list from the beginning or the end, whichever is closer to the specified index.

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

* [*List*](../interfaces/list.md)<T\>

## Table of contents

### Constructors

- [constructor](doublylinkedlist.md#constructor)

### Accessors

- [size](doublylinkedlist.md#size)

### Methods

- [[Symbol.iterator]](doublylinkedlist.md#[symbol.iterator])
- [add](doublylinkedlist.md#add)
- [clear](doublylinkedlist.md#clear)
- [get](doublylinkedlist.md#get)
- [getSet](doublylinkedlist.md#getset)
- [pop](doublylinkedlist.md#pop)
- [push](doublylinkedlist.md#push)
- [remove](doublylinkedlist.md#remove)
- [set](doublylinkedlist.md#set)
- [shift](doublylinkedlist.md#shift)
- [unshift](doublylinkedlist.md#unshift)

## Constructors

### constructor

\+ **new DoublyLinkedList**<T\>(`elements?`: *Iterable*<T\>): [*DoublyLinkedList*](doublylinkedlist.md)<T\>

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type |
| :------ | :------ |
| `elements?` | *Iterable*<T\> |

**Returns:** [*DoublyLinkedList*](doublylinkedlist.md)<T\>

Defined in: [src/list/doublyLinkedList.ts:37](https://github.com/havelessbemore/dastal/blob/4d87fc5/src/list/doublyLinkedList.ts#L37)

## Accessors

### size

• get **size**(): *number*

The number of elements in this list

**Returns:** *number*

Implementation of: [List](../interfaces/list.md).[size](../interfaces/list.md#size)

Defined in: [src/list/doublyLinkedList.ts:177](https://github.com/havelessbemore/dastal/blob/4d87fc5/src/list/doublyLinkedList.ts#L177)

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator*<T, any, undefined\>

Receive an iterator through the list.

**Note:** Unexpected behavior can occur if the collection is modified during iteration.

**Returns:** *Iterator*<T, any, undefined\>

An iterator through the list

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/doublyLinkedList.ts:187](https://github.com/havelessbemore/dastal/blob/4d87fc5/src/list/doublyLinkedList.ts#L187)

___

### add

▸ **add**(`index`: *number*, `value`: T): *number*

Add the element at the specified index

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | *number* | The index to add into |
| `value` | T | The element to add |

**Returns:** *number*

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/doublyLinkedList.ts:53](https://github.com/havelessbemore/dastal/blob/4d87fc5/src/list/doublyLinkedList.ts#L53)

___

### clear

▸ **clear**(): *void*

Removes all elements

**Returns:** *void*

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/doublyLinkedList.ts:65](https://github.com/havelessbemore/dastal/blob/4d87fc5/src/list/doublyLinkedList.ts#L65)

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

Defined in: [src/list/doublyLinkedList.ts:76](https://github.com/havelessbemore/dastal/blob/4d87fc5/src/list/doublyLinkedList.ts#L76)

___

### getSet

▸ **getSet**(`index`: *number*, `callback`: (`element`: T) => T): *undefined* \| T

Update the element at the specified index

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | *number* | The index to retrieve |
| `callback` | (`element`: T) => T | A function that receives the previous element and returns the new element Note: The function is only called if the index is valid |

**Returns:** *undefined* \| T

The previous element at the index, or `undefined` if index is invalid

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/doublyLinkedList.ts:88](https://github.com/havelessbemore/dastal/blob/4d87fc5/src/list/doublyLinkedList.ts#L88)

___

### pop

▸ **pop**(): *undefined* \| T

Retrieves and removes the end of the list

**Returns:** *undefined* \| T

The element at the end of the list, or `undefined` if empty.

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/doublyLinkedList.ts:102](https://github.com/havelessbemore/dastal/blob/4d87fc5/src/list/doublyLinkedList.ts#L102)

___

### push

▸ **push**(`value`: T): *number*

Inserts the specified element into the end of the list

#### Parameters:

| Name | Type |
| :------ | :------ |
| `value` | T |

**Returns:** *number*

`true` upon success, otherwise `false`

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/doublyLinkedList.ts:119](https://github.com/havelessbemore/dastal/blob/4d87fc5/src/list/doublyLinkedList.ts#L119)

___

### remove

▸ **remove**(`index`: *number*): *undefined* \| T

Retrieves and removes the element at the given index

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | *number* | The index to remove |

**Returns:** *undefined* \| T

The element at the index or `undefined` if the index is invalid

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/doublyLinkedList.ts:132](https://github.com/havelessbemore/dastal/blob/4d87fc5/src/list/doublyLinkedList.ts#L132)

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

Defined in: [src/list/doublyLinkedList.ts:150](https://github.com/havelessbemore/dastal/blob/4d87fc5/src/list/doublyLinkedList.ts#L150)

___

### shift

▸ **shift**(): *undefined* \| T

Retrieves and removes the first element in the list

**Returns:** *undefined* \| T

The element at the front of the list or `undefined` if this list is empty.

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/doublyLinkedList.ts:164](https://github.com/havelessbemore/dastal/blob/4d87fc5/src/list/doublyLinkedList.ts#L164)

___

### unshift

▸ **unshift**(`value`: T): *number*

Inserts the specified element into the front of the list

#### Parameters:

| Name | Type |
| :------ | :------ |
| `value` | T |

**Returns:** *number*

`true` upon success, otherwise `false`

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/doublyLinkedList.ts:201](https://github.com/havelessbemore/dastal/blob/4d87fc5/src/list/doublyLinkedList.ts#L201)
