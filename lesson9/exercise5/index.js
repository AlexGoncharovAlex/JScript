/* eslint-disable prefer-object-spread */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */

function mergeObjectsV1(obj1, obj2) {
  // put your code here
  const resOf1 = Object.assign({}, obj1, obj2);
  return resOf1;
}

function mergeObjectsV2(obj1, obj2) {
  // put your code here
  const resOf2 = Object.assign({}, obj2, obj1);
  return resOf2;
}

function mergeObjectsV3(obj1, obj2) {
  // put your code here
  const resOf3 = { ...obj1, ...obj2 };
  return resOf3;
}

function mergeObjectsV4(obj1, obj2) {
  // put your code here
  const resOf4 = { ...obj2, ...obj1 };
  return resOf4;
}

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  student: false,
};

console.log(mergeObjectsV1(obj1, obj2)); // ==> { name: 'Bob', age: 17, student: false }
console.log(mergeObjectsV2(obj1, obj2)); // ==> { name: 'Tom', age: 17, student: false }
console.log(mergeObjectsV3(obj1, obj2)); // ==> { name: 'Bob', age: 17, student: false }
console.log(mergeObjectsV4(obj1, obj2)); // ==> { name: 'Tom', age: 17, student: false }
// об'єднання массивів
