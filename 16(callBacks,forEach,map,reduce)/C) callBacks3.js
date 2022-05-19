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
