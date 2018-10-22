
const whiteSpaceCounter = (str) => {
    let count = 0;
    if (str.length === 0) return count;
    const split = str.split("");
    if (str.length === 1);
    if (split[0] === ' ') ++count;
    return count + whiteSpaceCounter(str.slice(1));
};

module.exports = { whiteSpaceCounter };