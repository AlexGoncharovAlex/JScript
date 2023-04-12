// const getKeys = (obj) => Object.keys(obj);

// console.log(getKeys({ name: 'Denis', city: 'Warsaw', englishLevel: 'A1' }));

'use strict';

/**
 * @param {object} obj
 * @return {undefined}
 */
function getKeys(obj) {
  let res;
  res = Object.keys(obj);
  res.forEach((key) => {
    console.log(key);
  });
}
// вивести кожен наступній ключ єлементу об'єкта з нового рядка
// examples
getKeys({ name: 'Denis', city: 'Warsaw', englishLevel: 'A1' });
// prints ===>
// name
// city
// englishLevel
