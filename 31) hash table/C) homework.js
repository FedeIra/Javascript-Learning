"use strict";

/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings. Cada letra tiene asociado un código cuando usas charCodeAt = var str = "Franco"; str.charCodeAt(0) = 70) y calcula el módulo (mod es %) de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

// FUNCIÓN CREADORA DE LA HASHTABLE
function HashTable() {
  this.numBuckets = 35;
  this.buckets = [];
}

HashTable.prototype.hash = function (key) {
  let sum = 0;
  for (let i = 0; i < key.length; i++) {
    sum += key.charCodeAt(i);
  }
  return sum % this.numBuckets;
};

HashTable.prototype.set = function (key, value) {
  if (typeof key !== "string") throw new TypeError("Keys must be strings");
  let i = this.hash(key);

  // con esto evito colisiones:
  if (this.buckets[i] === undefined) {
    this.buckets[i] = {};
  }
  this.buckets[i][key] = value;
};

HashTable.prototype.get = function (key) {
  let i = this.hash(key);
  return this.buckets[i][key];
};

HashTable.prototype.hasKey = function (key) {
  let i = this.hash(key);
  return this.buckets[i].hasOwnProperty(key);
};

// vamos a tener un arreglo this.buckets = [{instructora = "Ana"}];
/* mientras que recibe un imput y nos de un output ya está. Lo importante es que si ingresamos el mismo input salga lo mismo como valor
  HashTable.prototype.hash = function(key) {
    let sum = 0
    for (let i = 0, key.length; i++) {
      sum+= key.charCodeAt(i);
    } 
    return sum%this.numBuckets
  }
}
  
  */

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
