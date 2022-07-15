//  THIS en el contexto global inicial

// en el browser esto es verdad:

console.log(this === window);

this.a = 37;

console.log(window.a); //37

//en el contexto de una funcion:

function f1() {
  return this;
}

f1() === window; // global object

// EVENT LOOP

function saludarMasTarde() {
  var saludo = "Hola";
  setTimeout(function () {
    console.log(saludo);
  }, 3000);
}
saludarMasTarde();

function otroSaludo(saludo) {
  setTimeout(() => console.log(saludo), 6000);
}

otroSaludo("Hola Fede");

// CLOSURES

function saludar(saludo) {
  return function (nombre) {
    console.log(saludo + " " + nombre);
  };
}
var saludarHola = saludar("Hola"); // Esto devuelve una función
//console.log(saludarHola);
saludarHola("Toni"); // 'Hola Toni'

// Otro ejemplo:
function aniosYAltura(anios) {
  return function (altura) {
    console.log(`Tengo ${anios} anios y mi altura es ${altura}`);
  };
}

let federico = aniosYAltura(33);

federico(1.9);

var creaFuncion = function () {
  var arreglo = [];
  for (var i = 0; i < 3; i++) {
    arreglo.push(function () {
      console.log(i);
    });
  }
  return arreglo;
};
var arr = creaFuncion();
arr[0](); // 3 sale un 3, qué esperaban ustedes??
arr[1](); // 3
