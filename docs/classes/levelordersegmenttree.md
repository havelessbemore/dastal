[dastal - v1.0.0](../README.md) / LevelOrderSegmentTree

# Class: LevelOrderSegmentTree<T\>

A [SegmentTree](../interfaces/segmenttree.md) with entries stored in level-order traversal.
Memory usage: n elements require between 2n-1 to 4(n-1)-1 entries

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

* [*SegmentTree*](../interfaces/segmenttree.md)<T\>

## Table of contents

### Constructors

- [constructor](levelordersegmenttree.md#constructor)

### Properties

- [array](levelordersegmenttree.md#array)
- [combine](levelordersegmenttree.md#combine)
- [length](levelordersegmenttree.md#length)
- [level](levelordersegmenttree.md#level)
- [MAX\_SIZE](levelordersegmenttree.md#max_size)

### Accessors

- [size](levelordersegmenttree.md#size)

### Methods

- [[Symbol.iterator]](levelordersegmenttree.md#[symbol.iterator])
- [build](levelordersegmenttree.md#build)
- [clear](levelordersegmenttree.md#clear)
- [grow](levelordersegmenttree.md#grow)
- [pop](levelordersegmenttree.md#pop)
- [push](levelordersegmenttree.md#push)
- [query](levelordersegmenttree.md#query)
- [shrink](levelordersegmenttree.md#shrink)
- [update](levelordersegmenttree.md#update)

## Constructors

### constructor

\+ **new LevelOrderSegmentTree**<T\>(`combine`: [*CombineFn*](../interfaces/combinefn.md)<T\>, `elements?`: *Iterable*<T\>): [*LevelOrderSegmentTree*](levelordersegmenttree.md)<T\>

Construct a new [SegmentTree](../interfaces/segmenttree.md)

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `combine` | [*CombineFn*](../interfaces/combinefn.md)<T\> | - | - |
| `elements` | *Iterable*<T\> | [] | Initial elements to build into the tree |

**Returns:** [*LevelOrderSegmentTree*](levelordersegmenttree.md)<T\>

Defined in: [src/segmentTree/levelOrderSegmentTree.ts:39](https://github.com/havelessbemore/dastal/blob/27768c3/src/segmentTree/levelOrderSegmentTree.ts#L39)

## Properties

### array

• `Protected` **array**: T[]

The internal array used to store elements and aggregation nodes

Defined in: [src/segmentTree/levelOrderSegmentTree.ts:24](https://github.com/havelessbemore/dastal/blob/27768c3/src/segmentTree/levelOrderSegmentTree.ts#L24)

___

### combine

• `Protected` **combine**: [*CombineFn*](../interfaces/combinefn.md)<T\>

The function used to aggregate elements

Defined in: [src/segmentTree/levelOrderSegmentTree.ts:29](https://github.com/havelessbemore/dastal/blob/27768c3/src/segmentTree/levelOrderSegmentTree.ts#L29)

___

### length

• `Protected` **length**: *number*

The used length (size) of our internal array

Defined in: [src/segmentTree/levelOrderSegmentTree.ts:34](https://github.com/havelessbemore/dastal/blob/27768c3/src/segmentTree/levelOrderSegmentTree.ts#L34)

___

### level

• `Protected` **level**: *number*

The start index for the lowest level

Defined in: [src/segmentTree/levelOrderSegmentTree.ts:39](https://github.com/havelessbemore/dastal/blob/27768c3/src/segmentTree/levelOrderSegmentTree.ts#L39)

___

### MAX\_SIZE

▪ `Static` `Readonly` **MAX\_SIZE**: *number*= 2147483648

The maximum number of elements that can be added.

According to [ECMA-262](https://tc39.es/ecma262/#array-index):
    0 <= array.length <= 2^32 - 1

So since n elements require 2^⌊log2(2n)⌋ - 1 memory:
    0 <= size <= 2^31

Defined in: [src/segmentTree/levelOrderSegmentTree.ts:19](https://github.com/havelessbemore/dastal/blob/27768c3/src/segmentTree/levelOrderSegmentTree.ts#L19)

## Accessors

### size

• get **size**(): *number*

The number of elements in the tree:
    0 <= size <= [MAX_SIZE](levelordersegmenttree.md#max_size)

**Returns:** *number*

Implementation of: [SegmentTree](../interfaces/segmenttree.md).[size](../interfaces/segmenttree.md#size)

Defined in: [src/segmentTree/levelOrderSegmentTree.ts:245](https://github.com/havelessbemore/dastal/blob/27768c3/src/segmentTree/levelOrderSegmentTree.ts#L245)

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator*<T, any, undefined\>

Return an iterator through the elements

**Returns:** *Iterator*<T, any, undefined\>

Implementation of: [SegmentTree](../interfaces/segmenttree.md)

Defined in: [src/segmentTree/levelOrderSegmentTree.ts:252](https://github.com/havelessbemore/dastal/blob/27768c3/src/segmentTree/levelOrderSegmentTree.ts#L252)

___

### build

▸ `Protected`**build**(`elements`: *Iterable*<T\>): *void*

A helper method used to build the tree

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `elements` | *Iterable*<T\> | The initial set of elements to add into the tree |

**Returns:** *void*

Defined in: [src/segmentTree/levelOrderSegmentTree.ts:60](https://github.com/havelessbemore/dastal/blob/27768c3/src/segmentTree/levelOrderSegmentTree.ts#L60)

___

### clear

▸ **clear**(): *void*

Remove all elements

**Returns:** *void*

Implementation of: [SegmentTree](../interfaces/segmenttree.md)

Defined in: [src/segmentTree/levelOrderSegmentTree.ts:156](https://github.com/havelessbemore/dastal/blob/27768c3/src/segmentTree/levelOrderSegmentTree.ts#L156)

___

### grow

▸ `Protected`**grow**(): *void*

Shift the tree down a level

**Returns:** *void*

Defined in: [src/segmentTree/levelOrderSegmentTree.ts:108](https://github.com/havelessbemore/dastal/blob/27768c3/src/segmentTree/levelOrderSegmentTree.ts#L108)

___

### pop

▸ **pop**(): *undefined* \| T

Remove the last added element

**Returns:** *undefined* \| T

The last added element or `undefined` if empty.

Implementation of: [SegmentTree](../interfaces/segmenttree.md)

Defined in: [src/segmentTree/levelOrderSegmentTree.ts:167](https://github.com/havelessbemore/dastal/blob/27768c3/src/segmentTree/levelOrderSegmentTree.ts#L167)

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

Defined in: [src/segmentTree/levelOrderSegmentTree.ts:189](https://github.com/havelessbemore/dastal/blob/27768c3/src/segmentTree/levelOrderSegmentTree.ts#L189)

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

Defined in: [src/segmentTree/levelOrderSegmentTree.ts:213](https://github.com/havelessbemore/dastal/blob/27768c3/src/segmentTree/levelOrderSegmentTree.ts#L213)

___

### shrink

▸ `Protected`**shrink**(): *void*

Shift the tree up a level

**Returns:** *void*

Defined in: [src/segmentTree/levelOrderSegmentTree.ts:132](https://github.com/havelessbemore/dastal/blob/27768c3/src/segmentTree/levelOrderSegmentTree.ts#L132)

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

Defined in: [src/segmentTree/levelOrderSegmentTree.ts:265](https://github.com/havelessbemore/dastal/blob/27768c3/src/segmentTree/levelOrderSegmentTree.ts#L265)
