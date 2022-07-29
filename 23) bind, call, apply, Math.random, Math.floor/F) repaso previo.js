/* 
BIND

El this siempre aputna al contexto global si lo ejecutamos suelto y al objeto si lo invocamos como metodo de objeto.

Pero nosotros podemos manipularlo a nuestor gusto con BIND, CALL y APPLY que nos permiten cambiar el valor del this.

*/

var persona = {
  nombre: "Guille",
  apellido: "Aszyn",
};

var logNombre = function () {
  console.log(this.nombre);
};

logNombre(); // undefined porque se está ejecutando suelta en el contexto global. Su this va a apuntar al objeto global donde no está definido nombre.

persona.log = logNombre;
persona.log(); // Guille. Ahora si me devuelve el nombre Guille pq la función se ejecuta en el contexto del objeto, por lo que el this está en el objeto donde sí está definido el nombre. Se ejecuta como método de persona.

/* Ahora bien, cómo hago para evitar todo el codigo de las últimas dos líneas para cambiar el this a lo que quiera? PARA ESO ESTÁ BIND*/

var logNombrePersona = logNombre.bind(persona);
// el primer parametro de bind es el this! Acá le paso su this al objeto por lo que this.nombre = Guille. Básicamente, le decís que el this apunte a persona. La flecha this apuntaba a global y ahora le decís que apunte a persona.
logNombrePersona(); // ahora te devuelve Guille

/* ACLARACIÓN: esto no es lo mismo que pasarle la función logNombre como método al objeto. NO SUCEDE ESTO. Mirá: */

/* persona.logNombre(); */ // me devuelve persona.logNombre is not a function

/* Básicamente, el  var logNombrePersona = logNombre.bind(persona); equivale a lo siguiente:
var logNombrePersona = function() {
  console.log(persona.nombre)
}

BIND DEVUELVE UNA FUNCION! Y NO MOdIFICA LA ORIGINAL. Mirá!:*/

logNombre(); // me tira undefined de vuelta. Si lo hubiera cambiado me hubiera devuelto Guille.

/* 
OTRA UTILIDAD DE BIND:
Hay otra utilidad del método bind para bindear párametros de una función. ejemplo:
*/

function multiplica(a, b, c) {
  return a * b * c;
}

multiplica(2, 3, 4); // 24

/* Hatsa acá todo normal...
Pero si quiero generar subfunciones parecidas? */

var multiplicaPorInicialmenteDos = multiplica.bind(
  this,
  2
); /* Acá le paso this diciendole que lo deje tal como estaba, pero le paso otro parámetro. Necesito antes haber invocado la función con los parámetros */
// el Bind le `bindeó` el 2 al argumento a.
// y devolvió una función nueva con ese parámetro bindeado. Es lo equivalente a lo siguiente:

/* function multiplicaPorInicialmenteDos(b, c) {
  return 2 * b * c;
} */

multiplicaPorInicialmenteDos(3, 4); // 24

var multiplicaFijo2y3 = multiplica.bind(
  this,
  2,
  3
); /* Acá se bindea del primero en adelante. Si queres cambiarle tenes que cambiar directamente los parámetros de la función padre */

/* Esto es lo equivalente a:
function multiplicaFijo2y3(2, 3){
  return 2*3*c;
}

*/
multiplicaFijo2y3(4); // 24: el 4 pasa a ser el parametro de c

/* CALL:
El bind devolvía una nueva función. El call hace dos cosas en uno. Hace el bind y lo invoca de uno. A su vez, podemos dejar fijos parámetros.
*/

var persona = {
  nombre: "Guille",
  apellido: "Aszyn",
};

var logNombre = function () {
  console.log(this.nombre);
};

// el primer parametro de call es el this!
logNombre.call(persona); // Guille . Acá le digo que apunte el this a persona

// Call hace lo mismo que Bind, solo que invoca la función,
// no devuelve una nueva.
// tambien bindea argumentos!
//
var logNombre = function (arg1, arg2) {
  console.log(arg1 + " " + this.nombre + " " + arg2);
};

logNombre.call(
  persona,
  "Hola",
  ", Cómo estas?"
); /* Acá le digo que apunte el this a persona y le agrego los dos parámetros que pide la función */

//Hola Guille, Cómo estas?

/* Si necesitas apuntar el this para una única vez es mejor el call, pero si lo queres apuntar para hacer varias funciones o usos entonces es mejor el bind */

/* APPLY:
Es exactamente igual al call con la diferencia de que si quiero usar la función de dónde estaba el this, cuando le pase los parámetros si corresponde, los tengo que pasar en array en lugar de coma.

El call y apply se ejcutan en el momento. No te devuelven una nueva función. 

*/

// Apply es igual a call, solo que el segundo argumento es un
// arreglo.

var persona = {
  nombre: "Guille",
  apellido: "Aszyn",
};

var logNombre = function (arg1, arg2) {
  console.log(arg1 + " " + this.nombre + " " + arg2);
};

logNombre.apply(persona, ["Hola", ", Cómo estas?"]);
//Hola Guille , Cómo estas?
