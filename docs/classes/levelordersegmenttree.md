[dastal - v4.1.0](../README.md) / LevelOrderSegmentTree

# Class: LevelOrderSegmentTree<T\>

A [SegmentTree](../interfaces/segmenttree.md) with entries stored in level-order traversal.
Memory usage: n elements require between 2n-1 to 4(n-1)-1 entries

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- [SegmentTree](../interfaces/segmenttree.md)<T\>

## Table of contents

### Constructors

- [constructor](levelordersegmenttree.md#constructor)

### Properties

- [MAX\_SIZE](levelordersegmenttree.md#max_size)

### Accessors

- [size](levelordersegmenttree.md#size)

### Methods

- [[Symbol.iterator]](levelordersegmenttree.md#[symbol.iterator])
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

[src/segmentTree/levelOrderSegmentTree.ts:39](https://github.com/havelessbemore/dastal/blob/d5a812e/src/segmentTree/levelOrderSegmentTree.ts#L39)

## Properties

### MAX\_SIZE

▪ `Static` `Readonly` **MAX\_SIZE**: `number`

The maximum number of elements that can be added.

n elements require 2^⌈log2(2n)⌉ - 1 memory:

#### Defined in

[src/segmentTree/levelOrderSegmentTree.ts:23](https://github.com/havelessbemore/dastal/blob/d5a812e/src/segmentTree/levelOrderSegmentTree.ts#L23)

## Accessors

### size

• `get` **size**(): `number`

The number of elements in the collection.

#### Returns

`number`

#### Implementation of

[SegmentTree](../interfaces/segmenttree.md).[size](../interfaces/segmenttree.md#size)

#### Defined in

[src/segmentTree/levelOrderSegmentTree.ts:123](https://github.com/havelessbemore/dastal/blob/d5a812e/src/segmentTree/levelOrderSegmentTree.ts#L123)

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): `Iterator`<T, any, undefined\>

Return an iterator through the elements

#### Returns

`Iterator`<T, any, undefined\>

#### Implementation of

[SegmentTree](../interfaces/segmenttree.md).[[Symbol.iterator]](../interfaces/segmenttree.md#[symbol.iterator])

#### Defined in

[src/segmentTree/levelOrderSegmentTree.ts:130](https://github.com/havelessbemore/dastal/blob/d5a812e/src/segmentTree/levelOrderSegmentTree.ts#L130)

___

### clear

▸ **clear**(): `void`

Removes all elements.

#### Returns

`void`

#### Implementation of

[SegmentTree](../interfaces/segmenttree.md).[clear](../interfaces/segmenttree.md#clear)

#### Defined in

[src/segmentTree/levelOrderSegmentTree.ts:54](https://github.com/havelessbemore/dastal/blob/d5a812e/src/segmentTree/levelOrderSegmentTree.ts#L54)

___

### pop

▸ **pop**(): `undefined` \| `T`

Retrieves and removes the last element

#### Returns

`undefined` \| `T`

#### Implementation of

[SegmentTree](../interfaces/segmenttree.md).[pop](../interfaces/segmenttree.md#pop)

#### Defined in

[src/segmentTree/levelOrderSegmentTree.ts:60](https://github.com/havelessbemore/dastal/blob/d5a812e/src/segmentTree/levelOrderSegmentTree.ts#L60)

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

[src/segmentTree/levelOrderSegmentTree.ts:77](https://github.com/havelessbemore/dastal/blob/d5a812e/src/segmentTree/levelOrderSegmentTree.ts#L77)

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

[src/segmentTree/levelOrderSegmentTree.ts:95](https://github.com/havelessbemore/dastal/blob/d5a812e/src/segmentTree/levelOrderSegmentTree.ts#L95)

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

[src/segmentTree/levelOrderSegmentTree.ts:136](https://github.com/havelessbemore/dastal/blob/d5a812e/src/segmentTree/levelOrderSegmentTree.ts#L136)
