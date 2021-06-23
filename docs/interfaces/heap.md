[dastal - v5.0.0](../README.md) / Heap

# Interface: Heap<T\>

A specialized tree-based data structure that satisfies the heap property
([source](https://en.wikipedia.org/wiki/Heap_(data_structure))).

**Heap property**: For any given node N, the key (e.g. value) of N is
greater than or equal to the key of its children.

In a heap, the highest priority element (relative to its ordering) is always stored at the root.
However, a heap is not a sorted structure; it can be regarded as being partially ordered.
The heap property only applies between a parent node and its descendants. There is no
implied ordering between siblings or cousins and no implied sequence for an ordered traversal.

A heap is a useful data structure when it is necessary to repeatedly
remove the object with the highest priority. In the sense, it can be used to implement
a priority queue.

#### At a Glance

Iterate
- Iterate the heap: {@link [Symbol.iterator]}
- Iterate the heap in sorted order: [sorted](heap.md#sorted)

Get
- Get the size of the heap: [size](heap.md#size)
- Get the top element: [peek](heap.md#peek)
- Check if the heap contains a given element: [contains](heap.md#contains)
- Get the heap's sorting method: [comparator](heap.md#comparator)

Set
- Update an element: [update](heap.md#update)

Add
- Add 1 element: [push](heap.md#push)
- Add 1 heap: [merge](heap.md#merge)
- Add multiple elements: [addAll](heap.md#addall)

Remove
- Remove the top element: [pop](heap.md#pop)
- Delete a given element: [delete](heap.md#delete)
- Remove all elements: [clear](heap.md#clear)

Add & Remove
- Add and then remove the top element: [pushPop](heap.md#pushpop)
- Remove the top element and then add an element: [replace](heap.md#replace)

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [Collection](collection.md)<T\>

- [Sorted](sorted.md)<T\>

  ↳ **Heap**

## Implemented by

- [BinaryHeap](../classes/binaryheap.md)
- [SkewHeap](../classes/skewheap.md)

## Table of contents

### Properties

- [size](heap.md#size)

### Methods

- [[iterator]](heap.md#[iterator])
- [addAll](heap.md#addall)
- [clear](heap.md#clear)
- [comparator](heap.md#comparator)
- [contains](heap.md#contains)
- [delete](heap.md#delete)
- [merge](heap.md#merge)
- [peek](heap.md#peek)
- [pop](heap.md#pop)
- [push](heap.md#push)
- [pushPop](heap.md#pushpop)
- [replace](heap.md#replace)
- [sorted](heap.md#sorted)
- [update](heap.md#update)

## Properties

### size

• `Readonly` **size**: `number`

The number of elements in the collection.

#### Inherited from

[Collection](collection.md).[size](collection.md#size)

#### Defined in

[src/collection/collection.ts:5](https://github.com/havelessbemore/dastal/blob/389210e/src/collection/collection.ts#L5)

## Methods

### [iterator]

▸ **[iterator]**(): `Iterator`<T, any, undefined\>

#### Returns

`Iterator`<T, any, undefined\>

#### Inherited from

[Collection](collection.md).[[iterator]](collection.md#[iterator])

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:51

___

### addAll

▸ **addAll**(`elements`): `number`

Insert a set of elements into the heap.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `elements` | `Iterable`<T\> | The elements to insert. |

#### Returns

`number`

The new size of the list.

#### Defined in

[src/heap/heap.ts:57](https://github.com/havelessbemore/dastal/blob/389210e/src/heap/heap.ts#L57)

___

### clear

▸ **clear**(): `void`

Removes all elements.

#### Returns

`void`

#### Defined in

[src/heap/heap.ts:61](https://github.com/havelessbemore/dastal/blob/389210e/src/heap/heap.ts#L61)

___

### comparator

▸ **comparator**(): [CompareFn](../README.md#comparefn)<T\>

#### Returns

[CompareFn](../README.md#comparefn)<T\>

The function with which elements are sorted

#### Inherited from

[Sorted](sorted.md).[comparator](sorted.md#comparator)

#### Defined in

[src/index.ts:61](https://github.com/havelessbemore/dastal/blob/389210e/src/index.ts#L61)

___

### contains

▸ **contains**(`element`): `boolean`

Check if an element is in the heap.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | `T` | The element to find. |

#### Returns

`boolean`

`true` if the element was found, otherwise `false`.

#### Defined in

[src/heap/heap.ts:69](https://github.com/havelessbemore/dastal/blob/389210e/src/heap/heap.ts#L69)

___

### delete

▸ **delete**(`element`): `boolean`

Delete an element from the heap.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | `T` | The element to delete. |

#### Returns

`boolean`

`true` if the element was found and deleted, otherwise `false`.

#### Defined in

[src/heap/heap.ts:77](https://github.com/havelessbemore/dastal/blob/389210e/src/heap/heap.ts#L77)

___

### merge

▸ **merge**(`heap`): [Heap](heap.md)<T\>

Join with a different heap and modify the existing heap to
contain elements of both. Does not modify the input.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `heap` | [Heap](heap.md)<T\> | The heap to join with. |

#### Returns

[Heap](heap.md)<T\>

The heap.

#### Defined in

[src/heap/heap.ts:86](https://github.com/havelessbemore/dastal/blob/389210e/src/heap/heap.ts#L86)

___

### peek

▸ **peek**(): `undefined` \| `T`

Retrieves, but does not remove, the top of the heap.

#### Returns

`undefined` \| `T`

The element at the top of the heap or `undefined` if empty.

#### Defined in

[src/heap/heap.ts:92](https://github.com/havelessbemore/dastal/blob/389210e/src/heap/heap.ts#L92)

___

### pop

▸ **pop**(): `undefined` \| `T`

Remove the top of the heap (AKA extract).

#### Returns

`undefined` \| `T`

The element at the top of the heap or `undefined` if empty.

#### Defined in

[src/heap/heap.ts:98](https://github.com/havelessbemore/dastal/blob/389210e/src/heap/heap.ts#L98)

___

### push

▸ **push**(`element`): `number`

Inserts an element into the heap (AKA insert, add).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | `T` | The element to be inserted. |

#### Returns

`number`

The new size of the heap.

#### Defined in

[src/heap/heap.ts:106](https://github.com/havelessbemore/dastal/blob/389210e/src/heap/heap.ts#L106)

___

### pushPop

▸ **pushPop**(`element`): `T`

Insert an element and then remove the top of the heap.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | `T` | The element to be inserted. |

#### Returns

`T`

The element at the top of the heap.

#### Defined in

[src/heap/heap.ts:114](https://github.com/havelessbemore/dastal/blob/389210e/src/heap/heap.ts#L114)

___

### replace

▸ **replace**(`element`): `undefined` \| `T`

Remove the top of the heap and then insert a new element (AKA popPush).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | `T` | The element to be inserted. |

#### Returns

`undefined` \| `T`

The element at the top of the heap or `undefined` if empty.

#### Defined in

[src/heap/heap.ts:122](https://github.com/havelessbemore/dastal/blob/389210e/src/heap/heap.ts#L122)

___

### sorted

▸ **sorted**(): `Iterable`<T\>

Iterate through the heap in sorted order.

**Note:** Unexpected behavior can occur if the collection is modified during iteration.

#### Returns

`Iterable`<T\>

#### Defined in

[src/heap/heap.ts:128](https://github.com/havelessbemore/dastal/blob/389210e/src/heap/heap.ts#L128)

___

### update

▸ **update**(`curElement`, `newElement`): `boolean`

Update a specific element.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `curElement` | `T` | The element to update. |
| `newElement` | `T` | The new element to insert. |

#### Returns

`boolean`

`true` if curElement was found and updated, otherwise `false`.

#### Defined in

[src/heap/heap.ts:137](https://github.com/havelessbemore/dastal/blob/389210e/src/heap/heap.ts#L137)
