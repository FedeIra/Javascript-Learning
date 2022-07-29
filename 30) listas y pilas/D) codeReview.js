// LISTA ENLAZADA: SOLUCIÓN DEL PROFESOR

function Node(value) {
  this.value = value;
  this.next = null;
}

class LinkedList {
  constructor() {
    this.head = null;
    // this.__length = 0; puedo aregarlo si quiero
  }

  add(data) {
    let nodo = new Node(data);

    if (!this.head) {
      this.head = nodo;
      //this.__length++; podría no estar
      return "nodo añadido";
    } else {
      let current = this.head; // se para y dice lo que tiene el heald (primer nodo de la lista)
      while (current.next) {
        current = current.next;
      }
    }
    // cuando el while termina sigo acá debajo
    current.next = nodo;
    return "se agrego el nuevo nodo con valor " + nodo.value;
  }

  remove() {
    //caso de no tenga head
    if (!this.head) {
      return null;
    }
    //caso de que tenga solo head
    if (!this.head.next) {
      let deleted = this.head;
      this.head = null;
      return deleted.value;
      //caso de que tenga head y otros nodos
    } else {
      let current = this.head;
      while (current.next.next) {
        current = current.next;
      }
    }
    let deleted2 = current.next.value; // lo guardo pq sino después no lo voy a poder retornar.
    current.next = null; // en lugar de eliminar el último nodo lo saco de la lista poniendole al nodo anterior next = null. El garbage collector de JS se ocupa luego de eliminarlo.
    return deleted2;
  }
  // --------------------------------------
  search(valueOrFunction) {
    if (!this.head) {
      return null;
    }

    // Si el argumento no es una función:
    var callback; // la creo aca para que se pueda usar en el contexto del else

    if (typeof valueOrFunction !== "function") {
      callback = function (data) {
        return data === valueOrFunction;
      };
    } else {
      // aca entra si es una función
      callback = valueOrFunction;
    }

    let current = this.head;
    while (current) {
      if (callback(current.value)) {
        return current.value;
      } else {
        current = current.next;
      }
    }
    return null;
  }
}
