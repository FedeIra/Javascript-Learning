// COERCION DE DATOS
/*


*/
console.log(6 / "3"); // 2
console.log("2" * "3"); // 6. en ambos se reconocen como numeros, no como strings
console.log(4 + 5 + "px"); // 9px. Primero es una operacion aritmetica de suma de izq a derecha por lo que suma 4 y 5 = 9, luego se concatena con el string por lo que te queda un string
console.log("$" + 4 + 5); // $45. La primer operacion te da $4 por lo que se hace un string por lo que el proximo numero se suma como string.
console.log("4" - 2); // 2. Te los reconoce como numeros
console.log("4px" - 2); // NaN (not a number). Yo no puedo restarle aritmeticamente algo a un string
console.log(7 / 0); // infinity pq es infinito
console.log({}[0]); // [0]. Esto si yo lo hago en node te da undefined.
console.log(parseInt("09")); // 9
console.log(5 && 2); // 2. Aca lo que hacemos es como una especie de ternario. Si el valor de mi izq es verdadero voy a mostrar el valor de la derecha. En otras palabras, al ser un numero positivo es por lo tanto true, y por eso te imprime el siguente
console.log(2 && 5); // 5. Lo mismo q en el anterior.
console.log(5 || 0); // 5. Va 5 pq el valor 0 es uno falso.
console.log(0 || 5); // 5. Lo mismo que el anterior. Igual que arriba, te dice "tenes algo en el primero? No? entonces que sea el otro". Es como una especie de default. Ejemplo:

function defaultEjemplo(a, b) {
  return (
    (a || "si no tenes una a definidio entonces me devolves esta string") +
    (b || "si no tenes una b definidio entonces me devolves esta string")
  );
}

console.log(defaultEjemplo("En el primero si te puse un valor.")); // En el primero si te puse un valor.si no tenes una b definidio entonces me devolves esta string. Sirve tambien si le pasas un valor false o undefined

console.log([3] + [3] - [10]); // 23. el primero lo concatena como un 33. Sin embargo, el segundo no es posible concatenarlo, pero si es posible realizar una resta aritmetica por lo que hace eso.

console.log(3 > 2 > 1); // false. Esto pq primero realiza la primera operacion 3>2 y esto es igual a true. Sin embargo, al realizar la segunda operacion, true > 1, esto es falso ya que true es igual a 1:

console.log(true == 1); // true

console.log([] == ![]); // true. No tiene sentido, pero bue... la explicacion podria ser que son dos array, y q esten vacios no significa q sean lo mismo.
