import { expect } from 'chai';
import { pad } from 'src/collection/stringUtils';

describe('StringUtils unit tests', function () {
    describe('#always()', function () {
        it('Should not pad if length already reached', function () {
            let str = '123456789';
            expect(pad(str, 5, '0')).to.equal(str);
            expect(pad(str, str.length, '0')).to.equal(str);
        });
        it('Should pad an even length string until length is reached', function () {
            let str = 'fo';
            expect(pad(str, 3, '-')).to.equal('fo-');
            expect(pad(str, 4, '-')).to.equal('-fo-');
            expect(pad(str, 3, '[]')).to.equal('fo[');
            expect(pad(str, 4, '[]')).to.equal('[fo[');
            expect(pad(str, 5, '[]')).to.equal('[fo[]');
            expect(pad(str, 6, '[]')).to.equal('[]fo[]');
            expect(pad(str, 3, '[-]')).to.equal('fo[');
            expect(pad(str, 4, '[-]')).to.equal('[fo[');
            expect(pad(str, 5, '[-]')).to.equal('[fo[-');
            expect(pad(str, 6, '[-]')).to.equal('[-fo[-');
            expect(pad(str, 7, '[-]')).to.equal('[-fo[-]');
            expect(pad(str, 8, '[-]')).to.equal('[-]fo[-]');
        });
        it('Should pad an odd length string until length is reached', function () {
            let str = 'foo';
            expect(pad(str, 4, '-')).to.equal('foo-');
            expect(pad(str, 5, '-')).to.equal('-foo-');
            expect(pad(str, 4, '[]')).to.equal('foo[');
            expect(pad(str, 5, '[]')).to.equal('[foo[');
            expect(pad(str, 6, '[]')).to.equal('[foo[]');
            expect(pad(str, 7, '[]')).to.equal('[]foo[]');
            expect(pad(str, 4, '[-]')).to.equal('foo[');
            expect(pad(str, 5, '[-]')).to.equal('[foo[');
            expect(pad(str, 6, '[-]')).to.equal('[foo[-');
            expect(pad(str, 7, '[-]')).to.equal('[-foo[-');
            expect(pad(str, 8, '[-]')).to.equal('[-foo[-]');
            expect(pad(str, 9, '[-]')).to.equal('[-]foo[-]');
        });
        it('Should repeat padding until length is reached', function () {
            let str = 'fo';
            expect(pad(str, 12, '-')).to.equal('-----fo-----');
            expect(pad(str, 12, '[]')).to.equal('[][][fo[][][');
            expect(pad(str, 12, '[-]')).to.equal('[-][-fo[-][-');
            str = 'foo';
            expect(pad(str, 6, '-')).to.equal('-foo--');
            expect(pad(str, 7, '-')).to.equal('--foo--');
            expect(pad(str, 8, '-')).to.equal('--foo---');
            expect(pad(str, 9, '-')).to.equal('---foo---');
            expect(pad(str, 8, '[]')).to.equal('[]foo[][');
            expect(pad(str, 9, '[]')).to.equal('[][foo[][');
            expect(pad(str, 10, '[]')).to.equal('[][foo[][]');
            expect(pad(str, 11, '[]')).to.equal('[][]foo[][]');
            expect(pad(str, 12, '[]')).to.equal('[][]foo[][][');
            expect(pad(str, 10, '[-]')).to.equal('[-]foo[-][');
            expect(pad(str, 11, '[-]')).to.equal('[-][foo[-][');
            expect(pad(str, 12, '[-]')).to.equal('[-][foo[-][-');
            expect(pad(str, 13, '[-]')).to.equal('[-][-foo[-][-');
            expect(pad(str, 14, '[-]')).to.equal('[-][-foo[-][-]');
            expect(pad(str, 15, '[-]')).to.equal('[-][-]foo[-][-]');
            expect(pad(str, 16, '[-]')).to.equal('[-][-]foo[-][-][');
        });
    });
});