/*TEST:
Sirve para que te tire true por si tiene un valor el array que estás buscando. Sirve también para strings. Está más desarrollado en regular expressions (punto 28)  */

// A future challenge will show how to match those other forms as well.

let array = ["hoola", "kevin", "kuak", "ponele"];

let wrongRegex = /kevin/;

wrongRegex.test(array); // true

let wrongRegex2 = /kevin|kuak|almendra/;

wrongRegex.test(array); // true

let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // i = i don't care about upper or lower case dude!
let result = fccRegex.test(myString); // true
