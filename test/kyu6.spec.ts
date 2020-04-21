import { expect } from 'chai';
import 'mocha';

import { duplicateEncode } from "../kyu6/DuplicateEncoder";


describe('6 kyu', function() {
    it('Duplicate Encoder', function() {
        expect(duplicateEncode('din')).to.equal('(((');
        expect(duplicateEncode('recede')).to.equal('()()()');
        expect(duplicateEncode('Success')).to.equal(')())())');
        expect(duplicateEncode('(( @')).to.equal('))((');
        expect(duplicateEncode('uRRbFORmHR@GRnRRR')).to.equal('())((()(()(()()))');
    });
});
