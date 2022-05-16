// Ahora creo una arrow function:
const funcion_arrow = () => {
  //le agrego el igual y mayor que, simboliza una flecha (arrow)
  console.log("Hola"); //es una nueva manera de expresar
};

// funcion normal
const sumar = function (a, b) {
  return a + b; // en los arrow no tenes q escribir la palabra return
};

const numeros = [1, 2, 3, 4, 5];

numeros.forEach = (el, index) =>
  console.log(`${el} esta en la posicion ${index}`);

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

function return_simple() {
  return 15; // con el return termina la ejecucion de la funcion. No sirve nada de lo q se ponga despues del return. Por eso solo pueden retornar una sola vez
}

// FUNCIONES CON PARAMETROS

function saludar(nombre, edad) {
  console.log(`hola ${nombre}`);
  console.log(`tengo ${edad}`);
}
saludar("fede", 33);
