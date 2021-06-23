[dastal - v5.0.0](../README.md) / Collection

# Interface: Collection<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- `Iterable`<T\>

  ↳ **Collection**

  ↳↳ [Heap](heap.md)

  ↳↳ [List](list.md)

  ↳↳ [Queue](queue.md)

  ↳↳ [SegmentTree](segmenttree.md)

  ↳↳ [Stack](stack.md)

  ↳↳ [Tree](tree.md)

## Table of contents

### Properties

- [size](collection.md#size)

### Methods

- [[iterator]](collection.md#[iterator])

## Properties

### size

• `Readonly` **size**: `number`

The number of elements in the collection.

#### Defined in

[src/collection/collection.ts:5](https://github.com/havelessbemore/dastal/blob/389210e/src/collection/collection.ts#L5)

## Methods

### [iterator]

▸ **[iterator]**(): `Iterator`<T, any, undefined\>

#### Returns

`Iterator`<T, any, undefined\>

#### Inherited from

Iterable.\_\_@iterator@11

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:51
