// Son muy utiles para los arrays.
// Todos tienen mismo build up

numeros.map(function () {});

numeros.filter(function () {});

numeros.reduce(function () {});

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

// ------------------------------------------------------- REDUCE ------------------------------------------------------------------------------
// REDUCE: reduce el array original a un unico valor. Nosotros escribimos la funcion reductora.
// Necesita un array y un valor inicial que le tenemos que indicar nosotros. con cada vuelta opera con el valor y tras operar con todos obtenemos un unico valor. Es un acumulador.

//Como lo hariamos normalmente
const numeros4 = [3, 10, 20, 50];
let total = 0;

for (let i = 0; i < numeros4.length; i++) {
  total += numeros4[i];
}
console.log(total); //83

//Con REDUCE:
const total2 = numeros4.reduce(function (acumulador, numero) {
  return acumulador + numero;
}, 0);
console.log(total2); //83

// Reduce con Arrow function:
const total3 = numeros4.reduce((acc, num) => acc + num); //no hace falta poner el 0, porque por default arrance en 0. De lo contrario, lo indoc con ,1)  o la otra posicion desde la q quiero arrancar el contador.

console.log(total3); //83

// Reduce con arrow con callback:
const reduccion = (acumulador, numero) => acumulador + numero; // esta funcion recibe dos parametros.
let total4 = numeros4.reduce(reduccion, 0); // en esta funcion "reduce" con callback invoco la funcion reduccion y le paso los dos atributos conforme los dos parametros que designamos en la funcion reduccion.

console.log(total4); //83

// Otro ejemplo: obtener nuevo array con dobles de cada numero usando reduce

const numeros5 = [71, 41, 18, 88, 3, 65];

const acumularDobles = (acumulador, numero) => {
  acumulador.push(numero * 2);
  return acumulador;
};

const dobles5 = numeros5.reduce(acumularDobles, []);

console.log(dobles5); // [ 142, 82, 36, 176, 6, 130 ]
