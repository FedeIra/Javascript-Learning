// FORMAS DE CREAR OBJETOS LITERALES (definidos por variables):

// 1)
const c = new Object(); // MUY poco utilizada

// 2)
const fede = {
  // se puede hacer con var y let tambien
  nombre: nombre,
  apellido: "Irarrazaval",
  edad: 33,
  comportamiento: ["correr", "estudiar"],
  soltero: false,
  contacto: {
    email: "fedeirar@gmail.com",
    cell: 1567887879,
  },
  decirMiNombre: function () {
    console.log(
      `Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} anios y me podes llamar a ${this.contacto.cell}`
    ); //this referencia al mismo objeto pq esta en su contexto.
  },
};

console.log(fede.apellido);
console.log(fede["apellido"]); // se puede invocar de esta forma tambien. Cuando hay que intercalar con variables o recorrer objeto es mejor esta pq se pueden hacer mas cosas.
console.log(fede.decirMiNombre()); //con esto invoco la funcion saludos de fede

delete fede[comportamiento];
fede.edad = 43; // cambio el valor
fede.gritando = "poneleeeee"; //agrego una propiedad

console.log(Object.keys(fede)); //permite listar todas las llaves (atributos y metodos) de un objeto.

console.log(Object.values(fede)); // te lista los valores, no los atributos.

console.log(fede.hasOwnProperty("nombre")); // tira true or false si hay una propiedad en el objeto  q sea nombre.

// 3) Esto no es un objeto literal. Es un objeto creado con una clase.
class VehiculosMotorizados {
  ancho = 3;
  largo = 5;
  color = "amarillo";
}

let unCoche = VehiculosMotorizados;
unCoche.acelera();

// PARA HTML:
let miboton = document.getElementById("boton1"); // almacenamos dentro de la variable miboton el objeto boton1 dentro del document
