// WHILE:

var meses = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

var contador = 0;

while (contador < meses.length) {
  console.log(meses[contador]);
  contador++; // con el ++ se va aumentando de a uno el contador
}

// While dentro de funcion:
function matriz(n, m) {
  var j = 0;
  var i = 0;
  while (i < n) {
    while (j < m) {
      console.log(i, j);
      j = j + 1;
    }
    j = 0;
    i = i + 1;
  }
}

matriz(2, 3);

// Otro Ejemplo de While con prompt, ||, ! y isNan:
let nombre = prompt("Introduce tu nombre por favor", "nombre"),
  edad = prompt("Introduce tu edad por favor", "edad"),
  poblacion = prompt("Introduce poblacion", "poblacion");

while (!isNaN(nombre)) {
  nombre = prompt("Introduce tu nombre de vuelta");
}

while (edad > 90 || edad <= 0 || isNaN(edad)) {
  edad = prompt("Edad imposible. Introduce tu edad nuevamente");
}

while (!isNaN(poblacion)) {
  poblacion = prompt("Introduce la población correcta");
}

// DO WHILE: hace el primer codigo y despues lo sigue haciendo si se cumple la condicion
do {
  nombre = prompt("Introduce tu nombre por favor");
} while (!isNaN(nombre));

do {
  edad = prompt("Introduce tu edad por favor");
} while (edad > 90 || edad <= 0 || isNaN(edad));

do {
  poblacion = prompt("Introduce tu poblacion por favor");
} while (!isNaN(poblacion));

//Otro ejemplo de Do while:

var minum, intentos;

minum = 0;
intentos = 0;

var mensaje = document.getElementById("c_mensaje");

var mensaje2 = document.getElementById("c_intentos");

do {
  minum = prompt("Introduce un numero entre 0 y 100");

  if (numero_aleatorio > minum) {
    mensaje.value = "Mas alto"; // el value hace referencia al valor q hay adentro
    mensaje.style.fontSize = "18px";
  }

  if (numero_aleatorio < minum) {
    mensaje.value = "Mas bajo";
    mensaje.style.fontSize = "18px";
  }
  intentos++;

  mensaje2.value = intentos;
  mensaje2.style.fontSize = "18px";
  mensaje2.style.color = "red";
  mensaje2.style.textAlign = "center";
} while (numero_aleatorio != minum);

mensaje.value = "Correcto!";
mensaje.style.color = "red";
