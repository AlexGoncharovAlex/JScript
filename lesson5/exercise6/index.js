//
function isPrime(number) {
  for (let index = 2; index < number; index += 1) {
    if (number % index === 0) {
      return false;
    }
  }
  return true;
}

function getPrimes(num) {
  for (let index = 2; index <= num; index += 1) {
    if (isPrime(index)) console.log(index);
  }
}
getPrimes(11);
// знаходження простого числа на проміжку
// замість вложеності цикла створили доп функцію
