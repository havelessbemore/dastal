[dastal - v5.0.0](../README.md) / env

# Namespace: env

## Table of contents

### Variables

- [MAX\_ARRAY\_LENGTH](env.md#max_array_length)

### Functions

- [getMaxArgumentsLength](env.md#getmaxargumentslength)

## Variables

### MAX\_ARRAY\_LENGTH

• `Const` **MAX\_ARRAY\_LENGTH**: `number`

#### Defined in

[src/env/index.ts:4](https://github.com/havelessbemore/dastal/blob/eccb3d4/src/env/index.ts#L4)

## Functions

### getMaxArgumentsLength

▸ **getMaxArgumentsLength**(`accuracy?`): `number`

Get the maximum number of arguments that
can be passed to a simple function.

According to the [ECMA-262](https://tc39.es/ecma262/#sec-list-and-record-specification-type),
there is no maximum. In practice, different environments impose their own
limit. The limit closely depends on available stack memory.

**Note 1**: The output depends on the available
stack memory at the time this function is called.
For that reason, any output should be used as soon
as possible and in its original context.

**Note 2**: When `accuracy = 1`, the output has
an error margin of +- 0.85% from the actual maximum.
When `accuracy = 0`, the output has an error margin of -25%.

**Note 3**: Even with a simple function, it may
still cause a stack overflow if `accuracy` is high.
The margin of error should be taken into account
before usage, such as multiplying the output
by <= 1 - error_margin (for example: `0.99*output`).

**Note 4**: The actual maximum depends on the
amount of stack memory to be used by the intended function.
For that reason, the actual maximum may be lower
than this function's output. The output should only be
used as an upper bound / starting point for
an actual maximum.

   - The simplest way to do this
is to decrease the multiple mentioned in note 3 (such as
to 80%). This should work for most usage, as most functions
are relatively flat (little to no nested function calls)
and/or use a reasonable amount of variables.

   - For more accuracy, the intended function can be
profiled to come up with a more exact estimate.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `accuracy` | `number` | 0 | A number from  0 - 1 to determine if calculation prioritizes speed vs accuracy, with 1 being most accurate and 0 being speediest. Be default, speed is preferred. |

#### Returns

`number`

#### Defined in

[src/env/utils.ts:69](https://github.com/havelessbemore/dastal/blob/eccb3d4/src/env/utils.ts#L69)
