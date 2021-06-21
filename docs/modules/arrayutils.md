[dastal - v4.1.3](../README.md) / ArrayUtils

# Namespace: ArrayUtils

## Table of contents

### Variables

- [MAX\_ARRAY\_LENGTH](arrayutils.md#max_array_length)
- [MAX\_SAFE\_ARGUMENT\_LENGTH](arrayutils.md#max_safe_argument_length)

### Functions

- [isArray](arrayutils.md#isarray)
- [isTypedArray](arrayutils.md#istypedarray)
- [splice](arrayutils.md#splice)

## Variables

### MAX\_ARRAY\_LENGTH

• `Const` **MAX\_ARRAY\_LENGTH**: ``4294967295``

The maximum length of an array.

According to the [ECMA-262](https://tc39.es/ecma262/#array-index):
    0 <= array.length <= 2^32 - 1

If this value should be updated, please
submit a pull request with details supporting a new max length.

#### Defined in

[src/collection/arrayUtils.ts:13](https://github.com/havelessbemore/dastal/blob/5081892/src/collection/arrayUtils.ts#L13)

___

### MAX\_SAFE\_ARGUMENT\_LENGTH

• `Const` **MAX\_SAFE\_ARGUMENT\_LENGTH**: ``32767``

The maximum number of arguments that can be safely accepted by a function.

According to the [ECMA-262](https://tc39.es/ecma262/#sec-list-and-record-specification-type), there is no maximum. In practice, different
environments impose their own limit ([source](https://stackoverflow.com/questions/22747068/is-there-a-max-number-of-arguments-javascript-functions-can-accept)).

This value was chosen through research, local testing and iteration. The actual number of arguments
accepted in an environment may be larger but hopefully not smaller. If errors are raised,
please submit a bug with your environment details and a new max length.

#### Defined in

[src/collection/arrayUtils.ts:24](https://github.com/havelessbemore/dastal/blob/5081892/src/collection/arrayUtils.ts#L24)

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

[src/collection/arrayUtils.ts:32](https://github.com/havelessbemore/dastal/blob/5081892/src/collection/arrayUtils.ts#L32)

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

[src/collection/arrayUtils.ts:45](https://github.com/havelessbemore/dastal/blob/5081892/src/collection/arrayUtils.ts#L45)

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
| `elements?` | `Iterable`<T\> | The new elements to splice in. |

#### Returns

`T`[]

- An array containing the elements that were deleted.

#### Defined in

[src/collection/arrayUtils.ts:63](https://github.com/havelessbemore/dastal/blob/5081892/src/collection/arrayUtils.ts#L63)
