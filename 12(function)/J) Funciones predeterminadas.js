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

console.log(fede.hasOwnProperty("nombre")); // esto te tira true si hay una propiedad en el objeto fede q sea nombre. Aca te tira true

var miboton = document.getElementById("boton1"); // almacenamos dentro de la variable miboton el objeto boton1 dentro del document // a partir de ahora con poner miboton js sabe q nos referimos a boton1

alert(typeof num1); // Esto te dice el tipo de valor de la variable, es decir, te dice si es string, etc. En este caso te va a decir q es string.

string.charAt(i); // el charAlta :charAt() is a method that returns the character from the specified index. Characters in a string are indexed from left to right.The index of the first character is 0, and the index of the last character in a string, called stringName, is stringName.length – 1.

document.write(hoy.toDateString()); //le agrego el toDateString() para acortar la fecha sino te tiraba uno largo

// return this.charAt(0).toUpperCase() + this.slice(1); // charAt() is a string method that is used to retrieve a character at a specific position in a string. El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará. UpperCase le pone mayuscula.
