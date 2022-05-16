const PI = 3.1416; // const para variables que no van a cambiar

var hello = "hello world"; // la variable var queda guardada en el ambito global

let hola = "hola mundo"; // la variable let queda guardada en el ambito de bloque o reservada

console.log(prueba_largo.lenght); // para saber el largo de la palabra o array

// Declaracion de varias variables en la misma linea:
//1) Mejor esta forma
let nombre_variable5, nombre_variable6, nombre_variable7;
nombre_variable5 = 5;
nombre_variable6 = 6;
nombre_variable7 = 7;

//2)
var precioUnidad, cantidad, total;
precioUnidad = 5;
cantidad = 100;
total = precioUnidad * cantidad;

// Otro ejemplo con destructuracion para crear variables:
let persona = {
  nombre: "Fede",
  apellido: "Ira",
  edad: 35,
}; //si bien eran propiedad de persona, estas propiedades no son variables de por si.

let { nombre, apellido, edad } = persona; //aca creo las variables y les asigno el valor usando el objeto persona y sus propiedades
