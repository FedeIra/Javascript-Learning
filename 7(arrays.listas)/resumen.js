var articles = [
  "snickers",
  "trouser",
  "shirt",
  true,
  0,
  "sockets",
  funcion(),
  { hola: "hola" },
  [1, 2, 3, 4],
]; // puede tener todo tipo de cosas

var articles2 = new Array("jacket", 1.56, false); // estas dos son las formas de crear arrays o conjunto de valores. Es parecido a las listas de python

articles3.push("hat"); // para agregar un elemento mas esta el metodo push. Los agrega al final

articles3.unshift(4); // el metodo unshift hace lo mismo q el push pero los agrega al ppio

articles3.shift(); // metodo shift es para eliminar elementos al principio y metodo pop para eliminar al final

articles3.pop(); // para eliminar el ultimo

document.write(articulos[5] + "</strong></p>");

lista_pedido.push(prompt("Agrega primer articulo"));

const numeros = [1, 2, 3, 4];

let uno = numeros[0];
dos = numeros[1];
tres = numeros[2]; //le asigno el elemento dos del array (3) a la variable 3

const [one, two, three] = numeros; //le asigno una variable a cada uno de los elementos del array, pero en un solo codigo

let persona = {
  nombre: "Fede",
  apellido: "Ira",
  edad: 35,
}; //si bien eran propiedad de persona, estas propiedades no son variables de por si.

let { nombre, apellido, edad } = persona; //aca creo las variables y les asigno el valor usando el objeto persona y sus propiedades
