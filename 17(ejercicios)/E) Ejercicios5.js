/* 
Given a year, report if it is a leap year. Ocurre cada 4 años, o sea si es divisible por 4.
*/

function leapYear(year) {
  if (year % 4 === 0) {
    return "Its a leap year!";
  } else {
    return "Its not a leap year";
  }
}

console.log(leapYear(2005));

// OTRA FORMA
const isLeapYear = (year) => year % 4 === 0;

console.log(isLeapYear(2014));
console.log(isLeapYear(2015));
console.log(isLeapYear(2016));
console.log(isLeapYear(2017));
console.log(isLeapYear(2018));
console.log(isLeapYear(2019));

/* 
write a javascript program to convert comma-separate values (CSV) string to a 2D array. A new line indicates a new row in the array.

Example: 
abc, def, ghi
jkl, mno, pqr
stu, vwx, yza

*/

const creadorArray = (string) =>
  string.split("\n").map((row) => row.split(","));

let palabras = "abc, def, ghi \n jkl, mno, pqr \n stu, vwx, yza";

console.log(creadorArray(palabras));

/*
write a javascript program to generate a random hexadecimal color code.

#ff0033

*/

const colores = () => Math.floor(Math.random() * 16).toString(16);

const randomColor = () => "#" + Array.from({ length: 6 }).map(colores).join("");

console.log(randomColor());

/*
write a javascript function that returns true if the provided predicate function returns true for all elements in a collection, false otherwise. 

[1,2,3,4,5], (x) => x > 3
*/

let numeros = [1, 2, 3, 4, -1];

const mayorOmenor = (numero) => numero >= 0;

const mayorOmenor2 = (x) => x >= 0;

console.log(numeros.every(mayorOmenor));
console.log(numeros.every(mayorOmenor2));

// Otra forma:

const mayorOmenos3 = (array, funcion) => {
  for (let numero = 0; numero < array.length; numero++) {
    if (!funcion(array[numero])) {
      return false;
    }
  }
  return true;
};

console.log(mayorOmenos3(numeros, (numero) => numero >= 0));
