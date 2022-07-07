console.log(parseInt(c)); //el parseInt te va a devolver la parte entera

console.log(d + parseInt(e)); // asi lo puedo sumar de lo contrario te concatena el numero d con el string del e, lo q te daria 7.199992.6. En su lugar, los suma y te tira 9.19999

console.log(parseInt(d + parseInt(e))); //si quiero evitar las comas, le pongo otro parseInt antes del partensis sumandolos. Podria usar tambien el toFixed(0) para sacarle todos los numeros

/* Use the parseInt Function with a Radix
The parseInt() function parses a string and returns an integer. It takes a second argument for the radix, which specifies the base of the number in the string. The radix can be an integer between 2 and 36.

The function call looks like: */

parseInt(string, radix);
/* And here's an example: */

const a = parseInt("11", 2);
/* The radix variable says that 11 is in the binary system, or base 2. This example converts the string 11 to an integer 3.

Use parseInt() in the convertToInteger function so it converts a binary number to an integer and returns it. */

function convertToInteger(str) {
  return parseInt(str, 2);
}

console.log(convertToInteger("10011")); // 19
console.log(convertToInteger("111001")); //  57
console.log(convertToInteger("JamesBond")); // NaN
