import { expect } from 'chai';
import { isArray, isTypedArray, splice } from 'src/utils/arrayUtils';

describe('ArrayUtils unit tests', function () {
    const types = [
        BigInt64Array,
        BigUint64Array,
        Float32Array,
        Float64Array,
        Int8Array,
        Int32Array,
        Uint8Array,
        Uint32Array,
    ];
    describe('#isArray()', function () {
        it('Should return false if not an array', function () {
            expect(isArray(1)).to.equal(false);
            expect(isArray(true)).to.equal(false);
            expect(isArray('str')).to.equal(false);
            expect(isArray({ 0: 1 })).to.equal(false);
            expect(
                isArray(function foo() {
                    return [];
                }),
            ).to.equal(false);
        });
        it('Should return true if an array', function () {
            expect(isArray([])).to.equal(true);
            expect(isArray(['foo'])).to.equal(true);
            expect(isArray([])).to.equal(true);
            for (const type of types) {
                expect(isArray(new type())).to.equal(true);
            }
        });
    });
    describe('#isTypedArray()', function () {
        it('Should return false if not a typed array', function () {
            expect(isTypedArray(1)).to.equal(false);
            expect(isTypedArray(true)).to.equal(false);
            expect(isTypedArray('str')).to.equal(false);
            expect(isTypedArray({ 0: 1 })).to.equal(false);
            expect(
                isTypedArray(function foo() {
                    return [];
                }),
            ).to.equal(false);
            expect(isTypedArray([])).to.equal(false);
            expect(isTypedArray(['foo'])).to.equal(false);
            expect(isTypedArray([])).to.equal(false);
        });
        it('Should return true if a typed array', function () {
            for (const type of types) {
                expect(isTypedArray(new type())).to.equal(true);
            }
        });
    });
    describe('#splice()', function () {
        it('TODO');
    });
});
