// Ejemplo: la funcion splice() es un metodo destructivo pq modifica el objeto original. Te modifica el array original.

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var string = [],
    start = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      string.splice(start, 0, s[i]);
      start++;
    } else {
      string.push(s[i]);
    }
  }
  return string.join("");
}

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa
  // un par clave-valor en forma de matriz.
  //Ejemplo:
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let matriz = [],
    matriz_final = [];

  for (const propiedad in objeto) {
    matriz.push(propiedad, objeto[propiedad]);
  }

  while (matriz.length > 0) {
    matriz_final.push(matriz.splice(0, 2));
  }
  return matriz_final;
}
