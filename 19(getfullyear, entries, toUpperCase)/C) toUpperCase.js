//	toUpperCase()	te lo transforma todo a mayuscula

console.log(nombre.toUpperCase()); // se puede convertir lo escrito a mayusculas

// Otro ejemplo de MAP con otras callbacks:
let alumnos2 = ["mati", "fede", "leo", "tincho", "emi", "juan"];

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1); // charAt() retorna la posicion del array indicada. slice() devuelve parte del array desde el numero indicado. UpperCase le pone mayuscula.
};

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

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  return nombre.charAt(0).toUpperCase() + nombre.slice(1);
}
