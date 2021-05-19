[dastal - v1.2.0](../README.md) / List

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
- [addAll](list.md#addall)
- [clear](list.md#clear)
- [concat](list.md#concat)
- [copyWithin](list.md#copywithin)
- [fill](list.md#fill)
- [get](list.md#get)
- [getSet](list.md#getset)
- [pop](list.md#pop)
- [push](list.md#push)
- [remove](list.md#remove)
- [reverse](list.md#reverse)
- [set](list.md#set)
- [shift](list.md#shift)
- [slice](list.md#slice)
- [unshift](list.md#unshift)
- [view](list.md#view)

## Properties

### size

• `Readonly` **size**: *number*

The number of elements in this list

Defined in: [src/list/list.ts:141](https://github.com/havelessbemore/dastal/blob/2a8401f/src/list/list.ts#L141)

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator*<T, any, undefined\>

**Returns:** *Iterator*<T, any, undefined\>

Inherited from: Iterable.\_\_@iterator

Defined in: node_modules/typescript/lib/lib.es2015.iterable.d.ts:51

___

### add

▸ **add**(`index`: *number*, `element`: T): *number*

Add the element at the specified index.

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | *number* | The index to add into (0 <= index <= size) |
| `element` | T | The element to add |

**Returns:** *number*

The new size of the list

Defined in: [src/list/list.ts:15](https://github.com/havelessbemore/dastal/blob/2a8401f/src/list/list.ts#L15)

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

Defined in: [src/list/list.ts:24](https://github.com/havelessbemore/dastal/blob/2a8401f/src/list/list.ts#L24)

___

### clear

▸ **clear**(): *void*

Removes all elements

**Returns:** *void*

Defined in: [src/list/list.ts:28](https://github.com/havelessbemore/dastal/blob/2a8401f/src/list/list.ts#L28)

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

Defined in: [src/list/list.ts:38](https://github.com/havelessbemore/dastal/blob/2a8401f/src/list/list.ts#L38)

___

### copyWithin

▸ **copyWithin**(`index`: *number*, `min?`: *number*, `max?`: *number*): [*List*](list.md)<T\>

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

**Returns:** [*List*](list.md)<T\>

The list

Defined in: [src/list/list.ts:54](https://github.com/havelessbemore/dastal/blob/2a8401f/src/list/list.ts#L54)

___

### fill

▸ **fill**(`element`: T, `min?`: *number*, `max?`: *number*): [*List*](list.md)<T\>

Returns the this object after filling the section identified by min and max with element.

Negative indices can be used for min and max to indicate an offset from the
end of the list. For example, -2 refers to the second to last element of the list.

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | T | — element to fill list section with |
| `min?` | *number* | Where to start filling the list, inclusive. Defaults to 0 |
| `max?` | *number* | - |

**Returns:** [*List*](list.md)<T\>

The list on which this method was called

Defined in: [src/list/list.ts:67](https://github.com/havelessbemore/dastal/blob/2a8401f/src/list/list.ts#L67)

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

Defined in: [src/list/list.ts:75](https://github.com/havelessbemore/dastal/blob/2a8401f/src/list/list.ts#L75)

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

Defined in: [src/list/list.ts:85](https://github.com/havelessbemore/dastal/blob/2a8401f/src/list/list.ts#L85)

___

### pop

▸ **pop**(): *undefined* \| T

Retrieves and removes the end of the list.

**Returns:** *undefined* \| T

The value at the end of the list, or `undefined` if empty.

Defined in: [src/list/list.ts:91](https://github.com/havelessbemore/dastal/blob/2a8401f/src/list/list.ts#L91)

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

Defined in: [src/list/list.ts:99](https://github.com/havelessbemore/dastal/blob/2a8401f/src/list/list.ts#L99)

___

### remove

▸ **remove**(`index`: *number*): *undefined* \| T

Retrieves and removes the element at the given index.

A negative index can be used to indicate an offset from the
end of the list. For example, -2 refers to the second to last element of the list.

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | *number* | The index to remove |

**Returns:** *undefined* \| T

The value at the index, or `undefined` if the index is invalid

Defined in: [src/list/list.ts:110](https://github.com/havelessbemore/dastal/blob/2a8401f/src/list/list.ts#L110)

___

### reverse

▸ **reverse**(`min?`: *number*, `max?`: *number*): [*List*](list.md)<T\>

Reverses the elements in the list in place.

Negative indices can be used for min and max to indicate an offset from the
end of the list. For example, -2 refers to the second to last element of the list.

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `min?` | *number* | The beginning index of the specified portion of the list, inclusive. Defaults to 0 |
| `max?` | *number* | The end index of the specified portion of the list, exclusive. Defaults to list.size |

**Returns:** [*List*](list.md)<T\>

a reference to the same list

Defined in: [src/list/list.ts:122](https://github.com/havelessbemore/dastal/blob/2a8401f/src/list/list.ts#L122)

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

Defined in: [src/list/list.ts:131](https://github.com/havelessbemore/dastal/blob/2a8401f/src/list/list.ts#L131)

___

### shift

▸ **shift**(): *undefined* \| T

Retrieves and removes the first element in the list.

**Returns:** *undefined* \| T

The value at the front of the list or `undefined` if this list is empty.

Defined in: [src/list/list.ts:137](https://github.com/havelessbemore/dastal/blob/2a8401f/src/list/list.ts#L137)

___

### slice

▸ **slice**(`min?`: *number*, `max?`: *number*): [*List*](list.md)<T\>

Returns a copy of a section of the list.

Negative indices can be used for min and max to indicate an offset from the
end of the list. For example, -2 refers to the second to last element of the list.

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `min?` | *number* | The beginning index of the specified portion of the list, inclusive. Defaults to 0 |
| `max?` | *number* | The end index of the specified portion of the list, exclusive. Defaults to list.size |

**Returns:** [*List*](list.md)<T\>

A new list with a copy of the indicated section of the original list

Defined in: [src/list/list.ts:153](https://github.com/havelessbemore/dastal/blob/2a8401f/src/list/list.ts#L153)

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

Defined in: [src/list/list.ts:161](https://github.com/havelessbemore/dastal/blob/2a8401f/src/list/list.ts#L161)

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

Defined in: [src/list/list.ts:175](https://github.com/havelessbemore/dastal/blob/2a8401f/src/list/list.ts#L175)
