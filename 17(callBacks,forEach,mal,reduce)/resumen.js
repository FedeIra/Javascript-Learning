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

alumnos.forEach(function (elemento, indice) {
  //esta funcion es el callback q recibe dos parametros. El indice es opcional
  console.log(elemento);
});

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

let sumaReduce = nums.reduce(function (acumulador, elemento) {
  //el sumaReduce va a ser un unico valor
  return acumulador + elemento; // el resultado de acumulador que arranca desde 0 mas cada elemento del array lo va sumando en acumulador. Lo llamamos "acumulador", pero le podemos poner cualquier cosa, es como el index
}, 0);

function sumarArray(numeros, cb) {
  let sumatotal = numeros.reduce(function (acc, elemento) {
    return acc + elemento;
  }, 0);
  cb(sumatotal);
}

function map(array, cb) {
  let nuevoArray = array.map(function (i) {
    return cb(i);
  });
  return nuevoArray;
}

function filter(array) {
  let nuevoArray = [];

  array.forEach(function (elemento, indice) {
    if (elemento.charAt(0) === "a") {
      nuevoArray.push(array[indice]);
    }
  });
  return nuevoArray;
}
