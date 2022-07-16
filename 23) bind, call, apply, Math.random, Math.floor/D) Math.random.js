/* Generate Random Fractions with JavaScript
Random numbers are useful for creating random behavior.

JavaScript has a Math.random() function that generates a random decimal number between 0 (inclusive) and 1 (exclusive). Thus Math.random() can return a 0 but never return a 1.

La función Math.random() devuelve un número de coma flotante pseudo-aleatorio, comprendido en el rango de 0 a menor que 1 (es decir, incluido el 0 pero no el 1), con una distribución aproximadamente uniforme en este rango. Dicho rango puede ser ampliado hasta los valores deseados. La implementación selecciona la semilla inicial del algoritmo de generación de números aleatorios, no pudiendo ser esta elegida o restablecida por el usuario.

Note: Like Storing Values with the Assignment Operator, all function calls will be resolved before the return executes, so we can return the value of the Math.random() function.

Change randomFraction to return a random number instead of returning 0. */

const colores = () => Math.floor(Math.random() * 16).toString(16);

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  numero = Math.floor(Math.random() * 2);
  return numero;
}

var numero_aleatorio = Math.round(Math.random() * 100); // el math tiene metodos nada mas. Es para programas matematicos complejos, no los operadores basicos. Ademas tira numeros aleatorios.
// Tira un numero decimeal entre 0 y 1, por eso le agregue un *100
// con el Math.round lo redondeo

function randomFraction() {
  // Only change code below this line
  return Math.random();
  // Only change code above this line
}

console.log(randomFraction()); // example: 0.3556731368781869

console.log(Math.random() * 10); // te tira decimales por q al multiplicarlo 10 te tira de 0 a 9.9999999 (no incluye el 10).

console.log(Math.random() * 20); // te tira decimales por q al multiplicarlo 20 te tira de 0 a 19.999999 con decimales. No incluye el 20.

console.log(Math.random() * 100); // te tira decimales por q al multiplicarlo por 100 si o si te devuelve entre  0 (0*100) y 99.999999 (0.999999*100). No incluye el 100

/* Es decir, el multiplicador va a ser el limite (no inclusivo) del numero decimal random sinedo 0 inclusive el minimo */

/* Generate Random Whole Numbers within a Range
Instead of generating a random whole number between zero and a given number like we did before, we can generate a random whole number that falls within a range of two specific numbers.

To do this, we'll define a minimum number min and a maximum number max.

Here's the formula we'll use. Take a moment to read it and try to understand what this code is doing:
 */
Math.floor(Math.random() * (max - min + 1)) + min;
/* Create a function called randomRange that takes a range myMin and myMax and returns a random whole number that's greater than or equal to myMin, and is less than or equal to myMax, inclusive. */

// Quiero generar un numero decimal random entre 10 y 100:

// Forma:
let minimo = 10;
let maximo = 100;

console.log(Math.random() * (maximo - minimo) + minimo);

//LLevado a funcion:
function minimoMaximo(minimo, maximo) {
  return Math.random() * (maximo - minimo) + minimo;
}

console.log(minimoMaximo(10, 100));

// Funcion redondeando con floor:
function minimoMaximo(minimo, maximo) {
  return Math.floor(Math.random() * (maximo - minimo) + minimo);
}

console.log(minimoMaximo(10, 100)); // el tema es q no llega al maximo de 100, por lo q le tengo q sumar 1 y q redonde

//Funcion para que llegue al maximo:
function minimoMaximo(minimo, maximo) {
  return Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
}

console.log(minimoMaximo(10, 100));
