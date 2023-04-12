const cloneArr = (arr) => (!Array.isArray(arr) ? null : [...arr]);

const a = 1;
console.log(cloneArr(a));

const b = [1, 2, 3, 4, 5, 6, 7];
console.log(cloneArr(b));

console.log(copy.push(100)); // додав єлемент в масив,отримав нову довжину
console.log(copy); // вивів новий масив,переконався що він не залежить
// від b.

console.log(b);
