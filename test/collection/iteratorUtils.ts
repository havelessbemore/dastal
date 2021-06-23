import { expect } from 'chai';
import { always, fill, first, join, never, once, skip, split } from 'src/utils/iteratorUtils';

describe('IteratorUtils unit tests', function () {
    describe('#always()', function () {
        it('Should return an infinite iterable', function () {
            let i = 0;
            const fn = () => ++i;
            const it = always(fn);
            while (i < 100) {
                const res = it.next();
                expect(res.done).to.equal(false);
                expect(res.value).to.equal(i);
            }
        });
    });
    describe('#fill()', function () {
        it('Should call a function a given amount of times', function () {
            const n = 10;
            let i = 0;
            const fn = () => ++i;
            for (const v of { [Symbol.iterator]: () => fill(n, fn) }) {
                expect(v).to.equal(i);
            }
            expect(i).to.equal(n);
        });
    });
    describe('#first()', function () {
        it('Should walk through a given amount of elements in an iterable', function () {
            let i = 0;
            const n = 100;
            const jump = 5;
            const fn = () => ++i;
            const it = always(fn);
            while (i < n) {
                const j = i;
                for (const v of { [Symbol.iterator]: () => first(jump, it) }) {
                    expect(v).to.equal(i);
                }
                expect(i).to.equal(j + jump);
            }
            expect(i).to.equal(n);
        });
        it('Should walk through an iterable until the end', function () {
            let i = 0;
            const n = 100;
            const jump = 17;
            const fn = () => ++i;
            const it = fill(n, fn);
            while (i + jump <= n) {
                const j = i;
                for (const v of { [Symbol.iterator]: () => first(jump, it) }) {
                    expect(v).to.equal(i);
                }
                expect(i).to.equal(j + jump);
            }
            if (i < n) {
                for (const v of { [Symbol.iterator]: () => first(jump, it) }) {
                    expect(v).to.equal(i);
                }
            }
            expect(i).to.equal(n);
        });
    });
    describe('#join()', function () {
        it('Should join multiple iterators together', function () {
            let i = 0;
            const n = 100;
            const fn = () => ++i;
            const iterators = [fill(20, fn), fill(55, fn), fill(25, fn)];
            const iterator = join(iterators[Symbol.iterator]());
            for (const v of { [Symbol.iterator]: () => iterator }) {
                expect(v).to.equal(i);
            }
            expect(i).to.equal(n);
            const res = iterator.next();
            expect(res.done).to.equal(true);
            expect(res.value).to.equal(undefined);
        });
    });
    describe('#never()', function () {
        it('Should return an empty iterable', function () {
            const res = never().next();
            expect(res.done).to.equal(true);
            expect(res.value).to.equal(undefined);
        });
    });
    describe('#once()', function () {
        it('Should return an iterable of size 1', function () {
            let i = 0;
            const fn = () => ++i;
            for (const v of { [Symbol.iterator]: () => once(fn) }) {
                expect(v).to.equal(i);
            }
            expect(i).to.equal(1);
        });
    });
    describe('#skip()', function () {
        it('Should skip a fixed amount', function () {
            let i = 0;
            const n = 100;
            const jump = 5;
            const fn = () => ++i;
            const it = always(fn);
            while (i < n) {
                const j = i;
                const res = skip(jump, it).next();
                expect(res.done).to.equal(false);
                expect(res.value).to.equal(i);
                expect(i).to.equal(j + jump);
            }
            expect(i).to.equal(n);
        });
        it('Should skip until the end of the iterable', function () {
            let i = 0;
            const n = 100;
            const jump = 17;
            const fn = () => ++i;
            const it = fill(n, fn);
            while (i + jump <= n) {
                const j = i;
                const res = skip(jump, it).next();
                expect(res.done).to.equal(false);
                expect(res.value).to.equal(i);
                expect(i).to.equal(j + jump);
            }
            if (i < n) {
                const res = skip(jump, it).next();
                expect(res.done).to.equal(true);
                expect(res.value).to.equal(undefined);
            }
            expect(i).to.equal(n);
        });
    });
    describe('#split()', function () {
        it('Should return an empty iterator if amount < 0', function () {
            const iterators = split(
                -12,
                fill(10, () => 1),
            );
            const res = never().next();
            expect(res.done).to.equal(true);
            expect(res.value).to.equal(undefined);
        });
        it('Should return an empty iterator if amount = 0', function () {
            const iterators = split(
                0,
                fill(10, () => 1),
            );
            const res = never().next();
            expect(res.done).to.equal(true);
            expect(res.value).to.equal(undefined);
        });
        it('Should split an iterator to a given amount', function () {
            let i = 0;
            const n = 100;
            const jump = 17;
            const fn = () => ++i;
            const iterators = split(jump, fill(n, fn));
            while (i + jump <= n) {
                const j = i;
                const res = iterators.next();
                expect(res.done).to.equal(false);
                expect(res.value).to.not.equal(null);
                for (const v of { [Symbol.iterator]: () => res.value }) {
                    expect(v).to.equal(i);
                }
                expect(i).to.equal(j + jump);
            }
            if (i < n) {
                const res = iterators.next();
                expect(res.done).to.equal(false);
                expect(res.value).to.not.equal(null);
                for (const v of { [Symbol.iterator]: () => res.value }) {
                    expect(v).to.equal(i);
                }
            }
            expect(iterators.next().done).to.equal(true);
            expect(iterators.next().done).to.equal(true);
            expect(i).to.equal(n);
        });
    });
});
