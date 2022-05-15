/*
      CALLBACKS: 
    JS es un lenguaje que trata a las funciones como first class. Esto signifca que las funciones se puede pasar como arguemntos a otras funciones, retornarlas como resultado de una funcion, y gaurdarlas en variables u otras estructuras de datos.
    
    Cuando pasamos una funcion como argumento a otra funcion, esa funcion recibe el nombre de callback.

       
    */

// Ejemplo:

function decirHolaAlUsuario(usuario) {
  return "Hola " + usuario + "!";
}

function decirAdiosAlUsuario(usuario) {
  return "Adios " + usuario + "!";
}

function crearSaludo(usuario, cb) {
  // le paso un callback q por convencion se pone cb. El cb recibe como parametro una funcion
  // console.log(typeof cb); // Le puedo agregar esto para ver q tipo es cb, y la consola te dice function
  return cb(usuario); // retorna el callback invocado con el parametro de usuario
}

console.log(decirHolaAlUsuario("Dan")); // aca invoco la primer funcion
console.log(decirAdiosAlUsuario("Dan")); // aca invoco la segunda funcion
console.log(crearSaludo("Dan", decirHolaAlUsuario)); // "Hola Dan!"  . Aca invoque la tercer funcion pasandole como callback la primera funcion. No la tengo q invocar con () pq sino no me tira la funcion sino lo q retorna la funcion
console.log(crearSaludo("Dan", decirAdiosAlUsuario)); // "Adios Dan!". Aca invoque la tercer funcion pasandole como callback la segunda

// console.log(crearSaludo("Dan", decirAdiosAlUsuario())); // asi no la puedo invocar pq me tira q cb no es una funcion. Pq aca estoy invocando la funcion entonces me retorna = return "Adios " + usuario + "!"; que no es una funcion

// Otro ejemplo:

function saludar(parametro) {
  return "Hola" + parametro;
}

function crearSaludo2(usuario, cb) {
  // pongo cb por "callback", pero se puede poner cualquier cosa
  return cb(usuario);
}
console.log(crearSaludo2("toni ", saludar));
// la funcion de crearSaludo2 es el equivalente  a lo siguiente>

crearSaludo2("Toni", function saludar(parametro) {
  return "Hola " + parametro;
});

// Otro ejemplo:
function sumar(valor) {
  return valor + 2;
}

function sumarYmultiplicar(valor, cb) {
  return cb(valor);
}

console.log(sumarYmultiplicar(5, sumar));

// Callbacks con arreglos y prototipos

/*
    FOREACH: 
    ejecuta la funcion indicada una vez por cada elemento del array
    array.forEach(element => {
    });
  
      Recibe tres parametros el callback de foreach: currentvalue (el elemento actul siendo procesado), index (que indice del arreglo esta en el momento) y array (todo el arreglo)
    */

let alumnos = ["mati", "fede", "leo", "tincho", "emi", "juan"];

//Sin callbacks:
for (let i = 0; i < alumnos.length; i++) {
  console.log(alumnos[i]);
}

// Con callbacks:
// El foreach aca invoca la funcion de console.log(elemento) por cada elemento que hay en alumnos. Esto en lugar de ponerle lo siguiente: let i = 0; i < alumnos.length; i++
alumnos.forEach(function (elemento, indice) {
  //esta funcion es el callback q recibe dos parametros. El indice es opcional
  console.log(elemento);
});
// Este tipo de funcion es declarativa pq aca no le decimos q hacer, simplemente sabemos q hace la funcion foreach

/*
    METODO MAP: crea un nuevo array con los resultados de la llamada a la funcion indicada aplicados a cada uno de sus elementos
    
    
    */

let numbers = [1, 5, 10, 15];

let doubles = numbers.map(function (i) {
  // esto se convierte en un arreglo nuevo.
  return i * 2; //tiene que retornar algo pq ese algo lo usa para reconstruir el arreglo. Mapea todos los elementos del arreglo para generar uno nuevo
});

console.log(doubles); // [2,1,0,20,30]

let alumnos2 = ["mati", "fede", "leo", "tincho", "emi", "juan"];

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1); // charAt() is a string method that is used to retrieve a character at a specific position in a string. El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará. UpperCase le pone mayuscula.
};

//Con callbacks MAP

let nuevoAlumnos = alumnos.map(function (elemento, indice) {
  // con el map evito lo siguiente: let nuevoArray = []; for (let i = 0; i < alumnos.length; i++) {
  return elemento.capitalize(); //aprovecho la funcion capitalize para ponerle mayuscula
});
console.log(nuevoAlumnos);

// Sin callbacks
let nuevoArray = [];
for (let i = 0; i < alumnos.length; i++) {
  nuevoArray.push(alumnos[i].capitalize()); //aprovecho la funcion capitalize para ponerle mayuscula
}
console.log(nuevoArray); // te da el mismo resultado que usando map

/*
    REDUCE: ejecuta una funcion reductora sobre cada elemento de un array devolviendo un unico valor.
    Recibe cuatro argumentos:
    1) Acumulador (acc)> es obligatorio
    2) Valor Actual (cur) > es obligatorio
    3) Indice Actual (idx) > no es obligatorio
    4) Array (src) > no es obligatorio

    El valor devuelto de la funcion reductora se asigna al acumulador cuyo valor se recuerda en cada iteracion de la matriz y en ultima instancia se convierte en el valor final, unico y resultante.

    */

let nums = [1, 2, 3, 4, 5, 6, 7];

//Sin callbacks:
let suma = 0;
for (let i = 0; i < nums.length; i++) {
  suma = suma + nums[i];
}

//Con callbacks:
let sumaReduce = nums.reduce(function (acumulador, elemento) {
  //el sumaReduce va a ser un unico valor
  return acumulador + elemento; // el resultado de acumulador que arranca desde 0 mas cada elemento del array lo va sumando en acumulador. Lo llamamos "acumulador", pero le podemos poner cualquier cosa, es como el index
}, 0); // este parametro es el valor con el q el acumulador va a empezar. Esto dice acumulador = 0. Por defecto es 0, asi q en realidad no es necesario ponerle 0 si queremso empezar desde ese valor. Podemos ponerle string, arreglo, etc vacios = "" / {} / []

// acumulador = 0;
// return 0 + 1 = acumulador
// y asi sucesivamente, pero se acumula en acumulador, no en un array
console.log(sumaReduce); // te devuelve la suma de toda la lista de numeros, es decir, 27

// OTRO EJEMPLO Q NO ES MUY PRACTICO:

let sumaReduce2 = nums.reduce(function (acc, elemento) {
  return elemento;
});
console.log(sumaReduce2); // en este caso, el acumulador va pasando por cada uno hasta pasar por el elemento 7. Entonces te retorna este ultimo elemento, 7

let MultiplicaReduce2 = nums.reduce(function (acc, elemento) {
  return acc * elemento;
}); // por default al tratarse una multiplicacion, el acc arranca en 1, a diferencia q en el resto de los casos que arranca por 0. De lo contrario, cualquier resultado daria 0.
console.log(MultiplicaReduce2); // te va acumulando la multiplicacion de los numeros de la lista sumados, es decir, 5040
