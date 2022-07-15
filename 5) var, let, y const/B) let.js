var hello = "hello world"; // la variable var queda guardada en el ambito global

let hola = "hola mundo"; // la variable let queda guardada es de ambito de bloque o reservada
// es mala practica utilizar var pq te van quedando de manera global. Aparte te ocupa mas espacio
/* la palabra let solo te permite que la variable let exista en el bloque que ha sido definido */

// ES MALA PRACTICA USAR VAR POR LO SIGUIENTE:
/*
var musica = "rock";

console.log("variable musica antes del bloque", musica);
// Esto es un bloque

{
  //aca creo un bloque y lo cierro
  var musica = "Pop"; //aca estoy en otro bloque de variablees
  console.log("variable musica antes del bloque", musica);
}

//aca vuelvo al bloque donde estaba la variable musica q era rock
console.log("variable musica antes del bloque", musica); // sin embargo la variable sigue siendo pop. Te toma la ultima variable declarada. Solo no te la cambia si definis musica dentro de una funcion
*/

let musica = "rock";

console.log("variable musica antes del bloque", musica);

{
  let musica = "Pop";
  console.log("variable musica antes del bloque", musica);
}

console.log("variable musica antes del bloque", musica); //en este caso se usa el let musica = rock respetando el bloque
