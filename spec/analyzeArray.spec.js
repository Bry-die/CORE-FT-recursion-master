const { expect } = require('chai');
const { sinon } = require('sinon');
const { analyzeArray } = require('../analyzeArray');

describe.only('analyzeArray', () => {
    it('given an empty array returns collection name followed by index 0', () => {
        expect(analyzeArray('jimbo', [])).to.equal('jimbo.0:');
    });
    it('finds path for a single item in a flat array', () => {
        expect(analyzeArray('jimbo', ['a'])).to.equal('jimbo.0: a');
    });
    it('finds the path of any number of items in a flat array', () => {
        expect(analyzeArray('bobby', ['a', 'b', 'c'])).to.equal(['bobby.0: a', 'bobby.1: b', 'bobby.2: c']);
    });
});