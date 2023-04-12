// const arrAverage = (arr) => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   let averegResult;
//   averegResult = arr.reduce((acc, number) => {
//     return (averegResult = acc + number);
//   }, 0);
//   return averegResult / arr.length;
// };

// let a = [2, 5, 6, 3];
// console.log(arrAverage(a));
// console.log(arrAverage([1, 2, 3, 4, 5]));

// знаходження середнього арефметичного

const arrAverage = (arr) => {
  return arr.reduce((total, amount, index, array) => {
    return index === array.length - 1 ? total / array.length : total + amount;
  });
};
let a = [2, 5, 6, 3];
console.log(arrAverage(a));
console.log(arrAverage([1, 2, 3, 4, 5]));
