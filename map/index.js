function multiplyBy10(array) {
  return array.map(n => n * 10)
}

function onlyVowels(array) {
  return array.map(n => n.replace(/[^aeiou]*/gi, ''))
}

function doubleMatrix(array) {
  return array.map(x => x.map(y => y * 2));
}

module.exports = {
  multiplyBy10: multiplyBy10,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix
};
