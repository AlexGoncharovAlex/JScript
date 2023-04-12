// const getSpecialNumbers = (numbers) => {
//   const specialNumbers = [];
//   numbers.forEach(function checkIfSpecialNumber(num) {
//     if (num % 3 === 0) {
//       specialNumbers.push(num);
//     }
//   });
//   return specialNumbers;
// };
// const arr = [1, 3, 9, 4, 5, 7, 21];
// console.log(getSpecialNumbers(arr));

const getSpecialNumbers = (numbers) => numbers.filter((num) => num % 3 === 0);
const arr = [8, 9, 3, 6, 7, 4, 30];
console.log(getSpecialNumbers(arr));

// якщо при діленні не має залишку
