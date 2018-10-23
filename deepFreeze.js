const deepFreeze = coll => {
  if (Array.isArray(coll)) {
    for (let i = 0; i < coll.length; i++) {
      if (Array.isArray(coll[i])) {
        Object.freeze(coll[i]);
        deepFreeze(coll[i]);
      }
    }
  }
  Object.keys(coll).forEach(key => {
    if (typeof coll[key] === "object" && coll[key] !== null) {
      deepFreeze(coll[key]);
    }
  });
  return Object.freeze(coll);
};

module.exports = { deepFreeze };
