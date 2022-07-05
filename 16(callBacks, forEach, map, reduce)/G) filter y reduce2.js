// Son muy utiles para los arrays.
// Todos tienen mismo build up

numeros.map(function () {});

numeros.filter(function () {});

numeros.reduce(function () {});

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
