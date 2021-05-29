[dastal - v2.0.1](../README.md) / AATree

# Class: AATree<T\>

An AA tree is a form of balanced tree used for storing and retrieving ordered data efficiently
([source](https://en.wikipedia.org/wiki/AA_tree)).

AA trees are named for Arne Andersson, their inventor. They are a variation of the red–black tree,
which supports efficient addition and deletion of entries. Unlike red–black trees, additional
constraints on the balancing mechanism greatly simplifies the implementation as well as
maintenance operations; While a red–black tree needs to consider seven different shapes
to properly balance the tree, an AA tree only needs to consider two shapes.

The performance of an AA tree is equivalent to the performance of a red–black tree.
While an AA tree makes more rotations than a red-black tree, the simpler algorithms
tend to be faster, which balances out to similar performance. A red-black tree is
more consistent in its performance, but an AA tree tends to be flatter, which results
in slightly faster search times.

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- [*SortedTree*](../interfaces/sortedtree.md)<T\>

## Table of contents

### Constructors

- [constructor](aatree.md#constructor)

### Accessors

- [size](aatree.md#size)

### Methods

- [[Symbol.iterator]](aatree.md#[symbol.iterator])
- [add](aatree.md#add)
- [clear](aatree.md#clear)
- [comparator](aatree.md#comparator)
- [contains](aatree.md#contains)
- [delete](aatree.md#delete)
- [max](aatree.md#max)
- [min](aatree.md#min)
- [pop](aatree.md#pop)
- [shift](aatree.md#shift)
- [sorted](aatree.md#sorted)
- [update](aatree.md#update)

## Constructors

### constructor

\+ **new AATree**<T\>(`compareFn`: [*CompareFn*](../README.md#comparefn)<T\>, `elements?`: *Iterable*<T\>): [*AATree*](aatree.md)<T\>

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

**Returns:** [*AATree*](aatree.md)<T\>

Defined in: [src/tree/aaTree.ts:36](https://github.com/havelessbemore/dastal/blob/c8bb6f5/src/tree/aaTree.ts#L36)

## Accessors

### size

• get **size**(): *number*

The number of elements in the tree.

**Returns:** *number*

Implementation of: [SortedTree](../interfaces/sortedtree.md).[size](../interfaces/sortedtree.md#size)

Defined in: [src/tree/aaTree.ts:121](https://github.com/havelessbemore/dastal/blob/c8bb6f5/src/tree/aaTree.ts#L121)

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator*<T, any, undefined\>

Receive an iterator through the list.

**Note:** Unexpected behavior can occur if the collection is modified during iteration.

**Returns:** *Iterator*<T, any, undefined\>

An iterator through the list

Implementation of: [SortedTree](../interfaces/sortedtree.md)

Defined in: [src/tree/aaTree.ts:137](https://github.com/havelessbemore/dastal/blob/c8bb6f5/src/tree/aaTree.ts#L137)

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

Defined in: [src/tree/aaTree.ts:49](https://github.com/havelessbemore/dastal/blob/c8bb6f5/src/tree/aaTree.ts#L49)

___

### clear

▸ **clear**(): *void*

Remove all elements.

**Returns:** *void*

Implementation of: [SortedTree](../interfaces/sortedtree.md)

Defined in: [src/tree/aaTree.ts:54](https://github.com/havelessbemore/dastal/blob/c8bb6f5/src/tree/aaTree.ts#L54)

___

### comparator

▸ **comparator**(): [*CompareFn*](../README.md#comparefn)<T\>

**Returns:** [*CompareFn*](../README.md#comparefn)<T\>

Implementation of: [SortedTree](../interfaces/sortedtree.md)

Defined in: [src/tree/aaTree.ts:59](https://github.com/havelessbemore/dastal/blob/c8bb6f5/src/tree/aaTree.ts#L59)

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

Defined in: [src/tree/aaTree.ts:63](https://github.com/havelessbemore/dastal/blob/c8bb6f5/src/tree/aaTree.ts#L63)

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

Defined in: [src/tree/aaTree.ts:74](https://github.com/havelessbemore/dastal/blob/c8bb6f5/src/tree/aaTree.ts#L74)

___

### max

▸ **max**(): *undefined* \| T

Get the maximum element.

**Returns:** *undefined* \| T

Implementation of: [SortedTree](../interfaces/sortedtree.md)

Defined in: [src/tree/aaTree.ts:81](https://github.com/havelessbemore/dastal/blob/c8bb6f5/src/tree/aaTree.ts#L81)

___

### min

▸ **min**(): *undefined* \| T

Get the minimum element.

**Returns:** *undefined* \| T

Implementation of: [SortedTree](../interfaces/sortedtree.md)

Defined in: [src/tree/aaTree.ts:92](https://github.com/havelessbemore/dastal/blob/c8bb6f5/src/tree/aaTree.ts#L92)

___

### pop

▸ **pop**(): *undefined* \| T

Remove the maximum element.

**Returns:** *undefined* \| T

Implementation of: [SortedTree](../interfaces/sortedtree.md)

Defined in: [src/tree/aaTree.ts:103](https://github.com/havelessbemore/dastal/blob/c8bb6f5/src/tree/aaTree.ts#L103)

___

### shift

▸ **shift**(): *undefined* \| T

Remove the minimum element.

**Returns:** *undefined* \| T

Implementation of: [SortedTree](../interfaces/sortedtree.md)

Defined in: [src/tree/aaTree.ts:112](https://github.com/havelessbemore/dastal/blob/c8bb6f5/src/tree/aaTree.ts#L112)

___

### sorted

▸ **sorted**(): *Iterable*<T\>

Iterate through the tree in sorted order (i.e in-order traversal).

**Note:** Unexpected behavior can occur if the collection is modified during iteration.

**Returns:** *Iterable*<T\>

Implementation of: [SortedTree](../interfaces/sortedtree.md)

Defined in: [src/tree/aaTree.ts:125](https://github.com/havelessbemore/dastal/blob/c8bb6f5/src/tree/aaTree.ts#L125)

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

Defined in: [src/tree/aaTree.ts:143](https://github.com/havelessbemore/dastal/blob/c8bb6f5/src/tree/aaTree.ts#L143)
