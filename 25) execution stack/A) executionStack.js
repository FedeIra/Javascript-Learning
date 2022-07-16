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
