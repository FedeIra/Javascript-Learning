/* FLAT:
El método flat() crea una nueva matriz con todos los elementos de sub - array concatenados recursivamente hasta la profundidad especificada.

var newArray = arr.flat([depth]);
 */

var arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

/* El método de aplanar elimina las ranuras vacías en las matrices: */

var arr4 = [1, 2, , 4, 5];
arr4.flat();
// [1, 2, 4, 5]

//para permitir el aplanamiento a nivel profundo use recursión con reduce y concat
var arr1 = [1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]];

function flattenDeep(arr1) {
  return arr1.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val),
    []
  );
}
flattenDeep(arr1); // [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]

//aplanamiento profundo no recursivo usando un stack
var arr1 = [1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]];
function flatten(input) {
  const stack = [...input];
  const res = [];
  while (stack.length) {
    // elimina ultimo valor del stack
    const next = stack.pop();
    if (Array.isArray(next)) {
      // agrega de nuevo los items al array, sin modificar la entrada original
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  //invierte para restaurar el orden de entrada
  return res.reverse();
}
flatten(arr1); // [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]

//Aplanamiento profundo recursivo
function flatten(array) {
  var flattened = [];
  !(function flat(array) {
    array.forEach(function (el) {
      if (Array.isArray(el)) flat(el);
      else flattened.push(el);
    });
  })(array);
  return flattened;
}
