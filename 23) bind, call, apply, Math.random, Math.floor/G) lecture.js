/* 
BIND, CALL y APPLY: son métodos de funciones. Las funciones además tienen métodos como otros tipos de datos (string, booleans)

ejemplo: las funciones tienen un método funcion().lenght

Las funciones tienen métodos, entre los que están estos. Estos métodos deciden HACIA DONDE APUNTA EL THIS.
*/

// OTRO EJEMPLO:

function cacheFunction(cb) {
  /*
  Ejercicio 2: //la memoria cache guarda en algún lado las cosas previas que busqué. Nos ahorra de hacer un procesamiento costoso si ya lo hicimos previamente. Si vuelvo a invocar una función con mismo parametro que directamente me devuelva el resultado y no haga toda la función. El cb se refiere a callback es decir recibe de parámetro una función que todavóa no sé qué hace//

  Tu tarea aquí es lograr, mediante un closure, que cacheFunction actúe como una memoria caché para el callback que recibe por parámetro (cb); es decir, que "recuerde" el resultado de cada operación que hace, de manera que, al realizar una operación por segunda vez, se pueda obtener el resultado de esa "memoria" sin tener que efectuar otra vez cálculos que ya se hicieron anteriormente.

  cacheFunction debe retornar una función. Esta función debe aceptar un argumento (arg) e invocar a cb con ese argumento; hecho eso, debe guardar el argumento junto con el resultado de la invocación (tip: usá un objeto donde cada propiedad sea el argumento, y su valor el resultado de la correspondiente invocación a cb) de manera que, la próxima vez que reciba el mismo argumento, no sea necesario volver a invocar a cb, porque el resultado estará guardado en la "memoria caché".


  Ejemplo:
  function square(n){
    return n * n
  }

  const squareCache = cacheFunction(square)

  squareCache(5)    // invocará a square(5), almacenará el resultado y lo retornará
  squareCache(5)    // no volverá a invocar a square, simplemente buscará en la caché cuál es el resultado de square(5) y lo retornará (tip: si usaste un objeto, podés usar hasOwnProperty) 

  */
  // PASO 4
  var obj = {};

  // PASO 5

  return function (arg) {
    // A
    if (obj.hasOwnProperty(arg)) {
      return obj[arg];
    }
    // B
    else {
      obj[arg] = cb(arg);
      return obj[arg];
    }
  };
}

// PASO 1
function square(n) {
  return n * n;
}

// PASO 2
const squareCache = cacheFunction(square);

// PASO 3

console.log(squareCache(5));

console.log(squareCache(10));

console.log(squareCache(2));

// OTRO USO PARA LA FUNCIÓN
function cacheFunction(cb) {
  let cache = {};
  return function (valor) {
    if (!cache.hasOwnProperty(valor)) {
      cache[valor] = cb(valor); //{5:10}
    }
    return cache[valor];
  };
}
/* 
BIND: retorna una función
*/

var persona = {
  nombre: "Guille",
  apellido: "Aszyn",
};

var logNombre = function (a, b, c) {
  /* Le agregué el extra de a, b, c para ver que podemos bindearlos también. */
  console.log(this.nombre);
  console.log(a, b, c);
};

logNombre(); // La función logNombre(); undefined. si tuviera una variable global con nombre: Guille te devolvería Guille

var logNombrePersona = logNombre.bind(
  persona,
  8,
  9,
  10
); /* En el parametro de bind() le digo adonde quiero que apunte el this. Esot devuelve una función nueva donde el this está bindeado al objeto persona */

// el primer parametro de bind es el this!
logNombrePersona();

// BIND DEVUELVE UNA FUNCION!

function multiplica(a, b) {
  return a * b;
}

var multiplicaPorDos = multiplica.bind(
  this,
  2
); /* Bindeo la función multiplica pasandole el this global, y le paso un parámetro bindeandolo también */
// el Bind le `bindeó` el 2 al argumento a.
// y devolvió una función nueva con ese parámetro bindeado.

multiplicaPorDos(
  8
); /* Le tengo que pasar el parámetro que queda pq solo había bindeado uno, el 2, pero puedo bindear los dos */

var multiplicaPorOcho = multiplica.bind(
  this,
  8,
  8
); /* El this siempre tiene que estar */
multiplicaPorOcho(); // 64 Acá ni me gasté en pasarle un parámetro pq ya había bindeado a y b

// Bind

var instructor = {
  nombre: "Franco",
  edad: 25,
};

var alumno = {
  nombre: "Juan",
  curso: "FullStack",
};

function getNombre() {
  return this.nombre;
}

function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena) {
  return delimitadorIzquierda + cadena + delimitadorDerecha;
}

let textoAsteriscos = crearCadena.bind(this, "*", "*");
let textoGuiones = crearCadena.bind(
  this,
  "-",
  "-"
); /* Le pasas el this global que en realdiad no es necesario pq ya estamos en global, pero sí es necesario pasarle un primer parámetro al bind. Podríamos ponerle null:
let textoAsteriscos = crearCadena.bind(null, "*", "*"). Si hubiera un objeto, en lugar de this tendrías que ponerle el nombre del objeto. El this en este caso apuntaba a global que no era necesario; 
*/
let textoUnderscore = crearCadena.bind(this, "_", "_");

console.log(textoAsteriscos("First try")); // *First try*
console.log(textoGuiones("Second try")); // -Second try-
console.log(textoUnderscore("Third try")); // _Third try_

/*
  Ejercicio 3

  IMPORTANTE: no modificar el código de arriba (variables instructor y alumno, y función getNombre)

  Usando el método bind() guardar, en las dos variables declaradas a continuación, dos funciones que actúen como getNombre pero retornen el nombre del instructor y del alumno, respectivamente.
*/

let getNombreInstructor = getNombre.bind(instructor);
let getNombreAlumno = getNombre.bind(alumno);

getNombreInstructor(); // Franco
getNombreAlumno(); // Juan

/* CALL
El this solo invoca la función, no hace una nueva. Y también BINDEA. Me ahorro tener que crear la nueva variable para guardarla como en el bind.

*/
var persona = {
  nombre: "Guille",
  apellido: "Aszyn",
};

var logNombre = function () {
  console.log(this.nombre);
};

// el primer parametro de call es el this!
logNombre.call(persona);

// Call hace lo mismo que Bind, solo que invoca la función,
// no devuelve una nueva.
// tambien bindea argumentos!

// OTRO EJEMPLO CON PARÁMETROS:
var logNombre = function (arg1, arg2) {
  console.log(arg1 + " " + this.nombre + " " + arg2);
};

logNombre.call(
  persona,
  "Hola",
  ", Cómo estas?"
); /* Le decimos que el this tome el objeto persona, y le pasas el resto de los argumentos */
logNombre.call(persona, "No te saludo", ", Chau"); // No te saludo Guille , Chau
//Hola Guille, Cómo estas?

/* APPLY
Igual que el call pero los parámetros se pasan como arreglo:
Está mejor que el call si queres usar el for para pasarle argumentos a la función
*/

// Apply es igual a call, solo que el segundo argumento es un
// arreglo.

var logNombre = function (arg1, arg2) {
  console.log(arg1 + " " + this.nombre + " " + arg2);
};

logNombre.apply(persona, ["Hola", ", Cómo estas?"]);
//Hola Guille , Cómo estas?
