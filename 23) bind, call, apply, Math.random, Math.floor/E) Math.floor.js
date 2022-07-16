/* Generate Random Whole Numbers with JavaScript
It's great that we can generate random decimal numbers, but it's even more useful if we use it to generate random whole numbers.

Use Math.random() to generate a random decimal.
Multiply that random decimal by 20.
Use another function, Math.floor() to round the number down to its nearest whole number.
Remember that Math.random() can never quite return a 1 and, because we're rounding down, it's impossible to actually get 20. This technique will give us a whole number between 0 and 19.

Putting everything together, this is what our code looks like: */

Math.floor(Math.random() * 20);
/* We are calling Math.random(), multiplying the result by 20, then passing the value to Math.floor() function to round the value down to the nearest whole number.

Use this technique to generate and return a random whole number between 0 and 9. */

function randomWholeNum() {
  // Only change code below this line

  return Math.floor(Math.random() * 10);
}

console.log(randomWholeNum()); // example: 3

const colores = () => Math.floor(Math.random() * 16).toString(16);

/*
recibo un string "110" / output 6
En este caso la base es 2
hay que ir a cada uno de los elementos y multiplicarlo por su potencia y sumarlos

1) convertir el string a array
2) dar vuelta los numeros, revertirlos
3) recorrer el array usando la posicion y esa posicion q sea el factor por el q lo voy a hacer
4) multiplicar el resultado por el valor del elemento del array
5) sumar los resultados
*/

function DecimalABinario(num) {
  let result = "";

  while (num > 0) {
    result = (num % 2) + result;
    num = Math.floor(num / 2);
  }
  return result;
}

console.log(DecimalABinario(20));

/*
write a javascript function to convert an amount to coins.

example input: 46 and possible coins 25, 10, 5 , 2, 1
output: 25, 10, 10, 1
*/
const monedas2 = (total, tipoMonedas = [25, 10, 5, 2, 1]) => {
  const resultado = [];
  for (let moneda = 0; moneda < tipoMonedas.length; moneda++) {
    const numeroMoneda = Math.floor(total / tipoMonedas[moneda]); // el Math.floor te redondea para abajo
    for (let y = 0; y < numeroMoneda; y++) {
      resultado.push(tipoMonedas[moneda]);
    }
    total -= tipoMonedas[moneda] * numeroMoneda;
  }
  return resultado;
};

console.log(monedas2(46)); // [ 25, 10, 10, 1 ]

Math.floor(6.98) = 6; /* Esto te lo redondea siempre para abajo */

/*
recibo un string "110" / output 6
En este caso la base es 2
hay que ir a cada uno de los elementos y multiplicarlo por su potencia y sumarlos

1) convertir el string a array
2) dar vuelta los numeros, revertirlos
3) recorrer el array usando la posicion y esa posicion q sea el factor por el q lo voy a hacer
4) multiplicar el resultado por el valor del elemento del array
5) sumar los resultados
*/

function DecimalABinario(num) {
  let result = "";

  while (num > 0) {
    result = (num % 2) + result;
    num = Math.floor(num / 2);
  }
  return result;
}

console.log(DecimalABinario(20));
