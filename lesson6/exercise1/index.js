function getArrayBounds(arr) {
  console.log(arr);
  if (!Array.isArray(arr)) {
    return null;
  }
  return [arr.length, arr[0], arr[arr.length - 1]];
}
const arrBonds = getArrayBounds([]);
console.log(arrBonds);

// console.log(getArrayBounds([1, 10, 9, 11])); // ==> [4, 1, 11]
// console.log(getArrayBounds(10, 12, 14)); // ==> null
// console.log(getArrayBounds([1])); // ==> [1, 1, 1]

getArrayBounds([1, 10, 9, 11]); // ==> [4, 1, 11]
getArrayBounds(10, 12, 14); // ==> null
getArrayBounds([1]); // ==> [1, 1, 1]
