//Write a javascript program to replace every character in a given string with the character following it in the alphabet

//String.fromCharCode
//charCodeAt

const moveCharsForward = (str) =>
  str
    .split("")
    .map((char) => String.fromCharCode(char.charCodeAt(0) + 1))
    .join("");

console.log(moveCharsForward("Hola")); // Ipmb

const SumadorDeUno = (str2) => str2.map((char2) => char2 + 1).join("");

console.log(SumadorDeUno([1, 2, 3, 4])); // 2345
