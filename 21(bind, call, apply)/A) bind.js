//BIND
/*
El metodo bind hace dos cosas:
1) asociarle un contexto global, es decir el this. Puedo sobreescribir el this
2) a partir del segundo argumento del bind ponerle los argumentos que piden la funcion
3) agrega un nuevo contexto, un nuevo this.
4)puede asignarle por defecto algun argumento de la funcion

El bind retorna una nueva funcion
*/

const mati = {
  name: "Matias",
};

const diego = {
  name: "Diego",
};

function log() {
  console.log("Hola", this.name); // si le saco el this, aparece como undifined
}

const logMati = log.bind(mati); // Puedo hacer un bind con esta funcion y asociarla tanto a diego como a mati (ambos objetos).
const logDiego = log.bind(diego);

// O sea el bind es el metodo de la funcion q me devuelve una nueva funcion y me deja asignarle su this. Sin el bind te tira undefined

logMati(); // Hola Matias
logDiego(); // Hola Diego

log(); // Hola undefined. Ya que no existe la propiedad name en el contexto global, sino que solo en los contextos de los objetos. Al asignarle o bindearle su this al scope del objeto, ahi me lo conecta.

/*
Bind hace otras cosas:
*/

function log2(saludar) {
  console.log(saludar, this.name);
}

const logMati2 = log2.bind(mati, "Hola"); // en el primero le paso el valor del this. En el segundo los parametros de la funcion

logMati2(); // Hola Matias

const logMati3 = log2.bind(mati);
logMati3("chau"); // chau Matias

// Puedo tener mas argumentos: los vas agregando en orden

function log3(saludar, saludar2, saludar3) {
  console.log(saludar, this.name, saludar2, saludar3);
}

const log2Diego = log3.bind(diego, "Hola", "como estas?", "todo bien?"); // primer argumento es el contexto que es el objeto en este caso, luego van los argumentos en orden segun posicion.

log2Diego(); // Hola Diego como estas? todo bien?

const log3Diego = log3.bind(diego, "Holasss", "como estas amigo?"); // puedo no pasarle todos los paremetos y luego pasarle uno cuando la invoque

log3Diego("tudu bene??"); // Holasss Diego como estas amigo? tudu bene??

function sumar(a, b) {
  return a + b;
}

console.log(sumar(1, 3)); //4

const suma5 = sumar.bind(null, 5); //aca no hace uso del this por lo que podes poner lo que quieras como primer parametro

console.log(suma5()); //NaN. esto pq le tire null como primer parametro
console.log(suma5(1)); //6 le puedo poner numero y el primer parametro al ser nulo no se toma y el segundo pasa a ser el primero y este el segundo.
