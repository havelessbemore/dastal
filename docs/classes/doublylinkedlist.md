[dastal - v1.2.0](../README.md) / DoublyLinkedList

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
- [addAll](doublylinkedlist.md#addall)
- [clear](doublylinkedlist.md#clear)
- [concat](doublylinkedlist.md#concat)
- [copyWithin](doublylinkedlist.md#copywithin)
- [fill](doublylinkedlist.md#fill)
- [get](doublylinkedlist.md#get)
- [getSet](doublylinkedlist.md#getset)
- [pop](doublylinkedlist.md#pop)
- [push](doublylinkedlist.md#push)
- [remove](doublylinkedlist.md#remove)
- [reverse](doublylinkedlist.md#reverse)
- [set](doublylinkedlist.md#set)
- [shift](doublylinkedlist.md#shift)
- [slice](doublylinkedlist.md#slice)
- [unshift](doublylinkedlist.md#unshift)
- [view](doublylinkedlist.md#view)

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

Defined in: [src/list/doublyLinkedList.ts:38](https://github.com/havelessbemore/dastal/blob/2a8401f/src/list/doublyLinkedList.ts#L38)

## Accessors

### size

• get **size**(): *number*

The number of elements in this list

**Returns:** *number*

Implementation of: [List](../interfaces/list.md).[size](../interfaces/list.md#size)

Defined in: [src/list/doublyLinkedList.ts:331](https://github.com/havelessbemore/dastal/blob/2a8401f/src/list/doublyLinkedList.ts#L331)

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator*<T, any, undefined\>

Receive an iterator through the list.

**Note:** Unexpected behavior can occur if the collection is modified during iteration.

**Returns:** *Iterator*<T, any, undefined\>

An iterator through the list

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/doublyLinkedList.ts:355](https://github.com/havelessbemore/dastal/blob/2a8401f/src/list/doublyLinkedList.ts#L355)

___

### add

▸ **add**(`index`: *number*, `value`: T): *number*

Add the element at the specified index.

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | *number* | The index to add into (0 <= index <= size) |
| `value` | T | - |

**Returns:** *number*

The new size of the list

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/doublyLinkedList.ts:56](https://github.com/havelessbemore/dastal/blob/2a8401f/src/list/doublyLinkedList.ts#L56)

___

### addAll

▸ **addAll**(`index`: *number*, `elements`: *Iterable*<T\>): *number*

Add elements at the specified index.

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | *number* | The index to add into (0 <= index <= size) |
| `elements` | *Iterable*<T\> | - |

**Returns:** *number*

The new size of the list

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/doublyLinkedList.ts:74](https://github.com/havelessbemore/dastal/blob/2a8401f/src/list/doublyLinkedList.ts#L74)

___

### clear

▸ **clear**(): *void*

Removes all elements

**Returns:** *void*

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/doublyLinkedList.ts:93](https://github.com/havelessbemore/dastal/blob/2a8401f/src/list/doublyLinkedList.ts#L93)

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

Defined in: [src/list/doublyLinkedList.ts:107](https://github.com/havelessbemore/dastal/blob/2a8401f/src/list/doublyLinkedList.ts#L107)

___

### copyWithin

▸ **copyWithin**(`index`: *number*, `min?`: *number*, `max?`: *number*): [*DoublyLinkedList*](doublylinkedlist.md)<T\>

Copies a section of the list identified by min and max to the same array at position index.

Negative indices can be used for index, min and max to indicate an offset from the
end of the list. For example, -2 refers to the second to last element of the list.

Note that this method will not change the size of the list. If index is after min,
the copied sequence will be trimmed to fit list.size

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | *number* | Where to copy the sequence to |
| `min?` | *number* | Where to start copying elements from, inclusive. Defaults to 0 |
| `max?` | *number* | Where to end copying elements from, exclusive. Defaults to list.size |

**Returns:** [*DoublyLinkedList*](doublylinkedlist.md)<T\>

The list

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/doublyLinkedList.ts:131](https://github.com/havelessbemore/dastal/blob/2a8401f/src/list/doublyLinkedList.ts#L131)

___

### fill

▸ **fill**(`element`: T, `min?`: *number*, `max?`: *number*): [*DoublyLinkedList*](doublylinkedlist.md)<T\>

Returns the this object after filling the section identified by min and max with element.

Negative indices can be used for min and max to indicate an offset from the
end of the list. For example, -2 refers to the second to last element of the list.

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | T | — element to fill list section with |
| `min?` | *number* | Where to start filling the list, inclusive. Defaults to 0 |
| `max?` | *number* | - |

**Returns:** [*DoublyLinkedList*](doublylinkedlist.md)<T\>

The list on which this method was called

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/doublyLinkedList.ts:180](https://github.com/havelessbemore/dastal/blob/2a8401f/src/list/doublyLinkedList.ts#L180)

___

### get

▸ **get**(`index`: *number*): *undefined* \| T

Return the element at the specified index.

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | *number* | The index to retrieve (0 <= index < size) |

**Returns:** *undefined* \| T

The element at the index, or `undefined` if index is invalid

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/doublyLinkedList.ts:199](https://github.com/havelessbemore/dastal/blob/2a8401f/src/list/doublyLinkedList.ts#L199)

___

### getSet

▸ **getSet**(`index`: *number*, `callback`: (`element`: T) => T): *undefined* \| T

Update the element at the specified index.

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | *number* | The index to retrieve (0 <= index < size) |
| `callback` | (`element`: T) => T | A function that receives the previous element and returns the new element. The function is only called if the index is valid |

**Returns:** *undefined* \| T

The previous element at the index, or `undefined` if index is invalid

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/doublyLinkedList.ts:211](https://github.com/havelessbemore/dastal/blob/2a8401f/src/list/doublyLinkedList.ts#L211)

___

### pop

▸ **pop**(): *undefined* \| T

Retrieves and removes the end of the list

**Returns:** *undefined* \| T

The element at the end of the list, or `undefined` if empty.

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/doublyLinkedList.ts:225](https://github.com/havelessbemore/dastal/blob/2a8401f/src/list/doublyLinkedList.ts#L225)

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

Defined in: [src/list/doublyLinkedList.ts:242](https://github.com/havelessbemore/dastal/blob/2a8401f/src/list/doublyLinkedList.ts#L242)

___

### remove

▸ **remove**(`index`: *number*): *undefined* \| T

Retrieves and removes the element at the given index.

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | *number* | The index to remove (0 <= index < size) |

**Returns:** *undefined* \| T

The value at the index, or `undefined` if the index is invalid

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/doublyLinkedList.ts:255](https://github.com/havelessbemore/dastal/blob/2a8401f/src/list/doublyLinkedList.ts#L255)

___

### reverse

▸ **reverse**(`min?`: *number*, `max?`: *number*): [*DoublyLinkedList*](doublylinkedlist.md)<T\>

Reverses the elements in the list in place.

Negative indices can be used for min and max to indicate an offset from the
end of the list. For example, -2 refers to the second to last element of the list.

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `min?` | *number* | The beginning index of the specified portion of the list, inclusive. Defaults to 0 |
| `max?` | *number* | The end index of the specified portion of the list, exclusive. Defaults to list.size |

**Returns:** [*DoublyLinkedList*](doublylinkedlist.md)<T\>

a reference to the same list

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/doublyLinkedList.ts:276](https://github.com/havelessbemore/dastal/blob/2a8401f/src/list/doublyLinkedList.ts#L276)

___

### set

▸ **set**(`index`: *number*, `element`: T): *undefined* \| T

Update the element at the specified index.

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | *number* | The index to retrieve (0 <= index < size) |
| `element` | T | The new element to insert at index |

**Returns:** *undefined* \| T

The previous element in the index, or undefined if the index is invalid

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/doublyLinkedList.ts:304](https://github.com/havelessbemore/dastal/blob/2a8401f/src/list/doublyLinkedList.ts#L304)

___

### shift

▸ **shift**(): *undefined* \| T

Retrieves and removes the first element in the list

**Returns:** *undefined* \| T

The element at the front of the list or `undefined` if this list is empty.

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/doublyLinkedList.ts:318](https://github.com/havelessbemore/dastal/blob/2a8401f/src/list/doublyLinkedList.ts#L318)

___

### slice

▸ **slice**(`min?`: *number*, `max?`: *number*): [*DoublyLinkedList*](doublylinkedlist.md)<T\>

Returns a copy of a section of the list.

Negative indices can be used for min and max to indicate an offset from the
end of the list. For example, -2 refers to the second to last element of the list.

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `min?` | *number* | The beginning index of the specified portion of the list, inclusive. Defaults to 0 |
| `max?` | *number* | The end index of the specified portion of the list, exclusive. Defaults to list.size |

**Returns:** [*DoublyLinkedList*](doublylinkedlist.md)<T\>

A new list with a copy of the indicated section of the original list

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/doublyLinkedList.ts:345](https://github.com/havelessbemore/dastal/blob/2a8401f/src/list/doublyLinkedList.ts#L345)

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

Defined in: [src/list/doublyLinkedList.ts:369](https://github.com/havelessbemore/dastal/blob/2a8401f/src/list/doublyLinkedList.ts#L369)

___

### view

▸ **view**(`min?`: *number*, `max?`: *number*): *Iterable*<T\>

Receive an iterator through a section of the list.

Negative indices can be used for min and max to indicate an offset from the
end of the list. For example, -2 refers to the second to last element of the list.

**Note:** Unexpected behavior can occur if the collection is modified during iteration.

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `min?` | *number* | The beginning index of the specified portion of the list, inclusive. Defaults to 0 |
| `max?` | *number* | The end index of the specified portion of the list, exclusive. Defaults to list.size |

**Returns:** *Iterable*<T\>

An iterator through the indicated section of the list

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/doublyLinkedList.ts:388](https://github.com/havelessbemore/dastal/blob/2a8401f/src/list/doublyLinkedList.ts#L388)
