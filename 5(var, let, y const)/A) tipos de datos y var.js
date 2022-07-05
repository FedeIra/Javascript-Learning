/*
ESTRUCTURA DE CODIGO:

Es recomendado escribir con la siguiente estructura:
1) Importacion de modulos
2) Declaracion de variables
3) Declaracion de funciones
4)Ejecucion de codigo



TIPOS DE DATOS:
1) Primitivos: string, number, boolean, null, undefined, NaN

2) Compuestos: object = {} , array = [],  function () {}  , class {}  , etc.


PALABRAS RESERVADAS:
A: abstract
B: boolean, break, byte
C: case, catch, char, class, const, continue
D: debugger, default, delete, do, double
E: else, enum, export, extends
F: false, final, finally, float, for, function
G: goto
I: if, implements, import, in, instanceof, int, interface
L: let, long
N: native, new, null
P: package, private, protected, public
R: return
S: short, static, super, switch, synchronized
T: this, throw, throws, transient, true, try, typeof
V: var, volatile, void
W: while, with
*/

/* SENTENCIAS 

 con el punto y coma termina la sentencia. Aparte te puede tirar error. Sirve para ver donde termina la sentencia. */

alert("Hola alumnos");

document.write("Hola alumnos");

/* Funciones predefinidas: las que vienen con el lenguaje. Biblioteca con funciones. Las funciones siempre llevan unos parentesus

Ejemplo:

Math.pow (2,2) = 4; Esto te devuelve un numero elevado a un exponente

Math.round(6.98) = 7; Esto te redondea el numero para arriba a partir del .5 
Math.floor(6.98) = 6; Esto te lo redondea siempre para abajo
Math.ceil(6.0001) = 7; Te lo redondea siempre para arriba

Otro ejemplo: length */

var prueba_length = "largo";
console.log(prueba_largo.lenght);

// Hay funciones propias tambien: las q armas vos.

alert();
document.write();
isNan();

/* tipos de datos: 
numeros  (Number), 
strings: texto. Siempre entre comillas. Comillas dobles o simples. Es lo mismo en general. Pero cambia con comillas embutidas o anidadas.
booleans: True o False
null : no significan nada
undefined : no esta definido

Tenes tambien null que es igual a nada

undefined cuando una variable no esta definida.

Despues tenes NaN que es 'not a number' ejemplo: null + undefined

VARIABLE: espacio en la memoria del ordenador donde se almacena un valor. Puede ir cambiando.

le pongo var y nombre de la variable y luego de doy valor

el nombre de la variable tiene que comenzar con letra, simbolo $ o _
Pueden contener solo letras, numeros, $ y _
son case sensitive: cambia el tema de mayuscula y minuscula
Hay palabras reservables con las q no se puede nombrar variables: como alert
Se recomienda que sean descriptivos

Hay un tipo de variable que es permanente y no puede ser modificacada: const variable_inmodificable = "Pizza";
*/

const variable_inmodificable = "Pizza";

// nombres de variables
var nombre_variable0 = 0;
var $nombre_variable1 = 1;
var _nombre_variable2 = 2;

// iniciar una variable
var nombre_variable3;
nombre_variable3 = 3;

var nombre_variable4 = 4;

// Declaracion de varias variables en la misma linea
var nombre_variable5, nombre_variable6, nombre_variable7;
nombre_variable5 = 5;
nombre_variable6 = 6;
nombre_variable7 = 7;

var nombre_variable8 = 8,
  nombre_variable9 = True,
  nombre_variable10 = "Fede";

/* los nombres de las variables pueden iniciar con letra, signo de dolar, guion bajo (_). Nunca con numeros o caracteres especiales. Los nombres es lo que se llaman IDENTIFICADORES.

No utilizar espacios en blanco y tildes u otras funciones de castellano como enie
 */

// VAR, LET Y CONST Y SCOPES
var instructor = "Tony";
let pm = "Franco";
const constante = "Hola";

if (true) {
  var instructor = "The Flash";
  let pm = "Reverse Flash";
  console.log(instructor); // The Flash
  console.log(pm); // Reverse Flash
}
console.log(instructor); // The Flash
console.log(pm); //  Franco. En este ultimo sale Franco pq tanto let como const estan asignados al scope y por lo tanto solo vive dentro del scope. No le importa el contexto, sino que el scope. Al tipo var solo le importa el contexto.

pm = "Francisco"; //Francisco
console.log(pm);

//constante = "Chau";
//console.log(constante); aca te tira error: TypeError: Assignment to constant variable. No se puede reasignar un const.

// En el mismo scope no puede haber dos variables let o scope. Let solo hace caso dentro del scope.

// La diferencia entre const y let es que una vez que se crea una const no puede ser ni reasignada ni sobreescrita de ninguna manera. Cada vez q vemos un const, dentro de ese scope no puede existir otro.

// Podemos tener tantos let como vars en diferentes scopes.

// Los let si los haces en un contexto, ejemplo funcion o {}, no funcionan fuera de ese scope, mientras que las var si. Ejemplo;

if (true) {
  let variableLet = "no funciona fuera de este scope";
  var variableVar = "si funciona fuera de este scope";
  const variableConstante = "no funciona fuera de este scope";
}

console.log(variableLet); // ReferenceError: variableLet is not defined. Es decir, la declare dentro del scope del statement if, y no funciona fuera de ese scope.
console.log(variableConstante); // ReferenceError: variableConstante is not defined. Es dcir, al igual que el let no funciona fuera del scope del statement if.
console.log(variableVar); // si funciona fuera de este scope. Es decir, la declare en el scope del statement if, y funciona fuera de ese scope.

//Pero ademas, en el contexto general o incluso dentro de un scope, la variable const no se la puede modificar. Ejemplo:

const variableConst =
  "no se puede modificar esta variable aunque sea en el mismo scope, a diferencia del let y var que si se pueden modificar dentro del mismo scope o contexto";

variableConst = "lo trato de cambiar de valor, pero me va a tirar error";

console.log(variableConst); // TypeError: Assignment to constant variable. Es decir, le asignamos un nuevo valor a una variable constante lo que no es posible y por eso nos tira error.

//OTRO EJEMPLO DE VAR Y LET

var snack = "Meow Mix";

function getFood(food) {
  if (food) {
    var snack = "Friskies";
    return snack;
  }
}
console.log(getFood(false)); //undefined
console.log(getFood(0)); //undefined
console.log(getFood(null)); //undefined
console.log(getFood(undefined)); //undefined
console.log(getFood(1)); //Friskies. Pq cualquier positivo es true, incluyendo una string:
console.log(getFood("Hola")); //Friskies.

//Ahora con let
let snack2 = "Meow Mix";

function getFood2(food2) {
  if (food2) {
    let snack2 = "Friskies";
    return snack2;
  }
}
console.log(getFood2(false)); //undefined
console.log(getFood2(0)); //undefined
console.log(getFood2(null)); //undefined
console.log(getFood2(undefined)); //undefined
console.log(getFood2(1)); //Friskies. Pq cualquier positivo es true, incluyendo una string:
console.log(getFood2("Hola")); //Friskies.
console.log(snack2); // "Meow Mix", pero si le saco el let snack2 = "Meow Mix" del contexto global te tira snack2 is not defined
console.log(snack2);
