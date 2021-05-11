[dastal - v1.0.0](../README.md) / InOrderSegmentTree

# Class: InOrderSegmentTree<T\>

A [SegmentTree](../interfaces/segmenttree.md) with entries stored in in-order traversal.
Inspired by [Tristan Hume's IForestIndex](https://thume.ca/2021/03/14/iforests)([github](https://github.com/trishume/gigatrace))

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

\+ **new InOrderSegmentTree**<T\>(`combine`: [*CombineFn*](../interfaces/combinefn.md)<T\>, `values?`: *Iterable*<T\>): [*InOrderSegmentTree*](inordersegmenttree.md)<T\>

Construct a new [InOrderSegmentTree](inordersegmenttree.md)

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `combine` | [*CombineFn*](../interfaces/combinefn.md)<T\> | - | The function used to aggregate segment information |
| `values` | *Iterable*<T\> | [] | Initial values to [push](inordersegmenttree.md#push) into the tree |

**Returns:** [*InOrderSegmentTree*](inordersegmenttree.md)<T\>

Defined in: src/segmentTree/inOrderSegmentTree.ts:29

## Properties

### array

• `Protected` **array**: T[]

The internal array used to store values and aggregation nodes

Defined in: src/segmentTree/inOrderSegmentTree.ts:24

___

### combine

• `Protected` **combine**: [*CombineFn*](../interfaces/combinefn.md)<T\>

The function used to aggregate values

Defined in: src/segmentTree/inOrderSegmentTree.ts:29

___

### MAX\_SIZE

▪ `Static` `Readonly` **MAX\_SIZE**: ``2147483647``= 2147483647

The maximum amount of values that can be added.

According to [ECMA-262](https://tc39.es/ecma262/#array-index):
   0 <= array.length <= 2^32 - 1

So since n elements require 2n memory:
   0 <= size <= 2^31 - 1/2

Defined in: src/segmentTree/inOrderSegmentTree.ts:19

## Accessors

### size

• get **size**(): *number*

The number of values in the tree
   0 <= size <= [MAX_SIZE](inordersegmenttree.md#max_size)

**Returns:** *number*

Implementation of: [SegmentTree](../interfaces/segmenttree.md).[size](../interfaces/segmenttree.md#size)

Defined in: src/segmentTree/inOrderSegmentTree.ts:145

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator*<T, any, undefined\>

Return an iterator that iterates through the values

**Returns:** *Iterator*<T, any, undefined\>

Implementation of: [SegmentTree](../interfaces/segmenttree.md)

Defined in: src/segmentTree/inOrderSegmentTree.ts:152

___

### build

▸ `Protected`**build**(`values`: *Iterable*<T\>): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `values` | *Iterable*<T\> |

**Returns:** *void*

Defined in: src/segmentTree/inOrderSegmentTree.ts:43

___

### clear

▸ **clear**(): *void*

Remove all values

**Returns:** *void*

Implementation of: [SegmentTree](../interfaces/segmenttree.md)

Defined in: src/segmentTree/inOrderSegmentTree.ts:52

___

### pop

▸ **pop**(): *undefined* \| T

Remove the last added value

**Returns:** *undefined* \| T

The last added value or `undefined` if empty.

Implementation of: [SegmentTree](../interfaces/segmenttree.md)

Defined in: src/segmentTree/inOrderSegmentTree.ts:61

___

### push

▸ **push**(`value`: T): *void*

Insert the given value into the end of the tree

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | T | The value to be inserted |

**Returns:** *void*

Implementation of: [SegmentTree](../interfaces/segmenttree.md)

Defined in: src/segmentTree/inOrderSegmentTree.ts:85

___

### query

▸ **query**(`min`: *number*, `max`: *number*): T

Get the aggregated information for values in a given range

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `min` | *number* | The start of the range, inclusive |
| `max` | *number* | The end of the range, exclusive |

**Returns:** T

The aggregated information for values in range [min, max)

Implementation of: [SegmentTree](../interfaces/segmenttree.md)

Defined in: src/segmentTree/inOrderSegmentTree.ts:113

___

### update

▸ **update**(`min`: *number*, `max`: *number*, `transform`: (`value`: T, `index`: *number*) => T): *void*

Update values in a given range

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `min` | *number* | The start of the range, inclusive |
| `max` | *number* | The end of the range, exclusive |
| `transform` | (`value`: T, `index`: *number*) => T | The callback function doing the updating |

**Returns:** *void*

Implementation of: [SegmentTree](../interfaces/segmenttree.md)

Defined in: src/segmentTree/inOrderSegmentTree.ts:165
