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

const getFileExtension = (str) => str.slice(str.lastIndexOf("."));

// Write a javascript program to create a new string from a given string taking the first 3 characters and the last 3 characters of a string.

const nuevaString = (string) =>
  string.length < 3 ? string : string.slice(0, 3) + string.slice(-3);

console.log(
  nuevaString("Hola Federico como va todo bien anda a cagar q mala onda")
); // Holnda

console.log("hola".slice(-3)); // usos de slice

// write a javascript program to extract the first half of a string of even length

const nuevaString2 = (string) => string.slice(0, string.length / 2);

console.log(nuevaString2("Holas")); //Ho

function nuevaString3(string) {
  return string.slice(0, string.length / 2);
}

console.log(nuevaString3("Fede")); // Fe

// Write a Javascript program to concatenate two strings except their first character
// add two strings togteher removing first character of both strings

const newString3 = (string1, string2) => string1.slice(1) + string2.slice(1); // por default, el slice te lo hace hasta el final del string, y arranca en 0

console.log(newString3("Hola", "Fede"));

/*
write a javascript function to extract unique characters from a string.

*/

//Una solucion:
const getUniqueChars = (str) =>
  str
    .split("")
    .filter((item, index, arr) => arr.slice(index + 1).indexOf(item) === -1);
