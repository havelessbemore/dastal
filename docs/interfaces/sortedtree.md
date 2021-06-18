[dastal - v4.1.2](../README.md) / SortedTree

# Interface: SortedTree<T\>

Represents a sorted tree data structure.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [Tree](tree.md)<T\>

- [Sorted](sorted.md)<T\>

  ↳ **SortedTree**

## Implemented by

- [AATree](../classes/aatree.md)
- [AVLTree](../classes/avltree.md)

## Table of contents

### Properties

- [size](sortedtree.md#size)

### Methods

- [[Symbol.iterator]](sortedtree.md#[symbol.iterator])
- [add](sortedtree.md#add)
- [clear](sortedtree.md#clear)
- [comparator](sortedtree.md#comparator)
- [delete](sortedtree.md#delete)
- [has](sortedtree.md#has)
- [max](sortedtree.md#max)
- [min](sortedtree.md#min)
- [pop](sortedtree.md#pop)
- [shift](sortedtree.md#shift)
- [sorted](sortedtree.md#sorted)
- [update](sortedtree.md#update)

## Properties

### size

• `Readonly` **size**: `number`

The number of elements in the collection.

#### Inherited from

[Tree](tree.md).[size](tree.md#size)

#### Defined in

[src/collection/collection.ts:5](https://github.com/havelessbemore/dastal/blob/20d3f8b/src/collection/collection.ts#L5)

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): `Iterator`<T, any, undefined\>

#### Returns

`Iterator`<T, any, undefined\>

#### Inherited from

[Tree](tree.md).[[Symbol.iterator]](tree.md#[symbol.iterator])

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:51

___

### add

▸ **add**(`element`): [SortedTree](sortedtree.md)<T\>

Inserts an element into the tree.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | `T` | The element to be inserted. |

#### Returns

[SortedTree](sortedtree.md)<T\>

The tree object.

#### Inherited from

[Tree](tree.md).[add](tree.md#add)

#### Defined in

[src/tree/tree.ts:38](https://github.com/havelessbemore/dastal/blob/20d3f8b/src/tree/tree.ts#L38)

___

### clear

▸ **clear**(): `void`

Removes all elements.

#### Returns

`void`

#### Inherited from

[Tree](tree.md).[clear](tree.md#clear)

#### Defined in

[src/tree/tree.ts:42](https://github.com/havelessbemore/dastal/blob/20d3f8b/src/tree/tree.ts#L42)

___

### comparator

▸ **comparator**(): [CompareFn](../README.md#comparefn)<T\>

#### Returns

[CompareFn](../README.md#comparefn)<T\>

The function with which elements are sorted

#### Inherited from

[Sorted](sorted.md).[comparator](sorted.md#comparator)

#### Defined in

[src/index.ts:59](https://github.com/havelessbemore/dastal/blob/20d3f8b/src/index.ts#L59)

___

### delete

▸ **delete**(`element`): `boolean`

Delete an element from the tree.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | `T` | The element to delete. |

#### Returns

`boolean`

`true` if the element was found and deleted, otherwise `false`.

#### Inherited from

[Tree](tree.md).[delete](tree.md#delete)

#### Defined in

[src/tree/tree.ts:50](https://github.com/havelessbemore/dastal/blob/20d3f8b/src/tree/tree.ts#L50)

___

### has

▸ **has**(`element`): `boolean`

Check if an element is in the tree.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | `T` | The element to find. |

#### Returns

`boolean`

`true` if the element was found, otherwise `false`.

#### Inherited from

[Tree](tree.md).[has](tree.md#has)

#### Defined in

[src/tree/tree.ts:58](https://github.com/havelessbemore/dastal/blob/20d3f8b/src/tree/tree.ts#L58)

___

### max

▸ **max**(): `undefined` \| `T`

Get the maximum element.

#### Returns

`undefined` \| `T`

#### Defined in

[src/tree/sortedTree.ts:11](https://github.com/havelessbemore/dastal/blob/20d3f8b/src/tree/sortedTree.ts#L11)

___

### min

▸ **min**(): `undefined` \| `T`

Get the minimum element.

#### Returns

`undefined` \| `T`

#### Defined in

[src/tree/sortedTree.ts:15](https://github.com/havelessbemore/dastal/blob/20d3f8b/src/tree/sortedTree.ts#L15)

___

### pop

▸ **pop**(): `undefined` \| `T`

Remove the maximum element.

#### Returns

`undefined` \| `T`

#### Defined in

[src/tree/sortedTree.ts:19](https://github.com/havelessbemore/dastal/blob/20d3f8b/src/tree/sortedTree.ts#L19)

___

### shift

▸ **shift**(): `undefined` \| `T`

Remove the minimum element.

#### Returns

`undefined` \| `T`

#### Defined in

[src/tree/sortedTree.ts:23](https://github.com/havelessbemore/dastal/blob/20d3f8b/src/tree/sortedTree.ts#L23)

___

### sorted

▸ **sorted**(): `Iterable`<T\>

Iterate through the tree in sorted order (i.e in-order traversal).

**Note:** Unexpected behavior can occur if the collection is modified during iteration.

#### Returns

`Iterable`<T\>

#### Defined in

[src/tree/sortedTree.ts:29](https://github.com/havelessbemore/dastal/blob/20d3f8b/src/tree/sortedTree.ts#L29)

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

#### Inherited from

[Tree](tree.md).[update](tree.md#update)

#### Defined in

[src/tree/tree.ts:67](https://github.com/havelessbemore/dastal/blob/20d3f8b/src/tree/tree.ts#L67)
