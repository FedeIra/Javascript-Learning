// CALLBACKS: las funciones se pueden usar como arguemntos de otras funciones, retornarlas como resultado de una funcion y gaurdarlas en variables u otras estructuras de datos. Es parte de la pogramacion funcional.

function decirHolaAlUsuario(usuario) {
  return "Hola " + usuario + "!";
}

function decirAdiosAlUsuario(usuario) {
  return "Adios " + usuario + "!";
}

function crearSaludo(usuario, cb) {
  // callback q por convencion se pone cb. El cb recibe como parametro una funcion.
  return cb(usuario);
}

console.log(decirHolaAlUsuario("Dan")); // invoco la primer funcion
console.log(decirAdiosAlUsuario("Dan")); // invoco la segunda funcion
console.log(crearSaludo("Dan", decirHolaAlUsuario)); // "Hola Dan!". Invoco la tercer funcion pasandole como callback (cb) la primera funcion.
console.log(crearSaludo("Dan", decirAdiosAlUsuario)); // "Adios Dan!". invoco la tercer funcion pasandole como callback (cb) la segunda funcion.

// FOREACH: ejecuta la funcion indicada una vez por cada elemento del array. Es un callback.
let alumnos = ["fede", "maria", "juan"];

alumnos.forEach(function (elemento, indice) {
  //El indice es opcional
  console.log("Hola " + elemento);
}); //Hola fede Hola maria Hola juan

// Otro ejemplo de forEach:

function filter(array) {
  let nuevoArray = [];

  array.forEach(function (elemento, indice) {
    if (elemento.charAt(0) === "a") {
      nuevoArray.push(array[indice]);
    }
  });
  return nuevoArray;
}

console.log(filter(["fede", "alejandro", "Alejandro", "Maria"])); // [alejandro]

// MAP: crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos. Es un callback.
let numbers = [1, 5, 10, 15];

let doubles = numbers.map(function (i) {
  return i * 2;
});

console.log(doubles); // [2,1,0,20,30]

// Otro ejemplo de MAP con otras callbacks:
let alumnos2 = ["mati", "fede", "leo", "tincho", "emi", "juan"];

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1); // charAt() retorna la posicion del array indicada. slice() devuelve parte del array desde el numero indicado. UpperCase le pone mayuscula.
};

let nuevoAlumnos = alumnos2.map(function (elemento, indice) {
  return elemento.capitalize();
});
console.log(nuevoAlumnos);

//REDUCE: ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor. Es un callback.
let nums = [1, 2, 3, 4, 5, 6, 7];

let sumaReduce = nums.reduce(function (acumulador, elemento) {
  return acumulador + elemento;
}, 0);

console.log(sumaReduce); // 28

//Otro ejemplo de reduce con callback:

function sumarArray(numeros, cb) {
  let sumatotal = numeros.reduce(function (acc, elemento) {
    return acc + elemento;
  }, 0);
  cb(sumatotal);
}
