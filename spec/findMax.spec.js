const { expect } = require('chai');
const { findMax } = require('../findMax');

describe('findMax', () => {
    it('given an array with one number returns it', () => {
        expect(findMax([0])).to.equal(0);
    });
    it('given an array with all the same numbers', () => {
        expect(findMax([1, 1, 1])).to.equal(1);
    });
    it('finds the largest number in an array', () => {
        expect(findMax([1, 5, 2, 1])).to.equal(5);
        expect(findMax([10, 15, 20])).to.equal(20);
        expect(findMax([10, 15, 4, 2, 1, 29])).to.equal(29);
        expect(findMax([0, 0, 0, 100])).to.equal(100);
    });
});