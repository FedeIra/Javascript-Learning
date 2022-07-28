/* FILL: 
Camia todos los elementos del array a un valor que se asigne.
*/

function HashTable() {
  var numBuckets = 35,
    slots = new Array(numBuckets);
  slots.fill({});
  console.log(slots);
}

HashTable(); // {}*35
/* [
  {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
  {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
  {},
]; */

let arrayEjemplo = [
  "No me cambies",
  "No me cambies",
  "No me cambies",
  "No me cambies",
];
arrayEjemplo.fill("cambiado!");

console.log(arrayEjemplo); // [ 'cambiado!', 'cambiado!', 'cambiado!', 'cambiado!' ]

// Puedo ponerle entre qué elementos del array:

arrayEjemplo.fill("cambiado de vuelta", 0, 2);
console.log(arrayEjemplo); /* 
[
  'cambiado de vuelta',
  'cambiado de vuelta',
  'cambiado!',
  'cambiado!'
] */
