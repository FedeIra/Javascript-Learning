let verdadero = true;

let falso = false;

console.log(typeof verdadero, typeof falso); //son los dos valores booleanos

// existen valores q no son true o false, pero q tienden a estos valores
// El numero 0 tiende a falos, un numero negativo tiene a verdadero. Una cadena de texto vacia tiende a verdadero

console.log(Boolean(0)); //false
console.log(Boolean(-7)); // true
console.log(Boolean("")); // false
console.log(Boolean(" ")); // true : cualquier string con algo dentro, incluso con espacio tiende a verdadero

/* podes mirar este tipo de valores que tienden a true or false en google: "mdn truthy" y "mdn falsy":
Estos valores tienden a true:
if (true)
if ({})
if ([])
if (42)
if ("foo")
if (new Date())
if (-42)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)

Estos valores que tienden a false:
if (false)
if (null)
if (undefined)
if (0)
if (-0)
if (0n)
if (NaN)
if ("")
*/
