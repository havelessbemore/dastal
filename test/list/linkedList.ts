import { expect } from 'chai';
import { randomFill, randomInt } from 'crypto';
import { LinkedList } from 'src/list/linkedList';

describe('LinkedList unit tests', function () {
    let empty: LinkedList<number>;
    let filled: LinkedList<number>;
    const values = new Uint32Array(36);
    const updatedValues = new Uint32Array(36);

    // eslint-disable-next-line
    randomFill(values, (_) => {});
    // eslint-disable-next-line
    randomFill(updatedValues, (_) => {});

    beforeEach(function () {
        empty = new LinkedList();
        filled = new LinkedList(values);
    });
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
                const list1 = new LinkedList(values);
                const list2 = list1.concat(...args);
                expect(list1).to.not.equal(list2);
                expect(list2.size).to.equal(vals.length);
                expect(Array.from(list2)).to.eql(vals);
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
                const list = new LinkedList(values);
                const vals = Array.from(values).fill(-12, min);
                expect(list.fill(-12, min)).to.equal(list);
                expect(list.size).to.equal(vals.length);
                expect(Array.from(list)).to.eql(vals);
            }
        });
        it('Should fill from start of list if min not given', function () {
            for (let max = -values.length; max < values.length; ++max) {
                const list = new LinkedList(values);
                const vals = Array.from(values).fill(-12, undefined, max);
                expect(list.fill(-12, undefined, max)).to.equal(list);
                expect(list.size).to.equal(vals.length);
                expect(Array.from(list)).to.eql(vals);
            }
        });
        it('Should fill intended range', function () {
            for (let min = -values.length; min < values.length; ++min) {
                for (let max = -values.length; max < values.length; ++max) {
                    const list = new LinkedList(values);
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
        it('Should return `undefined` if the index is below 0', function () {
            expect(empty.get(-1)).to.equal(undefined);
            expect(filled.get(-1)).to.equal(undefined);
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
        it('Should reverse elements', function () {
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
    describe('#unshift()', function () {
        it('Should add values to the start of the list', function () {
            let vals: number[] = [];
            vals.unshift(1);
            empty.unshift(1);
            expect(Array.from(empty)).to.eql(vals);
            vals.unshift(2);
            empty.unshift(2);
            expect(Array.from(empty)).to.eql(vals);
            vals.unshift(3);
            empty.unshift(3);
            expect(Array.from(empty)).to.eql(vals);
            vals = Array.from(values);
            vals.unshift(1);
            filled.unshift(1);
            expect(Array.from(filled)).to.eql(vals);
            vals.unshift(2);
            filled.unshift(2);
            expect(Array.from(filled)).to.eql(vals);
            vals.unshift(3);
            filled.unshift(3);
            expect(Array.from(filled)).to.eql(vals);
        });
        it('Should return the new length of the list', function () {
            let size = 0;
            empty.unshift(1);
            expect(empty.size).to.equal(++size);
            empty.unshift(2);
            expect(empty.size).to.equal(++size);
            empty.unshift(3);
            expect(empty.size).to.equal(++size);
            size = filled.size;
            filled.unshift(1);
            expect(filled.size).to.equal(++size);
            filled.unshift(2);
            expect(filled.size).to.equal(++size);
            filled.unshift(3);
            expect(filled.size).to.equal(++size);
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
});
