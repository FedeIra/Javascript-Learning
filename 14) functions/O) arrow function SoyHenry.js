/*
! ARROW FUNCTIONS */

var arr = [1, 2, 3, 4];

/* Sin arrow function: */

var nuevo = arr.map(function (element) {
  return element + 1;
});
console.log(nuevo); // [ 2, 3, 4, 5

/* Con arrow function */

var nuevo2 = arr.map((element) => element + 1);
/* A la izquierda de la flecha están los argumentos de la función. Si no hay argumentos ni siquiera hace falta ponerle parentesis como se puede ver de este ejemplo. Si no lleva argumentos va el parentesis vacío.

Del lado derecho de la flecha van las instrucciones de la función.
console.log(nuevo2); // [ 2, 3, 4, 5 ]
Si no pongo llaves hay un return implícito. Si tengo una instrucción más compleja tengo que escribir la llave y hacer la lógica.*/

var fn = () => {
  var nombre = "hola";
  console.log(nombre);
  return nombre;
}; /* fijate acá que le puse brackets e incluso return. */

/*
!THIS:
Qué pasa con el this. Va ejemplo de función normal:

*/

var bob = {
  name: "Bob",
  friends: ["Fede", "Fran", "Toni"],

  printfriends() {
    this.friends.forEach(function (f) {
      console.log(this.name + " knows " + f);
    }); /*el this está en el contexto de dentro del método del objeto bob, por eso no te lee el name */
  },
};
bob.printfriends();

/* Para solucionar esto hacíamos lo siguiente:. Usamos la variable that.*/

var bob = {
  name: "Bob",
  friends: ["Fede", "Fran", "Toni"],

  printfriends() {
    var that = this;
    this.friends.forEach(function (f) {
      console.log(that.name + " knows " + f);
    }); /*el this está en el contexto de dentro del método del objeto bob, por eso no te lee el name */
  },
};
bob.printfriends();

/* Mirá la diferencia con arrow function: */

var bob = {
  name: "Bob",
  friends: ["Fede", "Fran", "Toni"],

  printfriends() {
    var that = this;
    this.friends.forEach((f) =>
      console.log(that.name + " knows " + f)
    ); /*NI SIQUIERA FUNCIONA EL THAT */
  },
};
bob.printfriends(); /*
!BINDEAN EL this automáticamente al contexto que fueron creadas. EL ARROW FUNCTION BINDEA AL THIS AL CONTEXTO EN EL QUE FUE CREADA */

/* ARROW EN MÉTODOS DE CONSTRUCTORAS. Primer ejemplo sin arrow function: */

function Persona(nombre, apellido) {
  this.nombre = nombre || "Fede";
  this.apellido = apellido || "Panella";
}

Persona.prototype.getNombre = function () {
  return this.nombre + " " + this.apellido;
};

var fede = new Persona();
console.log(fede.getNombre()); // Fede Panella

/* Ahora con arrow function: */

function Persona2(nombre, apellido) {
  this.nombre = nombre || "Fede";
  this.apellido = apellido || "Panella";
}

Persona2.prototype.getNombre = () => this.nombre + " " + this.apellido;

var fede = new Persona2();
console.log(fede.getNombre()); // undefined undefined porque el arrow function bindea el this al contexto que fue creado. El this del arrow function es el contexto en el que fue creado.
