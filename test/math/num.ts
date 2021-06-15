import { expect } from 'chai';
import { clamp } from 'src/math/num';

describe('math/num unit tests', function () {
    describe('#clamp()', function () {
        it('Should return the given number if within [min, max]', function () {
            expect(clamp(-5, -10, 0)).to.equal(-5);
            expect(clamp(5, 0, 10)).to.equal(5);
        });
        it('Should return min if before [min, max]', function () {
            expect(clamp(-15, -10, 0)).to.equal(-10);
            expect(clamp(-5, 0, 10)).to.equal(0);
        });
        it('Should return min if equal to min', function () {
            expect(clamp(-10, -10, 0)).to.equal(-10);
            expect(clamp(0, 0, 10)).to.equal(0);
        });
        it('Should return max if equal to max', function () {
            expect(clamp(0, -10, 0)).to.equal(0);
            expect(clamp(10, 0, 10)).to.equal(10);
        });
        it('Should return max if after [min, max]', function () {
            expect(clamp(5, -10, 0)).to.equal(0);
            expect(clamp(15, 0, 10)).to.equal(10);
        });
    });
});
