/* 
ESTRUCTURAS DE DATOS:

1) Arrays,
2) Lists
3) Files

Lists: 
A) Linear Lists: i) stacks, ii) queues
B) Non-linear lists: i) trees, ii) graphs 

Entre stacks y queues lo único que cambia es de que lado saco y pongo, pero en definitiva son listas.


!LISTA SIMPLEMENTE ENLAZADA: 
tenemos elementos (NODOS) en el cual cada nodo va a tener los datos particulares y a su vez tiene una referencia al siguiente elemento. Porque cada nodo tiene como referencia un único nodo siguiente.

primer nodo ==> nodo 2 ==> nodo3 ==> nodo4 ==> último nodo

No hay forma de saltar del primero al último. Cada nodo tiene referencia al siguiente. Para armar esta lista no nos bastan con un arreglo como en el stack y el queue, pq en el arreglo puedo acceder a cualquier desde donde quiera. NO ES LO MISMO.

Entonces, vamos a tener dos funciones. Una función constructora de NODO y otra de lista:
*/

// CON FUNCIÓN CONSTRUCTORA
function Node(data) {
  this.data = data;
  this.next = null;
} /* Esto es una estructura de nodo que le podemos meter los datos que queremos. La info. que guarda es su data y el siguiente. El NODO ES UN ELEMENTO DE LA LISTA. Cada nodo va a ser un objeto o instancia de esta función constructora. Lo que se guarda es la dirección de memoria o flecha.*/

function List() {
  this._length = 0;
  this.head = null;
} /* Por otro lado, creo la lista que es una referencia al primero de todos, el HEAD (primer nodo). Una vez que identifico al primero ya puedo acceder a cualquier pq le digo al primer nodo que le avise al siguiente y así sucesivamente hasta que llego al que quiero. Es un apuntador. La lista solo tiene que saber dónde está el primero (por eso, this.head)*/

// CON CLASES
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class List {
  constructor() {
    this._length = 0; /* la longitud no es obligatoria */
    this.head = null;
  }
} /* Yo le pregunto a list, "che, sos toni man?, me responde "no" y le pregunta al siguiente y así sucesivamente.... hasta que llega toni y encontramos el elemento en la lista. esto es ITERAR. En definitiva, la lista tan solo apunta al primer nodo.*/

var list =
  new List(); /* Creo una lista agarrandome de la función constructora list. Inicialmente va a agarrar las propiedads y valores de la función constructora: */

/* Podemos INSERTAR un nodo. La lógica depende del lugar. Es distinto si es el head, el medio o el último. 

!Ejemplo insertando al FINAL (misma lógica para eliminar un nodo):

List --> null
List --> ["Franco"] --> null
List --> ["Franco"] --> ["Toni"] --> null
List --> ["Franco"] --> ["Toni"] --> ["Mati"] --> null
*/
function Node(data) {
  this.data = data;
  this.next = null;
}

function List() {
  this._length = 0;
  this.head = null;
}

List.prototype.assign = function (data) {
  this.head = data;
};

var list = new List();

list.assign("Fede");

console.log(list.head); // Fede
console.log(list); // { _length: 0, head: 'Fede' }

/*
!Ejemplo insertando al principio (misma lógica para eliminar un nodo):
Cconsiderar que el primero que tenía sabía dónde estaba el segundo. Ahora meto un primero distinto que NO SABE y pierdo la lista. Antes de hacer eso y mover mi flecha tengo que guardar en algún lado la flecha anterior y decirle al nuevo que apunte adonde apuntaba el primero anterior):

ANTES: List --> ["Franco"] --> ["Toni"] --> ["Mati"] --> null

DESPUÉS: List ---(copia de flecha)--->  ["Franco"] --> ["Toni"] --> ["Mati"] --> null
          |
          |--(nueva flecha)--> ["Diego"] --> null (Acá le digo a Diego que apunte a la flecha antes copiada por lo que queda lo siguiente:)

FINALMENTE: List --> ["Diego"] -- > ["Franco"] --> ["Toni"] --> ["Mati"] --> null

!Ejemplo insertando al medio (misma lógica para eliminar un nodo):

ANTES: List ----> ["Franco"] --> ["Toni"] --> ["Mati"] --> null

DESPUÉS: List -->  ["Franco"] --> ["Diego"] -->  null (Diego no estaría mirando a nadie)
          |
          |--(flecha auxiliar)--> ["Toni"] (Acá dejo guardado una flecha con Toni que te redirecciona a ["Mati"] --> null)

FINALMENTE: List -->  ["Franco"] --> ["Diego"] --> ["Toni"] --> ["Mati"] --> null
                                                       |
Puedo agregar otra lista:                              |
List2 --------------------------------------------------
Esta lista arranco con Toni y sigue por mati hasta null.*/

function Node(data) {
  this.data = data;
  this.next = null;
}

function List() {
  this._length = 0;
  this.head = null;
}

/* Las dos funciones anteriores son las funciones constructoras */

var list =
  new List(); /* Creo una lista agarrandome de la función constructora list. Inicialmente va a agarrar las propiedads y valores de la función constructora: */

list._length; // 0
list.head; // null

/* list.add("Franco");  */
list.head;

List.prototype.add = function (data) {
  var node = new Node(data); /* creo el primer nodo que es el head. */
  var current = this.head; /* Le asigno current al primer nodo  */
  // Si está vacia
  if (!current) {
    this.head =
      node; /* Acá digo que si no había nodo head, que este sea el nodo que creé arriba. También puede pasar que sí hayan, pero lleguemos al útlimo cuyo  current.next es null entonces entra acá */
    this
      ._length++; /* Aumento la longitud de la lista. El guíon bajo es por convención: no quiero que desde afuera me cambien esta propiedad. */
    return node;
  }
  // Si no esta vacia, recorro hasta encontrar el último
  while (current.next) {
    current =
      current.next; /* El current tiene la dirección a donde apunta el último node */
  }
  current.next =
    node; /* Acá le digo al nodo anterior que apunte al nuevo nodo. Luego le pido que me tire el lenght de la lista y me retorne el último nodo */
  this._length++;
  return node;
};

list.add("Franco"); //Node { data: 'Franco', next: null }
list.add("Hola"); //Node { data: 'Hola', next: null }

console.log(list); // me imprime la lista con Franco y Toni. Toni mira a null.

// La función en LIMPIO:

List.prototype.add = function (data) {
  var node = new Node(data),
    current = this.head;
  // Si está vacia
  if (!current) {
    this.head = node;
    this._length++;
    return node;
  }
  // Si no esta vacia, recorro hasta encontrar el último
  while (current.next) {
    current = current.next;
  }
  current.next = node;
  this._length++;
  return node;
};

// EJEMPLOS EN LA PRÁCTICA:
/*
! Recorre los nodos de mi lista e imprime sus valores 
List --> ["Franco"] --> ["Diego"] --> ["Toni"] --> ["Mati"] --> null 
this.head-->current.next-->current.next-->current.next-------->null */

List.prototype.getAll = function () {
  var current = this.head; //empezamos en la cabeza
  if (!current) {
    /* si current te da algo vacío o null cae en este contexto */
    console.log("La lista esta vacia!");
    return;
  }
  while (current) {
    // si current tiene un valor te lo imprime y te dirige al siguiente nodo
    console.log(current.data);
    current =
      current.next; /* current next te apunta al siguiente nodo. Es una propiedad del node.. El current next te apunta al siguiente objeto o nodo de la lista */
  }
};

// Esto te devuelve: Franco, Diego, Toni, Mati, La lista esta vacia!

/* 
!LISTAS DOBLEMENTE ENLAZADAS:
Hay listas en las cuales mi nodo aparte de tener un NEXT va a tener un PREVIOUS. Esto te permite ir para atrás y para adelante.

*/
