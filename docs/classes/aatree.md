[dastal - v3.0.0](../README.md) / AATree

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

- [SortedTree](../interfaces/sortedtree.md)<T\>

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
- [delete](aatree.md#delete)
- [has](aatree.md#has)
- [max](aatree.md#max)
- [min](aatree.md#min)
- [pop](aatree.md#pop)
- [shift](aatree.md#shift)
- [sorted](aatree.md#sorted)
- [update](aatree.md#update)

## Constructors

### constructor

• **new AATree**<T\>(`compareFn`, `elements?`)

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

[src/tree/aaTree.ts:56](https://github.com/havelessbemore/dastal/blob/e94627b/src/tree/aaTree.ts#L56)

• **new AATree**<T\>(`compareFn`, `allowDuplicates`, `elements?`)

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

[src/tree/aaTree.ts:63](https://github.com/havelessbemore/dastal/blob/e94627b/src/tree/aaTree.ts#L63)

## Accessors

### size

• `get` **size**(): `number`

The number of elements in the collection.

#### Returns

`number`

#### Implementation of

[SortedTree](../interfaces/sortedtree.md).[size](../interfaces/sortedtree.md#size)

#### Defined in

[src/tree/aaTree.ts:183](https://github.com/havelessbemore/dastal/blob/e94627b/src/tree/aaTree.ts#L183)

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): `Iterator`<T, any, undefined\>

Receive an iterator through the list.

**Note:** Unexpected behavior can occur if the collection is modified during iteration.

#### Returns

`Iterator`<T, any, undefined\>

An iterator through the list

#### Implementation of

[SortedTree](../interfaces/sortedtree.md).[[Symbol.iterator]](../interfaces/sortedtree.md#[symbol.iterator])

#### Defined in

[src/tree/aaTree.ts:199](https://github.com/havelessbemore/dastal/blob/e94627b/src/tree/aaTree.ts#L199)

___

### add

▸ **add**(`element`): [AATree](aatree.md)<T\>

Inserts an element into the tree.

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `T` |

#### Returns

[AATree](aatree.md)<T\>

#### Implementation of

[SortedTree](../interfaces/sortedtree.md).[add](../interfaces/sortedtree.md#add)

#### Defined in

[src/tree/aaTree.ts:87](https://github.com/havelessbemore/dastal/blob/e94627b/src/tree/aaTree.ts#L87)

___

### clear

▸ **clear**(): `void`

Removes all elements.

#### Returns

`void`

#### Implementation of

[SortedTree](../interfaces/sortedtree.md).[clear](../interfaces/sortedtree.md#clear)

#### Defined in

[src/tree/aaTree.ts:117](https://github.com/havelessbemore/dastal/blob/e94627b/src/tree/aaTree.ts#L117)

___

### comparator

▸ **comparator**(): [CompareFn](../README.md#comparefn)<T\>

#### Returns

[CompareFn](../README.md#comparefn)<T\>

#### Implementation of

[SortedTree](../interfaces/sortedtree.md).[comparator](../interfaces/sortedtree.md#comparator)

#### Defined in

[src/tree/aaTree.ts:122](https://github.com/havelessbemore/dastal/blob/e94627b/src/tree/aaTree.ts#L122)

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

[src/tree/aaTree.ts:126](https://github.com/havelessbemore/dastal/blob/e94627b/src/tree/aaTree.ts#L126)

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

[src/tree/aaTree.ts:139](https://github.com/havelessbemore/dastal/blob/e94627b/src/tree/aaTree.ts#L139)

___

### max

▸ **max**(): `undefined` \| `T`

Get the maximum element.

#### Returns

`undefined` \| `T`

#### Implementation of

[SortedTree](../interfaces/sortedtree.md).[max](../interfaces/sortedtree.md#max)

#### Defined in

[src/tree/aaTree.ts:143](https://github.com/havelessbemore/dastal/blob/e94627b/src/tree/aaTree.ts#L143)

___

### min

▸ **min**(): `undefined` \| `T`

Get the minimum element.

#### Returns

`undefined` \| `T`

#### Implementation of

[SortedTree](../interfaces/sortedtree.md).[min](../interfaces/sortedtree.md#min)

#### Defined in

[src/tree/aaTree.ts:147](https://github.com/havelessbemore/dastal/blob/e94627b/src/tree/aaTree.ts#L147)

___

### pop

▸ **pop**(): `undefined` \| `T`

Remove the maximum element.

#### Returns

`undefined` \| `T`

#### Implementation of

[SortedTree](../interfaces/sortedtree.md).[pop](../interfaces/sortedtree.md#pop)

#### Defined in

[src/tree/aaTree.ts:151](https://github.com/havelessbemore/dastal/blob/e94627b/src/tree/aaTree.ts#L151)

___

### shift

▸ **shift**(): `undefined` \| `T`

Remove the minimum element.

#### Returns

`undefined` \| `T`

#### Implementation of

[SortedTree](../interfaces/sortedtree.md).[shift](../interfaces/sortedtree.md#shift)

#### Defined in

[src/tree/aaTree.ts:167](https://github.com/havelessbemore/dastal/blob/e94627b/src/tree/aaTree.ts#L167)

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

[src/tree/aaTree.ts:187](https://github.com/havelessbemore/dastal/blob/e94627b/src/tree/aaTree.ts#L187)

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

[src/tree/aaTree.ts:205](https://github.com/havelessbemore/dastal/blob/e94627b/src/tree/aaTree.ts#L205)
