const { expect } = require('chai');
const { stringify } = require('../stringify');

describe('stringify', () => {
    it('stringifies primitive values', () => {
        expect(stringify(1)).to.equal(JSON.stringify(1));
        expect(stringify(2)).to.equal(JSON.stringify(2));
        expect(stringify(true)).to.equal(JSON.stringify(true));
        expect(stringify(false)).to.equal(JSON.stringify(false));
        // expect(stringify(null)).to.equal(JSON.stringify(null));
        // expect(stringify(NaN)).to.equal(JSON.stringify(NaN));
    });
    it('wraps strings in double quotes', () => {
        expect(stringify('string')).to.equal(JSON.stringify('string'));
    });
    it('strigifies an empty array', () => {
        expect(stringify([])).to.equal(JSON.stringify([]));
    });
    it('stringifies an array containing primatives', () => {
        expect(stringify([1, true, 'string'])).to.equal(JSON.stringify([1, true, 'string']));
        expect(stringify([[[1, true, 'string']]])).to.equal(JSON.stringify([[[1, true, 'string']]]));
    });
    it('stringifies an empty object', () => {
        expect(stringify({})).to.equal(JSON.stringify({}));
    });
    it('stringifies an object of primatives', () => {
        expect(stringify({a: 1, b: 'string', c: true})).to.equal(JSON.stringify({a: 1, b: 'string', c: true}));
        expect(stringify({a: {b: 1, c:'string'}})).to.equal(JSON.stringify({a: {b: 1, c:'string'}}));
    });
    it('stringifies objects within arrays and vice versa', () => {
        expect(stringify({a: 1, b: [1, 'string']})).to.equal(JSON.stringify({a: 1, b: [1, 'string']}));
        expect(stringify([1, false, {a: 'string'}])).to.equal(JSON.stringify([1, false, {a: 'string'}]));
    });
});