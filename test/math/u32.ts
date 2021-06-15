import { expect } from 'chai';
import { invert, lsb, lsp, lsps, msb, msp, msps, bitsSet, reverse, u32 } from 'src/math/u32';

describe('math/bits unit tests', function () {
    const neg = [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13, -14, -15, -16];
    const pos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    describe('#bitsSet()', function () {
        const nVals = [32, 31, 31, 30, 31, 30, 30, 29, 31, 30, 30, 29, 30, 29, 29, 28];
        const pVals = [1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3, 2, 3, 3, 4, 1];
        it('Should work for "negative" values', function () {
            for (let i = 0; i < neg.length; ++i) {
                expect(bitsSet(neg[i])).to.equal(nVals[i]);
            }
        });
        it('Should work for zero', function () {
            expect(bitsSet(0)).to.equal(0);
        });
        it('Should work for positive values', function () {
            for (let i = 0; i < pos.length; ++i) {
                expect(bitsSet(pos[i])).to.equal(pVals[i]);
            }
        });
    });
    describe('#invert()', function () {
        const nVals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        const pVals = [0, 1, 0, 3, 2, 1, 0, 7, 6, 5, 4, 3, 2, 1, 0, 15];
        it('Should work for "negative" values', function () {
            for (let i = 0; i < neg.length; ++i) {
                expect(invert(neg[i])).to.equal(nVals[i]);
            }
        });
        it('Should work for zero', function () {
            expect(invert(0)).to.equal(4294967295);
        });
        it('Should work for positive values', function () {
            for (let i = 0; i < pos.length; ++i) {
                expect(invert(pos[i])).to.equal(pVals[i]);
            }
        });
    });
    describe('#lsb()', function () {
        const nVals = [0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4];
        const pVals = [0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4];
        it('Should work for "negative" values', function () {
            for (let i = 0; i < neg.length; ++i) {
                expect(lsb(neg[i])).to.equal(nVals[i]);
            }
        });
        it('Should work for zero', function () {
            expect(lsb(0)).to.equal(-1);
        });
        it('Should work for positive values', function () {
            for (let i = 0; i < pos.length; ++i) {
                expect(lsb(pos[i])).to.equal(pVals[i]);
            }
        });
    });
    describe('#lsp()', function () {
        const nVals = [1, 2, 1, 4, 1, 2, 1, 8, 1, 2, 1, 4, 1, 2, 1, 16];
        const pVals = [1, 2, 1, 4, 1, 2, 1, 8, 1, 2, 1, 4, 1, 2, 1, 16];
        it('Should work for "negative" values', function () {
            for (let i = 0; i < neg.length; ++i) {
                expect(lsp(neg[i])).to.equal(nVals[i]);
            }
        });
        it('Should work for zero', function () {
            expect(lsp(0)).to.equal(0);
        });
        it('Should work for positive values', function () {
            for (let i = 0; i < pos.length; ++i) {
                expect(lsp(pos[i])).to.equal(pVals[i]);
            }
        });
    });
    describe('#lsps()', function () {
        const p32 = 4294967296;
        const nVals = [
            p32 - 1,
            p32 - 2,
            1,
            p32 - 4,
            3,
            2,
            1,
            p32 - 8,
            7,
            6,
            1,
            4,
            3,
            2,
            1,
            p32 - 16,
        ];
        const pVals = [1, 2, 3, 4, 1, 6, 7, 8, 1, 2, 3, 12, 1, 14, 15, 16];
        it('Should work for "negative" values', function () {
            for (let i = 0; i < neg.length; ++i) {
                expect(lsps(neg[i])).to.equal(nVals[i]);
            }
        });
        it('Should work for zero', function () {
            expect(lsps(0)).to.equal(0);
        });
        it('Should work for positive values', function () {
            for (let i = 0; i < pos.length; ++i) {
                expect(lsps(pos[i])).to.equal(pVals[i]);
            }
        });
    });
    describe('#msb()', function () {
        const nVals = [31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31];
        const pVals = [0, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4];
        it('Should work for "negative" values', function () {
            for (let i = 0; i < neg.length; ++i) {
                expect(msb(neg[i])).to.equal(nVals[i]);
            }
        });
        it('Should work for zero', function () {
            expect(msb(0)).to.equal(-1);
        });
        it('Should work for positive values', function () {
            for (let i = 0; i < pos.length; ++i) {
                expect(msb(pos[i])).to.equal(pVals[i]);
            }
        });
    });
    describe('#msp()', function () {
        const p31 = 2147483648;
        const nVals = new Array(16).fill(p31);
        const pVals = [1, 2, 2, 4, 4, 4, 4, 8, 8, 8, 8, 8, 8, 8, 8, 16];
        it('Should work for "negative" values', function () {
            for (let i = 0; i < neg.length; ++i) {
                expect(msp(neg[i])).to.equal(nVals[i]);
            }
        });
        it('Should work for zero', function () {
            expect(msp(0)).to.equal(0);
        });
        it('Should work for positive values', function () {
            for (let i = 0; i < pos.length; ++i) {
                expect(msp(pos[i])).to.equal(pVals[i]);
            }
        });
    });
    describe('#msps()', function () {
        const p32 = 4294967296;
        const nVals = [1, 2, 4, 4, 8, 8, 8, 8, 16, 16, 16, 16, 16, 16, 16, 16].map((v) => p32 - v);
        const pVals = [1, 2, 3, 4, 4, 6, 7, 8, 8, 8, 8, 12, 12, 14, 15, 16];
        it('Should work for "negative" values', function () {
            for (let i = 0; i < neg.length; ++i) {
                expect(msps(neg[i])).to.equal(nVals[i]);
            }
        });
        it('Should work for zero', function () {
            expect(msps(0)).to.equal(0);
        });
        it('Should work for positive values', function () {
            for (let i = 0; i < pos.length; ++i) {
                expect(msps(pos[i])).to.equal(pVals[i]);
            }
        });
    });
    describe('#reverse()', function () {
        it('Should work for "negative" values', function () {
            for (let i = 0; i < neg.length; ++i) {
                const expected = (neg[i] >>> 0)
                    .toString(2)
                    .padStart(32, '0')
                    .split('')
                    .reverse()
                    .join('');
                const actual = reverse(neg[i]).toString(2).padStart(32, '0');
                expect(actual).to.equal(expected);
            }
        });
        it('Should work for zero', function () {
            expect(reverse(0)).to.equal(0);
        });
        it('Should work for positive values', function () {
            for (let i = 0; i < pos.length; ++i) {
                const expected = (pos[i] >>> 0)
                    .toString(2)
                    .padStart(32, '0')
                    .split('')
                    .reverse()
                    .join('');
                const actual = reverse(pos[i]).toString(2).padStart(32, '0');
                expect(actual).to.equal(expected);
            }
        });
    });
    describe('#u32()', function () {
        const p32 = 2 ** 32;
        const nVals = [
            p32 - 1,
            p32 - 2,
            p32 - 3,
            p32 - 4,
            p32 - 5,
            p32 - 6,
            p32 - 7,
            p32 - 8,
            p32 - 9,
            p32 - 10,
            p32 - 11,
            p32 - 12,
            p32 - 13,
            p32 - 14,
            p32 - 15,
            p32 - 16,
        ];
        const pVals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
        it('Should work for "negative" values', function () {
            for (let i = 0; i < neg.length; ++i) {
                expect(u32(neg[i])).to.equal(nVals[i]);
            }
        });
        it('Should work for zero', function () {
            expect(u32(0)).to.equal(0);
        });
        it('Should work for positive values', function () {
            for (let i = 0; i < pos.length; ++i) {
                expect(u32(pos[i])).to.equal(pVals[i]);
            }
        });
    });
});
