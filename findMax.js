
const findMax = (arr) => {
    let result = 0;
    if (arr.length === 1) {
        result = arr[0];
        return +result;
    }
    if (arr[0] < arr[1]) {
        return +findMax(arr.slice(1));
    }
    return +findMax([...arr.slice(0, 1), ...arr.slice(2, arr.length)]);
};

module.exports = { findMax };