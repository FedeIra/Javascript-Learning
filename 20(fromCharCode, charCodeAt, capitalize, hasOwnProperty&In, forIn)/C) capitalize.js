// Otro ejemplo de MAP con otras callbacks:
let alumnos2 = ["mati", "fede", "leo", "tincho", "emi", "juan"];

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1); // charAt() retorna la posicion del array indicada. slice() devuelve parte del array desde el numero indicado. UpperCase le pone mayuscula.
};

let nuevoAlumnos3 = alumnos2.map(function (elemento, indice) {
  return elemento.capitalize();
});
console.log(nuevoAlumnos3);

//Con callbacks MAP

let nuevoAlumnos4 = alumnos.map(function (elemento, indice) {
  // con el map evito lo siguiente: let nuevoArray = []; for (let i = 0; i < alumnos.length; i++) {
  return elemento.capitalize(); //aprovecho la funcion capitalize para ponerle mayuscula
});
console.log(nuevoAlumnos3);

// Sin callbacks
let nuevoArray = [];
for (let i = 0; i < alumnos.length; i++) {
  nuevoArray.push(alumnos[i].capitalize()); //aprovecho la funcion capitalize para ponerle mayuscula
}
console.log(nuevoArray); // te da el mismo resultado que usando map

// Otro ejemplo de MAP con otras callbacks:
let alumnos6 = ["mati", "fede", "leo", "tincho", "emi", "juan"];

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1); // charAt() retorna la posicion del array indicada. slice() devuelve parte del array desde el numero indicado. UpperCase le pone mayuscula.
};
