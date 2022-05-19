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
