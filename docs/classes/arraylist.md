[dastal - v1.1.0](../README.md) / ArrayList

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
- [clear](arraylist.md#clear)
- [concat](arraylist.md#concat)
- [fill](arraylist.md#fill)
- [get](arraylist.md#get)
- [getSet](arraylist.md#getset)
- [pop](arraylist.md#pop)
- [push](arraylist.md#push)
- [remove](arraylist.md#remove)
- [reverse](arraylist.md#reverse)
- [set](arraylist.md#set)
- [shift](arraylist.md#shift)
- [unshift](arraylist.md#unshift)

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

Defined in: [src/list/arrayList.ts:10](https://github.com/havelessbemore/dastal/blob/f1eca00/src/list/arrayList.ts#L10)

## Accessors

### size

• get **size**(): *number*

The number of elements in this list

**Returns:** *number*

Implementation of: [List](../interfaces/list.md).[size](../interfaces/list.md#size)

Defined in: [src/list/arrayList.ts:166](https://github.com/havelessbemore/dastal/blob/f1eca00/src/list/arrayList.ts#L166)

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator*<T, any, undefined\>

Receive an iterator through the list.

**Note:** Unexpected behavior can occur if the collection is modified during iteration.

**Returns:** *Iterator*<T, any, undefined\>

An iterator through the list

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/arrayList.ts:176](https://github.com/havelessbemore/dastal/blob/f1eca00/src/list/arrayList.ts#L176)

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

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/arrayList.ts:23](https://github.com/havelessbemore/dastal/blob/f1eca00/src/list/arrayList.ts#L23)

___

### clear

▸ **clear**(): *void*

Removes all elements

**Returns:** *void*

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/arrayList.ts:32](https://github.com/havelessbemore/dastal/blob/f1eca00/src/list/arrayList.ts#L32)

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

Defined in: [src/list/arrayList.ts:45](https://github.com/havelessbemore/dastal/blob/f1eca00/src/list/arrayList.ts#L45)

___

### fill

▸ **fill**(`element`: T, `min?`: *number*, `max?`: *number*): [*ArrayList*](arraylist.md)<T\>

Returns the this object after filling the section identified by min and max with element

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | T | — element to fill list section with |
| `min?` | *number* | index to start filling the list at. If start is negative, it is treated as length+start where length is the length of the list. |
| `max?` | *number* | - |

**Returns:** [*ArrayList*](arraylist.md)<T\>

The list on which this method was called

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/arrayList.ts:65](https://github.com/havelessbemore/dastal/blob/f1eca00/src/list/arrayList.ts#L65)

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

Defined in: [src/list/arrayList.ts:76](https://github.com/havelessbemore/dastal/blob/f1eca00/src/list/arrayList.ts#L76)

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

Defined in: [src/list/arrayList.ts:91](https://github.com/havelessbemore/dastal/blob/f1eca00/src/list/arrayList.ts#L91)

___

### pop

▸ **pop**(): *undefined* \| T

Retrieves and removes the end of the list

**Returns:** *undefined* \| T

The element at the end of the list, or `undefined` if empty.

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/arrayList.ts:104](https://github.com/havelessbemore/dastal/blob/f1eca00/src/list/arrayList.ts#L104)

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

Defined in: [src/list/arrayList.ts:114](https://github.com/havelessbemore/dastal/blob/f1eca00/src/list/arrayList.ts#L114)

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

Defined in: [src/list/arrayList.ts:124](https://github.com/havelessbemore/dastal/blob/f1eca00/src/list/arrayList.ts#L124)

___

### reverse

▸ **reverse**(): [*ArrayList*](arraylist.md)<T\>

Reverses the elements in the list in place.

**Returns:** [*ArrayList*](arraylist.md)<T\>

a reference to the same list

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/arrayList.ts:135](https://github.com/havelessbemore/dastal/blob/f1eca00/src/list/arrayList.ts#L135)

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

Defined in: [src/list/arrayList.ts:147](https://github.com/havelessbemore/dastal/blob/f1eca00/src/list/arrayList.ts#L147)

___

### shift

▸ **shift**(): *undefined* \| T

Retrieves and removes the first element in the list

**Returns:** *undefined* \| T

The element at the front of the list or `undefined` if this list is empty.

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/arrayList.ts:160](https://github.com/havelessbemore/dastal/blob/f1eca00/src/list/arrayList.ts#L160)

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

Defined in: [src/list/arrayList.ts:186](https://github.com/havelessbemore/dastal/blob/f1eca00/src/list/arrayList.ts#L186)
