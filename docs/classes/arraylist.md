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

- [add](arraylist.md#add)
- [clear](arraylist.md#clear)
- [get](arraylist.md#get)
- [pop](arraylist.md#pop)
- [push](arraylist.md#push)
- [remove](arraylist.md#remove)
- [set](arraylist.md#set)
- [shift](arraylist.md#shift)
- [toArray](arraylist.md#toarray)
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

Defined in: [structures/list/arrayList.ts:4](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/list/arrayList.ts#L4)

## Properties

### array

• `Protected` **array**: T[]

Defined in: [structures/list/arrayList.ts:4](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/list/arrayList.ts#L4)

## Accessors

### size

• get **size**(): *number*

The number of elements in this list

**Returns:** *number*

Implementation of: [List](../interfaces/list.md).[size](../interfaces/list.md#size)

Defined in: [structures/list/arrayList.ts:49](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/list/arrayList.ts#L49)

## Methods

### add

▸ **add**(`index`: *number*, `value`: T): *boolean*

Add the element at the specified index

#### Parameters:

| Name | Type |
| :------ | :------ |
| `index` | *number* |
| `value` | T |

**Returns:** *boolean*

Implementation of: [List](../interfaces/list.md)

Defined in: [structures/list/arrayList.ts:10](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/list/arrayList.ts#L10)

___

### clear

▸ **clear**(): *void*

Removes all elements

**Returns:** *void*

Implementation of: [List](../interfaces/list.md)

Defined in: [structures/list/arrayList.ts:15](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/list/arrayList.ts#L15)

___

### get

▸ **get**(`index`: *number*): *undefined* \| T

Return the element at the specified index

#### Parameters:

| Name | Type |
| :------ | :------ |
| `index` | *number* |

**Returns:** *undefined* \| T

Implementation of: [List](../interfaces/list.md)

Defined in: [structures/list/arrayList.ts:19](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/list/arrayList.ts#L19)

___

### pop

▸ **pop**(): *undefined* \| T

Retrieves and removes the end of the list

**Returns:** *undefined* \| T

Implementation of: [List](../interfaces/list.md)

Defined in: [structures/list/arrayList.ts:23](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/list/arrayList.ts#L23)

___

### push

▸ **push**(`value`: T): *boolean*

Inserts the specified value into the end of the list

#### Parameters:

| Name | Type |
| :------ | :------ |
| `value` | T |

**Returns:** *boolean*

Implementation of: [List](../interfaces/list.md)

Defined in: [structures/list/arrayList.ts:27](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/list/arrayList.ts#L27)

___

### remove

▸ **remove**(`index`: *number*): *undefined* \| T

Retrieves and removes the element at the given index

#### Parameters:

| Name | Type |
| :------ | :------ |
| `index` | *number* |

**Returns:** *undefined* \| T

Implementation of: [List](../interfaces/list.md)

Defined in: [structures/list/arrayList.ts:32](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/list/arrayList.ts#L32)

___

### set

▸ **set**(`index`: *number*, `element`: T): *undefined* \| T

Update the element at the specified index

#### Parameters:

| Name | Type |
| :------ | :------ |
| `index` | *number* |
| `element` | T |

**Returns:** *undefined* \| T

Implementation of: [List](../interfaces/list.md)

Defined in: [structures/list/arrayList.ts:36](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/list/arrayList.ts#L36)

___

### shift

▸ **shift**(): *undefined* \| T

Retrieves and removes the first element in the list

**Returns:** *undefined* \| T

Implementation of: [List](../interfaces/list.md)

Defined in: [structures/list/arrayList.ts:45](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/list/arrayList.ts#L45)

___

### toArray

▸ **toArray**(): T[]

Converts the list into an array

**Returns:** T[]

Implementation of: [List](../interfaces/list.md)

Defined in: [structures/list/arrayList.ts:53](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/list/arrayList.ts#L53)

___

### unshift

▸ **unshift**(`value`: T): *boolean*

Inserts the specified value into the front of the list

#### Parameters:

| Name | Type |
| :------ | :------ |
| `value` | T |

**Returns:** *boolean*

Implementation of: [List](../interfaces/list.md)

Defined in: [structures/list/arrayList.ts:57](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/list/arrayList.ts#L57)
