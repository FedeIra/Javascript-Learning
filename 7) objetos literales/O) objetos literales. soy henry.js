/*
!OBJETOS LITERALES:
 */

/* Esto es un objeto literal: */
objetoLiteral = {};

/* Ademas si una propiedad del objeto y el parametro de la función que lo crea podes hacer lo siguiente: */
function crearObjetoLiteral(nombre, apellido) {
  obj = {
    nombre,
    apellido,
  };
  return obj;
}
/* No es una función constructora. Ni siquiera utiliza el this. */
var miObjeto = crearObjetoLiteral("federico", "irarrazaval");
console.log(miObjeto); // { nombre: 'federico', apellido: 'irarrazaval' }

/*
!Propiedad dinámicas: */
function crearObjetoLiteral2(nombre, apellido, prop, value) {
  obj = {
    nombre,
    apellido,
    [prop]: value,
  };
  return obj;
}

console.log(crearObjetoLiteral2("Fede", "Irarrazaval", "altura", 1.9)); //{ nombre: 'Fede', apellido: 'Irarrazaval', altura: 1.9 }
