// const cleanTransactionsList = (trans) => {
//   const copyTrans = [...trans];

//   const resCopy = copyTrans.map((el) => Number.parseFloat(+el));
//   console.log(resCopy);
//   const findNaN = resCopy.map((num) => (!NaN ? num.toFixed(2) : num));
//   console.log(findNaN);
//   const newArrWithOutNan = findNaN.filter((el) => !el.includes('NaN'));
//   console.log(newArrWithOutNan);
//   const concatElWith$ = newArrWithOutNan.map((el) => '$' + el);
//   console.log(concatElWith$);
//   return concatElWith$;
// };

// const transactions = ['  1.9 ', '16.4', 17, ' 1 dollar '];
// console.log(cleanTransactionsList(transactions));

const cleanTransactionsList = (transactions) =>
  transactions
    .filter((tr) => isFinite(tr))

    .map((tr) => `$${Number.parseFloat(tr).toFixed(2)}`);

const transactions = ['  1.9 ', '16.4', 17, ' 1 dollar '];
console.log(cleanTransactionsList(transactions));
