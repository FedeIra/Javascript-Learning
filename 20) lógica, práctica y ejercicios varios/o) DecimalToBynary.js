function DecimalToBynary(num) {
  // Your code here:
  /* solution: */
  let binary = '';
  while (num > 0) {
    binary = (num % 2) + binary;
    num = Math.floor(num / 2);
  }
  return binary;
}

console.log(DecimalToBynary(4));
console.log(DecimalToBynary(7));

module.exports = DecimalToBynary;
