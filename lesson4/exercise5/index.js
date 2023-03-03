const n = 10;
let sum = '';
for (let i = 1; i <= n; i += 1) {
  sum += i + ','; // додає кому
}

console.log("'" + sum + "'", typeof sum);
// eslint-disable-next-line spaced-comment
/*вивожу через цикл в рядок числа,щоб було як стринг */
