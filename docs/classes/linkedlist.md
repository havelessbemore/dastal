[dastal - v1.2.0](../README.md) / LinkedList

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
- [addAll](linkedlist.md#addall)
- [clear](linkedlist.md#clear)
- [concat](linkedlist.md#concat)
- [copyWithin](linkedlist.md#copywithin)
- [fill](linkedlist.md#fill)
- [get](linkedlist.md#get)
- [getSet](linkedlist.md#getset)
- [pop](linkedlist.md#pop)
- [push](linkedlist.md#push)
- [remove](linkedlist.md#remove)
- [reverse](linkedlist.md#reverse)
- [set](linkedlist.md#set)
- [shift](linkedlist.md#shift)
- [slice](linkedlist.md#slice)
- [unshift](linkedlist.md#unshift)
- [view](linkedlist.md#view)

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

Defined in: [src/list/linkedList.ts:34](https://github.com/havelessbemore/dastal/blob/2a8401f/src/list/linkedList.ts#L34)

## Accessors

### size

• get **size**(): *number*

The number of elements in this list

**Returns:** *number*

Implementation of: [List](../interfaces/list.md).[size](../interfaces/list.md#size)

Defined in: [src/list/linkedList.ts:303](https://github.com/havelessbemore/dastal/blob/2a8401f/src/list/linkedList.ts#L303)

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator*<T, any, undefined\>

Receive an iterator through the list.

**Note:** Unexpected behavior can occur if the collection is modified during iteration.

**Returns:** *Iterator*<T, any, undefined\>

An iterator through the list

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:327](https://github.com/havelessbemore/dastal/blob/2a8401f/src/list/linkedList.ts#L327)

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

Defined in: [src/list/linkedList.ts:52](https://github.com/havelessbemore/dastal/blob/2a8401f/src/list/linkedList.ts#L52)

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

Defined in: [src/list/linkedList.ts:68](https://github.com/havelessbemore/dastal/blob/2a8401f/src/list/linkedList.ts#L68)

___

### clear

▸ **clear**(): *void*

Removes all elements

**Returns:** *void*

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:91](https://github.com/havelessbemore/dastal/blob/2a8401f/src/list/linkedList.ts#L91)

___

### concat

▸ **concat**(...`lists`: *Iterable*<T\>[]): [*LinkedList*](linkedlist.md)<T\>

Combines the list with multiple iterables into a new list.
Does not modify the existing list or inputs.

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `...lists` | *Iterable*<T\>[] | — Additional iterables to add to the end of the list. |

**Returns:** [*LinkedList*](linkedlist.md)<T\>

A new list consisting of the elements in the list on which
it is called, followed in order by the elements of each argument. It
does not recurse into nested iterable arguments

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:105](https://github.com/havelessbemore/dastal/blob/2a8401f/src/list/linkedList.ts#L105)

___

### copyWithin

▸ **copyWithin**(`index`: *number*, `min?`: *number*, `max?`: *number*): [*LinkedList*](linkedlist.md)<T\>

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

**Returns:** [*LinkedList*](linkedlist.md)<T\>

The list

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:129](https://github.com/havelessbemore/dastal/blob/2a8401f/src/list/linkedList.ts#L129)

___

### fill

▸ **fill**(`element`: T, `min?`: *number*, `max?`: *number*): [*LinkedList*](linkedlist.md)<T\>

Returns the this object after filling the section identified by min and max with element.

Negative indices can be used for min and max to indicate an offset from the
end of the list. For example, -2 refers to the second to last element of the list.

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | T | — element to fill list section with |
| `min?` | *number* | Where to start filling the list, inclusive. Defaults to 0 |
| `max?` | *number* | - |

**Returns:** [*LinkedList*](linkedlist.md)<T\>

The list on which this method was called

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:169](https://github.com/havelessbemore/dastal/blob/2a8401f/src/list/linkedList.ts#L169)

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

Defined in: [src/list/linkedList.ts:188](https://github.com/havelessbemore/dastal/blob/2a8401f/src/list/linkedList.ts#L188)

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

Defined in: [src/list/linkedList.ts:200](https://github.com/havelessbemore/dastal/blob/2a8401f/src/list/linkedList.ts#L200)

___

### pop

▸ **pop**(): *undefined* \| T

Retrieves and removes the end of the list

**Returns:** *undefined* \| T

The value at the end of the list, or `undefined` if empty.

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:214](https://github.com/havelessbemore/dastal/blob/2a8401f/src/list/linkedList.ts#L214)

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

Defined in: [src/list/linkedList.ts:224](https://github.com/havelessbemore/dastal/blob/2a8401f/src/list/linkedList.ts#L224)

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

Defined in: [src/list/linkedList.ts:238](https://github.com/havelessbemore/dastal/blob/2a8401f/src/list/linkedList.ts#L238)

___

### reverse

▸ **reverse**(`min?`: *number*, `max?`: *number*): [*LinkedList*](linkedlist.md)<T\>

Reverses the elements in the list in place.

Negative indices can be used for min and max to indicate an offset from the
end of the list. For example, -2 refers to the second to last element of the list.

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `min?` | *number* | The beginning index of the specified portion of the list, inclusive. Defaults to 0 |
| `max?` | *number* | The end index of the specified portion of the list, exclusive. Defaults to list.size |

**Returns:** [*LinkedList*](linkedlist.md)<T\>

a reference to the same list

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:259](https://github.com/havelessbemore/dastal/blob/2a8401f/src/list/linkedList.ts#L259)

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

Defined in: [src/list/linkedList.ts:277](https://github.com/havelessbemore/dastal/blob/2a8401f/src/list/linkedList.ts#L277)

___

### shift

▸ **shift**(): *undefined* \| T

Retrieves and removes the first element in the list

**Returns:** *undefined* \| T

The value at the front of the list or `undefined` if this list is empty.

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:291](https://github.com/havelessbemore/dastal/blob/2a8401f/src/list/linkedList.ts#L291)

___

### slice

▸ **slice**(`min?`: *number*, `max?`: *number*): [*LinkedList*](linkedlist.md)<T\>

Returns a copy of a section of the list.

Negative indices can be used for min and max to indicate an offset from the
end of the list. For example, -2 refers to the second to last element of the list.

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `min?` | *number* | The beginning index of the specified portion of the list, inclusive. Defaults to 0 |
| `max?` | *number* | The end index of the specified portion of the list, exclusive. Defaults to list.size |

**Returns:** [*LinkedList*](linkedlist.md)<T\>

A new list with a copy of the indicated section of the original list

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:317](https://github.com/havelessbemore/dastal/blob/2a8401f/src/list/linkedList.ts#L317)

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

Defined in: [src/list/linkedList.ts:341](https://github.com/havelessbemore/dastal/blob/2a8401f/src/list/linkedList.ts#L341)

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

Defined in: [src/list/linkedList.ts:360](https://github.com/havelessbemore/dastal/blob/2a8401f/src/list/linkedList.ts#L360)
