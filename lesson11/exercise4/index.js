const countOccurrences = (text = '', str) =>
  str == '' ? null : text.split(str).length - 1;
console.log(countOccurrences('as rkfasmk asdnc', 'as'));
