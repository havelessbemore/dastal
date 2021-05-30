[dastal - v2.1.0](../README.md) / AVLTree

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

- [*SortedTree*](../interfaces/sortedtree.md)<T\>

## Table of contents

### Constructors

- [constructor](avltree.md#constructor)

### Accessors

- [size](avltree.md#size)

### Methods

- [[Symbol.iterator]](avltree.md#[symbol.iterator])
- [add](avltree.md#add)
- [clear](avltree.md#clear)
- [comparator](avltree.md#comparator)
- [contains](avltree.md#contains)
- [delete](avltree.md#delete)
- [max](avltree.md#max)
- [min](avltree.md#min)
- [pop](avltree.md#pop)
- [shift](avltree.md#shift)
- [sorted](avltree.md#sorted)
- [update](avltree.md#update)

## Constructors

### constructor

\+ **new AVLTree**<T\>(`compareFn`: [*CompareFn*](../README.md#comparefn)<T\>, `elements?`: *Iterable*<T\>): [*AVLTree*](avltree.md)<T\>

Instantiate a tree.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `compareFn` | [*CompareFn*](../README.md#comparefn)<T\> | The function to determine the order of elements. |
| `elements?` | *Iterable*<T\> | A set of elements to initialize the tree with. |

**Returns:** [*AVLTree*](avltree.md)<T\>

Defined in: [src/tree/avlTree.ts:55](https://github.com/havelessbemore/dastal/blob/99eb870/src/tree/avlTree.ts#L55)

\+ **new AVLTree**<T\>(`compareFn`: [*CompareFn*](../README.md#comparefn)<T\>, `allowDuplicates`: *boolean*, `elements?`: *Iterable*<T\>): [*AVLTree*](avltree.md)<T\>

Instantiate a tree.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `compareFn` | [*CompareFn*](../README.md#comparefn)<T\> | The function to determine the order of elements. |
| `allowDuplicates` | *boolean* | Whether to allow duplicates |
| `elements?` | *Iterable*<T\> | A set of elements to initialize the tree with. |

**Returns:** [*AVLTree*](avltree.md)<T\>

Defined in: [src/tree/avlTree.ts:62](https://github.com/havelessbemore/dastal/blob/99eb870/src/tree/avlTree.ts#L62)

## Accessors

### size

• get **size**(): *number*

The number of elements in the tree.

**Returns:** *number*

Implementation of: [SortedTree](../interfaces/sortedtree.md).[size](../interfaces/sortedtree.md#size)

Defined in: [src/tree/avlTree.ts:177](https://github.com/havelessbemore/dastal/blob/99eb870/src/tree/avlTree.ts#L177)

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator*<T, any, undefined\>

Receive an iterator through the list.

**Note:** Unexpected behavior can occur if the collection is modified during iteration.

**Returns:** *Iterator*<T, any, undefined\>

An iterator through the list

Implementation of: [SortedTree](../interfaces/sortedtree.md)

Defined in: [src/tree/avlTree.ts:193](https://github.com/havelessbemore/dastal/blob/99eb870/src/tree/avlTree.ts#L193)

___

### add

▸ **add**(`element`: T): *number*

Inserts an element into the tree.

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | T |

**Returns:** *number*

Implementation of: [SortedTree](../interfaces/sortedtree.md)

Defined in: [src/tree/avlTree.ts:87](https://github.com/havelessbemore/dastal/blob/99eb870/src/tree/avlTree.ts#L87)

___

### clear

▸ **clear**(): *void*

Remove all elements.

**Returns:** *void*

Implementation of: [SortedTree](../interfaces/sortedtree.md)

Defined in: [src/tree/avlTree.ts:117](https://github.com/havelessbemore/dastal/blob/99eb870/src/tree/avlTree.ts#L117)

___

### comparator

▸ **comparator**(): [*CompareFn*](../README.md#comparefn)<T\>

**Returns:** [*CompareFn*](../README.md#comparefn)<T\>

Implementation of: [SortedTree](../interfaces/sortedtree.md)

Defined in: [src/tree/avlTree.ts:122](https://github.com/havelessbemore/dastal/blob/99eb870/src/tree/avlTree.ts#L122)

___

### contains

▸ **contains**(`element`: T): *boolean*

Check if an element is in the tree.

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | T |

**Returns:** *boolean*

Implementation of: [SortedTree](../interfaces/sortedtree.md)

Defined in: [src/tree/avlTree.ts:126](https://github.com/havelessbemore/dastal/blob/99eb870/src/tree/avlTree.ts#L126)

___

### delete

▸ **delete**(`element`: T): *boolean*

Delete an element from the tree.

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | T |

**Returns:** *boolean*

Implementation of: [SortedTree](../interfaces/sortedtree.md)

Defined in: [src/tree/avlTree.ts:130](https://github.com/havelessbemore/dastal/blob/99eb870/src/tree/avlTree.ts#L130)

___

### max

▸ **max**(): *undefined* \| T

Get the maximum element.

**Returns:** *undefined* \| T

Implementation of: [SortedTree](../interfaces/sortedtree.md)

Defined in: [src/tree/avlTree.ts:141](https://github.com/havelessbemore/dastal/blob/99eb870/src/tree/avlTree.ts#L141)

___

### min

▸ **min**(): *undefined* \| T

Get the minimum element.

**Returns:** *undefined* \| T

Implementation of: [SortedTree](../interfaces/sortedtree.md)

Defined in: [src/tree/avlTree.ts:145](https://github.com/havelessbemore/dastal/blob/99eb870/src/tree/avlTree.ts#L145)

___

### pop

▸ **pop**(): *undefined* \| T

Remove the maximum element.

**Returns:** *undefined* \| T

Implementation of: [SortedTree](../interfaces/sortedtree.md)

Defined in: [src/tree/avlTree.ts:149](https://github.com/havelessbemore/dastal/blob/99eb870/src/tree/avlTree.ts#L149)

___

### shift

▸ **shift**(): *undefined* \| T

Remove the minimum element.

**Returns:** *undefined* \| T

Implementation of: [SortedTree](../interfaces/sortedtree.md)

Defined in: [src/tree/avlTree.ts:163](https://github.com/havelessbemore/dastal/blob/99eb870/src/tree/avlTree.ts#L163)

___

### sorted

▸ **sorted**(): *Iterable*<T\>

Iterate through the tree in sorted order (i.e in-order traversal).

**Note:** Unexpected behavior can occur if the collection is modified during iteration.

**Returns:** *Iterable*<T\>

Implementation of: [SortedTree](../interfaces/sortedtree.md)

Defined in: [src/tree/avlTree.ts:181](https://github.com/havelessbemore/dastal/blob/99eb870/src/tree/avlTree.ts#L181)

___

### update

▸ **update**(`curElement`: T, `newElement`: T): *boolean*

Update a specific element.

#### Parameters

| Name | Type |
| :------ | :------ |
| `curElement` | T |
| `newElement` | T |

**Returns:** *boolean*

Implementation of: [SortedTree](../interfaces/sortedtree.md)

Defined in: [src/tree/avlTree.ts:199](https://github.com/havelessbemore/dastal/blob/99eb870/src/tree/avlTree.ts#L199)
