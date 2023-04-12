// const copyObj = (obj) => Object.assign({}, obj);
// console.log(copyObj({ a: 11, b: 33, c: 44 }));

const copyObj = (obj) => {
  console.log(obj);
  const newObj = { ...obj };
  newObj.j = 555;
  return newObj;
};
console.log(copyObj({ a: 1, b: 2, c: 3 }));

// копіювання об'єкту на прешому рівні
