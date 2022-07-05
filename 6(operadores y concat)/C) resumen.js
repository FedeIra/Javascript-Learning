// OPERADORES
/*
Los operadores son los que nos hacen trabajar con distintas operaciones matematicas. Dependiendo la posicion en los que esten, su efecto.
Ejemplo= + e =
*/
var a = 2 + 3; // 5
function suma(a, b) {
  return a + b;
  // usamos el mismo operador como ejemplo
  // Si no deberiamos hacer sumas binarias!
}
var a = suma(2, 3); // 5

var i = 0;
function suma1() {
  return i++;
}

console.log(suma1()); // 0 . Te devuelve el 0 porque el ++ esta despues del i que es lo q retorna. En el proximo va ya a estar guardado el ++, por lo que en la siguiente te tira 1...y  asi sucesivamente
console.log(suma1()); // 1

var ii = 0;
function suma2() {
  return ++ii;
}

console.log(suma2()); // 1 Aca te devuelve de una el 1 porque los ++ estan adelante de ii
console.log(suma2()); // 2

// PRECEDENCIA DE OPERADORES Y

/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table

En el link anterior aparecen los operadores por precedencia del 19 al 1, siendo 1 el menos precedente y 19 el mas. Mientras mas precedencia, mayor prioridad se les da. Un ejemplo es el operador + (precedencia 14) y * (precedencia 15). Primero se hace la multiplicacion y luego la suma. El parentesis (predencia 1) es el mas importante.

Ademas de esto, en principio, el orden siempre es de izquierda a derecha. Digo en principio, pq hay algunas que se hacen de derecha a izquierda (ejemplo, los de precedencia 17 = ! ... , ++ ..., typeof, delete ..., exponencial (**)). Hay otras n/a, es decir no tiene importancia si es de derecha a izquierda o viceversa.
*/

// COERCION DE DATOS

console.log(Number("3")); // devuelve el número 3. Obvio!
console.log(Number(false)); // devuelve el número 0. mini Obvio.
console.log(Number(true)); // devuelve el número 1. menos mini Obvio.
console.log(Number(undefined)); // devuelve `NaN`. No era obvio, pero tiene sentido.
console.log(Number(null)); // devuelve el numero 0. WTFFFF!!! porqueeEE no debería ser `NaN`??

// undefined es la falta de un valor y null es un valor nulo q se podria asociar a un false y por eso 0.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#a_model_for_understanding_equality_comparisons
// en el link de arriba estan todos estos ejemplos.

var name = prompt("Enter your name"); // el prompt es como en input. Pide un dato al usuario

edad -= restando; // es lo mismo q decir edad = edad - restando

document.write(name + " " + surname + "<br/>" + "your age is: " + edad); // aca le agrego el contenido del parrafo. Con la etiqueta <br/>

console.log("Hola como estas todo bien \n todo bien y vos"); // con el \n va linea abajo

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

function test() {
  console.log(a); //undefined
  console.log(foo()); //2
  //  console.log(hola()); //ReferenceError: Cannot access 'hola' before initialization. No se puede invocar a una funcion arrow antes de q sea declarada

  var a = 1;
  function foo() {
    return 2;
  }

  const hola = () => "funcion arrow";

  console.log(hola()); // funcion arrow. si la puedo invocar luego de ser declarada
}

test();
//hola(); // ReferenceError: hola is not defined. No la puedo invocar pq esta en el scope de la funcion test
//foo(); // ReferenceError: foo is not defined. Lo mismo q la funcion hola()
