// FIRST CLASS FUNCTIONS

/*
Es primera clase pq tiene los mismos privilegios q un primitivo, objeto, cualquier cosa con la diferencia que puede ser invocable y puede tener un nombre (a menos que sea anonima).

Incluso le puedo pasar a una funcion como argumento otra funcion y el hoisting la va a reconocer. A esto lo llamamos call back.
*/

/* FUNCIONES

Es un bloque de codigo con su propio contenido independiente al scope o ambito global. Se define una sola vez y se puede ejecutar en cualquier momento. Puede o no recibir parametros. Puede devolver o no valores.

Las funciones son un objeto, tipo de dato especial. Son muy importantes en js. Puedes retornar incluso la ejecucion de una funcion adicional con una funcion.

Particularmente las arrow functions son muy importantes.

function nombre (parametros) {
  //codigo a ejecutar;
}

nombre_de_la_funcion(); //esto es para llamarla

Global Scope and Functions:

In JavaScript, scope refers to the visibility of variables. Variables which are defined outside of a function block have Global scope. This means, they can be seen everywhere in your JavaScript code.

Variables which are declared without the let or const keywords are automatically created in the global scope. This can create unintended consequences elsewhere in your code or when running a function again. You should always declare your variables with let or const.
*/
// Declare the myGlobal variable below this line
let myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
  //myGlobal: 10 oopsGlobal: 5
  //myGlobal: 10 oopsGlobal: 5
}

/* Local Scope and Functions:
Variables which are declared within a function, as well as the function parameters, have local scope. That means they are only visible within that function.

Here is a function myTest with a local variable called loc. */

function myTest() {
  const loc = "foo";
  console.log(loc);
}

myTest();
console.log(loc);
/* The myTest() function call will display the string foo in the console. The console.log(loc) line (outside of the myTest function) will throw an error, as loc is not defined outside of the function. */

/* Global vs. Local Scope in Functions:
It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.

In this example: */

const someVar = "Hat";

function myFun() {
  const someVar = "Head";
  return someVar;
}
/* The function myFun will return the string Head because the local version of the variable is present. */

/* Understanding Undefined Value returned from a Function
A function can include the return statement but it does not have to. In the case that the function doesn't have a return statement, when you call it, the function processes the inner code but the returned value is undefined.

Example */

let sum = 0;

function addSum(num) {
  sum = sum + num;
}

addSum(3);
/* addSum is a function without a return statement. The function will change the global sum variable but the returned value of the function is undefined. */

/* Assignment with a Returned Value:
If you'll recall from our discussion about Storing Values with the Assignment Operator, everything to the right of the equal sign is resolved before the value is assigned. This means we can take the return value of a function and assign it to a variable.

Assume we have pre-defined a function sum which adds two numbers together, then:
 */
ourSum = sum(5, 12);
/* will call the sum function, which returns a value of 17 and assigns it to the ourSum variable. */

// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);
console.log(processed); //2

/*
PARAMETROS DE UNA FUNCION

function suma (num1, num2) {
  let resultado = num1+num2;
}

suma(5,7); //llamamos la funcion pasandole los dos parametros.

es el equivalente a decirl let num1 = 5 y let num2= 7
*/

//Funcion declarada (no tiene parametros dentro del parentesis):
function estoEsunaFuncion() {
  console.log("Unos");
  console.log("Dos");
  console.log("Tres");
}

//invocacion de funcion
estoEsunaFuncion(); //los parentesis indican q una funcion se va a ejecutar

function unaFuncionQueDevuelveValor() {
  console.log("Unos");
  return 19; // el return corta la funcion. Ignora todas las lineas de abajo y retorna el valor como valor de la funcion
  console.log("Dos");
  console.log("Tres");
  return "La funcion ha retornado una cadena de texto"; //cuando una funcion devuelve un valor usamos la palabra reservada return
}
console.log(unaFuncionQueDevuelveValor()); // si no le pongo consola la palabra return la genera, pero no sale en la consola

//Otra forma de invocarla, mejor, es asi:
let valorDeFuncion = unaFuncionQueDevuelveValor();
console.log(valorDeFuncion);

// FUNCIONES CON PARAMETROS

function saludar(nombre, edad) {
  console.log(`hola ${nombre}`);
  console.log(`tengo ${edad}`);
}
saludar("fede", 33);
saludar(); // Si no le pongo parametros me va a devolver el hola undefined y tengo undefined.

function saludar2(nombre2 = "fede", edad2 = 32) {
  //le puedo asignar valores predeterminados
  console.log(`hola ${nombre2}`);
  console.log(`tengo ${edad2}`);
}
saludar2(); // al no definir los parametros se toman los q se designaron por defecto en la funcion

/* 
Funciones declaradas VS. Funciones expresadas

*/
//FUNCION DECLARADA:
funcionDeclarada(); // se puede invocar la funcion incluso antes de hacerla. Esto es por el hoisting. Js en cierta forma la sube arriba de todo.
funcionExpresada(); //aca invoco la funcion expresada y me tira error pq si o si la tengo q poner despues de haberla expresada, a diferencia de la funcion declarada

function funcionDeclarada() {
  console.log(
    "Esto es una funcion declarada, puede invocarse en cualquier parte de nuestro codigo, incluso antes de que la funcion sea declarada"
  );
}
//se puede crear una funcion y asignarla a una variable. Se utiliza const, no let

//FUNCION EXPRESADA:est estilo de funcion esta siendo cada vez mas practicada con las introducciones de react, angular, etc. A nivel de buenas practicas, hacerlo de manera expresada te evita errores de compilacion al forzarte a ponerlas arriba de todo

const funcionExpresada = function () {
  //aca no tenemos q poner el nombre la funcion pq ya esta en la variable. Se conoce como funcion anonima (que no tiene nombre)
  console.log(
    "Esto es una funcion expresada. Es decir, una funcion que se le ha asignado como valor a una variable, si invocamos esta funcion antes de su definicion JS nos dira error"
  );
};
funcionExpresada();

/*
EVENTOS
Los eventos: son desencadenantes de la accion. Cuando navegamos por internet hacemos acciones, click, pasar por encima, etc. Esto interactua con nosotros.

El evento es un suceso q ocurre en un momento determinado. Ejemplo, hacer click, pasar el raton por encima de la imagen, etc. Ese evento desencadena una accion.

Nosotros le decimos q cuando ocurra ese evento llame a una funcion en la cual pasa algo.

Eventos -- descripcion ----------------------------------------- elementos par los que esta definido (<>)
-------------------------------------------------------------------------------------------------------------------------
onblur -- se desencadena cuando se deselecciona un elemento ---- <button>, <input>, <label>, <select>, <textarea>, <body>

onchange -- deseleccionar un elemento que se ha modificado ---- <input>, <select>, <textarea>

onclick -- pinchar y soltar el raton -------------------------- todos los elementos

ondblclick -- pinchar dos veces seguidas con el raton----------- todos los elementos

onfocus ---- seleccionar un elemento ---------------------------- <button>, <input>, <label>, <select>, <textarea>,<body>

onkeydown ---pulsar una tecla (sin soltar) ---------------------- elementos de formulario y <body>

onkeypress --- pulsar una tecla --------------------------------- elementos de formulario y <body>

onkeyup ------ soltar una tecla pulsada ------------------------- elementos de formulario y <body>

onload-------- la pagina se ha cargado completamente ------------<body>

onmousedown----pulsar (sin soltar) un boton del rato ----------- todos los elementos

onmousemove ---mover el raton -----------------------------------todos los elementos

onmouseout---el raton "sale" del elemento(pasa por encima de otro elemento)--- todos los elementos

onmouseover ---el raton "entra" en elemento(pasa por encima) -------todos los elementos

onmouseup---soltar el boton que estaba pulsado en el raton -----------todos los elementos

onreset----inicializar el formulario(borrar todos sus datos) ---------- <form>

onresize---se ha modificado el tamanio de la ventana del navegador --- <body>

*/

/*
Como se ejecutan las cosas en JS.
Para eso hay que entender los distintos tipos de ejecuciones.

1) Unico proceso y unica tarea o hilo.
2) Unico proceso con muchas tareas a la vez
3) Multiples procesos con un solo hilo por proceso
4) Multiples procesos con multiples hilos por proceso

Todo lo relacionado a JS se ejecuta en un unico proceso y unico hilo (1)

HOISTING: revise las cosas q estan. No revisa los valores sino que si existen o no. Eso nos da la posibilidad de ejecutar cosas que estan declaradas mas adelante. Es parte del reconocimiento del codigo.
*/

Declarada(); // Soy una funcionundefined/. Todavia no se definio foo, pero la funcion si se puede invocar aunque todavia no este definida

console.log(foo); // undefined
//console.log(funcionArrow()); // Aca te tira error:Cannot access 'funcionArrow' before initialization. La funcion arrow tiene que estar declarada antes de invocarse
console.log(funcionExpresada()); // Aca te tira error: Cannot access 'funcionExpresada' before initialization

var foo = "Hola, me declaro";

Declarada(); // Soy una funcionHola, me declaro

function Declarada() {
  console.log("Soy una funcion declarada" + foo);
}

const funcionArrow = () => console.log("Soy una funcion arrow" + foo);
console.log(funcionArrow());

const funcionExpresada2 = function () {
  console.log("Soy una funcion expresada" + foo);
};

// FUNCION AUTOINVOCADA

/*
Es una funcion que la defino, la pongo entreparentesis e inmediatamente la ejecuto.
*/
var instructor = "Fede";

(function () {
  if (true) {
    var instructor = "Franco";
    console.log(instructor); //Franco
  }
})();

console.log(instructor); // Fede

//FUNCION AUTOINVOCADA

(function funcionAutoinvocada(argumento) {
  console.log(argumento);
})("Hola, soy el argumento"); // Hola, soy el argumento

var variableArgumento = "Hola soy la variable con el argumento";

(function funcionAutoinvocada2(argumento2) {
  console.log(argumento2);
})(variableArgumento); // Hola soy la variable con el argumento

(function funcionAutoinvocada3(argumento3) {
  console.log(argumento3);
})(a); // ReferenceError: a is not defined

(function funcionAutoinvocada3() {
  console.log("Soy una funcion autoinvocada simple");
})();
