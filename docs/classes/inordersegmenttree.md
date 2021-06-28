[dastal - v5.0.0](../README.md) / InOrderSegmentTree

# Class: InOrderSegmentTree<T\>

An InOrderSegmentTree is a [SegmentTree](../interfaces/segmenttree.md) that's internally represented as a
binary tree within an array, with nodes stored in in-order traversal. The tree's
leaf nodes represent the elements of the segment tree:

A look at performance and how it works can be found [here](/src/segmentTree/inOrderSegmentTree.md).

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

- [[iterator]](inordersegmenttree.md#[iterator])
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

[src/segmentTree/inOrderSegmentTree.ts:21](https://github.com/havelessbemore/dastal/blob/7d85137/src/segmentTree/inOrderSegmentTree.ts#L21)

## Accessors

### size

• `get` **size**(): `number`

The number of elements in the collection.

#### Returns

`number`

#### Implementation of

[SegmentTree](../interfaces/segmenttree.md).[size](../interfaces/segmenttree.md#size)

#### Defined in

[src/segmentTree/inOrderSegmentTree.ts:95](https://github.com/havelessbemore/dastal/blob/7d85137/src/segmentTree/inOrderSegmentTree.ts#L95)

## Methods

### [iterator]

▸ **[iterator]**(): `Iterator`<T, any, undefined\>

Return an iterator through the tree's elements

#### Returns

`Iterator`<T, any, undefined\>

#### Implementation of

[SegmentTree](../interfaces/segmenttree.md).[[iterator]](../interfaces/segmenttree.md#[iterator])

#### Defined in

[src/segmentTree/inOrderSegmentTree.ts:102](https://github.com/havelessbemore/dastal/blob/7d85137/src/segmentTree/inOrderSegmentTree.ts#L102)

___

### clear

▸ **clear**(): `void`

Removes all elements.

#### Returns

`void`

#### Implementation of

[SegmentTree](../interfaces/segmenttree.md).[clear](../interfaces/segmenttree.md#clear)

#### Defined in

[src/segmentTree/inOrderSegmentTree.ts:36](https://github.com/havelessbemore/dastal/blob/7d85137/src/segmentTree/inOrderSegmentTree.ts#L36)

___

### pop

▸ **pop**(): `undefined` \| `T`

Retrieves and removes the last element

#### Returns

`undefined` \| `T`

#### Implementation of

[SegmentTree](../interfaces/segmenttree.md).[pop](../interfaces/segmenttree.md#pop)

#### Defined in

[src/segmentTree/inOrderSegmentTree.ts:40](https://github.com/havelessbemore/dastal/blob/7d85137/src/segmentTree/inOrderSegmentTree.ts#L40)

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

[src/segmentTree/inOrderSegmentTree.ts:52](https://github.com/havelessbemore/dastal/blob/7d85137/src/segmentTree/inOrderSegmentTree.ts#L52)

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

[src/segmentTree/inOrderSegmentTree.ts:69](https://github.com/havelessbemore/dastal/blob/7d85137/src/segmentTree/inOrderSegmentTree.ts#L69)

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

[src/segmentTree/inOrderSegmentTree.ts:108](https://github.com/havelessbemore/dastal/blob/7d85137/src/segmentTree/inOrderSegmentTree.ts#L108)
