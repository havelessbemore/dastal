[dastal - v2.0.1](../README.md) / LinkedList

# Class: LinkedList<T\>

A (circular) linked list implementation of the [List](../interfaces/list.md) interface.

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- [*List*](../interfaces/list.md)<T\>

## Table of contents

### Constructors

- [constructor](linkedlist.md#constructor)

### Accessors

- [size](linkedlist.md#size)

### Methods

- [[Symbol.iterator]](linkedlist.md#[symbol.iterator])
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
- [sort](linkedlist.md#sort)
- [splice](linkedlist.md#splice)
- [unshift](linkedlist.md#unshift)
- [update](linkedlist.md#update)
- [view](linkedlist.md#view)

## Constructors

### constructor

\+ **new LinkedList**<T\>(`elements?`: *Iterable*<T\>): [*LinkedList*](linkedlist.md)<T\>

Instantiate the list.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `elements?` | *Iterable*<T\> | A set of elements to initialize the list with. |

**Returns:** [*LinkedList*](linkedlist.md)<T\>

Defined in: [src/list/linkedList.ts:21](https://github.com/havelessbemore/dastal/blob/8c69c82/src/list/linkedList.ts#L21)

## Accessors

### size

• get **size**(): *number*

The number of elements in this list

**Returns:** *number*

Implementation of: [List](../interfaces/list.md).[size](../interfaces/list.md#size)

Defined in: [src/list/linkedList.ts:207](https://github.com/havelessbemore/dastal/blob/8c69c82/src/list/linkedList.ts#L207)

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator*<T, any, undefined\>

Receive an iterator through the list.

**Note:** Unexpected behavior can occur if the collection is modified during iteration.

**Returns:** *Iterator*<T, any, undefined\>

An iterator through the list

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:257](https://github.com/havelessbemore/dastal/blob/8c69c82/src/list/linkedList.ts#L257)

___

### add

▸ **add**(`index`: *number*, `value`: T): *number*

Add the element at the specified index.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | *number* |
| `value` | T |

**Returns:** *number*

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:34](https://github.com/havelessbemore/dastal/blob/8c69c82/src/list/linkedList.ts#L34)

___

### addAll

▸ **addAll**(`index`: *number*, `elements`: *Iterable*<T\>): *number*

Add elements at the specified index.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | *number* |
| `elements` | *Iterable*<T\> |

**Returns:** *number*

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:45](https://github.com/havelessbemore/dastal/blob/8c69c82/src/list/linkedList.ts#L45)

___

### clear

▸ **clear**(): *void*

Removes all elements

**Returns:** *void*

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:54](https://github.com/havelessbemore/dastal/blob/8c69c82/src/list/linkedList.ts#L54)

___

### concat

▸ **concat**(...`lists`: *Iterable*<T\>[]): [*LinkedList*](linkedlist.md)<T\>

Combines the list with multiple iterables into a new list. Does not modify the existing list or inputs.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...lists` | *Iterable*<T\>[] |

**Returns:** [*LinkedList*](linkedlist.md)<T\>

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:59](https://github.com/havelessbemore/dastal/blob/8c69c82/src/list/linkedList.ts#L59)

___

### copyWithin

▸ **copyWithin**(`index`: *number*, `min?`: *number*, `max?`: *number*): [*LinkedList*](linkedlist.md)<T\>

Copies a section of the list identified by min and max to the same array at position index.

Negative indices can be used for index, min and max to indicate an offset from the
end of the list. For example, -2 refers to the second to last element of the list.

Note that this method will not change the size of the list. If index is after min,
the copied sequence will be trimmed to fit list.size

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | *number* |
| `min?` | *number* |
| `max?` | *number* |

**Returns:** [*LinkedList*](linkedlist.md)<T\>

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:67](https://github.com/havelessbemore/dastal/blob/8c69c82/src/list/linkedList.ts#L67)

___

### fill

▸ **fill**(`element`: T, `min?`: *number*, `max?`: *number*): [*LinkedList*](linkedlist.md)<T\>

Returns the this object after filling the section identified by min and max with element.

Negative indices can be used for min and max to indicate an offset from the
end of the list. For example, -2 refers to the second to last element of the list.

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | T |
| `min?` | *number* |
| `max?` | *number* |

**Returns:** [*LinkedList*](linkedlist.md)<T\>

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:110](https://github.com/havelessbemore/dastal/blob/8c69c82/src/list/linkedList.ts#L110)

___

### get

▸ **get**(`index`: *number*): *undefined* \| T

Return the element at the specified index.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | *number* |

**Returns:** *undefined* \| T

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:123](https://github.com/havelessbemore/dastal/blob/8c69c82/src/list/linkedList.ts#L123)

___

### getSet

▸ **getSet**(`index`: *number*, `callback`: (`element`: T) => T): *undefined* \| T

Update the element at the specified index.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | *number* |
| `callback` | (`element`: T) => T |

**Returns:** *undefined* \| T

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:130](https://github.com/havelessbemore/dastal/blob/8c69c82/src/list/linkedList.ts#L130)

___

### pop

▸ **pop**(): *undefined* \| T

Retrieves and removes the end of the list.

**Returns:** *undefined* \| T

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:140](https://github.com/havelessbemore/dastal/blob/8c69c82/src/list/linkedList.ts#L140)

___

### push

▸ **push**(`value`: T): *number*

Inserts the specified value into the end of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | T |

**Returns:** *number*

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:151](https://github.com/havelessbemore/dastal/blob/8c69c82/src/list/linkedList.ts#L151)

___

### remove

▸ **remove**(`index`: *number*): *undefined* \| T

Retrieves and removes the element at the given index.

A negative index can be used to indicate an offset from the
end of the list. For example, -2 refers to the second to last element of the list.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | *number* |

**Returns:** *undefined* \| T

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:158](https://github.com/havelessbemore/dastal/blob/8c69c82/src/list/linkedList.ts#L158)

___

### reverse

▸ **reverse**(`min?`: *number*, `max?`: *number*): [*LinkedList*](linkedlist.md)<T\>

Reverses the elements in the list in place.

Negative indices can be used for min and max to indicate an offset from the
end of the list. For example, -2 refers to the second to last element of the list.

#### Parameters

| Name | Type |
| :------ | :------ |
| `min?` | *number* |
| `max?` | *number* |

**Returns:** [*LinkedList*](linkedlist.md)<T\>

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:171](https://github.com/havelessbemore/dastal/blob/8c69c82/src/list/linkedList.ts#L171)

___

### set

▸ **set**(`index`: *number*, `element`: T): *undefined* \| T

Update the element at the specified index.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | *number* |
| `element` | T |

**Returns:** *undefined* \| T

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:193](https://github.com/havelessbemore/dastal/blob/8c69c82/src/list/linkedList.ts#L193)

___

### shift

▸ **shift**(): *undefined* \| T

Retrieves and removes the first element in the list.

**Returns:** *undefined* \| T

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:203](https://github.com/havelessbemore/dastal/blob/8c69c82/src/list/linkedList.ts#L203)

___

### slice

▸ **slice**(`min?`: *number*, `max?`: *number*): [*LinkedList*](linkedlist.md)<T\>

Returns a copy of a section of the list.

Negative indices can be used for min and max to indicate an offset from the
end of the list. For example, -2 refers to the second to last element of the list.

#### Parameters

| Name | Type |
| :------ | :------ |
| `min?` | *number* |
| `max?` | *number* |

**Returns:** [*LinkedList*](linkedlist.md)<T\>

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:211](https://github.com/havelessbemore/dastal/blob/8c69c82/src/list/linkedList.ts#L211)

___

### sort

▸ **sort**(`compareFn`: [*CompareFn*](../README.md#comparefn)<T\>): [*LinkedList*](linkedlist.md)<T\>

Sorts the elements in place.

#### Parameters

| Name | Type |
| :------ | :------ |
| `compareFn` | [*CompareFn*](../README.md#comparefn)<T\> |

**Returns:** [*LinkedList*](linkedlist.md)<T\>

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:242](https://github.com/havelessbemore/dastal/blob/8c69c82/src/list/linkedList.ts#L242)

___

### splice

▸ **splice**(`start?`: *number*, `count?`: *number*, `elements?`: *Iterable*<T\>): [*List*](../interfaces/list.md)<T\>

Removes elements from the list and optionally inserts new elements in their place.
Returns any deleted elements.

#### Parameters

| Name | Type |
| :------ | :------ |
| `start?` | *number* |
| `count?` | *number* |
| `elements?` | *Iterable*<T\> |

**Returns:** [*List*](../interfaces/list.md)<T\>

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:215](https://github.com/havelessbemore/dastal/blob/8c69c82/src/list/linkedList.ts#L215)

___

### unshift

▸ **unshift**(`value`: T): *number*

Inserts the specified value into the front of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | T |

**Returns:** *number*

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:263](https://github.com/havelessbemore/dastal/blob/8c69c82/src/list/linkedList.ts#L263)

___

### update

▸ **update**(`callback`: (`element`: T, `index`: *number*) => T): [*LinkedList*](linkedlist.md)<T\>

Update the elements of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`element`: T, `index`: *number*) => T |

**Returns:** [*LinkedList*](linkedlist.md)<T\>

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:267](https://github.com/havelessbemore/dastal/blob/8c69c82/src/list/linkedList.ts#L267)

▸ **update**(`min`: *undefined* \| *number*, `callback`: (`element`: T, `index`: *number*) => T): [*LinkedList*](linkedlist.md)<T\>

Update the elements of the list

Negative indices can be used to indicate an offset from the
end of the list. For example, -2 refers to the second to last element of the list.

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | *undefined* \| *number* |
| `callback` | (`element`: T, `index`: *number*) => T |

**Returns:** [*LinkedList*](linkedlist.md)<T\>

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:268](https://github.com/havelessbemore/dastal/blob/8c69c82/src/list/linkedList.ts#L268)

▸ **update**(`min`: *undefined* \| *number*, `max`: *undefined* \| *number*, `callback`: (`element`: T, `index`: *number*) => T): [*LinkedList*](linkedlist.md)<T\>

Update the elements of the list

Negative indices can be used for min and max to indicate an offset from the
end of the list. For example, -2 refers to the second to last element of the list.

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | *undefined* \| *number* |
| `max` | *undefined* \| *number* |
| `callback` | (`element`: T, `index`: *number*) => T |

**Returns:** [*LinkedList*](linkedlist.md)<T\>

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:269](https://github.com/havelessbemore/dastal/blob/8c69c82/src/list/linkedList.ts#L269)

___

### view

▸ **view**(`min?`: *number*, `max?`: *number*): *Iterable*<T\>

Receive an iterator through a section of the list.

Negative indices can be used for min and max to indicate an offset from the
end of the list. For example, -2 refers to the second to last element of the list.

**Note:** Unexpected behavior can occur if the collection is modified during iteration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `min?` | *number* |
| `max?` | *number* |

**Returns:** *Iterable*<T\>

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:300](https://github.com/havelessbemore/dastal/blob/8c69c82/src/list/linkedList.ts#L300)
