[dastal - v4.1.1](../README.md) / InOrderSegmentTree

# Class: InOrderSegmentTree<T\>

A [SegmentTree](../interfaces/segmenttree.md) with entries stored in in-order traversal.
Inspired by [Tristan Hume's IForestIndex](https://thume.ca/2021/03/14/iforests) ([github](https://github.com/trishume/gigatrace))

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- [SegmentTree](../interfaces/segmenttree.md)<T\>

## Table of contents

### Constructors

- [constructor](inordersegmenttree.md#constructor)

### Properties

- [MAX\_SIZE](inordersegmenttree.md#max_size)

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

[src/segmentTree/inOrderSegmentTree.ts:33](https://github.com/havelessbemore/dastal/blob/351eddf/src/segmentTree/inOrderSegmentTree.ts#L33)

## Properties

### MAX\_SIZE

▪ `Static` `Readonly` **MAX\_SIZE**: `number`

The maximum amount of elements that can be added.

n elements require 2n memory.

#### Defined in

[src/segmentTree/inOrderSegmentTree.ts:25](https://github.com/havelessbemore/dastal/blob/351eddf/src/segmentTree/inOrderSegmentTree.ts#L25)

## Accessors

### size

• `get` **size**(): `number`

The number of elements in the collection.

#### Returns

`number`

#### Implementation of

[SegmentTree](../interfaces/segmenttree.md).[size](../interfaces/segmenttree.md#size)

#### Defined in

[src/segmentTree/inOrderSegmentTree.ts:107](https://github.com/havelessbemore/dastal/blob/351eddf/src/segmentTree/inOrderSegmentTree.ts#L107)

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): `Iterator`<T, any, undefined\>

Return an iterator through the tree's elements

#### Returns

`Iterator`<T, any, undefined\>

#### Implementation of

[SegmentTree](../interfaces/segmenttree.md).[[Symbol.iterator]](../interfaces/segmenttree.md#[symbol.iterator])

#### Defined in

[src/segmentTree/inOrderSegmentTree.ts:114](https://github.com/havelessbemore/dastal/blob/351eddf/src/segmentTree/inOrderSegmentTree.ts#L114)

___

### clear

▸ **clear**(): `void`

Removes all elements.

#### Returns

`void`

#### Implementation of

[SegmentTree](../interfaces/segmenttree.md).[clear](../interfaces/segmenttree.md#clear)

#### Defined in

[src/segmentTree/inOrderSegmentTree.ts:46](https://github.com/havelessbemore/dastal/blob/351eddf/src/segmentTree/inOrderSegmentTree.ts#L46)

___

### pop

▸ **pop**(): `undefined` \| `T`

Retrieves and removes the last element

#### Returns

`undefined` \| `T`

#### Implementation of

[SegmentTree](../interfaces/segmenttree.md).[pop](../interfaces/segmenttree.md#pop)

#### Defined in

[src/segmentTree/inOrderSegmentTree.ts:50](https://github.com/havelessbemore/dastal/blob/351eddf/src/segmentTree/inOrderSegmentTree.ts#L50)

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

[src/segmentTree/inOrderSegmentTree.ts:68](https://github.com/havelessbemore/dastal/blob/351eddf/src/segmentTree/inOrderSegmentTree.ts#L68)

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

[src/segmentTree/inOrderSegmentTree.ts:81](https://github.com/havelessbemore/dastal/blob/351eddf/src/segmentTree/inOrderSegmentTree.ts#L81)

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

[src/segmentTree/inOrderSegmentTree.ts:120](https://github.com/havelessbemore/dastal/blob/351eddf/src/segmentTree/inOrderSegmentTree.ts#L120)
