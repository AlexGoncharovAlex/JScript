const reverseString = (text) =>
  typeof text !== 'string' ? null : text.split('').reverse().join('');
console.log(reverseString('this text is revers'));
