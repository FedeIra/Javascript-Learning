/*Using the Test Method
Regular expressions are used in programming languages to match parts of strings. You create patterns to help you do that matching.

If you want to find the word the in the string The dog chased the cat, you could use the following regular expression: /the/. Notice that quote marks are not required within the regular expression.

JavaScript has multiple ways to use regexes. One way to test a regex is using the .test() method. The .test() method takes the regex, applies it to a string (which is placed inside the parentheses), and returns true or false if your pattern finds something or not.

let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);
The test method here returns true.
*/

/* Cómo crear una expresión regular: */
let cadena = 'Hoplitas? aguante los hoplitas. Esos si que eran soldados';

let expReg = new RegExp(
  'hoplitas',
  ''
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

let cadena2 = 'Hoplitas? aguante! Esos si que eran soldados';
console.log(expReg.test(cadena2)); // false
console.log(expReg.exec(cadena2)); // null

/* Esto se puede corregir usando el segundo párametro que son las banderas. Le puedo agregar una bandera que tome la
letra en mayúscula: */

let expRegMayus = new RegExp('hoplitas', 'i');
console.log(expRegMayus.test(cadena2)); // true
console.log(expRegMayus.exec(cadena2)); // me devuelve el arreglo. Es decir, ambas reconocen hoplita a pesar de que está
//con mayuscula en la cadena de texto.

/* También te lo reconoce si está seguido de otros valores: */

let cadena3 = 'es lo mejor los 3hoplitasporquelodigo';
console.log(expRegMayus.test(cadena2)); // true

/* Le puedo agregar más de una bandera. Ejemplo: */
let expRegMayus2 = new RegExp(
  'hoplitas',
  'ig'
); /* Le agregué la g que significa que se va a quedar con la primer
coincidencia en lugar de la última que es el default */
let cadena4 = 'Hoplitas. Me encantan los hoplitas.';
console.log(expRegMayus2.exec(cadena4)); /* [ 'Hoplitas',
index: 0,
input: 'Hoplitas. Me encantan los hoplitas.',
groups: undefined ] Me muestra el primer hoplitas en index 0*/

/* Esto aplicado en la segundo forma de crear una expresión regular:*/

const regExpDistinta = /hoplitas/gi;
console.log(regExpDistinta.test(cadena4)); // true
console.log(regExpDistinta.exec(cadena4)); // no funciona acá el ig no sé porqué

let cadena5 = 'Hoplitas. Me encantan los hoplitas.';

let expReg5 =
  /\d/gi; /* \d representa números, por lo tanto te va a tirar falso ahora */
console.log(expReg5.test(cadena5)); // false
console.log(expReg5.exec(cadena5)); // null

let expReg6 = /[0-9]/gi; /* esto representa números entre 0 a 9 */
let cadena6 = 'Hoplitas. Me encantan los hoplitas.0';
console.log(expReg5.test(cadena6)); // true
console.log(expReg5.exec(cadena6));

/* También están las llaves que indican repetición */

let expReg7 =
  /hoplita{2}/gi; /* Acá le digo que chequee si se repite dos veces la palabra hoplita. La i te acepta el tema de mayuscula.*/
console.log(expReg5.test(cadena6)); // true

/* Con el {} le puedo decir incluso entre cuántas repeticiones. Por ejemplo, entre 3 y 7 repeticiones: */
let expReg8 = /hola{1,2}/gi;
console.log(expReg8.test(cadena6)); // false. Acá me tira false pq no se repitió entre 3 y 7 veces.

let cadena7 = ['hola', 'hola', 'hola', 'hola'];
console.log(expReg8.test(cadena7)); // true

/* Puedo pasarle para que sea partir de 1 te tire true: */

let expReg9 = /hola{2,}/gi;
let cadena8 = 'Hola omo Hola hola hola hola hola estas todo bien';
console.log(expReg9.test(cadena8)); // false no estoy seguro por qué

/* Match Literal Strings
In the last challenge, you searched for the word Hello using the regular expression /Hello/. That regex searched for a literal match of the string Hello. Here's another example searching for a literal match of the string Kevin: */

let testStr = 'Hello, my name is Kevin.';
let testRegex = /Kevin/;
testRegex.test(testStr); // true
// This test call will return true.

// Any other forms of Kevin will not match. For example, the regex /Kevin/ will not match kevin or KEVIN.

let wrongRegex = /kevin/;
wrongRegex.test(testStr); // false
// This test call will return false.

let waldoIsHiding = 'Somewhere Waldo is hiding in this text.';
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);

/* Match a Literal String with Different Possibilities
Using regexes like /coding/, you can look for the pattern coding in another string.

This is powerful to search single strings, but it's limited to only one pattern. You can search for multiple patterns using the alternation or OR operator: |.

This operator matches patterns either before or after it. For example, if you wanted to match the strings yes or no, the regex you want is /yes|no/.

You can also search for more than just two patterns. You can do this by adding more patterns with more OR operators separating them, like /yes|no|maybe/.

Complete the regex petRegex to match the pets dog, cat, bird, or fish. */

let petString = 'James has a pet cat.';
let petRegex = /dog|cat|bird|fish/; // Change this line
let result2 = petRegex.test(petString); // true

/* Ignore Case While Matching
Up until now, you've looked at regexes to do literal matches of strings. But sometimes, you might want to also match case differences.

Case (or sometimes letter case) is the difference between uppercase letters and lowercase letters. Examples of uppercase are A, B, and C. Examples of lowercase are a, b, and c.

You can match both cases using what is called a flag. There are other flags but here you'll focus on the flag that ignores case - the i flag. You can use it by appending it to the regex. An example of using this flag is /ignorecase/i. This regex can match the strings ignorecase, igNoreCase, and IgnoreCase.

Write a regex fccRegex to match freeCodeCamp, no matter its case. Your regex should not match any abbreviations or variations with spaces. */

let myString = 'freeCodeCamp';
let fccRegex = /freecodecamp/i; // Change this line
let result3 = fccRegex.test(myString);
