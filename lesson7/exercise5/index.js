/**
 * @param {number[]} arr
 * @return {number[]}
 */
function squareArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const resOfNewArray = arr.map((i) => i ** 2);
  // for (let i = 0; i <= res.length - 1; i += 1){
  //   res[i] *= res[i];
  // }
  return resOfNewArray;
}
// examples
console.log(squareArray([10, 10, 10])); // ===> [100, 100, 100]
console.log(squareArray([0, 0, 1, 3])); // ===> [0, 0, 1, 9]
console.log(squareArray([-1, 0, -1, 1])); // ===> [1, 0, 1, 1]

// число в квадраті
