// EJEMPLO DE ÁRBOL VISTO EN LA PRÁCTICA:
function BinarySearchTree(valor) {
  this.value = valor;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function (value) {
  if (value < this.value) {
    if (this.left === null) {
      var newTree = new BinarySearchTree(value);
      this.left = newTree;
    } else {
      this.left.insert(value);
    }
  } else {
    if (this.right === null) {
      var newTree = new BinarySearchTree(value);
      this.right = newTree;
    } else {
      this.right.insert(value);
    }
  }
};

BinarySearchTree.prototype.size = function () {
  if (this.value === null) {
    return 0;
  }

  if (this.left === null && this.right === null) {
    return 1;
  }

  if (this.left === null) {
    return 1 + this.right.size();
  }

  if (this.right === null) {
    return 1 + this.left.size();
  }

  return 1 + this.left.size() + this.right.size();
};

// Implementar el método sum dentro del prototype de BinarySearchTree
// que debe retornar la suma total de los valores dentro de cada nodo del arbol
BinarySearchTree.prototype.sum = function () {
  // Tu código aca:
  // Declarar una variable contadora. Le asignas el valor del root inicial.
  var total = this.value;
  // Recorrer el árbol partiendo de la raíz, sumar el valor de cada uno al contador
  // Si existe otro nodo a la derecha tomar ese nodo como nueva raíz y repetir el proceso. Sumar al contador total de los valores.
  // Si existe otro nodo a la izquierda tomar ese nodo como nueva raíz y repetir el proceso. Sumar al contador total de los valores.
  if (this.right) total += this.right.sum();

  if (this.left) total += this.left.sum(); // de manera recursivo ingreso a cada uno de los árboles y voy sumando al contador el valor de cada árbol
  return total;
};

// PARA BUSCAR ÁRBOL MENOR:

BinarySearchTree.prototype.searchMin = function () {
  if (!this.left) return this.value;
  else {
    return this.left.searchMin();
  }
};

var bst = new BinarySearchTree(15);

bst.insert(10);
bst.insert(17);
bst.insert(5);
bst.insert(7);
bst.insert(3);
bst.insert(25);

bst.sum();

// ---- Arboles Binarios ----

// EJERCICIO 6

// Implementar la función searchMaxTwo que busque en nuestro arbol binario los dos valores maximos
// y los retorne en un array.
// Ejemplo:
//             16
//          /      \
//        6         23
//      /  \       /   \
//     2    14    17    31
//    / \                 \
//       5                44
//
//  Debería retornarnos 44 y 31.

BinarySearchTree.prototype.searchMaxTwo = function () {
  // tu código acá:
  let TwoMax = [];

  if (!this.right) TwoMax.push(this.value);
  if (!this.right.right) {
    TwoMax.unshift(this.value);
    TwoMax.unshift(this.right.value);
  } else {
    return this.right.searchMaxTwo();
  }
  return TwoMax;
};

// EJERCICIO 09
// Implementar el método insertWord en el prototype de BinarySearchTree
// El método será similar al método insert ya implementado, pero en lugar
// de agregar valores numéricos al árbol, se encargará de insertar palabras
// que tomarán posición basándose en la cantidad de caracteres que posean.
//
// EJEMPLO:
//
// Iniciando con el árbol llamado arbolDePalabras:
//
//                          "Palabra"
//                            /    \
//
// Ejecutamos el método arbolDePalabras.insertWord("Perro")
//
//                          "Palabra"
//                            /    \
//                       "Perro"
//
// La palabra "Perro" se insertó en el nodo de la izquierda por tener una cantidad
// de caracteres menor a "Palabra".
//
// Ejecutamos el método arbolDePalabras.insertWord("Murciélago")
//
//                          "Palabra"
//                            /    \
//                       "Perro"  "Murciélago"
//
// Siguiendo la misma lógica, la palabra se insertó a la derecha por tener una
// cantidad de caracteres mayor.
//
// RESPUESTAS!:
// ✔️ Si el método recibe un string vacío, debe retornar false
// ✔️ Si el método recibe una palabra de tamaño igual a una palabra
// ya existente, debe retornar false.
// ✔️ La palabra debe insertarse en el lugar correspondiente y, de ser así,
// retornar el string que ha sido insertado

BinarySearchTree.prototype.insertWord = function (palabra) {
  // Tu código acá
  if (palabra == "") {
    return false;
  }

  if (this.value.length === palabra.length) {
    return false;
  }
  if (palabra < this.value.length && this.left !== null) {
    return this.left.SearchSameValue(palabra);
  }
  if (palabra > this.value.length && this.right !== null) {
    return this.right.SearchSameValue(palabra);
  }

  if (palabra.length < this.value.length) {
    if (this.left === null) {
      var newTree = new BinarySearchTree(palabra);
      this.left = newTree;
    } else {
      this.left.insertWord(palabra);
    }
  } else {
    if (this.right === null) {
      var newTree = new BinarySearchTree(palabra);
      this.right = newTree;
    } else {
      this.right.insertWord(palabra);
    }
  }
  return palabra;
};
