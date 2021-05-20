[dastal - v1.3.1](../README.md) / LinkedList

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
- [\_addAll](linkedlist.md#_addall)
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
- [splice](linkedlist.md#splice)
- [unshift](linkedlist.md#unshift)
- [update](linkedlist.md#update)
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

Defined in: [src/list/linkedList.ts:34](https://github.com/havelessbemore/dastal/blob/0f470df/src/list/linkedList.ts#L34)

## Accessors

### size

• get **size**(): *number*

The number of elements in this list

**Returns:** *number*

Implementation of: [List](../interfaces/list.md).[size](../interfaces/list.md#size)

Defined in: [src/list/linkedList.ts:319](https://github.com/havelessbemore/dastal/blob/0f470df/src/list/linkedList.ts#L319)

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator*<T, any, undefined\>

Receive an iterator through the list.

**Note:** Unexpected behavior can occur if the collection is modified during iteration.

**Returns:** *Iterator*<T, any, undefined\>

An iterator through the list

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:393](https://github.com/havelessbemore/dastal/blob/0f470df/src/list/linkedList.ts#L393)

___

### \_addAll

▸ `Protected`**_addAll**(`prev`: [*LinkedNode*](../interfaces/linkednode.md)<T\>, `elements`: *Iterable*<T\>): [*LinkedNode*](../interfaces/linkednode.md)<T\>

#### Parameters:

| Name | Type |
| :------ | :------ |
| `prev` | [*LinkedNode*](../interfaces/linkednode.md)<T\> |
| `elements` | *Iterable*<T\> |

**Returns:** [*LinkedNode*](../interfaces/linkednode.md)<T\>

Defined in: [src/list/linkedList.ts:503](https://github.com/havelessbemore/dastal/blob/0f470df/src/list/linkedList.ts#L503)

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

Defined in: [src/list/linkedList.ts:50](https://github.com/havelessbemore/dastal/blob/0f470df/src/list/linkedList.ts#L50)

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

Defined in: [src/list/linkedList.ts:68](https://github.com/havelessbemore/dastal/blob/0f470df/src/list/linkedList.ts#L68)

___

### clear

▸ **clear**(): *void*

Removes all elements

**Returns:** *void*

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:79](https://github.com/havelessbemore/dastal/blob/0f470df/src/list/linkedList.ts#L79)

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

Defined in: [src/list/linkedList.ts:93](https://github.com/havelessbemore/dastal/blob/0f470df/src/list/linkedList.ts#L93)

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

Defined in: [src/list/linkedList.ts:115](https://github.com/havelessbemore/dastal/blob/0f470df/src/list/linkedList.ts#L115)

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

Defined in: [src/list/linkedList.ts:169](https://github.com/havelessbemore/dastal/blob/0f470df/src/list/linkedList.ts#L169)

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

Defined in: [src/list/linkedList.ts:188](https://github.com/havelessbemore/dastal/blob/0f470df/src/list/linkedList.ts#L188)

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

Defined in: [src/list/linkedList.ts:203](https://github.com/havelessbemore/dastal/blob/0f470df/src/list/linkedList.ts#L203)

___

### pop

▸ **pop**(): *undefined* \| T

Retrieves and removes the end of the list

**Returns:** *undefined* \| T

The value at the end of the list, or `undefined` if empty.

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:217](https://github.com/havelessbemore/dastal/blob/0f470df/src/list/linkedList.ts#L217)

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

Defined in: [src/list/linkedList.ts:234](https://github.com/havelessbemore/dastal/blob/0f470df/src/list/linkedList.ts#L234)

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

Defined in: [src/list/linkedList.ts:247](https://github.com/havelessbemore/dastal/blob/0f470df/src/list/linkedList.ts#L247)

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

Defined in: [src/list/linkedList.ts:270](https://github.com/havelessbemore/dastal/blob/0f470df/src/list/linkedList.ts#L270)

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

Defined in: [src/list/linkedList.ts:299](https://github.com/havelessbemore/dastal/blob/0f470df/src/list/linkedList.ts#L299)

___

### shift

▸ **shift**(): *undefined* \| T

Retrieves and removes the first element in the list

**Returns:** *undefined* \| T

The value at the front of the list or `undefined` if this list is empty.

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:313](https://github.com/havelessbemore/dastal/blob/0f470df/src/list/linkedList.ts#L313)

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

Defined in: [src/list/linkedList.ts:333](https://github.com/havelessbemore/dastal/blob/0f470df/src/list/linkedList.ts#L333)

___

### splice

▸ **splice**(`start?`: *number*, `count?`: *number*, `elements?`: *Iterable*<T\>): [*List*](../interfaces/list.md)<T\>

Removes elements from the list and optionally inserts new elements in their place.
Returns any deleted elements.

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `start?` | *number* | The index from which to start removing elements. Defaults to 0  If > size, start will be set to size. In this case, no element will be deleted but the method can still add elements to the end of the list.  If < 0, start will indicate an offset from the end of the list. For example, -2 refers to the second to last element of the list.  If < -size, start will be set to 0 |
| `count?` | *number* | The number of elements to remove. Defaults to size - start  If >= size - start (that is, if it's >= than the number of elements from start until the end of the list), then all the elements from start until the end of the list will be removed.  If <= 0, no elements are removed |
| `elements?` | *Iterable*<T\> | The new elements to insert at start. Defaults to none |

**Returns:** [*List*](../interfaces/list.md)<T\>

A new list of deleted elements

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:360](https://github.com/havelessbemore/dastal/blob/0f470df/src/list/linkedList.ts#L360)

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

Defined in: [src/list/linkedList.ts:405](https://github.com/havelessbemore/dastal/blob/0f470df/src/list/linkedList.ts#L405)

___

### update

▸ **update**(`callback`: (`element`: T, `index`: *number*) => T): [*LinkedList*](linkedlist.md)<T\>

Update the elements of the list

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (`element`: T, `index`: *number*) => T | A function called for each index. Returns the new element |

**Returns:** [*LinkedList*](linkedlist.md)<T\>

The list on which this method was called

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:415](https://github.com/havelessbemore/dastal/blob/0f470df/src/list/linkedList.ts#L415)

▸ **update**(`min`: *undefined* \| *number*, `callback`: (`element`: T, `index`: *number*) => T): [*LinkedList*](linkedlist.md)<T\>

Update the elements of the list

Negative indices can be used to indicate an offset from the
end of the list. For example, -2 refers to the second to last element of the list.

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `min` | *undefined* \| *number* | Where to start filling the list, inclusive. Defaults to 0 |
| `callback` | (`element`: T, `index`: *number*) => T | A function called for each index. Returns the new element |

**Returns:** [*LinkedList*](linkedlist.md)<T\>

The list on which this method was called

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:427](https://github.com/havelessbemore/dastal/blob/0f470df/src/list/linkedList.ts#L427)

▸ **update**(`min`: *undefined* \| *number*, `max`: *undefined* \| *number*, `callback`: (`element`: T, `index`: *number*) => T): [*LinkedList*](linkedlist.md)<T\>

Update the elements of the list

Negative indices can be used for min and max to indicate an offset from the
end of the list. For example, -2 refers to the second to last element of the list.

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `min` | *undefined* \| *number* | Where to start filling the list, inclusive. Defaults to 0 |
| `max` | *undefined* \| *number* | Where to stop filling the list, exclusive. Defaults to list.size |
| `callback` | (`element`: T, `index`: *number*) => T | A function called for each index. Returns the new element |

**Returns:** [*LinkedList*](linkedlist.md)<T\>

The list on which this method was called

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:440](https://github.com/havelessbemore/dastal/blob/0f470df/src/list/linkedList.ts#L440)

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

Defined in: [src/list/linkedList.ts:483](https://github.com/havelessbemore/dastal/blob/0f470df/src/list/linkedList.ts#L483)
