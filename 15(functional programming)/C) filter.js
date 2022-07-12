/* Use the filter Method to Extract Data from an Array:
Another useful array function is Array.prototype.filter(), or simply filter().

filter calls a function on each element of an array and returns a new array containing only the elements for which that function returns true. In other words, it filters the array, based on the function passed to it. Like map, it does this without needing to modify the original array.

The callback function accepts three arguments. The first argument is the current element being processed. The second is the index of that element and the third is the array upon which the filter method was called.

See below for an example using the filter method on the users array to return a new array containing only the users under the age of 30. For simplicity, the example only uses the first argument of the callback. */

const users = [
  { name: "John", age: 34 },
  { name: "Amy", age: 20 },
  { name: "camperCat", age: 10 },
];

const usersUnder30 = users.filter((user) => user.age < 30);
console.log(usersUnder30);
/* The console would display the value [ { name: 'Amy', age: 20 }, { name: 'camperCat', age: 10 } ]. */

/* El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
-currentValue ("item"): El elemento actual del array que está siendo procesado.
-index Opcional ("index"): El índice del elemento actual del array que está siendo procesado.
-array Opcional ("arr"): El array sobre el que se ha llamado filter.
*/

/* The variable watchList holds an array of objects with information on several movies. Use a combination of filter and map on watchList to assign a new array of objects with only title and rating keys. The new array should only include objects where imdbRating is greater than or equal to 8.0. Note that the rating values are saved as strings in the object and you may need to convert them into numbers to perform mathematical operations on them. */

// The global variable
const watchList = [
  {
    Title: "Inception",
    Year: "2010",
    Rated: "PG-13",
    Released: "16 Jul 2010",
    Runtime: "148 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer: "Christopher Nolan",
    Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    Language: "English, Japanese, French",
    Country: "USA, UK",
    Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    Metascore: "74",
    imdbRating: "8.8",
    imdbVotes: "1,446,708",
    imdbID: "tt1375666",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Interstellar",
    Year: "2014",
    Rated: "PG-13",
    Released: "07 Nov 2014",
    Runtime: "169 min",
    Genre: "Adventure, Drama, Sci-Fi",
    Director: "Christopher Nolan",
    Writer: "Jonathan Nolan, Christopher Nolan",
    Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Language: "English",
    Country: "USA, UK",
    Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    Metascore: "74",
    imdbRating: "8.6",
    imdbVotes: "910,366",
    imdbID: "tt0816692",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "The Dark Knight",
    Year: "2008",
    Rated: "PG-13",
    Released: "18 Jul 2008",
    Runtime: "152 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer:
      "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    Language: "English, Mandarin",
    Country: "USA, UK",
    Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    Metascore: "82",
    imdbRating: "9.0",
    imdbVotes: "1,652,832",
    imdbID: "tt0468569",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Batman Begins",
    Year: "2005",
    Rated: "PG-13",
    Released: "15 Jun 2005",
    Runtime: "140 min",
    Genre: "Action, Adventure",
    Director: "Christopher Nolan",
    Writer:
      "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    Language: "English, Urdu, Mandarin",
    Country: "USA, UK",
    Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    Metascore: "70",
    imdbRating: "8.3",
    imdbVotes: "972,584",
    imdbID: "tt0372784",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Avatar",
    Year: "2009",
    Rated: "PG-13",
    Released: "18 Dec 2009",
    Runtime: "162 min",
    Genre: "Action, Adventure, Fantasy",
    Director: "James Cameron",
    Writer: "James Cameron",
    Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    Language: "English, Spanish",
    Country: "USA, UK",
    Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    Metascore: "83",
    imdbRating: "7.9",
    imdbVotes: "876,575",
    imdbID: "tt0499549",
    Type: "movie",
    Response: "True",
  },
];

// Only change code below this line

const filteredList = watchList
  .filter((movie) => parseInt(movie["imdbRating"]) >= 8.0)
  .map(function (movie) {
    return { title: movie["Title"], rating: movie["imdbRating"] };
  });
// Only change code above this line

console.log(filteredList);

/* 
[
  { title: "Inception", rating: "8.8" },
  { title: "Interstellar", rating: "8.6" },
  { title: "The Dark Knight", rating: "9.0" },
  { title: "Batman Begins", rating: "8.3" },
]; */

/* Implement the filter Method on a Prototype
You might learn a lot about the filter method if you implement your own version of it.It is recommended you use a for loop or Array.prototype.forEach(). */

/* Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter(). You should not use the built-in filter method. The Array instance can be accessed in the myFilter method using this. */

// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function (callback) {
  // Only change code below this line
  const newArray = [];
  for (let i = 0; i < s.length; i++) {
    if (callback(s[i])) {
      newArray.push(s[i]);
    }
  }
  // Only change code above this line
  return newArray;
};

const new_s = s.myFilter(function (item) {
  return item % 2 === 1;
});

new_s; // [23, 65, 5]

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
