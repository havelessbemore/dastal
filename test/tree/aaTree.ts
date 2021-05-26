import { expect } from 'chai';
import { randomFill, randomInt } from 'crypto';
import { AATree } from 'src/tree/aaTree';

describe('AATree unit tests', function () {
    const compareFn = (a: number, b: number) => a - b;
    let empty: AATree<number>;
    let filled: AATree<number>;
    const values = new Uint32Array(36);
    const updatedValues = new Uint32Array(36);

    // eslint-disable-next-line
    randomFill(values, (_) => {});
    // eslint-disable-next-line
    randomFill(updatedValues, (_) => {});

    beforeEach(function () {
        empty = new AATree(compareFn);
        filled = new AATree(compareFn, values);
    });
    describe('#constructor()', function () {
        it('Should initialize an empty tree', function () {
            const tree = new AATree(compareFn);
            expect(tree.size).to.equal(0);
            expect(tree.min()).to.equal(undefined);
        });
        it('Should initialize an empty tree if given empty array', function () {
            const tree = new AATree(compareFn, []);
            expect(tree.size).to.equal(0);
            expect(tree.min()).to.equal(undefined);
        });
        it('Should initialize an empty tree if given empty iterable', function () {
            const it: Iterable<number> = {[Symbol.iterator]: () => ({next: () => ({done: true, value: undefined})})};
            const tree = new AATree(compareFn, it);
            expect(tree.size).to.equal(0);
            expect(tree.min()).to.equal(undefined);
        });
        it('Should initialize a filled tree if given an array', function () {
            const tree = new AATree(compareFn, values);
            expect(tree.size).to.equal(values.length);
            const expected = Array.from(values).sort(compareFn);
            const actual = Array.from(tree).sort(compareFn);
            expect(actual).to.eql(expected);
        });
        it('Should initialize a filled tree if given an iterable', function () {
            const it: Iterable<number> = {[Symbol.iterator]: () => values[Symbol.iterator]()};
            const tree = new AATree(compareFn, values);
            expect(tree.size).to.equal(values.length);
            const expected = Array.from(values).sort(compareFn);
            const actual = Array.from(tree).sort(compareFn);
            expect(actual).to.eql(expected);
        });
        it('Should initialize a filled tree if given an AATree', function () {
            const tree = new AATree(compareFn, filled);
            expect(tree.size).to.equal(values.length);
            const expected = Array.from(values).sort(compareFn);
            const actual = Array.from(tree).sort(compareFn);
            expect(actual).to.eql(expected);
        });
    });
    describe('#add()', function () {
        it('Should work when empty', function () {
            expect(empty.add(1)).to.equal(1);
            expect(empty.size).to.equal(1);
        });
        it('Should work when not empty', function () {
            expect(filled.add(12)).to.equal(values.length + 1);
            expect(filled.size).to.equal(values.length + 1);
        });
        it('Should not break tree', function () {
            const vals: number[] = [];
            for (let i = 0; i < values.length; ++i) {
                empty.add(values[i]);
                vals.push(values[i]);
                const sorted = Array.from(vals).sort((a, b) => compareFn(b, a));
                for (const v of empty.sorted()) {
                    expect(v).to.equal(sorted.pop());
                }
            }
        });
    });
    describe('#clear()', function () {
        it('Should clear when empty', function () {
            empty.clear();
            expect(empty.size).to.equal(0);
            expect(Array.from(empty)).to.eql([]);
        });
        it('Should clear when not empty', function () {
            filled.clear();
            expect(filled.size).to.equal(0);
            expect(Array.from(filled)).to.eql([]);
        });
        it('Should clear added value', function () {
            empty.add(12);
            empty.clear();
            expect(empty.size).to.equal(0);
            expect(Array.from(empty)).to.eql([]);
        });
        it('Should clear added values', function () {
            empty.add(1);
            empty.add(2);
            empty.add(3);
            empty.clear();
            expect(empty.size).to.equal(0);
            expect(Array.from(empty)).to.eql([]);
        });
    });
    describe('#contains()', function () {
        it('Should return false when empty', function () {
            expect(empty.contains(values[0])).to.equal(false);
        });
        it('Should return false when not found', function () {
            expect(filled.contains(-99)).to.equal(false);
        });
        it('Should return true if found', function () {
            for (let i = 0; i < values.length; ++i) {
                expect(filled.contains(values[i])).to.equal(true);
            }
        });
    });
    describe('#delete()', function () {
        it('Should return false when empty', function () {
            expect(empty.delete(1)).to.equal(false);
            expect(empty.size).to.equal(0);
        });
        it('Should return false when not found', function () {
            expect(filled.delete(-99)).to.equal(false);
            expect(filled.size).to.equal(values.length);
        });
        it('Should return true if found', function () {
            for (let i = 0; i < values.length; ++i) {
                expect(filled.delete(values[i])).to.equal(true);
            }
        });
        it('Should decrease size', function () {
            for (let i = values.length - 1; i >= 0; --i) {
                filled.delete(values[i]);
                expect(filled.size).to.equal(i);
            }
        });
        it('Should update tree', function () {
            empty.add(20); 
            empty.add(15); 
            empty.add(10); 
            empty.add(5);
            empty.delete(10);
            expect(empty.min()).to.equal(5);
            expect(empty.size).to.equal(3);
            empty.delete(5);
            expect(empty.min()).to.equal(15);
            expect(empty.size).to.equal(2);
            empty.delete(20);
            expect(empty.min()).to.equal(15);
            expect(empty.size).to.equal(1);
            empty.delete(15);
            expect(empty.min()).to.equal(undefined);
            expect(empty.size).to.equal(0);
        });
        it('Should not break tree', function () {
            const vals = Array.from(values);
            for (let i = vals.length - 1; i >= 0; --i) {
                const val = vals.splice(randomInt(vals.length), 1)[0];
                expect(filled.delete(val)).to.equal(true);
                expect(filled.size).to.equal(vals.length);
                const sorted = Array.from(vals).sort((a, b) => compareFn(b, a));
                for (const v of filled.sorted()) {
                    expect(v).to.equal(sorted.pop());
                }
            }
        });
    });
    describe('#max()', function () {
        it('Should return `undefined` when empty', function () {
            expect(empty.max()).to.equal(undefined);
            expect(empty.max()).to.equal(undefined);
        });
        it('Should return the added value', function () {
            empty.add(12);
            expect(empty.max()).to.equal(12);
        });
        it('Should return the largest value', function () {
            let tree = new AATree(compareFn, [1, 2]);
            expect(tree.max()).to.equal(2);
            tree = new AATree(compareFn, [2, 1]);
            expect(tree.max()).to.equal(2);
        });
        it('Should return the largest values as tree grows', function () {
            for (let i = 0; i < values.length; ++i) {
                empty.add(values[i]);
                const sorted = Array.from(values.slice(0, i + 1)).sort(compareFn);
                expect(empty.max()).to.equal(sorted[sorted.length - 1]);
            }
        });
        it('Should return the largest values as tree shrinks', function () {
            const sorted = Array.from(values).sort(compareFn);
            for (let i = values.length; i > 0; --i) {
                expect(filled.max()).to.equal(sorted[i - 1]);
                filled.pop();
                sorted.pop();
            }
        });
    });
    describe('#min()', function () {
        it('Should return `undefined` when empty', function () {
            expect(empty.min()).to.equal(undefined);
            expect(empty.min()).to.equal(undefined);
        });
        it('Should return the added value', function () {
            empty.add(12);
            expect(empty.min()).to.equal(12);
        });
        it('Should return the smallest value', function () {
            let tree = new AATree(compareFn, [1, 2]);
            expect(tree.min()).to.equal(1);
            tree = new AATree(compareFn, [2, 1]);
            expect(tree.min()).to.equal(1);
        });
        it('Should return the smallest values as tree grows', function () {
            for (let i = 0; i < values.length; ++i) {
                empty.add(values[i]);
                const sorted = Array.from(values.slice(0, i + 1)).sort(compareFn);
                expect(empty.min()).to.equal(sorted[0]);
            }
        });
        it('Should return the smallest values as tree shrinks', function () {
            const sorted = Array.from(values).sort((a, b) => compareFn(b, a));
            for (let i = values.length; i > 0; --i) {
                expect(filled.min()).to.equal(sorted[i - 1]);
                filled.shift();
                sorted.pop();
            }
        });
    });
    describe('#pop()', function () {
        it('Should work when empty', function () {
            expect(empty.pop()).to.equal(undefined);
            expect(empty.size).to.equal(0);
            expect(empty.pop()).to.equal(undefined);
            expect(empty.size).to.equal(0);
        });
        it('Should remove the value from the list', function () {
            empty.add(12);
            expect(empty.size).to.equal(1);
            expect(empty.pop()).to.equal(12);
            expect(empty.size).to.equal(0);
            expect(empty.pop()).to.equal(undefined);
            expect(empty.size).to.equal(0);
        });
        it('Should return the largest values', function () {
            empty.add(1);
            empty.add(2);
            expect(empty.size).to.equal(2);
            expect(empty.pop()).to.equal(2);
            expect(empty.size).to.equal(1);
            expect(empty.pop()).to.equal(1);
            expect(empty.size).to.equal(0);
        });
        it('Should return the largest values as tree shrinks', function () {
            const sorted = Array.from(values).sort((a, b) => compareFn(a, b));
            for (let i = values.length; i > 0; sorted.pop()) {
                expect(filled.pop()).to.equal(sorted[--i]);
                expect(filled.size).to.equal(i);
            }
        });
    });
    describe('#shift()', function () {
        it('Should work when empty', function () {
            expect(empty.pop()).to.equal(undefined);
            expect(empty.size).to.equal(0);
            expect(empty.pop()).to.equal(undefined);
            expect(empty.size).to.equal(0);
        });
        it('Should remove the value from the list', function () {
            empty.add(12);
            expect(empty.size).to.equal(1);
            expect(empty.pop()).to.equal(12);
            expect(empty.size).to.equal(0);
            expect(empty.pop()).to.equal(undefined);
            expect(empty.size).to.equal(0);
        });
        it('Should return the smallest values', function () {
            empty.add(1);
            empty.add(2);
            expect(empty.size).to.equal(2);
            expect(empty.shift()).to.equal(1);
            expect(empty.size).to.equal(1);
            expect(empty.shift()).to.equal(2);
            expect(empty.size).to.equal(0);
        });
        it('Should return the smallest values as tree shrinks', function () {
            const sorted = Array.from(values).sort((a, b) => compareFn(b, a));
            for (let i = values.length; i > 0; sorted.pop()) {
                expect(filled.shift()).to.equal(sorted[--i]);
                expect(filled.size).to.equal(i);
            }
        });
    });
    describe('#size', function () {
        it('Should be zero when empty', function () {
            expect(empty.size).to.equal(0);
        });
        it('Should be accurate', function () {
            let i = 0;
            while (i < values.length) {
                empty.add(values[i]);
                expect(empty.size).to.equal(++i);
            }
            while (i > 0) {
                empty.delete(values[--i]);
                expect(empty.size).to.equal(i);
            }
        });
    });
    describe('#sorted()', function () {
        it('Should work when empty', function () {
            expect(Array.from(empty.sorted())).to.eql([]);
        });
        it('Should work with single value', function () {
            empty.add(12);
            expect(Array.from(empty.sorted())).to.eql([12]);
        });
        it('Should return sorted iterable on all elements', function () {
            const expected = Array.from(values).sort(compareFn);
            const actual = Array.from(filled.sorted());
            expect(actual).to.eql(expected);
        });
    });
    describe('#[Symbol.iterator]()', function () {
        it('Should work when empty', function () {
            expect(Array.from(empty)).to.eql([]);
        });
        it('Should work with single value', function () {
            empty.add(12);
            expect(Array.from(empty)).to.eql([12]);
        });
        it('Should return iterable on all elements', function () {
            const expected = Array.from(values).sort(compareFn);
            const actual = Array.from(filled).sort(compareFn);
            expect(actual).to.eql(expected);
        });
    });
    describe('#update()', function () {
        it('Should return false when empty', function () {
            expect(empty.update(1, 2)).to.equal(false);
            expect(empty.size).to.equal(0);
        });
        it('Should return false when not found', function () {
            expect(filled.update(-99, 12)).to.equal(false);
            expect(filled.size).to.equal(values.length);
        });
        it('Should return true if found', function () {
            for (let i = 0; i < values.length; ++i) {
                expect(filled.update(values[i], updatedValues[i])).to.equal(true);
            }
        });
        it('Should not modify size', function () {
            for (let i = 0; i < values.length; ++i) {
                filled.update(values[i], updatedValues[i]);
                expect(filled.size).to.equal(values.length);
            }
        });
        it('Should update tree', function () {
            empty.add(5);
            empty.update(5, 7);
            expect(empty.min()).to.equal(7);
            expect(empty.size).to.equal(1);
            empty.update(7, 2);
            expect(empty.min()).to.equal(2);
            expect(empty.size).to.equal(1);
            empty.add(12);
            expect(empty.min()).to.equal(2);
            expect(empty.size).to.equal(2);
            empty.update(12, 1);
            expect(empty.min()).to.equal(1);
            expect(empty.size).to.equal(2);
        });
        it('Should not break tree', function () {
            const vals = Array.from(values);
            for (let i = 0; i < vals.length; ++i) {
                expect(filled.update(vals[i], updatedValues[i])).to.equal(true);
                expect(filled.size).to.equal(vals.length);
                vals[i] = updatedValues[i];
                const sorted = Array.from(vals).sort((a, b) => compareFn(b, a));
                for (const v of filled.sorted()) {
                    expect(v).to.equal(sorted.pop());
                }
            }
        });
    });
});