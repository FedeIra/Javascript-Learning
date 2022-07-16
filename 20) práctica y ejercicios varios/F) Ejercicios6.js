/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function filtrar(funcion) {
  // Escribi una función filtrar en el prototipo de Arrays,
  // que recibe una funcion (callback) que devuelve true o false.
  // filtrar los elementos de ese arreglo en base al resultado de esa funcion
  // comparadora, devolver un nuevo arreglo con los elementos filtrados.
  // NO USAR LA FUNCION FILTER DE LOS ARREGLOS.
  // ej:
  // var productos = [{
  //   price: 100,
  //   name: 'tv'
  // }, {
  //   price: 50,
  //   name: 'phone'
  // }, {
  //   price: 30,
  //   name: 'lamp'
  // }]
  // productos.filtrar(function(p) {
  //   return p.price >= 50;
  // }) => [{price: 100, name:'tv'}]

  Array.prototype.filtrar = function (funcion, productos) {
    let nuevoArreglo = [];
    for (let i = 0; i < productos.length; i++) {
      if (funcion(productos[i]) === true) {
        nuevoArreglo.push(i);
      }
    }
  };
  return nuevoArreglo;
}

function callback(precio) {
  if (precio < 50) {
    return true;
  } else {
    return false;
  }
}

// No modifiques nada debajo de esta linea //

module.exports = filtrar;

function filtrar(funcion) {
  Array.prototype.filtrar = (funcion, productos) =>
    productos.map((productos) => productos.funcion());
}
// No modifiques nada debajo de esta linea //

module.exports = filtrar;

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
