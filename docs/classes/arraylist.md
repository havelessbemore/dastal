[dastal - v1.3.0](../README.md) / ArrayList

# Class: ArrayList<T\>

An implementation of the [List](../interfaces/list.md) interface using an array

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

* [*List*](../interfaces/list.md)<T\>

## Table of contents

### Constructors

- [constructor](arraylist.md#constructor)

### Accessors

- [size](arraylist.md#size)

### Methods

- [[Symbol.iterator]](arraylist.md#[symbol.iterator])
- [add](arraylist.md#add)
- [addAll](arraylist.md#addall)
- [clear](arraylist.md#clear)
- [concat](arraylist.md#concat)
- [copyWithin](arraylist.md#copywithin)
- [fill](arraylist.md#fill)
- [get](arraylist.md#get)
- [getSet](arraylist.md#getset)
- [pop](arraylist.md#pop)
- [push](arraylist.md#push)
- [remove](arraylist.md#remove)
- [reverse](arraylist.md#reverse)
- [set](arraylist.md#set)
- [shift](arraylist.md#shift)
- [slice](arraylist.md#slice)
- [splice](arraylist.md#splice)
- [unshift](arraylist.md#unshift)
- [update](arraylist.md#update)
- [view](arraylist.md#view)

## Constructors

### constructor

\+ **new ArrayList**<T\>(`elements?`: *Iterable*<T\>): [*ArrayList*](arraylist.md)<T\>

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type |
| :------ | :------ |
| `elements?` | *Iterable*<T\> |

**Returns:** [*ArrayList*](arraylist.md)<T\>

Defined in: [src/list/arrayList.ts:11](https://github.com/havelessbemore/dastal/blob/cb5e8f6/src/list/arrayList.ts#L11)

## Accessors

### size

• get **size**(): *number*

The number of elements in this list

**Returns:** *number*

Implementation of: [List](../interfaces/list.md).[size](../interfaces/list.md#size)

Defined in: [src/list/arrayList.ts:223](https://github.com/havelessbemore/dastal/blob/cb5e8f6/src/list/arrayList.ts#L223)

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator*<T, any, undefined\>

Receive an iterator through the list.

**Note:** Unexpected behavior can occur if the collection is modified during iteration.

**Returns:** *Iterator*<T, any, undefined\>

An iterator through the list

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/arrayList.ts:281](https://github.com/havelessbemore/dastal/blob/cb5e8f6/src/list/arrayList.ts#L281)

___

### add

▸ **add**(`index`: *number*, `element`: T): *number*

Add the element at the specified index.

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | *number* | The index to add into |
| `element` | T | The element to add |

**Returns:** *number*

The new size of the list

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/arrayList.ts:24](https://github.com/havelessbemore/dastal/blob/cb5e8f6/src/list/arrayList.ts#L24)

___

### addAll

▸ **addAll**(`index`: *number*, `elements`: *Iterable*<T\>): *number*

Add elements at the specified index.

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | *number* | The index to add into |
| `elements` | *Iterable*<T\> | - |

**Returns:** *number*

The new size of the list

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/arrayList.ts:38](https://github.com/havelessbemore/dastal/blob/cb5e8f6/src/list/arrayList.ts#L38)

___

### clear

▸ **clear**(): *void*

Removes all elements

**Returns:** *void*

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/arrayList.ts:50](https://github.com/havelessbemore/dastal/blob/cb5e8f6/src/list/arrayList.ts#L50)

___

### concat

▸ **concat**(...`lists`: *Iterable*<T\>[]): [*ArrayList*](arraylist.md)<T\>

Combines the list with multiple iterables into a new list.
Does not modify the existing list or inputs.

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `...lists` | *Iterable*<T\>[] | — Additional iterables to add to the end of the list. |

**Returns:** [*ArrayList*](arraylist.md)<T\>

A new list consisting of the elements in the list on which
it is called, followed in order by the elements of each argument. It
does not recurse into nested iterable arguments

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/arrayList.ts:63](https://github.com/havelessbemore/dastal/blob/cb5e8f6/src/list/arrayList.ts#L63)

___

### copyWithin

▸ **copyWithin**(`index`: *number*, `min?`: *number*, `max?`: *number*): [*ArrayList*](arraylist.md)<T\>

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

**Returns:** [*ArrayList*](arraylist.md)<T\>

The list

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/arrayList.ts:87](https://github.com/havelessbemore/dastal/blob/cb5e8f6/src/list/arrayList.ts#L87)

___

### fill

▸ **fill**(`element`: T, `min?`: *number*, `max?`: *number*): [*ArrayList*](arraylist.md)<T\>

Returns the this object after filling the section identified by min and max with element.

Negative indices can be used for min and max to indicate an offset from the
end of the list. For example, -2 refers to the second to last element of the list.

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | T | — element to fill list section with |
| `min?` | *number* | Where to start filling the list, inclusive. Defaults to 0 |
| `max?` | *number* | - |

**Returns:** [*ArrayList*](arraylist.md)<T\>

The list on which this method was called

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/arrayList.ts:106](https://github.com/havelessbemore/dastal/blob/cb5e8f6/src/list/arrayList.ts#L106)

___

### get

▸ **get**(`index`: *number*): *undefined* \| T

Return the element at the specified index.

A negative index can be used for to indicate an offset from the
end of the list. For example, -2 refers to the second to last element of the list.

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | *number* | The index to retrieve |

**Returns:** *undefined* \| T

The element at the index, or `undefined` if index is invalid

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/arrayList.ts:122](https://github.com/havelessbemore/dastal/blob/cb5e8f6/src/list/arrayList.ts#L122)

___

### getSet

▸ **getSet**(`index`: *number*, `callback`: (`element`: T) => T): *undefined* \| T

Update the element at the specified index.

A negative index can be used to indicate an offset from the
end of the list. For example, -2 refers to the second to last element of the list.

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | *number* | The index to retrieve |
| `callback` | (`element`: T) => T | A function that receives the previous element and returns the new element. The function is only called if the index is valid |

**Returns:** *undefined* \| T

The previous element at the index, or `undefined` if index is invalid

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/arrayList.ts:137](https://github.com/havelessbemore/dastal/blob/cb5e8f6/src/list/arrayList.ts#L137)

___

### pop

▸ **pop**(): *undefined* \| T

Retrieves and removes the end of the list

**Returns:** *undefined* \| T

The element at the end of the list, or `undefined` if empty.

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/arrayList.ts:150](https://github.com/havelessbemore/dastal/blob/cb5e8f6/src/list/arrayList.ts#L150)

___

### push

▸ **push**(`element`: T): *number*

Inserts the specified element into the end of the list

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | T | The element to be inserted |

**Returns:** *number*

The new size of the list

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/arrayList.ts:160](https://github.com/havelessbemore/dastal/blob/cb5e8f6/src/list/arrayList.ts#L160)

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

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/arrayList.ts:173](https://github.com/havelessbemore/dastal/blob/cb5e8f6/src/list/arrayList.ts#L173)

___

### reverse

▸ **reverse**(`min?`: *number*, `max?`: *number*): [*ArrayList*](arraylist.md)<T\>

Reverses the elements in the list in place.

Negative indices can be used for min and max to indicate an offset from the
end of the list. For example, -2 refers to the second to last element of the list.

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `min?` | *number* | The beginning index of the specified portion of the list, inclusive. Defaults to 0 |
| `max?` | *number* | The end index of the specified portion of the list, exclusive. Defaults to list.size |

**Returns:** [*ArrayList*](arraylist.md)<T\>

a reference to the same list

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/arrayList.ts:187](https://github.com/havelessbemore/dastal/blob/cb5e8f6/src/list/arrayList.ts#L187)

___

### set

▸ **set**(`index`: *number*, `element`: T): *undefined* \| T

Update the element at the specified index.

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | *number* | The index to retrieve |
| `element` | T | The new element to insert at index |

**Returns:** *undefined* \| T

The previous element in the index, or undefined if the index is invalid

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/arrayList.ts:204](https://github.com/havelessbemore/dastal/blob/cb5e8f6/src/list/arrayList.ts#L204)

___

### shift

▸ **shift**(): *undefined* \| T

Retrieves and removes the first element in the list

**Returns:** *undefined* \| T

The element at the front of the list or `undefined` if this list is empty.

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/arrayList.ts:217](https://github.com/havelessbemore/dastal/blob/cb5e8f6/src/list/arrayList.ts#L217)

___

### slice

▸ **slice**(`min?`: *number*, `max?`: *number*): [*ArrayList*](arraylist.md)<T\>

Returns a copy of a section of the list.

Negative indices can be used for min and max to indicate an offset from the
end of the list. For example, -2 refers to the second to last element of the list.

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `min?` | *number* | The beginning index of the specified portion of the list, inclusive. Defaults to 0 |
| `max?` | *number* | The end index of the specified portion of the list, exclusive. Defaults to list.size |

**Returns:** [*ArrayList*](arraylist.md)<T\>

A new list with a copy of the indicated section of the original list

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/arrayList.ts:237](https://github.com/havelessbemore/dastal/blob/cb5e8f6/src/list/arrayList.ts#L237)

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

Defined in: [src/list/arrayList.ts:264](https://github.com/havelessbemore/dastal/blob/cb5e8f6/src/list/arrayList.ts#L264)

___

### unshift

▸ **unshift**(`element`: T): *number*

Inserts the specified element into the front of the list

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | T | The element to be inserted |

**Returns:** *number*

The new size of the list

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/arrayList.ts:291](https://github.com/havelessbemore/dastal/blob/cb5e8f6/src/list/arrayList.ts#L291)

___

### update

▸ **update**(`callback`: (`element`: T, `index`: *number*) => T): [*ArrayList*](arraylist.md)<T\>

Update the elements of the list

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (`element`: T, `index`: *number*) => T | A function called for each index. Returns the new element |

**Returns:** [*ArrayList*](arraylist.md)<T\>

The list on which this method was called

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/arrayList.ts:301](https://github.com/havelessbemore/dastal/blob/cb5e8f6/src/list/arrayList.ts#L301)

▸ **update**(`min`: *undefined* \| *number*, `callback`: (`element`: T, `index`: *number*) => T): [*ArrayList*](arraylist.md)<T\>

Update the elements of the list

Negative indices can be used to indicate an offset from the
end of the list. For example, -2 refers to the second to last element of the list.

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `min` | *undefined* \| *number* | Where to start filling the list, inclusive. Defaults to 0 |
| `callback` | (`element`: T, `index`: *number*) => T | A function called for each index. Returns the new element |

**Returns:** [*ArrayList*](arraylist.md)<T\>

The list on which this method was called

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/arrayList.ts:313](https://github.com/havelessbemore/dastal/blob/cb5e8f6/src/list/arrayList.ts#L313)

▸ **update**(`min`: *undefined* \| *number*, `max`: *undefined* \| *number*, `callback`: (`element`: T, `index`: *number*) => T): [*ArrayList*](arraylist.md)<T\>

Update the elements of the list

Negative indices can be used for min and max to indicate an offset from the
end of the list. For example, -2 refers to the second to last element of the list.

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `min` | *undefined* \| *number* | Where to start filling the list, inclusive. Defaults to 0 |
| `max` | *undefined* \| *number* | Where to stop filling the list, exclusive. Defaults to list.size |
| `callback` | (`element`: T, `index`: *number*) => T | A function called for each index. Returns the new element |

**Returns:** [*ArrayList*](arraylist.md)<T\>

The list on which this method was called

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/arrayList.ts:326](https://github.com/havelessbemore/dastal/blob/cb5e8f6/src/list/arrayList.ts#L326)

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

Defined in: [src/list/arrayList.ts:366](https://github.com/havelessbemore/dastal/blob/cb5e8f6/src/list/arrayList.ts#L366)
