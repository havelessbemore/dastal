[dastal - v1.0.0](../README.md) / DoublyLinkedList

# Class: DoublyLinkedList<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

* [*List*](../interfaces/list.md)<T\>

## Table of contents

### Constructors

- [constructor](doublylinkedlist.md#constructor)

### Properties

- [length](doublylinkedlist.md#length)
- [root](doublylinkedlist.md#root)

### Accessors

- [size](doublylinkedlist.md#size)

### Methods

- [[Symbol.iterator]](doublylinkedlist.md#[symbol.iterator])
- [\_get](doublylinkedlist.md#_get)
- [add](doublylinkedlist.md#add)
- [clear](doublylinkedlist.md#clear)
- [get](doublylinkedlist.md#get)
- [getSet](doublylinkedlist.md#getset)
- [pop](doublylinkedlist.md#pop)
- [push](doublylinkedlist.md#push)
- [remove](doublylinkedlist.md#remove)
- [set](doublylinkedlist.md#set)
- [shift](doublylinkedlist.md#shift)
- [unshift](doublylinkedlist.md#unshift)

## Constructors

### constructor

\+ **new DoublyLinkedList**<T\>(): [*DoublyLinkedList*](doublylinkedlist.md)<T\>

#### Type parameters:

| Name |
| :------ |
| `T` |

**Returns:** [*DoublyLinkedList*](doublylinkedlist.md)<T\>

Defined in: [src/list/doublyLinkedList.ts:11](https://github.com/havelessbemore/dastal/blob/7516240/src/list/doublyLinkedList.ts#L11)

## Properties

### length

• `Protected` **length**: *number*

Defined in: [src/list/doublyLinkedList.ts:10](https://github.com/havelessbemore/dastal/blob/7516240/src/list/doublyLinkedList.ts#L10)

___

### root

• `Protected` **root**: [*DoublyLinkedNode*](../interfaces/doublylinkednode.md)<T\>

Defined in: [src/list/doublyLinkedList.ts:11](https://github.com/havelessbemore/dastal/blob/7516240/src/list/doublyLinkedList.ts#L11)

## Accessors

### size

• get **size**(): *number*

The number of elements in this list

**Returns:** *number*

Implementation of: [List](../interfaces/list.md).[size](../interfaces/list.md#size)

Defined in: [src/list/doublyLinkedList.ts:152](https://github.com/havelessbemore/dastal/blob/7516240/src/list/doublyLinkedList.ts#L152)

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator*<T, any, undefined\>

Receive an iterator through the list

**Returns:** *Iterator*<T, any, undefined\>

An iterator through the list

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/doublyLinkedList.ts:161](https://github.com/havelessbemore/dastal/blob/7516240/src/list/doublyLinkedList.ts#L161)

___

### \_get

▸ `Protected`**_get**(`index`: *number*): [*DoublyLinkedNode*](../interfaces/doublylinkednode.md)<T\>

#### Parameters:

| Name | Type |
| :------ | :------ |
| `index` | *number* |

**Returns:** [*DoublyLinkedNode*](../interfaces/doublylinkednode.md)<T\>

Defined in: [src/list/doublyLinkedList.ts:184](https://github.com/havelessbemore/dastal/blob/7516240/src/list/doublyLinkedList.ts#L184)

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

Defined in: [src/list/doublyLinkedList.ts:25](https://github.com/havelessbemore/dastal/blob/7516240/src/list/doublyLinkedList.ts#L25)

___

### clear

▸ **clear**(): *void*

Removes all elements

**Returns:** *void*

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/doublyLinkedList.ts:39](https://github.com/havelessbemore/dastal/blob/7516240/src/list/doublyLinkedList.ts#L39)

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

Defined in: [src/list/doublyLinkedList.ts:49](https://github.com/havelessbemore/dastal/blob/7516240/src/list/doublyLinkedList.ts#L49)

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

Defined in: [src/list/doublyLinkedList.ts:59](https://github.com/havelessbemore/dastal/blob/7516240/src/list/doublyLinkedList.ts#L59)

___

### pop

▸ **pop**(): *undefined* \| T

Retrieves and removes the end of the list

**Returns:** *undefined* \| T

The value at the end of the list or `undefined` if empty.

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/doublyLinkedList.ts:71](https://github.com/havelessbemore/dastal/blob/7516240/src/list/doublyLinkedList.ts#L71)

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

Defined in: [src/list/doublyLinkedList.ts:89](https://github.com/havelessbemore/dastal/blob/7516240/src/list/doublyLinkedList.ts#L89)

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

Defined in: [src/list/doublyLinkedList.ts:104](https://github.com/havelessbemore/dastal/blob/7516240/src/list/doublyLinkedList.ts#L104)

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

Defined in: [src/list/doublyLinkedList.ts:123](https://github.com/havelessbemore/dastal/blob/7516240/src/list/doublyLinkedList.ts#L123)

___

### shift

▸ **shift**(): *undefined* \| T

Retrieves and removes the first element in the list

**Returns:** *undefined* \| T

The value at the front of the list or `undefined` if this list is empty.

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/doublyLinkedList.ts:138](https://github.com/havelessbemore/dastal/blob/7516240/src/list/doublyLinkedList.ts#L138)

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

Defined in: [src/list/doublyLinkedList.ts:176](https://github.com/havelessbemore/dastal/blob/7516240/src/list/doublyLinkedList.ts#L176)
