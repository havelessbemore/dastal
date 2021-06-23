[dastal - v5.0.0](../README.md) / NumberUtils

# Namespace: NumberUtils

## Table of contents

### Functions

- [clamp](numberutils.md#clamp)
- [wrap](numberutils.md#wrap)
- [wrapLeft](numberutils.md#wrapleft)
- [wrapRight](numberutils.md#wrapright)

## Functions

### clamp

▸ **clamp**(`num`, `min`, `max`): `number`

Limits a number to be within a given range.

f(x, min, max) = y, where min <= y <= max

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `num` | `number` | The number to clamp |
| `min` | `number` | The minimum result value, inclusive |
| `max` | `number` | The maximum result value, inclusive |

#### Returns

`number`

The clamped number

#### Defined in

[src/math/numberUtils.ts:12](https://github.com/havelessbemore/dastal/blob/c3e4f71/src/math/numberUtils.ts#L12)

___

### wrap

▸ **wrap**(`num`, `min`, `max`): `number`

Wraps a number if outside a given range

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `num` | `number` | The number to wrap |
| `min` | `number` | The minimum result value, inclusive |
| `max` | `number` | The maximum result value, inclusive |

#### Returns

`number`

- The wrapped number

#### Defined in

[src/math/numberUtils.ts:58](https://github.com/havelessbemore/dastal/blob/c3e4f71/src/math/numberUtils.ts#L58)

___

### wrapLeft

▸ **wrapLeft**(`num`, `min`, `max`): `number`

Wraps a number if below a given range

f(x, min, max) = {
   x, where x >= min
   max - (min - x), where x < min
}

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `num` | `number` | The number to wrap |
| `min` | `number` | The minimum result value, inclusive |
| `max` | `number` | The maximum result value, inclusive |

#### Returns

`number`

- The wrapped number

#### Defined in

[src/math/numberUtils.ts:29](https://github.com/havelessbemore/dastal/blob/c3e4f71/src/math/numberUtils.ts#L29)

___

### wrapRight

▸ **wrapRight**(`num`, `min`, `max`): `number`

Wraps a number if above a given range

f(x, min, max) = {
   x, where x <= max
   min + (x - max), where x > max
}

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `num` | `number` | The number to wrap |
| `min` | `number` | The minimum result value, inclusive |
| `max` | `number` | The maximum result value, inclusive |

#### Returns

`number`

- The wrapped number

#### Defined in

[src/math/numberUtils.ts:46](https://github.com/havelessbemore/dastal/blob/c3e4f71/src/math/numberUtils.ts#L46)
