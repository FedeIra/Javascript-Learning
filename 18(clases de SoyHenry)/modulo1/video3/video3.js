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

// EXECUTION STACK

/* un stack es una pila. Una pila de platos por ejemplo. Uno arriba de otro. Cuando empiezo a lavar los platos saco el ultimo de arriba, el primero q puse. Lo mismo pasa con el proceso de ejecucion. Una funcion q llama a otra funcion. Hasta que termine b (la primera funcion), la funcion a no puede terminar, y hasta que se termine de ejecutar a no se puede ejecutar el contexto global que es todo el archivo de js. El proceso finaliza con el "global execution context" que se refiere al proceso global o ejecucion del proceso global.


*/

function b() {
  console.log("B!");
}

function a() {
  b();
}

a();

// SCOPE
/*
Algo similar al contexto de ejecucion. Pero para las variables no pasa nada, aunque entra en juego las let y const. Ley y const hacen uso del scope y var del contexto.

No es lo mismo scope que contexto, pero para identificar donde hay un scope es cada vez q abris llaves, no contexto. Lo q ponga adentro de un for tiene su propio scope y let y const hacen uso de eso.
*/

var global = "Hola!";
function a() {
  // como no hay una variable llamada global en este contexto,
  // busca en el outer que es el global
  console.log(global);
  global = "Hello!"; // cambia la variable del contexto global
}
function b() {
  // declaramos una variable global en nuestro contexto
  // esta es independiente
  var global = "Chao";
  console.log(global);
}

function c() {
  console.log(global);
  var global = "Chao"; //aca tira undefined pq se define el global antes del log y debido al hoisting q reconoce que hay una definicion de global, no recurre a la definicion global del contexto ("Hola!"). Distinto seria si le saco el var, en cuyo caso en lugar de crea una nueva variable solo estaria modificando la variable del contexto global y entonces al no haber una nueva variable en este scope podria recurrir a la variable global.
}

a(); // 'Hola!'
b(); // 'Chao'
c(); // undefined
console.log(global); // 'Hello'
