[dastal - v1.4.0](../README.md) / SkewHeap

# Class: SkewHeap<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

* [*Heap*](../interfaces/heap.md)<T\>

## Table of contents

### Constructors

- [constructor](skewheap.md#constructor)

### Accessors

- [size](skewheap.md#size)

### Methods

- [[Symbol.iterator]](skewheap.md#[symbol.iterator])
- [addAll](skewheap.md#addall)
- [clear](skewheap.md#clear)
- [comparator](skewheap.md#comparator)
- [contains](skewheap.md#contains)
- [delete](skewheap.md#delete)
- [dump](skewheap.md#dump)
- [merge](skewheap.md#merge)
- [peek](skewheap.md#peek)
- [pop](skewheap.md#pop)
- [push](skewheap.md#push)
- [pushPop](skewheap.md#pushpop)
- [replace](skewheap.md#replace)
- [update](skewheap.md#update)

## Constructors

### constructor

\+ **new SkewHeap**<T\>(`compareFn`: [*CompareFn*](../README.md#comparefn)<T\>, `elements?`: *Iterable*<T\>): [*SkewHeap*](skewheap.md)<T\>

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

**Returns:** [*SkewHeap*](skewheap.md)<T\>

Defined in: src/heap/skewHeap.ts:23

## Accessors

### size

• get **size**(): *number*

The number of elements in the heap.

**Returns:** *number*

Implementation of: [Heap](../interfaces/heap.md).[size](../interfaces/heap.md#size)

Defined in: src/heap/skewHeap.ts:140

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator*<T, any, undefined\>

Iterate through the heap in sorted order.

**Note:** Unexpected behavior can occur if the collection is modified during iteration.

**Returns:** *Iterator*<T, any, undefined\>

An iterator through the heap.

Implementation of: [Heap](../interfaces/heap.md)

Defined in: src/heap/skewHeap.ts:150

___

### addAll

▸ **addAll**(`elements`: *Iterable*<T\>): *number*

Insert a set of elements into the heap.

#### Parameters:

| Name | Type |
| :------ | :------ |
| `elements` | *Iterable*<T\> |

**Returns:** *number*

The new size of the list.

Implementation of: [Heap](../interfaces/heap.md)

Defined in: src/heap/skewHeap.ts:36

___

### clear

▸ **clear**(): *void*

Remove all elements.

**Returns:** *void*

Implementation of: [Heap](../interfaces/heap.md)

Defined in: src/heap/skewHeap.ts:43

___

### comparator

▸ **comparator**(): [*CompareFn*](../README.md#comparefn)<T\>

**Returns:** [*CompareFn*](../README.md#comparefn)<T\>

The function with which elements are sorted

Implementation of: [Heap](../interfaces/heap.md)

Defined in: src/heap/skewHeap.ts:48

___

### contains

▸ **contains**(`element`: T): *boolean*

Check if an element is in the heap.

#### Parameters:

| Name | Type |
| :------ | :------ |
| `element` | T |

**Returns:** *boolean*

`true` if the element was found, otherwise `false`.

Implementation of: [Heap](../interfaces/heap.md)

Defined in: src/heap/skewHeap.ts:52

___

### delete

▸ **delete**(`element`: T): *boolean*

Delete an element from the heap.

#### Parameters:

| Name | Type |
| :------ | :------ |
| `element` | T |

**Returns:** *boolean*

`true` if the element was found and deleted, otherwise `false`.

Implementation of: [Heap](../interfaces/heap.md)

Defined in: src/heap/skewHeap.ts:61

___

### dump

▸ **dump**(): *Iterable*<T\>

Iterate through the heap.

**Note:** Unexpected behavior can occur if the collection is modified during iteration.

**Returns:** *Iterable*<T\>

Implementation of: [Heap](../interfaces/heap.md)

Defined in: src/heap/skewHeap.ts:86

___

### merge

▸ **merge**(`heap`: [*Heap*](../interfaces/heap.md)<T\>): [*SkewHeap*](skewheap.md)<T\>

Join with a different heap and modify the existing heap to
contain elements of both. Does not modify the input.

#### Parameters:

| Name | Type |
| :------ | :------ |
| `heap` | [*Heap*](../interfaces/heap.md)<T\> |

**Returns:** [*SkewHeap*](skewheap.md)<T\>

The new heap size.

Implementation of: [Heap](../interfaces/heap.md)

Defined in: src/heap/skewHeap.ts:92

___

### peek

▸ **peek**(): *undefined* \| T

Retrieves, but does not remove, the top of the heap.

**Returns:** *undefined* \| T

The element at the top of the heap or `undefined` if empty.

Implementation of: [Heap](../interfaces/heap.md)

Defined in: src/heap/skewHeap.ts:105

___

### pop

▸ **pop**(): *undefined* \| T

Remove the top of the heap (AKA extract).

**Returns:** *undefined* \| T

The element at the top of the heap or `undefined` if empty.

Implementation of: [Heap](../interfaces/heap.md)

Defined in: src/heap/skewHeap.ts:109

___

### push

▸ **push**(`value`: T): *number*

Inserts an element into the heap (AKA insert, add).

#### Parameters:

| Name | Type |
| :------ | :------ |
| `value` | T |

**Returns:** *number*

The new size of the heap.

Implementation of: [Heap](../interfaces/heap.md)

Defined in: src/heap/skewHeap.ts:119

___

### pushPop

▸ **pushPop**(`value`: T): T

Insert an element and then remove the top of the heap.

#### Parameters:

| Name | Type |
| :------ | :------ |
| `value` | T |

**Returns:** T

The element at the top of the heap.

Implementation of: [Heap](../interfaces/heap.md)

Defined in: src/heap/skewHeap.ts:124

___

### replace

▸ **replace**(`value`: T): *undefined* \| T

Remove the top of the heap and then insert a new element (AKA popPush).

#### Parameters:

| Name | Type |
| :------ | :------ |
| `value` | T |

**Returns:** *undefined* \| T

The element at the top of the heap or `undefined` if empty.

Implementation of: [Heap](../interfaces/heap.md)

Defined in: src/heap/skewHeap.ts:129

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

`true` if curElement was found and updated, otherwise `false`.

Implementation of: [Heap](../interfaces/heap.md)

Defined in: src/heap/skewHeap.ts:165
