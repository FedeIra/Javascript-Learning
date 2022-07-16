/*
Como se ejecutan las cosas en JS.
Para eso hay que entender los distintos tipos de ejecuciones.

1) Unico proceso y unica tarea o hilo.
2) Unico proceso con muchas tareas a la vez
3) Multiples procesos con un solo hilo por proceso
4) Multiples procesos con multiples hilos por proceso

Todo lo relacionado a JS se ejecuta en un unico proceso y unico hilo (1)

HOISTING: revise las cosas q estan. No revisa los valores sino que si existen o no. Eso nos da la posibilidad de ejecutar cosas que estan declaradas mas adelante. Es parte del reconocimiento del codigo.
*/

Declarada(); // Soy una funcionundefined/. Todavia no se definio foo, pero la funcion si se puede invocar aunque todavia no este definida

console.log(foo); // undefined
//console.log(funcionArrow()); // Aca te tira error:Cannot access 'funcionArrow' before initialization. La funcion arrow tiene que estar declarada antes de invocarse
console.log(funcionExpresada()); // Aca te tira error: Cannot access 'funcionExpresada' before initialization

var foo = "Hola, me declaro";

Declarada(); // Soy una funcionHola, me declaro

function Declarada() {
  console.log("Soy una funcion declarada" + foo);
}

const funcionArrow = () => console.log("Soy una funcion arrow" + foo);
console.log(funcionArrow());

const funcionExpresada = function () {
  console.log("Soy una funcion expresada" + foo);
};
