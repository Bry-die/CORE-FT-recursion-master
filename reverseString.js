
const reverseString = (str) => {
    let result = [];
    const split = str.split("");
    result.push(split[split.length - 1]);
    if (str.length === 1) return result.join("");
    return result.concat(reverseString(str.slice(0, str.length - 1))).join("");
};

module.exports = { reverseString };