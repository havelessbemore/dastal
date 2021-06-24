[dastal - v5.0.0](../README.md) / ArrayUtils

# Namespace: ArrayUtils

## Table of contents

### Functions

- [isArray](arrayutils.md#isarray)
- [isTypedArray](arrayutils.md#istypedarray)
- [splice](arrayutils.md#splice)

## Functions

### isArray

▸ **isArray**<T\>(`obj`): obj is T[]

Check if a value is an Array or TypedArray.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` = `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `unknown` | The value to check. |

#### Returns

obj is T[]

`true` if an Array or TypedArray, otherwise `false`.

#### Defined in

[src/utils/arrayUtils.ts:11](https://github.com/havelessbemore/dastal/blob/02d2e5c/src/utils/arrayUtils.ts#L11)

___

### isTypedArray

▸ `Const` **isTypedArray**<T\>(`obj`): obj is T[]

Check if a value is a TypedArray.

See [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)
for more details.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` = `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `unknown` | The value to check. |

#### Returns

obj is T[]

`true` if a TypedArray, otherwise `false`.

#### Defined in

[src/utils/arrayUtils.ts:24](https://github.com/havelessbemore/dastal/blob/02d2e5c/src/utils/arrayUtils.ts#L24)

___

### splice

▸ **splice**<T\>(`array`, `start?`, `count?`, `elements?`): `T`[]

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

Contrary to Array.splice, this will not throw an error if too many new elements are given as arguments.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `T`[] | The array to splice. |
| `start?` | `number` | The zero-based location in the array from which to start removing elements. |
| `count?` | `number` | The number of elements to remove. |
| `elements?` | `T`[] | The new elements to splice in. |

#### Returns

`T`[]

- An array containing the deleted elements.

#### Defined in

[src/utils/arrayUtils.ts:42](https://github.com/havelessbemore/dastal/blob/02d2e5c/src/utils/arrayUtils.ts#L42)
