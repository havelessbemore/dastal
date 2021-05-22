[dastal - v1.4.0](../README.md) / BinaryHeap

# Class: BinaryHeap<T\>

A binary heap is a heap implemented as a binary tree with an additional shape property
([source](https://en.wikipedia.org/wiki/Binary_heap)).

**Shape property**: Must be a complete binary tree. This means all levels of the tree
(except possibly the last one) are fully filled. If the last level of the tree is incomplete,
the nodes of that level are filled from left to right.

#### Complexity

| Property | Average | Worst |
| :------- | :------ | :---- |
| Space    | O(n)    | O(n)
| Push     | O(1)    | O(log n)
| Peek     | O(1)	| O(1)
| Pop      | O(log n)| O(log n)
| Search   | O(n)    | O(n)

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

Defined in: [src/heap/binaryHeap.ts:32](https://github.com/havelessbemore/dastal/blob/ae4a0f6/src/heap/binaryHeap.ts#L32)

## Accessors

### size

• get **size**(): *number*

The number of elements in the heap.

**Returns:** *number*

Implementation of: [Heap](../interfaces/heap.md).[size](../interfaces/heap.md#size)

Defined in: [src/heap/binaryHeap.ts:185](https://github.com/havelessbemore/dastal/blob/ae4a0f6/src/heap/binaryHeap.ts#L185)

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator*<T, any, undefined\>

Iterate through the heap in sorted order.

**Note:** Unexpected behavior can occur if the collection is modified during iteration.

**Returns:** *Iterator*<T, any, undefined\>

An iterator through the heap.

Implementation of: [Heap](../interfaces/heap.md)

Defined in: [src/heap/binaryHeap.ts:195](https://github.com/havelessbemore/dastal/blob/ae4a0f6/src/heap/binaryHeap.ts#L195)

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

Defined in: [src/heap/binaryHeap.ts:45](https://github.com/havelessbemore/dastal/blob/ae4a0f6/src/heap/binaryHeap.ts#L45)

___

### clear

▸ **clear**(): *void*

Remove all elements.

**Returns:** *void*

Implementation of: [Heap](../interfaces/heap.md)

Defined in: [src/heap/binaryHeap.ts:65](https://github.com/havelessbemore/dastal/blob/ae4a0f6/src/heap/binaryHeap.ts#L65)

___

### comparator

▸ **comparator**(): [*CompareFn*](../README.md#comparefn)<T\>

**Returns:** [*CompareFn*](../README.md#comparefn)<T\>

Implementation of: [Heap](../interfaces/heap.md)

Defined in: [src/heap/binaryHeap.ts:69](https://github.com/havelessbemore/dastal/blob/ae4a0f6/src/heap/binaryHeap.ts#L69)

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

Defined in: [src/heap/binaryHeap.ts:73](https://github.com/havelessbemore/dastal/blob/ae4a0f6/src/heap/binaryHeap.ts#L73)

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

Defined in: [src/heap/binaryHeap.ts:77](https://github.com/havelessbemore/dastal/blob/ae4a0f6/src/heap/binaryHeap.ts#L77)

___

### dump

▸ **dump**(): *Iterable*<T\>

Iterate through the heap.

**Note:** Unexpected behavior can occur if the collection is modified during iteration.

**Returns:** *Iterable*<T\>

Implementation of: [Heap](../interfaces/heap.md)

Defined in: [src/heap/binaryHeap.ts:97](https://github.com/havelessbemore/dastal/blob/ae4a0f6/src/heap/binaryHeap.ts#L97)

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

Defined in: [src/heap/binaryHeap.ts:103](https://github.com/havelessbemore/dastal/blob/ae4a0f6/src/heap/binaryHeap.ts#L103)

___

### peek

▸ **peek**(): *undefined* \| T

Retrieves, but does not remove, the top of the heap.

**Returns:** *undefined* \| T

Implementation of: [Heap](../interfaces/heap.md)

Defined in: [src/heap/binaryHeap.ts:123](https://github.com/havelessbemore/dastal/blob/ae4a0f6/src/heap/binaryHeap.ts#L123)

___

### pop

▸ **pop**(): *undefined* \| T

Remove the top of the heap (AKA extract).

**Returns:** *undefined* \| T

Implementation of: [Heap](../interfaces/heap.md)

Defined in: [src/heap/binaryHeap.ts:127](https://github.com/havelessbemore/dastal/blob/ae4a0f6/src/heap/binaryHeap.ts#L127)

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

Defined in: [src/heap/binaryHeap.ts:146](https://github.com/havelessbemore/dastal/blob/ae4a0f6/src/heap/binaryHeap.ts#L146)

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

Defined in: [src/heap/binaryHeap.ts:155](https://github.com/havelessbemore/dastal/blob/ae4a0f6/src/heap/binaryHeap.ts#L155)

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

Defined in: [src/heap/binaryHeap.ts:168](https://github.com/havelessbemore/dastal/blob/ae4a0f6/src/heap/binaryHeap.ts#L168)

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

Defined in: [src/heap/binaryHeap.ts:212](https://github.com/havelessbemore/dastal/blob/ae4a0f6/src/heap/binaryHeap.ts#L212)