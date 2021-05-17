import { expect } from 'chai';
import { randomFill } from 'crypto';
import { InOrderSegmentTree } from 'src/segmentTree/inOrderSegmentTree';

describe('InOrderSegmentTree unit tests', function () {
    let empty: InOrderSegmentTree<number>;
    let filled: InOrderSegmentTree<number>;

    const values = new Uint32Array(36);
    const updatedValues = new Uint32Array(36);

    // eslint-disable-next-line
    randomFill(values, (_) => {});
    // eslint-disable-next-line
    randomFill(updatedValues, (_) => {});

    function permutate(tree: InOrderSegmentTree<number>, vals: ArrayLike<number>) {
        for (let size = 1; size <= tree.size; ++size) {
            let max = 0;
            let min = 0;
            let sum = 0;

            try {
                do {
                    sum += vals[max++];
                } while (max < size);
                expect(tree.query(min, max)).to.equal(sum);

                while (max < tree.size) {
                    sum -= vals[min++];
                    sum += vals[max++];
                    expect(tree.query(min, max)).to.equal(sum);
                }
            } catch (error) {
                // console.error(`...`);
                throw error;
            }
        }
    }

    beforeEach(function () {
        empty = new InOrderSegmentTree((a, b) => a + b);
        filled = new InOrderSegmentTree((a, b) => a + b, values);
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
    describe('#pop()', function () {
        it('Should return `undefined` when empty', function () {
            expect(empty.pop()).to.equal(undefined);
            expect(empty.pop()).to.equal(undefined);
        });
        it('Should remove the last value', function () {
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
        it('Should not break aggregation after removal', async function () {
            while (filled.size > 0) {
                filled.pop();
                permutate(filled, values);
            }
        });
        it('Should not break aggregation when re-adding', async function () {
            while (filled.size > 0) {
                filled.pop();
            }
            for (const value of values) {
                filled.push(value);
                permutate(filled, values);
            }
        });
    });
    describe('#push()', function () {
        it('Should add values to the end of the list', function () {
            let vals = [];
            vals.push(1);
            empty.push(1);
            expect(Array.from(empty)).to.eql(vals);
            vals.push(2);
            empty.push(2);
            expect(Array.from(empty)).to.eql(vals);
            vals.push(3);
            empty.push(3);
            expect(Array.from(empty)).to.eql(vals);
            vals = Array.from(values);
            vals.push(1);
            filled.push(1);
            expect(Array.from(filled)).to.eql(vals);
            vals.push(2);
            filled.push(2);
            expect(Array.from(filled)).to.eql(vals);
            vals.push(3);
            filled.push(3);
            expect(Array.from(filled)).to.eql(vals);
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
        it('Should not break aggregation', async function () {
            for (const value of values) {
                empty.push(value);
                permutate(empty, values);
            }
        });
    });
    describe('#query()', function () {
        it('Should throw error when querying an empty tree', function () {
            expect(() => empty.query(0, 0)).to.throw(RangeError);
        });
        it('Should throw error when querying below the actual range', function () {
            empty.push(12);
            expect(() => empty.query(-10, -5)).to.throw(RangeError);
            expect(() => empty.query(-5, 1)).to.throw(RangeError);
            expect(() => empty.query(-5, 5)).to.throw(RangeError);
        });
        it('Should throw error when querying after the actual range', function () {
            empty.push(12);
            expect(() => empty.query(5, 10)).to.throw(RangeError);
            expect(() => empty.query(0, 5)).to.throw(RangeError);
            expect(() => empty.query(-5, 5)).to.throw(RangeError);
        });
        it('Should throw error when querying an empty range', function () {
            empty.push(12);
            expect(() => empty.query(0, 0)).to.throw(RangeError);
        });
        it('Should return the queried value', function () {
            empty.push(12);
            expect(empty.query(0, 1)).to.equal(12);
        });
        it('Should return the value when querying for a range of size 1', function () {
            for (let i = 0; i < filled.size; ++i) {
                expect(filled.query(i, i + 1)).to.equal(values[i]);
            }
        });
        it('Should return aggregated values when querying for ranges of size > 1', async function () {
            permutate(filled, values);
        });
    });
    describe('#size', function () {
        it('Should show 0 when empty', function () {
            expect(empty.size).to.equal(0);
        });
        it('Should show 1 when value is added', function () {
            empty.push(12);
            expect(empty.size).to.equal(1);
        });
        it('Should show correct size when adding values', function () {
            empty.push(1);
            expect(empty.size).to.equal(1);
            empty.push(1);
            expect(empty.size).to.equal(2);
            empty.push(1);
            expect(empty.size).to.equal(3);
        });
        it('Should show 0 if popping when empty', function () {
            empty.pop();
            expect(empty.size).to.equal(0);
        });
        it('Should show 0 when value is removed', function () {
            empty.push(12);
            empty.pop();
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
        });
    });
    describe('#[Symbol.iterator]()', function () {
        it('Should return the tree values', function () {
            expect(Array.from(filled)).to.eql(Array.from(values));
        });
    });
    describe('#update()', function () {
        it('Should work when empty', function () {
            expect(() => empty.update(0, 0, (v) => v)).to.not.throw(RangeError);
        });
        it('Should work with empty range', function () {
            expect(() => filled.update(5, 5, (v) => v)).to.not.throw(RangeError);
            expect(() => filled.update(5, 0, (v) => v)).to.not.throw(RangeError);
        });
        it('Should throw error when querying below the actual range', function () {
            expect(() => filled.update(-10, -5, (v) => v)).to.throw(RangeError);
            expect(() => filled.update(-5, 0, (v) => v)).to.throw(RangeError);
            expect(() => filled.update(-5, 5, (v) => v)).to.throw(RangeError);
        });
        it('Should throw error when querying after the actual range', function () {
            empty.push(12);
            expect(() => empty.update(5, 10, (v) => v)).to.throw(RangeError);
            expect(() => empty.update(1, 5, (v) => v)).to.throw(RangeError);
            expect(() => empty.update(0, 5, (v) => v)).to.throw(RangeError);
            expect(() => empty.update(-5, 5, (v) => v)).to.throw(RangeError);
        });
        it('Should correctly update a tree', async function () {
            this.timeout(0);
            for (let size = 1; size <= values.length; ++size) {
                let max = size;
                for (let min = 0; max <= values.length; ++min, ++max) {
                    const tree = new InOrderSegmentTree((a, b) => a + b, values);
                    const vals = Array.from(values);
                    for (let i = min; i < max; ++i) {
                        vals[i] = updatedValues[i];
                    }
                    tree.update(min, max, (_, i) => vals[i]);
                    permutate(tree, vals);
                }
            }
        });
    });
});
