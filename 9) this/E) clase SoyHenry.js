//  THIS en el contexto global inicial

// en el browser esto es verdad:

console.log(this === window);

this.a = 37;

console.log(window.a); //37

//en el contexto de una funcion:

function f1() {
  return this;
}

f1() === window; // global object

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

var obj = {
  nombre: "Objeto",
  log: function () {
    this.nombre = "Cambiado"; // this se refiere a este objeto, a `obj`
    console.log(this); // obj
    var cambia = function (str) {
      this.nombre = str; // Uno esperaria que this sea `obj`
    };
    cambia("Hoola!!");
    console.log(this);
  },
};

obj.log(); // { nombre: 'Cambiado', log: [Function: log] } Tiene sentido pq el this hace referencia al contexto global q en este caso es la clase y por lo tanto te imprime el objeto. Por otro lado, el nombre = cambiado permanence igual a pesar del this.nombre = str por que la funcion cambia no esta dentro del objeto, sino que esta declarada dentro de la funcion de log.

this.nombre = "Pepe";

obj.log(); // { nombre: 'Cambiado', log: [Function: log] } . Aca tampoco cambia el this.nombre del objeto "obj

console.log(this.nombre); //Pepe, aca si cambia pq cambio el contexto global la linea de this.nombre = "Pepe"

// LOOP
/*
El event loop nos ayuda con lo relacionado al asincronismo.
Se utiliza una api del navegador q se encarga de procesar aparte esas llamadas q van a demorar un tiempo (asincronas).

*/

function saludarMasTarde() {
  var saludo = "Hola";
  setTimeout(function () {
    // en el loop te aparece como anonymus pq no tiene nombre la funcion.
    console.log(saludo);
  }, 3000);
}
saludarMasTarde();
