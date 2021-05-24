import { expect } from 'chai';
import { randomFill, randomInt } from 'crypto';
import { ArrayStack } from 'src/stack/arrayStack';

describe('ArrayStack unit tests', function () {
    let empty: ArrayStack<number>;
    let filled: ArrayStack<number>;
    const values = new Uint32Array(36);

    // eslint-disable-next-line
    randomFill(values, (_) => {});

    beforeEach(function () {
        empty = new ArrayStack();
        filled = new ArrayStack(values);
    });
    describe('#constructor()', function () {
        it('Should initialize an empty stack', function () {
            const stack = new ArrayStack();
            expect(stack.size).to.equal(0);
            expect(stack.peek()).to.equal(undefined);
        });
        it('Should initialize an empty stack if given empty array', function () {
            const stack = new ArrayStack([]);
            expect(stack.size).to.equal(0);
            expect(stack.peek()).to.equal(undefined);
        });
        it('Should initialize an empty stack if given empty iterable', function () {
            const it: Iterable<number> = {[Symbol.iterator]: () => ({next: () => ({done: true, value: undefined})})};
            const stack = new ArrayStack(it);
            expect(stack.size).to.equal(0);
            expect(stack.peek()).to.equal(undefined);
        });
        it('Should initialize a filled stack if given an array', function () {
            const stack = new ArrayStack(values);
            expect(stack.size).to.equal(values.length);
            const expected = Array.from(values).reverse();
            const actual = Array.from(stack);
            expect(actual).to.eql(expected);
        });
        it('Should initialize a filled stack if given an iterable', function () {
            const it: Iterable<number> = {[Symbol.iterator]: () => values[Symbol.iterator]()};
            const stack = new ArrayStack(values);
            expect(stack.size).to.equal(values.length);
            const expected = Array.from(values).reverse();
            const actual = Array.from(stack);
            expect(actual).to.eql(expected);
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
    describe('#pop()', function () {
        it('Should return `undefined` when empty', function () {
            expect(empty.pop()).to.equal(undefined);
            expect(empty.pop()).to.equal(undefined);
        });
        it('Should return the added value', function () {
            empty.push(12);
            expect(empty.pop()).to.equal(12);
            expect(empty.pop()).to.equal(undefined);
        });
        it('Should return the newest added value', function () {
            empty.push(1);
            empty.push(2);
            empty.push(3);
            expect(empty.pop()).to.equal(3);
            expect(empty.pop()).to.equal(2);
            expect(empty.pop()).to.equal(1);
            expect(empty.pop()).to.equal(undefined);
            for (let i = filled.size - 1; i >= 0; --i) {
                expect(filled.pop()).to.equal(values[i]);
            }
        });
    });
    describe('#push()', function () {
        it('Should add values to the top of the stack', function () {
            const vals: number[] = [];
            for (let n = 25; n > 0; --n) {
                const v = randomInt(1 << 30);
                vals.unshift(v);
                empty.push(v);
                expect(Array.from(empty)).to.eql(vals);
            }
        });
        it('Should return the new length of the stack', function () {
            let size = 0;
            for (let n = 25; n > 0; --n) {
                empty.push(99);
                expect(empty.size).to.eql(++size);
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
        it('Should return the last added value', function () {
            empty.push(1);
            empty.push(2);
            expect(empty.peek()).to.equal(2);
        });
        it('Should return the newest added value', function () {
            empty.push(1);
            empty.push(2);
            empty.push(3);
            expect(empty.peek()).to.equal(3);
            empty.pop();
            expect(empty.peek()).to.equal(2);
            empty.pop();
            expect(empty.peek()).to.equal(1);
            empty.pop();
            expect(empty.peek()).to.equal(undefined);
            for (let i = filled.size - 1; i >= 0; --i) {
                expect(filled.peek()).to.equal(values[i]);
                filled.pop();
            }
        });
    });
    describe('#size', function () {
        it('Should show 0 when empty', function () {
            expect(empty.size).to.equal(0);
        });
        it('Should stay the same when not inserting or removing elements', function () {
            filled.peek();
            expect(filled.size).to.equal(values.length);
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
            let n = values.length;
            while (n > 0) {
                filled.pop();
                expect(filled.size).to.equal(--n);
            }
        });
    });
    describe('#[Symbol.iterator]()', function () {
        it('Should return an array copy of the values', function () {
            const vals: number[] = [];
            expect(Array.from(empty)).to.eql(vals);
            for (let i = 0; i < values.length; ++i) {
                empty.push((vals[i] = values[i]));
                expect(Array.from(empty)).to.eql(Array.from(vals).reverse());
            }
        });
    });
});
