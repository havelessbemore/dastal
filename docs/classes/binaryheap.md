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

- [\_ate](binaryheap.md#_ate)
- [\_bubbleUp](binaryheap.md#_bubbleup)
- [\_find](binaryheap.md#_find)
- [\_heapify](binaryheap.md#_heapify)
- [\_sinkDown](binaryheap.md#_sinkdown)
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

Defined in: [structures/heap/binaryHeap.ts:5](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/heap/binaryHeap.ts#L5)

## Properties

### \_comparator

• `Protected` **\_comparator**: *Comparator*<T\>

Defined in: [structures/heap/binaryHeap.ts:5](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/heap/binaryHeap.ts#L5)

___

### array

• `Protected` **array**: T[]= []

## Accessors

### size

• get **size**(): *number*

**Returns:** *number*

Implementation of: [Heap](../interfaces/heap.md).[size](../interfaces/heap.md#size)

Defined in: [structures/heap/binaryHeap.ts:132](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/heap/binaryHeap.ts#L132)

## Methods

### \_ate

▸ `Protected` `Abstract`**_ate**(`a`: T, `b`: T): *boolean*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `a` | T |
| `b` | T |

**Returns:** *boolean*

Defined in: [structures/heap/binaryHeap.ts:11](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/heap/binaryHeap.ts#L11)

___

### \_bubbleUp

▸ `Protected`**_bubbleUp**(`index`: *number*, `array`: T[]): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `index` | *number* |
| `array` | T[] |

**Returns:** *void*

Defined in: [structures/heap/binaryHeap.ts:146](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/heap/binaryHeap.ts#L146)

___

### \_find

▸ `Protected`**_find**(`element`: T): *number*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `element` | T |

**Returns:** *number*

Defined in: [structures/heap/binaryHeap.ts:14](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/heap/binaryHeap.ts#L14)

___

### \_heapify

▸ `Protected`**_heapify**(`array`: T[]): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `array` | T[] |

**Returns:** *void*

Defined in: [structures/heap/binaryHeap.ts:24](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/heap/binaryHeap.ts#L24)

___

### \_sinkDown

▸ `Protected`**_sinkDown**(`index`: *number*, `array`: T[]): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `index` | *number* |
| `array` | T[] |

**Returns:** *void*

Defined in: [structures/heap/binaryHeap.ts:167](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/heap/binaryHeap.ts#L167)

___

### clear

▸ **clear**(): *void*

**Returns:** *void*

Implementation of: [Heap](../interfaces/heap.md)

Defined in: [structures/heap/binaryHeap.ts:31](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/heap/binaryHeap.ts#L31)

___

### comparator

▸ **comparator**(): *Comparator*<T\>

**Returns:** *Comparator*<T\>

Implementation of: [Heap](../interfaces/heap.md)

Defined in: [structures/heap/binaryHeap.ts:35](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/heap/binaryHeap.ts#L35)

___

### contains

▸ **contains**(`element`: T): *boolean*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `element` | T |

**Returns:** *boolean*

Defined in: [structures/heap/binaryHeap.ts:39](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/heap/binaryHeap.ts#L39)

___

### delete

▸ **delete**(`element`: T): *boolean*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `element` | T |

**Returns:** *boolean*

Defined in: [structures/heap/binaryHeap.ts:43](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/heap/binaryHeap.ts#L43)

___

### heapify

▸ `Abstract`**heapify**(...`iterables`: *Iterable*<T\>[]): [*BinaryHeap*](binaryheap.md)<T\>

#### Parameters:

| Name | Type |
| :------ | :------ |
| `...iterables` | *Iterable*<T\>[] |

**Returns:** [*BinaryHeap*](binaryheap.md)<T\>

Implementation of: [Heap](../interfaces/heap.md)

Defined in: [structures/heap/binaryHeap.ts:12](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/heap/binaryHeap.ts#L12)

___

### merge

▸ **merge**(`heap`: [*Heap*](../interfaces/heap.md)<T\>): [*BinaryHeap*](binaryheap.md)<T\>

#### Parameters:

| Name | Type |
| :------ | :------ |
| `heap` | [*Heap*](../interfaces/heap.md)<T\> |

**Returns:** [*BinaryHeap*](binaryheap.md)<T\>

Implementation of: [Heap](../interfaces/heap.md)

Defined in: [structures/heap/binaryHeap.ts:62](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/heap/binaryHeap.ts#L62)

___

### peek

▸ **peek**(): *undefined* \| T

**Returns:** *undefined* \| T

Implementation of: [Heap](../interfaces/heap.md)

Defined in: [structures/heap/binaryHeap.ts:70](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/heap/binaryHeap.ts#L70)

___

### pop

▸ **pop**(): *undefined* \| T

**Returns:** *undefined* \| T

Implementation of: [Heap](../interfaces/heap.md)

Defined in: [structures/heap/binaryHeap.ts:74](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/heap/binaryHeap.ts#L74)

___

### push

▸ **push**(`value`: T): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `value` | T |

**Returns:** *void*

Implementation of: [Heap](../interfaces/heap.md)

Defined in: [structures/heap/binaryHeap.ts:94](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/heap/binaryHeap.ts#L94)

___

### pushPop

▸ **pushPop**(`value`: T): T

#### Parameters:

| Name | Type |
| :------ | :------ |
| `value` | T |

**Returns:** T

Implementation of: [Heap](../interfaces/heap.md)

Defined in: [structures/heap/binaryHeap.ts:103](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/heap/binaryHeap.ts#L103)

___

### replace

▸ **replace**(`value`: T): T

#### Parameters:

| Name | Type |
| :------ | :------ |
| `value` | T |

**Returns:** T

Implementation of: [Heap](../interfaces/heap.md)

Defined in: [structures/heap/binaryHeap.ts:117](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/heap/binaryHeap.ts#L117)

___

### toArray

▸ **toArray**(): T[]

**Returns:** T[]

Implementation of: [Heap](../interfaces/heap.md)

Defined in: [structures/heap/binaryHeap.ts:198](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/heap/binaryHeap.ts#L198)

___

### update

▸ **update**(`element`: T): *boolean*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `element` | T |

**Returns:** *boolean*

Defined in: [structures/heap/binaryHeap.ts:136](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/heap/binaryHeap.ts#L136)
