/* Use the map Method to Extract Data from an Array:
So far we have learned to use pure functions to avoid side effects in a program. Also, we have seen the value in having a function only depend on its input arguments.

This is only the beginning. As its name suggests, functional programming is centered around a theory of functions.

It would make sense to be able to pass them as arguments to other functions, and return a function from another function. Functions are considered first class objects in JavaScript, which means they can be used like any other object. They can be saved in variables, stored in an object, or passed as function arguments.

Let's start with some simple array functions, which are methods on the array object prototype. In this exercise we are looking at Array.prototype.map(), or more simply map.

The map method iterates over each item in an array and returns a new array containing the results of calling the callback function on each element. It does this without mutating the original array.

When the callback is used, it is passed three arguments. The first argument is the current element being processed. The second is the index of that element and the third is the array upon which the map method was called.

See below for an example using the map method on the users array to return a new array containing only the names of the users as elements. For simplicity, the example only uses the first argument of the callback. */

const users = [
  { name: "John", age: 34 },
  { name: "Amy", age: 20 },
  { name: "camperCat", age: 10 },
];

const names = users.map((user) => user.name);
console.log(names);
/* The console would display the value [ 'John', 'Amy', 'camperCat' ]. */

// --------------------------------------------------------------
/* Use the map Method to Extract Data from an Array:
So far we have learned to use pure functions to avoid side effects in a program. Also, we have seen the value in having a function only depend on its input arguments.

This is only the beginning. As its name suggests, functional programming is centered around a theory of functions.

It would make sense to be able to pass them as arguments to other functions, and return a function from another function. Functions are considered first class objects in JavaScript, which means they can be used like any other object. They can be saved in variables, stored in an object, or passed as function arguments.

Let's start with some simple array functions, which are methods on the array object prototype. In this exercise we are looking at Array.prototype.map(), or more simply map.

The map method iterates over each item in an array and returns a new array containing the results of calling the callback function on each element. It does this without mutating the original array.

When the callback is used, it is passed three arguments. The first argument is the current element being processed. The second is the index of that element and the third is the array upon which the map method was called.

See below for an example using the map method on the users array to return a new array containing only the names of the users as elements. For simplicity, the example only uses the first argument of the callback. */

const users2 = [
  { name: "John", age: 34 },
  { name: "Amy", age: 20 },
  { name: "camperCat", age: 10 },
];

const names2 = users2.map((user) => user.name);
console.log(names2);
/* The console would display the value [ 'John', 'Amy', 'camperCat' ]. */

/* The watchList array holds objects with information on several movies. Use map on watchList to assign a new array of objects to the ratings variable. Each movie in the new array should have only a title key with the name of the film, and a rating key with the IMDB rating. The code in the editor currently uses a for loop to do this, so you should replace the loop functionality with your map expression. */

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
const ratings = watchList.map(function (movie) {
  return {
    title: movie["Title"],
    rating: movie["imdbRating"],
  };
});

// Only change code above this line

console.log(JSON.stringify(ratings));

/* [
  { title: "Inception", rating: "8.8" },
  { title: "Interstellar", rating: "8.6" },
  { title: "The Dark Knight", rating: "9.0" },
  { title: "Batman Begins", rating: "8.3" },
  { title: "Avatar", rating: "7.9" },
]; */

// ------------------------------------------------------------------------------------------------------
/* Implement map on a Prototype:
As you have seen from applying Array.prototype.map(), or simply map() earlier, the map method returns an array of the same length as the one it was called on. It also doesn't alter the original array, as long as its callback function doesn't.

In other words, map is a pure function, and its output depends solely on its inputs. Plus, it takes another function as its argument.

You might learn a lot about the map method if you implement your own version of it. It is recommended you use a for loop or Array.prototype.forEach(). */

/*
    METODO MAP: crea un nuevo array con los resultados de la llamada a la funcion indicada aplicados a cada uno de sus elementos
    
    map se usa cuando queremos cambiar cada elemento de una matriz de la misma manera. Map toma una devolucion de llamada como unico argumento. al igual que el metodo forEach, el callback tiene el elemento y el indice de argumentos opcionales. A diferencia de reduce, map devolvera toda la matriz o array.

    /* Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map(). You should not use the built-in map method. The Array instance can be accessed in the myMap method using this. */

// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myMap = function (callback) {
  const newArray = [];
  // Only change code below this line
  for (let i = 0; i < s.length; i++) {
    newArray.push(callback(s[i]));
  }
  // Only change code above this line
  return newArray;
};

const new_s = s.myMap(function (item) {
  return item * 2;
});

new_s; // [ 46, 130, 196, 10 ]

//reduce, map y forEach son todos callbacks. Es una funcion que se pasa a otra como argumento y se ejecuta despues de q se haya completado una cosa

// ---------------------------------------------------------------- MAP -----------------------------------------------------------------------
// MAP: cuando tenemos un array y queremos obtener un nuevo array de otra cosa. Lo que hagamos en el map tiene que ser sincrono si o si (igual que con filter y reduce)

const numeros = [3, 10, 20, 50]; // Tenemos el primer array

const dobles = numeros.map(function (numero, posicion, numeros) {});

// recibe como parametros el numero o elemento del array. El segundo es la posicion del array que solemos denominar i. Incluso se le puede agregar un tercer parametros q es el array que se invoca. No hace falta escribir los parametros dos y tres si no los vamos a utilizar.

const dobles2 = numeros.map(function (numero) {});

//Si queremos solo poner la segunda posicion lo podemos hacer del siguiente modo

const dobles3 = numeros.map(function (_, posicion) {});

// Sigamos con el ejemplo:

const dobles4 = numeros.map(function (numero) {
  return numero * 2;
});

console.log(numeros); // [ 3, 10, 20, 50 ]
console.log(dobles4); // [ 6, 20, 40, 100 ]

//Otro ejemplo:
const productos = [
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

const productosDescuentos = productos.map(function (producto) {
  return {
    ...producto, //nombre: producto.nombre,
    precio: producto.precio * 0.25,
  };
});

console.log(productos); //[{ nombre: 'Pera', precio: 10 },nombre: 'Manzana', precio: 15 }, { nombre: 'banana', precio: 20 }]
console.log(productosDescuentos); // [{ nombre: 'Pera', precio: 2.5 }, { nombre: 'Manzana', precio: 3.75 }, { nombre: 'banana', precio: 5 }]

//array con solo los nombres de los productos

const productosNombres = productos.map(function (producto) {
  return producto.nombre;
});

// console.log(productosNombres); // [ 'Pera', 'Manzana', 'banana' ]

// Puedo escribir lo mismo de una forma mas corta con ARROW FUNCTION:
//1) se saca la palabra function y se la reemplaza con una flecha
//2) como solo hay un parametro, la variable "producto" no tiene que estar entre parentesis. Se lo sacamos
//3) como solo contiene una instruccion de retorno, le podemos sacar y dejar el valor de retorno de manera implica. Es decir, solo "producto.nombre"
//4) como estamos repitiendo dos veces la palabra producto, pero nos importa el nombre, l;a palabra "producto" inicial puede llamarse de cualquier otra manera. Le ponemos "nombreProducto"

const productosNombres2 = productos.map((producto) => producto.nombre);

console.log(productosNombres2);

let numbers = [1, 5, 10, 15];

let doubles = numbers.map(function (i) {
  // esto se convierte en un arreglo nuevo.
  return i * 2; //tiene que retornar algo pq ese algo lo usa para reconstruir el arreglo. Mapea todos los elementos del arreglo para generar uno nuevo
});

console.log(doubles); // [2,1,0,20,30]

let alumnos2 = ["mati", "fede", "leo", "tincho", "emi", "juan"];

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1); // charAt() is a string method that is used to retrieve a character at a specific position in a string. El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará. UpperCase le pone mayuscula.
};

//Con callbacks MAP

let nuevoAlumnos = alumnos.map(function (elemento, indice) {
  // con el map evito lo siguiente: let nuevoArray = []; for (let i = 0; i < alumnos.length; i++) {
  return elemento.capitalize(); //aprovecho la funcion capitalize para ponerle mayuscula
});
console.log(nuevoAlumnos);

// Sin callbacks
let nuevoArray = [];
for (let i = 0; i < alumnos.length; i++) {
  nuevoArray.push(alumnos[i].capitalize()); //aprovecho la funcion capitalize para ponerle mayuscula
}
console.log(nuevoArray); // te da el mismo resultado que usando map

// OTROS EJEMPLOS DE MAP:

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  let nuevoArray = array.map(function (i) {
    return cb(i);
  });
  return nuevoArray;
}

function filtrar(funcion) {
  Array.prototype.filtrar = (funcion, productos) =>
    productos.map((productos) => productos.funcion());
}

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

// USO DE MAP CON OBJETO

const orders = [
  {
    orderId: "123",
    customerId: "123",
    deliveryDate: "01-01-2020",
    delivered: true,
    items: [
      { productId: "123", price: 55 },
      { productId: "234", price: 30 },
    ],
  },
  {
    orderId: "234",
    customerId: "234",
    deliveryDate: "01-02-2020",
    delivered: false,
    items: [{ productId: "234", price: 30 }],
  },
  {
    orderId: "345",
    customerId: "234",
    deliveryDate: "05-01-2020",
    delivered: true,
    items: [
      { productId: "567", price: 30 },
      { productId: "678", price: 80 },
    ],
  },
  {
    orderId: "456",
    customerId: "345",
    deliveryDate: "12-01-2020",
    delivered: true,
    items: [
      { productId: "789", price: 12 },
      { productId: "890", price: 90 },
    ],
  },
  {
    orderId: "578",
    customerId: "456",
    deliveryDate: "12-01-2020",
    delivered: true,
    items: [
      { productId: "901", price: 43 },
      { productId: "123", price: 55 },
    ],
  },
];

// 2) Create a new property on each order with the total price of items ordered.

console.log(
  orders.map((delivery) => ({
    ...delivery, // con los 3 puntos suspensivos seguido de coma es para agregarle una propiedad al objeto respetando sus propiedades anteriores
    orderTotal: delivery.items.reduce((acc, item) => acc + item.price, 0), //defino la propiedad a traves de un reduce de los valores de los items
  }))
);

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

// 3) Get a list of the people's full name (firstName and lastName).

const listaNombreCompleto = people.map(
  (person) => `${person.firstName} ${person.lastName}`
);

console.log(listaNombreCompleto); //["Sam Hughes","Terri Bishop","Jar Burke","Julio Miller","Chester Flores","Madison Marshall","Ava Pena","Gabriella Steward","Charles Campbell","Tiffany Lambert","Antonio Gonzalez","Aaron Garrett"];

// Otra forma de hacerlo:

const listaNombreCompleto2 = people.map(
  ({ firstName, lastName }) => `${firstName} ${lastName}`
);
console.log(listaNombreCompleto2);

//Le puedo agregar el nombre completo a todas estas personas:

console.log(
  people.map((person) => ({
    ...person,
    fullName: `${person.firstName} ${person.lastName}`,
  }))
);

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

/* Complete the code for the squareList function using any combination of map(), filter(), and reduce(). The function should return a new array containing the squares of only the positive integers (decimal numbers are not integers) when an array of real numbers is passed to it. An example of an array of real numbers is [-3, 4.8, 5, 3, -3.2].

Note: Your function should not use any kind of for or while loops or the forEach() function. */

const squareList = (arr) => {
  // Only change code below this line

  return arr
    .filter((number) => number > 0 && Number.isInteger(number))
    .map((number) => number * number);

  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]); // [ 25, 9 ]
console.log(squaredIntegers);

squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]); // [ 16, 1764, 36 ]

squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]); // [ 9, 100, 49 ]
