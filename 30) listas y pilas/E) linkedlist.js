function Node(value) {
  this.value = value;
  this.next = null;
}

class linkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    let nodo = new Node(value); //lo que vas a meter en la lista
    let current = this.head; //saber donde empieza la lista

    if (current === null) {
      //revisa que el comienzo de la lista este vacio
      this.head = nodo;
      return "nodo añadido"; //mete el nodo como comienzo de la lista
    }

    while (current.next) {
      //next -> siguiente nodo, para llegar al final podes decir que next -> null (no apunta a nada)
      current = current.next; //hay un siguiente nodo me muevo ahi
    }

    current.next = nodo; //el ultimo nodo ahora va a apuntar al nuevo nodo creado al principio
    return "se agrego el nuevo nodo con valor " + nodo.value;
  }

  remove() {
    let current = this.head; //entras en la lista
    let deleted = "";
    if (current === null) {
      return null; //la lista esta vacia, no puedo  borrar nada devuelvo null
    }

    if (!current.next) {
      //compruebo que al head no le siga nadie
      deleted = this.head.value; //guardo el valor en un auxiliar antes de borrarlo

      this.head = null; //borras la cabeza de la lista
      return deleted;
    }

    while (current.next.next) {
      //current es el anteultimo nodo
      current = current.next;
    }

    deleted = current.next.value; //guardo valor en auxiliar antes de borrarlo
    current.next = null; //borro la conexion al ultimo nodo, JS despues se encarga de sacarlo de memoria
    return deleted; //retorno el valor eliminado
  }

  // AGREGARLE UN METODO QUE ELIMINE UN NODO ESPECIFICO POR POSICION
  removeSpecificNode(specificNode) {
    let current = this.head;
  }

  search(arg) {
    let current = this.head; //entro a la lista
    let isCallback = typeof arg === "function" ? true : false; //es un booleano que si el argumento es un CB se vuelve true, si es un argumento "normal" es false

    if (!current) {
      return null; //devuelvo null porque no encontre lo que buscaba
    }

    while (current) {
      // 5 -> 3 -> 4 -> 8 -> current = null;  me muevo por la lista hasta que se termina
      if (!isCallback) {
        //compruebo que argumento no sea un cb
        if (current.value === arg) {
          return current.value;
        }
      } else {
        if (arg(current.value)) {
          //como arg es un cb, lo ejecuto y compruebo su retorno
          return current.value;
        }
      }
      current = current.next; //me muevo alsiguiente nodo
    }
    return null; //sali del while, el current se movio fuera de la lista por lo que no encontro lo que buscaba
  }
}

let lista = new linkedList();

/*
  EJERCICIO 1
   Agregar el método sortList al prototipo de LinkedList. Este método deberá ordenar los elementos de nuestra lista enlazada de mayor a menor.
   Si la lista está vacía, debe retornar false;
   Ejemplo:
     Suponiendo que la lista actual es: Head --> [8] --> [12] --> [3] --> [16]
     LinkedList.sortList();
     Ahora la lista quedaría: Head --> [16] --> [12] --> [8] --> [3]
*/

LinkedList.prototype.sortList = function () {
  // Tu código aca:
  if (this.head === null) return false;

  let current = this.head,
    arr = [];

  while (current) {
    arr.push(current.value);
    current = current.next;
  }
  arr.sort((a, b) => (a < b ? 1 : -1));

  this.head = null;

  for (let i = 0; i < arr.length; i++) {
    this.add(arr[i]);
  }
};

/*
EJERCICIO 2
Agregar el método simplifyList al prototipo de LinkedList. Este método deberá filtrar 
los elementos repetidos de nuestra lista enlazada y crear una nueva lista con los elementos 
extraídos para finalmente reemplazar la lista original.
Si la lista está vacía, debe retornar false
Ejemplo:
    Suponiendo que la lista actual es: Head --> [2] --> [5] --> [1] --> [5] --> [7] --> [2] --> null
    lista.simplifyList();
    Ahora la lista resultante es: Head --> [2] --> [5] --> [1] --> [7] --> null
ACLARACIÓN: Se debe reemplazar la lista original por la nueva.
Pista: Podes usar el metodo search() ya incorporado dentro del prototype de LinkedList
  */

LinkedList.prototype.simplifyList = function () {
  // Tu código aca:
  let current = this.head,
    array = [],
    setArr = null;

  if (!current) {
    return false;
  }

  if (!current.next) {
    return current.value;
  }

  while (current) {
    array.push(current.value);
    current = current.next;
  }

  setArr = new Set(array);
  array = [];
  setArr.forEach((nodeElement) => array.push(nodeElement));

  this.head = null;

  for (let i = 0; i < array.length; i++) {
    this.add(array[i]);
  }
};

/* 
  EJERCICIO 3
  Implementar el método count dentro del prototype de LinkedList que deberá retornar la suma de todos los
  valores dentro de la lista.
  En caso de que la lista esté vacía, retornar 0
  Ejemplo:
  Dada esta lista: [4] --> [2] --> [7] -- > null
  LinkedList.count() --> 13
*/

LinkedList.prototype.count = function () {
  // Tu código aca:
  let current = this.head,
    counter = 0;

  if (!current) {
    return counter;
  }

  while (current) {
    counter += current.value;
    current = current.next;
  }
  return counter;
};
