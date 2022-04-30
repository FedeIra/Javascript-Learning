/* SENTENCIAS 

 con el punto y coma termina la sentencia. Aparte te puede tirar error. Sirve para ver donde termina la sentencia. */

alert ("Hola alumnos");

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
nombre_variable3= 3;

var nombre_variable4 = 4;

// Declaracion de varias variables en la misma linea
var nombre_variable5, nombre_variable6, nombre_variable7 
nombre_variable5 = 5; 
nombre_variable6 = 6; 
nombre_variable7 = 7;

var nombre_variable8 = 8, nombre_variable9 = True, nombre_variable10 = "Fede"