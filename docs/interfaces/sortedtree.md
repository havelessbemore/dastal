[dastal - v2.0.1](../README.md) / SortedTree

# Interface: SortedTree<T\>

Represents a sorted tree data structure.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [*Tree*](tree.md)<T\>

- [*Sorted*](sorted.md)<T\>

  ↳ **SortedTree**

## Implemented by

- [*AATree*](../classes/aatree.md)
- [*AVLTree*](../classes/avltree.md)

## Table of contents

### Properties

- [size](sortedtree.md#size)

### Methods

- [[Symbol.iterator]](sortedtree.md#[symbol.iterator])
- [add](sortedtree.md#add)
- [clear](sortedtree.md#clear)
- [comparator](sortedtree.md#comparator)
- [contains](sortedtree.md#contains)
- [delete](sortedtree.md#delete)
- [max](sortedtree.md#max)
- [min](sortedtree.md#min)
- [pop](sortedtree.md#pop)
- [shift](sortedtree.md#shift)
- [sorted](sortedtree.md#sorted)
- [update](sortedtree.md#update)

## Properties

### size

• `Readonly` **size**: *number*

The number of elements in the tree.

Inherited from: [Tree](tree.md).[size](tree.md#size)

Defined in: [src/tree/tree.ts:60](https://github.com/havelessbemore/dastal/blob/8c69c82/src/tree/tree.ts#L60)

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator*<T, any, undefined\>

**Returns:** *Iterator*<T, any, undefined\>

Inherited from: [Tree](tree.md)

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

Inherited from: [Tree](tree.md)

Defined in: [src/tree/tree.ts:36](https://github.com/havelessbemore/dastal/blob/8c69c82/src/tree/tree.ts#L36)

___

### clear

▸ **clear**(): *void*

Remove all elements.

**Returns:** *void*

Inherited from: [Tree](tree.md)

Defined in: [src/tree/tree.ts:40](https://github.com/havelessbemore/dastal/blob/8c69c82/src/tree/tree.ts#L40)

___

### comparator

▸ **comparator**(): [*CompareFn*](../README.md#comparefn)<T\>

**Returns:** [*CompareFn*](../README.md#comparefn)<T\>

The function with which elements are sorted

Inherited from: [Sorted](sorted.md)

Defined in: [src/index.ts:47](https://github.com/havelessbemore/dastal/blob/8c69c82/src/index.ts#L47)

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

Inherited from: [Tree](tree.md)

Defined in: [src/tree/tree.ts:48](https://github.com/havelessbemore/dastal/blob/8c69c82/src/tree/tree.ts#L48)

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

Inherited from: [Tree](tree.md)

Defined in: [src/tree/tree.ts:56](https://github.com/havelessbemore/dastal/blob/8c69c82/src/tree/tree.ts#L56)

___

### max

▸ **max**(): *undefined* \| T

Get the maximum element.

**Returns:** *undefined* \| T

Defined in: [src/tree/sortedTree.ts:11](https://github.com/havelessbemore/dastal/blob/8c69c82/src/tree/sortedTree.ts#L11)

___

### min

▸ **min**(): *undefined* \| T

Get the minimum element.

**Returns:** *undefined* \| T

Defined in: [src/tree/sortedTree.ts:15](https://github.com/havelessbemore/dastal/blob/8c69c82/src/tree/sortedTree.ts#L15)

___

### pop

▸ **pop**(): *undefined* \| T

Remove the maximum element.

**Returns:** *undefined* \| T

Defined in: [src/tree/sortedTree.ts:19](https://github.com/havelessbemore/dastal/blob/8c69c82/src/tree/sortedTree.ts#L19)

___

### shift

▸ **shift**(): *undefined* \| T

Remove the minimum element.

**Returns:** *undefined* \| T

Defined in: [src/tree/sortedTree.ts:23](https://github.com/havelessbemore/dastal/blob/8c69c82/src/tree/sortedTree.ts#L23)

___

### sorted

▸ **sorted**(): *Iterable*<T\>

Iterate through the tree in sorted order (i.e in-order traversal).

**Note:** Unexpected behavior can occur if the collection is modified during iteration.

**Returns:** *Iterable*<T\>

Defined in: [src/tree/sortedTree.ts:29](https://github.com/havelessbemore/dastal/blob/8c69c82/src/tree/sortedTree.ts#L29)

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

Inherited from: [Tree](tree.md)

Defined in: [src/tree/tree.ts:69](https://github.com/havelessbemore/dastal/blob/8c69c82/src/tree/tree.ts#L69)
