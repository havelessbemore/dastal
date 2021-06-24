/** 
 * 
 *                                                            /'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''/''+
 *                            /'''''''''''''''''''''''''''/''+                            /'''''''''''''''''''''''''''/''+   |
 *            /'''''''''''/''+            /'''''''''''/''+   |            /'''''''''''/''+            /'''''''''''/''+   |   |
 *    /'''/''+    /'''/''+   |    /'''/''+    /'''/''+   |   |    /'''/''+    /'''/''+   |    /'''/''+    /'''/''+   |   |   |
 *   0,  1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32
 * --------------------------------------------------------------------------------------------------------------------------------------
 *   0,  1       2   3           4   5       6   7               8   9      10  11          12  13      14  15                  16  17
 * --------------------------------------------------------------------------------------------------------------------------------------
 *   0   1   0   1   0   1   0   1   0   1   0   1   0   1   0   1   0   1   0   1   0   1   0   1   0   1   0   1   0   1   0   1   0
 *   0   0   1   1   0   0   1   1   0   0   1   1   0   0   1   1   0   0   1   1   0   0   1   1   0   0   1   1   0   0   1   1   0
 *   0   0   0   0   1   1   1   1   0   0   0   0   1   1   1   1   0   0   0   0   1   1   1   1   0   0   0   0   1   1   1   1   0
 *   0   0   0   0   0   0   0   0   1   1   1   1   1   1   1   1   0   0   0   0   0   0   0   0   1   1   1   1   1   1   1   1   0
 *   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   1   1   1   1   1   1   1   1   1   1   1   1   1   1   1   1   0
 *   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   1
 * 
 */

/**
 * An assignment function is when a range of elements
 * is assigned to a given element.
 * > v = f()
 */
export type AssignmentFn<T> = () => T;
/**
 * A cumulative function is when an update on a range of elements
 * is equal to a proportional update on the combination of elements.
 *
 * > g(f(v<sub>1</sub>, 1), f(v<sub>2</sub>, 1) = f(g(v<sub>1</sub>, v<sub>2</sub>), 2)
 *
 * Example:
 * (a + v<sub>1</sub>) + (a + v<sub>2</sub>) = 2\*a + (v<sub>1</sub> + v<sub>2</sub>)
 * (2 + 2) + (2 + 5) = 2*2 + (2 + 5)
 * 11 = 11
 */
export type CumulativeFn<T> = (element: T, min: number, max: number) => T;
/**
 * A distributive function is when an update on a range of elements
 * is equal to the update on the combination of elements.
 *
 * > g(f(v<sub>1</sub>), f(v<sub>2</sub>)) = f(g(v<sub>1</sub>, v<sub>2</sub>))
 *
 * Example:
 * a\*v<sub>1</sub> + a\*v<sub>2</sub> = a\*(v<sub>1</sub> + v<sub>2</sub>)
 * 2\*2 + 2\*5 = 2\*(2 + 5)
 * 14 = 14
 */
export type DistributiveFn<T> = (element: T) => T;
/**
 * An exclusive operation is when an update must be performed
 * on individual elements as it is not equal to an update on the
 * combination of elements.
 *
 * > g(f(v<sub>1</sub>), f(v<sub>2</sub>) != f(g(v<sub>1</sub>, v<sub>2</sub>))
 *
 * Example:
 * v<sub>1</sub>^2 + v<sub>2</sub>^2 != (v<sub>1</sub> + v<sub>2</sub>)^2
 * 2^2 + 5^2 != (2 + 5)^2
 * 29 != 49
 */
export type ExclusiveFn<T> = (element: T, index: number) => T;
/**
 * A union of all operation types
 */
export type Operation<T> =
    | { type: OperationType.Assignment; run: AssignmentFn<T> }
    | { type: OperationType.Cumulative; run: CumulativeFn<T> }
    | { type: OperationType.Distributive; run: DistributiveFn<T> }
    | { type: OperationType.Exclusive; run: ExclusiveFn<T> };
/**
 * A union of all operation function types.
 */
export type OperationFn<T> = AssignmentFn<T> | CumulativeFn<T> | DistributiveFn<T> | ExclusiveFn<T>;
/**
 * The types of operations that can be performed on a segment tree.
 */
export enum OperationType {
    Assignment = 'assignment',
    Cumulative = 'cumulative',
    Distributive = 'distributive',
    Exclusive = 'exclusive',
}
