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

const funcionExpresada = function () {
  console.log("Soy una funcion expresada" + foo);
};

// EXECUTION STACK

/* un stack es una pila. Una pila de platos por ejemplo. Uno arriba de otro. Cuando empiezo a lavar los platos saco el ultimo de arriba, el primero q puse. Lo mismo pasa con el proceso de ejecucion. Una funcion q llama a otra funcion. Hasta que termine b (la primera funcion), la funcion a no puede terminar, y hasta que se termine de ejecutar a no se puede ejecutar el contexto global que es todo el archivo de js. El proceso finaliza con el "global execution context" que se refiere al proceso global o ejecucion del proceso global.


*/

function b() {
  console.log("B!");
}

function a() {
  b();
}

a();

// SCOPE
/*
Algo similar al contexto de ejecucion. Pero para las variables no pasa nada, aunque entra en juego las let y const. Ley y const hacen uso del scope y var del contexto.

No es lo mismo scope que contexto, pero para identificar donde hay un scope es cada vez q abris llaves, no contexto. Lo q ponga adentro de un for tiene su propio scope y let y const hacen uso de eso.
*/

var global = "Hola!";
function a() {
  // como no hay una variable llamada global en este contexto,
  // busca en el outer que es el global
  console.log(global);
  global = "Hello!"; // cambia la variable del contexto global
}
function b() {
  // declaramos una variable global en nuestro contexto
  // esta es independiente
  var global = "Chao";
  console.log(global);
}

function c() {
  console.log(global);
  var global = "Chao"; //aca tira undefined pq se define el global antes del log y debido al hoisting q reconoce que hay una definicion de global, no recurre a la definicion global del contexto ("Hola!"). Distinto seria si le saco el var, en cuyo caso en lugar de crea una nueva variable solo estaria modificando la variable del contexto global y entonces al no haber una nueva variable en este scope podria recurrir a la variable global.
}

a(); // 'Hola!'
b(); // 'Chao'
c(); // undefined
console.log(global); // 'Hello'

// TIPOS DE DATOS

/*
Tipado estatico y tipado dinamico.
Cada vez que guardamos una variable puede o no tener un tipo de dato especifico.

JS es un lenguaje de tipado dinamico. Creo una variable, le asigno un valor, y luego lo puedo modificar a cualqueir cosa (array, booleano, lo que quiera). 

Fuertemente tipado es estricto el dato q le voy a meter, tipado dinamico lo contrario. Le asigno el valor q quiera. El problema de los lengujaes de tipado dinamico yo le asigno a una variable y cuando la voy a usar no es el tipo de dato esperado. El problema es q te rompe el codigo despues.
*/

// OPERADORES
/*
Los operadores son los que nos hacen trabajar con distintas operaciones matematicas. Dependiendo la posicion en los que esten, su efecto.
Ejemplo= + e =
*/
var a = 2 + 3; // 5
function suma(a, b) {
  return a + b;
  // usamos el mismo operador como ejemplo
  // Si no deberiamos hacer sumas binarias!
}
var a = suma(2, 3); // 5

var i = 0;
function suma1() {
  return i++;
}

console.log(suma1()); // 0 . Te devuelve el 0 porque el ++ esta despues del i que es lo q retorna. En el proximo va ya a estar guardado el ++, por lo que en la siguiente te tira 1...y  asi sucesivamente
console.log(suma1()); // 1

var ii = 0;
function suma2() {
  return ++ii;
}

console.log(suma2()); // 1 Aca te devuelve de una el 1 porque los ++ estan adelante de ii
console.log(suma2()); // 2

// PRECEDENCIA DE OPERADORES Y

/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table

En el link anterior aparecen los operadores por precedencia del 19 al 1, siendo 1 el menos precedente y 19 el mas. Mientras mas precedencia, mayor prioridad se les da. Un ejemplo es el operador + (precedencia 14) y * (precedencia 15). Primero se hace la multiplicacion y luego la suma. El parentesis (predencia 1) es el mas importante.

Ademas de esto, en principio, el orden siempre es de izquierda a derecha. Digo en principio, pq hay algunas que se hacen de derecha a izquierda (ejemplo, los de precedencia 17 = ! ... , ++ ..., typeof, delete ..., exponencial (**)). Hay otras n/a, es decir no tiene importancia si es de derecha a izquierda o viceversa.
*/

// COERCION DE DATOS

console.log(Number("3")); // devuelve el número 3. Obvio!
console.log(Number(false)); // devuelve el número 0. mini Obvio.
console.log(Number(true)); // devuelve el número 1. menos mini Obvio.
console.log(Number(undefined)); // devuelve `NaN`. No era obvio, pero tiene sentido.
console.log(Number(null)); // devuelve el numero 0. WTFFFF!!! porqueeEE no debería ser `NaN`??

// undefined es la falta de un valor y null es un valor nulo q se podria asociar a un false y por eso 0.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#a_model_for_understanding_equality_comparisons
// en el link de arriba estan todos estos ejemplos.

// FIRST CLASS FUNCTIONS

/*
Es primera clase pq tiene los mismos privilegios q un primitivo, objeto, cualquier cosa con la diferencia que puede ser invocable y puede tener un nombre (a menos que sea anonima).

Incluso le puedo pasar a una funcion como argumento otra funcion y el hoisting la va a reconocer. A esto lo llamamos call back.
*/

// EXPRESIONES Y STATEMENTS

/*


*/

// Expresion
1 + 1;
a = 3;
//Statement
if (condicion) {
  // bloque de código
}
// function statement (declarada)
function saludo() {
  console.log("hola");
}
// function expression. Es una variable que esta igualada a una funcion. La accedo desde una variable. Al ser variable el hositing no la reconoce si no esta declarada todavia.
var saludo = function () {
  console.log("Hola!");
};
console.log(function () {
  //hola;
});

// VALOR Y REFERENCIA

/*
Primitivos (tipos): number, booleano, string, undefined, null son primitivos.
No primitivo: funcion, objeto, array, instancia de clase.

*/

var a = 5; // es primitivo pq es un numero

var b = { a: 5 }; // no es primitivo.

// Cuando guardo un valor primitivo en una variable le guardo el valor. Cuando guardo un objeto en una variable no estoy guardando el objeto, sino que el objeto se guarda en la memoria, y el var b es la referencia a donde esta guardada el objeto.

// En el primer caso, guardo un cosa. En el segundo es como si guardara la direccion de la cosa, es decir donde esta (referencia). Se la ubicacion. Tengo la ubicacion y yo me guardo la variable como ubicacion. Cuando voy a la variable le hago un especie de acceso directo como guardo un icono de una aplicacion en el escritorio. No es la aplicacion en si misma.

var toni = { name: "toni" };

var headOfLearning = toni;

console.log(toni);

console.log(headOfLearning);

headOfLearning.name = "Antonio Tralice";

console.log(toni.name);

if (toni === headOfLearning) {
  console.log(
    "la variable headOfLearning se apropio del objeto toni. Entonces incluso cuando invocas la variable toni que es donde tenes guardado el objeto, el objeto ahora va a ser de headOfLearning con su nueva propiedad de name = Antonio Tralice. Le rompio la puerta de la casa, no de la direccion. Se metio adentro de la referencia (toni) y le cambio el name que es parte del objeto"
  );
}

function hola(nombre) {
  console.log(nombre);
}

hola("toni"); // toni

var toni = "Antonio Tralice";

hola(toni); // Antonio Tralice

function hola(nombre) {
  nombre = "Hola, " + nombre;
  console.log(nombre);
}

hola(toni); // Hola, Antonio Tralice

console.log(toni); // Antonio Tralice. La funcion de hola no la toco pq es una copia del valor pq es primitivo. Le pase valores, no referencias pq el valor es primitivo. Por lo contrario, si le pasara una referencia, si me la cambia. Una referencia es por ejemplo el valor donde se guarda un objeto q no es el objeto en si mismo, sino que una referencia del mismo diciendo donde se encuentra guardado. Ejemplo:

hola(toni);

/*
cuando paso por argumento de una funcion un valor q es primitivo se hace una copia y no modifica el original. Cuanod yo paso un objeto, un array, una instancia de una clase estoy pasando la referencia pq no es primitivo. Si yo mnodifico algo dentro de eso estoy modificando el original.

Cuando paso en una funcion una variable con un numero, booleano o string si le toco el argumento toco la copia y no el original. Cuando paso un objeto, array, o valor no primitivo si toco el original.

Esto es importante pq existen funciones destructivas y q no son destructivas. 

Ejemplo: la funcion splice() es un metodo destructivo pq modifica el objeto original. Te modifica el array original.

En cambio el slice() no toca el original sino q te devuelve una copia en un nuevo array.
*/

// THIS

/*
El this hace referencia dependiendo de q es lo q estamos hacieendo, al CONTEXTO GLOBAL.

Node.js no tiene contexto global como tal.

El navegador si tiene contexto global. 

El this es como un acceso directo al contexto global. Cuando yo tengo una clase y adentro de la clase hago uso del THIS ahi tengo acceso al contexto global de la propia clase: Es decir, si tengo una clase algo o funcion de clase y utilizo algun this con los prototype, hago referencia a la instancia de esa clase.

Cuando tengo un objeto hago referencia a la instancia de esa clase. Es decir, hago referencia al objeto. 

Cuando tengo una funcion normal y hago uso del this hago referencia al conexto global. 

*/

var o = {
  prop: 37,
  f: function () {
    return this.prop; // aca hace referencia a la variable prop, y te retorn 37
  },
};
console.log(o.f()); // logs 37
// this hace referencia a `o`
var o = { prop: 37 };
// declaramos la función
function loguea() {
  return this.prop; // en este caso no esta dentro de una clase, por lo que no apunta a nada este this.
}
console.log(loguea); // [Function: loguea]. Esto pq el this no hace referencia a nada.

//agregamos la función como método del objeto `o`
o.f = loguea;
console.log(o.f()); // logs 37
// el resultado es le mismo!

var obj = {
  nombre: "Objeto",
  log: function () {
    this.nombre = "Cambiado"; // this se refiere a este objeto, a `obj`
    console.log(this); // obj
    var cambia = function (str) {
      this.nombre = str; // Uno esperaria que this sea `obj`
    };
    cambia("Hoola!!");
    console.log(this);
  },
};

obj.log(); // { nombre: 'Cambiado', log: [Function: log] } Tiene sentido pq el this hace referencia al contexto global q en este caso es la clase y por lo tanto te imprime el objeto. Por otro lado, el nombre = cambiado permanence igual a pesar del this.nombre = str por que la funcion cambia no esta dentro del objeto, sino que esta declarada dentro de la funcion de log.

this.nombre = "Pepe";

obj.log(); // { nombre: 'Cambiado', log: [Function: log] } . Aca tampoco cambia el this.nombre del objeto "obj

console.log(this.nombre); //Pepe, aca si cambia pq cambio el contexto global la linea de this.nombre = "Pepe"

// LOOP
/*
El event loop nos ayuda con lo relacionado al asincronismo.
Se utiliza una api del navegador q se encarga de procesar aparte esas llamadas q van a demorar un tiempo (asincronas).

*/

function saludarMasTarde() {
  var saludo = "Hola";
  setTimeout(function () {
    // en el loop te aparece como anonymus pq no tiene nombre la funcion.
    console.log(saludo);
  }, 3000);
}
saludarMasTarde();

/*
Todas las llamadas asincronas, se van a agregando al callstack (callback queue). 

Si una de esas funciones hacen uso de la asincronia.

Es el paralelo de que tengo una pila de platos para lavar y de repente uno tiene mucha comida pegada, entonces lo tengo en remojo y lo dejo a un costado. Antes de terminar de lavar ese plato aunque ya este listo para lavar, lavo todo el resto y solo cuando termino de lavar el resto lavo ese plato.

La web api, adonde va la funcion asincronica lo q hace es "ir aflojandole la comida pegada y una vez q se aflojo mandarla a la lista de espera".

Le da una prioridad diferente. Priorizo lo q estoy ejecutando en hilo.
*/
