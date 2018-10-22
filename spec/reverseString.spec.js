const { expect } = require('chai');
const { reverseString } = require('../reverseString');

describe('reverseString', () => {
    it('returns a number', () => {
        expect(reverseString('')).to.be.an('string');
    });
});