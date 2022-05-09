let a = 2;
let b = new Number(1);
let c = 7.5;
let d = 7.19999;

console.log(a, b);

console.log(c.toFixed(0)); // el metodo toFixed te redondea (a partir de 0.5 para arriba) el numero indicando cuantos numeros decimales queres q tenga. Si le pones 0 te lo redondea sin decimales

console.log(d.toFixed(1));

console.log(parseInt(c)); //el parseInt te va a devolver la parte entera
console.log(parseFloat(c)); // te devuelve el numero con comas, es decir te devuele un float

let e = "2.6";

console.log(typeof e); // el valor de la variable e es un string. Lo mismo pasaria con el prompt. Si le sumas a algo te va a hacer un proceso de concatenacion, pero nosotros queremos sumarlo y usarlo como numero, no como string. Lo mismo pasa con los arrays.

// CASTING: o cambio de tipo de objeto

console.log(parseInt(e)); // te cambio el string a numero

console.log(d + parseInt(e)); // asi lo puedo sumar de lo contrario te concatena el numero d con el string del e, lo q te daria 7.199992.6. En su lugar, los suma y te tira 9.19999

console.log(parseInt(d + parseInt(e))); //si quiero evitar las comas, le pongo otro parseInt antes del partensis sumandolos. Podria usar tambien el toFixed(0) para sacarle todos los numeros

console.log(c + Number.parseFloat(d)); // el number igual esta demas. No es necesario
