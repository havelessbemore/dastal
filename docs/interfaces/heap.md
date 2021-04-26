[dastal - v1.0.0](../README.md) / Heap

# Interface: Heap<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

* *Sorted*<T\>

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
- [meld](heap.md#meld)
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

Defined in: structures/heap/heap.ts:14

## Methods

### clear

▸ **clear**(): *void*

**Returns:** *void*

Defined in: structures/heap/heap.ts:4

___

### comparator

▸ **comparator**(): *Comparator*<T\>

**Returns:** *Comparator*<T\>

Overrides: Sorted.comparator

Defined in: structures/heap/heap.ts:5

___

### heapify

▸ **heapify**(`iterable`: *Iterable*<T\>): [*Heap*](heap.md)<T\>

#### Parameters:

| Name | Type |
| :------ | :------ |
| `iterable` | *Iterable*<T\> |

**Returns:** [*Heap*](heap.md)<T\>

Defined in: structures/heap/heap.ts:6

___

### meld

▸ **meld**(`heap`: [*Heap*](heap.md)<T\>): [*Heap*](heap.md)<T\>

#### Parameters:

| Name | Type |
| :------ | :------ |
| `heap` | [*Heap*](heap.md)<T\> |

**Returns:** [*Heap*](heap.md)<T\>

Defined in: structures/heap/heap.ts:7

___

### merge

▸ **merge**(`heap`: [*Heap*](heap.md)<T\>): [*Heap*](heap.md)<T\>

#### Parameters:

| Name | Type |
| :------ | :------ |
| `heap` | [*Heap*](heap.md)<T\> |

**Returns:** [*Heap*](heap.md)<T\>

Defined in: structures/heap/heap.ts:8

___

### peek

▸ **peek**(): *undefined* \| T

**Returns:** *undefined* \| T

Defined in: structures/heap/heap.ts:9

___

### pop

▸ **pop**(): *undefined* \| T

**Returns:** *undefined* \| T

Defined in: structures/heap/heap.ts:10

___

### push

▸ **push**(`value`: T): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `value` | T |

**Returns:** *void*

Defined in: structures/heap/heap.ts:12

___

### pushPop

▸ **pushPop**(`value`: T): T

#### Parameters:

| Name | Type |
| :------ | :------ |
| `value` | T |

**Returns:** T

Defined in: structures/heap/heap.ts:13

___

### replace

▸ **replace**(`value`: T): T

#### Parameters:

| Name | Type |
| :------ | :------ |
| `value` | T |

**Returns:** T

Defined in: structures/heap/heap.ts:11

___

### toArray

▸ **toArray**(): T[]

**Returns:** T[]

Defined in: structures/heap/heap.ts:15
