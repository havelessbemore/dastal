[dastal - v1.0.0](../README.md) / InOrderSegmentTree

# Class: InOrderSegmentTree<T\>

A [SegmentTree](../interfaces/segmenttree.md) with entries stored in in-order traversal.
Inspired by [Tristan Hume's IForestIndex](https://thume.ca/2021/03/14/iforests) ([github](https://github.com/trishume/gigatrace))

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

* [*SegmentTree*](../interfaces/segmenttree.md)<T\>

## Table of contents

### Constructors

- [constructor](inordersegmenttree.md#constructor)

### Properties

- [array](inordersegmenttree.md#array)
- [combine](inordersegmenttree.md#combine)
- [MAX\_SIZE](inordersegmenttree.md#max_size)

### Accessors

- [size](inordersegmenttree.md#size)

### Methods

- [[Symbol.iterator]](inordersegmenttree.md#[symbol.iterator])
- [build](inordersegmenttree.md#build)
- [clear](inordersegmenttree.md#clear)
- [pop](inordersegmenttree.md#pop)
- [push](inordersegmenttree.md#push)
- [query](inordersegmenttree.md#query)
- [update](inordersegmenttree.md#update)

## Constructors

### constructor

\+ **new InOrderSegmentTree**<T\>(`combine`: [*CombineFn*](../interfaces/combinefn.md)<T\>, `elements?`: *Iterable*<T\>): [*InOrderSegmentTree*](inordersegmenttree.md)<T\>

Construct a new [InOrderSegmentTree](inordersegmenttree.md)

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `combine` | [*CombineFn*](../interfaces/combinefn.md)<T\> | - | The function used to aggregate segment information |
| `elements` | *Iterable*<T\> | [] | A set of elements to add into the initial tree |

**Returns:** [*InOrderSegmentTree*](inordersegmenttree.md)<T\>

Defined in: [src/segmentTree/inOrderSegmentTree.ts:29](https://github.com/havelessbemore/dastal/blob/7cfb505/src/segmentTree/inOrderSegmentTree.ts#L29)

## Properties

### array

• `Protected` **array**: T[]

The internal array used to store elements and aggregation nodes

Defined in: [src/segmentTree/inOrderSegmentTree.ts:24](https://github.com/havelessbemore/dastal/blob/7cfb505/src/segmentTree/inOrderSegmentTree.ts#L24)

___

### combine

• `Protected` **combine**: [*CombineFn*](../interfaces/combinefn.md)<T\>

The function used to aggregate elements

Defined in: [src/segmentTree/inOrderSegmentTree.ts:29](https://github.com/havelessbemore/dastal/blob/7cfb505/src/segmentTree/inOrderSegmentTree.ts#L29)

___

### MAX\_SIZE

▪ `Static` `Readonly` **MAX\_SIZE**: *number*= 2147483647

The maximum amount of elements that can be added.

According to [ECMA-262](https://tc39.es/ecma262/#array-index):
    0 <= array.length <= 2^32 - 1

Because n elements require 2n memory:
    0 <= size <= 2^31 - 1/2

Defined in: [src/segmentTree/inOrderSegmentTree.ts:19](https://github.com/havelessbemore/dastal/blob/7cfb505/src/segmentTree/inOrderSegmentTree.ts#L19)

## Accessors

### size

• get **size**(): *number*

The number of elements in the tree:
    0 <= size <= [MAX_SIZE](inordersegmenttree.md#max_size)

**Returns:** *number*

Implementation of: [SegmentTree](../interfaces/segmenttree.md).[size](../interfaces/segmenttree.md#size)

Defined in: [src/segmentTree/inOrderSegmentTree.ts:150](https://github.com/havelessbemore/dastal/blob/7cfb505/src/segmentTree/inOrderSegmentTree.ts#L150)

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator*<T, any, undefined\>

Return an iterator through the tree's elements

**Returns:** *Iterator*<T, any, undefined\>

Implementation of: [SegmentTree](../interfaces/segmenttree.md)

Defined in: [src/segmentTree/inOrderSegmentTree.ts:157](https://github.com/havelessbemore/dastal/blob/7cfb505/src/segmentTree/inOrderSegmentTree.ts#L157)

___

### build

▸ `Protected`**build**(`elements`: *Iterable*<T\>): *void*

A helper method used to build the tree

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `elements` | *Iterable*<T\> | The initial set of elements to add into the tree |

**Returns:** *void*

Defined in: [src/segmentTree/inOrderSegmentTree.ts:48](https://github.com/havelessbemore/dastal/blob/7cfb505/src/segmentTree/inOrderSegmentTree.ts#L48)

___

### clear

▸ **clear**(): *void*

Remove all elements

**Returns:** *void*

Implementation of: [SegmentTree](../interfaces/segmenttree.md)

Defined in: [src/segmentTree/inOrderSegmentTree.ts:57](https://github.com/havelessbemore/dastal/blob/7cfb505/src/segmentTree/inOrderSegmentTree.ts#L57)

___

### pop

▸ **pop**(): *undefined* \| T

Remove the last added element

**Returns:** *undefined* \| T

The last added element or `undefined` if empty.

Implementation of: [SegmentTree](../interfaces/segmenttree.md)

Defined in: [src/segmentTree/inOrderSegmentTree.ts:66](https://github.com/havelessbemore/dastal/blob/7cfb505/src/segmentTree/inOrderSegmentTree.ts#L66)

___

### push

▸ **push**(`element`: T): *void*

Insert the given element into the end of the tree

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | T | The element to be inserted |

**Returns:** *void*

Implementation of: [SegmentTree](../interfaces/segmenttree.md)

Defined in: [src/segmentTree/inOrderSegmentTree.ts:90](https://github.com/havelessbemore/dastal/blob/7cfb505/src/segmentTree/inOrderSegmentTree.ts#L90)

___

### query

▸ **query**(`min`: *number*, `max`: *number*): T

Get the aggregated information for elements in a given range

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `min` | *number* | The start of the range, inclusive |
| `max` | *number* | The end of the range, exclusive |

**Returns:** T

The aggregated information for elements in range [min, max)

Implementation of: [SegmentTree](../interfaces/segmenttree.md)

Defined in: [src/segmentTree/inOrderSegmentTree.ts:118](https://github.com/havelessbemore/dastal/blob/7cfb505/src/segmentTree/inOrderSegmentTree.ts#L118)

___

### update

▸ **update**(`min`: *number*, `max`: *number*, `transform`: (`element`: T, `index`: *number*) => T): *void*

Update elements in a given range

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `min` | *number* | The start of the range, inclusive |
| `max` | *number* | The end of the range, exclusive |
| `transform` | (`element`: T, `index`: *number*) => T | The callback function doing the updating |

**Returns:** *void*

Implementation of: [SegmentTree](../interfaces/segmenttree.md)

Defined in: [src/segmentTree/inOrderSegmentTree.ts:170](https://github.com/havelessbemore/dastal/blob/7cfb505/src/segmentTree/inOrderSegmentTree.ts#L170)
