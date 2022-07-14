function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"
  String.prototype.reverse = function () {
    let stringInvertida = "";

    for (let i = this.length - 1; i >= 0; i--) {
      stringInvertida = stringInvertida + this.charAt(i);
    }
    return stringInvertida;
  };
}

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

function asAmirror(str) {
  //La función recibe una frase.
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var string = [];
  for (let i = 0; i < array.length; i++) {
    string.unshift(str[i]);
  }
  return string.join("").split(" ").reverse().join(" ");
}

function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let reves = numero.toString().split(" ").reverse().join("");
  if ((numero = parseInt(numeroAlReves))) return "Es capicua";
  return "No es capicua";
}
//         878 --- "878"----> ["8", "7", "8"]  ---- "878"
