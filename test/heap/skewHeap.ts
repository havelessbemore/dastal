import { expect } from 'chai';
import { randomFill, randomInt } from 'crypto';
import { BinaryHeap } from 'src/heap';
import { SkewHeap } from 'src/heap/skewHeap';

describe('SkewHeap unit tests', function () {
    const compareFn = (a: number, b: number) => a - b;
    let empty: SkewHeap<number>;
    let filled: SkewHeap<number>;
    const values = new Uint32Array(36);
    const updatedValues = new Uint32Array(36);

    // eslint-disable-next-line
    randomFill(values, (_) => {});
    // eslint-disable-next-line
    randomFill(updatedValues, (_) => {});

    beforeEach(function () {
        empty = new SkewHeap(compareFn);
        filled = new SkewHeap(compareFn, values);
    });

    describe('#addAll()', function () {
        it('Should work when empty', function () {
            expect(empty.addAll([3, 2, 1])).to.equal(3);
            expect(empty.peek()).to.equal(1);
            expect(empty.size).to.equal(3);
        });
        it('Should work when not empty', function () {
            expect(filled.addAll([-1, -2, -3])).to.equal(values.length + 3);
            expect(filled.peek()).to.equal(-3);
            expect(filled.size).to.equal(values.length + 3);
        });
        it('Should not break heap', function () {
            for (let i = 0; i <= values.length; ++i) {
                const arr1 = Array.from(values.slice(0, i));
                for (let j = 0; j <= updatedValues.length; ++j) {
                    const arr2 = Array.from(updatedValues.slice(0, j));
                    const heap = new SkewHeap(compareFn, arr1);
                    expect(heap.size).to.equal(arr1.length);
                    expect(heap.addAll(arr2)).to.equal(i + j);
                    const sorted = arr1.concat(arr2);
                    sorted.sort((a, b) => compareFn(b, a));
                    expect(heap.size).to.equal(sorted.length);
                    for (let k = i + j - 1; k >= 0; --k) {
                        expect(heap.pop()).to.equal(sorted[k]);
                        expect(heap.size).to.equal(k);
                    }
                }
            }
        });
    });
    describe('#clear()', function () {
        it('Should clear when empty', function () {
            empty.clear();
            expect(empty.size).to.equal(0);
            expect(Array.from(empty.dump())).to.eql([]);
        });
        it('Should clear when not empty', function () {
            filled.clear();
            expect(filled.size).to.equal(0);
            expect(Array.from(filled.dump())).to.eql([]);
        });
        it('Should clear added value', function () {
            empty.push(12);
            empty.clear();
            expect(empty.size).to.equal(0);
            expect(Array.from(empty.dump())).to.eql([]);
        });
        it('Should clear added values', function () {
            empty.push(1);
            empty.push(2);
            empty.push(3);
            empty.clear();
            expect(empty.size).to.equal(0);
            expect(Array.from(empty.dump())).to.eql([]);
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
            expect(empty.peek()).to.equal(undefined);
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
                expect(filled.delete(values[i])).to.equal(true);
                expect(filled.size).to.equal(i);
            }
        });
        it('Should update heap', function () {
            empty.addAll([20, 15, 10, 5]);
            empty.delete(10);
            expect(empty.peek()).to.equal(5);
            expect(empty.size).to.equal(3);
            empty.delete(5);
            expect(empty.peek()).to.equal(15);
            expect(empty.size).to.equal(2);
            empty.delete(20);
            expect(empty.peek()).to.equal(15);
            expect(empty.size).to.equal(1);
            empty.delete(15);
            expect(empty.peek()).to.equal(undefined);
            expect(empty.size).to.equal(0);
        });
        it('Should not break heap', function () {
            const vals = Array.from(values);
            for (let i = vals.length - 1; i >= 0; --i) {
                const heap = new SkewHeap(compareFn, vals);
                const val = vals.splice(randomInt(vals.length), 1)[0];
                expect(heap.delete(val)).to.equal(true);
                expect(heap.size).to.equal(vals.length);
                const sorted = Array.from(vals).sort((a, b) => compareFn(b, a));
                while (heap.size > 0) {
                    expect(heap.pop()).to.equal(sorted.pop());
                }
            }
        });
    });
    describe('#dump()', function () {
        it('Should work when empty', function () {
            expect(Array.from(empty.dump())).to.eql([]);
        });
        it('Should work with single value', function () {
            empty.push(12);
            expect(Array.from(empty.dump())).to.eql([12]);
        });
        it('Should return iterable on all elements', function () {
            const expected = Array.from(values).sort(compareFn);
            const actual = Array.from(filled.dump()).sort(compareFn);
            expect(actual).to.eql(expected);
        });
    });
    describe('#merge()', function () {
        it('Should work when empty', function () {
            expect(empty.merge(filled)).to.equal(empty);
            expect(empty.peek()).to.equal(filled.peek());
            expect(empty.size).to.equal(filled.size);
        });
        it('Should work when not empty', function () {
            const heap = new SkewHeap(compareFn, filled.dump());
            expect(filled.merge(heap)).to.equal(filled);
            expect(filled.peek()).to.equal(filled.peek());
            expect(filled.size).to.equal(2 * heap.size);
        });
        it('Should work with BinaryHeap', function () {
            for (let i = 0; i <= values.length; ++i) {
                const arr1 = Array.from(values.slice(0, i));
                for (let j = 0; j <= updatedValues.length; ++j) {
                    const arr2 = Array.from(updatedValues.slice(0, j));
                    const heap = new BinaryHeap(compareFn, arr1);
                    expect(heap.size).to.equal(arr1.length);
                    expect(heap.merge(new BinaryHeap(compareFn, arr2))).to.equal(heap);
                    expect(heap.size).to.equal(i + j);
                    const sorted = arr1.concat(arr2);
                    sorted.sort((a, b) => compareFn(b, a));
                    expect(heap.size).to.equal(sorted.length);
                    for (let k = i + j - 1; k >= 0; --k) {
                        expect(heap.pop()).to.equal(sorted[k]);
                        expect(heap.size).to.equal(k);
                    }
                }
            }
        });
        it('Should work with SkewHeap', function () {
            for (let i = 0; i <= values.length; ++i) {
                const arr1 = Array.from(values.slice(0, i));
                for (let j = 0; j <= updatedValues.length; ++j) {
                    const arr2 = Array.from(updatedValues.slice(0, j));
                    const heap = new SkewHeap(compareFn, arr1);
                    expect(heap.size).to.equal(arr1.length);
                    expect(heap.merge(new SkewHeap(compareFn, arr2))).to.equal(heap);
                    expect(heap.size).to.equal(i + j);
                    const sorted = arr1.concat(arr2);
                    sorted.sort((a, b) => compareFn(b, a));
                    expect(heap.size).to.equal(sorted.length);
                    for (let k = i + j - 1; k >= 0; --k) {
                        expect(heap.pop()).to.equal(sorted[k]);
                        expect(heap.size).to.equal(k);
                    }
                }
            }
        });
        it('Should work with generic heap', async function () {
            this.timeout(60000);
            for (let i = 0; i <= values.length; ++i) {
                const arr1 = Array.from(values.slice(0, i));
                for (let j = 0; j <= updatedValues.length; ++j) {
                    const arr2 = Array.from(updatedValues.slice(0, j));
                    const heap = new BinaryHeap(compareFn, arr1);
                    expect(heap.size).to.equal(arr1.length);
                    const heap2 = { size: arr2.length, dump: () => arr2 } as any;
                    expect(heap.merge(heap2)).to.equal(heap);
                    expect(heap.size).to.equal(i + j);
                    const sorted = arr1.concat(arr2);
                    sorted.sort((a, b) => compareFn(b, a));
                    expect(heap.size).to.equal(sorted.length);
                    for (let k = i + j - 1; k >= 0; --k) {
                        expect(heap.pop()).to.equal(sorted[k]);
                        expect(heap.size).to.equal(k);
                    }
                }
            }
        });
    });
    describe('#peek()', function () {
        it('Should return `undefined` when empty', function () {
            expect(empty.peek()).to.equal(undefined);
            expect(empty.peek()).to.equal(undefined);
        });
        it('Should return the added value', function () {
            empty.push(12);
            expect(empty.peek()).to.equal(12);
        });
        it('Should return the smallest value', function () {
            empty.push(1);
            empty.push(2);
            expect(empty.peek()).to.equal(1);
        });
        it('Should return the smallest values as heap grows', function () {
            for (let i = 0; i < values.length; ++i) {
                const vals = Array.from(values.slice(0, i + 1)).sort(compareFn);
                empty.push(values[i]);
                expect(empty.peek()).to.equal(vals[0]);
            }
        });
        it('Should return the smallest values as heap shrinks', function () {
            const vals = Array.from(values).sort((a, b) => compareFn(b, a));
            for (let i = values.length; i > 0; --i) {
                expect(filled.peek()).to.equal(vals[i - 1]);
                filled.pop();
                vals.pop();
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
            empty.push(12);
            expect(empty.size).to.equal(1);
            expect(empty.pop()).to.equal(12);
            expect(empty.size).to.equal(0);
            expect(empty.pop()).to.equal(undefined);
            expect(empty.size).to.equal(0);
        });
        it('Should return the smallest values', function () {
            empty.push(1);
            empty.push(2);
            expect(empty.size).to.equal(2);
            expect(empty.pop()).to.equal(1);
            expect(empty.size).to.equal(1);
            expect(empty.pop()).to.equal(2);
            expect(empty.size).to.equal(0);
        });
        it('Should return the smallest values as heap shrinks', function () {
            const vals = Array.from(values).sort((a, b) => compareFn(b, a));
            for (let i = values.length; i > 0; vals.pop()) {
                expect(filled.pop()).to.equal(vals[--i]);
                expect(filled.size).to.equal(i);
            }
        });
    });
    describe('#push()', function () {
        it('Should work when empty', function () {
            expect(empty.push(1)).to.equal(1);
            expect(empty.peek()).to.equal(1);
            expect(empty.size).to.equal(1);
        });
        it('Should add the value to the list', function () {
            expect(empty.push(12)).to.equal(1);
            expect(empty.peek()).to.equal(12);
            expect(empty.size).to.equal(1);
        });
        it('Should return the smallest values', function () {
            expect(empty.push(1)).to.equal(1);
            expect(empty.peek()).to.equal(1);
            expect(empty.size).to.equal(1);
            expect(empty.push(2)).to.equal(2);
            expect(empty.peek()).to.equal(1);
            expect(empty.size).to.equal(2);
        });
        it('Should return the smallest values as heap grows', function () {
            for (let i = 1; i <= values.length; ++i) {
                const vals = Array.from(values.slice(0, i)).sort(compareFn);
                expect(empty.push(values[i - 1])).to.equal(i);
                expect(empty.peek()).to.equal(vals[0]);
                expect(empty.size).to.equal(i);
            }
        });
        it('Should not break heap', function () {
            const vals: number[] = [];
            for (let i = 0; i < values.length; ++i) {
                const heap = new SkewHeap(compareFn, vals);
                heap.push(values[i]);
                vals.push(values[i]);
                const sorted = Array.from(vals).sort((a, b) => compareFn(b, a));
                for (let j = i; j >= 0; --j) {
                    expect(heap.pop()).to.equal(sorted[j]);
                    expect(heap.size).to.equal(j);
                }
            }
        });
    });
    describe('#pushPop()', function () {
        it('Should work when empty', function () {
            expect(empty.pushPop(1)).to.equal(1);
            expect(empty.peek()).to.equal(undefined);
            expect(empty.size).to.equal(0);
        });
        it('Should return the smallest value', function () {
            empty.push(12);
            expect(empty.pushPop(1)).to.equal(1);
            expect(empty.peek()).to.equal(12);
            expect(empty.size).to.equal(1);
            expect(empty.pushPop(15)).to.equal(12);
            expect(empty.peek()).to.equal(15);
            expect(empty.size).to.equal(1);
        });
        it('Should not modify heap size', function () {
            const sorted = Array.from(values).sort(compareFn);
            expect(filled.pushPop(-12)).to.equal(-12);
            expect(filled.peek()).to.equal(sorted[0]);
            expect(filled.size).to.equal(values.length);
            expect(filled.pushPop(sorted[0] + 1)).to.equal(sorted[0]);
            expect(filled.peek()).to.equal(sorted[0] + 1);
            expect(filled.size).to.equal(values.length);
        });
        it('Should always return the smallest value', function () {
            const vals = Array.from(values);
            for (let i = 0; i < updatedValues.length; ++i) {
                vals.push(updatedValues[i]);
                vals.sort((a, b) => compareFn(b, a));
                const expected = vals.pop();
                expect(filled.pushPop(updatedValues[i])).to.equal(expected);
                expect(filled.peek()).to.equal(vals[vals.length - 1]);
                expect(filled.size).to.equal(vals.length);
            }
        });
        it('Should not break heap', function () {
            const vals = Array.from(values);
            for (let i = 0; i < updatedValues.length; ++i) {
                const heap = new SkewHeap(compareFn, vals);
                vals.push(updatedValues[i]);
                vals.sort((a, b) => compareFn(b, a));
                const expected = vals.pop();
                expect(heap.pushPop(updatedValues[i])).to.equal(expected);
                for (let j = vals.length - 1; j >= 0; --j) {
                    expect(heap.pop()).to.equal(vals[j]);
                    expect(heap.size).to.equal(j);
                }
            }
        });
    });
    describe('#replace()', function () {
        it('Should work when empty', function () {
            expect(empty.replace(1)).to.equal(undefined);
            expect(empty.peek()).to.equal(1);
            expect(empty.size).to.equal(1);
        });
        it('Should return the smallest value', function () {
            empty.push(12);
            expect(empty.replace(1)).to.equal(12);
            expect(empty.peek()).to.equal(1);
            expect(empty.size).to.equal(1);
            expect(empty.replace(15)).to.equal(1);
            expect(empty.peek()).to.equal(15);
            expect(empty.size).to.equal(1);
        });
        it('Should not modify heap size', function () {
            const sorted = Array.from(values).sort(compareFn);
            expect(filled.replace(-12)).to.equal(sorted[0]);
            expect(filled.peek()).to.equal(-12);
            expect(filled.size).to.equal(values.length);
            expect(filled.replace(sorted[0] + 1)).to.equal(-12);
            expect(filled.peek()).to.equal(sorted[0] + 1);
            expect(filled.size).to.equal(values.length);
        });
        it('Should always return the smallest value', function () {
            const vals = Array.from(values);
            for (let i = 0; i < updatedValues.length; ++i) {
                expect(filled.size).to.equal(vals.length);
                vals.sort((a, b) => compareFn(b, a));
                expect(filled.peek()).to.equal(vals[vals.length - 1]);
                const expected = vals.pop()!;
                expect(filled.replace(updatedValues[i])).to.equal(expected);
                vals.push(updatedValues[i]);
            }
        });
        it('Should not break heap', function () {
            const vals = Array.from(values).sort((a, b) => compareFn(b, a));
            for (let i = 0; i < updatedValues.length; ++i) {
                const heap = new SkewHeap(compareFn, vals);
                const expected = vals.pop()!;
                expect(heap.replace(updatedValues[i])).to.equal(expected);
                vals.push(updatedValues[i]);
                vals.sort((a, b) => compareFn(b, a));
                for (let j = vals.length - 1; j >= 0; --j) {
                    expect(heap.pop()).to.equal(vals[j]);
                    expect(heap.size).to.equal(j);
                }
            }
        });
    });
    describe('#size()', function () {
        it('Should be zero when empty', function () {
            expect(empty.size).to.equal(0);
        });
        it('Should be accurate', function () {
            for (let i = 1; i <= values.length; ++i) {
                expect(empty.push(values[i - 1])).to.equal(i);
                expect(empty.size).to.equal(i);
            }
        });
    });
    describe('#[Symbol.iterator]()', function () {
        it('Should work when empty', function () {
            expect(Array.from(empty)).to.eql([]);
        });
        it('Should work with single value', function () {
            empty.push(12);
            expect(Array.from(empty)).to.eql([12]);
        });
        it('Should return sorted iterable on all elements', function () {
            const expected = Array.from(values).sort(compareFn);
            const actual = Array.from(filled);
            expect(actual).to.eql(expected);
        });
    });
    describe('#update()', function () {
        it('Should return false when empty', function () {
            expect(empty.update(1, 2)).to.equal(false);
            expect(empty.peek()).to.equal(undefined);
            expect(empty.size).to.equal(0);
        });
        it('Should return false when not found', function () {
            expect(filled.update(-99, 12)).to.equal(false);
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
        it('Should update heap', function () {
            empty.push(5);
            empty.update(5, 7);
            expect(empty.peek()).to.equal(7);
            expect(empty.size).to.equal(1);
            empty.update(7, 2);
            expect(empty.peek()).to.equal(2);
            expect(empty.size).to.equal(1);
            empty.push(12);
            expect(empty.peek()).to.equal(2);
            expect(empty.size).to.equal(2);
            empty.update(12, 1);
            expect(empty.peek()).to.equal(1);
            expect(empty.size).to.equal(2);
        });
        it('Should not break heap', function () {
            const vals = Array.from(values);
            for (let i = 0; i < vals.length; ++i) {
                const heap = new SkewHeap(compareFn, vals);
                expect(heap.update(vals[i], updatedValues[i])).to.equal(true);
                expect(heap.size).to.equal(vals.length);
                vals[i] = updatedValues[i];
                const sorted = Array.from(vals).sort((a, b) => compareFn(b, a));
                for (let j = vals.length - 1; j >= 0; --j) {
                    expect(heap.pop()).to.equal(sorted.pop());
                    expect(heap.size).to.equal(j);
                }
            }
        });
    });
});
