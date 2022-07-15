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

// THIS

/*
El this hace referencia dependiendo de q es lo q estamos hacieendo, al CONTEXTO GLOBAL.

Node.js no tiene contexto global como tal.

El navegador si tiene contexto global. 

El this es como un acceso directo al contexto global. Cuando yo tengo una clase y adentro de la clase hago uso del THIS ahi tengo acceso al contexto global de la propia clase: Es decir, si tengo una clase algo o funcion de clase y utilizo algun this con los prototype, hago referencia a la instancia de esa clase.

Cuando tengo un objeto hago referencia a la instancia de esa clase. Es decir, hago referencia al objeto. 

Cuando tengo una funcion normal y hago uso del this hago referencia al conexto global. 

*/

var o = {
  prop: 37,
  f: function () {
    return this.prop; // aca hace referencia a la variable prop, y te retorn 37
  },
};
console.log(o.f()); // logs 37
// this hace referencia a `o`
var o = { prop: 37 };
// declaramos la función
function loguea() {
  return this.prop; // en este caso no esta dentro de una clase, por lo que no apunta a nada este this.
}
console.log(loguea); // [Function: loguea]. Esto pq el this no hace referencia a nada.

//agregamos la función como método del objeto `o`
o.f = loguea;
console.log(o.f()); // logs 37
// el resultado es le mismo!

var obj5 = {
  nombre: "Objeto",
  log: function () {
    this.nombre = "Cambiado"; // this se refiere a este objeto, a `obj`
    console.log(this); // obj5
    var cambia = function (str) {
      this.nombre = str; // Uno esperaria que this sea `obj`
    };
    cambia("Hoola!!");
    console.log(this);
  },
};

obj5.log(); // { nombre: 'Cambiado', log: [Function: log] } Tiene sentido pq el this hace referencia al contexto global q en este caso es la clase y por lo tanto te imprime el objeto. Por otro lado, el nombre = cambiado permanence igual a pesar del this.nombre = str por que la funcion cambia no esta dentro del objeto, sino que esta declarada dentro de la funcion de log.

this.nombre = "Pepe";

obj5.log(); // { nombre: 'Cambiado', log: [Function: log] } . Aca tampoco cambia el this.nombre del objeto "obj5

console.log(this.nombre); //Pepe, aca si cambia pq cambio el contexto global la linea de this.nombre = "Pepe"

// THIS

/*
El this hace referencia dependiendo de q es lo q estamos hacieendo, al CONTEXTO GLOBAL.

Node.js no tiene contexto global como tal.

El navegador si tiene contexto global. 

El this es como un acceso directo al contexto global. Cuando yo tengo una clase y adentro de la clase hago uso del THIS ahi tengo acceso al contexto global de la propia clase: Es decir, si tengo una clase algo o funcion de clase y utilizo algun this con los prototype, hago referencia a la instancia de esa clase.

Cuando tengo un objeto hago referencia a la instancia de esa clase. Es decir, hago referencia al objeto. 

Cuando tengo una funcion normal y hago uso del this hago referencia al conexto global. 

*/

var o = {
  prop: 37,
  f: function () {
    return this.prop; // aca hace referencia a la variable prop, y te retorn 37
  },
};
console.log(o.f()); // logs 37
// this hace referencia a `o`
var o = { prop: 37 };
// declaramos la función
function loguea() {
  return this.prop; // en este caso no esta dentro de una clase, por lo que no apunta a nada este this.
}
console.log(loguea); // [Function: loguea]. Esto pq el this no hace referencia a nada.

//agregamos la función como método del objeto `o`
o.f = loguea;
console.log(o.f()); // logs 37
// el resultado es le mismo!

var obj5 = {
  nombre: "Objeto",
  log: function () {
    this.nombre = "Cambiado"; // this se refiere a este objeto, a `obj`
    console.log(this); // obj5
    var cambia = function (str) {
      this.nombre = str; // Uno esperaria que this sea `obj`
    };
    cambia("Hoola!!");
    console.log(this);
  },
};

obj5.log(); // { nombre: 'Cambiado', log: [Function: log] } Tiene sentido pq el this hace referencia al contexto global q en este caso es la clase y por lo tanto te imprime el objeto. Por otro lado, el nombre = cambiado permanence igual a pesar del this.nombre = str por que la funcion cambia no esta dentro del objeto, sino que esta declarada dentro de la funcion de log.

this.nombre = "Pepe";

obj5.log(); // { nombre: 'Cambiado', log: [Function: log] } . Aca tampoco cambia el this.nombre del objeto "obj5

console.log(this.nombre); //Pepe, aca si cambia pq cambio el contexto global la linea de this.nombre = "Pepe"
