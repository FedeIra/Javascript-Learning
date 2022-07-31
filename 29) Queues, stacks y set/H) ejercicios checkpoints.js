function Queue() {
  this.array = [];
}

Queue.prototype.enqueue = function (elemento) {
  return this.array.push(elemento);
};

Queue.prototype.dequeue = function () {
  return this.array.shift();
};

Queue.prototype.size = function () {
  return this.array.length;
};

// Implementar la función mergeQueues que a partir de dos queues recibidas por parametro
// debe devolver una nueva Queue que vaya mergeando los nodos de las anteriores.
// Ejemplo:
// - queueOne: [7,3,5]
// - queueTwo: [2,4,6]
// mergeQueues(queueOne, queueTwo) --> [7,2,3,4,5,6]
// IMPORTANTE: NO son arreglos sino que son Queues.

var mergeQueues = function (queueOne, queueTwo) {
  // Tu código aca:
  // crear una variable cuyo valor inicial sea una nueva instancia de Queue
  // recorrer ambas queues recibidas por parámetro
  // remover el primer nodo de la primera Queue para agregarlo a la nueva Queue
  // remover el primer nodo de la segunda queue para agregarlo a la nueva
  // repetir los dos pasos anteriores hasta que las dos queues pasadas por parámetro estén vacías
  var merged = new Queue();

  // el queue size te permite ver la cantidad de elementos de la queue
  while (queueOne.size() || queueTwo.size()) {
    if (queueOne.size()) {
      /* el if es para no agregar undefined al queue en el caso de que no tenga más elementos */
      merged.enqueue(queueOne.dequeue());
    }
    if (queueTwo.size()) {
      merged.enqueue(queueTwo.dequeue());
    }
  }
  return merged;
};

// Implementar la funcion closureMult que permita generar nuevas funciones que representen
// las tablas de multiplicación de distintos numeros
// Ejemplo:
// - var multByFour = closureMult(4);
// - multByFour(2) --> 8 (2 * 4)
// - multByFour(5) --> 20
// - var multBySix = closureMult(6);
// - multBySix(4) --> 24

var closureMult = function (multiplier) {
  // Tu código aca:
  return function (params) {
    return multiplier * params;
  };
};

/* var multByFour = closureMult(4);
multByFour(2); // 8

var multBySix = closureMult(6);
multBySix(4); // 24 */

// Implementar la función crearStack, la cual recibirá por parámetro un string.
// El string recibido tendrá un formato de sucesión de letras y astericos, de la siguiente manera:
// "UN*A*PAL*AB*RA"
// "OTR*A**PAL**ABR*A"
// crearStack debe retornar false en caso de recibir un string vacío.
// Caso contrario, deberá crear un Stack, al que se agregarán y retirarán valores EN ORDEN según la secuencia recibida
// en el string, siguiendo la siguiente lógica:
//  - Una letra (A , B , C) -> Agregar la letra al Stack
//  - Un asterisco (*) -> Retirar un elemento del Stack
// Finalmente, la función deberá retornar el Stack resultante.
// Asimismo, debo prevenir que la función intente retirar un elemento del Stack si el mismo está vacío, en cuyo caso
// la función deberá retornar el string "Stack vacío"
//
// EJEMPLOS:
//   ✔️crearStack("EJ*EMP*LO") => [E,E,M,L,O]
//   ✔️crearStack("OTR**OEJEM***PL*O") => [O,O,E,P,O]
//   ✔️crearStack("") => false
//   ✔️crearStack("RET****ORNA**R*FA*L**SO") => "Stack vacío"

function crearStack(palabra) {
  if (palabra === "") {
    return false;
  }

  let stackExample = new Stack();

  for (let i = 0; i < palabra.length; i++) {
    if (palabra[i] === "*" && !stackExample.size()) {
      return "Stack vacío";
    } else if (palabra[i] === "*") {
      stackExample.pop(palabra[i - 1]);
    } else if (palabra[i]) {
      stackExample.push(palabra[i]);
    }
  }

  return stackExample;
}
