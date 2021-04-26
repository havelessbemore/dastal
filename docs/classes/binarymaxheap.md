[dastal - v1.0.0](../README.md) / BinaryMaxHeap

# Class: BinaryMaxHeap<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

* [*BinaryHeap*](binaryheap.md)<T\>

  ↳ **BinaryMaxHeap**

## Table of contents

### Constructors

- [constructor](binarymaxheap.md#constructor)

### Properties

- [\_comparator](binarymaxheap.md#_comparator)
- [array](binarymaxheap.md#array)

### Accessors

- [size](binarymaxheap.md#size)

### Methods

- [\_bubbleUp](binarymaxheap.md#_bubbleup)
- [\_heapify](binarymaxheap.md#_heapify)
- [\_sinkDown](binarymaxheap.md#_sinkdown)
- [ate](binarymaxheap.md#ate)
- [clear](binarymaxheap.md#clear)
- [comparator](binarymaxheap.md#comparator)
- [heapify](binarymaxheap.md#heapify)
- [meld](binarymaxheap.md#meld)
- [merge](binarymaxheap.md#merge)
- [peek](binarymaxheap.md#peek)
- [pop](binarymaxheap.md#pop)
- [push](binarymaxheap.md#push)
- [pushPop](binarymaxheap.md#pushpop)
- [replace](binarymaxheap.md#replace)
- [toArray](binarymaxheap.md#toarray)

## Constructors

### constructor

\+ **new BinaryMaxHeap**<T\>(`comparator`: *Comparator*<T\>, `array?`: T[]): [*BinaryMaxHeap*](binarymaxheap.md)<T\>

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type | Default value |
| :------ | :------ | :------ |
| `comparator` | *Comparator*<T\> | - |
| `array` | T[] | [] |

**Returns:** [*BinaryMaxHeap*](binarymaxheap.md)<T\>

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

Defined in: structures/heap/binaryMaxHeap.ts:5

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

▸ **heapify**(`iterable`: *Iterable*<T\>): [*BinaryMaxHeap*](binarymaxheap.md)<T\>

#### Parameters:

| Name | Type |
| :------ | :------ |
| `iterable` | *Iterable*<T\> |

**Returns:** [*BinaryMaxHeap*](binarymaxheap.md)<T\>

Overrides: [BinaryHeap](binaryheap.md)

Defined in: structures/heap/binaryMaxHeap.ts:9

___

### meld

▸ **meld**(`heap`: [*Heap*](../interfaces/heap.md)<T\>): [*BinaryMaxHeap*](binarymaxheap.md)<T\>

#### Parameters:

| Name | Type |
| :------ | :------ |
| `heap` | [*Heap*](../interfaces/heap.md)<T\> |

**Returns:** [*BinaryMaxHeap*](binarymaxheap.md)<T\>

Overrides: [BinaryHeap](binaryheap.md)

Defined in: structures/heap/binaryMaxHeap.ts:15

___

### merge

▸ **merge**(`heap`: [*Heap*](../interfaces/heap.md)<T\>): [*BinaryMaxHeap*](binarymaxheap.md)<T\>

#### Parameters:

| Name | Type |
| :------ | :------ |
| `heap` | [*Heap*](../interfaces/heap.md)<T\> |

**Returns:** [*BinaryMaxHeap*](binarymaxheap.md)<T\>

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
