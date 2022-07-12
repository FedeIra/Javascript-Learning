/* Return Part of an Array Using the slice Method
The slice method returns a copy of certain elements of an array. It can take two arguments, the first gives the index of where to begin the slice, the second is the index for where to end the slice (and it's non-inclusive). If the arguments are not provided, the default is to start at the beginning of the array through the end, which is an easy way to make a copy of the entire array. The slice method does not mutate the original array, but returns a new one.

Here's an example: */

const arr = ["Cat", "Dog", "Tiger", "Zebra"];
const newArray = arr.slice(1, 3);

/* newArray would have the value["Dog", "Tiger"]. */

/* El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.NO ES DESTRUCTIVA. Deja el otro array intacto.
-inicio:
Índice donde empieza la extracción. El primer elemento corresponde con el índice  0.
Si el índice especificado es negativo, indica un desplazamiento desde el final del array. slice(-2)extrae los dos últimos elementos del array
Si inicio es omitido el valor por defecto es 0.
Si inicio es mayor a la longitud del array, se devuelve un array vacío.
-fin:
Índice  que marca el final de la extracción. slice extrae hasta, pero sin incluir el final.
slice(1,4) extrae desde el segundo elemento hasta el cuarto  (los elementos con índices 1, 2,  y 3).

/* Use the slice method in the sliceArray function to return part of the anim array given the provided beginSlice and endSlice indices. The function should return an array. */

function sliceArray(anim, beginSlice, endSlice) {
  // Only change code below this line
  // Only change code above this line
  return anim.slice(beginSlice, endSlice);
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];

console.log(sliceArray(inputAnim, 1, 3)); // ["Dog", "Tiger"]

/* Copy Array Items Using slice()
The next method we will cover is slice(). Rather than modifying an array, slice() copies or extracts a given number of elements to a new array, leaving the array it is called upon untouched. slice() takes only 2 parameters — the first is the index at which to begin extraction, and the second is the index at which to stop extraction (extraction will occur up to, but not including the element at this index). Consider this: */

let weatherConditions = ["rain", "snow", "sleet", "hail", "clear"];

let todaysWeather = weatherConditions.slice(1, 3);
/* todaysWeather would have the value ['snow', 'sleet'], while weatherConditions would still have ['rain', 'snow', 'sleet', 'hail', 'clear'].

In effect, we have created a new array by extracting elements from an existing array.

We have defined a function, forecast, that takes an array as an argument. Modify the function using slice() to extract information from the argument array and return a new array that contains the string elements warm and sunny. */

function forecast(arr) {
  // Only change code below this line
  arr = arr.slice(2, 4);
  return arr;
}

// Only change code above this line
console.log(
  forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"])
);

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
