[dastal - v1.0.0](../README.md) / Heap

# Interface: Heap<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

* [*Sorted*](sorted.md)<T\>

  ↳ **Heap**

## Implemented by

* [*BinaryHeap*](../classes/binaryheap.md)

## Table of contents

### Properties

- [size](heap.md#size)

### Methods

- [clear](heap.md#clear)
- [comparator](heap.md#comparator)
- [heapify](heap.md#heapify)
- [merge](heap.md#merge)
- [peek](heap.md#peek)
- [pop](heap.md#pop)
- [push](heap.md#push)
- [pushPop](heap.md#pushpop)
- [replace](heap.md#replace)
- [toArray](heap.md#toarray)

## Properties

### size

• `Readonly` **size**: *number*

Defined in: [structures/heap/heap.ts:14](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/heap/heap.ts#L14)

## Methods

### clear

▸ **clear**(): *void*

**Returns:** *void*

Defined in: [structures/heap/heap.ts:5](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/heap/heap.ts#L5)

___

### comparator

▸ **comparator**(): [*Comparator*](comparator.md)<T\>

**Returns:** [*Comparator*](comparator.md)<T\>

Overrides: [Sorted](sorted.md)

Defined in: [structures/heap/heap.ts:6](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/heap/heap.ts#L6)

___

### heapify

▸ **heapify**(...`iterables`: *Iterable*<T\>[]): [*Heap*](heap.md)<T\>

#### Parameters:

| Name | Type |
| :------ | :------ |
| `...iterables` | *Iterable*<T\>[] |

**Returns:** [*Heap*](heap.md)<T\>

Defined in: [structures/heap/heap.ts:7](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/heap/heap.ts#L7)

___

### merge

▸ **merge**(`heap`: [*Heap*](heap.md)<T\>): [*Heap*](heap.md)<T\>

#### Parameters:

| Name | Type |
| :------ | :------ |
| `heap` | [*Heap*](heap.md)<T\> |

**Returns:** [*Heap*](heap.md)<T\>

Defined in: [structures/heap/heap.ts:8](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/heap/heap.ts#L8)

___

### peek

▸ **peek**(): *undefined* \| T

**Returns:** *undefined* \| T

Defined in: [structures/heap/heap.ts:9](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/heap/heap.ts#L9)

___

### pop

▸ **pop**(): *undefined* \| T

**Returns:** *undefined* \| T

Defined in: [structures/heap/heap.ts:10](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/heap/heap.ts#L10)

___

### push

▸ **push**(`element`: T): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `element` | T |

**Returns:** *void*

Defined in: [structures/heap/heap.ts:12](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/heap/heap.ts#L12)

___

### pushPop

▸ **pushPop**(`element`: T): T

#### Parameters:

| Name | Type |
| :------ | :------ |
| `element` | T |

**Returns:** T

Defined in: [structures/heap/heap.ts:13](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/heap/heap.ts#L13)

___

### replace

▸ **replace**(`element`: T): T

#### Parameters:

| Name | Type |
| :------ | :------ |
| `element` | T |

**Returns:** T

Defined in: [structures/heap/heap.ts:11](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/heap/heap.ts#L11)

___

### toArray

▸ **toArray**(): T[]

**Returns:** T[]

Defined in: [structures/heap/heap.ts:15](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/heap/heap.ts#L15)
