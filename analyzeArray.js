
const analyzeArray = (name, arr) => {
    let res = '';
    for (let i = 0; i < arr.length; i++) {
        console.log(`${name}.${i}: ${arr[i]}`);
        return console.log(`${name}.${i}: ${arr[i]}`);
    }
};

module.exports = { analyzeArray };