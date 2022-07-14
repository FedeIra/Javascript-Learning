/* 
Es una palabra que hace referencia al objeto que estamos trabajando. En JS sirve para eso, pero es un poco diferente por el tema de los contextos.

This en el contexto global equivale a window que es un objeto.

*/

console.log(this); //{}

this.nombre = "Contexto Global";

console.log(this.nombre); // Contexto Global

function imprimir() {
  return this.nombre;
}

imprimir(); // undefined

const obj = {
  nombre: "Contexto Objeto",
  imprimir: function () {
    return this.nombre;
  },
};

console.log(obj.imprimir()); // Contexto Objeto
/* {} Esto es un bloque. Un scope. Un ámbito. En la función se define un nombre y el this en ese contexto se refiere al objeto por lo que imprime contexto objeto.

Por lo contrario, el primer this se definió en el contexto global por lo que esta función no nos va a devolver el this.nombre = Contexto global
*/

const obj2 = {
  nombre: "Contexto Objeto 2",
  imprimir /* Esto equivale a imprimir: imprimir. */,
}; /* La funcion imprimir acá va a hacer referencia a:
function imprimir() {
  return this.nombre; 
}
*/

obj2.imprimir(); /* Aunque la función este declarada en el contexto global, lo único que se hizo fue simplificar la sintaxis. La realidad es que se declaró nuevamente la función dentro del objeto. Más allá de eso, el contexto de la función es el contexto del objeto y por eso te imprime contexto objeto 2 en lugar de contexto global. */

const obj3 = {
  nombre: "Contexto Objeto 3",
  imprimir: function () {
    console.log(this.nombre);
  },
};

obj3.imprimir(); // Igual que el anterior, te imprime Contexto Objeto 3.

/* Esto no pasa igual con las arrow function:*/
const obj4 = {
  nombre: "Contexto Objeto 4",
  imprimir: () => {
    console.log(this.nombre);
  } /*?   */,
};

obj4.imprimir(); //Contexto Global
/* La arrow function mantiene un enlace del contexto en el que fue creado el objeto, no así el objeto mismo. La arrow function no maneja su propio scope, entonces agarra el objeto this del padre que lo ha creado, y por eso agarra el contexto global. Por esto, cuando estás trabajando en la creación de objetos que interctuan con propiedades del mismo objeto, se recomienda no utilizar arrow function porque no crea un scope y se salta el scope en el que fue creado. Como objeto 3 fue creado en el contexto global, entonces toma el valor de this del contexto global.*/

function Persona(nombre) {
  this.nombre = nombre;
  /* return console.log(this.nombre); // Jon */
  return function () {
    console.log(this.nombre, 22);
  }; /* Ya no te imprime Jon directamente. Tengo que invocar la instancia de persona y ejecutarla como método. */
}

let jon = new Persona("Jon");
jon(); // undefined

function Auto(marca) {
  this.marca = marca;
  /* return console.log(this.nombre); // Jon */
  return () => console.log(this.marca); // audi
}

const audi = new Auto("audi");

audi();

/* Salvo las arrow function cada función crea su contexto. La función constructora tiene su propio scope dentro de la cual tengo una variable. El tema es que incluso dentro de las funciones dentro de una constructora tampoco te la va a leer: */

function Personal(nombre) {
  const that = this;
}
