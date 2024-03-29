'use strict';

/**
 * @param {object} firstObj
 * @param {object} secondObj
 * @return {boolean}
 */
function compareObjects(firstObj, secondObj) {
  let firstKeys = Object.keys(firstObj);
  let secondKeys = Object.keys(secondObj);
  let res;
  if (firstKeys.length !== secondKeys.length) {
    return false;
  }
  return (res = firstKeys.every(
    (element) => firstObj[element] === secondObj[element]
  ));
}

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};

const obj5 = {
  age: 17,
  name: 'Tom',
};

console.log(compareObjects(obj1, obj2)); // ==> false
console.log(compareObjects(obj2, obj3)); // ==> false
console.log(compareObjects(obj1, obj4)); // ==> true
console.log(compareObjects(obj4, obj5)); // ==> true
// const first = Object.entries(firstObj);
// const second = Object.entries(secondObj);
// console.log(first === second);
// for (let key in firstObj) {
//   return firstObj[key] === secondObj[key];
// }
// const first = Object.entries(firstObj);
// const second = Object.entries(secondObj);
// if (first.length === second.length) {
//   for (let key in firstObj) {
//     return firstObj[key] === secondObj[key];
//   }
// }
//  let res = firstKeys.every((element) => {
//    if (element === secondKeys[element]) {
//      return true;
//    }
//    return false;
//  });
