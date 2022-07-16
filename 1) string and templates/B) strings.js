// TIPOS DE DATOS

/*
Tipado estatico y tipado dinamico.
Cada vez que guardamos una variable puede o no tener un tipo de dato especifico.

JS es un lenguaje de tipado dinamico. Creo una variable, le asigno un valor, y luego lo puedo modificar a cualqueir cosa (array, booleano, lo que quiera). 

Fuertemente tipado es estricto el dato q le voy a meter, tipado dinamico lo contrario. Le asigno el valor q quiera. El problema de los lengujaes de tipado dinamico yo le asigno a una variable y cuando la voy a usar no es el tipo de dato esperado. El problema es q te rompe el codigo despues.
*/

// Para consultass de javascript se puede ir a MDN en google: mozzila developer o developer.mozilla.org

/*
Todo objeto tiene atributos. Ejemplo, el length o longitud.

A diferencia, los metodos son acciones. Los metodos siempre terminan con parentesis.

*/

// CADENAS DE TEXTO O STRINGS: se puede usar comilla simple o doble

let nombre = "Federico";
let apellido = "Irarrazaval";

let saludo = new String("Hola mundo"); // con el new creamos un nuevo objeto, en este caso string y luego le pasamos los parametros.

console.log(nombre, apellido, saludo);

// con el .length adquiero su longitud

console.log(nombre.length, apellido.length, saludo.length);

console.log(nombre.toLowerCase()); // se puede convertir lo escrito a minusculas
console.log(nombre.toUpperCase()); // se puede convertir lo escrito a mayusculas

let lorem =
  "        Hola como estas todo bien poq  me gusta comer panqueques de dulce de leche         ";

console.log(lorem.includes("panqueques")); // con el includes te busca si esta la palabra en el string y te tira un booleano. Aca te tira true

console.log(lorem.includes("historia")); // aca te tira false

console.log(lorem.trim()); // el trim te saca los espacios en blanco antes y al final de la string

let frase = "Q bello mundo por dios, la verdad que me quede sin aire";
console.log(frase.split(" ")); // agarra un string y separa cada elemento separado por un espacio y crea un arreglo con cada uno.

console.log(frase.split(",")); // puede hacer un arreglo conforme la coma del string
