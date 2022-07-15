//FUNCIONES PREDETERMINADAS:

console.log(nombre.toLowerCase()); // se puede convertir lo escrito a minusculas
console.log(nombre.toUpperCase()); // se puede convertir lo escrito a mayusculas

console.log(lorem.includes("panqueques")); // con el includes te busca si esta la palabra en el string y te tira un booleano. Aca te tira true

console.log(lorem.trim()); // el trim te saca los espacios en blanco antes y al final de la string

console.log(frase.split(" ")); // agarra un string y separa cada elemento separado por un espacio y crea un arreglo con cada uno.

console.log(parseInt(c)); //el parseInt te va a devolver la parte entera
console.log(parseFloat(c)); // te devuelve el numero con comas, es decir te devuele un float

console.log(c.toFixed(0)); // el metodo toFixed te redondea (a partir de 0.5 para arriba) el numero indicando cuantos numeros decimales queres q tenga. Si le pones 0 te lo redondea sin decimales

isNan(nombre); // cheque si no es numero y te devuelve true or false

console.log(Object.values(fede)); // esto es casi lo mismo q key pero te lista los valores, no los atributos. Los valores son los valores del atributo. El atributo seria como una variable
console.log(Object.keys(fede)); // mismo que antes, pero te lista los atributos

console.log(fede.hasOwnProperty("nombre")); // esto te tira true si hay una propiedad en el objeto fede q sea nombre. Aca te tira true

var miboton = document.getElementById("boton1"); // almacenamos dentro de la variable miboton el objeto boton1 dentro del document // a partir de ahora con poner miboton js sabe q nos referimos a boton1

alert(typeof num1); // Esto te dice el tipo de valor de la variable, es decir, te dice si es string, etc. En este caso te va a decir q es string.

string.charAt(i); // el charAlta :charAt() is a method that returns the character from the specified index. Characters in a string are indexed from left to right.The index of the first character is 0, and the index of the last character in a string, called stringName, is stringName.length – 1.

document.write(hoy.toDateString()); //le agrego el toDateString() para acortar la fecha sino te tiraba uno largo

// return this.charAt(0).toUpperCase() + this.slice(1); // charAt() is a string method that is used to retrieve a character at a specific position in a string. El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará. UpperCase le pone mayuscula.

// return arreglo.filter((e) => e !== num); // el filter lo elimina

const getFileExtension = (str) => str.slice(str.lastIndexOf("."));

array = Object.entries(objeto); //devuelve tanto la clave como su valor

// if (eliminar.includes(cadena[i])) continue; // el include es para chequear si un arreglo tiene cierto elemento

// REVERSE, SPLIT, JOIN, TOSTRING
function asAmirror(str) {
  var string = [];
  for (let i = 0; i < array.length; i++) {
    string.unshift(str[i]);
  }
  return string.join("").split(" ").reverse().join(" ");
}

function capicua(numero) {
  let reves = numero.toString().split(" ").reverse().join("");
  if ((numero = parseInt(numeroAlReves))) return "Es capicua";
  return "No es capicua";
}
//         878 --- "878"----> ["8", "7", "8"]  ---- "878"

// IndexOf: este metodo retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente.

const arreglo1 = [12, 42, 23, 76, 12, 23, 11, 9, 9, 10];

const arreglo2 = arreglo1.filter(function (numero, posicion, numeros) {
  return posicion === numeros.indexOf(numero); // aca te dice: si la posicion del numero se encuentra en la misma posicion de la primera vez que aparece ese numero en el array, entonces ese numero (en dicha posicion) se deposita en el nuevo array. De lo contrario, si la posicion del numero no coincide con la primera posicion en el que aparece ese numero (es decir, ya habia aparecido ese numero en el array), se filtra o elimina el numero de esa posicion.
});
console.log(arreglo2); //[12, 42, 23, 76, 11,  9, 10]
//

//SORT:
// El método sort() ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado. La ordenación no es necesariamente estable. El modo de ordenación por defecto responde a la posición del valor del string de acuerdo a su valor Unicode.
console.log(
  people.sort(
    (personA, personB) => new Date(personB.DOB) - new Date(personA.DOB)
  )
);

//EVERY()
// Determina si todos los elementos en el array satisfacen una condición.

const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true

//arr.every(callback(element[, index[, array]])[, thisArg])

// 3) Have all the orders been delivered?
orders.every((delivery) => delivery.delivered);
//false

const colores = () => Math.floor(Math.random() * 16).toString(16);

const randomColor = () => "#" + Array.from({ length: 6 }).map(colores).join("");

const sumVowels = (string, letters = ["a", "e", "i", "o", "u"]) =>
  string.split("").filter((letra) => letters.indexOf(letra) > -1).length; // el menos uno significa que no esta la letra en letters pq no hay una posicion menor a menos uno
