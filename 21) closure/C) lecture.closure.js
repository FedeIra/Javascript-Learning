/* 
CLOSURES:

Una cláusura es cuando yo necesito guardar una variable en un contexto de ejecución que ya no existe. Los contextos de ejecución se cierran y no podemos acceder a sus variables (LIFO). El closure soluciona esto, te da acceso a esas variables. Quedan guardadas, pero solo del contexto de ejecución donde la necesites.

Cuando utilizamos de cierta manera las funciones hacemos un closure.

Las funciones se pueden guardar como variables, pasar como parámetros, etc. Las funciones pueden retornar otras funciones!

El closure no tiene NADA QUE VER CON CALLBACK:
*/

//CALLBACK:
function saludo(nombre, callback) {
  callback(nombre);
  return;
}

saludo("Her", function (parametro) {
  console.log(parametro);
}); // Her

// CLOSURE
function saludo(nombre, callback) {
  return function name(params) {};
}

/* El closure es una función que retorna otra función */

function cualquierNombre(nombre) {
  /* Contexto de ejecución:
  ...
   */
  let aux = "asd";
  let codigo = 2334;
  return function () {
    //closure
    console.log("soy pepe");
    console.log(codigo); // sigue disponible la info. de código acá a pesar de haberse cerrado la caja de la función cualquierNombre la que se eliminó luego de ser ejecutada.
    console.log(aux); // asd. Gracias al closure puedo acceder también a esta info, pero solo desde la función.
  };
}

cualquierNombre(
  "Her"
); /* Se abre un contexto de ejecución de la función al invocarla con: 1) lexical environment, 2) código, y 3) outer (global) */

/* Perso si hago una variable?: */

var caja = cualquierNombre("He"); // queda guardado en caja una función

caja(); /* Y acá se generaría el contexto de ejecución de caja {1) lexical, 2) código: console.log, 3) outer (cualquierNombre la función)}. El tema que cuando llega a esta función, el contexto de la función de cualquier nombre (el outer) se eliminó. 
CLOSURE: permite que caja() pueda acceder igualmente a la info. de la caja de cualquierNombre a pesar de que se eliminó. Esto gracias al closure que te da acceso. Pero solo desde la función caja tenes acceso. LA CLOSURE ES PRIVADA DE LA VARIABLE CAJA.
*/

var caja2 = cualquierNombre("Fede");

caja2(); // acá cree otra función con su propio closure usando el mismo código que el anterior.

// OTRO EJEMPLO:

function saludar(saludo) {
  //saludo queda guardado en el closure pq se retorna una función que usa este parámetro
  return function (nombre) {
    console.log(saludo + " " + nombre);
  };
}

var saludarHola = saludar("Hola"); // Esto devuelve una función

saludarHola("Toni"); // 'Hola Toni'

saludar("Hola")("Toni"); // Hola Toni. Esto si quiero invocarla una vez, pero si quiero hacer una fábrica hay que hacer variables.

var saludarChau = saludar("Chau"); //
saludarChau("Otro nombre"); // Chau Otro nombre

// OTRO EJEMPLO:

var creaFuncion = function () {
  var arreglo = [];

  for (var i = 0; i < 3; i++) {
    /* Si le cambio let entonces si queda guardado en cada uno la variable imprimiendo 0, 1 ,2. Con var va sobreescribiendo cada una. */
    arreglo.push(function () {
      console.log(i);
    });
  }
  return arreglo; /* En el arreglo se van guardando las funciones que son un console.log(i) */
};

var arr = creaFuncion();

arr[0](); // 3 sale un 3, qué esperaban ustedes??
arr[1](); // 3
arr[2](); // 3

// OTRO EJEMPLO:

function counter() {
  var contador = 0; /* Acá se crea un contexto y se crea la variable. Si creamos la variable adentro de la función return no sería closure pq no está accediendo a un valor fuera de su contexto*/
  return function addOne() {
    return ++contador; /* Acá se abre un nuevo contexto el cual puede acceder a la variable contador a través del closure */
  };
}

const nuevoContador = counter();

console.log(nuevoContador()); // 1
console.log(nuevoContador()); // 2
console.log(nuevoContador()); // 3
console.log(nuevoContador()); // 4

/* Le pongo al principio el ++ para que el return me lo devuelve con el más uno ya. Otra posibilidad hubiera sido:
    return contador +=1
    contador = contador + 1
    contador ++; */

// Otro ejemplo:

function exponencial(exp) {
  return function (params) {
    return params ** exp;
  };
}

let sqrt = exponencial(2);
let e4 = exponencial(4);
let e3 = exponencial(3);

sqrt(2); // 4
sqrt(3); // 9
sqrt(4); // 16

// Otro ejemplo:

var creaFuncion = function () {
  var arreglo = [];
  for (var i = 0; i < 3; i++) {
    // IIFE: no se sobreescribe i al estar en una función autoinvocada. En lugar de usar let como en el ejemplo anterior, haces que la función se autoinvoque.
    arreglo.push(
      (function (j) {
        return function () {
          console.log(j);
        };
      })(i)
    );
  }
  return arreglo;
};

var arr = creaFuncion();

arr[0](); // 0
arr[1](); // 1
arr[2](); // 2

function hacerSaludo(lenguaje) {
  if (lenguaje === "en") {
    return function (nombre) {
      console.log("Hi!");
      console.log(nombre);
    };
  }

  if (lenguaje === "es") {
    return function (nombre) {
      console.log("Hola!");
      console.log(nombre);
    };
  }
}

var saludoIngles = hacerSaludo("en");
var saludoEspaniol = hacerSaludo("es");

saludoIngles("Fede"); // Hi! Fede
saludoEspaniol("Fede"); // Hola! Fede

function generador(cantidad) {
  var aux = { prop: cantidad };
  var arr = [];
  arr[cantidad] = "Hola";

  return function () {
    console.log(arr[cantidad]);
    var caja = aux;
    console.log(caja);
    caja.name = "Her";
    console.log(aux);
  };
}

const pepe = generador(5);

pepe(); /* 
Hola
{ prop: 5 }
{ prop: 5, name: 'Her' } 
*/

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
