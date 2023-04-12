// function increaseEvenEl(arr, delta) {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   let resultOfIncrease = arr
//     .slice()
//     .map((num) => (num % 2 === 0 ? num + delta : num));

//   return resultOfIncrease;
// }

// console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20));
// console.log(increaseEvenEl(4, 50));

// const increaseEvenEl = (arr, delta) => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   return arr.map((num) => (num % 2 === 0 ? num + delta : num));
// };
// console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20));
// console.log(increaseEvenEl(4, 50));

const increaseEvenEl = (arr, delta) =>
  !Array.isArray(arr)
    ? null
    : arr.map((num) => (num % 2 === 0 ? num + delta : num));

console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20));
console.log(increaseEvenEl([2, 2, 2, 3, 4], 10));
console.log(increaseEvenEl(4, 50));
console.log(increaseEvenEl([2, 2, 2, 3, 4], 10));

// до парних додаємо дельту
