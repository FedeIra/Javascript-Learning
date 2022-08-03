/*
!DEFAULT, REST, SPREAD:

DEFAULT:
*/
function funcionDefault(params = "por defecto") {
  console.log(params);
}
funcionDefault(); // por defecto

/*
REST:
*/
function funcionRest(cantidad, ...palabras) {
  console.log(cantidad);
  console.log(palabras);
}
funcionRest(4, "como", "va", "el", "M2"); // 4 [ 'como', 'va', 'el', 'M2' ]

/* Los 3 puntitos está diciendo que vas a recibir un argumento seguro y no sabes cuántos más. 

!SPREAD:*/

var arr = [1, 2, 3];

function funcionSpread(x, y, z) {
  console.log(x + y + z);
}
funcionSpread(
  ...arr
); /* 6. Es equivalente a borrarle las llavecitas o braquets. Le llegan valores concatenados y/o sumados del array, pero no en forma de array */

/* Puedo hacer lo mismo con un objeto: */
var obj = { a: 1 };
var copia = {
  ...obj,
}; /* Es lo equivalente a borrar las llaves, por lo que estaría creando un objeto nuevo. */
copia.b = 2;
console.log(obj); // {a: 1}
console.log(copia); // {a: 1, b:2} NO me modifico el objeto original, "obj".

/* Lo mismo puedo hacer on arreglo: */
var arr1 = [1, 2, 3, 4];
var copiaArr1 = [
  ...arr1,
]; /* Es lo equivalente a borrar las llaves, por lo que estaría creando un array nuevo. */
var arr2 = [7, 8, 9]; // [7, 8, 9]
var arr3 = [...arr1, ...arr2]; // [1, 2, 3, 4, 7, 8, 9]
