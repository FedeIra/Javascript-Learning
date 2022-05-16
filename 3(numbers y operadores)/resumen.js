console.log(c.toFixed(0)); // el metodo toFixed te redondea (a partir de 0.5 para arriba) el numero indicando cuantos numeros decimales queres q tenga. Si le pones 0 te lo redondea sin decimales

console.log(parseInt(c)); //el parseInt te va a devolver la parte entera
console.log(parseFloat(c)); // te devuelve el numero con comas, es decir te devuele un float

console.log(typeof e); // el valor de la variable e es un string.

console.log(c + Number.parseFloat(d)); // el number igual esta demas. No es necesario

console.log(9 === 9 || "9" === 9); // sabemos que la segunda condicion es falsa, pero la primera es cierta y cocmo se cumplio una de las or se valida todo, y te devuelve true

console.log(9 === 9 && "9" === 9); // aca te va a tirar falso pq no se cumple la segunda condicion
