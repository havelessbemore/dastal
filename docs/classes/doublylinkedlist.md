[dastal - v1.1.0](../README.md) / DoublyLinkedList

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
- [concat](doublylinkedlist.md#concat)
- [fill](doublylinkedlist.md#fill)
- [get](doublylinkedlist.md#get)
- [getSet](doublylinkedlist.md#getset)
- [pop](doublylinkedlist.md#pop)
- [push](doublylinkedlist.md#push)
- [remove](doublylinkedlist.md#remove)
- [reverse](doublylinkedlist.md#reverse)
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

Defined in: [src/list/doublyLinkedList.ts:37](https://github.com/havelessbemore/dastal/blob/f1eca00/src/list/doublyLinkedList.ts#L37)

## Accessors

### size

• get **size**(): *number*

The number of elements in this list

**Returns:** *number*

Implementation of: [List](../interfaces/list.md).[size](../interfaces/list.md#size)

Defined in: [src/list/doublyLinkedList.ts:236](https://github.com/havelessbemore/dastal/blob/f1eca00/src/list/doublyLinkedList.ts#L236)

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator*<T, any, undefined\>

Receive an iterator through the list.

**Note:** Unexpected behavior can occur if the collection is modified during iteration.

**Returns:** *Iterator*<T, any, undefined\>

An iterator through the list

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/doublyLinkedList.ts:246](https://github.com/havelessbemore/dastal/blob/f1eca00/src/list/doublyLinkedList.ts#L246)

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

Defined in: [src/list/doublyLinkedList.ts:53](https://github.com/havelessbemore/dastal/blob/f1eca00/src/list/doublyLinkedList.ts#L53)

___

### clear

▸ **clear**(): *void*

Removes all elements

**Returns:** *void*

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/doublyLinkedList.ts:65](https://github.com/havelessbemore/dastal/blob/f1eca00/src/list/doublyLinkedList.ts#L65)

___

### concat

▸ **concat**(...`lists`: *Iterable*<T\>[]): [*DoublyLinkedList*](doublylinkedlist.md)<T\>

Combines the list with multiple iterables into a new list.
Does not modify the existing list or inputs.

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `...lists` | *Iterable*<T\>[] | — Additional iterables to add to the end of the list. |

**Returns:** [*DoublyLinkedList*](doublylinkedlist.md)<T\>

A new list consisting of the elements in the list on which
it is called, followed in order by the elements of each argument. It
does not recurse into nested iterable arguments

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/doublyLinkedList.ts:79](https://github.com/havelessbemore/dastal/blob/f1eca00/src/list/doublyLinkedList.ts#L79)

___

### fill

▸ **fill**(`element`: T, `min?`: *number*, `max?`: *number*): [*DoublyLinkedList*](doublylinkedlist.md)<T\>

Returns the this object after filling the section identified by min and max with element

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | T | — element to fill list section with |
| `min?` | *number* | index to start filling the list at. If start is negative, it is treated as length+start where length is the length of the list. |
| `max?` | *number* | - |

**Returns:** [*DoublyLinkedList*](doublylinkedlist.md)<T\>

The list on which this method was called

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/doublyLinkedList.ts:99](https://github.com/havelessbemore/dastal/blob/f1eca00/src/list/doublyLinkedList.ts#L99)

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

Defined in: [src/list/doublyLinkedList.ts:120](https://github.com/havelessbemore/dastal/blob/f1eca00/src/list/doublyLinkedList.ts#L120)

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

Defined in: [src/list/doublyLinkedList.ts:132](https://github.com/havelessbemore/dastal/blob/f1eca00/src/list/doublyLinkedList.ts#L132)

___

### pop

▸ **pop**(): *undefined* \| T

Retrieves and removes the end of the list

**Returns:** *undefined* \| T

The element at the end of the list, or `undefined` if empty.

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/doublyLinkedList.ts:146](https://github.com/havelessbemore/dastal/blob/f1eca00/src/list/doublyLinkedList.ts#L146)

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

Defined in: [src/list/doublyLinkedList.ts:163](https://github.com/havelessbemore/dastal/blob/f1eca00/src/list/doublyLinkedList.ts#L163)

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

Defined in: [src/list/doublyLinkedList.ts:176](https://github.com/havelessbemore/dastal/blob/f1eca00/src/list/doublyLinkedList.ts#L176)

___

### reverse

▸ **reverse**(): [*DoublyLinkedList*](doublylinkedlist.md)<T\>

Reverses the elements in the list in place.

**Returns:** [*DoublyLinkedList*](doublylinkedlist.md)<T\>

a reference to the same list

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/doublyLinkedList.ts:191](https://github.com/havelessbemore/dastal/blob/f1eca00/src/list/doublyLinkedList.ts#L191)

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

Defined in: [src/list/doublyLinkedList.ts:209](https://github.com/havelessbemore/dastal/blob/f1eca00/src/list/doublyLinkedList.ts#L209)

___

### shift

▸ **shift**(): *undefined* \| T

Retrieves and removes the first element in the list

**Returns:** *undefined* \| T

The element at the front of the list or `undefined` if this list is empty.

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/doublyLinkedList.ts:223](https://github.com/havelessbemore/dastal/blob/f1eca00/src/list/doublyLinkedList.ts#L223)

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

Defined in: [src/list/doublyLinkedList.ts:260](https://github.com/havelessbemore/dastal/blob/f1eca00/src/list/doublyLinkedList.ts#L260)
