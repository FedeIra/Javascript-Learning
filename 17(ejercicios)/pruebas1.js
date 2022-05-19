function mapear() {
  //Escribi una funcion mapear en el prototipo del objeto global "Array"
  //que recibe una funcion callback, que se ejecuta por cada elemento del array
  //mapear los elementos de ese array segun la funcion callback
  //Esta funcion tiene que devolver un array nuevo con los elementos mapeados.
  //NO USAR LA FUNCION MAP DE ARRAYS.
  //ej:
  //var numeros = [1, 2, 3, 4];
  //numeros.mapear(function(numero) {
  //  return numero + 1;
  // }) devuelve [2, 3, 4, 5]
  // Tu codigo aca:
  
  function nuevoMap (cb) {
    
  }

  var Array = {};

  Array.prototype.mapear2() = function (array, cb) {
    for (let i = 0; i < array.length; i++) {
      cb(array[i]);
    }
    return cb;
  }
}
console.log(mapear());