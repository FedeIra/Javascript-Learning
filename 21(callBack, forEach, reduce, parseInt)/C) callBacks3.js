//CALLBACKS

function primero() {
  setTimeout(function () {
    console.log("PRIMERO");
  }, 3000);
}

function segundo() {
  console.log("SEGUNDO");
}

//primero();
//segundo();

// Tenemos las funciones normales y sale primero "PRIMERO" y luego "SEGUNDO"
//El tema es que el programa puede tener demoras. Para esto lo recreamos con un setTimeout.
//Con el setTimeout se imprime primero la segunda funcion a pesar de q llamamos primero a la primera
// Esto lo puedo arreglar con una callback que nos permite usar o recibir como parametros a otra funcion. Es una funcion q se pasa a otra funcion como argumento q luego se invoca dentro de la funcion interna.

function primero2(segundo2) {
  //aca estamos invocando la segunda funcion. el parametro es una funcion que es segundo
  setTimeout(function () {
    console.log("PRIMERO2");
    segundo2();
  }, 3000);
}

function segundo2() {
  console.log("SEGUNDO2");
}

primero2(segundo2); //le pongo como parametro la funcion
//Sale "PRIMERO2" y despues "SEGUNDO2".
//Las callbacks es una forma de asegurarnos de que un determinado codigo no se ejecuta hasta q otro codigo haya termindo de ejecutarse.

//Callback: es una funcion q le puedes pasar a otra como argumento y se ejecuta despues de que haya transcurrido cualquier otra operacion o alguna. No necesariamente es un tema de sincronia.

function modify(array, callback) {
  // hacemos algo...
  array.push("fede");
  // despues de hacer algo...
  callback();
}
// el callback puede o no recibir argumento

const names = ["fede", "agus", "tomi"];

modify(names, function () {
  console.log(
    `he modificado el array! y ahora es de ${array.length} elementos!`
  );
}); // le estoy agregando como parametro esta funcion que ocupa el parametro de callback.

//reduce, map y forEach son todos callbacks. Es una funcion que se pasa a otra como argumento y se ejecuta despues de q se haya completado una cosa

const callback = (name) => console.log(name);

//1) Ejercicio: crear una funcion para iterar un callback n cantidad de veces

function invocarCallback(callback, n) {
  let i = 0;
  while (i < n) {
    callback("fede", 22); //aca le paso parametros si los tiene
    i++;
  }
}

function hola(nombre, edad) {
  console.log(`Hola ${nombre}, tu edad es ${edad}`);
}

//invocarCallback(hola, 10);

// 2) Otro ejercicio:
function miFuncion(fn) {
  fn();
}

miFuncion(() => console.log("Esto es una arrow function"));
