[dastal - v4.1.2](../README.md) / SegmentTree

# Interface: SegmentTree<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [Collection](collection.md)<T\>

  ↳ **SegmentTree**

## Implemented by

- [InOrderSegmentTree](../classes/inordersegmenttree.md)
- [LevelOrderSegmentTree](../classes/levelordersegmenttree.md)

## Table of contents

### Properties

- [size](segmenttree.md#size)

### Methods

- [[Symbol.iterator]](segmenttree.md#[symbol.iterator])
- [clear](segmenttree.md#clear)
- [pop](segmenttree.md#pop)
- [push](segmenttree.md#push)
- [query](segmenttree.md#query)
- [update](segmenttree.md#update)

## Properties

### size

• `Readonly` **size**: `number`

The number of elements in the collection.

#### Inherited from

[Collection](collection.md).[size](collection.md#size)

#### Defined in

[src/collection/collection.ts:5](https://github.com/havelessbemore/dastal/blob/20d3f8b/src/collection/collection.ts#L5)

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): `Iterator`<T, any, undefined\>

#### Returns

`Iterator`<T, any, undefined\>

#### Inherited from

[Collection](collection.md).[[Symbol.iterator]](collection.md#[symbol.iterator])

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:51

___

### clear

▸ **clear**(): `void`

Removes all elements.

#### Returns

`void`

#### Defined in

[src/segmentTree/segmentTree.ts:7](https://github.com/havelessbemore/dastal/blob/20d3f8b/src/segmentTree/segmentTree.ts#L7)

___

### pop

▸ **pop**(): `undefined` \| `T`

Retrieves and removes the last element

#### Returns

`undefined` \| `T`

The last element or `undefined` if empty.

#### Defined in

[src/segmentTree/segmentTree.ts:13](https://github.com/havelessbemore/dastal/blob/20d3f8b/src/segmentTree/segmentTree.ts#L13)

___

### push

▸ **push**(`element`): `number`

Appends an element to the tree

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | `T` | The element to be inserted |

#### Returns

`number`

The new size of the tree

#### Defined in

[src/segmentTree/segmentTree.ts:21](https://github.com/havelessbemore/dastal/blob/20d3f8b/src/segmentTree/segmentTree.ts#L21)

___

### query

▸ **query**(`min`, `max`): `T`

Get the aggregated result of a given range in the tree

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `min` | `number` | The start index of the range, inclusive |
| `max` | `number` | The end index of the range, exclusive |

#### Returns

`T`

The aggregated result for range [min, max)

#### Defined in

[src/segmentTree/segmentTree.ts:30](https://github.com/havelessbemore/dastal/blob/20d3f8b/src/segmentTree/segmentTree.ts#L30)

___

### update

▸ **update**(`min`, `max`, `operation`): `void`

Update the elements of a given range in the tree

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `min` | `number` | The start index of the range, inclusive |
| `max` | `number` | The end index of the range, exclusive |
| `operation` | (`element`: `T`, `index`: `number`) => `T` | The update to perform |

#### Returns

`void`

#### Defined in

[src/segmentTree/segmentTree.ts:38](https://github.com/havelessbemore/dastal/blob/20d3f8b/src/segmentTree/segmentTree.ts#L38)
