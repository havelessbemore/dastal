import { List } from './list';

export class ArrayList<T> implements List<T> {
    protected array: Array<T>;

    constructor(array: Array<T> = []) {
        this.array = array;
    }

    add(index: number, value: T): boolean {
        this.array.splice(index, 0, value);
        return true;
    }

    clear(): void {
        this.array.length = 0;
    }

    get(index: number): T | undefined {
        return this.array[index];
    }

    push(value: T): boolean {
        this.array.push(value);
        return true;
    }

    remove(index: number): T | undefined {
        return this.array.splice(index, 1)[0];
    }

    set(index: number, element: T): T | undefined {
        if (index < 0 || index >= this.array.length) {
            return undefined;
        }
        const value = this.array[index];
        this.array[index] = element;
        return value;
    }

    shift(): T | undefined {
        return this.array.shift();
    }

    get size(): number {
        return this.array.length;
    }

    toArray(): T[] {
        return Array.from(this.array);
    }

    unshift(value: T): boolean {
        this.array.unshift(value);
        return true;
    }
}
