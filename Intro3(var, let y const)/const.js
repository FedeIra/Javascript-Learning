const PI = 3.1416; // usamos const cuando vayamos a usar variables que no van a cambiar su valor durante el flujo de nuestra aplicacion

console.log(PI);

// const NUEVA; // esto no funciona pq no podes generar constantes vacias
let a;
var b; // con let y var se pueden hacer variables vacias y posteriormente asignarlas

// PI = 3.15; // esto tambien te tira error pq no le podes cambiar el valor a una constante

let objeto_persona = {
  // le puedo asignar valores a un objeto variable
  edad: 33, // va con comas en lugar de punto y coma
  nombre: "Federico",
};
console.log(objeto_persona);

objeto_persona.correo = "fedeirar@gmail.com";
console.log(objeto_persona);

const objeto_persona2 = {
  edad: 28,
  nombre: "Agustina",
};
console.log(objeto_persona2);

objeto_persona2.correo = "agusaceiro@gmail.com"; // el const tambien te permite agregarle valores a un objeto o elementos a un array. accedemos a una referencia de ese valor. El const nos permite agregarle valores pq no estamos cambiando uno de los valores q tenia. Sigue siendo el mismo objeto.
console.log(objeto_persona2);

//es recomendado que cuando uses constantes q no vas a modificar le pongas el nombre en mayuscula:

const UNA_CONSTANTE = "soy una constante"; //es lo que se llama tecnica del UPPER_CASE
