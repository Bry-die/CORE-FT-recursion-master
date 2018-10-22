const adding = (n) => {
  if (n === 1) return n;
  return n + adding(n - 1);  
};

module.exports = { adding };