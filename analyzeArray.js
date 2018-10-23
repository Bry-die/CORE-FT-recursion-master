const analyzeArray = (collectionName, arr, path = "") => {
  if (arr.length === 0) {
    console.log(`${collectionName}.${0}:`);
  }
  let result = [];
  let other = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      path += i;
    }
    if (i > 0) {
      path = path.slice(0, -1) + i;
    }
    if (Array.isArray(arr[i])) {
      result = analyzeArray(collectionName, arr[i], path);
    } else {
      console.log(`${collectionName}.${path}: ${arr[i]}`);
      other.push(`${collectionName}${path}${arr[i]}`);
      //console.log(mySpy(`${collectionName}.${path}: ${arr[i]}`));
    }
  }
  return [...result, ...other];
};

analyzeArray("Frank", [
  "Biff",
  [["pp"], "ttt", "dd", ["gy", ["uu"], "tt"], "bb"],
  "jan",
  "ll"
]);

function mySpy(str) {
  return str;
}

module.exports = { analyzeArray };
