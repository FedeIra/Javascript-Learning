/* 
!DESTRUCTURING:

Sirve paras sacar valores y o valores propiedades
 */

var arr = [1, 2, 3];

var [a, b, c] = arr;

console.log(a); //1
console.log(b); //2
console.log(c); //3

var [d, , e] = arr; /* Puedo sacar valores del arreglo que quiera */

console.log(d); //1
console.log(e); //3

/* Con los objetos se puede hacer algo muy similar: */

var obj = {
  nombre: "Fran",
  apellido: "Etcheverry",
  edad: "no me acuerdo",
};

var { apellido, nombre } = obj;

console.log(apellido); // Etcheverry
console.log(nombre); // Fran

/* Incluso lo puedo renombrar: */

var obj2 = {
  nombre2: "Fran",
  apellido2: "Etcheverry",
  edad2: "no me acuerdo",
};

var { apellido2: surName, nombre2: firstName } = obj2;
/* console.log(apellido2); // apellido2 is not defined */
console.log(firstName); // Fran
/* Te lee en los console log el surName y firstName */

// Esto sirve para REACT especialmente:

objNuevo = {
  nombre: "destructuring",
};
function g({ nombre }) {
  console.log(nombre);
}
g(objNuevo); // destructuring
/* Dentro de los párametros del argumento estoy haciendo un destructuring. Recibe como argumento un objeto que tiene la propiedad de nombre y pasa como argumento su valor. */

/* 
!FACEOF DESTRUCTURING:
Evita que explote todo */

var [a, b, c] = [];
console.log(a); // te tira undefined en lugar de error. Es para que sea a prueba de este tipo de errores.
