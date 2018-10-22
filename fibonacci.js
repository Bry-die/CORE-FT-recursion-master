
const fibonacci = (n, a = 0, b = 1, res = 1) => {
    if (n === 1) return a;
    if (n === 2) return res;
    res = a + b;
    return fibonacci(n - 1, a = b, b = res, res);
};

module.exports = { fibonacci };