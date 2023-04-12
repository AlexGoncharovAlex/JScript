// const sum = (arr) => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   const res = arr.reduce(function (acc, element) {
//     return acc + element;
//   }, 0);

//   return res;
// };

// console.log(sum([2, 5, 6, 3, 0, 3, -1]));
// console.log(sum('John'));
// // сума всіх чисел в масиві

// eslint-disable-next-line no-return-assign
const sum = (arr) =>
  !Array.isArray(arr) ? null : arr.reduce((acc, num) => acc + num);
console.log(sum([2, 5, 6, 3, 0, 3, -1]));
console.log(sum('John'));

// сума всіх чисел в масиві
