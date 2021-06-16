import { expect } from 'chai';
import { isCollection } from 'src/collection/index';

describe('collection unit tests', function () {
    describe('#isCollection()', function () {
        it('Should return false for undefined', function () {
            expect(isCollection(undefined)).to.equal(false);
        });
        it('Should return false for null', function () {
            expect(isCollection(null)).to.equal(false);
        });
        it('Should return false if no `size` property', function () {
            expect(isCollection({})).to.equal(false);
            expect(isCollection([])).to.equal(false);
        });
        it('Should return false if size property is not correct type', function () {
            expect(isCollection({ size: 'd' })).to.equal(false);
            expect(isCollection({ size: {} })).to.equal(false);
            expect(isCollection({ size: false })).to.equal(false);
        });
        it('Should return false if not an iterable', function () {
            expect(isCollection(true)).to.equal(false);
            expect(isCollection(12)).to.equal(false);
            expect(isCollection({ size: 12 })).to.equal(false);
        });
        it('Should return true if a Collection', function () {
            expect(isCollection({ size: 0, [Symbol.iterator]: () => undefined })).to.equal(true);
        });
    });
});
