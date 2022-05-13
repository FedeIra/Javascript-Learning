/*
Representar variables q no tienen valor.

Undefined es una variable que no ha sido inicializada. Existe la variable, pero no tiene un valor

*/

let indefinida; // no le asigno un valor

console.log(indefinida); // te devuelve undefined. Este valor se lo asigna JS automaticamente. No ha sido asignado este valor

let nulo = null; // el valor null lo tengo q asignar yo, no lo asigna js. Aca el programador le asigno el valor de null
console.log(null);

/*
NaN : "not a number"
Cuando queremos hacer operaciones aritmeticas con datos q no son numericos

*/

let noEsunNumero = "hola" * 3.7;
console.log(noEsunNumero); // te devuelve q no es un numero (NaN)
