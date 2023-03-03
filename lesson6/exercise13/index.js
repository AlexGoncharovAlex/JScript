function withdraw(clients, balances, client, amount) {
  for (let i = 0; i < clients.length; i++) {
    if (clients[i] === client) {
      clients[i] = balances[i];
      if (balances[i] < amount) {
        return -1;
      }
      return (balances[i] -= amount);
    }
  }
}
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10));
// знаходження баланс кліента та при достатньому балансі списання
// коштів, якщо ні то повернення значення -1
