// ---------------------------------------------------------------------------//
//Crea el constructor de la clase "Persona"
//Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
//Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
//Ej: {
//   Nombre: 'Juan',
//   Apellido: 'Perez',
//   Edad: 22,
//   Domicilio: 'Saavedra 123'
//  }

const Persona = function (nombre, apellido, edad, domicilio) {
  (this.nombre = nombre),
    (this.apellido = apellido),
    (this.edad = edad),
    (this.domicilio = domicilio);
  this.detalle = function () {
    return Object.entries(objeto);
  };
};

// Otro ejercicio

array = Object.entries(objeto); //devuelve tanto la clave como su valor

// Escribe una función que convierta un objeto en una matriz, donde cada elemento representa
// un par clave-valor en forma de matriz.
//Ejemplo:
/*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
//Escribe tu código aquí

function deObjetoAmatriz(objeto) {
  var array = [];

  array = Object.entries(objeto); //devuelve tanto la clave como su valor
  return array;
}
