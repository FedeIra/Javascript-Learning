// APPLY

/*
Hace exactamente lo mismo que el call, pero la diferencia es q en vez de pasar los argumentos de forma normal, se los pasamos como un array.

Solo acepta dos argumentos, el this y un array con los argumentos q le pasemos a ese array.

En lugar del bin q te devuelve una funcion nueva q podes reutilizar, el call y el apply la llama de una. El apply, la difeencia es q los argumentos la pasamos dentro de un array y no directamente. Acepta el this y el array nada mas.

En general, se usa el bind. 

*/

const obj2 = {
  saludo: "holaaa",
};

function sumar(a, b) {
  console.log(this.saludo);
  return a + b;
}

console.log(sumar.apply(obj2, [5, 5])); //en lugar de poner los argumentos con coma obj, 5, 5 ... se los pasamos con un array. Te tira el mismo resultado.
// holaaa
// 10
