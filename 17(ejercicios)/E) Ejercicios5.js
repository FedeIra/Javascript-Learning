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
