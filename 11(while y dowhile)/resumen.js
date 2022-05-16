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
]; // 0 va a ser enero, 11 diciembre

var contador = 0;

while (contador < meses.length) {
  document.write(meses[contador] + "</br>"); // el contador va yendo por toda la lista
  contador++; // con el ++ se va aumentando de a uno el contador
}

do {
  // sirvio para ahorrar codigo
  nombre = prompt("Introduce tu nombre por favor");
} while (!isNaN(nombre));

do {
  edad = prompt("Introduce tu edad por favor");
} while (edad > 90 || edad <= 0 || isNaN(edad));

do {
  poblacion = prompt("Introduce tu poblacion por favor");
} while (!isNaN(poblacion));

for (let index = 0; index < 10; index++) {
  // el index inicial es la inicializacion de la variable. La segunda parte es la condicion para que se ejecute. La tercera parte es el decremento o incremento. Todo dentro de los parentesis.
  console.log("for" + index); // lo que esta dentro del {} es lo q ejecuta o las lineas de codigo que va a ejecutar el for
}

for (let i = 0; i < numeros.length; i++) {
  // se va a repetir la cantidad de elementos del arreglo
  console.log(numeros[i]); // el i pasa a ser cada posicion o numero de elemento del array
}

const objeto = {
  nombre: "Federico",
  apellido: "Irarrazaval",
  edad: 35,
};

for (const propiedad in objeto) {
  //te recorre o itera todas las propiedades de un objeto
  console.log(objeto);
  console.log(objeto.apellido); // puedo pedirle q devuelva el valor de una de sus propiedades
  console.log(`Key:${propiedad}, Value: ${objeto[propiedad]}`);
}

for (const elemento of numeros) {
  //aca le pedimos q recorra cada elemento q se encuentra dentro de numeros
  console.log(elemento); //te imprime los numeros del arreglo
}

let cadena = "Hola Mundo"; //tambien es iterable por cada uno de los caracteres de la variable
for (const caracter of cadena) {
  console.log(caracter);
}
