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
