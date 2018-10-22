const { expect } = require('chai');
const { digitSum } = require('../digitSum');

describe('digitSum', () => {
    it('returns a number', () => {
        expect(digitSum(1)).to.be.an('number');
    });
    it('returns n if given a single digit', () => {
        expect(digitSum(1)).to.equal(1);
        expect(digitSum(2)).to.equal(2);
    });
    it('returns the sum of a 2 digit number', () => {
        expect(digitSum(1234)).to.equal(10);
        expect(digitSum(23)).to.equal(5);
    });
});