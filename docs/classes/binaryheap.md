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

- [ate](binaryheap.md#ate)
- [clear](binaryheap.md#clear)
- [comparator](binaryheap.md#comparator)
- [contains](binaryheap.md#contains)
- [delete](binaryheap.md#delete)
- [heapify](binaryheap.md#heapify)
- [merge](binaryheap.md#merge)
- [peek](binaryheap.md#peek)
- [pop](binaryheap.md#pop)
- [push](binaryheap.md#push)
- [pushPop](binaryheap.md#pushpop)
- [replace](binaryheap.md#replace)
- [toArray](binaryheap.md#toarray)
- [update](binaryheap.md#update)

## Constructors

### constructor

\+ **new BinaryHeap**<T\>(`comparator`: [*Comparator*](../interfaces/comparator.md)<T\>, `array?`: T[]): [*BinaryHeap*](binaryheap.md)<T\>

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type | Default value |
| :------ | :------ | :------ |
| `comparator` | [*Comparator*](../interfaces/comparator.md)<T\> | - |
| `array` | T[] | [] |

**Returns:** [*BinaryHeap*](binaryheap.md)<T\>

Defined in: [structures/heap/binaryHeap.ts:6](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/heap/binaryHeap.ts#L6)

## Properties

### \_comparator

• `Protected` **\_comparator**: [*Comparator*](../interfaces/comparator.md)<T\>

Defined in: [structures/heap/binaryHeap.ts:6](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/heap/binaryHeap.ts#L6)

___

### array

• `Protected` **array**: T[]= []

## Accessors

### size

• get **size**(): *number*

**Returns:** *number*

Implementation of: [Heap](../interfaces/heap.md).[size](../interfaces/heap.md#size)

Defined in: [structures/heap/binaryHeap.ts:116](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/heap/binaryHeap.ts#L116)

## Methods

### ate

▸ `Protected` `Abstract`**ate**(`a`: T, `b`: T): *boolean*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `a` | T |
| `b` | T |

**Returns:** *boolean*

Defined in: [structures/heap/binaryHeap.ts:12](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/heap/binaryHeap.ts#L12)

___

### clear

▸ **clear**(): *void*

**Returns:** *void*

Implementation of: [Heap](../interfaces/heap.md)

Defined in: [structures/heap/binaryHeap.ts:15](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/heap/binaryHeap.ts#L15)

___

### comparator

▸ **comparator**(): [*Comparator*](../interfaces/comparator.md)<T\>

**Returns:** [*Comparator*](../interfaces/comparator.md)<T\>

Implementation of: [Heap](../interfaces/heap.md)

Defined in: [structures/heap/binaryHeap.ts:19](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/heap/binaryHeap.ts#L19)

___

### contains

▸ **contains**(`element`: T): *boolean*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `element` | T |

**Returns:** *boolean*

Defined in: [structures/heap/binaryHeap.ts:23](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/heap/binaryHeap.ts#L23)

___

### delete

▸ **delete**(`element`: T): *boolean*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `element` | T |

**Returns:** *boolean*

Defined in: [structures/heap/binaryHeap.ts:27](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/heap/binaryHeap.ts#L27)

___

### heapify

▸ `Abstract`**heapify**(...`iterables`: *Iterable*<T\>[]): [*BinaryHeap*](binaryheap.md)<T\>

#### Parameters:

| Name | Type |
| :------ | :------ |
| `...iterables` | *Iterable*<T\>[] |

**Returns:** [*BinaryHeap*](binaryheap.md)<T\>

Implementation of: [Heap](../interfaces/heap.md)

Defined in: [structures/heap/binaryHeap.ts:13](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/heap/binaryHeap.ts#L13)

___

### merge

▸ **merge**(`heap`: [*Heap*](../interfaces/heap.md)<T\>): [*BinaryHeap*](binaryheap.md)<T\>

#### Parameters:

| Name | Type |
| :------ | :------ |
| `heap` | [*Heap*](../interfaces/heap.md)<T\> |

**Returns:** [*BinaryHeap*](binaryheap.md)<T\>

Implementation of: [Heap](../interfaces/heap.md)

Defined in: [structures/heap/binaryHeap.ts:46](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/heap/binaryHeap.ts#L46)

___

### peek

▸ **peek**(): *undefined* \| T

**Returns:** *undefined* \| T

Implementation of: [Heap](../interfaces/heap.md)

Defined in: [structures/heap/binaryHeap.ts:54](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/heap/binaryHeap.ts#L54)

___

### pop

▸ **pop**(): *undefined* \| T

**Returns:** *undefined* \| T

Implementation of: [Heap](../interfaces/heap.md)

Defined in: [structures/heap/binaryHeap.ts:58](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/heap/binaryHeap.ts#L58)

___

### push

▸ **push**(`value`: T): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `value` | T |

**Returns:** *void*

Implementation of: [Heap](../interfaces/heap.md)

Defined in: [structures/heap/binaryHeap.ts:78](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/heap/binaryHeap.ts#L78)

___

### pushPop

▸ **pushPop**(`value`: T): T

#### Parameters:

| Name | Type |
| :------ | :------ |
| `value` | T |

**Returns:** T

Implementation of: [Heap](../interfaces/heap.md)

Defined in: [structures/heap/binaryHeap.ts:87](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/heap/binaryHeap.ts#L87)

___

### replace

▸ **replace**(`value`: T): T

#### Parameters:

| Name | Type |
| :------ | :------ |
| `value` | T |

**Returns:** T

Implementation of: [Heap](../interfaces/heap.md)

Defined in: [structures/heap/binaryHeap.ts:101](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/heap/binaryHeap.ts#L101)

___

### toArray

▸ **toArray**(): T[]

**Returns:** T[]

Implementation of: [Heap](../interfaces/heap.md)

Defined in: [structures/heap/binaryHeap.ts:131](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/heap/binaryHeap.ts#L131)

___

### update

▸ **update**(`element`: T): *boolean*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `element` | T |

**Returns:** *boolean*

Defined in: [structures/heap/binaryHeap.ts:120](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/heap/binaryHeap.ts#L120)
