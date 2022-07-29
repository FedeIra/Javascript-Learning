/*
RECURSIÓN:

Con las funciones podemos hacer de todo. Incluso, con los closures podemos hasta devolver una función.

Recursión: Cuando una función adentro de su bloque de código se invoca a sí misma. Es muy útil para arboles binarios. Y a veces es la única forma de solucionar problemas.

*/

function factorial(x) {
  if (x > -1 && x < 2) return 1;
  else if (x < 0) return 0;
  return x * factorial(x - 1);
}

/* Va a llegar un momento en que  factorial(x - 1) = 1 ya que cumple el if que retorna uno. Entonces ahí se va abriendo cada contexto con su resultado hasta que llega al último al poder realizar la última operación: return x * factorial(x - 1) */

/* El factorial de un número se escribía: !5 = 5*4*3*2 
/ !N = N* N-1 * N-1 ... 1 Esto se puede hacer con un for y un while.
  
  funcion(num) ==> x * x-1 ... Se puede hacer una función iteratiba, pero también se puede resolver con una función recursiva. Es un contexto adentro de otro.

  Cuando hacemos recursividad hay que ponerle un corte pq sino se hace infinito.
*/

// OTRO EJEMPLO

function algo(num) {
  console.log("entre a la funcion");
  if (num == 1) {
    return "llegue"; // caso de corte
  } else {
    return algo(num - 1);
  }
}

console.log(algo(12)); // te tira 11 veces entre a la función, y finalmente te retorna "llegue"
/* entre a la funcion
entre a la funcion
entre a la funcion
entre a la funcion
entre a la funcion
entre a la funcion
entre a la funcion
entre a la funcion
entre a la funcion
entre a la funcion
entre a la funcion
entre a la funcion
llegue */

function algo(num) {
  console.log("entre a la funcion");
  var x = 0; /* Cada vez que abro un contexto de ejecución se abre un contexto con la variable x = 0, pero no se van sumando pq son contextos diferentes. No aplica el closure acá. */
  if (num == 1) {
    return "llegue";
  } else {
    return algo(num - 1);
  }
}

console.log(algo(12));

// Otro ejemplo:
// Implementar la función countProps: a partir de un objeto en el cual cada propiedad puede contener
// cualquier tipo de dato, determinar la cantidad de propiedades de objetos en cualquier nivel, ya sea el inicial
// u objetos anidados
// Ejemplo:
var obj = {
  a: {
    a1: 10,
    a2: "Franco",
    a3: { f: "r", a: "n", c: { o: true } },
  },
  b: 2,
  c: [1, { a: 1 }, "Franco"],
};

// countProps(obj)--> Deberia devolver 10 ya que el objeto inicial tiene 3 propiedades, pero a su vez
// dentro de a tenemos 3 propiedades mas, luego a3 tiene otras 3 y por ultimo c tiene una extra.
// Propiedades: a, a1, a2, a3, f, a, c, o, b, c --> 10 en total

var countProps = function (obj) {
  // Tu código aca:
  // el tipo de dato de array en realidad es un objeto entonces para diferenciarlo de los objetos literales usamos el método Array.isArray()

  // Paso 1: declarar una variable contadora. Con el método Object.keys(), contar las propiedades del objeto padre
  let total = Object.keys(obj).length; // te pasa las propiedades del objeto padre.

  // Paso 2: recorrer el objeto evaluando el tipo de dato almacenado en cada propiedad:
  for (const prop in obj) {
    if (typeof obj[prop] === "object" && !Array.isArray(obj[prop])) {
      total = total + countProps(obj[prop]);
    }
  }
  return total;
};

countProps(obj);
