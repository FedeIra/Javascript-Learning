/* 
Recibir un numero en formato binario y convertirlo a decimal y viceversa

*/

function BinarioADecimal(num) {
  // el numero arranca siendo "110"
  let data = num.split("").reverse(), // con el split pasa a ser [1, 1, 0]. Con el reverse pasa a ser [0, 1, 1]
    result = 0;

  for (let i = 0; i < data.length; i++) {
    // igual a Math.pow(2, i) . Aca creo un  valor que va guardando los numeros del array a la potencia por su posicion
    result += 2 ** i * data[i]; // aca agarra el valor de factor y lo multiplica por el valor del array y luego lo suma a result
  }
  return result;
}

//console.log(BinarioADecimal("110"));
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
Dividir num entre 2 hasta que llegue a 0.
Quedarme con el resultado entero (sin el valor decimal y el resto)
Ir recordando los restos.
Hacer un reverse pq estaban al reves los valores. Revertir el orden de los restos y agruparlos para devolverlo como string.
*/
