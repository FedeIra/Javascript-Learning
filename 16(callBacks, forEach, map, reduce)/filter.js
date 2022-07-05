/* El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
-currentValue ("item"): El elemento actual del array que está siendo procesado.
-index Opcional ("index"): El índice del elemento actual del array que está siendo procesado.
-array Opcional ("arr"): El array sobre el que se ha llamado filter.
*/

// ------------------------------------------------------- FILTER ------------------------------------------------------------------------------
// FILTER: toma cada elemento de un array y si cumplen con las condiciones lo deposita en otro array. De lo contrario, lo descarta.

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

//devolver con filter productos por debajo de 15 incluido

const productosPreciosCuidados = productos2.filter(function (producto) {
  return producto.precio <= 15;
});
console.log(productosPreciosCuidados); // [ { nombre: 'Pera', precio: 10 }, { nombre: 'Manzana', precio: 15 } ]

//Ahora con Arrow function:
const productosPreciosCuidados2 = productos2.filter((i) => i.precio <= 15);

console.log(productosPreciosCuidados2); // [ { nombre: 'Pera', precio: 10 }, { nombre: 'Manzana', precio: 15 } ]

// Otra forma de hacerlo con arrow function y callback:

const esBarato = (i) => i.precio <= 15;

const productosPreciosCuidados3 = productos2.filter(esBarato);

console.log(productosPreciosCuidados3); // [ { nombre: 'Pera', precio: 10 }, { nombre: 'Manzana', precio: 15 } ]

//Si quiere sacar los productos caros:

const esCaro = (producto) => !esBarato(producto);
const productosCaros = productos2.filter(esCaro);

console.log(productosCaros); // [ { nombre: 'banana', precio: 20 } ]

// Otro ejemplo: para sacar numeros de arrays repetidos
// Para eso necesito indexOf()
// IndexOf: este metodo retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente.

const arreglo1 = [12, 42, 23, 76, 12, 23, 11, 9, 9, 10];

const arreglo2 = arreglo1.filter(function (numero, posicion, numeros) {
  return posicion === numeros.indexOf(numero); // aca te dice: si la posicion del numero se encuentra en la misma posicion de la primera vez que aparece ese numero en el array, entonces ese numero (en dicha posicion) se deposita en el nuevo array. De lo contrario, si la posicion del numero no coincide con la primera posicion en el que aparece ese numero (es decir, ya habia aparecido ese numero en el array), se filtra o elimina el numero de esa posicion.
});
console.log(arreglo2); //[12, 42, 23, 76, 11,  9, 10]
//

function sumaTodosImpares2(array2) {
  // La funcion llamada 'sumaTodosImpares" recibe como argumento un array de enteros.
  // y debe devolver la suma total entre todos los numeros impares
  //ej:
  //sumaTodosImpares([1,5,2,9,6,4]) devuelve 1+5+9=15
  //tu codigo aca:

  return array2.reduce((acc, ele) => (ele % 2 !== 0 ? acc + ele : acc), 0);
}

console.log(sumaTodosImpares2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

function buscaDestruye(arreglo, num) {
  return arreglo.filter((e) => e !== num);
}
console.log(buscaDestruye([1, 2, 4, 5, 6, 8, 9], 6));

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
write a javascript function to extract unique characters from a string.

*/

//Una solucion:
const getUniqueChars = (str) =>
  str
    .split("")
    .filter((item, index, arr) => arr.slice(index + 1).indexOf(item) === -1);

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

// EJERCICIO DE ARRAYS

const people = [
  {
    firstName: "Sam",
    lastName: "Hughes",
    DOB: "07/07/1978",
    department: "Development",
    salary: "45000",
  },
  {
    firstName: "Terri",
    lastName: "Bishop",
    DOB: "02/04/1989",
    department: "Development",
    salary: "35000",
  },
  {
    firstName: "Jar",
    lastName: "Burke",
    DOB: "11/01/1985",
    department: "Marketing",
    salary: "38000",
  },
  {
    firstName: "Julio",
    lastName: "Miller",
    DOB: "12/07/1991",
    department: "Sales",
    salary: "40000",
  },
  {
    firstName: "Chester",
    lastName: "Flores",
    DOB: "03/15/1988",
    department: "Development",
    salary: "41000",
  },
  {
    firstName: "Madison",
    lastName: "Marshall",
    DOB: "09/22/1980",
    department: "Sales",
    salary: "32000",
  },
  {
    firstName: "Ava",
    lastName: "Pena",
    DOB: "11/02/1986",
    department: "Development",
    salary: "38000",
  },
  {
    firstName: "Gabriella",
    lastName: "Steward",
    DOB: "08/26/1994",
    department: "Marketing",
    salary: "46000",
  },
  {
    firstName: "Charles",
    lastName: "Campbell",
    DOB: "09/04/1977",
    department: "Sales",
    salary: "42000",
  },
  {
    firstName: "Tiffany",
    lastName: "Lambert",
    DOB: "05/11/1990",
    department: "Development",
    salary: "34000",
  },
  {
    firstName: "Antonio",
    lastName: "Gonzalez",
    DOB: "03/24/1985",
    department: "Office Management",
    salary: "49000",
  },
  {
    firstName: "Aaron",
    lastName: "Garrett",
    DOB: "09/04/1985",
    department: "Development",
    salary: "39000",
  },
];

// Exercises

// 2) Who are the people that are currently older than 30?
const mayores30 = people.filter(
  (person) => new Date().getFullYear() - new Date(person.DOB).getFullYear() > 30
);

console.log(mayores30.length); // te imprime 10 pq son 10 las personas mayores a 30

function buscaDestruye(arreglo, num) {
  //La funcion "buscadestruye" recibe como argumento un array de enteros "arreglo" y un entero "num".
  //esta funcion tiene que eliminar los numeros del array que coincidan el numero recibido como argumento.
  // La funcion debe retornar el array sin los numeros sacados
  //Ej: buscaDestruye([1, 2, 3, 4], 2) devuelve => [1, 3, 4]
  //Nota: Si el numero se repite mas de una vez, tambien hay que eliminarlo.
  //Ej> buscaDestruye([1, 2, 3, 4, 1] 1) devuelve => [2, 3, 4]
  //
  //Tu codigo aca:

  let arreglo2 = [];

  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] !== num) {
      arreglo2.push(arreglo[i]);
    } else {
      continue;
    }
  }
  arreglo = arreglo2;
  return arreglo;
}

console.log(buscaDestruye([1, 2, 4, 5, 6, 8, 9], 6));

//  return arreglo.filter((e) => e !== num);
