import { expect } from 'chai';
import 'mocha';

import { disemvowelTrolls } from '../kyu7/DisemvowelTrolls';
import { sumOddNumbers } from '../kyu7/SumOfOddNumbers';

describe('7 kyu', function() {
    it('Disemvowel Trolls', function() {
        expect(disemvowelTrolls('This website is for losers LOL!')).to.equal('Ths wbst s fr lsrs LL!');
    });

    it('Sum of Odd Numbers', function () {
        expect(sumOddNumbers(2)).to.equal(8);
        expect(sumOddNumbers(13)).to.equal(2197);
        expect(sumOddNumbers(19)).to.equal(6859);
        expect(sumOddNumbers(41)).to.equal(68921);
        expect(sumOddNumbers(86)).to.equal(636056);
    });
});
