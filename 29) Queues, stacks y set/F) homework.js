"use strict";

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

function Queue() {
  this.list = [];
}

Queue.prototype.enqueue = function (value) {
  return this.list.push(value);
  //return this.list.unshift(value);
};

Queue.prototype.dequeue = function () {
  // return this.list.length > 0 ? this.list.shift() : undefined; NO HACE FALTA LA PARTE DE UNDIFINED PQ AL TENER RETURN TE TIRA UNDIFINED SI NO HABÍA NADA:
  return this.list.shift();
  //return this.list.pop();
};

Queue.prototype.size = function () {
  return this.list.length;
};

/* function Queue() {
  class Queue {
    constructor(lista = []) {
      return (this.lista = lista);
    }
    enqueue(value) {
      return this.lista.unshift(value);
    }
    dequeue() {
     return this.lista.length > 0 ? this.lista.pop() : undefined;
    }
    size() {
      return this.lista.length;
    }
  }
}
var queue = new Queue();
var q2 = new Queue(); */

/*NOTA AGREGADA POR MI: completar función constructora Queue, meterle los métodos dentro de queue y en cada uno meterle la lógica para sacar, eliminar y te lea el size. Acordarse de revisar los tests.  */
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci,
};
