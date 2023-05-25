'use strict';

/**
 * @param {string[]} keysList
 * @param {array} valuesList
 * @return {object}
 */
function buildObject(keysList, valuesList) {
  let res = {};
  keysList.reduce((acc, keysList, index) => {
    return (res = { ...res, [keysList]: valuesList[index] });
  }, {});

  return res;
}

// examples
const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }

console.log(result);
