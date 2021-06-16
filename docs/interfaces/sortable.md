[dastal - v4.0.0](../README.md) / Sortable

# Interface: Sortable<T\>

Represents an object containing a set of elements that can be sorted.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- **Sortable**

  ↳ [List](list.md)

## Table of contents

### Methods

- [sort](sortable.md#sort)

## Methods

### sort

▸ **sort**(`compareFn`): [Sortable](sortable.md)<T\>

Sorts the elements in place.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `compareFn` | [CompareFn](../README.md#comparefn)<T\> | A function used to determine the order of elements.  It is expected to return: - A negative value if first argument < second argument - Zero if first argument == second argument - A positive value if first argument > second argument |

#### Returns

[Sortable](sortable.md)<T\>

The object this method was called on

#### Defined in

[src/index.ts:50](https://github.com/havelessbemore/dastal/blob/2fe24da/src/index.ts#L50)
