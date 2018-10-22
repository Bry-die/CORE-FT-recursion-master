const { expect } = require('chai');
const { countZeros } = require('../countZeros');

describe('countZeros', () => {
    it('no input returns 0', () => {
        expect(countZeros([])).to.equal(0);
    });
    it('counts a single 0', () => {
        expect(countZeros([0])).to.equal(1);
    });
    it('counts the zeros', () => {
        expect(countZeros([1, 0, 2, 0, 3, 0])).to.equal(3);
    });
});