[dastal - v1.3.1](../README.md) / List

# Interface: List<T\>

An ordered collection (also known as a sequence). A list allows exactly stating
where an element is inserted. Elements can be accessed by their integer index (position in the list)

#### Iterate
- Iterate the entire list: {@link [Symbol.iterator]}
- Iterate a subset of the list: [view](list.md#view)

#### Get
- Get the element at a given index: [get](list.md#get)
- Get the elements in a given range: [slice](list.md#slice)

#### Add
- Add 1 at the start: [unshift](list.md#unshift)
- Add 1 at the end: [push](list.md#push)
- Add 1 at a given index: [add](list.md#add)
- Add 1+ at a given index: [addAll](list.md#addall)

#### Set
- Set 1 index: [set](list.md#set)
- Get and set 1 index: [getSet](list.md#getset)
- Set a range to 1 element: [fill](list.md#fill)
- Set a range to a copy of another range within the list: [copyWithin](list.md#copywithin)
- Set a range: [update](list.md#update)

#### Remove
- Remove 1 from the start: [shift](list.md#shift)
- Remove 1 from the end: [pop](list.md#pop)
- Remove 1 from a given index: [remove](list.md#remove)
- Remove a range (and add new elements): [splice](list.md#splice)

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
- [splice](list.md#splice)
- [unshift](list.md#unshift)
- [update](list.md#update)
- [view](list.md#view)

## Properties

### size

• `Readonly` **size**: *number*

The number of elements in this list

Defined in: [src/list/list.ts:167](https://github.com/havelessbemore/dastal/blob/0f470df/src/list/list.ts#L167)

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

Defined in: [src/list/list.ts:41](https://github.com/havelessbemore/dastal/blob/0f470df/src/list/list.ts#L41)

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

Defined in: [src/list/list.ts:50](https://github.com/havelessbemore/dastal/blob/0f470df/src/list/list.ts#L50)

___

### clear

▸ **clear**(): *void*

Removes all elements

**Returns:** *void*

Defined in: [src/list/list.ts:54](https://github.com/havelessbemore/dastal/blob/0f470df/src/list/list.ts#L54)

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

Defined in: [src/list/list.ts:64](https://github.com/havelessbemore/dastal/blob/0f470df/src/list/list.ts#L64)

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

Defined in: [src/list/list.ts:80](https://github.com/havelessbemore/dastal/blob/0f470df/src/list/list.ts#L80)

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

Defined in: [src/list/list.ts:93](https://github.com/havelessbemore/dastal/blob/0f470df/src/list/list.ts#L93)

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

Defined in: [src/list/list.ts:101](https://github.com/havelessbemore/dastal/blob/0f470df/src/list/list.ts#L101)

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

Defined in: [src/list/list.ts:111](https://github.com/havelessbemore/dastal/blob/0f470df/src/list/list.ts#L111)

___

### pop

▸ **pop**(): *undefined* \| T

Retrieves and removes the end of the list.

**Returns:** *undefined* \| T

The value at the end of the list, or `undefined` if empty.

Defined in: [src/list/list.ts:117](https://github.com/havelessbemore/dastal/blob/0f470df/src/list/list.ts#L117)

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

Defined in: [src/list/list.ts:125](https://github.com/havelessbemore/dastal/blob/0f470df/src/list/list.ts#L125)

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

Defined in: [src/list/list.ts:136](https://github.com/havelessbemore/dastal/blob/0f470df/src/list/list.ts#L136)

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

Defined in: [src/list/list.ts:148](https://github.com/havelessbemore/dastal/blob/0f470df/src/list/list.ts#L148)

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

Defined in: [src/list/list.ts:157](https://github.com/havelessbemore/dastal/blob/0f470df/src/list/list.ts#L157)

___

### shift

▸ **shift**(): *undefined* \| T

Retrieves and removes the first element in the list.

**Returns:** *undefined* \| T

The value at the front of the list or `undefined` if this list is empty.

Defined in: [src/list/list.ts:163](https://github.com/havelessbemore/dastal/blob/0f470df/src/list/list.ts#L163)

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

Defined in: [src/list/list.ts:179](https://github.com/havelessbemore/dastal/blob/0f470df/src/list/list.ts#L179)

___

### splice

▸ **splice**(`start?`: *number*, `count?`: *number*, `elements?`: *Iterable*<T\>): [*List*](list.md)<T\>

Removes elements from the list and optionally inserts new elements in their place.
Returns any deleted elements.

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `start?` | *number* | The index from which to start removing elements. Defaults to 0  If > size, start will be set to size. In this case, no element will be deleted but the method can still add elements to the end of the list.  If < 0, start will indicate an offset from the end of the list. For example, -2 refers to the second to last element of the list.  If < -size, start will be set to 0 |
| `count?` | *number* | The number of elements to remove. Defaults to size - start  If >= size - start (that is, if it's >= than the number of elements from start until the end of the list), then all the elements from start until the end of the list will be removed.  If <= 0, no elements are removed |
| `elements?` | *Iterable*<T\> | The new elements to insert at start. Defaults to none |

**Returns:** [*List*](list.md)<T\>

A new list of deleted elements

Defined in: [src/list/list.ts:204](https://github.com/havelessbemore/dastal/blob/0f470df/src/list/list.ts#L204)

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

Defined in: [src/list/list.ts:212](https://github.com/havelessbemore/dastal/blob/0f470df/src/list/list.ts#L212)

___

### update

▸ **update**(`callback`: (`element`: T, `index`: *number*) => T): [*List*](list.md)<T\>

Update the elements of the list

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (`element`: T, `index`: *number*) => T | A function called for each index. Returns the new element |

**Returns:** [*List*](list.md)<T\>

The list on which this method was called

Defined in: [src/list/list.ts:220](https://github.com/havelessbemore/dastal/blob/0f470df/src/list/list.ts#L220)

▸ **update**(`min`: *undefined* \| *number*, `callback`: (`element`: T, `index`: *number*) => T): [*List*](list.md)<T\>

Update the elements of the list

Negative indices can be used to indicate an offset from the
end of the list. For example, -2 refers to the second to last element of the list.

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `min` | *undefined* \| *number* | Where to start filling the list, inclusive. Defaults to 0 |
| `callback` | (`element`: T, `index`: *number*) => T | A function called for each index. Returns the new element |

**Returns:** [*List*](list.md)<T\>

The list on which this method was called

Defined in: [src/list/list.ts:232](https://github.com/havelessbemore/dastal/blob/0f470df/src/list/list.ts#L232)

▸ **update**(`min`: *undefined* \| *number*, `max`: *undefined* \| *number*, `callback`: (`element`: T, `index`: *number*) => T): [*List*](list.md)<T\>

Update the elements of the list

Negative indices can be used for min and max to indicate an offset from the
end of the list. For example, -2 refers to the second to last element of the list.

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `min` | *undefined* \| *number* | Where to start filling the list, inclusive. Defaults to 0 |
| `max` | *undefined* \| *number* | Where to stop filling the list, exclusive. Defaults to list.size |
| `callback` | (`element`: T, `index`: *number*) => T | A function called for each index. Returns the new element |

**Returns:** [*List*](list.md)<T\>

The list on which this method was called

Defined in: [src/list/list.ts:245](https://github.com/havelessbemore/dastal/blob/0f470df/src/list/list.ts#L245)

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

Defined in: [src/list/list.ts:263](https://github.com/havelessbemore/dastal/blob/0f470df/src/list/list.ts#L263)
