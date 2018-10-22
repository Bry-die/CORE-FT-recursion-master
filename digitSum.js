
const digitSum = (n) => {
    let result = 0;
    const arr = n.toString().split("");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) result += arr[i];
        if (arr.length > 0);
        return result + digitSum(parseInt(arr[i]));
    }
    return result;
};

module.exports = { digitSum };