// Objetos que puede tener un array: TODOS
let articles = [
  "snickers",
  "trouser",
  "shirt",
  true,
  0,
  "sockets",
  funcion(),
  { hola: "hola" },
  [1, 2, 3, 4],
];

var articles2 = new Array("jacket", 1.56, false); // otra forma de crear arrays no muy usada

articles.push("hat"); // agrega elemento al final

articles.unshift(4); // lo agrega al ppio

articles.shift(); // elimina primer elemento

articles.pop(); // eliminar ultimo elemento

articles.push(prompt("Agrega primer articulo"));

// Con destructuracion: para crear variables
const numeros = [1, 2, 3, 4];

let uno = numeros[0];
dos = numeros[1];
tres = numeros[2]; //le asigno el elemento dos del array (3) a la variable 3

const [one, two, three] = numeros; //le asigno una variable a cada uno de los elementos del array, pero en un solo codigo
