[dastal - v5.0.0](../README.md) / Tree

# Interface: Tree<T\>

Represents a tree data structure ([source](https://en.wikipedia.org/wiki/Tree_(data_structure))).

A tree is a widely used abstract data type that simulates a hierarchical tree structure.
It can defined recursively as a collection of nodes (starting at a root node),
where each node consists of a value and a list of references to other nodes ('children'), with the
constraints that no reference is duplicated and none point to the root.

#### At a Glance

Iterate
- Iterate the tree: {@link [Symbol.iterator]}

Get
- Get the size of the tree: [size](tree.md#size)
- Check if the tree contains a given element: [contains](../classes/binaryheap.md#contains)

Set
- Update an element: [update](tree.md#update)

Add
- Add 1 element: [add](tree.md#add)

Remove
- Delete a given element: [delete](tree.md#delete)
- Remove all elements: [clear](tree.md#clear)

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [Collection](collection.md)<T\>

  ↳ **Tree**

  ↳↳ [SortedTree](sortedtree.md)

## Table of contents

### Properties

- [size](tree.md#size)

### Methods

- [[iterator]](tree.md#[iterator])
- [add](tree.md#add)
- [clear](tree.md#clear)
- [delete](tree.md#delete)
- [has](tree.md#has)
- [update](tree.md#update)

## Properties

### size

• `Readonly` **size**: `number`

The number of elements in the collection.

#### Inherited from

[Collection](collection.md).[size](collection.md#size)

#### Defined in

[src/collection/collection.ts:5](https://github.com/havelessbemore/dastal/blob/7d85137/src/collection/collection.ts#L5)

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

### add

▸ **add**(`element`): [Tree](tree.md)<T\>

Inserts an element into the tree.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | `T` | The element to be inserted. |

#### Returns

[Tree](tree.md)<T\>

The tree object.

#### Defined in

[src/tree/tree.ts:38](https://github.com/havelessbemore/dastal/blob/7d85137/src/tree/tree.ts#L38)

___

### clear

▸ **clear**(): `void`

Removes all elements.

#### Returns

`void`

#### Defined in

[src/tree/tree.ts:42](https://github.com/havelessbemore/dastal/blob/7d85137/src/tree/tree.ts#L42)

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

#### Defined in

[src/tree/tree.ts:50](https://github.com/havelessbemore/dastal/blob/7d85137/src/tree/tree.ts#L50)

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

#### Defined in

[src/tree/tree.ts:58](https://github.com/havelessbemore/dastal/blob/7d85137/src/tree/tree.ts#L58)

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

[src/tree/tree.ts:67](https://github.com/havelessbemore/dastal/blob/7d85137/src/tree/tree.ts#L67)
