[dastal - v1.0.0](../README.md) / BinaryHeap

# Class: BinaryHeap<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

* **BinaryHeap**

  ↳ [*BinaryMaxHeap*](binarymaxheap.md)

  ↳ [*BinaryMinHeap*](binaryminheap.md)

## Implements

* [*Heap*](../interfaces/heap.md)<T\>

## Table of contents

### Constructors

- [constructor](binaryheap.md#constructor)

### Properties

- [\_comparator](binaryheap.md#_comparator)
- [array](binaryheap.md#array)

### Accessors

- [size](binaryheap.md#size)

### Methods

- [\_bubbleUp](binaryheap.md#_bubbleup)
- [\_heapify](binaryheap.md#_heapify)
- [\_sinkDown](binaryheap.md#_sinkdown)
- [ate](binaryheap.md#ate)
- [clear](binaryheap.md#clear)
- [comparator](binaryheap.md#comparator)
- [heapify](binaryheap.md#heapify)
- [meld](binaryheap.md#meld)
- [merge](binaryheap.md#merge)
- [peek](binaryheap.md#peek)
- [pop](binaryheap.md#pop)
- [push](binaryheap.md#push)
- [pushPop](binaryheap.md#pushpop)
- [replace](binaryheap.md#replace)
- [toArray](binaryheap.md#toarray)

## Constructors

### constructor

\+ **new BinaryHeap**<T\>(`comparator`: *Comparator*<T\>, `array?`: T[]): [*BinaryHeap*](binaryheap.md)<T\>

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type | Default value |
| :------ | :------ | :------ |
| `comparator` | *Comparator*<T\> | - |
| `array` | T[] | [] |

**Returns:** [*BinaryHeap*](binaryheap.md)<T\>

Defined in: structures/heap/binaryHeap.ts:5

## Properties

### \_comparator

• `Protected` **\_comparator**: *Comparator*<T\>

Defined in: structures/heap/binaryHeap.ts:5

___

### array

• `Protected` **array**: T[]= []

## Accessors

### size

• get **size**(): *number*

**Returns:** *number*

Implementation of: [Heap](../interfaces/heap.md).[size](../interfaces/heap.md#size)

Defined in: structures/heap/binaryHeap.ts:101

## Methods

### \_bubbleUp

▸ `Protected`**_bubbleUp**(`index`: *number*, `array`: T[]): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `index` | *number* |
| `array` | T[] |

**Returns:** *void*

Defined in: structures/heap/binaryHeap.ts:105

___

### \_heapify

▸ `Protected`**_heapify**(`array`: T[]): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `array` | T[] |

**Returns:** *void*

Defined in: structures/heap/binaryHeap.ts:15

___

### \_sinkDown

▸ `Protected`**_sinkDown**(`index`: *number*, `array`: T[]): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `index` | *number* |
| `array` | T[] |

**Returns:** *void*

Defined in: structures/heap/binaryHeap.ts:126

___

### ate

▸ `Protected` `Abstract`**ate**(`a`: T, `b`: T): *boolean*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `a` | T |
| `b` | T |

**Returns:** *boolean*

Defined in: structures/heap/binaryHeap.ts:11

___

### clear

▸ **clear**(): *void*

**Returns:** *void*

Implementation of: [Heap](../interfaces/heap.md)

Defined in: structures/heap/binaryHeap.ts:22

___

### comparator

▸ **comparator**(): *Comparator*<T\>

**Returns:** *Comparator*<T\>

Implementation of: [Heap](../interfaces/heap.md)

Defined in: structures/heap/binaryHeap.ts:26

___

### heapify

▸ `Abstract`**heapify**(`arr`: *Iterable*<T\>): [*BinaryHeap*](binaryheap.md)<T\>

#### Parameters:

| Name | Type |
| :------ | :------ |
| `arr` | *Iterable*<T\> |

**Returns:** [*BinaryHeap*](binaryheap.md)<T\>

Implementation of: [Heap](../interfaces/heap.md)

Defined in: structures/heap/binaryHeap.ts:12

___

### meld

▸ `Abstract`**meld**(`heap`: [*Heap*](../interfaces/heap.md)<T\>): [*BinaryHeap*](binaryheap.md)<T\>

#### Parameters:

| Name | Type |
| :------ | :------ |
| `heap` | [*Heap*](../interfaces/heap.md)<T\> |

**Returns:** [*BinaryHeap*](binaryheap.md)<T\>

Implementation of: [Heap](../interfaces/heap.md)

Defined in: structures/heap/binaryHeap.ts:13

___

### merge

▸ **merge**(`heap`: [*Heap*](../interfaces/heap.md)<T\>): [*BinaryHeap*](binaryheap.md)<T\>

#### Parameters:

| Name | Type |
| :------ | :------ |
| `heap` | [*Heap*](../interfaces/heap.md)<T\> |

**Returns:** [*BinaryHeap*](binaryheap.md)<T\>

Implementation of: [Heap](../interfaces/heap.md)

Defined in: structures/heap/binaryHeap.ts:30

___

### peek

▸ **peek**(): *undefined* \| T

**Returns:** *undefined* \| T

Implementation of: [Heap](../interfaces/heap.md)

Defined in: structures/heap/binaryHeap.ts:39

___

### pop

▸ **pop**(): *undefined* \| T

**Returns:** *undefined* \| T

Implementation of: [Heap](../interfaces/heap.md)

Defined in: structures/heap/binaryHeap.ts:43

___

### push

▸ **push**(`value`: T): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `value` | T |

**Returns:** *void*

Implementation of: [Heap](../interfaces/heap.md)

Defined in: structures/heap/binaryHeap.ts:63

___

### pushPop

▸ **pushPop**(`value`: T): T

#### Parameters:

| Name | Type |
| :------ | :------ |
| `value` | T |

**Returns:** T

Implementation of: [Heap](../interfaces/heap.md)

Defined in: structures/heap/binaryHeap.ts:72

___

### replace

▸ **replace**(`value`: T): T

#### Parameters:

| Name | Type |
| :------ | :------ |
| `value` | T |

**Returns:** T

Implementation of: [Heap](../interfaces/heap.md)

Defined in: structures/heap/binaryHeap.ts:86

___

### toArray

▸ **toArray**(): T[]

**Returns:** T[]

Implementation of: [Heap](../interfaces/heap.md)

Defined in: structures/heap/binaryHeap.ts:157
