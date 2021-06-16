import { expect } from 'chai';
import { clamp, wrap, wrapLeft, wrapRight } from 'src/math/numberUtils';

describe('numberUtils unit tests', function () {
    describe('#clamp()', function () {
        it('Should return min if < min', function () {
            expect(clamp(-150, -10, 0)).to.equal(-10);
            expect(clamp(-500, 0, 10)).to.equal(0);
        });
        it('Should return the given number if = min', function () {
            expect(clamp(-10, -10, 0)).to.equal(-10);
            expect(clamp(0, 0, 10)).to.equal(0);
        });
        it('Should return the given number if within [min, max]', function () {
            expect(clamp(-5, -10, 0)).to.equal(-5);
            expect(clamp(5, 0, 10)).to.equal(5);
        });
        it('Should return the given number if = max', function () {
            expect(clamp(0, -10, 0)).to.equal(0);
            expect(clamp(10, 0, 10)).to.equal(10);
        });
        it('Should return max if > max', function () {
            expect(clamp(500, -10, 0)).to.equal(0);
            expect(clamp(150, 0, 10)).to.equal(10);
        });
    });
    describe('#wrap()', function () {
        it('Should wrap around max if < min', function () {
            expect(wrap(-150, -10, 10)).to.equal(-130);
            expect(wrap(-500, 0, 10)).to.equal(-490);
        });
        it('Should return the given number if = min', function () {
            expect(wrap(-10, -10, 0)).to.equal(-10);
            expect(wrap(0, 0, 10)).to.equal(0);
        });
        it('Should return the given number if within [min, max]', function () {
            expect(wrap(-5, -10, 0)).to.equal(-5);
            expect(wrap(5, 0, 10)).to.equal(5);
        });
        it('Should return the given number if = max', function () {
            expect(wrap(0, -10, 0)).to.equal(0);
            expect(wrap(10, 0, 10)).to.equal(10);
        });
        it('Should wrap around min if > max', function () {
            expect(wrap(500, -10, 0)).to.equal(490);
            expect(wrap(150, -5, 10)).to.equal(135);
        });
    });
    describe('#wrapLeft()', function () {
        it('Should wrap around max if < min', function () {
            expect(wrapLeft(9, 10, 20)).to.equal(19);
            expect(wrapLeft(-500, 10, 20)).to.equal(-490);
        });
        it('Should return the given number if = min', function () {
            expect(wrapLeft(-10, -10, 0)).to.equal(-10);
            expect(wrapLeft(0, 0, 10)).to.equal(0);
        });
        it('Should return the given number if within [min, max]', function () {
            expect(wrapLeft(-5, -10, 0)).to.equal(-5);
            expect(wrapLeft(5, 0, 10)).to.equal(5);
        });
        it('Should return the given number if = max', function () {
            expect(wrapLeft(0, -10, 0)).to.equal(0);
            expect(wrapLeft(10, 0, 10)).to.equal(10);
        });
        it('Should return the given number if > max', function () {
            expect(wrapLeft(150, -10, 0)).to.equal(150);
            expect(wrapLeft(500, 0, 10)).to.equal(500);
        });
    });
    describe('#wrapRight()', function () {
        it('Should return the given number if < min', function () {
            expect(wrapRight(-150, -10, 0)).to.equal(-150);
            expect(wrapRight(-500, 0, 10)).to.equal(-500);
        });
        it('Should return the given number if = min', function () {
            expect(wrapRight(-10, -10, 0)).to.equal(-10);
            expect(wrapRight(0, 0, 10)).to.equal(0);
        });
        it('Should return the given number if within [min, max]', function () {
            expect(wrapRight(-5, -10, 0)).to.equal(-5);
            expect(wrapRight(5, 0, 10)).to.equal(5);
        });
        it('Should return the given number if = max', function () {
            expect(wrapRight(0, -10, 0)).to.equal(0);
            expect(wrapRight(10, 0, 10)).to.equal(10);
        });
        it('Should wrap around min if > max', function () {
            expect(wrapRight(500, -20, -10)).to.equal(490);
            expect(wrapRight(150, 10, 20)).to.equal(140);
        });
    });
});
