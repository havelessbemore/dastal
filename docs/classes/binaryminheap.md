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

- [ate](binaryminheap.md#ate)
- [clear](binaryminheap.md#clear)
- [comparator](binaryminheap.md#comparator)
- [contains](binaryminheap.md#contains)
- [delete](binaryminheap.md#delete)
- [heapify](binaryminheap.md#heapify)
- [merge](binaryminheap.md#merge)
- [peek](binaryminheap.md#peek)
- [pop](binaryminheap.md#pop)
- [push](binaryminheap.md#push)
- [pushPop](binaryminheap.md#pushpop)
- [replace](binaryminheap.md#replace)
- [toArray](binaryminheap.md#toarray)
- [update](binaryminheap.md#update)

## Constructors

### constructor

\+ **new BinaryMinHeap**<T\>(`comparator`: [*Comparator*](../interfaces/comparator.md)<T\>, `array?`: T[]): [*BinaryMinHeap*](binaryminheap.md)<T\>

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type | Default value |
| :------ | :------ | :------ |
| `comparator` | [*Comparator*](../interfaces/comparator.md)<T\> | - |
| `array` | T[] | [] |

**Returns:** [*BinaryMinHeap*](binaryminheap.md)<T\>

Inherited from: [BinaryHeap](binaryheap.md)

Defined in: [structures/heap/binaryHeap.ts:6](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/heap/binaryHeap.ts#L6)

## Properties

### \_comparator

• `Protected` **\_comparator**: [*Comparator*](../interfaces/comparator.md)<T\>

Inherited from: [BinaryHeap](binaryheap.md).[_comparator](binaryheap.md#_comparator)

Defined in: [structures/heap/binaryHeap.ts:6](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/heap/binaryHeap.ts#L6)

___

### array

• `Protected` **array**: T[]= []

Inherited from: [BinaryHeap](binaryheap.md).[array](binaryheap.md#array)

## Accessors

### size

• get **size**(): *number*

**Returns:** *number*

Defined in: [structures/heap/binaryHeap.ts:116](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/heap/binaryHeap.ts#L116)

## Methods

### ate

▸ `Protected`**ate**(`a`: T, `b`: T): *boolean*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `a` | T |
| `b` | T |

**Returns:** *boolean*

Overrides: [BinaryHeap](binaryheap.md)

Defined in: [structures/heap/binaryMinHeap.ts:6](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/heap/binaryMinHeap.ts#L6)

___

### clear

▸ **clear**(): *void*

**Returns:** *void*

Inherited from: [BinaryHeap](binaryheap.md)

Defined in: [structures/heap/binaryHeap.ts:15](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/heap/binaryHeap.ts#L15)

___

### comparator

▸ **comparator**(): [*Comparator*](../interfaces/comparator.md)<T\>

**Returns:** [*Comparator*](../interfaces/comparator.md)<T\>

Inherited from: [BinaryHeap](binaryheap.md)

Defined in: [structures/heap/binaryHeap.ts:19](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/heap/binaryHeap.ts#L19)

___

### contains

▸ **contains**(`element`: T): *boolean*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `element` | T |

**Returns:** *boolean*

Inherited from: [BinaryHeap](binaryheap.md)

Defined in: [structures/heap/binaryHeap.ts:23](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/heap/binaryHeap.ts#L23)

___

### delete

▸ **delete**(`element`: T): *boolean*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `element` | T |

**Returns:** *boolean*

Inherited from: [BinaryHeap](binaryheap.md)

Defined in: [structures/heap/binaryHeap.ts:27](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/heap/binaryHeap.ts#L27)

___

### heapify

▸ **heapify**(...`iterables`: *Iterable*<T\>[]): [*BinaryMinHeap*](binaryminheap.md)<T\>

#### Parameters:

| Name | Type |
| :------ | :------ |
| `...iterables` | *Iterable*<T\>[] |

**Returns:** [*BinaryMinHeap*](binaryminheap.md)<T\>

Overrides: [BinaryHeap](binaryheap.md)

Defined in: [structures/heap/binaryMinHeap.ts:10](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/heap/binaryMinHeap.ts#L10)

___

### merge

▸ **merge**(`heap`: [*Heap*](../interfaces/heap.md)<T\>): [*BinaryMinHeap*](binaryminheap.md)<T\>

#### Parameters:

| Name | Type |
| :------ | :------ |
| `heap` | [*Heap*](../interfaces/heap.md)<T\> |

**Returns:** [*BinaryMinHeap*](binaryminheap.md)<T\>

Inherited from: [BinaryHeap](binaryheap.md)

Defined in: [structures/heap/binaryHeap.ts:46](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/heap/binaryHeap.ts#L46)

___

### peek

▸ **peek**(): *undefined* \| T

**Returns:** *undefined* \| T

Inherited from: [BinaryHeap](binaryheap.md)

Defined in: [structures/heap/binaryHeap.ts:54](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/heap/binaryHeap.ts#L54)

___

### pop

▸ **pop**(): *undefined* \| T

**Returns:** *undefined* \| T

Inherited from: [BinaryHeap](binaryheap.md)

Defined in: [structures/heap/binaryHeap.ts:58](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/heap/binaryHeap.ts#L58)

___

### push

▸ **push**(`value`: T): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `value` | T |

**Returns:** *void*

Inherited from: [BinaryHeap](binaryheap.md)

Defined in: [structures/heap/binaryHeap.ts:78](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/heap/binaryHeap.ts#L78)

___

### pushPop

▸ **pushPop**(`value`: T): T

#### Parameters:

| Name | Type |
| :------ | :------ |
| `value` | T |

**Returns:** T

Inherited from: [BinaryHeap](binaryheap.md)

Defined in: [structures/heap/binaryHeap.ts:87](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/heap/binaryHeap.ts#L87)

___

### replace

▸ **replace**(`value`: T): T

#### Parameters:

| Name | Type |
| :------ | :------ |
| `value` | T |

**Returns:** T

Inherited from: [BinaryHeap](binaryheap.md)

Defined in: [structures/heap/binaryHeap.ts:101](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/heap/binaryHeap.ts#L101)

___

### toArray

▸ **toArray**(): T[]

**Returns:** T[]

Inherited from: [BinaryHeap](binaryheap.md)

Defined in: [structures/heap/binaryHeap.ts:131](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/heap/binaryHeap.ts#L131)

___

### update

▸ **update**(`element`: T): *boolean*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `element` | T |

**Returns:** *boolean*

Inherited from: [BinaryHeap](binaryheap.md)

Defined in: [structures/heap/binaryHeap.ts:120](https://github.com/havelessbemore/dastal/blob/5fab342/src/structures/heap/binaryHeap.ts#L120)
