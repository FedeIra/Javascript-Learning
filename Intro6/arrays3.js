var array = ["toni", "emi", "franco", "jimmy", function() {console.log("hola")}, 5, [1,2,3,4], true];

console.log(array[0]); // toni
console.log(array[1]); // emi
console.log(array[2]); // franco

console.log(array.length); // para saber la cantidad de elementos. el length no es una funcion, sino una propiedad. No es una propiedad para numeros, sino para arrays y strings

console.log(array[4]()); // aca estoy invocando la funcion del array, para eso le agrego los dos parentesis luego de los corchetes

//tambien puedo hacer cosas con el array:

console.log(array[5] *3); // aca agarra el quinto array que tiene el valor de 5 y lo multiplica por 3

console.log(array[1] + " q mal nombre!");

// los strings a su vez son como si hubiera adentro un array
console.log("mati"[2]); // aca le pido que lea el tercer (2) elemento del array q es string, es decir te tira: t

console.log(array [0] [2]); // tambien puedo invocarla dentro de un array al array del string. 

console.log(array[0].length); // aca le pido el length del primer elemento del array, es decir: 4

var arreglo = [1,2,3,4, "toni", [1,2,3,24]]; // el arreglo es una estructura de datos

console.log(arreglo[0]); // los arrays empiezan a contar desde 0. 0 es siempre el primero.

lista_ejemplo = []; //puedo crearla vacia
lista_ejemplo[0] = "primer articulo de la lista"; // con esto lo agrego

lista_ejemplo[10] = "elemento 10";

console.log(lista_ejemplo); // [ 'primer articulo de la lista', <9 empty items>, 'elemento 10' ] Te aclara que del 1 al 9 esta vacio, es decir, undefined

// tambien se pueden agregar con push y pop

lista_ejemplo.push("1"); // lo pone en la utima posicion. en este caso, al final del array de lista_ejemplo
console.log(lista_ejemplo);

lista_ejemplo.pop(); // el pop te saca el ultimo objeto de la lista
var elemento_sacado_de_lista = lista_ejemplo.pop(); //en este caso la variable seria el ultimo objeto de la lista, "elemento 10" ya q sacamos el objeto 1 anteriormente
console.log(lista_ejemplo);

return lista_ejemplo.pop(); // con esto te saca el elemento pero te lo devuelve
