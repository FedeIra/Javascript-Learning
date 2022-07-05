// SPLIT

console.log(frase.split(" ")); // agarra un string y separa cada elemento separado por un espacio y crea un arreglo con cada uno.

function asAmirror(str) {
  var string = [];
  for (let i = 0; i < array.length; i++) {
    string.unshift(str[i]);
  }
  return string.join("").split(" ").reverse().join(" ");
}

function capicua(numero) {
  let reves = numero.toString().split(" ").reverse().join("");
  if ((numero = parseInt(numeroAlReves))) return "Es capicua";
  return "No es capicua";
}

const sumVowels = (string, letters = ["a", "e", "i", "o", "u"]) =>
  string.split("").filter((letra) => letters.indexOf(letra) > -1).length; // el menos uno significa que no esta la letra en letters pq no hay una posicion menor a menos uno

let frase = "Q bello mundo por dios, la verdad que me quede sin aire";
console.log(frase.split(" ")); // agarra un string y separa cada elemento separado por un espacio y crea un arreglo con cada uno.

console.log(frase.split(",")); // puede hacer un arreglo conforme la coma del string

function stringMasLarga(str) {
  //La funcion llamada "stringMasLarga", recibe como argumento una frase (string) "str"
  // y debe devolver la palabra (string) mas larga que haya en esa fase (Es decir el que de mayor cantidad de caracteres)
  //Ej:
  //StringMasLarga("Ayer me fui a pasear a una plaza") debe retornar "pasear"
  //Tip: podes usar el metodo de String "split"
  //Tu codigo aca:
  let array = str.split(" ");
  let arrayLarga = [array[0]];

  for (let i = 1; i < array.length; i++) {
    if (arrayLarga[0].length < array[i].length) {
      arrayLarga[0] = array[i];
    }
  }
  return arrayLarga[0];
}
console.log(
  stringMasLarga(
    "Hola como estamos todo bien. Queria preguntar si por casualdiad tenian chorizos a la cacerola amigo, avisamepleaskiofas o sino sabes que"
  )
);
// return str.split(" ").reduce((a, c) => (c.length > a.length ? c : a), "");

//Write a javascript program to replace every character in a given string with the character following it in the alphabet

//String.fromCharCode
//charCodeAt

const moveCharsForward = (str) =>
  str
    .split("")
    .map((char) => String.fromCharCode(char.charCodeAt(0) + 1))
    .join("");

console.log(moveCharsForward("Hola")); // Ipmb

// Write a javascript program to create a new string adding "New!" in front of a given string.
// If the given string begins with "New!" already then return the original string.
// if the string has the new at the start we have to leave it as it was at the start

function retornaNew(string) {
  string = string.split(" ");
  let string2 = ["New!"];

  if (string[0] !== "New!") {
    string.unshift(string2[0]);
  }
  return string.join(" ");
}

console.log(retornaNew("Wine"));

// Write a javascript program to create a new string from a given string taking the first 3 characters and the last 3 characters of a string.

function nuevoString(string) {
  stringNueva = [];

  string = string.split("");

  for (let i = 0; i < string.length; i++) {
    if (i <= 2 || i >= string.length - 3) {
      stringNueva.push(string[i]);
    }
  }
  return stringNueva.join("");
}

console.log(
  nuevoString("Hola Federico como va todo bien anda a cagar q mala onda")
); // Holnda

function asAmirror(str) {
  //La función recibe una frase.
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var string = [];
  for (let i = 0; i < array.length; i++) {
    string.unshift(str[i]);
  }
  return string.join("").split(" ").reverse().join(" ");
}

function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let reves = numero.toString().split(" ").reverse().join("");
  if ((numero = parseInt(numeroAlReves))) return "Es capicua";
  return "No es capicua";
}
//         878 --- "878"----> ["8", "7", "8"]  ---- "878"

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

const sumVowels3 = (string, letters = ["a", "e", "i", "o", "u"]) =>
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
write a javascript function to extract unique characters from a string.

*/

//Una solucion:
const getUniqueChars = (str) =>
  str
    .split("")
    .filter((item, index, arr) => arr.slice(index + 1).indexOf(item) === -1);

// Otro ejemplo:

const getUniqueChars2 = (str) => new Set(str.split(""));

console.log(getUniqueChars2("aaaabbbccc")); // Set(3) { 'a', 'b', 'c' }

//Se puede pasar el Set a un array:

const getUniqueChars3 = (str) => [...new Set(str.split(""))];

console.log(getUniqueChars3("aaaabbbccc")); // [ 'a', 'b', 'c' ]

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
