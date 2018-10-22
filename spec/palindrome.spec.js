const { expect } = require('chai');
const { palindrome } = require('../palindrome');

describe('palindrome', () => {
    it('returns a boolean', () => {
        expect(palindrome('a')).to.be.an('boolean');
    });
    it('repeated letter always returns true', () => {
        expect(palindrome('a')).to.equal(true);
        expect(palindrome('bbbbbb')).to.equal(true);
        expect(palindrome('ddddd')).to.equal(true);
    });
    it('checks whether input is a palindrome (single word)', () => {
        expect(palindrome('meem')).to.equal(true);
        expect(palindrome('string')).to.equal(false);
        expect(palindrome('racecar')).to.equal(true);
    });
    it('checks whether input is a palindrome (sentence)', () => {
        expect(palindrome('do geese see god')).to.equal(true);
        expect(palindrome('this is a string')).to.equal(false);
    });
});