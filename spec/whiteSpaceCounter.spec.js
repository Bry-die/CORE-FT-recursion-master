const { expect } = require('chai');
const { whiteSpaceCounter } = require('../whiteSpaceCounter');

describe('whiteSpaceCounter', () => {
    it('returns a number', () => {
        expect(whiteSpaceCounter('string')).to.be.an('number');
    });
    it('when no white space return 0', () => {
        expect(whiteSpaceCounter('a')).to.equal(0);
    });
    it('single space returns 1', () => {
        expect(whiteSpaceCounter(' ')).to.equal(1);
    });
    it('counts white space', () => {
        expect(whiteSpaceCounter('   abc   ')).to.equal(6);
        expect(whiteSpaceCounter('abc    ')).to.equal(4);
        expect(whiteSpaceCounter('   abc')).to.equal(3);
    });
});