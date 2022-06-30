/* 
Given a year, report if it is a leap year. Ocurre cada 4 años, o sea si es divisible por 4.
*/

function leapYear(year) {
  if (year % 4 === 0) {
    return "Its a leap year!";
  } else {
    return "Its not a leap year";
  }
}

console.log(leapYear(2005));

// OTRA FORMA
const isLeapYear = (year) => year % 4 === 0;

console.log(isLeapYear(2014));
console.log(isLeapYear(2015));
console.log(isLeapYear(2016));
console.log(isLeapYear(2017));
console.log(isLeapYear(2018));
console.log(isLeapYear(2019));

/* 
write a javascript program to convert comma-separate values (CSV) string to a 2D array. A new line indicates a new row in the array.

Example: 
abc, def, ghi
jkl, mno, pqr
stu, vwx, yza

*/

const creadorArray = (string) =>
  string.split("\n").map((row) => row.split(","));

let palabras = "abc, def, ghi \n jkl, mno, pqr \n stu, vwx, yza";

console.log(creadorArray(palabras));

/*
write a javascript program to generate a random hexadecimal color code.

#ff0033

*/

const colores = () => Math.floor(Math.random() * 16).toString(16);

const randomColor = () => "#" + Array.from({ length: 6 }).map(colores).join("");

console.log(randomColor());

/*
write a javascript function that returns true if the provided predicate function returns true for all elements in a collection, false otherwise. 

[1,2,3,4,5], (x) => x > 3
*/

let numeros = [1, 2, 3, 4, -1];

const mayorOmenor = (numero) => numero >= 0;

const mayorOmenor2 = (x) => x >= 0;

console.log(numeros.every(mayorOmenor));
console.log(numeros.every(mayorOmenor2));

// Otra forma:

const mayorOmenos3 = (array, funcion) => {
  for (let numero = 0; numero < array.length; numero++) {
    if (!funcion(array[numero])) {
      return false;
    }
  }
  return true;
};

console.log(mayorOmenos3(numeros, (numero) => numero >= 0));

/*
write a javascript function that returns a passed string with letter in alphabetical order.

example string: "webmaster"
expected output: "abeemrstw"

*/

const convertidor = (string) => string.split("").sort().join("");

const convertidor2 = (string) =>
  string
    .split("")
    .sort((a, b) => (a > b ? 1 : -1))
    .join("");

console.log(convertidor("webmaster")); // "abeemrstw"
console.log(convertidor2("webmaster")); // "abeemrstw"

const convertidor3 = (string) =>
  string
    .split("")
    .sort((a, b) => (a > b ? -1 : 1))
    .join("");

console.log(convertidor3("webmaster")); // wtsrmeeba;

/*
write a javascript function that accepts a string as a parameter and counts the number of vowels within the string.

*/

const sumVowels = (string, letters = ["a", "e", "i", "o", "u"]) =>
  string.split("").filter((letra) => letters.indexOf(letra) > -1).length; // el menos uno significa que no esta la letra en letters pq no hay una posicion menor a menos uno

// otra forma
const sumVowels2 = (string) =>
  string
    .split("")
    .filter(
      (letra) =>
        letra == "a" ||
        letra == "e" ||
        letra == "i" ||
        letra == "o" ||
        letra == "u"
    )
    .join("").length;

console.log(sumVowels("hola")); // 2
console.log(sumVowels2("hola")); // 2

/*
write a javascript function to convert an amount to coins.

example input: 46 and possible coins 25, 10, 5 , 2, 1
output: 25, 10, 10, 1
*/

const monedas = (total, tipoMonedas) => {
  const resultado = [];
  while (total > 0) {
    for (let moneda = 0; moneda < tipoMonedas.length; moneda++) {
      if (total - tipoMonedas[moneda] >= 0) {
        resultado.push(tipoMonedas[moneda]);
        total -= tipoMonedas[moneda];
        break;
      }
    }
  }
  return resultado;
};

console.log(monedas(46, [25, 10, 5, 2, 1])); // [ 25, 10, 10, 1 ]

// OTRA FORMA:
const monedas2 = (total, tipoMonedas = [25, 10, 5, 2, 1]) => {
  const resultado = [];
  for (let moneda = 0; moneda < tipoMonedas.length; moneda++) {
    const numeroMoneda = Math.floor(total / tipoMonedas[moneda]); // el Math.floor te redondea para abajo
    for (let y = 0; y < numeroMoneda; y++) {
      resultado.push(tipoMonedas[moneda]);
    }
    total -= tipoMonedas[moneda] * numeroMoneda;
  }
  return resultado;
};

console.log(monedas2(46)); // [ 25, 10, 10, 1 ]

/*
write a javascript function to extract unique characters from a string.

*/

//Una solucion:
const getUniqueChars = (str) =>
  str
    .split("")
    .filter((item, index, arr) => arr.slice(index + 1).indexOf(item) === -1);

/* El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
-currentValue ("item"): El elemento actual del array que está siendo procesado.
-index Opcional ("index"): El índice del elemento actual del array que está siendo procesado.
-array Opcional ("arr"): El array sobre el que se ha llamado filter.
*/

/* El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.
-inicio:
Índice donde empieza la extracción. El primer elemento corresponde con el índice  0.
Si el índice especificado es negativo, indica un desplazamiento desde el final del array. slice(-2)extrae los dos últimos elementos del array
Si inicio es omitido el valor por defecto es 0.
Si inicio es mayor a la longitud del array, se devuelve un array vacío.
-fin:
Índice  que marca el final de la extracción. slice extrae hasta, pero sin incluir el final.
slice(1,4) extrae desde el segundo elemento hasta el cuarto  (los elementos con índices 1, 2,  y 3).

*/

console.log(getUniqueChars("aaaabbbccc")); // [ 'a', 'b', 'c' ]
/*
El método indexOf() retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente.
-searchElement:
Elemento a encontrar en el array.
-fromIndex Opcional:
Indica el índice por el que se comienza la búsqueda. Por defecto es 0, por lo que se busca en todo el array. Si el índice es mayor o igual a la longitud del array, devuelve -1, ya que no se buscaría en el array. Si el valor es negativo, se toma restando posiciones desde el final del array. Hay que tener en cuenta que aunque el índice sea negativo, la búsqueda seguirá realizándose en un orden incremental. Si el índice calculado es menor de 0, la búsqueda se realizará por todo el array.
*/

// Otro ejemplo:

const getUniqueChars2 = (str) => new Set(str.split(""));

console.log(getUniqueChars2("aaaabbbccc")); // Set(3) { 'a', 'b', 'c' }
/*
El objeto Set le permite almacenar valores únicos de cualquier tipo, ya sea valores primitivos o referencias a objetos. Un valor en un Set solo puede ocurrir una vez.
*/

//Se puede pasar el Set a un array:

const getUniqueChars3 = (str) => [...new Set(str.split(""))];

console.log(getUniqueChars3("aaaabbbccc")); // [ 'a', 'b', 'c' ]

//Otro ejemplo:
const filtro = (string) =>
  string
    .split("")
    .filter(
      (letra) =>
        letra == "a" ||
        letra == "e" ||
        letra == "i" ||
        letra == "o" ||
        letra == "u"
    );

console.log(filtro("hola")); // [ 'o', 'a' ]

/*
write a javascript function to find the first not repeated character
example string: "abacddbec"
expected output: "e"
*/

const valorNoRepetido = (str) =>
  str
    .split("") // con el split separo el string y lo convierto en un array
    .filter(
      (
        item,
        index,
        arr // el index hay que meterlo pq quiero aclarar el array ("arr") que me va a servir para el callback filter
      ) => arr.filter((arrItem) => arrItem === item).length === 1 //aca le digo que si el item del array ("arrItem") es igual al item del array del primer filter ("item") y esto no se repite mas de una vez, entonces cumple con la condicion y pasa al nuevo array. Por lo contrario, si fuera el mismo item, pero esto se repite mas de una vez, entonces no se cumple la condicion y no pasa al nuevo array.
    )
    .join(""); //con el join junto los valores del array en un string

console.log(valorNoRepetido("abacddbec")); // e
