[dastal - v4.1.1](../README.md) / IteratorUtils

# Namespace: IteratorUtils

## Table of contents

### Functions

- [always](iteratorutils.md#always)
- [fill](iteratorutils.md#fill)
- [first](iteratorutils.md#first)
- [join](iteratorutils.md#join)
- [never](iteratorutils.md#never)
- [once](iteratorutils.md#once)
- [skip](iteratorutils.md#skip)
- [split](iteratorutils.md#split)

## Functions

### always

▸ **always**<T\>(`fn`): `Iterator`<T\>

Get an iterator that always returns a given value.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` = `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | () => `T` |

#### Returns

`Iterator`<T\>

#### Defined in

[src/collection/iteratorUtils.ts:4](https://github.com/havelessbemore/dastal/blob/351eddf/src/collection/iteratorUtils.ts#L4)

___

### fill

▸ **fill**<T\>(`length`, `fn`): `Iterator`<T\>

Get an iterator that returns a value a given amount of times.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` = `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `length` | `number` |
| `fn` | () => `T` |

#### Returns

`Iterator`<T\>

#### Defined in

[src/collection/iteratorUtils.ts:10](https://github.com/havelessbemore/dastal/blob/351eddf/src/collection/iteratorUtils.ts#L10)

___

### first

▸ **first**<T\>(`n`, `iterator`): `Iterator`<T\>

Iterate through the first num elements of an iterator.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` = `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | `number` | The number of elements to iterate. |
| `iterator` | `Iterator`<T\> | The iterator. |

#### Returns

`Iterator`<T\>

- An iterator limited to the next n elements.

#### Defined in

[src/collection/iteratorUtils.ts:29](https://github.com/havelessbemore/dastal/blob/351eddf/src/collection/iteratorUtils.ts#L29)

___

### join

▸ **join**<T\>(`iterators`): `Iterator`<T\>

Join multiple iterators into one.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` = `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iterators` | `Iterator`<Iterator<T\>\> | The iterators to join. |

#### Returns

`Iterator`<T\>

#### Defined in

[src/collection/iteratorUtils.ts:46](https://github.com/havelessbemore/dastal/blob/351eddf/src/collection/iteratorUtils.ts#L46)

___

### never

▸ **never**<T\>(): `Iterator`<T\>

Get an empty iterator.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` = `any` |

#### Returns

`Iterator`<T\>

#### Defined in

[src/collection/iteratorUtils.ts:70](https://github.com/havelessbemore/dastal/blob/351eddf/src/collection/iteratorUtils.ts#L70)

___

### once

▸ **once**<T\>(`fn`): `Iterator`<T\>

Wrap a value in an iterator.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` = `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | () => `T` |

#### Returns

`Iterator`<T\>

#### Defined in

[src/collection/iteratorUtils.ts:76](https://github.com/havelessbemore/dastal/blob/351eddf/src/collection/iteratorUtils.ts#L76)

___

### skip

▸ **skip**<T\>(`n`, `iterator`): `Iterator`<T\>

Skip the next num elements of an iterator.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` = `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | `number` | The number of elements to skip. |
| `iterator` | `Iterator`<T\> | The iterator. |

#### Returns

`Iterator`<T\>

- The iterator after skipping n elements.

#### Defined in

[src/collection/iteratorUtils.ts:95](https://github.com/havelessbemore/dastal/blob/351eddf/src/collection/iteratorUtils.ts#L95)

___

### split

▸ **split**<T\>(`length`, `iterator`): `Iterator`<Iterator<T\>\>

Split an iterator into multiple iterators of a given length.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` = `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `length` | `number` | The length of each iterator. |
| `iterator` | `Iterator`<T\> | The iterator to split. |

#### Returns

`Iterator`<Iterator<T\>\>

- An iterator of the resulting iterators.

#### Defined in

[src/collection/iteratorUtils.ts:114](https://github.com/havelessbemore/dastal/blob/351eddf/src/collection/iteratorUtils.ts#L114)
