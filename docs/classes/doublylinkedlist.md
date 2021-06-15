[dastal - v3.0.0](../README.md) / DoublyLinkedList

# Class: DoublyLinkedList<T\>

A (circular) doubly-linked list implementation of the [List](../interfaces/list.md) interface.

Operations that index into the list will traverse the list from the beginning or the end, whichever is closer to the specified index.

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- [List](../interfaces/list.md)<T\>

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

• **new DoublyLinkedList**<T\>(`elements?`)

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

[src/list/doublyLinkedList.ts:20](https://github.com/havelessbemore/dastal/blob/e94627b/src/list/doublyLinkedList.ts#L20)

## Accessors

### size

• `get` **size**(): `number`

The number of elements in the collection.

#### Returns

`number`

#### Implementation of

[List](../interfaces/list.md).[size](../interfaces/list.md#size)

#### Defined in

[src/list/doublyLinkedList.ts:201](https://github.com/havelessbemore/dastal/blob/e94627b/src/list/doublyLinkedList.ts#L201)

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

[src/list/doublyLinkedList.ts:250](https://github.com/havelessbemore/dastal/blob/e94627b/src/list/doublyLinkedList.ts#L250)

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

[src/list/doublyLinkedList.ts:33](https://github.com/havelessbemore/dastal/blob/e94627b/src/list/doublyLinkedList.ts#L33)

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

[src/list/doublyLinkedList.ts:44](https://github.com/havelessbemore/dastal/blob/e94627b/src/list/doublyLinkedList.ts#L44)

___

### clear

▸ **clear**(): `void`

Removes all elements.

#### Returns

`void`

#### Implementation of

[List](../interfaces/list.md).[clear](../interfaces/list.md#clear)

#### Defined in

[src/list/doublyLinkedList.ts:51](https://github.com/havelessbemore/dastal/blob/e94627b/src/list/doublyLinkedList.ts#L51)

___

### concat

▸ **concat**(...`lists`): [DoublyLinkedList](doublylinkedlist.md)<T\>

Combines the list with multiple iterables into a new list. Does not modify the existing list or inputs.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...lists` | `Iterable`<T\>[] |

#### Returns

[DoublyLinkedList](doublylinkedlist.md)<T\>

#### Implementation of

[List](../interfaces/list.md).[concat](../interfaces/list.md#concat)

#### Defined in

[src/list/doublyLinkedList.ts:56](https://github.com/havelessbemore/dastal/blob/e94627b/src/list/doublyLinkedList.ts#L56)

___

### copyWithin

▸ **copyWithin**(`index`, `min?`, `max?`): [DoublyLinkedList](doublylinkedlist.md)<T\>

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

[DoublyLinkedList](doublylinkedlist.md)<T\>

#### Implementation of

[List](../interfaces/list.md).[copyWithin](../interfaces/list.md#copywithin)

#### Defined in

[src/list/doublyLinkedList.ts:64](https://github.com/havelessbemore/dastal/blob/e94627b/src/list/doublyLinkedList.ts#L64)

___

### fill

▸ **fill**(`element`, `min?`, `max?`): [DoublyLinkedList](doublylinkedlist.md)<T\>

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

[DoublyLinkedList](doublylinkedlist.md)<T\>

#### Implementation of

[List](../interfaces/list.md).[fill](../interfaces/list.md#fill)

#### Defined in

[src/list/doublyLinkedList.ts:102](https://github.com/havelessbemore/dastal/blob/e94627b/src/list/doublyLinkedList.ts#L102)

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

[src/list/doublyLinkedList.ts:115](https://github.com/havelessbemore/dastal/blob/e94627b/src/list/doublyLinkedList.ts#L115)

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

[src/list/doublyLinkedList.ts:119](https://github.com/havelessbemore/dastal/blob/e94627b/src/list/doublyLinkedList.ts#L119)

___

### pop

▸ **pop**(): `undefined` \| `T`

Retrieves and removes the end of the list.

#### Returns

`undefined` \| `T`

#### Implementation of

[List](../interfaces/list.md).[pop](../interfaces/list.md#pop)

#### Defined in

[src/list/doublyLinkedList.ts:129](https://github.com/havelessbemore/dastal/blob/e94627b/src/list/doublyLinkedList.ts#L129)

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

[src/list/doublyLinkedList.ts:140](https://github.com/havelessbemore/dastal/blob/e94627b/src/list/doublyLinkedList.ts#L140)

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

[src/list/doublyLinkedList.ts:147](https://github.com/havelessbemore/dastal/blob/e94627b/src/list/doublyLinkedList.ts#L147)

___

### reverse

▸ **reverse**(`min?`, `max?`): [DoublyLinkedList](doublylinkedlist.md)<T\>

Reverses the elements in the list in place.

Negative indices can be used for min and max to indicate an offset from the
end of the list. For example, -2 refers to the second to last element of the list.

#### Parameters

| Name | Type |
| :------ | :------ |
| `min?` | `number` |
| `max?` | `number` |

#### Returns

[DoublyLinkedList](doublylinkedlist.md)<T\>

#### Implementation of

[List](../interfaces/list.md).[reverse](../interfaces/list.md#reverse)

#### Defined in

[src/list/doublyLinkedList.ts:158](https://github.com/havelessbemore/dastal/blob/e94627b/src/list/doublyLinkedList.ts#L158)

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

[src/list/doublyLinkedList.ts:180](https://github.com/havelessbemore/dastal/blob/e94627b/src/list/doublyLinkedList.ts#L180)

___

### shift

▸ **shift**(): `undefined` \| `T`

Retrieves and removes the first element in the list.

#### Returns

`undefined` \| `T`

#### Implementation of

[List](../interfaces/list.md).[shift](../interfaces/list.md#shift)

#### Defined in

[src/list/doublyLinkedList.ts:190](https://github.com/havelessbemore/dastal/blob/e94627b/src/list/doublyLinkedList.ts#L190)

___

### slice

▸ **slice**(`min?`, `max?`): [DoublyLinkedList](doublylinkedlist.md)<T\>

Returns a copy of a section of the list.

Negative indices can be used for min and max to indicate an offset from the
end of the list. For example, -2 refers to the second to last element of the list.

#### Parameters

| Name | Type |
| :------ | :------ |
| `min?` | `number` |
| `max?` | `number` |

#### Returns

[DoublyLinkedList](doublylinkedlist.md)<T\>

#### Implementation of

[List](../interfaces/list.md).[slice](../interfaces/list.md#slice)

#### Defined in

[src/list/doublyLinkedList.ts:205](https://github.com/havelessbemore/dastal/blob/e94627b/src/list/doublyLinkedList.ts#L205)

___

### sort

▸ **sort**(`compareFn`): [DoublyLinkedList](doublylinkedlist.md)<T\>

Sorts the elements in place.

#### Parameters

| Name | Type |
| :------ | :------ |
| `compareFn` | [CompareFn](../README.md#comparefn)<T\> |

#### Returns

[DoublyLinkedList](doublylinkedlist.md)<T\>

#### Implementation of

[List](../interfaces/list.md).[sort](../interfaces/list.md#sort)

#### Defined in

[src/list/doublyLinkedList.ts:235](https://github.com/havelessbemore/dastal/blob/e94627b/src/list/doublyLinkedList.ts#L235)

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

[src/list/doublyLinkedList.ts:209](https://github.com/havelessbemore/dastal/blob/e94627b/src/list/doublyLinkedList.ts#L209)

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

[src/list/doublyLinkedList.ts:256](https://github.com/havelessbemore/dastal/blob/e94627b/src/list/doublyLinkedList.ts#L256)

___

### update

▸ **update**(`callback`): [DoublyLinkedList](doublylinkedlist.md)<T\>

Update the elements of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`element`: `T`, `index`: `number`) => `T` |

#### Returns

[DoublyLinkedList](doublylinkedlist.md)<T\>

#### Implementation of

[List](../interfaces/list.md).[update](../interfaces/list.md#update)

#### Defined in

[src/list/doublyLinkedList.ts:263](https://github.com/havelessbemore/dastal/blob/e94627b/src/list/doublyLinkedList.ts#L263)

▸ **update**(`min`, `callback`): [DoublyLinkedList](doublylinkedlist.md)<T\>

Update the elements of the list

Negative indices can be used to indicate an offset from the
end of the list. For example, -2 refers to the second to last element of the list.

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `undefined` \| `number` |
| `callback` | (`element`: `T`, `index`: `number`) => `T` |

#### Returns

[DoublyLinkedList](doublylinkedlist.md)<T\>

#### Implementation of

[List](../interfaces/list.md).[update](../interfaces/list.md#update)

#### Defined in

[src/list/doublyLinkedList.ts:264](https://github.com/havelessbemore/dastal/blob/e94627b/src/list/doublyLinkedList.ts#L264)

▸ **update**(`min`, `max`, `callback`): [DoublyLinkedList](doublylinkedlist.md)<T\>

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

[DoublyLinkedList](doublylinkedlist.md)<T\>

#### Implementation of

[List](../interfaces/list.md).[update](../interfaces/list.md#update)

#### Defined in

[src/list/doublyLinkedList.ts:265](https://github.com/havelessbemore/dastal/blob/e94627b/src/list/doublyLinkedList.ts#L265)

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

[src/list/doublyLinkedList.ts:296](https://github.com/havelessbemore/dastal/blob/e94627b/src/list/doublyLinkedList.ts#L296)
