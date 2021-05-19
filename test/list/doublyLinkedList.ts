import { expect } from 'chai';
import { randomFill, randomInt } from 'crypto';
import { DoublyLinkedList } from 'src/list/doublyLinkedList';
import { wrap } from 'src/utils';

describe('DoublyLinkedList unit tests', function () {
    let empty: DoublyLinkedList<number>;
    let filled: DoublyLinkedList<number>;
    const values = new Uint32Array(36);
    const updatedValues = new Uint32Array(36);

    // eslint-disable-next-line
    randomFill(values, (_) => {});
    // eslint-disable-next-line
    randomFill(updatedValues, (_) => {});

    beforeEach(function () {
        empty = new DoublyLinkedList();
        filled = new DoublyLinkedList(values);
    });
    describe('#add()', function () {
        describe('#add()', function () {
            it('Should not add when index < 0', function () {
                const size = empty.size;
                empty.add(-1, 99);
                empty.add(-12, 99);
                expect(empty.size).to.equal(size);
            });
            it('Should not add when index > size', function () {
                const size = empty.size;
                empty.add(size + 1, 99);
                empty.add(size + 12, 99);
                expect(empty.size).to.equal(size);
            });
            it('Should append when value == size', function () {
                const size = empty.size;
                empty.add(size, 99);
                expect(empty.size).to.equal(size + 1);
                expect(empty.get(size)).to.equal(99);
            });
            it('Should add at given index', function () {
                const size = empty.size;
                empty.add(size >>> 1, -99);
                expect(empty.size).to.equal(size + 1);
                expect(empty.get(size >>> 1)).to.equal(-99);
            });
            it('Should only add at given index', function () {
                const vals = Array.from(values);
                for (let n = 100; n > 0; --n) {
                    const i = randomInt(filled.size);
                    const v = updatedValues[randomInt(updatedValues.length)];
                    filled.add(i, v);
                    vals.splice(i, 0, v);
                    expect(filled.size).to.equal(vals.length);
                    expect(Array.from(filled)).to.eql(vals);
                }
            });
        });
    });
    describe('#addAll()', function () {
        it('Should not add when index < 0', function () {
            const size = empty.size;
            empty.addAll(-1, [99, 100]);
            empty.addAll(-12, [99, 100]);
            expect(empty.size).to.equal(size);
        });
        it('Should not add when index > size', function () {
            const size = empty.size;
            empty.addAll(size + 1, [99, 100]);
            empty.addAll(size + 12, [99, 100]);
            expect(empty.size).to.equal(size);
        });
        it('Should append when value == size', function () {
            const size = empty.size;
            empty.addAll(size, [99, 100]);
            expect(empty.size).to.equal(size + 2);
            expect(empty.get(size)).to.equal(99);
            expect(empty.get(size + 1)).to.equal(100);
        });
        it('Should add at given index', function () {
            const size = empty.size;
            empty.addAll(size >>> 1, [-99, -100]);
            expect(empty.size).to.equal(size + 2);
            expect(empty.get(size >>> 1)).to.equal(-99);
            expect(empty.get(1 + (size >>> 1))).to.equal(-100);
        });
        it('Should only add at given index', function () {
            const vals = Array.from(values);
            for (let n = 100; n > 0; --n) {
                const i = randomInt(filled.size);
                const min = randomInt(0, updatedValues.length);
                const max = randomInt(min, updatedValues.length);
                const array = updatedValues.slice(min, max);
                filled.addAll(i, array);
                vals.splice(i, 0, ...array);
                expect(filled.size).to.equal(vals.length);
                expect(Array.from(filled)).to.eql(vals);
            }
        });
    });
    describe('#clear()', function () {
        it('Should clear when empty', function () {
            empty.clear();
            expect(empty.size).to.equal(0);
            expect(empty.pop()).to.equal(undefined);
        });
        it('Should clear value', function () {
            empty.push(12);
            empty.clear();
            expect(empty.size).to.equal(0);
            expect(empty.pop()).to.equal(undefined);
        });
        it('Should clear values', function () {
            empty.push(1);
            empty.push(2);
            empty.push(3);
            empty.clear();
            expect(empty.size).to.equal(0);
            expect(empty.pop()).to.equal(undefined);
        });
    });
    describe('#concat()', function () {
        it('Should return a copy of the list if no arguments', function () {
            const list = filled.concat();
            expect(filled).to.not.equal(list);
        });
        it('Should concatenate argument to original list', function () {
            let list = empty.concat([1, 2, 3]);
            expect(empty).to.not.equal(list);
            expect(Array.from(list)).to.eql([1, 2, 3]);
            list = filled.concat([1, 2, 3]);
            expect(filled).to.not.equal(list);
            expect(Array.from(list)).to.eql(Array.from(values).concat([1, 2, 3]));
        });
        it('Should concatenate arguments to original list', function () {
            const args: number[][] = [];
            let vals = Array.from(values);
            for (let i = 0; i < 10; ++i) {
                const arg = new Uint32Array(randomInt(0, 25));
                // eslint-disable-next-line
                randomFill(arg, (_) => {});
                args.push(Array.from(arg));
                vals = vals.concat(args[args.length - 1]);
                const list1 = new DoublyLinkedList(values);
                const list2 = list1.concat(...args);
                expect(list1).to.not.equal(list2);
                expect(list2.size).to.equal(vals.length);
                expect(Array.from(list2)).to.eql(vals);
            }
        });
    });
    describe('#copyWithin()', function () {
        it('Should work on an empty list', function () {
            expect(empty.copyWithin(0, 0, 0)).to.equal(empty);
            expect(empty.size).to.equal(0);
            expect(Array.from(empty)).to.eql([]);
        });
        it('Should wrap around length if negative index given', function () {
            expect(filled.copyWithin(-5)).to.equal(filled);
            expect(filled.size).to.equal(values.length);
            expect(Array.from(filled)).to.eql(Array.from(values).copyWithin(-5, 0));
        });
        it('Should wrap around length if negative min given', function () {
            expect(filled.copyWithin(2, -5)).to.equal(filled);
            expect(filled.size).to.equal(values.length);
            expect(Array.from(filled)).to.eql(Array.from(values).copyWithin(2, -5));
        });
        it('Should wrap around length if negative max given', function () {
            expect(filled.copyWithin(2, undefined, -3)).to.equal(filled);
            expect(filled.size).to.equal(values.length);
            expect(Array.from(filled)).to.eql(Array.from(values).copyWithin(2, 0, -3));
        });
        it('Should copy list if min and max not given', function () {
            for (let i = -values.length; i < values.length; ++i) {
                const list = new DoublyLinkedList(values);
                expect(list.copyWithin(i)).to.equal(list);
                expect(list.size).to.equal(values.length);
                expect(Array.from(list)).to.eql(Array.from(values).copyWithin(i, 0));
            }
        });
        it('Should copy until end of list if max not given', function () {
            for (let i = -values.length; i < values.length; ++i) {
                for (let min = -values.length; min < values.length; ++min) {
                    const list = new DoublyLinkedList(values);
                    expect(list.copyWithin(i, min)).to.equal(list);
                    expect(list.size).to.equal(values.length);
                    expect(Array.from(list)).to.eql(Array.from(values).copyWithin(i, min));
                }
            }
        });
        it('Should copy from start of list if min not given', function () {
            for (let i = -values.length; i < values.length; ++i) {
                for (let max = -values.length; max < values.length; ++max) {
                    const list = new DoublyLinkedList(values);
                    expect(list.copyWithin(i, undefined, max)).to.equal(list);
                    expect(list.size).to.equal(values.length);
                    expect(Array.from(list)).to.eql(Array.from(values).copyWithin(i, 0, max));
                }
            }
        });
        it('Should copy intended range', function () {
            for (let n = 10; n > 0; --n) {
                const i = randomInt(values.length);
                for (let min = -values.length; min < values.length; ++min) {
                    for (let max = -values.length; max < values.length; ++max) {
                        const list = new DoublyLinkedList(values);
                        expect(list.copyWithin(i, min, max)).to.equal(list);
                        expect(list.size).to.equal(values.length);
                        expect(Array.from(list)).to.eql(Array.from(values).copyWithin(i, min, max));
                    }
                }
            }
        });
    });
    describe('#fill()', function () {
        it('Should work on an empty list', function () {
            expect(empty.fill(-12, 0, 0)).to.equal(empty);
            expect(empty.size).to.equal(0);
        });
        it('Should fill list if min and max not given', function () {
            expect(filled.fill(-12)).to.equal(filled);
            expect(filled.size).to.equal(values.length);
            expect(Array.from(filled)).to.eql(Array.from(values).fill(-12));
        });
        it('Should wrap around length if negative min given', function () {
            expect(filled.fill(-12, -5)).to.equal(filled);
            expect(filled.size).to.equal(values.length);
            expect(Array.from(filled)).to.eql(Array.from(values).fill(-12, -5));
        });
        it('Should wrap around length if negative max given', function () {
            expect(filled.fill(-12, undefined, -3)).to.equal(filled);
            expect(filled.size).to.equal(values.length);
            expect(Array.from(filled)).to.eql(Array.from(values).fill(-12, undefined, -3));
        });
        it('Should fill until end of list if max not given', function () {
            for (let min = -values.length; min < values.length; ++min) {
                const list = new DoublyLinkedList(values);
                const vals = Array.from(values).fill(-12, min);
                expect(list.fill(-12, min)).to.equal(list);
                expect(list.size).to.equal(vals.length);
                expect(Array.from(list)).to.eql(vals);
            }
        });
        it('Should fill from start of list if min not given', function () {
            for (let max = -values.length; max < values.length; ++max) {
                const list = new DoublyLinkedList(values);
                const vals = Array.from(values).fill(-12, undefined, max);
                expect(list.fill(-12, undefined, max)).to.equal(list);
                expect(list.size).to.equal(vals.length);
                expect(Array.from(list)).to.eql(vals);
            }
        });
        it('Should fill intended range', function () {
            for (let min = -values.length; min < values.length; ++min) {
                for (let max = -values.length; max < values.length; ++max) {
                    const list = new DoublyLinkedList(values);
                    const vals = Array.from(values).fill(-12, min, max);
                    expect(list.fill(-12, min, max)).to.equal(list);
                    expect(list.size).to.equal(vals.length);
                    expect(Array.from(list)).to.eql(vals);
                }
            }
        });
    });
    describe('#get()', function () {
        it('Should return `undefined` if empty', function () {
            expect(empty.get(0)).to.equal(undefined);
        });
        it('Should return `undefined` if the index < 0', function () {
            expect(empty.get(-1)).to.equal(undefined);
            expect(filled.get(-5)).to.equal(undefined);
        });
        it('Should return `undefined` if the index is >= size', function () {
            expect(empty.get(empty.size)).to.equal(undefined);
            expect(empty.get(empty.size + 1)).to.equal(undefined);
            expect(filled.get(filled.size)).to.equal(undefined);
            expect(filled.get(filled.size + 1)).to.equal(undefined);
        });
        it('Should retrieve the correct element at the given index', function () {
            for (let i = 0; i < values.length; ++i) {
                expect(filled.get(i)).to.equal(values[i]);
            }
        });
    });
    describe('#getSet()', function () {
        it('Should return `undefined` if empty', function () {
            expect(empty.getSet(0, (v) => v)).to.equal(undefined);
        });
        it('Should return `undefined` if the index is below 0', function () {
            expect(empty.getSet(-1, (v) => v)).to.equal(undefined);
            expect(filled.getSet(-1, (v) => v)).to.equal(undefined);
        });
        it('Should return `undefined` if the index is >= size', function () {
            expect(empty.getSet(empty.size, (v) => v)).to.equal(undefined);
            expect(empty.getSet(empty.size + 1, (v) => v)).to.equal(undefined);
            expect(filled.getSet(filled.size, (v) => v)).to.equal(undefined);
            expect(filled.getSet(filled.size + 1, (v) => v)).to.equal(undefined);
        });
        it('Should retrieve the correct element at the given index', function () {
            for (let i = 0; i < values.length; ++i) {
                expect(
                    filled.getSet(i, (v) => {
                        expect(v).to.equal(values[i]);
                        return v;
                    }),
                ).to.equal(values[i]);
            }
        });
        it('Should set the correct element at the given index', function () {
            for (let i = 0; i < values.length; ++i) {
                expect(
                    filled.getSet(i, (v) => {
                        return updatedValues[i];
                    }),
                ).to.equal(values[i]);
                expect(filled.get(i)).to.equal(updatedValues[i]);
            }
        });
        it('Should set only the correct element at the given index', function () {
            const vals = Array.from(values);
            for (let i = 0; i < values.length; ++i) {
                vals[i] = updatedValues[i];
                filled.getSet(i, (v) => updatedValues[i]);
                expect(Array.from(filled)).to.eql(vals);
            }
        });
    });
    describe('#pop()', function () {
        it('Should return `undefined` when empty', function () {
            expect(empty.pop()).to.equal(undefined);
            expect(empty.pop()).to.equal(undefined);
        });
        it('Should return the last value', function () {
            empty.push(1);
            empty.push(2);
            empty.push(3);
            expect(empty.pop()).to.equal(3);
            expect(empty.pop()).to.equal(2);
            expect(empty.pop()).to.equal(1);
            expect(empty.pop()).to.equal(undefined);
            for (let i = values.length - 1; i >= 0; --i) {
                expect(filled.pop()).to.equal(values[i]);
            }
        });
    });
    describe('#push()', function () {
        it('Should add values to the end of the list', function () {
            empty.push(1);
            expect(empty.get(empty.size - 1)).to.equal(1);
            empty.push(2);
            expect(empty.get(empty.size - 1)).to.equal(2);
            empty.push(3);
            expect(empty.get(empty.size - 1)).to.equal(3);
            filled.push(1);
            expect(filled.get(filled.size - 1)).to.equal(1);
            filled.push(2);
            expect(filled.get(filled.size - 1)).to.equal(2);
            filled.push(3);
            expect(filled.get(filled.size - 1)).to.equal(3);
        });
        it('Should return the new length of the list', function () {
            let size = 0;
            expect(empty.push(1)).to.equal(++size);
            expect(empty.push(1)).to.equal(++size);
            expect(empty.push(1)).to.equal(++size);
            size = filled.size;
            expect(filled.push(1)).to.equal(++size);
            expect(filled.push(1)).to.equal(++size);
            expect(filled.push(1)).to.equal(++size);
        });
    });
    describe('#remove()', function () {
        it('Should return `undefined` when empty', function () {
            expect(empty.remove(0)).to.equal(undefined);
            expect(empty.size).to.equal(0);
        });
        it('Should return `undefined` when index < 0', function () {
            const size = empty.size;
            expect(empty.remove(-1)).to.equal(undefined);
            expect(empty.remove(-12)).to.equal(undefined);
            expect(empty.size).to.equal(size);
        });
        it('Should return `undefined` when index >= size', function () {
            const size = empty.size;
            expect(empty.remove(size)).to.equal(undefined);
            expect(empty.remove(size + 1)).to.equal(undefined);
            expect(empty.size).to.equal(size);
        });
        it('Should remove the correct value in the list', function () {
            const vals = Array.from(values);
            while (filled.size > 0) {
                const size = filled.size;
                const i = randomInt(filled.size);
                const expected = vals.splice(i, 1)[0];
                const actual = filled.remove(i);
                expect(actual).to.equal(expected);
            }
        });
        it('Should only remove the correct value in the list', function () {
            const vals = Array.from(values);
            while (filled.size > 0) {
                const size = filled.size;
                const i = randomInt(filled.size);
                const expected = vals.splice(i, 1)[0];
                const actual = filled.remove(i);
                expect(Array.from(filled)).to.eql(vals);
            }
        });
    });
    describe('#reverse()', function () {
        it('Should work on an empty list', function () {
            expect(empty.reverse()).to.equal(empty);
            expect(empty.size).to.equal(0);
            expect(Array.from(empty)).to.eql([]);
        });
        it('Should reverse the list if no arguments given', function () {
            const forward: number[] = [];
            const reverse: number[] = [];
            for (let i = 0; i < values.length; ++i) {
                forward.push(values[i]);
                reverse.unshift(values[i]);
                empty.push(values[i]);
                expect(empty.reverse()).to.equal(empty);
                expect(empty.size).to.equal(forward.length);
                expect(Array.from(empty)).to.eql(reverse);
                empty.reverse();
            }
        });
        it('Should wrap around length if negative min given', function () {
            const vals = Array.from(values);
            vals.splice(-5, 5, ...values.slice(-5).reverse());
            expect(filled.reverse(-5)).to.equal(filled);
            expect(filled.size).to.equal(values.length);
            expect(Array.from(filled)).to.eql(vals);
        });
        it('Should wrap around length if negative max given', function () {
            const vals = Array.from(values);
            vals.splice(0, values.length - 5, ...values.slice(undefined, -5).reverse());
            expect(filled.reverse(undefined, -5)).to.equal(filled);
            expect(filled.size).to.equal(values.length);
            expect(Array.from(filled)).to.eql(vals);
        });
        it('Should fill until end of list if max not given', function () {
            for (let min = -values.length; min < values.length; ++min) {
                const from = wrap(min, 0, values.length);
                const list = new DoublyLinkedList(values);
                const vals = Array.from(values);
                vals.splice(min, values.length - from, ...values.slice(min).reverse());
                expect(list.reverse(min)).to.equal(list);
                expect(list.size).to.equal(values.length);
                expect(Array.from(list)).to.eql(vals);
                list.reverse(min);
            }
        });
        it('Should fill from start of list if min not given', function () {
            for (let max = -values.length; max < values.length; ++max) {
                const to = wrap(max, 0, values.length);
                const list = new DoublyLinkedList(values);
                const vals = Array.from(values);
                vals.splice(0, to, ...values.slice(0, max).reverse());
                expect(list.reverse(undefined, max)).to.equal(list);
                expect(list.size).to.equal(values.length);
                expect(Array.from(list)).to.eql(vals);
                list.reverse(undefined, max);
            }
        });
        it('Should reverse intended range', function () {
            for (let min = -values.length; min < values.length; ++min) {
                for (let max = -values.length; max < values.length; ++max) {
                    const from = wrap(min, 0, values.length);
                    const to = wrap(max, 0, values.length);
                    const list = new DoublyLinkedList(values);
                    const vals = Array.from(values);
                    vals.splice(min, to - from, ...values.slice(min, max).reverse());
                    expect(list.reverse(min, max)).to.equal(list);
                    expect(list.size).to.equal(values.length);
                    expect(Array.from(list)).to.eql(vals);
                    list.reverse(min, max);
                }
            }
        });
    });
    describe('#set()', function () {
        it('Should return `undefined` if empty', function () {
            expect(empty.set(0, 1)).to.equal(undefined);
        });
        it('Should return `undefined` if the index is below 0', function () {
            expect(empty.set(-1, 1)).to.equal(undefined);
            expect(filled.set(-1, 1)).to.equal(undefined);
        });
        it('Should return `undefined` if the index is >= size', function () {
            expect(empty.set(empty.size, 1)).to.equal(undefined);
            expect(empty.set(empty.size + 1, 1)).to.equal(undefined);
            expect(filled.set(filled.size, 1)).to.equal(undefined);
            expect(filled.set(filled.size + 1, 1)).to.equal(undefined);
        });
        it('Should return the previous value at the index', function () {
            for (let i = 0; i < values.length; ++i) {
                expect(filled.set(i, updatedValues[i])).to.equal(values[i]);
            }
        });
        it('Should set the correct element at the given index', function () {
            for (let i = 0; i < values.length; ++i) {
                filled.set(i, updatedValues[i]);
                expect(filled.get(i)).to.equal(updatedValues[i]);
            }
        });
        it('Should set only the correct element at the given index', function () {
            const vals = Array.from(values);
            for (let i = 0; i < values.length; ++i) {
                vals[i] = updatedValues[i];
                filled.set(i, updatedValues[i]);
                expect(Array.from(filled)).to.eql(vals);
            }
        });
    });
    describe('#shift()', function () {
        it('Should return `undefined` when empty', function () {
            expect(empty.shift()).to.equal(undefined);
            expect(empty.shift()).to.equal(undefined);
        });
        it('Should return the first value in the list', function () {
            empty.push(1);
            empty.push(2);
            empty.push(3);
            expect(empty.shift()).to.equal(1);
            expect(empty.shift()).to.equal(2);
            expect(empty.shift()).to.equal(3);
            expect(empty.shift()).to.equal(undefined);
            for (let i = 0; i < values.length; ++i) {
                expect(filled.shift()).to.equal(values[i]);
            }
        });
    });
    describe('#size', function () {
        it('Should show 0 when empty', function () {
            expect(empty.size).to.equal(0);
        });
        it('Should stay the same when not inserting or removing elements', function () {
            filled.get(2);
            expect(filled.size).to.equal(values.length);
            filled.getSet(2, (_) => 12);
            expect(filled.size).to.equal(values.length);
            filled.set(2, 12);
            expect(filled.size).to.equal(values.length);
        });
        it('Should show correct size when pushing values', function () {
            empty.push(1);
            expect(empty.size).to.equal(1);
            empty.push(1);
            expect(empty.size).to.equal(2);
            empty.push(1);
            expect(empty.size).to.equal(3);
        });
        it('Should show correct size when adding values', function () {
            empty.add(0, 1);
            expect(empty.size).to.equal(1);
            empty.add(0, 1);
            expect(empty.size).to.equal(2);
            empty.add(0, 1);
            expect(empty.size).to.equal(3);
        });
        it('Should show correct size when unshifting values', function () {
            empty.unshift(1);
            expect(empty.size).to.equal(1);
            empty.unshift(1);
            expect(empty.size).to.equal(2);
            empty.unshift(1);
            expect(empty.size).to.equal(3);
        });
        it('Should show 0 if popping when empty', function () {
            empty.pop();
            expect(empty.size).to.equal(0);
        });
        it('Should show correct size when popping values', function () {
            empty.push(1);
            empty.push(1);
            empty.push(1);
            empty.pop();
            expect(empty.size).to.equal(2);
            empty.pop();
            expect(empty.size).to.equal(1);
            empty.pop();
            expect(empty.size).to.equal(0);
            let n = values.length;
            while (n > 0) {
                filled.pop();
                expect(filled.size).to.equal(--n);
            }
        });
        it('Should show 0 if removing when empty', function () {
            empty.remove(0);
            expect(empty.size).to.equal(0);
        });
        it('Should show correct size when removing values', function () {
            empty.push(1);
            empty.push(1);
            empty.push(1);
            empty.pop();
            expect(empty.size).to.equal(2);
            empty.pop();
            expect(empty.size).to.equal(1);
            empty.pop();
            expect(empty.size).to.equal(0);
            let n = values.length;
            while (n > 0) {
                filled.remove(0);
                expect(filled.size).to.equal(--n);
            }
        });
        it('Should show 0 if shifting when empty', function () {
            empty.shift();
            expect(empty.size).to.equal(0);
        });
        it('Should show correct size when shifting values', function () {
            empty.push(1);
            empty.push(1);
            empty.push(1);
            empty.pop();
            expect(empty.size).to.equal(2);
            empty.pop();
            expect(empty.size).to.equal(1);
            empty.pop();
            expect(empty.size).to.equal(0);
            let n = values.length;
            while (n > 0) {
                filled.shift();
                expect(filled.size).to.equal(--n);
            }
        });
    });
    describe('#slice()', function () {
        it('Should work on an empty list', function () {
            const list = empty.slice(0, 0);
            expect(list).to.not.equal(empty);
            expect(Array.from(list)).to.eql([]);
            expect(list.size).to.equal(0);
            expect(empty.size).to.equal(0);
        });
        it('Should return a copy of list if min and max not given', function () {
            const list = filled.slice();
            expect(list).to.not.equal(filled);
            expect(Array.from(list)).to.eql(Array.from(values));
            expect(list.size).to.equal(values.length);
            expect(filled.size).to.equal(values.length);
        });
        it('Should wrap around length if negative min given', function () {
            const list = filled.slice(-5);
            expect(list).to.not.equal(filled);
            expect(Array.from(list)).to.eql(Array.from(values.slice(-5)));
            expect(list.size).to.equal(5);
            expect(filled.size).to.equal(values.length);
        });
        it('Should wrap around length if negative max given', function () {
            const list = filled.slice(undefined, -5);
            expect(list).to.not.equal(filled);
            expect(Array.from(list)).to.eql(Array.from(values.slice(undefined, -5)));
            expect(list.size).to.equal(values.length - 5);
            expect(filled.size).to.equal(values.length);
        });
        it('Should return until end of list if max not given', function () {
            for (let min = -values.length; min < values.length; ++min) {
                const expected = Array.from(values.slice(min));
                const actual = filled.slice(min);
                expect(actual).to.not.equal(filled);
                expect(Array.from(actual)).to.eql(expected);
                expect(actual.size).to.equal(expected.length);
                expect(filled.size).to.equal(values.length);
            }
        });
        it('Should return from start of list if min not given', function () {
            for (let max = -values.length; max < values.length; ++max) {
                const expected = Array.from(values.slice(undefined, max));
                const actual = filled.slice(undefined, max);
                expect(actual).to.not.equal(filled);
                expect(Array.from(actual)).to.eql(expected);
                expect(actual.size).to.equal(expected.length);
                expect(filled.size).to.equal(values.length);
            }
        });
        it('Should return intended range', function () {
            for (let min = -values.length; min < values.length; ++min) {
                for (let max = -values.length; max < values.length; ++max) {
                    const expected = Array.from(values.slice(min, max));
                    const actual = filled.slice(min, max);
                    expect(actual).to.not.equal(filled);
                    expect(Array.from(actual)).to.eql(expected);
                    expect(actual.size).to.equal(expected.length);
                    expect(filled.size).to.equal(values.length);
                }
            }
        });
    });
    describe('#[Symbol.iterator]()', function () {
        it('Should return an array copy of the values', function () {
            const vals: number[] = [];
            expect(Array.from(empty)).to.eql(vals);
            for (let i = 0; i < values.length; ++i) {
                empty.push((vals[i] = values[i]));
                expect(Array.from(empty)).to.eql(vals);
            }
        });
    });
    describe('#unshift()', function () {
        it('Should add values to the start of the list', function () {
            const vals: number[] = [];
            for (let n = 25; n > 0; --n) {
                const v = randomInt(1 << 30);
                vals.unshift(v);
                empty.unshift(v);
                expect(Array.from(empty)).to.eql(vals);
            }
        });
        it('Should return the new length of the list', function () {
            let size = 0;
            for (let n = 25; n > 0; --n) {
                empty.unshift(99);
                expect(empty.size).to.eql(++size);
            }
        });
    });
    describe('#view()', function () {
        it('Should work on an empty list', function () {
            const list = empty.view(0, 0);
            expect(Array.from(list)).to.eql([]);
        });
        it('Should return a view of the list if min and max not given', function () {
            const list = filled.view();
            expect(list).to.not.equal(filled);
            expect(Array.from(list)).to.eql(Array.from(values));
        });
        it('Should wrap around length if negative min given', function () {
            const list = filled.view(-5);
            expect(Array.from(list)).to.eql(Array.from(values.slice(-5)));
        });
        it('Should wrap around length if negative max given', function () {
            const list = filled.view(undefined, -5);
            expect(Array.from(list)).to.eql(Array.from(values.slice(undefined, -5)));
        });
        it('Should return until end of list if max not given', function () {
            for (let min = -values.length; min < values.length; ++min) {
                const expected = Array.from(values.slice(min));
                const actual = filled.view(min);
                expect(Array.from(actual)).to.eql(expected);
            }
        });
        it('Should return from start of list if min not given', function () {
            for (let max = -values.length; max < values.length; ++max) {
                const expected = Array.from(values.slice(undefined, max));
                const actual = filled.view(undefined, max);
                expect(Array.from(actual)).to.eql(expected);
            }
        });
        it('Should return intended range', function () {
            for (let min = -values.length; min < values.length; ++min) {
                for (let max = -values.length; max < values.length; ++max) {
                    const expected = Array.from(values.slice(min, max));
                    const actual = filled.view(min, max);
                    expect(Array.from(actual)).to.eql(expected);
                }
            }
        });
    });
});
