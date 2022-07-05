function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(" ");
}

const colores = () => Math.floor(Math.random() * 16).toString(16);

const randomColor = () => "#" + Array.from({ length: 6 }).map(colores).join("");

//Write a javascript program to replace every character in a given string with the character following it in the alphabet

//String.fromCharCode
//charCodeAt

const moveCharsForward = (str) =>
  str
    .split("")
    .map((char) => String.fromCharCode(char.charCodeAt(0) + 1))
    .join("");

console.log(moveCharsForward("Hola")); // Ipmb

const SumadorDeUno = (str2) => str2.map((char2) => char2 + 1).join("");

console.log(SumadorDeUno([1, 2, 3, 4])); // 2345

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

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var string = [],
    start = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      string.splice(start, 0, s[i]);
      start++;
    } else {
      string.push(s[i]);
    }
  }
  return string.join("");
}

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
