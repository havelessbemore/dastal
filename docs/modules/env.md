[dastal - v5.0.0](../README.md) / env

# Namespace: env

## Table of contents

### Variables

- [MAX\_ARRAY\_LENGTH](env.md#max_array_length)

### Functions

- [maxArgumentsLength](env.md#maxargumentslength)

## Variables

### MAX\_ARRAY\_LENGTH

• `Const` **MAX\_ARRAY\_LENGTH**: `number`

The maximum length of an array.

At the time of implementation, the [ECMA-262](https://tc39.es/ecma262/#array-index)
defines the maximum as: `0 <= array.length <= 2**32 - 1`

The actual maximum may change over time and/or unique environments.
For that reason, the value is calculated on first import.

#### Defined in

[src/env/index.ts:41](https://github.com/havelessbemore/dastal/blob/7d85137/src/env/index.ts#L41)

## Functions

### maxArgumentsLength

▸ `Const` **maxArgumentsLength**(): `number`

Get the maximum number of arguments allowed for a function.

According to the [ECMA-262](https://tc39.es/ecma262/#sec-list-and-record-specification-type),
there is no maximum. In practice, different environments impose their own
limit. Some limits (like in Google Chrome v91.0.4472.114) are dynamic and
depend on available stack memory (among other factors). Other limits (like in Firefox v89.0.1
and Safari v14.1.1) appear to be static (500,000 and 65,536, respectively).

In environments where the maximum is dynamic:

- The output should be used as soon as possible and in its original context.
It should not be stored for future use. If context changes, such as stack usage,
the output should be recalculated.

- Using the output directly as the number of arguments to a function
may still throw an error. A [factor of safety](https://en.wikipedia.org/wiki/Factor_of_safety)
should be used to adjust the output, such as multiplying it by a margin of safety.
For example: `0.625*output`.

#### Returns

`number`

#### Defined in

[src/env/index.ts:30](https://github.com/havelessbemore/dastal/blob/7d85137/src/env/index.ts#L30)
