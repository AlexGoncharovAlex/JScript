// let bool = 0;
// const lowNumber = 1;
// const highNumber = 1000;
const specialNumber = 1234;
let div = 0;
let mod = 0;
let result = 0;

for (let i = 1; i <= 1000; i += 1) {
  result += i;
}
console.log(result);

div = result / specialNumber;
console.log(div);

mod = result % specialNumber;
console.log(mod);

console.log(div > mod); /* виводить булиан значення */
// result = result / specialNumber > result % specialNumber ? 'true' : 'false';

// console.log(result);

// bool = result / specialNumber > result % specialNumber ? 'true' : 'false';
// console.log(bool);
// divN = result / specialNumber;
// console.log(divN);

// modN = result % specialNumber;
// console.log(modN);

// // console.log(divN < modN ? 'true' : 'false');
// console.log(divN > modN);
