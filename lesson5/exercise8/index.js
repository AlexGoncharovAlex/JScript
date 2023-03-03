function sum(from, to) {
  // 2.приймаю аргументи та запускаю цикл
  let result = 0;
  for (let index = from; index <= to; index += 1) {
    result += index;
  }
  return result; // 3. повертаю результат назад в compareSum
}

function compareSums(firstFrom, firstTo, secondFrom, secondTo) {
  const from = sum(firstFrom, firstTo); // 1.визов функції та передача аргументів
  const to = sum(secondFrom, secondTo);
  return from > to; // 4. порівнюю повернені значення та вивожу буліан
}

console.log(compareSums(5, 10, 5, 10));
console.log(compareSums(5, 15, 3, 5));
console.log(compareSums(-2, 5, 5, 9));
console.log(compareSums(50, 101, 5, 7));
