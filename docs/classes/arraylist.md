[dastal - v1.0.0](../README.md) / ArrayList

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
- [get](arraylist.md#get)
- [getSet](arraylist.md#getset)
- [pop](arraylist.md#pop)
- [push](arraylist.md#push)
- [remove](arraylist.md#remove)
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

Defined in: [src/list/arrayList.ts:10](https://github.com/havelessbemore/dastal/blob/4d87fc5/src/list/arrayList.ts#L10)

## Accessors

### size

• get **size**(): *number*

The number of elements in this list

**Returns:** *number*

Implementation of: [List](../interfaces/list.md).[size](../interfaces/list.md#size)

Defined in: [src/list/arrayList.ts:123](https://github.com/havelessbemore/dastal/blob/4d87fc5/src/list/arrayList.ts#L123)

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator*<T, any, undefined\>

Receive an iterator through the list.

**Note:** Unexpected behavior can occur if the collection is modified during iteration.

**Returns:** *Iterator*<T, any, undefined\>

An iterator through the list

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/arrayList.ts:133](https://github.com/havelessbemore/dastal/blob/4d87fc5/src/list/arrayList.ts#L133)

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

Defined in: [src/list/arrayList.ts:23](https://github.com/havelessbemore/dastal/blob/4d87fc5/src/list/arrayList.ts#L23)

___

### clear

▸ **clear**(): *void*

Removes all elements

**Returns:** *void*

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/arrayList.ts:32](https://github.com/havelessbemore/dastal/blob/4d87fc5/src/list/arrayList.ts#L32)

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

Defined in: [src/list/arrayList.ts:42](https://github.com/havelessbemore/dastal/blob/4d87fc5/src/list/arrayList.ts#L42)

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

Defined in: [src/list/arrayList.ts:57](https://github.com/havelessbemore/dastal/blob/4d87fc5/src/list/arrayList.ts#L57)

___

### pop

▸ **pop**(): *undefined* \| T

Retrieves and removes the end of the list

**Returns:** *undefined* \| T

The element at the end of the list, or `undefined` if empty.

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/arrayList.ts:70](https://github.com/havelessbemore/dastal/blob/4d87fc5/src/list/arrayList.ts#L70)

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

Defined in: [src/list/arrayList.ts:80](https://github.com/havelessbemore/dastal/blob/4d87fc5/src/list/arrayList.ts#L80)

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

Defined in: [src/list/arrayList.ts:90](https://github.com/havelessbemore/dastal/blob/4d87fc5/src/list/arrayList.ts#L90)

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

Defined in: [src/list/arrayList.ts:104](https://github.com/havelessbemore/dastal/blob/4d87fc5/src/list/arrayList.ts#L104)

___

### shift

▸ **shift**(): *undefined* \| T

Retrieves and removes the first element in the list

**Returns:** *undefined* \| T

The element at the front of the list or `undefined` if this list is empty.

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/arrayList.ts:117](https://github.com/havelessbemore/dastal/blob/4d87fc5/src/list/arrayList.ts#L117)

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

Defined in: [src/list/arrayList.ts:143](https://github.com/havelessbemore/dastal/blob/4d87fc5/src/list/arrayList.ts#L143)
