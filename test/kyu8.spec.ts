import { expect } from 'chai';
import 'mocha';

import { stringToNumber } from '../kyu8/ConvertStringToNumber';
import { isUpperCase } from '../kyu8/IsStringUppercase';
import { makeNegative } from '../kyu8/ReturnNegative';
import { toAlternatingCase } from '../kyu8/AlternatingCase';

describe('8 kyu', function() {
    it('Convert string to number', function() {
        expect(stringToNumber('12435')).to.equal(12435);
        expect(stringToNumber('605')).to.equal(605);
        expect(stringToNumber('1405')).to.equal(1405);
        expect(stringToNumber('-7')).to.equal(-7);
    });

    it('Is string uppercase?', function() {
        expect(isUpperCase('c')).to.equal(false);
        expect(isUpperCase('HELLO I AM DONALD')).to.equal(true);
        expect(isUpperCase('ACSKLDFJSGSKLDFJSKLDFJ')).to.equal(true);
        expect(isUpperCase('hello I AM DONALD')).to.equal(false);
    });

    it('Return Negative', function () {
        expect(makeNegative(5452)).to.equal(-5452);
        expect(makeNegative(-34)).to.equal(-34);
        expect(makeNegative(0)).to.equal(0);
    });

    it('Alternating Case', function () {
        expect(toAlternatingCase('hello world')).to.equal('HELLO WORLD');
        expect(toAlternatingCase('HeLLo WoRLD')).to.equal('hEllO wOrld');
        expect(toAlternatingCase('1a2b3c4d5e')).to.equal('1A2B3C4D5E');
    });
});
