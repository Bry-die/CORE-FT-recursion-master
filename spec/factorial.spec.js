const { expect } = require('chai');
const { factorial } = require('../factorial');

describe('factorial', () => {
    it('returns a number', () => {
        expect(factorial(2)).to.be.an('number');
    });
    it('returns n if it is equal to 1 (base case)', () => {
        expect(factorial(1)).to.be.equal(1);
    });
    it('returns n factorial', () => {
        expect(factorial(5)).to.be.equal(120);
    });
});