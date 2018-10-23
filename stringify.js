
const stringify = (input) => {
    if (Array.isArray(input)) {
        const contents = input.reduce((array, item) => {
            const res = stringify(item);
            return `${array}${res},`;
        }, '');
        return `[${contents.slice(0, -1)}]`;
    }
    if (typeof input === 'object') {
        let res = '';
        for (const key in input) {
            res = `${res},${stringify(key)}:${stringify(input[key])}`;
        }
        return `{${res.slice(1)}}`;
    }
    if (typeof input === 'string') return `"${input}"`; 
    return `${input}`;
};

module.exports = { stringify };