[dastal - v1.0.0](../README.md) / LinkedList

# Class: LinkedList<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

* [*List*](../interfaces/list.md)<T\>

## Table of contents

### Constructors

- [constructor](linkedlist.md#constructor)

### Properties

- [length](linkedlist.md#length)
- [tail](linkedlist.md#tail)

### Accessors

- [size](linkedlist.md#size)

### Methods

- [\_get](linkedlist.md#_get)
- [add](linkedlist.md#add)
- [clear](linkedlist.md#clear)
- [get](linkedlist.md#get)
- [push](linkedlist.md#push)
- [remove](linkedlist.md#remove)
- [set](linkedlist.md#set)
- [shift](linkedlist.md#shift)
- [toArray](linkedlist.md#toarray)
- [unshift](linkedlist.md#unshift)

## Constructors

### constructor

\+ **new LinkedList**<T\>(): [*LinkedList*](linkedlist.md)<T\>

#### Type parameters:

| Name |
| :------ |
| `T` |

**Returns:** [*LinkedList*](linkedlist.md)<T\>

Defined in: [structures/list/linkedList.ts:10](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/list/linkedList.ts#L10)

## Properties

### length

• `Protected` **length**: *number*

Defined in: [structures/list/linkedList.ts:9](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/list/linkedList.ts#L9)

___

### tail

• `Protected` `Optional` **tail**: [*LinkedNode*](../interfaces/linkednode.md)<T\>

Defined in: [structures/list/linkedList.ts:10](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/list/linkedList.ts#L10)

## Accessors

### size

• get **size**(): *number*

The number of elements in this list

**Returns:** *number*

Implementation of: [List](../interfaces/list.md).[size](../interfaces/list.md#size)

Defined in: [structures/list/linkedList.ts:85](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/list/linkedList.ts#L85)

## Methods

### \_get

▸ `Protected`**_get**(`index`: *number*): [*LinkedNode*](../interfaces/linkednode.md)<T\>

#### Parameters:

| Name | Type |
| :------ | :------ |
| `index` | *number* |

**Returns:** [*LinkedNode*](../interfaces/linkednode.md)<T\>

Defined in: [structures/list/linkedList.ts:117](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/list/linkedList.ts#L117)

___

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

Defined in: [structures/list/linkedList.ts:16](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/list/linkedList.ts#L16)

___

### clear

▸ **clear**(): *void*

Removes all elements

**Returns:** *void*

Implementation of: [List](../interfaces/list.md)

Defined in: [structures/list/linkedList.ts:29](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/list/linkedList.ts#L29)

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

Defined in: [structures/list/linkedList.ts:34](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/list/linkedList.ts#L34)

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

Defined in: [structures/list/linkedList.ts:41](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/list/linkedList.ts#L41)

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

Defined in: [structures/list/linkedList.ts:47](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/list/linkedList.ts#L47)

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

Defined in: [structures/list/linkedList.ts:61](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/list/linkedList.ts#L61)

___

### shift

▸ **shift**(): *undefined* \| T

Retrieves and removes the first element in the list

**Returns:** *undefined* \| T

Implementation of: [List](../interfaces/list.md)

Defined in: [structures/list/linkedList.ts:71](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/list/linkedList.ts#L71)

___

### toArray

▸ **toArray**(): T[]

Converts the list into an array

**Returns:** T[]

Implementation of: [List](../interfaces/list.md)

Defined in: [structures/list/linkedList.ts:89](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/list/linkedList.ts#L89)

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

Defined in: [structures/list/linkedList.ts:102](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/list/linkedList.ts#L102)
