/* Use typeof to Check the Type of a Variable:
You can use typeof to check the data structure, or type, of a variable. This is useful in debugging when working with multiple data types. If you think you're adding two numbers, but one is actually a string, the results can be unexpected. Type errors can lurk in calculations or function calls. Be careful especially when you're accessing and working with external data in the form of a JavaScript Object Notation (JSON) object.

Here are some examples using typeof: */

console.log(typeof ""); // string
console.log(typeof 0); // number
console.log(typeof []); // object. Esto porque en js los arrys, en la técnica, son objetos.
console.log(typeof {}); // object

/* In order, the console will display the strings string, number, object, and object.

JavaScript recognizes seven primitive (immutable) data types: Boolean, Null, Undefined, Number, String, Symbol (new with ES6), and BigInt (new with ES2020), and one type for mutable items: Object. Note that in JavaScript, arrays are technically a type of object.

Add two console.log() statements to check the typeof each of the two variables seven and three in the code. */

let seven = 7;
let three = "3";
console.log(seven + three);
// Only change code below this line
console.log(typeof seven); // number
console.log(typeof three); // string

let e = "2.6";

console.log(typeof e); // el valor de la variable e es un string. Lo mismo pasaria con el prompt. Si le sumas a algo te va a hacer un proceso de concatenacion, pero nosotros queremos sumarlo y usarlo como numero, no como string. Lo mismo pasa con los arrays.

let verdadero = true;

let falso = false;

console.log(typeof verdadero, typeof falso); //son los dos valores booleanos

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  if (
    numero < 2 ||
    numero % 1 !== 0 ||
    isNaN(numero) == true ||
    typeof numero === "string"
  ) {
    return false;
  }
  for (var i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

const a = [];
console.log(typeof a); //te lo define como objeto. Pq el arreglo es un objeto
console.log(a); // imprime [] , lo que es un arreglo

// HTML:

alert(typeof num1); // Esto te dice el tipo de valor de la variable, es decir, te dice si es string, etc. En este caso te va a decir q es string.
