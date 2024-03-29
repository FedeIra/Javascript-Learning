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

console.log(c.toFixed(0)); // redondea (a partir de 0.5 para arriba) el numero indicando cuantos numeros decimales queres q tenga.

console.log(parseInt(c)); //devuelve parte entera

console.log(parseFloat(c)); // devuelve numero float

console.log(typeof e); // el valor de la variable e es un string.

console.log(9 === 9 || "9" === 9); // compara dato y tipo de dato y la || es igual a OR

console.log(9 === 9 && "9" === 9); // el && es igual AND
