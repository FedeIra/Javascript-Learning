/*
!FIND
El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.

*/
const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
// expected output: 12

const inventario = [
  { nombre: 'manzanas', cantidad: 2 },
  { nombre: 'bananas', cantidad: 0 },
  { nombre: 'cerezas', cantidad: 5 },
];

function esCereza(fruta) {
  return fruta.nombre === 'cerezas';
}

console.log(inventario.find(esCereza));
// { nombre: 'cerezas', cantidad: 5 }

// Otro ejemplo con arrow
const inventario2 = [
  { nombre: 'manzanas', cantidad: 2 },
  { nombre: 'bananas', cantidad: 0 },
  { nombre: 'cerezas', cantidad: 5 },
];

const resultado = inventario2.find((fruta) => fruta.nombre === 'cerezas');

console.log(resultado); // { nombre: 'cerezas', cantidad: 5 }

//-------------------------------------------------------
const findElement = (arr, func) => arr.filter((number) => func(number))[0];

// Otra Forma:
const findElement2 = (arr, func) => arr.find(func);

findElement([1, 3, 5, 8, 9, 10], function (num) {
  return num % 2 === 0;
}); // 8

findElement([1, 3, 5, 9], function (num) {
  return num % 2 === 0;
}); // undefined

// Comprueba si el valor está clasificado como booleano primitivo. Devuelve true o false.

// Booleanos primitivos son true y false.
//-------------------------------------------------------
const booWho = (bool) => typeof bool === 'boolean';

booWho(null); // false
booWho(true); // true
booWho(false); // true
booWho([1, 2, 3]); // false
booWho([].slice); // false
booWho({ a: 1 }); // false
booWho(1); // false
booWho(NaN); // false
booWho('a'); // false
booWho('true'); // false
