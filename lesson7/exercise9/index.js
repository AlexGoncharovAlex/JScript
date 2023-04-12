// const withdraw = (clients, balances, client, amount) => {
//
//   let resultOfOperation = [...clients];
//   for (let i = 0; i < resultOfOperation.length; i += 1) {
//     if (resultOfOperation[i] === client) {
//       return (resultOfOperation[i] =
//         balances[i] < amount ? -1 : balances[i] - amount);
//     }
//   }
// };

// console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50)); // ==> 37 (balances array should be [1400, 37, -6])
// console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10)); // ==> -1 (balances array should be [1400, 87, -6])

// const withdraw = (clients, balances, client, amount) => {
//   let res;
//   res = clients.indexOf(client);
//   return (res = balances[res] < amount ? -1 : balances[res] - amount);
// };

// // examples
// console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50)); // ==> 37 (balances array should be [1400, 37, -6])
// console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10)); // ==> -1 (balances array should be [1400, 87, -6])

const withdraw = (clients, balances, client, amount) => {
  const resultOfoparation = clients.indexOf(client);
  return balances[resultOfoparation] < amount
    ? -1
    : balances[resultOfoparation] - amount;
};
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50)); // ==> 37 (balances array should be [1400, 37, -6])
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10)); // ==> -1 (balances array should be [1400, 87, -6])
// знаходження балансу кліента та відняття від нього
