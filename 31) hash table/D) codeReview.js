// HASH TABLE: SOLUCIÓN DEL PROFESOR
function HashTable() {
  this.numBuckets = 35;
  this.buckets = []; // [{}{}{}]
}

// FUNCIÓN HASH
HashTable.prototype.hash = function (key) {
  let sum = 0;
  for (let i = 0; i < key.length; i++) {
    sum += key.charCodeAt(i);
  }
  return sum % this.numBuckets; // con esto (el módulo = %) te aseguras de que no haya más de 35 casilleros.
};

//FUNCIÓN SET
HashTable.prototype.set = function (clave, valor) {
  if (typeof clave !== "string") {
    throw new Error("Keys must be strings");
  }
  let posicion = this.hash(valor);

  // para manejar las colisiones:
  this.buckets[posicion] = this.buckets[posicion] || [];

  this.buckets[posicion].unshift({ clave, valor });
  /*  Se puede hacer la línea anterior con los sigueintes:
  this.buckets[posicion] = { key: clave, value: valor }
  this.buckets[posicion][clave] = valor; */
};

//FUNCIÓN GET
HashTable.prototype.get = function (clave) {
  var posicion = this.hash(clave);

  for (let i = 0; i < this.buckets[posicion].length; i++) {
    if (this.buckets[posicion][i].key === clave) {
      return this.buckets[posicion][i].value;
    }
  }
  return false;
};

//FUNCIÓN HASKEY
HashTable.prototype.hasKey = function (clave) {
  if (typeof clave !== "string") {
    throw TypeError("Keys must be strings");
  }

  var respuesta = this.get(clave); // te devuelve el valor si existe

  if (respuesta) {
    return true;
  } else {
    return false;
  }
};
