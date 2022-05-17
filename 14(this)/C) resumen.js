// THIS: la palabra reservada this hace referencia al objeto q estamos trabajando asi podemos invocar propiedades y/o metodos de dicho objeto. This hace referencia al scope donde se encuentra.

// This en funcion anonima (no declarada en el scope global y crean su propio scope):
const obj = {
  nombre: "Contexto Objeto",
  imprimir: function () {
    console.log(this.nombre); //este this esta en un contexto no global, sino que especifico de esta funcion.
  },
};
obj.imprimir(); // "Contexto Objeto"

// El This sirve mucho para objetos, prototipos y clases:
//1) Defino la funcion en el contexto global
function saludar() {
  console.log(`Hola ${this.nombre}`);
}

//2) Creo el objeto
let alumno3 = {
  nombre: "Javier",
  saludar,
};

//3) Invoco la funcion:
alumno3.saludar(); // "Hola Javier"

// Otro ejemplo This con objetos:

function persona2(nombre) {
  this.nombre = nombre;
  return () => console.log(this.nombre);
}
let jon2 = new persona2("Jon2");
jon2(); // "Jon2". Al ser una arrow function busca el this.nombre fuera de su funcion y, por lo tanto, en el contexto de la funcion donde fue creada.

// This en arrow function (no crean su propio scope por lo que el this no captura el valor de nombre).
const obj3 = {
  nombre: "Contexto Objeto 3",
  imprimir: () => {
    console.log(this.nombre);
  },
};
obj3.imprimir(); // "undefined". Cuando definis funciones dentro de objetos no es recomendable usar arrow functions por esto.

// Otro ejemplo de This y el contexto global:
let persona2 = {
  nombre: "Agus",
  saludo2: () => console.log("Hola" + this.nombre), // me devuelde undefined pq al ser una arrow function el this busca en el contexto global donde no esta definido nombre
};
persona2.saludo2(); // "undefined"

// 1) Funcion constructora:
function persona(nombre) {
  this.nombre = nombre;
  return function () {
    console.log(this.nombre);
  };
}

// 2) Creo objeto:
let jon = new persona("Jon");

// 3) Invoco funcion:
jon(); // "Undefined".  Pq la funcion dentro de la funcion que lo retorna no esta definido el this.nombre y lo busca en el contexto global.
