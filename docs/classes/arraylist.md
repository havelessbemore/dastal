[dastal - v2.0.0](../README.md) / ArrayList

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
- [sort](arraylist.md#sort)
- [splice](arraylist.md#splice)
- [unshift](arraylist.md#unshift)
- [update](arraylist.md#update)
- [view](arraylist.md#view)

## Constructors

### constructor

\+ **new ArrayList**<T\>(`elements?`: *Iterable*<T\>): [*ArrayList*](arraylist.md)<T\>

Instantiate the list.

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `elements?` | *Iterable*<T\> | A set of elements to initialize the list with. |

**Returns:** [*ArrayList*](arraylist.md)<T\>

Defined in: [src/list/arrayList.ts:12](https://github.com/havelessbemore/dastal/blob/5cebce9/src/list/arrayList.ts#L12)

## Accessors

### size

• get **size**(): *number*

The number of elements in this list

**Returns:** *number*

Implementation of: [List](../interfaces/list.md).[size](../interfaces/list.md#size)

Defined in: [src/list/arrayList.ts:115](https://github.com/havelessbemore/dastal/blob/5cebce9/src/list/arrayList.ts#L115)

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator*<T, any, undefined\>

Receive an iterator through the list.

**Note:** Unexpected behavior can occur if the collection is modified during iteration.

**Returns:** *Iterator*<T, any, undefined\>

An iterator through the list

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/arrayList.ts:145](https://github.com/havelessbemore/dastal/blob/5cebce9/src/list/arrayList.ts#L145)

___

### add

▸ **add**(`index`: *number*, `element`: T): *number*

Add the element at the specified index.

#### Parameters:

| Name | Type |
| :------ | :------ |
| `index` | *number* |
| `element` | T |

**Returns:** *number*

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/arrayList.ts:22](https://github.com/havelessbemore/dastal/blob/5cebce9/src/list/arrayList.ts#L22)

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

Defined in: [src/list/arrayList.ts:29](https://github.com/havelessbemore/dastal/blob/5cebce9/src/list/arrayList.ts#L29)

___

### clear

▸ **clear**(): *void*

Removes all elements

**Returns:** *void*

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/arrayList.ts:39](https://github.com/havelessbemore/dastal/blob/5cebce9/src/list/arrayList.ts#L39)

___

### concat

▸ **concat**(...`lists`: *Iterable*<T\>[]): [*ArrayList*](arraylist.md)<T\>

Combines the list with multiple iterables into a new list. Does not modify the existing list or inputs.

#### Parameters:

| Name | Type |
| :------ | :------ |
| `...lists` | *Iterable*<T\>[] |

**Returns:** [*ArrayList*](arraylist.md)<T\>

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/arrayList.ts:43](https://github.com/havelessbemore/dastal/blob/5cebce9/src/list/arrayList.ts#L43)

___

### copyWithin

▸ **copyWithin**(`index`: *number*, `min?`: *number*, `max?`: *number*): [*ArrayList*](arraylist.md)<T\>

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

**Returns:** [*ArrayList*](arraylist.md)<T\>

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/arrayList.ts:51](https://github.com/havelessbemore/dastal/blob/5cebce9/src/list/arrayList.ts#L51)

___

### fill

▸ **fill**(`element`: T, `min?`: *number*, `max?`: *number*): [*ArrayList*](arraylist.md)<T\>

Returns the this object after filling the section identified by min and max with element.

Negative indices can be used for min and max to indicate an offset from the
end of the list. For example, -2 refers to the second to last element of the list.

#### Parameters:

| Name | Type |
| :------ | :------ |
| `element` | T |
| `min?` | *number* |
| `max?` | *number* |

**Returns:** [*ArrayList*](arraylist.md)<T\>

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/arrayList.ts:59](https://github.com/havelessbemore/dastal/blob/5cebce9/src/list/arrayList.ts#L59)

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

Defined in: [src/list/arrayList.ts:66](https://github.com/havelessbemore/dastal/blob/5cebce9/src/list/arrayList.ts#L66)

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

Defined in: [src/list/arrayList.ts:70](https://github.com/havelessbemore/dastal/blob/5cebce9/src/list/arrayList.ts#L70)

___

### pop

▸ **pop**(): *undefined* \| T

Retrieves and removes the end of the list.

**Returns:** *undefined* \| T

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/arrayList.ts:79](https://github.com/havelessbemore/dastal/blob/5cebce9/src/list/arrayList.ts#L79)

___

### push

▸ **push**(`element`: T): *number*

Inserts the specified value into the end of the list

#### Parameters:

| Name | Type |
| :------ | :------ |
| `element` | T |

**Returns:** *number*

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/arrayList.ts:83](https://github.com/havelessbemore/dastal/blob/5cebce9/src/list/arrayList.ts#L83)

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

Defined in: [src/list/arrayList.ts:87](https://github.com/havelessbemore/dastal/blob/5cebce9/src/list/arrayList.ts#L87)

___

### reverse

▸ **reverse**(`min?`: *number*, `max?`: *number*): [*ArrayList*](arraylist.md)<T\>

Reverses the elements in the list in place.

Negative indices can be used for min and max to indicate an offset from the
end of the list. For example, -2 refers to the second to last element of the list.

#### Parameters:

| Name | Type |
| :------ | :------ |
| `min?` | *number* |
| `max?` | *number* |

**Returns:** [*ArrayList*](arraylist.md)<T\>

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/arrayList.ts:91](https://github.com/havelessbemore/dastal/blob/5cebce9/src/list/arrayList.ts#L91)

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

Defined in: [src/list/arrayList.ts:102](https://github.com/havelessbemore/dastal/blob/5cebce9/src/list/arrayList.ts#L102)

___

### shift

▸ **shift**(): *undefined* \| T

Retrieves and removes the first element in the list.

**Returns:** *undefined* \| T

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/arrayList.ts:111](https://github.com/havelessbemore/dastal/blob/5cebce9/src/list/arrayList.ts#L111)

___

### slice

▸ **slice**(`min?`: *number*, `max?`: *number*): [*ArrayList*](arraylist.md)<T\>

Returns a copy of a section of the list.

Negative indices can be used for min and max to indicate an offset from the
end of the list. For example, -2 refers to the second to last element of the list.

#### Parameters:

| Name | Type |
| :------ | :------ |
| `min?` | *number* |
| `max?` | *number* |

**Returns:** [*ArrayList*](arraylist.md)<T\>

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/arrayList.ts:119](https://github.com/havelessbemore/dastal/blob/5cebce9/src/list/arrayList.ts#L119)

___

### sort

▸ **sort**(`compareFn`: [*CompareFn*](../README.md#comparefn)<T\>): [*ArrayList*](arraylist.md)<T\>

Sorts the elements in place.

#### Parameters:

| Name | Type |
| :------ | :------ |
| `compareFn` | [*CompareFn*](../README.md#comparefn)<T\> |

**Returns:** [*ArrayList*](arraylist.md)<T\>

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/arrayList.ts:134](https://github.com/havelessbemore/dastal/blob/5cebce9/src/list/arrayList.ts#L134)

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

Defined in: [src/list/arrayList.ts:123](https://github.com/havelessbemore/dastal/blob/5cebce9/src/list/arrayList.ts#L123)

___

### unshift

▸ **unshift**(`element`: T): *number*

Inserts the specified value into the front of the list

#### Parameters:

| Name | Type |
| :------ | :------ |
| `element` | T |

**Returns:** *number*

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/arrayList.ts:149](https://github.com/havelessbemore/dastal/blob/5cebce9/src/list/arrayList.ts#L149)

___

### update

▸ **update**(`callback`: (`element`: T, `index`: *number*) => T): [*ArrayList*](arraylist.md)<T\>

Update the elements of the list

#### Parameters:

| Name | Type |
| :------ | :------ |
| `callback` | (`element`: T, `index`: *number*) => T |

**Returns:** [*ArrayList*](arraylist.md)<T\>

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/arrayList.ts:153](https://github.com/havelessbemore/dastal/blob/5cebce9/src/list/arrayList.ts#L153)

▸ **update**(`min`: *undefined* \| *number*, `callback`: (`element`: T, `index`: *number*) => T): [*ArrayList*](arraylist.md)<T\>

Update the elements of the list

Negative indices can be used to indicate an offset from the
end of the list. For example, -2 refers to the second to last element of the list.

#### Parameters:

| Name | Type |
| :------ | :------ |
| `min` | *undefined* \| *number* |
| `callback` | (`element`: T, `index`: *number*) => T |

**Returns:** [*ArrayList*](arraylist.md)<T\>

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/arrayList.ts:154](https://github.com/havelessbemore/dastal/blob/5cebce9/src/list/arrayList.ts#L154)

▸ **update**(`min`: *undefined* \| *number*, `max`: *undefined* \| *number*, `callback`: (`element`: T, `index`: *number*) => T): [*ArrayList*](arraylist.md)<T\>

Update the elements of the list

Negative indices can be used for min and max to indicate an offset from the
end of the list. For example, -2 refers to the second to last element of the list.

#### Parameters:

| Name | Type |
| :------ | :------ |
| `min` | *undefined* \| *number* |
| `max` | *undefined* \| *number* |
| `callback` | (`element`: T, `index`: *number*) => T |

**Returns:** [*ArrayList*](arraylist.md)<T\>

Implementation of: [List](../interfaces/list.md)

Defined in: [src/list/arrayList.ts:155](https://github.com/havelessbemore/dastal/blob/5cebce9/src/list/arrayList.ts#L155)

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

Defined in: [src/list/arrayList.ts:183](https://github.com/havelessbemore/dastal/blob/5cebce9/src/list/arrayList.ts#L183)
