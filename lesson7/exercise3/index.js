const flatArray = (arr) => arr.flat().sort((a, b) => a - b);
const initArray = [[1, 2, 8, 99], 74, 62, 55, 777, 0, [58, 1, 1477]];
console.log(flatArray(initArray));
