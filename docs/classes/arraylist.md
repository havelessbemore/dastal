[dastal - v1.0.0](../README.md) / ArrayList

# Class: ArrayList<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

* [*List*](../interfaces/list.md)<T\>

## Table of contents

### Constructors

- [constructor](arraylist.md#constructor)

### Properties

- [array](arraylist.md#array)

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

\+ **new ArrayList**<T\>(`array?`: T[]): [*ArrayList*](arraylist.md)<T\>

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type | Default value |
| :------ | :------ | :------ |
| `array` | T[] | [] |

**Returns:** [*ArrayList*](arraylist.md)<T\>

Defined in: [src/list/arrayList.ts:4](https://github.com/havelessbemore/dastal/blob/7516240/src/list/arrayList.ts#L4)

## Properties

### array

• `Protected` **array**: T[]

Defined in: [src/list/arrayList.ts:4](https://github.com/havelessbemore/dastal/blob/7516240/src/list/arrayList.ts#L4)

## Accessors

### size

• get **size**(): *number*

The number of elements in this list

**Returns:** *number*

Implementation of: [List](../interfaces/list.md).[size](../interfaces/list.md#size)

Defined in: [src/list/arrayList.ts:110](https://github.com/havelessbemore/dastal/blob/7516240/src/list/arrayList.ts#L110)

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator*<T, any, undefined\>

Receive an iterator through the list

**Returns:** *Iterator*<T, any, undefined\>

An iterator through the list

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/arrayList.ts:119](https://github.com/havelessbemore/dastal/blob/7516240/src/list/arrayList.ts#L119)

___

### add

▸ **add**(`index`: *number*, `value`: T): *boolean*

Add the element at the specified index

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | *number* | The index to add into |
| `value` | T | - |

**Returns:** *boolean*

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/arrayList.ts:16](https://github.com/havelessbemore/dastal/blob/7516240/src/list/arrayList.ts#L16)

___

### clear

▸ **clear**(): *void*

Removes all elements

**Returns:** *void*

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/arrayList.ts:24](https://github.com/havelessbemore/dastal/blob/7516240/src/list/arrayList.ts#L24)

___

### get

▸ **get**(`index`: *number*): *undefined* \| T

Return the element at the specified index

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | *number* | The index to retrieve |

**Returns:** *undefined* \| T

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/arrayList.ts:33](https://github.com/havelessbemore/dastal/blob/7516240/src/list/arrayList.ts#L33)

___

### getSet

▸ **getSet**(`index`: *number*, `callback`: (`element`: T) => T): *void*

Update the element at the specified index

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | *number* | The index to retrieve |
| `callback` | (`element`: T) => T | A function that receives the previous element and returns the new element |

**Returns:** *void*

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/arrayList.ts:43](https://github.com/havelessbemore/dastal/blob/7516240/src/list/arrayList.ts#L43)

___

### pop

▸ **pop**(): *undefined* \| T

Retrieves and removes the end of the list

**Returns:** *undefined* \| T

The value at the end of the list or `undefined` if empty.

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/arrayList.ts:54](https://github.com/havelessbemore/dastal/blob/7516240/src/list/arrayList.ts#L54)

___

### push

▸ **push**(`value`: T): *boolean*

Inserts the specified value into the end of the list

#### Parameters:

| Name | Type |
| :------ | :------ |
| `value` | T |

**Returns:** *boolean*

`true` upon success, otherwise `false`

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/arrayList.ts:65](https://github.com/havelessbemore/dastal/blob/7516240/src/list/arrayList.ts#L65)

___

### remove

▸ **remove**(`index`: *number*): *undefined* \| T

Retrieves and removes the element at the given index

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | *number* | The index to remove |

**Returns:** *undefined* \| T

The value at the index or `undefined` if the index does not exist

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/arrayList.ts:77](https://github.com/havelessbemore/dastal/blob/7516240/src/list/arrayList.ts#L77)

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

The previous element in the index, or undefined if the index does not exist

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/arrayList.ts:89](https://github.com/havelessbemore/dastal/blob/7516240/src/list/arrayList.ts#L89)

___

### shift

▸ **shift**(): *undefined* \| T

Retrieves and removes the first element in the list

**Returns:** *undefined* \| T

The value at the front of the list or `undefined` if this list is empty.

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/arrayList.ts:103](https://github.com/havelessbemore/dastal/blob/7516240/src/list/arrayList.ts#L103)

___

### unshift

▸ **unshift**(`value`: T): *boolean*

Inserts the specified value into the front of the list

#### Parameters:

| Name | Type |
| :------ | :------ |
| `value` | T |

**Returns:** *boolean*

`true` upon success, otherwise `false`

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/arrayList.ts:130](https://github.com/havelessbemore/dastal/blob/7516240/src/list/arrayList.ts#L130)
