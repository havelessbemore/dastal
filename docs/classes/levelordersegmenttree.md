[dastal - v5.0.0](../README.md) / LevelOrderSegmentTree

# Class: LevelOrderSegmentTree<T\>

A [SegmentTree](../interfaces/segmenttree.md) internally represented as a binary
tree within an array, with nodes stored in level-order traversal.

Memory usage: n elements require n - 1 + 2**(⌊log<sub>2</sub>(n-1)⌋ + 1) space.

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- [SegmentTree](../interfaces/segmenttree.md)<T\>

## Table of contents

### Constructors

- [constructor](levelordersegmenttree.md#constructor)

### Accessors

- [size](levelordersegmenttree.md#size)

### Methods

- [[iterator]](levelordersegmenttree.md#[iterator])
- [clear](levelordersegmenttree.md#clear)
- [pop](levelordersegmenttree.md#pop)
- [push](levelordersegmenttree.md#push)
- [query](levelordersegmenttree.md#query)
- [update](levelordersegmenttree.md#update)

## Constructors

### constructor

• **new LevelOrderSegmentTree**<T\>(`combine`, `elements?`)

Construct a new [SegmentTree](../interfaces/segmenttree.md)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `combine` | [CombineFn](../README.md#combinefn)<T, T\> | `undefined` | - |
| `elements` | `Iterable`<T\> | [] | Initial elements to build into the tree |

#### Defined in

[src/segmentTree/levelOrderSegmentTree.ts:59](https://github.com/havelessbemore/dastal/blob/cd6a1d0/src/segmentTree/levelOrderSegmentTree.ts#L59)

## Accessors

### size

• `get` **size**(): `number`

The number of elements in the collection.

#### Returns

`number`

#### Implementation of

[SegmentTree](../interfaces/segmenttree.md).[size](../interfaces/segmenttree.md#size)

#### Defined in

[src/segmentTree/levelOrderSegmentTree.ts:143](https://github.com/havelessbemore/dastal/blob/cd6a1d0/src/segmentTree/levelOrderSegmentTree.ts#L143)

## Methods

### [iterator]

▸ **[iterator]**(): `Iterator`<T, any, undefined\>

Return an iterator through the elements

#### Returns

`Iterator`<T, any, undefined\>

#### Implementation of

[SegmentTree](../interfaces/segmenttree.md).[[iterator]](../interfaces/segmenttree.md#[iterator])

#### Defined in

[src/segmentTree/levelOrderSegmentTree.ts:150](https://github.com/havelessbemore/dastal/blob/cd6a1d0/src/segmentTree/levelOrderSegmentTree.ts#L150)

___

### clear

▸ **clear**(): `void`

Removes all elements.

#### Returns

`void`

#### Implementation of

[SegmentTree](../interfaces/segmenttree.md).[clear](../interfaces/segmenttree.md#clear)

#### Defined in

[src/segmentTree/levelOrderSegmentTree.ts:74](https://github.com/havelessbemore/dastal/blob/cd6a1d0/src/segmentTree/levelOrderSegmentTree.ts#L74)

___

### pop

▸ **pop**(): `undefined` \| `T`

Retrieves and removes the last element

#### Returns

`undefined` \| `T`

#### Implementation of

[SegmentTree](../interfaces/segmenttree.md).[pop](../interfaces/segmenttree.md#pop)

#### Defined in

[src/segmentTree/levelOrderSegmentTree.ts:80](https://github.com/havelessbemore/dastal/blob/cd6a1d0/src/segmentTree/levelOrderSegmentTree.ts#L80)

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

[src/segmentTree/levelOrderSegmentTree.ts:97](https://github.com/havelessbemore/dastal/blob/cd6a1d0/src/segmentTree/levelOrderSegmentTree.ts#L97)

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

[src/segmentTree/levelOrderSegmentTree.ts:115](https://github.com/havelessbemore/dastal/blob/cd6a1d0/src/segmentTree/levelOrderSegmentTree.ts#L115)

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

[src/segmentTree/levelOrderSegmentTree.ts:156](https://github.com/havelessbemore/dastal/blob/cd6a1d0/src/segmentTree/levelOrderSegmentTree.ts#L156)
