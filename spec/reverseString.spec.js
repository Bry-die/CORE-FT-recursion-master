const { expect } = require('chai');
const { reverseString } = require('../reverseString');

describe('reverseString', () => {
    it('returns a string', () => {
        expect(reverseString('a')).to.be.an('string');
    });
    it('returns single character unaltered', () => {
        expect(reverseString('a')).to.equal('a');
    });
    it('reverses a string', () => {
        expect(reverseString('and')).to.equal('dna');
        expect(reverseString('hello there')).to.equal('ereht olleh');
        expect(reverseString('yo')).to.equal('oy');
        expect(reverseString('ayye')).to.equal('eyya');
    });
});