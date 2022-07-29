/*
ESTRUCTURA DE DATOS: cómo organizamos los datos cuando programamos.

Para encontrarlos más rapido, organizarlos mejor, etc. Mejora la eficiencia.

Tipos de estructuras:

1) ARREGLOS: líneal, por posiciones arrancando desde 0.

*/

//SET: tiene muchos metodos: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Set
var arreglo = [1, 2, 3, 4, 4, 5, 5, 1, 2];

let set1 = new Set(arreglo);

/* Set tiene sus propias funciones */

set1.has(2); // te dice si tiene ese elemento

typeof set1; // object al igual que un arreglo

set1.add(15); // para agregarle elementos y devuelve todos los elementos.

set1.add(1); // no te lo agrega pq no lo repite

const aux = Array.from(set1); // armo un array usando el set1
aux.sort(); // ahí me los ordena

const aux2 = Array.from(set1).sort().reverse().join(""); // le podes meter todas las funciones de arrays que queres después de pasarlo a array

// si queres eliminar un elemento del set específico q sabes la posición pero no el valor: podes convertirlo a array como mostro Her y luego eliminas la posicion

const sinDuplicados = Array.from(new Set(arreglo)); //  [1, 2, 3, 4, 5 ] . Te crea un array from un set que te elimina todos los valores repetidos de arreglo

/* PILAS:
es cómo un arreglo que le hacemos un push y pop. PAra sacar el último o agregar un nuevo valor a la última posición (LIFO)

Ejemplo para simular un stack (como pilas de platos para lavar, ponemos un plato arriba de otro y vamos limpiando desde el último que metimos a la pila hasta el primero que metimos):
*/

const arr = [];

arr.push(1);
arr.push(2);
arr.push(3);
console.log(arr); // el 3 es el último que entró

// Para cumplir el LIFO hay que ir sacando de último a primero... entonces:

arr.pop();
arr.pop();
arr.pop(); /* Y acá termina de ejecutarse el programa */

/* El tema es que te pueden romper la regla: */

arr.shift();

/* QUEUE
Es como una transmisión en vivo. Está entrando info. en video en vivo al momento que mi pantalla la ve y al toque sale. Es decir, la primer imagen que entra es la primer imagen que se va. Es lo contrario al lifo. ES EL FIFO (first in first out). Es como una cola de supermercado.

*/
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
