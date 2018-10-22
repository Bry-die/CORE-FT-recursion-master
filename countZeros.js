
const countZeros = (arr) => {
    let count = 0;
    if (arr.length === 0) return count;
    if (arr[0] === 0) ++count;
    return count + countZeros(arr.slice(1));
};

module.exports = { countZeros };