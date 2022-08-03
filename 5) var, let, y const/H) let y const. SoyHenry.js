/*
ES6

!LET Y CONST:

*/
function f() {
  var a = "Fede";
  let b = "Fede";

  if (true) {
    var a = "Fran";
    let b = "Fran";
  }
  /* let b = "Fran"; No se puede declarar b en el mismo bloque dos veces*/
  console.log(a); // Fran
  console.log(b); // Fede
}
f();

/* CONST, al igual que let tiene un alcance de bloque: */
function f() {
  var a = "Fede";
  const b = "Fede";

  if (true) {
    var a = "Fran";
    const b = "Fran";
  }
  /* const b = "Fran"; No se puede declarar b en el mismo bloque dos veces*/
  console.log(a); // Fran
  console.log(b); // Fede
}
f();

/* La diferencia es que no se puede cambiar el valor */
function f() {
  var a = "Fede";
  const b = "Fede";

  if (true) {
    var a = "Fran";
    const b = "Fran";
  }
  /* b = "Fran"; ERROR no se puede cambiar valor */
  console.log(a); // Fran
  console.log(b); // Fede
}
f();

/* El const si se puede cambiar accediendo a su array o valores. Ejemplo: */

function f() {
  var a = "Fede";
  const b = { nombre: "Fede" };

  if (true) {
    var a = "Fran";
    const b = "Fran";
  }
  b.nombre = "Fran";

  console.log(a); // Fran
  console.log(b); // Fede
}
f(); //Fran { nombre: 'Fran' }

/*Te deja pq estás cambiando la propiedad de un objeto. Estoy cambiando el valor interno aunque la referencia de memoria es la misma. Con arreglo pasa lo mismo. No cambias el lugar de memoria donde se encuentra el objeto.*/
