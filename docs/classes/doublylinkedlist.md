[dastal - v2.0.0](../README.md) / DoublyLinkedList

# Class: DoublyLinkedList<T\>

A (circular) doubly-linked list implementation of the [List](../interfaces/list.md) interface.

Operations that index into the list will traverse the list from the beginning or the end, whichever is closer to the specified index.

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

* [*List*](../interfaces/list.md)<T\>

## Table of contents

### Constructors

- [constructor](doublylinkedlist.md#constructor)

### Accessors

- [size](doublylinkedlist.md#size)

### Methods

- [[Symbol.iterator]](doublylinkedlist.md#[symbol.iterator])
- [add](doublylinkedlist.md#add)
- [addAll](doublylinkedlist.md#addall)
- [clear](doublylinkedlist.md#clear)
- [concat](doublylinkedlist.md#concat)
- [copyWithin](doublylinkedlist.md#copywithin)
- [fill](doublylinkedlist.md#fill)
- [get](doublylinkedlist.md#get)
- [getSet](doublylinkedlist.md#getset)
- [pop](doublylinkedlist.md#pop)
- [push](doublylinkedlist.md#push)
- [remove](doublylinkedlist.md#remove)
- [reverse](doublylinkedlist.md#reverse)
- [set](doublylinkedlist.md#set)
- [shift](doublylinkedlist.md#shift)
- [slice](doublylinkedlist.md#slice)
- [sort](doublylinkedlist.md#sort)
- [splice](doublylinkedlist.md#splice)
- [unshift](doublylinkedlist.md#unshift)
- [update](doublylinkedlist.md#update)
- [view](doublylinkedlist.md#view)

## Constructors

### constructor

\+ **new DoublyLinkedList**<T\>(`elements?`: *Iterable*<T\>): [*DoublyLinkedList*](doublylinkedlist.md)<T\>

Instantiate the list.

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `elements?` | *Iterable*<T\> | A set of elements to initialize the list with. |

**Returns:** [*DoublyLinkedList*](doublylinkedlist.md)<T\>

Defined in: [src/list/doublyLinkedList.ts:19](https://github.com/havelessbemore/dastal/blob/5cebce9/src/list/doublyLinkedList.ts#L19)

## Accessors

### size

• get **size**(): *number*

The number of elements in this list

**Returns:** *number*

Implementation of: [List](../interfaces/list.md).[size](../interfaces/list.md#size)

Defined in: [src/list/doublyLinkedList.ts:200](https://github.com/havelessbemore/dastal/blob/5cebce9/src/list/doublyLinkedList.ts#L200)

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator*<T, any, undefined\>

Receive an iterator through the list.

**Note:** Unexpected behavior can occur if the collection is modified during iteration.

**Returns:** *Iterator*<T, any, undefined\>

An iterator through the list

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/doublyLinkedList.ts:249](https://github.com/havelessbemore/dastal/blob/5cebce9/src/list/doublyLinkedList.ts#L249)

___

### add

▸ **add**(`index`: *number*, `value`: T): *number*

Add the element at the specified index.

#### Parameters:

| Name | Type |
| :------ | :------ |
| `index` | *number* |
| `value` | T |

**Returns:** *number*

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/doublyLinkedList.ts:32](https://github.com/havelessbemore/dastal/blob/5cebce9/src/list/doublyLinkedList.ts#L32)

___

### addAll

▸ **addAll**(`index`: *number*, `elements`: *Iterable*<T\>): *number*

Add elements at the specified index.

#### Parameters:

| Name | Type |
| :------ | :------ |
| `index` | *number* |
| `elements` | *Iterable*<T\> |

**Returns:** *number*

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/doublyLinkedList.ts:43](https://github.com/havelessbemore/dastal/blob/5cebce9/src/list/doublyLinkedList.ts#L43)

___

### clear

▸ **clear**(): *void*

Removes all elements

**Returns:** *void*

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/doublyLinkedList.ts:50](https://github.com/havelessbemore/dastal/blob/5cebce9/src/list/doublyLinkedList.ts#L50)

___

### concat

▸ **concat**(...`lists`: *Iterable*<T\>[]): [*DoublyLinkedList*](doublylinkedlist.md)<T\>

Combines the list with multiple iterables into a new list. Does not modify the existing list or inputs.

#### Parameters:

| Name | Type |
| :------ | :------ |
| `...lists` | *Iterable*<T\>[] |

**Returns:** [*DoublyLinkedList*](doublylinkedlist.md)<T\>

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/doublyLinkedList.ts:55](https://github.com/havelessbemore/dastal/blob/5cebce9/src/list/doublyLinkedList.ts#L55)

___

### copyWithin

▸ **copyWithin**(`index`: *number*, `min?`: *number*, `max?`: *number*): [*DoublyLinkedList*](doublylinkedlist.md)<T\>

Copies a section of the list identified by min and max to the same array at position index.

Negative indices can be used for index, min and max to indicate an offset from the
end of the list. For example, -2 refers to the second to last element of the list.

Note that this method will not change the size of the list. If index is after min,
the copied sequence will be trimmed to fit list.size

#### Parameters:

| Name | Type |
| :------ | :------ |
| `index` | *number* |
| `min?` | *number* |
| `max?` | *number* |

**Returns:** [*DoublyLinkedList*](doublylinkedlist.md)<T\>

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/doublyLinkedList.ts:63](https://github.com/havelessbemore/dastal/blob/5cebce9/src/list/doublyLinkedList.ts#L63)

___

### fill

▸ **fill**(`element`: T, `min?`: *number*, `max?`: *number*): [*DoublyLinkedList*](doublylinkedlist.md)<T\>

Returns the this object after filling the section identified by min and max with element.

Negative indices can be used for min and max to indicate an offset from the
end of the list. For example, -2 refers to the second to last element of the list.

#### Parameters:

| Name | Type |
| :------ | :------ |
| `element` | T |
| `min?` | *number* |
| `max?` | *number* |

**Returns:** [*DoublyLinkedList*](doublylinkedlist.md)<T\>

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/doublyLinkedList.ts:101](https://github.com/havelessbemore/dastal/blob/5cebce9/src/list/doublyLinkedList.ts#L101)

___

### get

▸ **get**(`index`: *number*): *undefined* \| T

Return the element at the specified index.

#### Parameters:

| Name | Type |
| :------ | :------ |
| `index` | *number* |

**Returns:** *undefined* \| T

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/doublyLinkedList.ts:114](https://github.com/havelessbemore/dastal/blob/5cebce9/src/list/doublyLinkedList.ts#L114)

___

### getSet

▸ **getSet**(`index`: *number*, `callback`: (`element`: T) => T): *undefined* \| T

Update the element at the specified index.

#### Parameters:

| Name | Type |
| :------ | :------ |
| `index` | *number* |
| `callback` | (`element`: T) => T |

**Returns:** *undefined* \| T

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/doublyLinkedList.ts:118](https://github.com/havelessbemore/dastal/blob/5cebce9/src/list/doublyLinkedList.ts#L118)

___

### pop

▸ **pop**(): *undefined* \| T

Retrieves and removes the end of the list.

**Returns:** *undefined* \| T

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/doublyLinkedList.ts:128](https://github.com/havelessbemore/dastal/blob/5cebce9/src/list/doublyLinkedList.ts#L128)

___

### push

▸ **push**(`value`: T): *number*

Inserts the specified value into the end of the list

#### Parameters:

| Name | Type |
| :------ | :------ |
| `value` | T |

**Returns:** *number*

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/doublyLinkedList.ts:139](https://github.com/havelessbemore/dastal/blob/5cebce9/src/list/doublyLinkedList.ts#L139)

___

### remove

▸ **remove**(`index`: *number*): *undefined* \| T

Retrieves and removes the element at the given index.

A negative index can be used to indicate an offset from the
end of the list. For example, -2 refers to the second to last element of the list.

#### Parameters:

| Name | Type |
| :------ | :------ |
| `index` | *number* |

**Returns:** *undefined* \| T

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/doublyLinkedList.ts:146](https://github.com/havelessbemore/dastal/blob/5cebce9/src/list/doublyLinkedList.ts#L146)

___

### reverse

▸ **reverse**(`min?`: *number*, `max?`: *number*): [*DoublyLinkedList*](doublylinkedlist.md)<T\>

Reverses the elements in the list in place.

Negative indices can be used for min and max to indicate an offset from the
end of the list. For example, -2 refers to the second to last element of the list.

#### Parameters:

| Name | Type |
| :------ | :------ |
| `min?` | *number* |
| `max?` | *number* |

**Returns:** [*DoublyLinkedList*](doublylinkedlist.md)<T\>

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/doublyLinkedList.ts:157](https://github.com/havelessbemore/dastal/blob/5cebce9/src/list/doublyLinkedList.ts#L157)

___

### set

▸ **set**(`index`: *number*, `element`: T): *undefined* \| T

Update the element at the specified index.

#### Parameters:

| Name | Type |
| :------ | :------ |
| `index` | *number* |
| `element` | T |

**Returns:** *undefined* \| T

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/doublyLinkedList.ts:179](https://github.com/havelessbemore/dastal/blob/5cebce9/src/list/doublyLinkedList.ts#L179)

___

### shift

▸ **shift**(): *undefined* \| T

Retrieves and removes the first element in the list.

**Returns:** *undefined* \| T

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/doublyLinkedList.ts:189](https://github.com/havelessbemore/dastal/blob/5cebce9/src/list/doublyLinkedList.ts#L189)

___

### slice

▸ **slice**(`min?`: *number*, `max?`: *number*): [*DoublyLinkedList*](doublylinkedlist.md)<T\>

Returns a copy of a section of the list.

Negative indices can be used for min and max to indicate an offset from the
end of the list. For example, -2 refers to the second to last element of the list.

#### Parameters:

| Name | Type |
| :------ | :------ |
| `min?` | *number* |
| `max?` | *number* |

**Returns:** [*DoublyLinkedList*](doublylinkedlist.md)<T\>

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/doublyLinkedList.ts:204](https://github.com/havelessbemore/dastal/blob/5cebce9/src/list/doublyLinkedList.ts#L204)

___

### sort

▸ **sort**(`compareFn`: [*CompareFn*](../README.md#comparefn)<T\>): [*DoublyLinkedList*](doublylinkedlist.md)<T\>

Sorts the elements in place.

#### Parameters:

| Name | Type |
| :------ | :------ |
| `compareFn` | [*CompareFn*](../README.md#comparefn)<T\> |

**Returns:** [*DoublyLinkedList*](doublylinkedlist.md)<T\>

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/doublyLinkedList.ts:234](https://github.com/havelessbemore/dastal/blob/5cebce9/src/list/doublyLinkedList.ts#L234)

___

### splice

▸ **splice**(`start?`: *number*, `count?`: *number*, `elements?`: *Iterable*<T\>): [*List*](../interfaces/list.md)<T\>

Removes elements from the list and optionally inserts new elements in their place.
Returns any deleted elements.

#### Parameters:

| Name | Type |
| :------ | :------ |
| `start?` | *number* |
| `count?` | *number* |
| `elements?` | *Iterable*<T\> |

**Returns:** [*List*](../interfaces/list.md)<T\>

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/doublyLinkedList.ts:208](https://github.com/havelessbemore/dastal/blob/5cebce9/src/list/doublyLinkedList.ts#L208)

___

### unshift

▸ **unshift**(`value`: T): *number*

Inserts the specified value into the front of the list

#### Parameters:

| Name | Type |
| :------ | :------ |
| `value` | T |

**Returns:** *number*

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/doublyLinkedList.ts:255](https://github.com/havelessbemore/dastal/blob/5cebce9/src/list/doublyLinkedList.ts#L255)

___

### update

▸ **update**(`callback`: (`element`: T, `index`: *number*) => T): [*DoublyLinkedList*](doublylinkedlist.md)<T\>

Update the elements of the list

#### Parameters:

| Name | Type |
| :------ | :------ |
| `callback` | (`element`: T, `index`: *number*) => T |

**Returns:** [*DoublyLinkedList*](doublylinkedlist.md)<T\>

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/doublyLinkedList.ts:262](https://github.com/havelessbemore/dastal/blob/5cebce9/src/list/doublyLinkedList.ts#L262)

▸ **update**(`min`: *undefined* \| *number*, `callback`: (`element`: T, `index`: *number*) => T): [*DoublyLinkedList*](doublylinkedlist.md)<T\>

Update the elements of the list

Negative indices can be used to indicate an offset from the
end of the list. For example, -2 refers to the second to last element of the list.

#### Parameters:

| Name | Type |
| :------ | :------ |
| `min` | *undefined* \| *number* |
| `callback` | (`element`: T, `index`: *number*) => T |

**Returns:** [*DoublyLinkedList*](doublylinkedlist.md)<T\>

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/doublyLinkedList.ts:263](https://github.com/havelessbemore/dastal/blob/5cebce9/src/list/doublyLinkedList.ts#L263)

▸ **update**(`min`: *undefined* \| *number*, `max`: *undefined* \| *number*, `callback`: (`element`: T, `index`: *number*) => T): [*DoublyLinkedList*](doublylinkedlist.md)<T\>

Update the elements of the list

Negative indices can be used for min and max to indicate an offset from the
end of the list. For example, -2 refers to the second to last element of the list.

#### Parameters:

| Name | Type |
| :------ | :------ |
| `min` | *undefined* \| *number* |
| `max` | *undefined* \| *number* |
| `callback` | (`element`: T, `index`: *number*) => T |

**Returns:** [*DoublyLinkedList*](doublylinkedlist.md)<T\>

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/doublyLinkedList.ts:264](https://github.com/havelessbemore/dastal/blob/5cebce9/src/list/doublyLinkedList.ts#L264)

___

### view

▸ **view**(`min?`: *number*, `max?`: *number*): *Iterable*<T\>

Receive an iterator through a section of the list.

Negative indices can be used for min and max to indicate an offset from the
end of the list. For example, -2 refers to the second to last element of the list.

**Note:** Unexpected behavior can occur if the collection is modified during iteration.

#### Parameters:

| Name | Type |
| :------ | :------ |
| `min?` | *number* |
| `max?` | *number* |

**Returns:** *Iterable*<T\>

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/doublyLinkedList.ts:295](https://github.com/havelessbemore/dastal/blob/5cebce9/src/list/doublyLinkedList.ts#L295)
