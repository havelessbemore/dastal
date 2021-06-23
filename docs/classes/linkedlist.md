[dastal - v5.0.0](../README.md) / LinkedList

# Class: LinkedList<T\>

A (circular) linked list implementation of the [List](../interfaces/list.md) interface.

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- [List](../interfaces/list.md)<T\>

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

• **new LinkedList**<T\>(`elements?`)

Instantiate the list.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `elements?` | `Iterable`<T\> | A set of elements to initialize the list with. |

#### Defined in

[src/list/linkedList.ts:22](https://github.com/havelessbemore/dastal/blob/93b846d/src/list/linkedList.ts#L22)

## Accessors

### size

• `get` **size**(): `number`

The number of elements in the collection.

#### Returns

`number`

#### Implementation of

[List](../interfaces/list.md).[size](../interfaces/list.md#size)

#### Defined in

[src/list/linkedList.ts:208](https://github.com/havelessbemore/dastal/blob/93b846d/src/list/linkedList.ts#L208)

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): `Iterator`<T, any, undefined\>

Receive an iterator through the list.

**Note:** Unexpected behavior can occur if the collection is modified during iteration.

#### Returns

`Iterator`<T, any, undefined\>

An iterator through the list

#### Implementation of

[List](../interfaces/list.md).[[Symbol.iterator]](../interfaces/list.md#[symbol.iterator])

#### Defined in

[src/list/linkedList.ts:258](https://github.com/havelessbemore/dastal/blob/93b846d/src/list/linkedList.ts#L258)

___

### add

▸ **add**(`index`, `value`): `number`

Add the element at the specified index.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `value` | `T` |

#### Returns

`number`

#### Implementation of

[List](../interfaces/list.md).[add](../interfaces/list.md#add)

#### Defined in

[src/list/linkedList.ts:35](https://github.com/havelessbemore/dastal/blob/93b846d/src/list/linkedList.ts#L35)

___

### addAll

▸ **addAll**(`index`, `elements`): `number`

Add elements at the specified index.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `elements` | `Iterable`<T\> |

#### Returns

`number`

#### Implementation of

[List](../interfaces/list.md).[addAll](../interfaces/list.md#addall)

#### Defined in

[src/list/linkedList.ts:46](https://github.com/havelessbemore/dastal/blob/93b846d/src/list/linkedList.ts#L46)

___

### clear

▸ **clear**(): `void`

Removes all elements.

#### Returns

`void`

#### Implementation of

[List](../interfaces/list.md).[clear](../interfaces/list.md#clear)

#### Defined in

[src/list/linkedList.ts:55](https://github.com/havelessbemore/dastal/blob/93b846d/src/list/linkedList.ts#L55)

___

### concat

▸ **concat**(...`lists`): [LinkedList](linkedlist.md)<T\>

Combines the list with multiple iterables into a new list. Does not modify the existing list or inputs.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...lists` | `Iterable`<T\>[] |

#### Returns

[LinkedList](linkedlist.md)<T\>

#### Implementation of

[List](../interfaces/list.md).[concat](../interfaces/list.md#concat)

#### Defined in

[src/list/linkedList.ts:60](https://github.com/havelessbemore/dastal/blob/93b846d/src/list/linkedList.ts#L60)

___

### copyWithin

▸ **copyWithin**(`index`, `min?`, `max?`): [LinkedList](linkedlist.md)<T\>

Copies a section of the list identified by min and max to the same array at position index.

Negative indices can be used for index, min and max to indicate an offset from the
end of the list. For example, -2 refers to the second to last element of the list.

Note that this method will not change the size of the list. If index is after min,
the copied sequence will be trimmed to fit list.size

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `min?` | `number` |
| `max?` | `number` |

#### Returns

[LinkedList](linkedlist.md)<T\>

#### Implementation of

[List](../interfaces/list.md).[copyWithin](../interfaces/list.md#copywithin)

#### Defined in

[src/list/linkedList.ts:68](https://github.com/havelessbemore/dastal/blob/93b846d/src/list/linkedList.ts#L68)

___

### fill

▸ **fill**(`element`, `min?`, `max?`): [LinkedList](linkedlist.md)<T\>

Returns the this object after filling the section identified by min and max with element.

Negative indices can be used for min and max to indicate an offset from the
end of the list. For example, -2 refers to the second to last element of the list.

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `T` |
| `min?` | `number` |
| `max?` | `number` |

#### Returns

[LinkedList](linkedlist.md)<T\>

#### Implementation of

[List](../interfaces/list.md).[fill](../interfaces/list.md#fill)

#### Defined in

[src/list/linkedList.ts:111](https://github.com/havelessbemore/dastal/blob/93b846d/src/list/linkedList.ts#L111)

___

### get

▸ **get**(`index`): `undefined` \| `T`

Return the element at the specified index.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`undefined` \| `T`

#### Implementation of

[List](../interfaces/list.md).[get](../interfaces/list.md#get)

#### Defined in

[src/list/linkedList.ts:124](https://github.com/havelessbemore/dastal/blob/93b846d/src/list/linkedList.ts#L124)

___

### getSet

▸ **getSet**(`index`, `callback`): `undefined` \| `T`

Update the element at the specified index.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `callback` | (`element`: `T`) => `T` |

#### Returns

`undefined` \| `T`

#### Implementation of

[List](../interfaces/list.md).[getSet](../interfaces/list.md#getset)

#### Defined in

[src/list/linkedList.ts:131](https://github.com/havelessbemore/dastal/blob/93b846d/src/list/linkedList.ts#L131)

___

### pop

▸ **pop**(): `undefined` \| `T`

Retrieves and removes the end of the list.

#### Returns

`undefined` \| `T`

#### Implementation of

[List](../interfaces/list.md).[pop](../interfaces/list.md#pop)

#### Defined in

[src/list/linkedList.ts:141](https://github.com/havelessbemore/dastal/blob/93b846d/src/list/linkedList.ts#L141)

___

### push

▸ **push**(`value`): `number`

Inserts the specified value into the end of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`number`

#### Implementation of

[List](../interfaces/list.md).[push](../interfaces/list.md#push)

#### Defined in

[src/list/linkedList.ts:152](https://github.com/havelessbemore/dastal/blob/93b846d/src/list/linkedList.ts#L152)

___

### remove

▸ **remove**(`index`): `undefined` \| `T`

Retrieves and removes the element at the given index.

A negative index can be used to indicate an offset from the
end of the list. For example, -2 refers to the second to last element of the list.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`undefined` \| `T`

#### Implementation of

[List](../interfaces/list.md).[remove](../interfaces/list.md#remove)

#### Defined in

[src/list/linkedList.ts:159](https://github.com/havelessbemore/dastal/blob/93b846d/src/list/linkedList.ts#L159)

___

### reverse

▸ **reverse**(`min?`, `max?`): [LinkedList](linkedlist.md)<T\>

Reverses the elements in the list in place.

Negative indices can be used for min and max to indicate an offset from the
end of the list. For example, -2 refers to the second to last element of the list.

#### Parameters

| Name | Type |
| :------ | :------ |
| `min?` | `number` |
| `max?` | `number` |

#### Returns

[LinkedList](linkedlist.md)<T\>

#### Implementation of

[List](../interfaces/list.md).[reverse](../interfaces/list.md#reverse)

#### Defined in

[src/list/linkedList.ts:172](https://github.com/havelessbemore/dastal/blob/93b846d/src/list/linkedList.ts#L172)

___

### set

▸ **set**(`index`, `element`): `undefined` \| `T`

Update the element at the specified index.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `element` | `T` |

#### Returns

`undefined` \| `T`

#### Implementation of

[List](../interfaces/list.md).[set](../interfaces/list.md#set)

#### Defined in

[src/list/linkedList.ts:194](https://github.com/havelessbemore/dastal/blob/93b846d/src/list/linkedList.ts#L194)

___

### shift

▸ **shift**(): `undefined` \| `T`

Retrieves and removes the first element in the list.

#### Returns

`undefined` \| `T`

#### Implementation of

[List](../interfaces/list.md).[shift](../interfaces/list.md#shift)

#### Defined in

[src/list/linkedList.ts:204](https://github.com/havelessbemore/dastal/blob/93b846d/src/list/linkedList.ts#L204)

___

### slice

▸ **slice**(`min?`, `max?`): [LinkedList](linkedlist.md)<T\>

Returns a copy of a section of the list.

Negative indices can be used for min and max to indicate an offset from the
end of the list. For example, -2 refers to the second to last element of the list.

#### Parameters

| Name | Type |
| :------ | :------ |
| `min?` | `number` |
| `max?` | `number` |

#### Returns

[LinkedList](linkedlist.md)<T\>

#### Implementation of

[List](../interfaces/list.md).[slice](../interfaces/list.md#slice)

#### Defined in

[src/list/linkedList.ts:212](https://github.com/havelessbemore/dastal/blob/93b846d/src/list/linkedList.ts#L212)

___

### sort

▸ **sort**(`compareFn`): [LinkedList](linkedlist.md)<T\>

Sorts the elements in place.

#### Parameters

| Name | Type |
| :------ | :------ |
| `compareFn` | [CompareFn](../README.md#comparefn)<T\> |

#### Returns

[LinkedList](linkedlist.md)<T\>

#### Implementation of

[List](../interfaces/list.md).[sort](../interfaces/list.md#sort)

#### Defined in

[src/list/linkedList.ts:243](https://github.com/havelessbemore/dastal/blob/93b846d/src/list/linkedList.ts#L243)

___

### splice

▸ **splice**(`start?`, `count?`, `elements?`): [List](../interfaces/list.md)<T\>

Removes elements from the list and optionally inserts new elements in their place.
Returns any deleted elements.

#### Parameters

| Name | Type |
| :------ | :------ |
| `start?` | `number` |
| `count?` | `number` |
| `elements?` | `Iterable`<T\> |

#### Returns

[List](../interfaces/list.md)<T\>

#### Implementation of

[List](../interfaces/list.md).[splice](../interfaces/list.md#splice)

#### Defined in

[src/list/linkedList.ts:216](https://github.com/havelessbemore/dastal/blob/93b846d/src/list/linkedList.ts#L216)

___

### unshift

▸ **unshift**(`value`): `number`

Inserts the specified value into the front of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`number`

#### Implementation of

[List](../interfaces/list.md).[unshift](../interfaces/list.md#unshift)

#### Defined in

[src/list/linkedList.ts:264](https://github.com/havelessbemore/dastal/blob/93b846d/src/list/linkedList.ts#L264)

___

### update

▸ **update**(`callback`): [LinkedList](linkedlist.md)<T\>

Update the elements of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`element`: `T`, `index`: `number`) => `T` |

#### Returns

[LinkedList](linkedlist.md)<T\>

#### Implementation of

[List](../interfaces/list.md).[update](../interfaces/list.md#update)

#### Defined in

[src/list/linkedList.ts:268](https://github.com/havelessbemore/dastal/blob/93b846d/src/list/linkedList.ts#L268)

▸ **update**(`min`, `callback`): [LinkedList](linkedlist.md)<T\>

Update the elements of the list

Negative indices can be used to indicate an offset from the
end of the list. For example, -2 refers to the second to last element of the list.

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `undefined` \| `number` |
| `callback` | (`element`: `T`, `index`: `number`) => `T` |

#### Returns

[LinkedList](linkedlist.md)<T\>

#### Implementation of

[List](../interfaces/list.md).[update](../interfaces/list.md#update)

#### Defined in

[src/list/linkedList.ts:269](https://github.com/havelessbemore/dastal/blob/93b846d/src/list/linkedList.ts#L269)

▸ **update**(`min`, `max`, `callback`): [LinkedList](linkedlist.md)<T\>

Update the elements of the list

Negative indices can be used for min and max to indicate an offset from the
end of the list. For example, -2 refers to the second to last element of the list.

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `undefined` \| `number` |
| `max` | `undefined` \| `number` |
| `callback` | (`element`: `T`, `index`: `number`) => `T` |

#### Returns

[LinkedList](linkedlist.md)<T\>

#### Implementation of

[List](../interfaces/list.md).[update](../interfaces/list.md#update)

#### Defined in

[src/list/linkedList.ts:270](https://github.com/havelessbemore/dastal/blob/93b846d/src/list/linkedList.ts#L270)

___

### view

▸ **view**(`min?`, `max?`): `Iterable`<T\>

Receive an iterator through a section of the list.

Negative indices can be used for min and max to indicate an offset from the
end of the list. For example, -2 refers to the second to last element of the list.

**Note:** Unexpected behavior can occur if the collection is modified during iteration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `min?` | `number` |
| `max?` | `number` |

#### Returns

`Iterable`<T\>

#### Implementation of

[List](../interfaces/list.md).[view](../interfaces/list.md#view)

#### Defined in

[src/list/linkedList.ts:301](https://github.com/havelessbemore/dastal/blob/93b846d/src/list/linkedList.ts#L301)
