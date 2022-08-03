/*
!TEMPLATE STRINGS

Antes:
*/

var plural = "ustedes";

var str = "hola como estan " + plural + "\n Me alegro mucho"; // para saltar línea hay que ponerle \n. Aparte para concatenar tengo que separarlo y ponerle +

console.log(str); // hola como estan ustedes
// Me alegro mucho

/* Ahora, con los template strings es mucho más fácil. No tengo que ponerle el + ni tampoco el \n: */

var templateString = `hola como están ${plural}
Me alegro mucho`;

console.log(templateString); // hola como estan ustedesMe alegro mucho
