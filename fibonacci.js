
const fibonacci = (n, a = 0, b = 1, res = 1) => {
    if (n === 1) return a;
    if (n === 2) return res;
    res = a + b;
    return fibonacci(n - 1, a = b, b = res, res);
};

// const fibonacci = (n) => {
//     if (n === 1) return 0;
//     if (n === 2) return 1;
//     return fibonacci(n - 1) + fibonacci(n - 2);
// };

module.exports = { fibonacci };