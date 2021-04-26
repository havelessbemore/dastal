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

- [\_ate](binarymaxheap.md#_ate)
- [\_bubbleUp](binarymaxheap.md#_bubbleup)
- [\_find](binarymaxheap.md#_find)
- [\_heapify](binarymaxheap.md#_heapify)
- [\_sinkDown](binarymaxheap.md#_sinkdown)
- [clear](binarymaxheap.md#clear)
- [comparator](binarymaxheap.md#comparator)
- [contains](binarymaxheap.md#contains)
- [delete](binarymaxheap.md#delete)
- [heapify](binarymaxheap.md#heapify)
- [merge](binarymaxheap.md#merge)
- [peek](binarymaxheap.md#peek)
- [pop](binarymaxheap.md#pop)
- [push](binarymaxheap.md#push)
- [pushPop](binarymaxheap.md#pushpop)
- [replace](binarymaxheap.md#replace)
- [toArray](binarymaxheap.md#toarray)
- [update](binarymaxheap.md#update)

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

Defined in: [structures/heap/binaryHeap.ts:5](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/heap/binaryHeap.ts#L5)

## Properties

### \_comparator

• `Protected` **\_comparator**: *Comparator*<T\>

Inherited from: [BinaryHeap](binaryheap.md).[_comparator](binaryheap.md#_comparator)

Defined in: [structures/heap/binaryHeap.ts:5](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/heap/binaryHeap.ts#L5)

___

### array

• `Protected` **array**: T[]= []

Inherited from: [BinaryHeap](binaryheap.md).[array](binaryheap.md#array)

## Accessors

### size

• get **size**(): *number*

**Returns:** *number*

Defined in: [structures/heap/binaryHeap.ts:132](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/heap/binaryHeap.ts#L132)

## Methods

### \_ate

▸ `Protected`**_ate**(`a`: T, `b`: T): *boolean*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `a` | T |
| `b` | T |

**Returns:** *boolean*

Overrides: [BinaryHeap](binaryheap.md)

Defined in: [structures/heap/binaryMaxHeap.ts:5](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/heap/binaryMaxHeap.ts#L5)

___

### \_bubbleUp

▸ `Protected`**_bubbleUp**(`index`: *number*, `array`: T[]): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `index` | *number* |
| `array` | T[] |

**Returns:** *void*

Inherited from: [BinaryHeap](binaryheap.md)

Defined in: [structures/heap/binaryHeap.ts:146](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/heap/binaryHeap.ts#L146)

___

### \_find

▸ `Protected`**_find**(`element`: T): *number*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `element` | T |

**Returns:** *number*

Inherited from: [BinaryHeap](binaryheap.md)

Defined in: [structures/heap/binaryHeap.ts:14](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/heap/binaryHeap.ts#L14)

___

### \_heapify

▸ `Protected`**_heapify**(`array`: T[]): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `array` | T[] |

**Returns:** *void*

Inherited from: [BinaryHeap](binaryheap.md)

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

Inherited from: [BinaryHeap](binaryheap.md)

Defined in: [structures/heap/binaryHeap.ts:167](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/heap/binaryHeap.ts#L167)

___

### clear

▸ **clear**(): *void*

**Returns:** *void*

Inherited from: [BinaryHeap](binaryheap.md)

Defined in: [structures/heap/binaryHeap.ts:31](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/heap/binaryHeap.ts#L31)

___

### comparator

▸ **comparator**(): *Comparator*<T\>

**Returns:** *Comparator*<T\>

Inherited from: [BinaryHeap](binaryheap.md)

Defined in: [structures/heap/binaryHeap.ts:35](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/heap/binaryHeap.ts#L35)

___

### contains

▸ **contains**(`element`: T): *boolean*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `element` | T |

**Returns:** *boolean*

Inherited from: [BinaryHeap](binaryheap.md)

Defined in: [structures/heap/binaryHeap.ts:39](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/heap/binaryHeap.ts#L39)

___

### delete

▸ **delete**(`element`: T): *boolean*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `element` | T |

**Returns:** *boolean*

Inherited from: [BinaryHeap](binaryheap.md)

Defined in: [structures/heap/binaryHeap.ts:43](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/heap/binaryHeap.ts#L43)

___

### heapify

▸ **heapify**(...`iterables`: *Iterable*<T\>[]): [*BinaryMaxHeap*](binarymaxheap.md)<T\>

#### Parameters:

| Name | Type |
| :------ | :------ |
| `...iterables` | *Iterable*<T\>[] |

**Returns:** [*BinaryMaxHeap*](binarymaxheap.md)<T\>

Overrides: [BinaryHeap](binaryheap.md)

Defined in: [structures/heap/binaryMaxHeap.ts:9](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/heap/binaryMaxHeap.ts#L9)

___

### merge

▸ **merge**(`heap`: [*Heap*](../interfaces/heap.md)<T\>): [*BinaryMaxHeap*](binarymaxheap.md)<T\>

#### Parameters:

| Name | Type |
| :------ | :------ |
| `heap` | [*Heap*](../interfaces/heap.md)<T\> |

**Returns:** [*BinaryMaxHeap*](binarymaxheap.md)<T\>

Inherited from: [BinaryHeap](binaryheap.md)

Defined in: [structures/heap/binaryHeap.ts:62](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/heap/binaryHeap.ts#L62)

___

### peek

▸ **peek**(): *undefined* \| T

**Returns:** *undefined* \| T

Inherited from: [BinaryHeap](binaryheap.md)

Defined in: [structures/heap/binaryHeap.ts:70](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/heap/binaryHeap.ts#L70)

___

### pop

▸ **pop**(): *undefined* \| T

**Returns:** *undefined* \| T

Inherited from: [BinaryHeap](binaryheap.md)

Defined in: [structures/heap/binaryHeap.ts:74](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/heap/binaryHeap.ts#L74)

___

### push

▸ **push**(`value`: T): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `value` | T |

**Returns:** *void*

Inherited from: [BinaryHeap](binaryheap.md)

Defined in: [structures/heap/binaryHeap.ts:94](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/heap/binaryHeap.ts#L94)

___

### pushPop

▸ **pushPop**(`value`: T): T

#### Parameters:

| Name | Type |
| :------ | :------ |
| `value` | T |

**Returns:** T

Inherited from: [BinaryHeap](binaryheap.md)

Defined in: [structures/heap/binaryHeap.ts:103](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/heap/binaryHeap.ts#L103)

___

### replace

▸ **replace**(`value`: T): T

#### Parameters:

| Name | Type |
| :------ | :------ |
| `value` | T |

**Returns:** T

Inherited from: [BinaryHeap](binaryheap.md)

Defined in: [structures/heap/binaryHeap.ts:117](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/heap/binaryHeap.ts#L117)

___

### toArray

▸ **toArray**(): T[]

**Returns:** T[]

Inherited from: [BinaryHeap](binaryheap.md)

Defined in: [structures/heap/binaryHeap.ts:198](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/heap/binaryHeap.ts#L198)

___

### update

▸ **update**(`element`: T): *boolean*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `element` | T |

**Returns:** *boolean*

Inherited from: [BinaryHeap](binaryheap.md)

Defined in: [structures/heap/binaryHeap.ts:136](https://github.com/havelessbemore/dastal/blob/563c214/src/structures/heap/binaryHeap.ts#L136)
