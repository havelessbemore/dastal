import { expect } from 'chai';
import { randomFill, randomInt } from 'crypto';
import { LinkedQueue } from 'src/queue/linkedQueue';

describe('LinkedQueue unit tests', function () {
    let empty: LinkedQueue<number>;
    let filled: LinkedQueue<number>;
    const values = new Uint32Array(36);

    // eslint-disable-next-line
    randomFill(values, (_) => {});

    beforeEach(function () {
        empty = new LinkedQueue();
        filled = new LinkedQueue(values);
    });
    describe('#clear()', function () {
        it('Should clear when empty', function () {
            empty.clear();
            expect(empty.size).to.equal(0);
            expect(empty.dequeue()).to.equal(undefined);
        });
        it('Should clear value', function () {
            empty.enqueue(12);
            empty.clear();
            expect(empty.size).to.equal(0);
            expect(empty.dequeue()).to.equal(undefined);
        });
        it('Should clear values', function () {
            empty.enqueue(1);
            empty.enqueue(2);
            empty.enqueue(3);
            empty.clear();
            expect(empty.size).to.equal(0);
            expect(empty.dequeue()).to.equal(undefined);
        });
    });
    describe('#dequeue()', function () {
        it('Should return `undefined` when empty', function () {
            expect(empty.dequeue()).to.equal(undefined);
            expect(empty.dequeue()).to.equal(undefined);
        });
        it('Should return the added value', function () {
            empty.enqueue(12);
            expect(empty.dequeue()).to.equal(12);
            expect(empty.dequeue()).to.equal(undefined);
        });
        it('Should return the oldest added value', function () {
            empty.enqueue(1);
            empty.enqueue(2);
            empty.enqueue(3);
            expect(empty.dequeue()).to.equal(1);
            expect(empty.dequeue()).to.equal(2);
            expect(empty.dequeue()).to.equal(3);
            expect(empty.dequeue()).to.equal(undefined);
            for (let i = 0; i < values.length; ++i) {
                expect(filled.dequeue()).to.equal(values[i]);
            }
        });
    });
    describe('#enqueue()', function () {
        it('Should add values to the end of the queue', function () {
            const vals: number[] = [];
            for (let n = 25; n > 0; --n) {
                const v = randomInt(1 << 30);
                vals.push(v);
                empty.enqueue(v);
                expect(Array.from(empty)).to.eql(vals);
            }
        });
        it('Should return the new length of the queue', function () {
            let size = 0;
            for (let n = 25; n > 0; --n) {
                empty.enqueue(99);
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
            empty.enqueue(12);
            expect(empty.peek()).to.equal(12);
        });
        it('Should return the first added value', function () {
            empty.enqueue(1);
            empty.enqueue(2);
            expect(empty.peek()).to.equal(1);
        });
        it('Should return the oldest added value', function () {
            empty.enqueue(1);
            empty.enqueue(2);
            empty.enqueue(3);
            expect(empty.peek()).to.equal(1);
            empty.dequeue();
            expect(empty.peek()).to.equal(2);
            empty.dequeue();
            expect(empty.peek()).to.equal(3);
            empty.dequeue();
            expect(empty.peek()).to.equal(undefined);
            for (let i = 0; i < values.length; ++i) {
                expect(filled.peek()).to.equal(values[i]);
                filled.dequeue();
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
            empty.enqueue(1);
            expect(empty.size).to.equal(1);
            empty.enqueue(1);
            expect(empty.size).to.equal(2);
            empty.enqueue(1);
            expect(empty.size).to.equal(3);
        });
        it('Should show 0 if popping when empty', function () {
            empty.dequeue();
            expect(empty.size).to.equal(0);
        });
        it('Should show 0 when value is removed', function () {
            empty.enqueue(12);
            empty.dequeue();
            expect(empty.size).to.equal(0);
        });
        it('Should show correct size when removing values', function () {
            empty.enqueue(1);
            empty.enqueue(1);
            empty.enqueue(1);
            empty.dequeue();
            expect(empty.size).to.equal(2);
            empty.dequeue();
            expect(empty.size).to.equal(1);
            empty.dequeue();
            expect(empty.size).to.equal(0);
            let n = values.length;
            while (n > 0) {
                filled.dequeue();
                expect(filled.size).to.equal(--n);
            }
        });
    });
    describe('#[Symbol.iterator]()', function () {
        it('Should return an array copy of the values', function () {
            const vals: number[] = [];
            expect(Array.from(empty)).to.eql(vals);
            for (let i = 0; i < values.length; ++i) {
                empty.enqueue((vals[i] = values[i]));
                expect(Array.from(empty)).to.eql(vals);
            }
        });
    });
});
