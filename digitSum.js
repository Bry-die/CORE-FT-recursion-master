
const digitSum = (n) => {
    let result = 0;
    const arr = n.toString().split("");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) result += +arr[i];
    }
    return result;
};
module.exports = { digitSum };