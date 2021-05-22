[dastal - v1.4.0](../README.md) / Heap

# Interface: Heap<T\>

A specialized tree-based data structure that satisfies the heap property.

**Heap property**: For any given node N, the key (e.g. value) of N is greater than or equal to the key of its children.

In a heap, the highest priority element (relative to its ordering) is always stored at the root.
However, a heap is not a sorted structure; it can be regarded as being partially ordered.
The heap property only applies between a parent node and its descendants. There is no
implied ordering between siblings or cousins and no implied sequence for an ordered traversal.

A heap is a useful data structure when it is necessary to repeatedly
remove the object with the highest priority. In the sense, it can be used to implement
a priority queue.

#### Iterate
- Iterate the heap: [dump](heap.md#dump)
- Iterate the heap in sorted order: {@link [Symbol.iterator]}

#### Get
- Get the size of the heap: [size](heap.md#size)
- Get the top element: [peek](heap.md#peek)
- Check if the heap contains a given element: [contains](heap.md#contains)
- Get the heap's sorting method: [comparator](heap.md#comparator)

#### Set
- Update an element: [update](heap.md#update)

#### Add
- Add 1 element: [push](heap.md#push)
- Add 1 heap: [merge](heap.md#merge)
- Add multiple elements: [addAll](heap.md#addall)

#### Remove
- Remove the top element: [pop](heap.md#pop)
- Delete a given element: [delete](heap.md#delete)
- Remove all elements: [clear](heap.md#clear)

#### Add and Remove
- Add and then remove the top element: [pushPop](heap.md#pushpop)
- Remove the top element and then add an element: [replace](heap.md#replace)

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

* *Iterable*<T\>

* [*Sorted*](sorted.md)<T\>

  ↳ **Heap**

## Implemented by

* [*BinaryHeap*](../classes/binaryheap.md)
* [*SkewHeap*](../classes/skewheap.md)

## Table of contents

### Properties

- [size](heap.md#size)

### Methods

- [[Symbol.iterator]](heap.md#[symbol.iterator])
- [addAll](heap.md#addall)
- [clear](heap.md#clear)
- [comparator](heap.md#comparator)
- [contains](heap.md#contains)
- [delete](heap.md#delete)
- [dump](heap.md#dump)
- [merge](heap.md#merge)
- [peek](heap.md#peek)
- [pop](heap.md#pop)
- [push](heap.md#push)
- [pushPop](heap.md#pushpop)
- [replace](heap.md#replace)
- [update](heap.md#update)

## Properties

### size

• `Readonly` **size**: *number*

The number of elements in the heap.

Defined in: [src/heap/heap.ts:127](https://github.com/havelessbemore/dastal/blob/dba59a5/src/heap/heap.ts#L127)

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator*<T, any, undefined\>

**Returns:** *Iterator*<T, any, undefined\>

Inherited from: Iterable.\_\_@iterator

Defined in: node_modules/typescript/lib/lib.es2015.iterable.d.ts:51

___

### addAll

▸ **addAll**(`elements`: *Iterable*<T\>): *number*

Insert a set of elements into the heap.

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `elements` | *Iterable*<T\> | The elements to insert. |

**Returns:** *number*

The new size of the list.

Defined in: [src/heap/heap.ts:52](https://github.com/havelessbemore/dastal/blob/dba59a5/src/heap/heap.ts#L52)

___

### clear

▸ **clear**(): *void*

Remove all elements.

**Returns:** *void*

Defined in: [src/heap/heap.ts:56](https://github.com/havelessbemore/dastal/blob/dba59a5/src/heap/heap.ts#L56)

___

### comparator

▸ **comparator**(): [*CompareFn*](../README.md#comparefn)<T\>

**Returns:** [*CompareFn*](../README.md#comparefn)<T\>

The function with which elements are sorted

Inherited from: [Sorted](sorted.md)

Defined in: [src/index.ts:47](https://github.com/havelessbemore/dastal/blob/dba59a5/src/index.ts#L47)

___

### contains

▸ **contains**(`element`: T): *boolean*

Check if an element is in the heap.

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | T | The element to find. |

**Returns:** *boolean*

`true` if the element was found, otherwise `false`.

Defined in: [src/heap/heap.ts:64](https://github.com/havelessbemore/dastal/blob/dba59a5/src/heap/heap.ts#L64)

___

### delete

▸ **delete**(`element`: T): *boolean*

Delete an element from the heap.

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | T | The element to delete. |

**Returns:** *boolean*

`true` if the element was found and deleted, otherwise `false`.

Defined in: [src/heap/heap.ts:72](https://github.com/havelessbemore/dastal/blob/dba59a5/src/heap/heap.ts#L72)

___

### dump

▸ **dump**(): *Iterable*<T\>

Iterate through the heap.

**Note:** Unexpected behavior can occur if the collection is modified during iteration.

**Returns:** *Iterable*<T\>

Defined in: [src/heap/heap.ts:78](https://github.com/havelessbemore/dastal/blob/dba59a5/src/heap/heap.ts#L78)

___

### merge

▸ **merge**(`heap`: [*Heap*](heap.md)<T\>): [*Heap*](heap.md)<T\>

Join with a different heap and modify the existing heap to
contain elements of both. Does not modify the input.

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `heap` | [*Heap*](heap.md)<T\> | The heap to join with. |

**Returns:** [*Heap*](heap.md)<T\>

The new heap size.

Defined in: [src/heap/heap.ts:87](https://github.com/havelessbemore/dastal/blob/dba59a5/src/heap/heap.ts#L87)

___

### peek

▸ **peek**(): *undefined* \| T

Retrieves, but does not remove, the top of the heap.

**Returns:** *undefined* \| T

The element at the top of the heap or `undefined` if empty.

Defined in: [src/heap/heap.ts:93](https://github.com/havelessbemore/dastal/blob/dba59a5/src/heap/heap.ts#L93)

___

### pop

▸ **pop**(): *undefined* \| T

Remove the top of the heap (AKA extract).

**Returns:** *undefined* \| T

The element at the top of the heap or `undefined` if empty.

Defined in: [src/heap/heap.ts:99](https://github.com/havelessbemore/dastal/blob/dba59a5/src/heap/heap.ts#L99)

___

### push

▸ **push**(`element`: T): *number*

Inserts an element into the heap (AKA insert, add).

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | T | The element to be inserted. |

**Returns:** *number*

The new size of the heap.

Defined in: [src/heap/heap.ts:107](https://github.com/havelessbemore/dastal/blob/dba59a5/src/heap/heap.ts#L107)

___

### pushPop

▸ **pushPop**(`element`: T): T

Insert an element and then remove the top of the heap.

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | T | The element to be inserted. |

**Returns:** T

The element at the top of the heap.

Defined in: [src/heap/heap.ts:115](https://github.com/havelessbemore/dastal/blob/dba59a5/src/heap/heap.ts#L115)

___

### replace

▸ **replace**(`element`: T): *undefined* \| T

Remove the top of the heap and then insert a new element (AKA popPush).

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | T | The element to be inserted. |

**Returns:** *undefined* \| T

The element at the top of the heap or `undefined` if empty.

Defined in: [src/heap/heap.ts:123](https://github.com/havelessbemore/dastal/blob/dba59a5/src/heap/heap.ts#L123)

___

### update

▸ **update**(`curElement`: T, `newElement`: T): *boolean*

Update a specific element.

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `curElement` | T | The element to update. |
| `newElement` | T | The new element to insert. |

**Returns:** *boolean*

`true` if curElement was found and updated, otherwise `false`.

Defined in: [src/heap/heap.ts:136](https://github.com/havelessbemore/dastal/blob/dba59a5/src/heap/heap.ts#L136)
