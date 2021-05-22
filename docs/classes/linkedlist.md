[dastal - v1.4.0](../README.md) / LinkedList

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

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `elements?` | *Iterable*<T\> | A set of elements to initialize the list with. |

**Returns:** [*LinkedList*](linkedlist.md)<T\>

Defined in: [src/list/linkedList.ts:35](https://github.com/havelessbemore/dastal/blob/dba59a5/src/list/linkedList.ts#L35)

## Accessors

### size

• get **size**(): *number*

The number of elements in this list

**Returns:** *number*

Implementation of: [List](../interfaces/list.md).[size](../interfaces/list.md#size)

Defined in: [src/list/linkedList.ts:221](https://github.com/havelessbemore/dastal/blob/dba59a5/src/list/linkedList.ts#L221)

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator*<T, any, undefined\>

Receive an iterator through the list.

**Note:** Unexpected behavior can occur if the collection is modified during iteration.

**Returns:** *Iterator*<T, any, undefined\>

An iterator through the list

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:271](https://github.com/havelessbemore/dastal/blob/dba59a5/src/list/linkedList.ts#L271)

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

Defined in: [src/list/linkedList.ts:48](https://github.com/havelessbemore/dastal/blob/dba59a5/src/list/linkedList.ts#L48)

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

Defined in: [src/list/linkedList.ts:59](https://github.com/havelessbemore/dastal/blob/dba59a5/src/list/linkedList.ts#L59)

___

### clear

▸ **clear**(): *void*

Removes all elements

**Returns:** *void*

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:68](https://github.com/havelessbemore/dastal/blob/dba59a5/src/list/linkedList.ts#L68)

___

### concat

▸ **concat**(...`lists`: *Iterable*<T\>[]): [*LinkedList*](linkedlist.md)<T\>

Combines the list with multiple iterables into a new list. Does not modify the existing list or inputs.

#### Parameters:

| Name | Type |
| :------ | :------ |
| `...lists` | *Iterable*<T\>[] |

**Returns:** [*LinkedList*](linkedlist.md)<T\>

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:73](https://github.com/havelessbemore/dastal/blob/dba59a5/src/list/linkedList.ts#L73)

___

### copyWithin

▸ **copyWithin**(`index`: *number*, `min?`: *number*, `max?`: *number*): [*LinkedList*](linkedlist.md)<T\>

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

**Returns:** [*LinkedList*](linkedlist.md)<T\>

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:81](https://github.com/havelessbemore/dastal/blob/dba59a5/src/list/linkedList.ts#L81)

___

### fill

▸ **fill**(`element`: T, `min?`: *number*, `max?`: *number*): [*LinkedList*](linkedlist.md)<T\>

Returns the this object after filling the section identified by min and max with element.

Negative indices can be used for min and max to indicate an offset from the
end of the list. For example, -2 refers to the second to last element of the list.

#### Parameters:

| Name | Type |
| :------ | :------ |
| `element` | T |
| `min?` | *number* |
| `max?` | *number* |

**Returns:** [*LinkedList*](linkedlist.md)<T\>

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:124](https://github.com/havelessbemore/dastal/blob/dba59a5/src/list/linkedList.ts#L124)

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

Defined in: [src/list/linkedList.ts:137](https://github.com/havelessbemore/dastal/blob/dba59a5/src/list/linkedList.ts#L137)

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

Defined in: [src/list/linkedList.ts:144](https://github.com/havelessbemore/dastal/blob/dba59a5/src/list/linkedList.ts#L144)

___

### pop

▸ **pop**(): *undefined* \| T

Retrieves and removes the end of the list.

**Returns:** *undefined* \| T

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:154](https://github.com/havelessbemore/dastal/blob/dba59a5/src/list/linkedList.ts#L154)

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

Defined in: [src/list/linkedList.ts:165](https://github.com/havelessbemore/dastal/blob/dba59a5/src/list/linkedList.ts#L165)

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

Defined in: [src/list/linkedList.ts:172](https://github.com/havelessbemore/dastal/blob/dba59a5/src/list/linkedList.ts#L172)

___

### reverse

▸ **reverse**(`min?`: *number*, `max?`: *number*): [*LinkedList*](linkedlist.md)<T\>

Reverses the elements in the list in place.

Negative indices can be used for min and max to indicate an offset from the
end of the list. For example, -2 refers to the second to last element of the list.

#### Parameters:

| Name | Type |
| :------ | :------ |
| `min?` | *number* |
| `max?` | *number* |

**Returns:** [*LinkedList*](linkedlist.md)<T\>

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:185](https://github.com/havelessbemore/dastal/blob/dba59a5/src/list/linkedList.ts#L185)

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

Defined in: [src/list/linkedList.ts:207](https://github.com/havelessbemore/dastal/blob/dba59a5/src/list/linkedList.ts#L207)

___

### shift

▸ **shift**(): *undefined* \| T

Retrieves and removes the first element in the list.

**Returns:** *undefined* \| T

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:217](https://github.com/havelessbemore/dastal/blob/dba59a5/src/list/linkedList.ts#L217)

___

### slice

▸ **slice**(`min?`: *number*, `max?`: *number*): [*LinkedList*](linkedlist.md)<T\>

Returns a copy of a section of the list.

Negative indices can be used for min and max to indicate an offset from the
end of the list. For example, -2 refers to the second to last element of the list.

#### Parameters:

| Name | Type |
| :------ | :------ |
| `min?` | *number* |
| `max?` | *number* |

**Returns:** [*LinkedList*](linkedlist.md)<T\>

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:225](https://github.com/havelessbemore/dastal/blob/dba59a5/src/list/linkedList.ts#L225)

___

### sort

▸ **sort**(`compareFn`: [*CompareFn*](../README.md#comparefn)<T\>): [*LinkedList*](linkedlist.md)<T\>

Sorts the elements in place.

#### Parameters:

| Name | Type |
| :------ | :------ |
| `compareFn` | [*CompareFn*](../README.md#comparefn)<T\> |

**Returns:** [*LinkedList*](linkedlist.md)<T\>

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:256](https://github.com/havelessbemore/dastal/blob/dba59a5/src/list/linkedList.ts#L256)

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

Defined in: [src/list/linkedList.ts:229](https://github.com/havelessbemore/dastal/blob/dba59a5/src/list/linkedList.ts#L229)

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

Defined in: [src/list/linkedList.ts:277](https://github.com/havelessbemore/dastal/blob/dba59a5/src/list/linkedList.ts#L277)

___

### update

▸ **update**(`callback`: (`element`: T, `index`: *number*) => T): [*LinkedList*](linkedlist.md)<T\>

Update the elements of the list

#### Parameters:

| Name | Type |
| :------ | :------ |
| `callback` | (`element`: T, `index`: *number*) => T |

**Returns:** [*LinkedList*](linkedlist.md)<T\>

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:281](https://github.com/havelessbemore/dastal/blob/dba59a5/src/list/linkedList.ts#L281)

▸ **update**(`min`: *undefined* \| *number*, `callback`: (`element`: T, `index`: *number*) => T): [*LinkedList*](linkedlist.md)<T\>

Update the elements of the list

Negative indices can be used to indicate an offset from the
end of the list. For example, -2 refers to the second to last element of the list.

#### Parameters:

| Name | Type |
| :------ | :------ |
| `min` | *undefined* \| *number* |
| `callback` | (`element`: T, `index`: *number*) => T |

**Returns:** [*LinkedList*](linkedlist.md)<T\>

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:282](https://github.com/havelessbemore/dastal/blob/dba59a5/src/list/linkedList.ts#L282)

▸ **update**(`min`: *undefined* \| *number*, `max`: *undefined* \| *number*, `callback`: (`element`: T, `index`: *number*) => T): [*LinkedList*](linkedlist.md)<T\>

Update the elements of the list

Negative indices can be used for min and max to indicate an offset from the
end of the list. For example, -2 refers to the second to last element of the list.

#### Parameters:

| Name | Type |
| :------ | :------ |
| `min` | *undefined* \| *number* |
| `max` | *undefined* \| *number* |
| `callback` | (`element`: T, `index`: *number*) => T |

**Returns:** [*LinkedList*](linkedlist.md)<T\>

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/linkedList.ts:283](https://github.com/havelessbemore/dastal/blob/dba59a5/src/list/linkedList.ts#L283)

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

Defined in: [src/list/linkedList.ts:314](https://github.com/havelessbemore/dastal/blob/dba59a5/src/list/linkedList.ts#L314)
