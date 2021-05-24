[dastal - v2.0.0](../README.md) / SkewHeap

# Class: SkewHeap<T\>

A skew heap is a heap implemented as a binary tree
([source](https://en.wikipedia.org/wiki/Skew_heap)).

A skew heap is a self-adjusting heap which attempts to maintain balance
by unconditionally swapping all nodes in the merge path when merging two heaps. Every
operation that modifies the heap (e.g. push, pop, merge) is considered a merge and is done
by using a skew heap merge.

Skew heaps can merge more quickly than binary heaps. This can seem contradictory, since
skew heaps have no structural constraints and no guarantee that the height of the tree is
logarithmic (i.e. balanced). However, amortized complexity analysis can demonstrate that
all operations on a skew heap can be done in O(log(n). More specifically, the
amortized complexity is known to be log<sub>φ</sub>(n) where φ is the golden ratio. This is
approximately 1.44*log<sub>2</sub>(n).

#### Complexity

| Property | Average  | Worst |
| :------- | :------  | :---- |
| Space    | O(n)     | O(n)
| Push     | O(log n) | O(log n)
| Peek     | O(1)	 | O(1)
| Pop      | O(log n) | O(log n)
| Search   | O(n)     | O(n)

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
- [merge](skewheap.md#merge)
- [peek](skewheap.md#peek)
- [pop](skewheap.md#pop)
- [push](skewheap.md#push)
- [pushPop](skewheap.md#pushpop)
- [replace](skewheap.md#replace)
- [sorted](skewheap.md#sorted)
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
| `elements?` | *Iterable*<T\> | A set of elements to initialize the heap with. |

**Returns:** [*SkewHeap*](skewheap.md)<T\>

Defined in: [src/heap/skewHeap.ts:47](https://github.com/havelessbemore/dastal/blob/5cebce9/src/heap/skewHeap.ts#L47)

## Accessors

### size

• get **size**(): *number*

The number of elements in the heap.

**Returns:** *number*

Implementation of: [Heap](../interfaces/heap.md).[size](../interfaces/heap.md#size)

Defined in: [src/heap/skewHeap.ts:166](https://github.com/havelessbemore/dastal/blob/5cebce9/src/heap/skewHeap.ts#L166)

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator*<T, any, undefined\>

Receive an iterator through the list.

**Note:** Unexpected behavior can occur if the collection is modified during iteration.

**Returns:** *Iterator*<T, any, undefined\>

An iterator through the list

Implementation of: [Heap](../interfaces/heap.md)

Defined in: [src/heap/skewHeap.ts:191](https://github.com/havelessbemore/dastal/blob/5cebce9/src/heap/skewHeap.ts#L191)

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

Defined in: [src/heap/skewHeap.ts:60](https://github.com/havelessbemore/dastal/blob/5cebce9/src/heap/skewHeap.ts#L60)

___

### clear

▸ **clear**(): *void*

Remove all elements.

**Returns:** *void*

Implementation of: [Heap](../interfaces/heap.md)

Defined in: [src/heap/skewHeap.ts:73](https://github.com/havelessbemore/dastal/blob/5cebce9/src/heap/skewHeap.ts#L73)

___

### comparator

▸ **comparator**(): [*CompareFn*](../README.md#comparefn)<T\>

**Returns:** [*CompareFn*](../README.md#comparefn)<T\>

The function with which elements are sorted

Implementation of: [Heap](../interfaces/heap.md)

Defined in: [src/heap/skewHeap.ts:78](https://github.com/havelessbemore/dastal/blob/5cebce9/src/heap/skewHeap.ts#L78)

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

Defined in: [src/heap/skewHeap.ts:82](https://github.com/havelessbemore/dastal/blob/5cebce9/src/heap/skewHeap.ts#L82)

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

Defined in: [src/heap/skewHeap.ts:91](https://github.com/havelessbemore/dastal/blob/5cebce9/src/heap/skewHeap.ts#L91)

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

Defined in: [src/heap/skewHeap.ts:116](https://github.com/havelessbemore/dastal/blob/5cebce9/src/heap/skewHeap.ts#L116)

___

### peek

▸ **peek**(): *undefined* \| T

Retrieves, but does not remove, the top of the heap.

**Returns:** *undefined* \| T

The element at the top of the heap or `undefined` if empty.

Implementation of: [Heap](../interfaces/heap.md)

Defined in: [src/heap/skewHeap.ts:131](https://github.com/havelessbemore/dastal/blob/5cebce9/src/heap/skewHeap.ts#L131)

___

### pop

▸ **pop**(): *undefined* \| T

Remove the top of the heap (AKA extract).

**Returns:** *undefined* \| T

The element at the top of the heap or `undefined` if empty.

Implementation of: [Heap](../interfaces/heap.md)

Defined in: [src/heap/skewHeap.ts:135](https://github.com/havelessbemore/dastal/blob/5cebce9/src/heap/skewHeap.ts#L135)

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

Defined in: [src/heap/skewHeap.ts:145](https://github.com/havelessbemore/dastal/blob/5cebce9/src/heap/skewHeap.ts#L145)

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

Defined in: [src/heap/skewHeap.ts:150](https://github.com/havelessbemore/dastal/blob/5cebce9/src/heap/skewHeap.ts#L150)

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

Defined in: [src/heap/skewHeap.ts:155](https://github.com/havelessbemore/dastal/blob/5cebce9/src/heap/skewHeap.ts#L155)

___

### sorted

▸ **sorted**(): *Iterable*<T\>

Iterate through the heap in sorted order.

**Note:** Unexpected behavior can occur if the collection is modified during iteration.

**Returns:** *Iterable*<T\>

Implementation of: [Heap](../interfaces/heap.md)

Defined in: [src/heap/skewHeap.ts:170](https://github.com/havelessbemore/dastal/blob/5cebce9/src/heap/skewHeap.ts#L170)

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

Defined in: [src/heap/skewHeap.ts:197](https://github.com/havelessbemore/dastal/blob/5cebce9/src/heap/skewHeap.ts#L197)
