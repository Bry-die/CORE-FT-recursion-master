const { expect } = require('chai');
const { digitSum } = require('../digitSum');

describe('digitSum', () => {
    it('returns n if given a single digit', () => {
        expect(digitSum(1)).to.equal(1);
        expect(digitSum(2)).to.equal(2);
    });
    it('returns the sum of a 2 digit number', () => {
        expect(digitSum(10)).to.equal(1);
        expect(digitSum(11)).to.equal(2);
    });
    it('sums n digits together', () => {
        expect(digitSum(991)).to.equal(19);
        expect(digitSum(99999)).to.equal(45);
    });
});