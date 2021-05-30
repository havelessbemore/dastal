[dastal - v2.1.0](../README.md) / Tree

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
- Check if the tree contains a given element: [contains](tree.md#contains)

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

- *Iterable*<T\>

  ↳ **Tree**

  ↳↳ [*SortedTree*](sortedtree.md)

## Table of contents

### Properties

- [size](tree.md#size)

### Methods

- [[Symbol.iterator]](tree.md#[symbol.iterator])
- [add](tree.md#add)
- [clear](tree.md#clear)
- [contains](tree.md#contains)
- [delete](tree.md#delete)
- [update](tree.md#update)

## Properties

### size

• `Readonly` **size**: *number*

The number of elements in the tree.

Defined in: [src/tree/tree.ts:60](https://github.com/havelessbemore/dastal/blob/99eb870/src/tree/tree.ts#L60)

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator*<T, any, undefined\>

**Returns:** *Iterator*<T, any, undefined\>

Inherited from: Iterable.\_\_@iterator

Defined in: node_modules/typescript/lib/lib.es2015.iterable.d.ts:51

___

### add

▸ **add**(`element`: T): *number*

Inserts an element into the tree.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | T | The element to be inserted. |

**Returns:** *number*

The new size of the tree.

Defined in: [src/tree/tree.ts:36](https://github.com/havelessbemore/dastal/blob/99eb870/src/tree/tree.ts#L36)

___

### clear

▸ **clear**(): *void*

Remove all elements.

**Returns:** *void*

Defined in: [src/tree/tree.ts:40](https://github.com/havelessbemore/dastal/blob/99eb870/src/tree/tree.ts#L40)

___

### contains

▸ **contains**(`element`: T): *boolean*

Check if an element is in the tree.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | T | The element to find. |

**Returns:** *boolean*

`true` if the element was found, otherwise `false`.

Defined in: [src/tree/tree.ts:48](https://github.com/havelessbemore/dastal/blob/99eb870/src/tree/tree.ts#L48)

___

### delete

▸ **delete**(`element`: T): *boolean*

Delete an element from the tree.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | T | The element to delete. |

**Returns:** *boolean*

`true` if the element was found and deleted, otherwise `false`.

Defined in: [src/tree/tree.ts:56](https://github.com/havelessbemore/dastal/blob/99eb870/src/tree/tree.ts#L56)

___

### update

▸ **update**(`curElement`: T, `newElement`: T): *boolean*

Update a specific element.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `curElement` | T | The element to update. |
| `newElement` | T | The new element to insert. |

**Returns:** *boolean*

`true` if curElement was found and updated, otherwise `false`.

Defined in: [src/tree/tree.ts:69](https://github.com/havelessbemore/dastal/blob/99eb870/src/tree/tree.ts#L69)
