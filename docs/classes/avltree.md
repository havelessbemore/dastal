[dastal - v5.0.0](../README.md) / AVLTree

# Class: AVLTree<T\>

An AVL tree is a self-balancing binary search tree ([source](https://en.wikipedia.org/wiki/AVL_tree)).

It is named after inventors Georgy Adelson-Velsky and Evgenii Landis and was the first such
data structure to be invented. In an AVL tree, the heights of the two child
subtrees of any node differ by at most one; if at any time they differ by more
than one, rebalancing is done to restore this property.

Lookup, insertion, and deletion all take O(log(n)) time in both the average and worst cases,
where n is the number of nodes in the tree prior to the operation. Insertions and deletions
may require the tree to be rebalanced by one or more tree rotations.

AVL trees are often compared with red–black trees as both take O(log(n))
time for the basic operations. For lookup-intensive applications, AVL trees are
faster than red–black trees because they are more strictly balanced.
Similar to red–black trees, AVL trees are height-balanced.

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- [SortedTree](../interfaces/sortedtree.md)<T\>

## Table of contents

### Constructors

- [constructor](avltree.md#constructor)

### Accessors

- [size](avltree.md#size)

### Methods

- [[iterator]](avltree.md#[iterator])
- [add](avltree.md#add)
- [clear](avltree.md#clear)
- [comparator](avltree.md#comparator)
- [delete](avltree.md#delete)
- [has](avltree.md#has)
- [max](avltree.md#max)
- [min](avltree.md#min)
- [pop](avltree.md#pop)
- [shift](avltree.md#shift)
- [sorted](avltree.md#sorted)
- [update](avltree.md#update)

## Constructors

### constructor

• **new AVLTree**<T\>(`compareFn`, `elements?`)

Instantiate a tree.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `compareFn` | [CompareFn](../README.md#comparefn)<T\> | The function to determine the order of elements. |
| `elements?` | `Iterable`<T\> | A set of elements to initialize the tree with. |

#### Defined in

[src/tree/avlTree.ts:56](https://github.com/havelessbemore/dastal/blob/eccb3d4/src/tree/avlTree.ts#L56)

• **new AVLTree**<T\>(`compareFn`, `allowDuplicates`, `elements?`)

Instantiate a tree.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `compareFn` | [CompareFn](../README.md#comparefn)<T\> | The function to determine the order of elements. |
| `allowDuplicates` | `boolean` | Whether to allow duplicates |
| `elements?` | `Iterable`<T\> | A set of elements to initialize the tree with. |

#### Defined in

[src/tree/avlTree.ts:63](https://github.com/havelessbemore/dastal/blob/eccb3d4/src/tree/avlTree.ts#L63)

## Accessors

### size

• `get` **size**(): `number`

The number of elements in the collection.

#### Returns

`number`

#### Implementation of

[SortedTree](../interfaces/sortedtree.md).[size](../interfaces/sortedtree.md#size)

#### Defined in

[src/tree/avlTree.ts:180](https://github.com/havelessbemore/dastal/blob/eccb3d4/src/tree/avlTree.ts#L180)

## Methods

### [iterator]

▸ **[iterator]**(): `Iterator`<T, any, undefined\>

Receive an iterator through the list.

**Note:** Unexpected behavior can occur if the collection is modified during iteration.

#### Returns

`Iterator`<T, any, undefined\>

An iterator through the list

#### Implementation of

[SortedTree](../interfaces/sortedtree.md).[[iterator]](../interfaces/sortedtree.md#[iterator])

#### Defined in

[src/tree/avlTree.ts:196](https://github.com/havelessbemore/dastal/blob/eccb3d4/src/tree/avlTree.ts#L196)

___

### add

▸ **add**(`element`): [AVLTree](avltree.md)<T\>

Inserts an element into the tree.

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `T` |

#### Returns

[AVLTree](avltree.md)<T\>

#### Implementation of

[SortedTree](../interfaces/sortedtree.md).[add](../interfaces/sortedtree.md#add)

#### Defined in

[src/tree/avlTree.ts:88](https://github.com/havelessbemore/dastal/blob/eccb3d4/src/tree/avlTree.ts#L88)

___

### clear

▸ **clear**(): `void`

Removes all elements.

#### Returns

`void`

#### Implementation of

[SortedTree](../interfaces/sortedtree.md).[clear](../interfaces/sortedtree.md#clear)

#### Defined in

[src/tree/avlTree.ts:120](https://github.com/havelessbemore/dastal/blob/eccb3d4/src/tree/avlTree.ts#L120)

___

### comparator

▸ **comparator**(): [CompareFn](../README.md#comparefn)<T\>

#### Returns

[CompareFn](../README.md#comparefn)<T\>

#### Implementation of

[SortedTree](../interfaces/sortedtree.md).[comparator](../interfaces/sortedtree.md#comparator)

#### Defined in

[src/tree/avlTree.ts:125](https://github.com/havelessbemore/dastal/blob/eccb3d4/src/tree/avlTree.ts#L125)

___

### delete

▸ **delete**(`element`): `boolean`

Delete an element from the tree.

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `T` |

#### Returns

`boolean`

#### Implementation of

[SortedTree](../interfaces/sortedtree.md).[delete](../interfaces/sortedtree.md#delete)

#### Defined in

[src/tree/avlTree.ts:129](https://github.com/havelessbemore/dastal/blob/eccb3d4/src/tree/avlTree.ts#L129)

___

### has

▸ **has**(`element`): `boolean`

Check if an element is in the tree.

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `T` |

#### Returns

`boolean`

#### Implementation of

[SortedTree](../interfaces/sortedtree.md).[has](../interfaces/sortedtree.md#has)

#### Defined in

[src/tree/avlTree.ts:140](https://github.com/havelessbemore/dastal/blob/eccb3d4/src/tree/avlTree.ts#L140)

___

### max

▸ **max**(): `undefined` \| `T`

Get the maximum element.

#### Returns

`undefined` \| `T`

#### Implementation of

[SortedTree](../interfaces/sortedtree.md).[max](../interfaces/sortedtree.md#max)

#### Defined in

[src/tree/avlTree.ts:144](https://github.com/havelessbemore/dastal/blob/eccb3d4/src/tree/avlTree.ts#L144)

___

### min

▸ **min**(): `undefined` \| `T`

Get the minimum element.

#### Returns

`undefined` \| `T`

#### Implementation of

[SortedTree](../interfaces/sortedtree.md).[min](../interfaces/sortedtree.md#min)

#### Defined in

[src/tree/avlTree.ts:148](https://github.com/havelessbemore/dastal/blob/eccb3d4/src/tree/avlTree.ts#L148)

___

### pop

▸ **pop**(): `undefined` \| `T`

Remove the maximum element.

#### Returns

`undefined` \| `T`

#### Implementation of

[SortedTree](../interfaces/sortedtree.md).[pop](../interfaces/sortedtree.md#pop)

#### Defined in

[src/tree/avlTree.ts:152](https://github.com/havelessbemore/dastal/blob/eccb3d4/src/tree/avlTree.ts#L152)

___

### shift

▸ **shift**(): `undefined` \| `T`

Remove the minimum element.

#### Returns

`undefined` \| `T`

#### Implementation of

[SortedTree](../interfaces/sortedtree.md).[shift](../interfaces/sortedtree.md#shift)

#### Defined in

[src/tree/avlTree.ts:166](https://github.com/havelessbemore/dastal/blob/eccb3d4/src/tree/avlTree.ts#L166)

___

### sorted

▸ **sorted**(): `Iterable`<T\>

Iterate through the tree in sorted order (i.e in-order traversal).

**Note:** Unexpected behavior can occur if the collection is modified during iteration.

#### Returns

`Iterable`<T\>

#### Implementation of

[SortedTree](../interfaces/sortedtree.md).[sorted](../interfaces/sortedtree.md#sorted)

#### Defined in

[src/tree/avlTree.ts:184](https://github.com/havelessbemore/dastal/blob/eccb3d4/src/tree/avlTree.ts#L184)

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

[SortedTree](../interfaces/sortedtree.md).[update](../interfaces/sortedtree.md#update)

#### Defined in

[src/tree/avlTree.ts:202](https://github.com/havelessbemore/dastal/blob/eccb3d4/src/tree/avlTree.ts#L202)
