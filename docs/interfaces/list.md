[dastal - v1.1.0](../README.md) / List

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
- [concat](list.md#concat)
- [fill](list.md#fill)
- [get](list.md#get)
- [getSet](list.md#getset)
- [pop](list.md#pop)
- [push](list.md#push)
- [remove](list.md#remove)
- [reverse](list.md#reverse)
- [set](list.md#set)
- [shift](list.md#shift)
- [unshift](list.md#unshift)

## Properties

### size

• `Readonly` **size**: *number*

The number of elements in this list

Defined in: [src/list/list.ts:106](https://github.com/havelessbemore/dastal/blob/f1eca00/src/list/list.ts#L106)

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

Defined in: [src/list/list.ts:15](https://github.com/havelessbemore/dastal/blob/f1eca00/src/list/list.ts#L15)

___

### clear

▸ **clear**(): *void*

Removes all elements

**Returns:** *void*

Defined in: [src/list/list.ts:19](https://github.com/havelessbemore/dastal/blob/f1eca00/src/list/list.ts#L19)

___

### concat

▸ **concat**(...`lists`: *Iterable*<T\>[]): [*List*](list.md)<T\>

Combines the list with multiple iterables into a new list. Does not modify the existing list or inputs.

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `...lists` | *Iterable*<T\>[] | — Additional iterables to add to the end of the list. |

**Returns:** [*List*](list.md)<T\>

A new list consisting of the elements in the list on which it is called,
followed in order by the elements of each argument (if the argument is an iterable)
or the argument itself. It does not recurse into nested iterable arguments

Defined in: [src/list/list.ts:29](https://github.com/havelessbemore/dastal/blob/f1eca00/src/list/list.ts#L29)

___

### fill

▸ **fill**(`element`: T, `min?`: *number*, `max?`: *number*): [*List*](list.md)<T\>

Returns the this object after filling the section identified by min and max with element

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | T | — element to fill list section with |
| `min?` | *number* | index to start filling the list at. If start is negative, it is treated as length+start where length is the length of the list. |
| `max?` | *number* | - |

**Returns:** [*List*](list.md)<T\>

The list on which this method was called

Defined in: [src/list/list.ts:41](https://github.com/havelessbemore/dastal/blob/f1eca00/src/list/list.ts#L41)

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

Defined in: [src/list/list.ts:49](https://github.com/havelessbemore/dastal/blob/f1eca00/src/list/list.ts#L49)

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

Defined in: [src/list/list.ts:59](https://github.com/havelessbemore/dastal/blob/f1eca00/src/list/list.ts#L59)

___

### pop

▸ **pop**(): *undefined* \| T

Retrieves and removes the end of the list

**Returns:** *undefined* \| T

The value at the end of the list, or `undefined` if empty.

Defined in: [src/list/list.ts:65](https://github.com/havelessbemore/dastal/blob/f1eca00/src/list/list.ts#L65)

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

Defined in: [src/list/list.ts:73](https://github.com/havelessbemore/dastal/blob/f1eca00/src/list/list.ts#L73)

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

Defined in: [src/list/list.ts:81](https://github.com/havelessbemore/dastal/blob/f1eca00/src/list/list.ts#L81)

___

### reverse

▸ **reverse**(): [*List*](list.md)<T\>

Reverses the elements in the list in place.

**Returns:** [*List*](list.md)<T\>

a reference to the same list

Defined in: [src/list/list.ts:87](https://github.com/havelessbemore/dastal/blob/f1eca00/src/list/list.ts#L87)

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

Defined in: [src/list/list.ts:96](https://github.com/havelessbemore/dastal/blob/f1eca00/src/list/list.ts#L96)

___

### shift

▸ **shift**(): *undefined* \| T

Retrieves and removes the first element in the list

**Returns:** *undefined* \| T

The value at the front of the list or `undefined` if this list is empty.

Defined in: [src/list/list.ts:102](https://github.com/havelessbemore/dastal/blob/f1eca00/src/list/list.ts#L102)

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

Defined in: [src/list/list.ts:114](https://github.com/havelessbemore/dastal/blob/f1eca00/src/list/list.ts#L114)
