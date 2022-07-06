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
