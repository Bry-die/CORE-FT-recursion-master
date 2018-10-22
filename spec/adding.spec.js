const { expect } = require('chai');
const { adding } = require('../adding');

describe('adding', () => {
    it('returns a number', () => {
        expect(adding(2)).to.be.an('number');
    });
    it('returns n if it is equal to 1 (base case)', () => {
        expect(adding(1)).to.be.equal(1);
    });
    it('returns the sum of 1 through n', () => {
        expect(adding(5)).to.be.equal(15);
    });
});