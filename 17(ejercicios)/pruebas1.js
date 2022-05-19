// Write a javascript program to create a new string from a given string taking the first 3 characters and the last 3 characters of a string.

function nuevoString(string) {
  stringNueva = [];

  string = string.split("");

  for (let i = 0; i < string.length; i++) {
    if (i <= 2 || i >= string.length - 3) {
      stringNueva.push(string[i]);
    }
  }
  return stringNueva.join("");
}

console.log(
  nuevoString("Hola Federico como va todo bien anda a cagar q mala onda")
); // Holnda

// Mejor forma de hacerlo:

const nuevaString = (string) =>
  string.length < 3 ? string : string.slice(0, 3) + string.slice(-3);

console.log(
  nuevaString("Hola Federico como va todo bien anda a cagar q mala onda")
); // Holnda

console.log("hola".slice(-3)); // usos de slice

// write a javascript program to extract the first half of a string of even length

const nuevaString2 = (string) => string.slice(0, string.length / 2);

console.log(nuevaString2("Holas")); //Ho

function nuevaString3(string) {
  return string.slice(0, string.length / 2);
}

console.log(nuevaString3("Fede")); // Fe

// Write a Javascript program to concatenate two strings except their first character
// add two strings togteher removing first character of both strings

const newString3 = (string1, string2) => string1.slice(1) + string2.slice(1); // por default, el slice te lo hace hasta el final del string, y arranca en 0

console.log(newString3("Hola", "Fede"));

// Given two values, write a javascript program to find out which one is nearst to 100

const closest100 = (num1, num2) => (100 - a < 100 - b ? a : b);

console.log(defineValor(60, 150));

110, 60 - 10 < 40;

60, 150;
40 < -50;
