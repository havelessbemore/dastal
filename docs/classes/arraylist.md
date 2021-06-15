[dastal - v3.0.0](../README.md) / ArrayList

# Class: ArrayList<T\>

An implementation of the [List](../interfaces/list.md) interface using an array

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- [List](../interfaces/list.md)<T\>

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

• **new ArrayList**<T\>(`elements?`)

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

[src/list/arrayList.ts:13](https://github.com/havelessbemore/dastal/blob/e94627b/src/list/arrayList.ts#L13)

## Accessors

### size

• `get` **size**(): `number`

The number of elements in the collection.

#### Returns

`number`

#### Implementation of

[List](../interfaces/list.md).[size](../interfaces/list.md#size)

#### Defined in

[src/list/arrayList.ts:116](https://github.com/havelessbemore/dastal/blob/e94627b/src/list/arrayList.ts#L116)

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

[src/list/arrayList.ts:146](https://github.com/havelessbemore/dastal/blob/e94627b/src/list/arrayList.ts#L146)

___

### add

▸ **add**(`index`, `element`): `number`

Add the element at the specified index.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `element` | `T` |

#### Returns

`number`

#### Implementation of

[List](../interfaces/list.md).[add](../interfaces/list.md#add)

#### Defined in

[src/list/arrayList.ts:23](https://github.com/havelessbemore/dastal/blob/e94627b/src/list/arrayList.ts#L23)

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

[src/list/arrayList.ts:30](https://github.com/havelessbemore/dastal/blob/e94627b/src/list/arrayList.ts#L30)

___

### clear

▸ **clear**(): `void`

Removes all elements.

#### Returns

`void`

#### Implementation of

[List](../interfaces/list.md).[clear](../interfaces/list.md#clear)

#### Defined in

[src/list/arrayList.ts:40](https://github.com/havelessbemore/dastal/blob/e94627b/src/list/arrayList.ts#L40)

___

### concat

▸ **concat**(...`lists`): [ArrayList](arraylist.md)<T\>

Combines the list with multiple iterables into a new list. Does not modify the existing list or inputs.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...lists` | `Iterable`<T\>[] |

#### Returns

[ArrayList](arraylist.md)<T\>

#### Implementation of

[List](../interfaces/list.md).[concat](../interfaces/list.md#concat)

#### Defined in

[src/list/arrayList.ts:44](https://github.com/havelessbemore/dastal/blob/e94627b/src/list/arrayList.ts#L44)

___

### copyWithin

▸ **copyWithin**(`index`, `min?`, `max?`): [ArrayList](arraylist.md)<T\>

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

[ArrayList](arraylist.md)<T\>

#### Implementation of

[List](../interfaces/list.md).[copyWithin](../interfaces/list.md#copywithin)

#### Defined in

[src/list/arrayList.ts:52](https://github.com/havelessbemore/dastal/blob/e94627b/src/list/arrayList.ts#L52)

___

### fill

▸ **fill**(`element`, `min?`, `max?`): [ArrayList](arraylist.md)<T\>

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

[ArrayList](arraylist.md)<T\>

#### Implementation of

[List](../interfaces/list.md).[fill](../interfaces/list.md#fill)

#### Defined in

[src/list/arrayList.ts:60](https://github.com/havelessbemore/dastal/blob/e94627b/src/list/arrayList.ts#L60)

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

[src/list/arrayList.ts:67](https://github.com/havelessbemore/dastal/blob/e94627b/src/list/arrayList.ts#L67)

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

[src/list/arrayList.ts:71](https://github.com/havelessbemore/dastal/blob/e94627b/src/list/arrayList.ts#L71)

___

### pop

▸ **pop**(): `undefined` \| `T`

Retrieves and removes the end of the list.

#### Returns

`undefined` \| `T`

#### Implementation of

[List](../interfaces/list.md).[pop](../interfaces/list.md#pop)

#### Defined in

[src/list/arrayList.ts:80](https://github.com/havelessbemore/dastal/blob/e94627b/src/list/arrayList.ts#L80)

___

### push

▸ **push**(`element`): `number`

Inserts the specified value into the end of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `T` |

#### Returns

`number`

#### Implementation of

[List](../interfaces/list.md).[push](../interfaces/list.md#push)

#### Defined in

[src/list/arrayList.ts:84](https://github.com/havelessbemore/dastal/blob/e94627b/src/list/arrayList.ts#L84)

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

[src/list/arrayList.ts:88](https://github.com/havelessbemore/dastal/blob/e94627b/src/list/arrayList.ts#L88)

___

### reverse

▸ **reverse**(`min?`, `max?`): [ArrayList](arraylist.md)<T\>

Reverses the elements in the list in place.

Negative indices can be used for min and max to indicate an offset from the
end of the list. For example, -2 refers to the second to last element of the list.

#### Parameters

| Name | Type |
| :------ | :------ |
| `min?` | `number` |
| `max?` | `number` |

#### Returns

[ArrayList](arraylist.md)<T\>

#### Implementation of

[List](../interfaces/list.md).[reverse](../interfaces/list.md#reverse)

#### Defined in

[src/list/arrayList.ts:92](https://github.com/havelessbemore/dastal/blob/e94627b/src/list/arrayList.ts#L92)

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

[src/list/arrayList.ts:103](https://github.com/havelessbemore/dastal/blob/e94627b/src/list/arrayList.ts#L103)

___

### shift

▸ **shift**(): `undefined` \| `T`

Retrieves and removes the first element in the list.

#### Returns

`undefined` \| `T`

#### Implementation of

[List](../interfaces/list.md).[shift](../interfaces/list.md#shift)

#### Defined in

[src/list/arrayList.ts:112](https://github.com/havelessbemore/dastal/blob/e94627b/src/list/arrayList.ts#L112)

___

### slice

▸ **slice**(`min?`, `max?`): [ArrayList](arraylist.md)<T\>

Returns a copy of a section of the list.

Negative indices can be used for min and max to indicate an offset from the
end of the list. For example, -2 refers to the second to last element of the list.

#### Parameters

| Name | Type |
| :------ | :------ |
| `min?` | `number` |
| `max?` | `number` |

#### Returns

[ArrayList](arraylist.md)<T\>

#### Implementation of

[List](../interfaces/list.md).[slice](../interfaces/list.md#slice)

#### Defined in

[src/list/arrayList.ts:120](https://github.com/havelessbemore/dastal/blob/e94627b/src/list/arrayList.ts#L120)

___

### sort

▸ **sort**(`compareFn`): [ArrayList](arraylist.md)<T\>

Sorts the elements in place.

#### Parameters

| Name | Type |
| :------ | :------ |
| `compareFn` | [CompareFn](../README.md#comparefn)<T\> |

#### Returns

[ArrayList](arraylist.md)<T\>

#### Implementation of

[List](../interfaces/list.md).[sort](../interfaces/list.md#sort)

#### Defined in

[src/list/arrayList.ts:135](https://github.com/havelessbemore/dastal/blob/e94627b/src/list/arrayList.ts#L135)

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

[src/list/arrayList.ts:124](https://github.com/havelessbemore/dastal/blob/e94627b/src/list/arrayList.ts#L124)

___

### unshift

▸ **unshift**(`element`): `number`

Inserts the specified value into the front of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `T` |

#### Returns

`number`

#### Implementation of

[List](../interfaces/list.md).[unshift](../interfaces/list.md#unshift)

#### Defined in

[src/list/arrayList.ts:150](https://github.com/havelessbemore/dastal/blob/e94627b/src/list/arrayList.ts#L150)

___

### update

▸ **update**(`callback`): [ArrayList](arraylist.md)<T\>

Update the elements of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`element`: `T`, `index`: `number`) => `T` |

#### Returns

[ArrayList](arraylist.md)<T\>

#### Implementation of

[List](../interfaces/list.md).[update](../interfaces/list.md#update)

#### Defined in

[src/list/arrayList.ts:154](https://github.com/havelessbemore/dastal/blob/e94627b/src/list/arrayList.ts#L154)

▸ **update**(`min`, `callback`): [ArrayList](arraylist.md)<T\>

Update the elements of the list

Negative indices can be used to indicate an offset from the
end of the list. For example, -2 refers to the second to last element of the list.

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `undefined` \| `number` |
| `callback` | (`element`: `T`, `index`: `number`) => `T` |

#### Returns

[ArrayList](arraylist.md)<T\>

#### Implementation of

[List](../interfaces/list.md).[update](../interfaces/list.md#update)

#### Defined in

[src/list/arrayList.ts:155](https://github.com/havelessbemore/dastal/blob/e94627b/src/list/arrayList.ts#L155)

▸ **update**(`min`, `max`, `callback`): [ArrayList](arraylist.md)<T\>

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

[ArrayList](arraylist.md)<T\>

#### Implementation of

[List](../interfaces/list.md).[update](../interfaces/list.md#update)

#### Defined in

[src/list/arrayList.ts:156](https://github.com/havelessbemore/dastal/blob/e94627b/src/list/arrayList.ts#L156)

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

[src/list/arrayList.ts:184](https://github.com/havelessbemore/dastal/blob/e94627b/src/list/arrayList.ts#L184)
