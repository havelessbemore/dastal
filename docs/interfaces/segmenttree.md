[dastal - v1.0.0](../README.md) / SegmentTree

# Interface: SegmentTree<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

* *Iterable*<T\>

  ↳ **SegmentTree**

## Implemented by

* [*InOrderSegmentTree*](../classes/inordersegmenttree.md)
* [*LevelOrderSegmentTree*](../classes/levelordersegmenttree.md)

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

• `Readonly` **size**: *number*

Defined in: [src/segmentTree/segmentTree.ts:6](https://github.com/havelessbemore/dastal/blob/27768c3/src/segmentTree/segmentTree.ts#L6)

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator*<T, any, undefined\>

**Returns:** *Iterator*<T, any, undefined\>

Inherited from: Iterable.\_\_@iterator

Defined in: node_modules/typescript/lib/lib.es2015.iterable.d.ts:51

___

### clear

▸ **clear**(): *void*

**Returns:** *void*

Defined in: [src/segmentTree/segmentTree.ts:2](https://github.com/havelessbemore/dastal/blob/27768c3/src/segmentTree/segmentTree.ts#L2)

___

### pop

▸ **pop**(): *undefined* \| T

**Returns:** *undefined* \| T

Defined in: [src/segmentTree/segmentTree.ts:3](https://github.com/havelessbemore/dastal/blob/27768c3/src/segmentTree/segmentTree.ts#L3)

___

### push

▸ **push**(`value`: T): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `value` | T |

**Returns:** *void*

Defined in: [src/segmentTree/segmentTree.ts:4](https://github.com/havelessbemore/dastal/blob/27768c3/src/segmentTree/segmentTree.ts#L4)

___

### query

▸ **query**(`min`: *number*, `max`: *number*): T

#### Parameters:

| Name | Type |
| :------ | :------ |
| `min` | *number* |
| `max` | *number* |

**Returns:** T

Defined in: [src/segmentTree/segmentTree.ts:5](https://github.com/havelessbemore/dastal/blob/27768c3/src/segmentTree/segmentTree.ts#L5)

___

### update

▸ **update**(`min`: *number*, `max`: *number*, `transform`: (`value`: T, `index`: *number*) => T): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `min` | *number* |
| `max` | *number* |
| `transform` | (`value`: T, `index`: *number*) => T |

**Returns:** *void*

Defined in: [src/segmentTree/segmentTree.ts:7](https://github.com/havelessbemore/dastal/blob/27768c3/src/segmentTree/segmentTree.ts#L7)
