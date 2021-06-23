[dastal - v5.0.0](../README.md) / InOrderSegmentTree

# Class: InOrderSegmentTree<T\>

A [SegmentTree](../interfaces/segmenttree.md) internally represented by a binary tree array, with nodes stored in in-order traversal.

Memory usage: n elements require 2n - 1 space.

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- [SegmentTree](../interfaces/segmenttree.md)<T\>

## Table of contents

### Constructors

- [constructor](inordersegmenttree.md#constructor)

### Accessors

- [size](inordersegmenttree.md#size)

### Methods

- [[Symbol.iterator]](inordersegmenttree.md#[symbol.iterator])
- [clear](inordersegmenttree.md#clear)
- [pop](inordersegmenttree.md#pop)
- [push](inordersegmenttree.md#push)
- [query](inordersegmenttree.md#query)
- [update](inordersegmenttree.md#update)

## Constructors

### constructor

• **new InOrderSegmentTree**<T\>(`combine`, `elements?`)

Construct a new segment tree

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `combine` | [CombineFn](../README.md#combinefn)<T, T\> | `undefined` | The function used to aggregate segment information |
| `elements` | `Iterable`<T\> | [] | A set of elements to add into the initial tree |

#### Defined in

[src/segmentTree/inOrderSegmentTree.ts:37](https://github.com/havelessbemore/dastal/blob/93b846d/src/segmentTree/inOrderSegmentTree.ts#L37)

## Accessors

### size

• `get` **size**(): `number`

The number of elements in the collection.

#### Returns

`number`

#### Implementation of

[SegmentTree](../interfaces/segmenttree.md).[size](../interfaces/segmenttree.md#size)

#### Defined in

[src/segmentTree/inOrderSegmentTree.ts:111](https://github.com/havelessbemore/dastal/blob/93b846d/src/segmentTree/inOrderSegmentTree.ts#L111)

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): `Iterator`<T, any, undefined\>

Return an iterator through the tree's elements

#### Returns

`Iterator`<T, any, undefined\>

#### Implementation of

[SegmentTree](../interfaces/segmenttree.md).[[Symbol.iterator]](../interfaces/segmenttree.md#[symbol.iterator])

#### Defined in

[src/segmentTree/inOrderSegmentTree.ts:118](https://github.com/havelessbemore/dastal/blob/93b846d/src/segmentTree/inOrderSegmentTree.ts#L118)

___

### clear

▸ **clear**(): `void`

Removes all elements.

#### Returns

`void`

#### Implementation of

[SegmentTree](../interfaces/segmenttree.md).[clear](../interfaces/segmenttree.md#clear)

#### Defined in

[src/segmentTree/inOrderSegmentTree.ts:52](https://github.com/havelessbemore/dastal/blob/93b846d/src/segmentTree/inOrderSegmentTree.ts#L52)

___

### pop

▸ **pop**(): `undefined` \| `T`

Retrieves and removes the last element

#### Returns

`undefined` \| `T`

#### Implementation of

[SegmentTree](../interfaces/segmenttree.md).[pop](../interfaces/segmenttree.md#pop)

#### Defined in

[src/segmentTree/inOrderSegmentTree.ts:56](https://github.com/havelessbemore/dastal/blob/93b846d/src/segmentTree/inOrderSegmentTree.ts#L56)

___

### push

▸ **push**(`element`): `number`

Appends an element to the tree

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `T` |

#### Returns

`number`

#### Implementation of

[SegmentTree](../interfaces/segmenttree.md).[push](../interfaces/segmenttree.md#push)

#### Defined in

[src/segmentTree/inOrderSegmentTree.ts:68](https://github.com/havelessbemore/dastal/blob/93b846d/src/segmentTree/inOrderSegmentTree.ts#L68)

___

### query

▸ **query**(`min`, `max`): `T`

Get the aggregated result of a given range in the tree

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `number` |
| `max` | `number` |

#### Returns

`T`

#### Implementation of

[SegmentTree](../interfaces/segmenttree.md).[query](../interfaces/segmenttree.md#query)

#### Defined in

[src/segmentTree/inOrderSegmentTree.ts:85](https://github.com/havelessbemore/dastal/blob/93b846d/src/segmentTree/inOrderSegmentTree.ts#L85)

___

### update

▸ **update**(`min`, `max`, `operation`): `void`

Update the elements of a given range in the tree

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `number` |
| `max` | `number` |
| `operation` | (`element`: `T`, `index`: `number`) => `T` |

#### Returns

`void`

#### Implementation of

[SegmentTree](../interfaces/segmenttree.md).[update](../interfaces/segmenttree.md#update)

#### Defined in

[src/segmentTree/inOrderSegmentTree.ts:124](https://github.com/havelessbemore/dastal/blob/93b846d/src/segmentTree/inOrderSegmentTree.ts#L124)
