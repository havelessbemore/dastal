type NestedArray<T> = Array<T | NestedArray<T>>;

interface Node<T> {
    array: NestedArray<T>;
    index: number;
    next?: Node<T>;
}

export class BigArray<T = any> {
    /**
     * The maximum number of elements that can be added to a basic array
     *
     * According to [ECMA-262](https://tc39.es/ecma262/#array-index):
     *    0 <= array.length <= 2^32 - 1
     *
     * To take advantage of powers of 2, this will be truncated to:
     *    0 <= array.length <= 2^31
     */
    protected static MAX_BIT = 31n;
    protected static MAX_LEN = 2147483648n;

    protected array: NestedArray<T>;
    protected height: bigint;
    protected size: bigint;

    constructor() {
        this.height = 0n;
        this.array = [];
        this.size = 0n;
    }

    /**
     * Gets or sets the length of the array. This is a number one higher than the highest index in the array.
     */
    get length(): bigint {
        return this.size;
    }

    set length(n: bigint) {
        if (n < 0n) {
            throw new RangeError('Invalid array length');
        }
        throw new Error('TODO');
    }

    get(index: bigint): T | undefined {
        if (index < 0n || index >= this.size) {
            return undefined;
        }
        const node = this._get(index);
        return (node.array as Array<T>)[node.index];
    }

    protected _get(i: bigint): Node<T> {
        let array = this.array;
        let next: Node<T> | undefined;
        for (
            let offset = BigArray.MAX_BIT << this.height;
            offset > BigArray.MAX_BIT;
            offset >>= 1n
        ) {
            const index = Number(i >> offset);
            next = { array, index, next };
            i -= BigInt(index) << offset;
            array = array[index] as NestedArray<T>;
        }
        return { array, index: Number(i), next };
    }

    set(index: bigint, value: T): void {
        if (index < 0n) {
            throw new RangeError();
        }
        if (index >= this.size) {
            throw new Error('TODO');
        }
        const node = this._get(index);
        (node.array as Array<T>)[node.index] = value;
    } /*
    pop(): T | undefined {
        let height = 0;
        let stack = this.tail();
        let array = stack.pop()!;

        while (array.length < 1 && stack.size > 0) {
            array = stack.pop()!;
            array.pop();
            ++height;
        }
        
        if (array.length < 1) {
            return undefined;
        }

        while (height > 0) {
            --height;
            array = array[array.length - 1] as NestedArray<T>;
        }

        return (array as Array<T>).pop();
    }

    /**
     * Appends new elements to the end of an array, and returns the new length of the array.
     * @param items New elements to add to the array.
     */ /*
    push(...items: T[]): bigint {
        let height = 0;
        let node = this._get(this.size - 1n);

        for (const item of items) {
            while (array && array.length >= BigArray.MAX_LEN) {
                ++height;
                array = stack.pop();
            }
            if (array == null){
                array = [this.array];
                this.array = array;
                ++this.height;
            }
            while (height > 0) {
                const t: NestedArray<T> = [];
                array.push(t);
                stack.push(array);
                array = t;
                --height;
            }
            array!.push(items);
            ++this.size;
        }

        return this.size;
    }

    /**
     * Returns a string representation of an array.
     */ /*
    toString(): string {
        throw new Error("TODO");
    }
    /**
     * Returns a string representation of an array. The elements are converted to string using their toLocalString methods.
     */ /*
    toLocaleString(): string {
        throw new Error("TODO");
    }
    /**
     * Combines two or more arrays.
     * This method returns a new array without modifying any existing arrays.
     * @param items Additional arrays and/or items to add to the end of the array.
     */ /*
    concat(...items: ConcatArray<T>[]): T[];
    /**
     * Combines two or more arrays.
     * This method returns a new array without modifying any existing arrays.
     * @param items Additional arrays and/or items to add to the end of the array.
     */ /*
    concat(...items: (T | ConcatArray<T>)[]): T[] {
        throw new Error("TODO");
    }
    /**
     * Adds all the elements of an array into a string, separated by the specified separator string.
     * @param separator A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma.
     */ /*
    join(separator?: string): string {
        throw new Error("TODO");
    }
    /**
     * Reverses the elements in an array in place.
     * This method mutates the array and returns a reference to the same array.
     */ /*
    reverse(): T[] {
        throw new Error("TODO");
    }
    /**
     * Removes the first element from an array and returns it.
     * If the array is empty, undefined is returned and the array is not modified.
     */ /*
    shift(): T | undefined {
        throw new Error("TODO");
    }
    /**
     * Returns a copy of a section of an array.
     * For both start and end, a negative index can be used to indicate an offset from the end of the array.
     * For example, -2 refers to the second to last element of the array.
     * @param start The beginning index of the specified portion of the array.
     * If start is undefined, then the slice begins at index 0.
     * @param end The end index of the specified portion of the array. This is exclusive of the element at the index 'end'.
     * If end is undefined, then the slice extends to the end of the array.
     */ /*
    slice(start?: number, end?: number): T[] {
        throw new Error("TODO");
    }
    /**
     * Sorts an array in place.
     * This method mutates the array and returns a reference to the same array.
     * @param compareFn Function used to determine the order of the elements. It is expected to return
     * a negative value if first argument is less than second argument, zero if they're equal and a positive
     * value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
     * ```ts
     * [11,2,22,1].sort((a, b) => a - b)
     * ```
     */ /*
    sort(compareFn?: (a: T, b: T) => number): this {
        throw new Error("TODO");
    }
    /**
     * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
     * @param start The zero-based location in the array from which to start removing elements.
     * @param deleteCount The number of elements to remove.
     * @returns An array containing the elements that were deleted.
     */ /*
    splice(start: number, deleteCount?: number): T[];
    /**
     * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
     * @param start The zero-based location in the array from which to start removing elements.
     * @param deleteCount The number of elements to remove.
     * @param items Elements to insert into the array in place of the deleted elements.
     * @returns An array containing the elements that were deleted.
     */ /*
    splice(start: number, deleteCount: number, ...items: T[]): T[] {
        throw new Error("TODO");
    }
    /**
     * Inserts new elements at the start of an array, and returns the new length of the array.
     * @param items Elements to insert at the start of the array.
     */ /*
    unshift(...items: T[]): number {
        throw new Error("TODO");
    }
    /**
     * Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
     * @param searchElement The value to locate in the array.
     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
     */ /*
    indexOf(searchElement: T, fromIndex?: number): number {
        throw new Error("TODO");
    }
    /**
     * Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.
     * @param searchElement The value to locate in the array.
     * @param fromIndex The array index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the array.
     */ /*
    lastIndexOf(searchElement: T, fromIndex?: number): number {
        throw new Error("TODO");
    }
    /**
     * Determines whether all the members of an array satisfy the specified test.
     * @param predicate A function that accepts up to three arguments. The every method calls
     * the predicate function for each element in the array until the predicate returns a value
     * which is coercible to the Boolean value false, or until the end of the array.
     * @param thisArg An object to which the this keyword can refer in the predicate function.
     * If thisArg is omitted, undefined is used as the this value.
     */ /*
    every<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): this is S[] {
        throw new Error("TODO");
    }
    /**
     * Determines whether all the members of an array satisfy the specified test.
     * @param predicate A function that accepts up to three arguments. The every method calls
     * the predicate function for each element in the array until the predicate returns a value
     * which is coercible to the Boolean value false, or until the end of the array.
     * @param thisArg An object to which the this keyword can refer in the predicate function.
     * If thisArg is omitted, undefined is used as the this value.
     */ /*
    every(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean {
        throw new Error("TODO");
    }
    /**
     * Determines whether the specified callback function returns true for any element of an array.
     * @param predicate A function that accepts up to three arguments. The some method calls
     * the predicate function for each element in the array until the predicate returns a value
     * which is coercible to the Boolean value true, or until the end of the array.
     * @param thisArg An object to which the this keyword can refer in the predicate function.
     * If thisArg is omitted, undefined is used as the this value.
     */ /*
    some(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean {
        throw new Error("TODO");
    }
    /**
     * Performs the specified action for each element in an array.
     * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
     * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
     */ /*
    forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void {
        throw new Error("TODO");
    }
    /**
     * Calls a defined callback function on each element of an array, and returns an array that contains the results.
     * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
     * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
     */ /*
    map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[] {
        throw new Error("TODO");
    }
    /**
     * Returns the elements of an array that meet the condition specified in a callback function.
     * @param predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
     * @param thisArg An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.
     */ /*
    filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[] {
        throw new Error("TODO");
    }
    /**
     * Returns the elements of an array that meet the condition specified in a callback function.
     * @param predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
     * @param thisArg An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.
     */ /*
    filter(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[] {
        throw new Error("TODO");
    }
    /**
     * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
     * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
     */ /*
    reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T {
        throw new Error("TODO");
    }
    reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T {
        throw new Error("TODO");
    }
    /**
     * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
     * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
     */ /*
    reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U {
        throw new Error("TODO");
    }
    /**
     * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
     * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
     */ /*
    reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T {
        throw new Error("TODO");
    }
    reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T {
        throw new Error("TODO");
    }
    /**
     * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
     * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
     */ /*
    reduceRight<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U {
        throw new Error("TODO");
    }
    */ /*
    find<S extends T>(predicate: (this: void, value: T, index: number, obj: T[]) => value is S, thisArg?: any): S | undefined {
        throw new Error("TODO");
    }
    find(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): T | undefined {
        throw new Error("TODO");
    }

    /**
     * Returns the index of the first element in the array where predicate is true, and -1
     * otherwise.
     * @param predicate find calls predicate once for each element of the array, in ascending
     * order, until it finds one where predicate returns true. If such an element is found,
     * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
     * @param thisArg If provided, it will be used as the this value for each invocation of
     * predicate. If it is not provided, undefined is used instead.
     */ /*
    findIndex(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): number {
        throw new Error("TODO");
    }

    /**
     * Returns the this object after filling the section identified by start and end with value
     * @param value value to fill array section with
     * @param start index to start filling the array at. If start is negative, it is treated as
     * length+start where length is the length of the array.
     * @param end index to stop filling the array at. If end is negative, it is treated as
     * length+end.
     */ /*
    fill(value: T, start?: number, end?: number): this {
        throw new Error("TODO");
    }

    /**
     * Returns the this object after copying a section of the array identified by start and end
     * to the same array starting at position target
     * @param target If target is negative, it is treated as length+target where length is the
     * length of the array.
     * @param start If start is negative, it is treated as length+start. If end is negative, it
     * is treated as length+end.
     * @param end If not specified, length of the this object is used as its default value.
     */ /*
    copyWithin(target: number, start: number, end?: number): this {
        throw new Error("TODO");
    }

    /**
     * Determines whether an array includes a certain element, returning true or false as appropriate.
     * @param searchElement The element to search for.
     * @param fromIndex The position in this array at which to begin searching for searchElement.
     */ /*
    includes(searchElement: T, fromIndex?: number): boolean {
        throw new Error("TODO");
    }

    /**
     * Returns an object whose properties have the value 'true'
     * when they will be absent when used in a 'with' statement.
     */

    /**
     * Removes the last element from an array and returns it.
     * If the array is empty, undefined is returned and the array is not modified.
     */ /**
     * Returns the value of the first element in the array where predicate is true, and undefined
     * otherwise.
     * @param predicate find calls predicate once for each element of the array, in ascending
     * order, until it finds one where predicate returns true. If such an element is found, find
     * immediately returns that element value. Otherwise, find returns undefined.
     * @param thisArg If provided, it will be used as the this value for each invocation of
     * predicate. If it is not provided, undefined is used instead.
     */ [Symbol.unscopables](): {
        copyWithin: boolean;
        entries: boolean;
        fill: boolean;
        find: boolean;
        findIndex: boolean;
        keys: boolean;
        values: boolean;
    } {
        return {
            copyWithin: true,
            entries: true,
            fill: true,
            find: true,
            findIndex: true,
            keys: true,
            values: true,
        };
    }

    /** Iterator */
    *[Symbol.iterator](): IterableIterator<T> {
        throw new Error('TODO');
    }

    /**
     * Returns an iterable of key, value pairs for every entry in the array
     */
    entries(): IterableIterator<[number, T]> {
        throw new Error('TODO');
    }

    /**
     * Returns an iterable of keys in the array
     */
    keys(): IterableIterator<number> {
        throw new Error('TODO');
    }

    /**
     * Returns an iterable of values in the array
     */
    values(): IterableIterator<T> {
        throw new Error('TODO');
    }
}
