/*
write a javascript function to convert an amount to coins.

example input: 46 and possible coins 25, 10, 5 , 2, 1
output: 25, 10, 10, 1
*/

/*
PRIMERA FORMA:
const monedas = (total, tipoMonedas) => {
  let resultado = [];
  while (total > 0) {
    for (let moneda = 0; moneda < tipoMonedas.length; moneda++) {
      if (total - tipoMonedas[moneda] > 0) {
        resultado.push(tipoMonedas[moneda]);
        total = total - parseInt(tipoMonedas[moneda]);
      }
    }
  }
  return resultado;
};

SEGUNDA FORMA:

let resultado = [];

const monedas = function (total, tipoMonedas) {
  while (total > 0) {
    for (let moneda = 0; moneda < tipoMonedas.length; moneda++) {
      if (total - tipoMonedas[moneda] > 0) {
        resultado.push(tipoMonedas[moneda]);
        total = total - tipoMonedas[moneda];
      }
    }
  }
  return resultado;
};

PRUEBAS:
*/

let resultado = [];

const monedas = function (total, tipoMonedas) {
  while (total > 0) {
    for (let moneda = 0; moneda < tipoMonedas.length; moneda++) {
      if (total - tipoMonedas[moneda] > 0) {
        resultado.push(tipoMonedas[moneda]);
        total = total - tipoMonedas[moneda];
      }
    }
  }
  return resultado;
};

console.log(monedas(46, [25, 10, 5, 2, 1]));
