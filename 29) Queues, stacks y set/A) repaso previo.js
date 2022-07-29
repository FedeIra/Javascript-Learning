/* 
ESTRUCTURA DE DATOS I

No es más que una forma de organizar datos. Sea una lista, diccionario, lo que sea. Una forma de organizar datos para búsquedas, para tenerlos ordenados por algún sentido, etc.

1) ARREGLO: secuencia de valores que pueden ser cualquier cosa.
2) LISTA: 
3) FILES (archivos)


LISTAS: se subdividen en:
A) Lineales: i) pila (stacks) y ii) cola (queues)
B) No lineales: i) trees y ii) graphs.

*/

/* 
ARREGLOS: secuencia de lugares o espacios en los que puedo guardar cualquier cosa. Cada espacio es un espacio de memoria. Cada estructura de datos tiene definido sus propios métodos. Ejemplo: map, filter, etc. Son funciones propias del arreglo. 

Hay otro: SET que es parecido a un arreglo: es muy útil para guardar datos que no queres que se repitan!
*/

var arreglo = [1, 2, 3, 4, 4, 5, 5, 1, 2];
var set1 = new Set(arreglo);

/* Otra forma de crearlo sin la necesidad de tener un arreglo antes: */
let setDistinto = new Set(["Hola", true, 1]); // { 'Hola', true, 1 }

console.log(arreglo); // 1, 2, 3, 4, 4, 5, 5, 1, 2 ]
console.log(set1); // { 1, 2, 3, 4, 5 } . Lo que hace es el set es sacar todo lo que está duplicado. Es más relacionado con la lógica de conjunto de matemática.

/* set1.push("Hola"); */ // te va a tirar error porque el set1 NO es un arreglo. No tiene sus funciones.

/* Para agregar valores al set es con add: */

set1.add(6);
console.log(set1); // { 1, 2, 3, 4, 5, 6 }

set1.add(1); // no te lo agrega de vuelta pq el set no repite valores.

set1[0]; // tampoco funciona... NO es un array

set1.has(5); // true. Le podes preguntar si tiene cierto valor. Si no lo tiene false, si lo tiene true.

set1.clear(); // el clear elimina todos los valores del set
console.log(set1); // {}

var set2 = new Set(arreglo);

set2.delete(1); // te elimina el valor que le digas
console.log(set2); // { 2, 3, 4, 5 }

set2.add("Franco");
set2.add({ a: true });
set2.add({
  a: true,
}); /* El objeto es una dirección de memoria. Aunque tengan el mismo contenido no son lo mismo. Son dos objetos iguales pero no son el mismo objeto. Ya tiene esa dirección de memoria. 

Distinto sería si los guardo en la misma referencia:*/

var obj = { b: 2 };
set2.add(obj);
set2.add(obj); // ahora no me lo guarda. Pq es la misma referencia al objeto.

console.log(set2); // { 2, 3, 4, 5, 'Franco', { a: true } { a: true } } Guardan cualquier tipo de datos.

set2.entries(); // es un iterador

set2.size; // 4 Te devuelve la cantidad de elementos que tiene el set.

set2.add(setDistinto); // te agrega el set1 incluyendo el 1 dentro de dicho set.

/* Puedo iterar sobre un set: */

let setParaIterar = new Set([1, 2, 3, 4, 5, 6]);

for (const iterator of setParaIterar) {
  console.log(iterator);
} // 1, 2, 3, 4, 5, 6

/* 
LISTAS: se subdividen en:
A) Lineales: i) pila (stacks) y ii) cola (queues)
B) No lineales: i) trees y ii) graphs.

PILAS (o stacks):

Ej: el execution stack es una estructura de tipo pila que está usando javascript dentro de su funcionamiento para apilar las ejecuciones de las funciones.

Apilo cosas. Se van poniendo arriba:

Contexto3
Contexto2
Contexto1

Para SACAR solo se puede desde arriba (Contexto3, luego Contexto2, luego Contexto1)

LAST IN - FIRST OUT ("LIFO"): el último que ingresa tiene que ser necesariamente el primero que sale.

En general los métodos para esto es el push(mete al final) y pop (saca el último).
*/

/* Podríamos simular un stack sin crear una estructura de datos con un arreglo: */

var stack = [];
stack.push(1);
stack.push(10);
stack.push(3);
/* Esto en pila se agrega así:
3
10
1
*/

var i = stack.pop();
console.log(i);

var i = stack.pop();
console.log(i); // el pop saca el elemento y lo devuelve, por eso te da 10.

var i = stack.pop();
console.log(i);
/* Esto en pila se elimina del siguiente modo:
3
10
1
*/

/* Es decir, LIFO!!!!!!!!!! 

El tema es que viene otro programador noob y te rompe el LIFO con lo siguiente:
*/
stack.shift();
stack.unshift(); /* Podrían agregarme o sacarme algo de abajo sin respetar el LIFO

Entonces la forma correcta de implementar una pila es nosotros crear la clase y definirle los métodos nosotros:*/

/* CREO LA FUNCIÓN CONSTRUCTORA: */
function Stack() {
  //...
}

/* CREO FUNCIÓN PROTOTIPO */
Stack.prototype.push = function () {}; /* Para agregar al final */
Stack.prototype.pop = function () {}; /* Para sacar al final */

/* CREO UN PROTOTIPO DE STACK QUE PUEDE ACCEDER A LAS FUNCIONES PROTOTIPO */
var stack = new Stack();

stack.push(1);
stack.push(10);
stack.pop();
stack.pop(); /* Por ahora todo barbaro y se cumple el LIFO... y si alguien quiere eliminarme el primero de la lista no lo va a dejar: */

/* stack.shift(); */ // "stack.shift is not a function"

// TRADUCIDO A CLASES (ES2015):
class Stack2 {
  constructor() {
    //...
  }
  /* CREO FUNCIÓN PROTOTIPO */
  push() {}
  pop() {}
}

class stack2 extends Stack {}

/* stack2.push(1);
stack2.push(10);
stack2.pop();
stack2.pop(); */

/* 
LISTAS: se subdividen en:
A) Lineales: i) pila (stacks) y ii) cola (queues)
B) No lineales: i) trees y ii) graphs.

COLA(queues):
Es muy similar a una pila o stack. En el sentido que también voy agregando y sacando cosas PERO en lugar de LIFO es FIRST IN FIRST OUT (el que entra primero se va primero). Es lo contrario al LIFO del execution stack.

Es como una cola de supermercado, al primero que atienden es el primero que se va, como cualquier otra cola.

*/
var queue = [];
queue.push(1);
queue.push(2);
var i = queue.shift();
console.log(i);

/* Al igual que stack (pilas) el queue también puedo representarla como arrays, pero tenemos el mismo problema que antes. Qué pasa si alguien me toca y mete un pop o push y me mete uno último o saca uno último. 

Nuevamente lo ideal es crear una función constructora queue*/

/* CREO UNA FUNCIÓN CONSTRUCTORA: */
function Queue() {
  //...
}

/* CREO FUNCIÓN PROTOTIPO */
Queue.prototype.enqueue = function () {}; /* Para agregar al inicio */
Queue.prototype.deqeue = function () {}; /* Para sacar al inicio */

/* CREO UN PROTOTIPO DE STACK QUE PUEDE ACCEDER A LAS FUNCIONES PROTOTIPO */
var queue = new Queue();

queue.enqueue(1);
queue.enqueue(10);
queue.deqeue();
queue.deqeue(); /* Por ahora todo barbaro y se cumple el LIFO... y si alguien quiere eliminarme el primero de la lista no lo va a dejar: */

/* stack.shift(); */ // "stack.shift is not a function"

// TRADUCIDO A CLASES (ES2015):
class Queue2 {
  constructor() {
    //...
  }
  /* CREO FUNCIÓN PROTOTIPO */
  enqueue() {}
  deqeue() {}
}

class queue2 extends Queue2 {}

/* queue2.enqueue(1);
queue2.enqueue(10);
queue2.deqeue();
queue2.deqeue(); */
