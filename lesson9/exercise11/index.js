const getCustomerList = (obj) => {
  let copyObj = { ...obj };
  let arrayObj = [];
  arrayObj = Object.entries(copyObj)

    .map((item) => ({ id: item[0], ...item[1] }))
    .sort((a, b) => a.age - b.age);
  return arrayObj;
};

const customers = {
  'customer-id-1': {
    name: 'William',
    age: 54,
  },
  'customer-id-2': {
    name: 'Tom',
    age: 17,
  },
};
console.log(getCustomerList(customers));
