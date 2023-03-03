const downNumber = 0;
const upNumber = 1000;
let result = 0;
let sizeNumber = 0;

for (let i = downNumber; i <= upNumber; i += 1) {
  if (i % 2 === 1) {
    result += i;
    console.log('Found'); /* виводить слова по циклу */
  }
}
console.log(result); /* виводить суму чисел */
sizeNumber = result * 5 > 5000 ? 'Bigger' : 'Smaller or equal';
console.log(sizeNumber); /* виводить умову вище */
