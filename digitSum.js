const digitSum = n => {
  let arr = n.toString().split("");
  let result = +arr[0];
  if (arr.length === 1) return +arr[0];
  return (result += digitSum(+arr.slice(1).join("")));
};
module.exports = { digitSum };
