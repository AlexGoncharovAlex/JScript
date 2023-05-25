'use strict';

// /**
//  * @param {number[]} arr
//  * @return {number}
//  */
// const getSum = (arr) =>
//   !Array.isArray(arr) ? null : arr.reduce((acc, el) => acc + el, 0);

// // examples
// console.log(getSum([1, 10, -10, 4])); // ==> 5
// console.log(getSum([1])); // ==> 1
// console.log(getSum([-8, 8])); // ==> 0
// console.log(getSum(10, 12, 14)); // ==> null

/**
 * @param {number} from
 * @param {number} to
 * @return {number[]}
 */

// const filterArray = (array) => array.filter((number) => number % 3 === 0);

// function getSpecialNumbers(from, to) {
//   let arr = [];
//   for (let i = from; i < to; i++) {
//     arr.push(i);
//     //    return arr.filter((number) => number % 3 === 0);
//   }
//   return filterArray(arr);
// }

// console.log(getSpecialNumbers(1, 10)); // ==> [3, 6, 9]
// console.log(getSpecialNumbers(-10, 10)); // ==> [-9, -6, -3, 0, 3, 6, 9]
// console.log(getSpecialNumbers(1, 2)); // ==> [ ]

/**
 * @param {number[]} numbers
 * @return {number[]}
 */
// function swap(numbers) {
//   const [a, ...last] = numbers;
//   return [...last, a];
// }

/**
 * @param {number[]} numbers
 * @return {number[]}
 */
// function swapManual(numbers) {
//   let num = [];
//   num = [...numbers];
//   let a = num.shift();
// console.log(num === numbers);
// return num.concat(a);
//   num.push(a);
//   return num;
// }

// examples
// console.log(swap([1, 10, 9, 11])); // ==> [10, 9, 11, 1]
// console.log(swapManual([1, 10, 9, 11])); // ==> [10, 9, 11, 1]

// function createEmptyArray(len) {
//   const array = new Array(len);
//   return array;
// }

// console.log(createEmptyArray());

/**
 * @param {number[]} arr
 * @return {number[]}
 */
// const squareArray = (arr) =>
//   !Array.isArray(arr) ? null : arr.map((num) => num * num);

//   if (!Array.isArray) {
//     return null;
//   }
//   let result = arr.map((num) => num * num);
//   return result;
// }

// examples
// console.log(squareArray([1, 10, 9, 11])); // ==> [1, 100, 81, 121]
// console.log(squareArray([10, 0, -4])); // ==> [100, 0, 16]
// console.log(squareArray([1])); // ==> [1]

/**
 * @param {number[]} arr
 * @return {boolean}
 */
// const checkSum = (arr) => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   let res;
//   arr.reduce((acc, num) => {
//     return (res = acc + num);
//   }, 0);
//   return res > 100 ? true : false;
// };

//   if (!Array.isArray) {
//     return null;
//   }
//   let resNum = arr.reduce((acc, num) => {
//     return acc + num;
//   }, 0);
//   return resNum > 100 ? true : false;
// };

// examples
// console.log(checkSum([10, 10, 10])); // ===> false
// console.log(checkSum([10, 99, 1])); // ===> true
// console.log(checkSum([-6, -3, 200])); // ===> true
// console.log(checkSum(10));

/**
 * @param {number[]} arr
 * @param {number} delta
 * @return {number[]}
 */
// const increaseEvenEl = (arr, delta) =>
//   !Array.isArray(arr)
//     ? null
//     : arr.map((el) => (el % 2 === 0 ? el + delta : el));
//    if (!Array.isArray) {
//      return null;
//    }
//    let res = arr.map((el) => (el % 2 === 0 ? el + delta : el));
//    return res;
//  };

// examples
// console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20)); // ===> [22, 5, 26, 28, 11, 9, 24]
// console.log(increaseEvenEl([7, 11, 1], 10)); // ===> [7, 11, 1]
// console.log(increaseEvenEl([], 120)); // ===> []

// const reverseArray = (arr) => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   let resRevers = [];
//   for (let num of arr) {
//     resRevers.unshift(num);
//   }
//   return resRevers;
// };
// console.log(reverseArray([1, 2, 3, 4, 5, 6]));

// const cloneArr = (arr) => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   let copyArr = [...arr];
//   console.log(copyArr === arr);
//   return copyArr;
// };

// console.log(cloneArr([11, 22, 33, 44]));

// const checker = (arr) => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   let max = 0;
//   let min = 0;

//   for (let num of arr) {
//     if (num > max) {
//       max = num;
//     }
//     console.log('max ' + max);
//   }
//   for (let num of arr) {
//     if (num < min) {
//       min = num;
//     }
//     console.log('min ' + min);
//   }
//   return max + min > 1000 ? true : false;
// };

// console.log(checker([99, 5, -100, 555, 1000, 0, 7956]));

// const sortAsc = (array) =>
//   !Array.isArray(array) ? null : array.sort((a, b) => a - b);

// const sortDesk = (array) =>
//   !Array.isArray(array) ? null : array.sort((a, b) => b - a);
// console.log(sortAsc([2, 8, 3, 5, 9, 10]));
// console.log(sortDesk([8, 6, 1, 4, 9, 3, 7]));

// const withdraw = (clients, balances, client, amount) => {
//   let res = clients.indexOf(client, 0);
//   res = balances[res] < amount ? -1 : balances[res] - amount;
//   return res;
// };
// console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));
// console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10));

// const getSubArray = (arr, numberOfElements) => {
//   let arrA = [...arr];
//   arrA.length = numberOfElements;
//   return arrA;
//   // let arrArr = arr.slice(0, numberOfElements);
//   // console.log(arrArr);
//   // два варіанти створення масиву по заданій довжині
// };
// console.log(getSubArray([11, 4, 8, 3], 2));
// console.log(getSubArray([1, 2, 3, 4, 5], 3));

// const includes = (arr, num) => {
//   let res = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === num) {
//       res = arr[i];
//     }
//   }
//   return res === num;
// };

// console.log(includes([1, 4, 8, 3], 8)); // ==> true
// console.log(includes([1, 4, 8, 3], 5)); // ==> false

// const removeDuplicates = (array) => {
//   if (!Array.isArray(array)) {
//     return null;
//   }
//   let arrR = array.reduce((acc, item) => {
//     return acc.includes(item) ? acc : [...acc, item];
//   }, []);
// let arr = new Set(array);
// return arr;
//
// let arrF = array.filter((item, index) => {
//   return array.indexOf(item) === index;
// });
// console.log(arrF);
//   return arrR;
// };

// console.log(removeDuplicates([2, 7, 9, 2, 6, 7]));

// const includes = (arr, num) => {
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] === num) {
//       return true;
//     }
//     return false;
//   }
// };

// const uniqueCount = (array) => {
//   if (!Array.isArray(array)) {
//     return null;
//   }
//   let uniqArr = [];
//   for (let i = 0; i < array.length - 1; i++) {
//     if (!includes(uniqArr, array[i])) {
//       uniqArr.push(array[i]);
//     }
//   }
//   return uniqArr.length - 1;
// };

// console.log(uniqueCount([1, 3, 1, 3, 1, 5, 6, 1, 5]));

// const uniqueCount = (array) => {
//   if (!Array.isArray(array)) {
//     return null;
//   }
//   let uniqNumber = array.reduce((acc, num) => {
//     return acc.includes(num) ? acc : [...acc, num];
//   }, []);
//   return uniqNumber.length;
// };
// console.log(uniqueCount([1, 2, 4, , 4, 3, 1, 7, 4]));

// const getSpecialNumbers = (array) => { ПОЧАТОК
//   let filterArray = [];
//   filterArray = array.filter(function (value) {
//     return value % 3 === 0;
//   });
//   return filterArray;
// };
// console.log(getSpecialNumbers([3, 7, 6, 9, 12]));

// const getSpecialNumbers = (array) => {
//   let filterArray = [];
//   filterArray = array.filter((num) => num % 3 === 0);
//   return filterArray;
// };
// console.log(getSpecialNumbers([3, 7, 6, 9, 12]));

// const getSpecialNumbers = (array) => array.filter((value) => value % 3 === 0);
// console.log(getSpecialNumbers([3, 7, 6, 9, 12]));
// КіНЕЦЬ

// const sortDesk = (array) => {
//   let copyArr = [...array];
//   copyArr.sort((a, b) => a - b);
//   console.log(copyArr === array);
//   return copyArr;
// };
// console.log(sortDesk([2, 5, 8, 7, 6, 3, 9, 4, 5]));

// const flatArray = (array) => {
//   let copyArr = array.reduce((acc, element) => {
//     return acc.concat(element);
//   }, []);
//   return copyArr.sort((a, b) => a - b);
// };
// console.log(flatArray([1, 23, [5, 8, 22], 88, 11, 5, [9, 5, 365, 456]]));

// const flatArray = (array) => array.flat().sort((a, b) => a - b);
// console.log(flatArray([1, 23, [5, 8, 22], 88, 11, 5, [9, 5, 365, 456]]));

/**
 * @param {string[]} allStudentsList
 * @param {string[]} studentsForRetake
 * @return {string[]}
 */

// const getMessagesForBestStudents = (allStudentsList, studentsForRetake) => {
//   const pasedStudents = allStudentsList.filter(
//     (name) => !studentsForRetake.includes(name)
//   );
//   const masseg = pasedStudents.map((name) => 'Good job, ' + name);
//   return masseg;
// };

// // examples
// const allStudTest1 = ['Den', 'John', 'Ann', 'Mike'];
// const retakeStudTest1 = ['John', 'Mike'];
// console.log(getMessagesForBestStudents(allStudTest1, retakeStudTest1)); // ===> ['Good job, Den', 'Good job, Ann']

// const allStudTest2 = ['Den', 'John', 'Ann', 'Mike'];
// const retakeStudTest2 = ['Den', 'John', 'Ann', 'Mike'];
// console.log(getMessagesForBestStudents(allStudTest2, retakeStudTest2)); // ===> []

// function squareArray(arr) {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   return arr.map((value) => value * value);
// }

// // examples
// console.log(squareArray([10, 10, 10])); // ===> [100, 100, 100]
// console.log(squareArray([0, 0, 1, 3])); // ===> [0, 0, 1, 9]
// console.log(squareArray([-1, 0, -1, 1])); // ===> [1, 0, 1, 1]

// const reverseArray = (array) => {
//   if (!Array.isArray(array)) {
//     return null;
//   }
//   let res = [];
//   let copyArr = [...array];
//   for (let i of copyArr) {
//     res.unshift(i);
//   }
//   return res;
// };

// console.log(reverseArray([15, 2, 3, 4, 5]));

// const reverseArray = (array) => {
//   if (!Array.isArray(array)) {
//     return null;
//   }
//   let res = [];
//   let copyArr = [...array];
//   copyArr.reduce((acc, el) => {
//     res.unshift(el);
//   }, []);
//   return res;
// };

// console.log(reverseArray([15, 2, 3, 4, 5]));

// const reverseArray = (array) => {
//   if (!Array.isArray) {
//     return null;
//   }
//   const res = [];
//   array.map((el) => res.unshift(el));
//   return res;
// };
// console.log(reverseArray([15, 2, 3, 4, 5]));

// const reverseArray = (array) => {
//   if (!Array.isArray(array)) {
//     return null;
//   }
//   const copy = array.slice();
//   return copy.reverse();
// };
// console.log(reverseArray([15, 2, 3, 4, 5]));

// const increaseEvenEl = (arr, delta) => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   return arr.map((num) => (num % 2 === 0 ? num + delta : num));
// };

// console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20));

// const clonerArr = (arr) => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   const clonArr = [...arr];
//   return clonArr;
// };
// console.log(clonerArr([1, 676, 99, 7, 56]));

// const withdraw = (clients, balances, client, amount) => {
//   let res = clients.indexOf(client);
//   console.log(res);
//   return balances[res] < amount ? -1 : balances[res] - amount;
// };

// console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50)); // ==> 37 (balances array should be [1400, 37, -6])
// console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10)); // ==> -1 (balances array should be [1400, 87, -6])

// const sum = (arr) =>
//   !Array.isArray(arr) ? null : arr.reduce((acc, num) => acc + num);
// console.log(sum([1, 8, 4, 6, 7]));

// * const filterNames = (arr, text) =>
//   arr.filter((word) => word.includes(text) && word.length > 5);

// console.log(
//   filterNames(
//     ['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya'],
//     'ya'
//   )
// );

// const arrAverage = (arr) => {
//   let resReduce = arr.reduce((acc, num) => {
//     return acc + num;
//   }, 0);
//   return resReduce / arr.length;
// };

// console.log(arrAverage([2, 5, 6, 3, 3, 3, 5, 5]));

// const transformToObject = (arr) => {
//   let object = {};
//   arr.forEach((element) => {
//     object[element] = element;
//   });
//   return object;
// };

// // examples
// console.log(transformToObject(['a', 17.1, 'John Doe'])); // ==> { a: 'a', '17.1': 17.1, 'John Doe': 'John Doe' }

/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */

/* Для решения этой задачи используй for..in цикл. В реальных проектах это плохая практика,
 * лучше использовать методы класса Object - keys(), values(), entries(). Но мы с ними пока не познакомитись.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 * */

// const concatProps = (obj) => {
//   const array = [];
//   for (const key in obj) {
//     array.push(obj[key]);
//   }
//   return array;
// };

// // examples
// console.log(concatProps({ name: 'John Doe', age: 17, interest: 'football' })); // ==> ['John Doe', 17, 'football']

/* eslint-disable dot-notation */

/**
 * Для решения этой задачи нужно использовать как квадратные скобки так и точки для чтения свойства объекта. В реальных проектах
 * более предпочтительный вариант - обращение через точку. Но нам нужно научиться работать со всеми опциями.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 */

// const transaction = {
//   currency: 'USD',
//   value: 170,
//   operation: 'sale',
//   agent: {
//     country: 'Ukraine',
//     company: 'NYSE',
//   },
//   'operation time': 1584029990001,
// };

// /* 1. Выведи в консоль значение свойства 'currency' с помощью точки */
// console.log(transaction.currency);

// /* 2. Выведи в консоль значение свойства 'value' с помощью квадратных скобок */
// console.log(transaction['value']);
// const key = 'operation';
// /* 3. Выведи в консоль значение свойства обьекта transaction, название которого находится в переменной key - используй квадратные скобки */
// console.log(transaction[key]);
// /* 4. Введи в консоль значение свойства 'company' используя квадратные скобки */
// console.log(transaction.agent['company']);
// /* 5. Выведи в консоль значение свойства 'country' используя точку */
// console.log(transaction.agent.country);
// /* 6. Выведи в консоль значение свойства 'operation time' используя квадратные скобки */
// console.log(transaction['operation time']);

// const user = {
//   name: 'Tom',
//   age: 17,
// };

// /* присвой объекту свойство hobby со значением 'football' с помощью точки */
// user.hobby = 'football';
// const anotherKey = 'married';
// /* название свойства хранится в переменной anotherKey. Присвой объекту такое свойство со значением false */
// user[anotherKey] = false;
// /* присвой объекту свойство 'favorite music' со значением 'rock' */
// user['favorite music'] = 'rock';
// /* присвой объекту свойство 'address', которое будет пустым объкетом */
// user.address = {};
// /* присвой объекту в 'address' свойство 'country', со значением 'Ukraine' */
// user.address.country = 'Ukraine';
// /* присвой объекту в 'address' свойство 'building', со значением 17 */
// user.address.building = 17;
// /* выведи в консоль итоговый объект user */
// console.log(user);

/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */

/* Для решения этой задачи используй for..in цикл. В реальных проектах это плохая практика,
 * лучше использовать методы класса Object - keys(), values(), entries(). Но мы с ними пока не познакомитись.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 * */

// function getKeys(obj) {
//   for (let key in obj) {
//     console.log(obj[key]);
//   }
// }
// const userAlex = {
//   name: 'Alex',
//   age: 20,
//   address: 'USA',
//   car: 'Mazda',
// };
// console.log(getKeys(userAlex));

/* eslint-disable no-restricted-syntax */

/* Для решения этой задачи используй for..in цикл. В реальных проектах это плохая практика,
 * лучше использовать методы класса Object - keys(), values(), entries(). Но мы с ними пока не познакомитись.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 * */

// const pickProps = (obj, props) => {
//   let newObject = {};

//   for (let key in obj) {
//     if (props.includes(key)) {
//       Object.assign(newObject, { [key]: obj[key] });
//     }
//     newObject;
//     // newObject = props.includes(key)
//     //   ? Object.assign(newObject, { [key]: obj[key] })
//     //   : newObject;
//   }
//   return newObject;
// };

// // examples
// console.log(pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c'])); // ==> { a: 1, c: 3 }
// console.log(pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c', 'd', 'hex'])); // ==> { a: 1, c: 3 }

/* eslint-disable no-restricted-syntax */

/* Для решения этой задачи используй for..in цикл. В реальных проектах это плохая практика,
 * лучше использовать методы класса Object - keys(), values(), entries(). Но мы с ними пока не познакомитись.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 * */

// const getAdults = (obj) => {
//   let newObjUsers = {};
//   let adult = Object.entries(obj);
//   let filterAdult = adult.filter((user) => user[1] >= 18);
//   newObjUsers = filterAdult.reduce((acc, [key, value]) => {
//     acc[key] = value;
//     return acc;
//   }, {});

//   // let usersInfaAbout = filterAdult.map((user) => user[0]);
//   // for (let key in obj) {
//   //   if (obj[key] >= 18) {
//   //     Object.assign(adult, { [key]: obj[key] });
//   //   }
//   // }
//   return newObjUsers;
// };

// // examples
// console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 })); // ==> { 'John Doe': 19, Bob: 18 }
// console.log(getAdults({ Ann: 56, Andrey: 7 })); // ==> { Ann: 56 }

// const getAdults = (userObjet) => {
//   const usersArray = Object.entries(userObjet);
//   const filterUserArray = usersArray.filter((user) => user[1] >= 18);
//   const adultUser = filterUserArray.map((user) => user[0]);
//   return adultUser;
// };

// console.log(getAdults({ 'John Doe': 18, Tom: 17, Bob: 19 }));
// const copyObj = (obj) => {
//   const copyObj = { ...obj };
//   console.log(copyObj === obj);
// return copyObj;
// };
// console.log(copyObj({ age: 18, name: 'Ann', sex: 'woman' }));

// const copyObj = (obj) => {
//   const copyObj = Object.assign({}, obj);
//   console.log(copyObj === obj);
//   return copyObj;
// };
// console.log(copyObj({ age: 18, name: 'Ann', sex: 'woman' }));

// function getKeys(obj) {
//   let objKeys = Object.keys(obj);
//   objKeys.forEach((key) => console.log(key));
// }

// // examples
// console.log(getKeys({ name: 'Denis', city: 'Warsaw', englishLevel: 'A1' }));
// // prints ===>
// // name
// // city
// // englishLevel

/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Так же плохой подход - мутировать входящие параметры функции
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */

// function addPropertyV1(userData, userId) {
//   userData.id = userId;
//   return userData;
// }
// function addPropertyV2(userData, userId) {
//   const personId = { id: userId };
//   Object.assign(userData, personId);
//   return userData;
// }
// function addPropertyV3(userData, userId) {
//   const personId = { id: userId };
//   const copyNewObject = Object.assign({}, userData, personId);
//   return copyNewObject;
// }
// function addPropertyV4(userData, userId) {
//   return { ...userData, id: userId };
// }
// // examples
// const user = {
//   name: 'Sam',
// };
// console.log(addPropertyV1(user, '1234567')); // ==> { name: 'Sam', id: '1234567' }
// console.log(addPropertyV2(user, '1234567')); // ==> { name: 'Sam', id: '1234567' }
// console.log(addPropertyV3(user, '1234567')); // ==> { name: 'Sam', id: '1234567' }
// console.log(addPropertyV4(user, '1234567')); // ==> { name: 'Sam', id: '1234567' }

/* eslint-disable prefer-object-spread */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */

// function mergeObjectsV1(obj1, obj2) {
//   const res1 = Object.assign({}, obj1, obj2);
//   return res1;
// }

// function mergeObjectsV2(obj1, obj2) {
//   const res2 = Object.assign({}, obj2, obj1);
//   return res2;
// }

// function mergeObjectsV3(obj1, obj2) {
//   const res3 = { ...obj1, ...obj2 };
//   return res3;
// }

// function mergeObjectsV4(obj1, obj2) {
//   const res4 = { ...obj2, ...obj1 };
//   return res4;
// }

// // examples
// const obj1 = {
//   name: 'Tom',
//   age: 17,
// };

// const obj2 = {
//   name: 'Bob',
//   student: false,
// };
// console.log(mergeObjectsV1(obj1, obj2)); // ==> { name: 'Bob', age: 17, student: false }
// console.log(mergeObjectsV2(obj1, obj2)); // ==> { name: 'Tom', age: 17, student: false }
// console.log(mergeObjectsV3(obj1, obj2)); // ==> { name: 'Bob', age: 17, student: false }
// console.log(mergeObjectsV4(obj1, obj2)); // ==> { name: 'Tom', age: 17, student: false }

// const getPeople = (obj) => {
//   let arrayObject = [];
//   for (let key in obj) {
//     arrayObject = arrayObject.concat(obj[key]);
//   }
//   let resValues = Object.values(arrayObject);
//   return resValues.map((arrayItem) => arrayItem.name);
// };

// let rooms = {
//   room1: [
//     { name: 'Jack' },
//     { name: 'Andrey' },
//     { name: 'Ann' },
//     { name: 'Vasyl' },
//   ],
//   room2: [{ name: 'Dan' }],
//   room3: [{ name: 'Denis' }, { name: 'Max' }, { name: 'Alex' }],
// };

// console.log(getPeople(rooms));

// const getTotalRevenue = (transactions) => {
//   return transactions.reduce((acc, element) => acc + element.amount, 0);
// };

// // examples
// const dayTransactions = [
//   { userId: 22, amount: 60, operation: 'sell' },
//   { userId: 22, amount: 160, operation: 'buy' },
//   { userId: 44, amount: 90, operation: 'sell' },
// ];

// const result = getTotalRevenue(dayTransactions); // ==> 310
// console.log(result);

/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Так же плохой подход - мутировать входящие параметры функции
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */

// function addPropertyV1(obj, key, value) {
//   obj[key] = value;
//   return obj;
// }

// function addPropertyV2(obj, key, value) {
//   const valuta = { [key]: value };
//   Object.assign(obj, valuta);
//   return obj;
// }

// function addPropertyV3(obj, key, value) {
//   let copyObj = { ...obj };
//   copyObj = Object.assign(copyObj, { [key]: value });
//   console.log(obj);
//   return copyObj;
// }

// function addPropertyV4(obj, key, value) {
//   const val = { [key]: value };
//   const taxSpred = { ...obj, ...val };
//   return taxSpred;
// }

// const transaction = {
//   value: 170,
// };
// // console.log(addPropertyV1(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
// // console.log(addPropertyV2(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
// console.log(addPropertyV3(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
// // console.log(addPropertyV4(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }

// /**
//  * @param {string[]} keysList
//  * @param {array} valuesList
//  * @return {object}
//  */
// function buildObject(keysList, valuesList) {
//   let res = {};
//   keysList.reduce((acc, keysList, index) => {
//     return (res = { ...res, [keysList]: valuesList[index] });
//   }, {});
//   // for (let i = 0; i < keysList.length; i++) {
//   //   res = { ...res, [keysList[i]]: valuesList[i] };
//   // }
//   // return res;
//   return res;
// }

// // examples
// const keys = ['name', 'address', 'age'];
// const values = ['Bob', 'Ukraine', 34];
// const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }

// console.log(result);

let user = {
  name: 'John',
  age: 30,
};

// цикл по ключам и значениям
for (let [key, value] of Object.entries(user)) {
  alert(`${key}:${value}`); // name:John, затем age:30
}