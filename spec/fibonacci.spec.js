const { expect } = require('chai');
const { fibonacci } = require('../fibonacci');

describe('fibonacci', () => {
    it('returns 0 when input 1', () => {
        expect(fibonacci(1)).to.equal(0);
    });
    it('returns n numbers of the fibonacci sequence', () => {
        expect(fibonacci(5)).to.equal(3);
        expect(fibonacci(6)).to.equal(5);
        expect(fibonacci(7)).to.equal(8);
        expect(fibonacci(10)).to.equal(34);
        expect(fibonacci(15)).to.equal(377);
    });
});