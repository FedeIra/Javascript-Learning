// IndexOf: este metodo retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente.

/*
El método indexOf() retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente.
-searchElement:
Elemento a encontrar en el array.
-fromIndex Opcional:
Indica el índice por el que se comienza la búsqueda. Por defecto es 0, por lo que se busca en todo el array. Si el índice es mayor o igual a la longitud del array, devuelve -1, ya que no se buscaría en el array. Si el valor es negativo, se toma restando posiciones desde el final del array. Hay que tener en cuenta que aunque el índice sea negativo, la búsqueda seguirá realizándose en un orden incremental. Si el índice calculado es menor de 0, la búsqueda se realizará por todo el array.
*/

/* Check For The Presence of an Element With indexOf():
Since arrays can be changed, or mutated, at any time, there's no guarantee about where a particular piece of data will be on a given array, or if that element even still exists. Luckily, JavaScript provides us with another built-in method, indexOf(), that allows us to quickly and easily check for the presence of an element on an array. indexOf() takes an element as a parameter, and when called, it returns the position, or index, of that element, or -1 if the element does not exist on the array.

For example: */

let fruits = ["apples", "pears", "oranges", "peaches", "pears"];

fruits.indexOf("dates");
fruits.indexOf("oranges");
fruits.indexOf("pears");

/* indexOf('dates') returns -1, indexOf('oranges') returns 2, and indexOf('pears') returns 1 (the first index at which each element exists).

indexOf() can be incredibly useful for quickly checking for the presence of an element on an array. We have defined a function, quickCheck, that takes an array and an element as arguments. Modify the function using indexOf() so that it returns true if the passed element exists on the array, and false if it does not. */

function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) {
      newArr.push(arr[i]);
    }
  }
  // Only change code above this line
  return newArr;
}

console.log(
  filteredArray(
    [
      [10, 8, 3],
      [14, 6, 23],
      [3, 18, 6],
    ],
    18
  )
); // []

console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));

const arreglo1 = [12, 42, 23, 76, 12, 23, 11, 9, 9, 10];

const arreglo2 = arreglo1.filter(function (numero, posicion, numeros) {
  return posicion === numeros.indexOf(numero); // aca te dice: si la posicion del numero se encuentra en la misma posicion de la primera vez que aparece ese numero en el array, entonces ese numero (en dicha posicion) se deposita en el nuevo array. De lo contrario, si la posicion del numero no coincide con la primera posicion en el que aparece ese numero (es decir, ya habia aparecido ese numero en el array), se filtra o elimina el numero de esa posicion.
});
console.log(arreglo2); //[12, 42, 23, 76, 11,  9, 10]
//

/*
write a javascript function to extract unique characters from a string.

*/

//Una solucion:
const getUniqueChars = (str) =>
  str
    .split("")
    .filter((item, index, arr) => arr.slice(index + 1).indexOf(item) === -1);

const getFileExtension = (str) => str.slice(str.lastIndexOf("."));

// OTRO EJERCICIO

const numeros3 = [1, 2, 3, 4, 5];

const numerosImpares = numeros3.filter(function (numero) {
  return numero % 2 !== 0;
});
console.log(numerosImpares); //[ 1, 3, 5 ]

//Ahora con arrow function:

const numerosPares = numeros3.filter((numero) => numero % 2 === 0);

console.log(numerosPares); // [ 2, 4 ]

// Utilizando el objeto productos de antes:
const productos2 = [
  {
    nombre: "Pera",
    precio: 10,
  },
  {
    nombre: "Manzana",
    precio: 15,
  },
  {
    nombre: "banana",
    precio: 20,
  },
];

const arreglo3 = [12, 42, 23, 76, 12, 23, 11, 9, 9, 10];

const arreglo4 = arreglo1.filter(function (numero, posicion, numeros) {
  return posicion === numeros.indexOf(numero); // aca te dice: si la posicion del numero se encuentra en la misma posicion de la primera vez que aparece ese numero en el array, entonces ese numero (en dicha posicion) se deposita en el nuevo array. De lo contrario, si la posicion del numero no coincide con la primera posicion en el que aparece ese numero (es decir, ya habia aparecido ese numero en el array), se filtra o elimina el numero de esa posicion.
});
console.log(arreglo4); //[12, 42, 23, 76, 11,  9, 10]

/*
write a javascript function to extract unique characters from a string.

*/

//Una solucion:
const getUniqueChars2 = (str) =>
  str
    .split("")
    .filter((item, index, arr) => arr.slice(index + 1).indexOf(item) === -1);

// Write a javascript program to create a new string adding "New!" in front of a given string.
// If the given string begins with "New!" already then return the original string.
// if the string has the new at the start we have to leave it as it was at the start

const addNew = (str) => (str.indexOf("New!") === 0 ? str : `New! ${str}`);

console.log(addNew("New! Product")); // New! Product
console.log(addNew("Product")); // New! Product
