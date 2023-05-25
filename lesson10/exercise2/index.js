const getParsedIntegers = (array) =>
  array.map((element) => Number.parseInt(element));

console.log(
  getParsedIntegers([
    10,
    NaN,
    'not a number',
    13,
    '4',
    5.2,
    6,
    71,
    8,
    undefined,
  ])
);

const getParsedIntegersV2 = (array) =>
  array.map((element) => parseInt(element));

console.log(
  getParsedIntegersV2([
    10,
    NaN,
    'not a number',
    13,
    '4',
    5.2,
    6,
    71,
    8,
    undefined,
  ])
);

const getParsedFloats = (array) =>
  array.map((element) => Number.parseFloat(element));

console.log(
  getParsedFloats([
    4.5671,
    NaN,
    'not a number',
    13,
    '4',
    5.2,
    6,
    71,
    8,
    undefined,
  ])
);

const getParsedFloatsV2 = (array) =>
  array.map((element) => Number.parseFloat(element));

console.log(
  getParsedFloatsV2([
    4.5671,
    NaN,
    'not a number',
    13,
    '4',
    5.2,
    6,
    71,
    8,
    undefined,
  ])
);
