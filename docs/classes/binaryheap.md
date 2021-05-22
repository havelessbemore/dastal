[dastal - v1.4.0](../README.md) / BinaryHeap

# Class: BinaryHeap<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

* [*Heap*](../interfaces/heap.md)<T\>

## Table of contents

### Constructors

- [constructor](binaryheap.md#constructor)

### Accessors

- [size](binaryheap.md#size)

### Methods

- [[Symbol.iterator]](binaryheap.md#[symbol.iterator])
- [addAll](binaryheap.md#addall)
- [clear](binaryheap.md#clear)
- [comparator](binaryheap.md#comparator)
- [contains](binaryheap.md#contains)
- [delete](binaryheap.md#delete)
- [dump](binaryheap.md#dump)
- [merge](binaryheap.md#merge)
- [peek](binaryheap.md#peek)
- [pop](binaryheap.md#pop)
- [push](binaryheap.md#push)
- [pushPop](binaryheap.md#pushpop)
- [replace](binaryheap.md#replace)
- [update](binaryheap.md#update)

## Constructors

### constructor

\+ **new BinaryHeap**<T\>(`compareFn`: [*CompareFn*](../README.md#comparefn)<T\>, `elements?`: *Iterable*<T\>): [*BinaryHeap*](binaryheap.md)<T\>

Instantiate a heap.

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `compareFn` | [*CompareFn*](../README.md#comparefn)<T\> | The function to determine the order of elements. |
| `elements?` | *Iterable*<T\> | A set of elements to initialize the list with. |

**Returns:** [*BinaryHeap*](binaryheap.md)<T\>

Defined in: [src/heap/binaryHeap.ts:18](https://github.com/havelessbemore/dastal/blob/dba59a5/src/heap/binaryHeap.ts#L18)

## Accessors

### size

• get **size**(): *number*

The number of elements in the heap.

**Returns:** *number*

Implementation of: [Heap](../interfaces/heap.md).[size](../interfaces/heap.md#size)

Defined in: [src/heap/binaryHeap.ts:170](https://github.com/havelessbemore/dastal/blob/dba59a5/src/heap/binaryHeap.ts#L170)

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator*<T, any, undefined\>

Iterate through the heap in sorted order.

**Note:** Unexpected behavior can occur if the collection is modified during iteration.

**Returns:** *Iterator*<T, any, undefined\>

An iterator through the heap.

Implementation of: [Heap](../interfaces/heap.md)

Defined in: [src/heap/binaryHeap.ts:180](https://github.com/havelessbemore/dastal/blob/dba59a5/src/heap/binaryHeap.ts#L180)

___

### addAll

▸ **addAll**(`elements`: *Iterable*<T\>): *number*

Insert a set of elements into the heap.

#### Parameters:

| Name | Type |
| :------ | :------ |
| `elements` | *Iterable*<T\> |

**Returns:** *number*

Implementation of: [Heap](../interfaces/heap.md)

Defined in: [src/heap/binaryHeap.ts:31](https://github.com/havelessbemore/dastal/blob/dba59a5/src/heap/binaryHeap.ts#L31)

___

### clear

▸ **clear**(): *void*

Remove all elements.

**Returns:** *void*

Implementation of: [Heap](../interfaces/heap.md)

Defined in: [src/heap/binaryHeap.ts:51](https://github.com/havelessbemore/dastal/blob/dba59a5/src/heap/binaryHeap.ts#L51)

___

### comparator

▸ **comparator**(): [*CompareFn*](../README.md#comparefn)<T\>

**Returns:** [*CompareFn*](../README.md#comparefn)<T\>

Implementation of: [Heap](../interfaces/heap.md)

Defined in: [src/heap/binaryHeap.ts:55](https://github.com/havelessbemore/dastal/blob/dba59a5/src/heap/binaryHeap.ts#L55)

___

### contains

▸ **contains**(`element`: T): *boolean*

Check if an element is in the heap.

#### Parameters:

| Name | Type |
| :------ | :------ |
| `element` | T |

**Returns:** *boolean*

Implementation of: [Heap](../interfaces/heap.md)

Defined in: [src/heap/binaryHeap.ts:59](https://github.com/havelessbemore/dastal/blob/dba59a5/src/heap/binaryHeap.ts#L59)

___

### delete

▸ **delete**(`element`: T): *boolean*

Delete an element from the heap.

#### Parameters:

| Name | Type |
| :------ | :------ |
| `element` | T |

**Returns:** *boolean*

Implementation of: [Heap](../interfaces/heap.md)

Defined in: [src/heap/binaryHeap.ts:63](https://github.com/havelessbemore/dastal/blob/dba59a5/src/heap/binaryHeap.ts#L63)

___

### dump

▸ **dump**(): *Iterable*<T\>

Iterate through the heap.

**Note:** Unexpected behavior can occur if the collection is modified during iteration.

**Returns:** *Iterable*<T\>

Implementation of: [Heap](../interfaces/heap.md)

Defined in: [src/heap/binaryHeap.ts:83](https://github.com/havelessbemore/dastal/blob/dba59a5/src/heap/binaryHeap.ts#L83)

___

### merge

▸ **merge**(`heap`: [*Heap*](../interfaces/heap.md)<T\>): [*BinaryHeap*](binaryheap.md)<T\>

Join with a different heap and modify the existing heap to
contain elements of both. Does not modify the input.

#### Parameters:

| Name | Type |
| :------ | :------ |
| `heap` | [*Heap*](../interfaces/heap.md)<T\> |

**Returns:** [*BinaryHeap*](binaryheap.md)<T\>

Implementation of: [Heap](../interfaces/heap.md)

Defined in: [src/heap/binaryHeap.ts:89](https://github.com/havelessbemore/dastal/blob/dba59a5/src/heap/binaryHeap.ts#L89)

___

### peek

▸ **peek**(): *undefined* \| T

Retrieves, but does not remove, the top of the heap.

**Returns:** *undefined* \| T

Implementation of: [Heap](../interfaces/heap.md)

Defined in: [src/heap/binaryHeap.ts:108](https://github.com/havelessbemore/dastal/blob/dba59a5/src/heap/binaryHeap.ts#L108)

___

### pop

▸ **pop**(): *undefined* \| T

Remove the top of the heap (AKA extract).

**Returns:** *undefined* \| T

Implementation of: [Heap](../interfaces/heap.md)

Defined in: [src/heap/binaryHeap.ts:112](https://github.com/havelessbemore/dastal/blob/dba59a5/src/heap/binaryHeap.ts#L112)

___

### push

▸ **push**(`value`: T): *number*

Inserts an element into the heap (AKA insert, add).

#### Parameters:

| Name | Type |
| :------ | :------ |
| `value` | T |

**Returns:** *number*

Implementation of: [Heap](../interfaces/heap.md)

Defined in: [src/heap/binaryHeap.ts:131](https://github.com/havelessbemore/dastal/blob/dba59a5/src/heap/binaryHeap.ts#L131)

___

### pushPop

▸ **pushPop**(`value`: T): T

Insert an element and then remove the top of the heap.

#### Parameters:

| Name | Type |
| :------ | :------ |
| `value` | T |

**Returns:** T

Implementation of: [Heap](../interfaces/heap.md)

Defined in: [src/heap/binaryHeap.ts:140](https://github.com/havelessbemore/dastal/blob/dba59a5/src/heap/binaryHeap.ts#L140)

___

### replace

▸ **replace**(`value`: T): *undefined* \| T

Remove the top of the heap and then insert a new element (AKA popPush).

#### Parameters:

| Name | Type |
| :------ | :------ |
| `value` | T |

**Returns:** *undefined* \| T

Implementation of: [Heap](../interfaces/heap.md)

Defined in: [src/heap/binaryHeap.ts:153](https://github.com/havelessbemore/dastal/blob/dba59a5/src/heap/binaryHeap.ts#L153)

___

### update

▸ **update**(`curElement`: T, `newElement`: T): *boolean*

Update a specific element.

#### Parameters:

| Name | Type |
| :------ | :------ |
| `curElement` | T |
| `newElement` | T |

**Returns:** *boolean*

Implementation of: [Heap](../interfaces/heap.md)

Defined in: [src/heap/binaryHeap.ts:197](https://github.com/havelessbemore/dastal/blob/dba59a5/src/heap/binaryHeap.ts#L197)
