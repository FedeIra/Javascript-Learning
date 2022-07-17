/* EXPRESIONES REGULARES
Son una secuencia de caracteres que forma un patrón de búsqueda, principalmente utilizada para la búsqueda de patrones
de cadenas de caracteres.

No es algo exclusivo de javascript. Facilita la vida para muchas cosas.

https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions
*/

/* Cómo crear una expresión regular: */
let cadena = "Hoplitas? aguante los hoplitas. Esos si que eran soldados";

let expReg = new RegExp(
  "hoplitas",
  ""
); /* Acá lo paso sin bandera. En la primer coincidencia se va a detener. si hay
más coincidencias se detiene. No le pasamos el segundo párametro que son las banderas. */
let expReg2 =
  /hoplitas/; /* Esta es otra forma de crear una expresión regular */

console.log(expReg.test(cadena)); // true. Te dice true pq está la palabra hoplitas en cadena.
console.log(expReg.exec(cadena)); /* [ 'hoplitas',
index: 22,
input: 'Hoplitas? aguante los hoplitas. Esos si que eran soldados',
groups: undefined ] El exec te devuelve un arreglo con varios detalles. Te dice dónde lo encontró*/

/* Ahora bien, es sensitivo, entonces el expReg no te va a reconocer por default el string en mayuscula si no está así
definido. Ejemplo: */

let cadena2 = "Hoplitas? aguante! Esos si que eran soldados";
console.log(expReg.test(cadena2)); // false
console.log(expReg.exec(cadena2)); // null

/* Esto se puede corregir usando el segundo párametro que son las banderas. Le puedo agregar una bandera que tome la
letra en mayúscula: */

let expRegMayus = new RegExp("hoplitas", "i");
console.log(expRegMayus.test(cadena2)); // true
console.log(expRegMayus.exec(cadena2)); // me devuelve el arreglo. Es decir, ambas reconocen hoplita a pesar de que está
//con mayuscula en la cadena de texto.

/* También te lo reconoce si está seguido de otros valores: */

let cadena3 = "es lo mejor los 3hoplitasporquelodigo";
console.log(expRegMayus.test(cadena2)); // true

/* Le puedo agregar más de una bandera. Ejemplo: */
let expRegMayus2 = new RegExp(
  "hoplitas",
  "ig"
); /* Le agregué la g que significa que se va a quedar con la primer
coincidencia en lugar de la última que es el default */
let cadena4 = "Hoplitas. Me encantan los hoplitas.";
console.log(expRegMayus2.exec(cadena4)); /* [ 'Hoplitas',
index: 0,
input: 'Hoplitas. Me encantan los hoplitas.',
groups: undefined ] Me muestra el primer hoplitas en index 0*/

/* Esto aplicado en la segundo forma de crear una expresión regular:*/

const regExpDistinta = /hoplitas/gi;
console.log(regExpDistinta.test(cadena4)); // true
console.log(regExpDistinta.exec(cadena4)); // no funciona acá el ig no sé porqué

let cadena5 = "Hoplitas. Me encantan los hoplitas.";

let expReg5 =
  /\d/gi; /* \d representa números, por lo tanto te va a tirar falso ahora */
console.log(expReg5.test(cadena5)); // false
console.log(expReg5.exec(cadena5)); // null

let expReg6 = /[0-9]/gi; /* esto representa números entre 0 a 9 */
let cadena6 = "Hoplitas. Me encantan los hoplitas.0";
console.log(expReg5.test(cadena6)); // true
console.log(expReg5.exec(cadena6));

/* También están las llaves que indican repetición */

let expReg7 =
  /hoplita{2}/gi; /* Acá le digo que chequee si se repite dos veces la palabra hoplita. La i te acepta el tema de mayuscula.*/
console.log(expReg5.test(cadena6)); // true

/* Con el {} le puedo decir incluso entre cuántas repeticiones. Por ejemplo, entre 3 y 7 repeticiones: */
let expReg8 = /hola{1,2}/gi;
console.log(expReg8.test(cadena6)); // false. Acá me tira false pq no se repitió entre 3 y 7 veces.

let cadena7 = ["hola", "hola", "hola", "hola"];
console.log(expReg8.test(cadena7)); // true

/* Puedo pasarle para que sea partir de 1 te tire true: */

let expReg9 = /hola{2,}/gi;
let cadena8 = "Hola omo Hola hola hola hola hola estas todo bien";
console.log(expReg9.test(cadena8)); // false no estoy seguro por qué
