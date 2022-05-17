//FUNCIONES:

// Funcion declarada: Se puede invocar la funcion incluso antes de hacerla. Mas sugerible esta:
function funcionDeclarada() {
  console.log("Esto es una funcion declarada");
}

// Funcion expresada (o funcion anonima): no se la puede invocar antes de haber sido creada:
const funcionExpresada = function () {
  console.log(
    "Esto es una funcion expresada. Es decir, una funcion que se le ha asignado como valor a una variable"
  );
};
funcionExpresada();

// Funcion declarada con parametros:
function saludar(nombre, edad) {
  console.log(`hola ${nombre}`);
  console.log(`tengo ${edad}`);
}
saludar("fede", 33);

// Otro ejemplo:
let repetir = "si";

function sumar(num1, num2) {
  alert("la suma es: " + (num1 + num2));
}

function restar(num1, num2) {
  alert("la resta es: " + (num1 - num2));
}

function multiplicar(num1, num2) {
  alert("la multiplicacion es: " + num1 * num2);
}

function dividir(num1, num2) {
  alert("la division es: " + num1 / num2);
}

do {
  let operacion = prompt("Que operacion deseas realizar?");

  let num1 = parseInt(prompt("elegi primer numero")); // el partseint te convierte lo introducido como string a numero.
  let num2 = parseInt(prompt("elegi segundo numero"));

  if (operacion == "sumar") {
    sumar(num1, num2);
  } else if (operacion == "restar") {
    restar(num1, num2);
  } else if (operacion == "multiplicar") {
    multiplicar(num1, num2);
  } else if (operacion == "dividir") {
    dividir(num1, num2);
  } else {
    alert("operacion no contemplada");
  }

  repetir = prompt("Desea repetir?");
} while (repetir == "si");

//Otra forma de invocar funcion:
let valorDeFuncion = unaFuncionQueDevuelveValor();
console.log(valorDeFuncion);

// ARROW FUNCTIONS: para funciones anonimas expresadas (con const, var o let):

// Arrow function sin parametros:
const funcion_arrow = () => {
  console.log("Hola");
  console.log("chau");
};

const saludo = () => console.log("Hola"); //arrow function con una sola linea de codigo evitar el corchete.

// Arrow function con parametros:
let nombre = "Fede";
const saludo2 = (nombre) => console.log(`Hola ${nombre}`);

// Otro ejemplo de arrow function usando forEach:
const numeros = [1, 2, 3, 4, 5];

numeros.forEach = (el, index) =>
  console.log(`${el} esta en la posicion ${index}`);

//REST:
function sumar(a, b, ...c) {
  // aca pongo los 3 puntos suspensivos
  let resultado = a + b;
  c.forEach(function (n) {
    resultado += n;
  });
  return resultado;
}
console.log(sumar(1, 2));
console.log(sumar(1, 2, 3, 4, 5));
console.log(sumar(1, 2, 3, 4, 5, 6, 7, 8)); //gracias a los puntos suspensivos le puedo ir agregando parametros.

// SPREAD:
const arr1 = [1, 2, 3, 4, 5];
arr2 = [6, 7, 8, 9, 10];

console.log(arr1, arr2);

const arr3 = [arr1, arr2];
console.log(arr3); //con este arreglo tengo un arreglo de dos posiciones con 5 numeros cada uno, como si fuera dos arreglos

const arr4 = [...arr1, ...arr2];
console.log(arr4); //ahora con los puntos suspensivos, se convierte en una posicion con un solo arreglo de 10 numeros
