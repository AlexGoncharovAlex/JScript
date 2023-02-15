let m = 10;
const n = 20;
let result = 1;

while (m <= n) {
  if (m % 2 === 1) {
    result = result * m;
  }
  m++;
}
console.log(result);
