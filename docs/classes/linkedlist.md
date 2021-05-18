[dastal - v1.1.0](../README.md) / LinkedList

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
- [concat](linkedlist.md#concat)
- [fill](linkedlist.md#fill)
- [get](linkedlist.md#get)
- [getSet](linkedlist.md#getset)
- [pop](linkedlist.md#pop)
- [push](linkedlist.md#push)
- [remove](linkedlist.md#remove)
- [reverse](linkedlist.md#reverse)
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

Defined in: [src/list/linkedList.ts:29](https://github.com/havelessbemore/dastal/blob/f1eca00/src/list/linkedList.ts#L29)

## Accessors

### size

• get **size**(): *number*

The number of elements in this list

**Returns:** *number*

Implementation of: [List](../interfaces/list.md).[size](../interfaces/list.md#size)

Defined in: [src/list/linkedList.ts:224](https://github.com/havelessbemore/dastal/blob/f1eca00/src/list/linkedList.ts#L224)

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator*<T, any, undefined\>

Receive an iterator through the list.

**Note:** Unexpected behavior can occur if the collection is modified during iteration.

**Returns:** *Iterator*<T, any, undefined\>

An iterator through the list

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:234](https://github.com/havelessbemore/dastal/blob/f1eca00/src/list/linkedList.ts#L234)

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

Defined in: [src/list/linkedList.ts:43](https://github.com/havelessbemore/dastal/blob/f1eca00/src/list/linkedList.ts#L43)

___

### clear

▸ **clear**(): *void*

Removes all elements

**Returns:** *void*

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:54](https://github.com/havelessbemore/dastal/blob/f1eca00/src/list/linkedList.ts#L54)

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

Defined in: [src/list/linkedList.ts:68](https://github.com/havelessbemore/dastal/blob/f1eca00/src/list/linkedList.ts#L68)

___

### fill

▸ **fill**(`element`: T, `min?`: *number*, `max?`: *number*): [*LinkedList*](linkedlist.md)<T\>

Returns the this object after filling the section identified by min and max with element

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | T | — element to fill list section with |
| `min?` | *number* | index to start filling the list at. If start is negative, it is treated as length+start where length is the length of the list. |
| `max?` | *number* | - |

**Returns:** [*LinkedList*](linkedlist.md)<T\>

The list on which this method was called

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:88](https://github.com/havelessbemore/dastal/blob/f1eca00/src/list/linkedList.ts#L88)

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

Defined in: [src/list/linkedList.ts:109](https://github.com/havelessbemore/dastal/blob/f1eca00/src/list/linkedList.ts#L109)

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

Defined in: [src/list/linkedList.ts:121](https://github.com/havelessbemore/dastal/blob/f1eca00/src/list/linkedList.ts#L121)

___

### pop

▸ **pop**(): *undefined* \| T

Retrieves and removes the end of the list

**Returns:** *undefined* \| T

The value at the end of the list, or `undefined` if empty.

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:135](https://github.com/havelessbemore/dastal/blob/f1eca00/src/list/linkedList.ts#L135)

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

Defined in: [src/list/linkedList.ts:145](https://github.com/havelessbemore/dastal/blob/f1eca00/src/list/linkedList.ts#L145)

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

Defined in: [src/list/linkedList.ts:157](https://github.com/havelessbemore/dastal/blob/f1eca00/src/list/linkedList.ts#L157)

___

### reverse

▸ **reverse**(): [*LinkedList*](linkedlist.md)<T\>

Reverses the elements in the list in place.

**Returns:** [*LinkedList*](linkedlist.md)<T\>

a reference to the same list

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:174](https://github.com/havelessbemore/dastal/blob/f1eca00/src/list/linkedList.ts#L174)

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

Defined in: [src/list/linkedList.ts:196](https://github.com/havelessbemore/dastal/blob/f1eca00/src/list/linkedList.ts#L196)

___

### shift

▸ **shift**(): *undefined* \| T

Retrieves and removes the first element in the list

**Returns:** *undefined* \| T

The value at the front of the list or `undefined` if this list is empty.

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:210](https://github.com/havelessbemore/dastal/blob/f1eca00/src/list/linkedList.ts#L210)

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

Defined in: [src/list/linkedList.ts:248](https://github.com/havelessbemore/dastal/blob/f1eca00/src/list/linkedList.ts#L248)
