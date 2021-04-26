[dastal - v1.0.0](../README.md) / BinaryMinHeap

# Class: BinaryMinHeap<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

* [*BinaryHeap*](binaryheap.md)<T\>

  ↳ **BinaryMinHeap**

## Table of contents

### Constructors

- [constructor](binaryminheap.md#constructor)

### Properties

- [\_comparator](binaryminheap.md#_comparator)
- [array](binaryminheap.md#array)

### Accessors

- [size](binaryminheap.md#size)

### Methods

- [\_bubbleUp](binaryminheap.md#_bubbleup)
- [\_heapify](binaryminheap.md#_heapify)
- [\_sinkDown](binaryminheap.md#_sinkdown)
- [ate](binaryminheap.md#ate)
- [clear](binaryminheap.md#clear)
- [comparator](binaryminheap.md#comparator)
- [heapify](binaryminheap.md#heapify)
- [meld](binaryminheap.md#meld)
- [merge](binaryminheap.md#merge)
- [peek](binaryminheap.md#peek)
- [pop](binaryminheap.md#pop)
- [push](binaryminheap.md#push)
- [pushPop](binaryminheap.md#pushpop)
- [replace](binaryminheap.md#replace)
- [toArray](binaryminheap.md#toarray)

## Constructors

### constructor

\+ **new BinaryMinHeap**<T\>(`comparator`: *Comparator*<T\>, `array?`: T[]): [*BinaryMinHeap*](binaryminheap.md)<T\>

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type | Default value |
| :------ | :------ | :------ |
| `comparator` | *Comparator*<T\> | - |
| `array` | T[] | [] |

**Returns:** [*BinaryMinHeap*](binaryminheap.md)<T\>

Inherited from: [BinaryHeap](binaryheap.md)

Defined in: structures/heap/binaryHeap.ts:5

## Properties

### \_comparator

• `Protected` **\_comparator**: *Comparator*<T\>

Inherited from: [BinaryHeap](binaryheap.md).[_comparator](binaryheap.md#_comparator)

Defined in: structures/heap/binaryHeap.ts:5

___

### array

• `Protected` **array**: T[]= []

Inherited from: [BinaryHeap](binaryheap.md).[array](binaryheap.md#array)

## Accessors

### size

• get **size**(): *number*

**Returns:** *number*

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

Inherited from: [BinaryHeap](binaryheap.md)

Defined in: structures/heap/binaryHeap.ts:105

___

### \_heapify

▸ `Protected`**_heapify**(`array`: T[]): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `array` | T[] |

**Returns:** *void*

Inherited from: [BinaryHeap](binaryheap.md)

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

Inherited from: [BinaryHeap](binaryheap.md)

Defined in: structures/heap/binaryHeap.ts:126

___

### ate

▸ `Protected`**ate**(`a`: T, `b`: T): *boolean*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `a` | T |
| `b` | T |

**Returns:** *boolean*

Overrides: [BinaryHeap](binaryheap.md)

Defined in: structures/heap/binaryMinHeap.ts:5

___

### clear

▸ **clear**(): *void*

**Returns:** *void*

Inherited from: [BinaryHeap](binaryheap.md)

Defined in: structures/heap/binaryHeap.ts:22

___

### comparator

▸ **comparator**(): *Comparator*<T\>

**Returns:** *Comparator*<T\>

Inherited from: [BinaryHeap](binaryheap.md)

Defined in: structures/heap/binaryHeap.ts:26

___

### heapify

▸ **heapify**(`iterable`: *Iterable*<T\>): [*BinaryMinHeap*](binaryminheap.md)<T\>

#### Parameters:

| Name | Type |
| :------ | :------ |
| `iterable` | *Iterable*<T\> |

**Returns:** [*BinaryMinHeap*](binaryminheap.md)<T\>

Overrides: [BinaryHeap](binaryheap.md)

Defined in: structures/heap/binaryMinHeap.ts:9

___

### meld

▸ **meld**(`heap`: [*Heap*](../interfaces/heap.md)<T\>): [*BinaryMinHeap*](binaryminheap.md)<T\>

#### Parameters:

| Name | Type |
| :------ | :------ |
| `heap` | [*Heap*](../interfaces/heap.md)<T\> |

**Returns:** [*BinaryMinHeap*](binaryminheap.md)<T\>

Overrides: [BinaryHeap](binaryheap.md)

Defined in: structures/heap/binaryMinHeap.ts:15

___

### merge

▸ **merge**(`heap`: [*Heap*](../interfaces/heap.md)<T\>): [*BinaryMinHeap*](binaryminheap.md)<T\>

#### Parameters:

| Name | Type |
| :------ | :------ |
| `heap` | [*Heap*](../interfaces/heap.md)<T\> |

**Returns:** [*BinaryMinHeap*](binaryminheap.md)<T\>

Inherited from: [BinaryHeap](binaryheap.md)

Defined in: structures/heap/binaryHeap.ts:30

___

### peek

▸ **peek**(): *undefined* \| T

**Returns:** *undefined* \| T

Inherited from: [BinaryHeap](binaryheap.md)

Defined in: structures/heap/binaryHeap.ts:39

___

### pop

▸ **pop**(): *undefined* \| T

**Returns:** *undefined* \| T

Inherited from: [BinaryHeap](binaryheap.md)

Defined in: structures/heap/binaryHeap.ts:43

___

### push

▸ **push**(`value`: T): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `value` | T |

**Returns:** *void*

Inherited from: [BinaryHeap](binaryheap.md)

Defined in: structures/heap/binaryHeap.ts:63

___

### pushPop

▸ **pushPop**(`value`: T): T

#### Parameters:

| Name | Type |
| :------ | :------ |
| `value` | T |

**Returns:** T

Inherited from: [BinaryHeap](binaryheap.md)

Defined in: structures/heap/binaryHeap.ts:72

___

### replace

▸ **replace**(`value`: T): T

#### Parameters:

| Name | Type |
| :------ | :------ |
| `value` | T |

**Returns:** T

Inherited from: [BinaryHeap](binaryheap.md)

Defined in: structures/heap/binaryHeap.ts:86

___

### toArray

▸ **toArray**(): T[]

**Returns:** T[]

Inherited from: [BinaryHeap](binaryheap.md)

Defined in: structures/heap/binaryHeap.ts:157
