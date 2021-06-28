[dastal - v5.0.0](../README.md) / BinaryHeap

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

- [Heap](../interfaces/heap.md)<T\>

## Table of contents

### Constructors

- [constructor](binaryheap.md#constructor)

### Accessors

- [size](binaryheap.md#size)

### Methods

- [[iterator]](binaryheap.md#[iterator])
- [addAll](binaryheap.md#addall)
- [clear](binaryheap.md#clear)
- [comparator](binaryheap.md#comparator)
- [contains](binaryheap.md#contains)
- [delete](binaryheap.md#delete)
- [merge](binaryheap.md#merge)
- [peek](binaryheap.md#peek)
- [pop](binaryheap.md#pop)
- [push](binaryheap.md#push)
- [pushPop](binaryheap.md#pushpop)
- [replace](binaryheap.md#replace)
- [sorted](binaryheap.md#sorted)
- [update](binaryheap.md#update)

## Constructors

### constructor

• **new BinaryHeap**<T\>(`compareFn`, `elements?`)

Instantiate a heap.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `compareFn` | [CompareFn](../README.md#comparefn)<T\> | The function to determine the order of elements. |
| `elements?` | `Iterable`<T\> | A set of elements to initialize the list with. |

#### Defined in

[src/heap/binaryHeap.ts:33](https://github.com/havelessbemore/dastal/blob/7d85137/src/heap/binaryHeap.ts#L33)

## Accessors

### size

• `get` **size**(): `number`

The number of elements in the collection.

#### Returns

`number`

#### Implementation of

[Heap](../interfaces/heap.md).[size](../interfaces/heap.md#size)

#### Defined in

[src/heap/binaryHeap.ts:187](https://github.com/havelessbemore/dastal/blob/7d85137/src/heap/binaryHeap.ts#L187)

## Methods

### [iterator]

▸ **[iterator]**(): `Iterator`<T, any, undefined\>

Receive an iterator through the list.

**Note:** Unexpected behavior can occur if the collection is modified during iteration.

#### Returns

`Iterator`<T, any, undefined\>

An iterator through the list

#### Implementation of

[Heap](../interfaces/heap.md).[[iterator]](../interfaces/heap.md#[iterator])

#### Defined in

[src/heap/binaryHeap.ts:214](https://github.com/havelessbemore/dastal/blob/7d85137/src/heap/binaryHeap.ts#L214)

___

### addAll

▸ **addAll**(`elements`): `number`

Insert a set of elements into the heap.

#### Parameters

| Name | Type |
| :------ | :------ |
| `elements` | `Iterable`<T\> |

#### Returns

`number`

#### Implementation of

[Heap](../interfaces/heap.md).[addAll](../interfaces/heap.md#addall)

#### Defined in

[src/heap/binaryHeap.ts:46](https://github.com/havelessbemore/dastal/blob/7d85137/src/heap/binaryHeap.ts#L46)

___

### clear

▸ **clear**(): `void`

Removes all elements.

#### Returns

`void`

#### Implementation of

[Heap](../interfaces/heap.md).[clear](../interfaces/heap.md#clear)

#### Defined in

[src/heap/binaryHeap.ts:74](https://github.com/havelessbemore/dastal/blob/7d85137/src/heap/binaryHeap.ts#L74)

___

### comparator

▸ **comparator**(): [CompareFn](../README.md#comparefn)<T\>

#### Returns

[CompareFn](../README.md#comparefn)<T\>

#### Implementation of

[Heap](../interfaces/heap.md).[comparator](../interfaces/heap.md#comparator)

#### Defined in

[src/heap/binaryHeap.ts:78](https://github.com/havelessbemore/dastal/blob/7d85137/src/heap/binaryHeap.ts#L78)

___

### contains

▸ **contains**(`element`): `boolean`

Check if an element is in the heap.

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `T` |

#### Returns

`boolean`

#### Implementation of

[Heap](../interfaces/heap.md).[contains](../interfaces/heap.md#contains)

#### Defined in

[src/heap/binaryHeap.ts:82](https://github.com/havelessbemore/dastal/blob/7d85137/src/heap/binaryHeap.ts#L82)

___

### delete

▸ **delete**(`element`): `boolean`

Delete an element from the heap.

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `T` |

#### Returns

`boolean`

#### Implementation of

[Heap](../interfaces/heap.md).[delete](../interfaces/heap.md#delete)

#### Defined in

[src/heap/binaryHeap.ts:86](https://github.com/havelessbemore/dastal/blob/7d85137/src/heap/binaryHeap.ts#L86)

___

### merge

▸ **merge**(`heap`): [BinaryHeap](binaryheap.md)<T\>

Join with a different heap and modify the existing heap to
contain elements of both. Does not modify the input.

#### Parameters

| Name | Type |
| :------ | :------ |
| `heap` | [Heap](../interfaces/heap.md)<T\> |

#### Returns

[BinaryHeap](binaryheap.md)<T\>

#### Implementation of

[Heap](../interfaces/heap.md).[merge](../interfaces/heap.md#merge)

#### Defined in

[src/heap/binaryHeap.ts:106](https://github.com/havelessbemore/dastal/blob/7d85137/src/heap/binaryHeap.ts#L106)

___

### peek

▸ **peek**(): `undefined` \| `T`

Retrieves, but does not remove, the top of the heap.

#### Returns

`undefined` \| `T`

#### Implementation of

[Heap](../interfaces/heap.md).[peek](../interfaces/heap.md#peek)

#### Defined in

[src/heap/binaryHeap.ts:125](https://github.com/havelessbemore/dastal/blob/7d85137/src/heap/binaryHeap.ts#L125)

___

### pop

▸ **pop**(): `undefined` \| `T`

Remove the top of the heap (AKA extract).

#### Returns

`undefined` \| `T`

#### Implementation of

[Heap](../interfaces/heap.md).[pop](../interfaces/heap.md#pop)

#### Defined in

[src/heap/binaryHeap.ts:129](https://github.com/havelessbemore/dastal/blob/7d85137/src/heap/binaryHeap.ts#L129)

___

### push

▸ **push**(`value`): `number`

Inserts an element into the heap (AKA insert, add).

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`number`

#### Implementation of

[Heap](../interfaces/heap.md).[push](../interfaces/heap.md#push)

#### Defined in

[src/heap/binaryHeap.ts:148](https://github.com/havelessbemore/dastal/blob/7d85137/src/heap/binaryHeap.ts#L148)

___

### pushPop

▸ **pushPop**(`value`): `T`

Insert an element and then remove the top of the heap.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`T`

#### Implementation of

[Heap](../interfaces/heap.md).[pushPop](../interfaces/heap.md#pushpop)

#### Defined in

[src/heap/binaryHeap.ts:157](https://github.com/havelessbemore/dastal/blob/7d85137/src/heap/binaryHeap.ts#L157)

___

### replace

▸ **replace**(`value`): `undefined` \| `T`

Remove the top of the heap and then insert a new element (AKA popPush).

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`undefined` \| `T`

#### Implementation of

[Heap](../interfaces/heap.md).[replace](../interfaces/heap.md#replace)

#### Defined in

[src/heap/binaryHeap.ts:170](https://github.com/havelessbemore/dastal/blob/7d85137/src/heap/binaryHeap.ts#L170)

___

### sorted

▸ **sorted**(): `Iterable`<T\>

Iterate through the heap in sorted order.

**Note:** Unexpected behavior can occur if the collection is modified during iteration.

#### Returns

`Iterable`<T\>

#### Implementation of

[Heap](../interfaces/heap.md).[sorted](../interfaces/heap.md#sorted)

#### Defined in

[src/heap/binaryHeap.ts:191](https://github.com/havelessbemore/dastal/blob/7d85137/src/heap/binaryHeap.ts#L191)

___

### update

▸ **update**(`curElement`, `newElement`): `boolean`

Update a specific element.

#### Parameters

| Name | Type |
| :------ | :------ |
| `curElement` | `T` |
| `newElement` | `T` |

#### Returns

`boolean`

#### Implementation of

[Heap](../interfaces/heap.md).[update](../interfaces/heap.md#update)

#### Defined in

[src/heap/binaryHeap.ts:218](https://github.com/havelessbemore/dastal/blob/7d85137/src/heap/binaryHeap.ts#L218)
