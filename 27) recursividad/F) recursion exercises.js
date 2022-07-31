/* Recursividad Ejercicios */

/* -------------1------------ 
In this Kata, you will be given two positive integers a and b and your task will be to apply the following operations:

i) If a = 0 or b = 0, return [a,b]. Otherwise, go to step (ii);
ii) If a ≥ 2*b, set a = a - 2*b, and repeat step (i). Otherwise, go to step (iii);
iii) If b ≥ 2*a, set b = b - 2*a, and repeat step (i). Otherwise, return [a,b].

a and b will both be lower than 10E8.

*/

function solve(a, b) {
  if (a === 0 || b === 0) {
    return [a, b];
  } else if (a >= 2 * b) {
    return solve(a - 2 * b, b);
  } else if (b >= 2 * a) {
    return solve(a, b - 2 * a);
  } else {
    return [a, b];
  }
}

console.log(solve(6, 19)); // [6,7]
// solve(6, (19 - 2*6 )) = > solve(6, 7) => [6, 7]

solve(2, 1); // [0, 1]
//solve((2 - 2* 1) , 1) => solve(0, 1) => [0, 1]

solve(22, 5); // [0, 1]
// solve((22 - 2*5), 5)=> solve(12, 5) => solve(12 - 2*5, 5) => solve(2, 5) => solve(2, (5 - 2*2)) => solve(2, 1) => solve((2 - 2*1),1) => solve(0, 1)=> [0, 1]

solve(2, 10); // [2, 2]

// ---------------------------------------------------

/* 
Overview:
In mathematics, a recurrence formula is a formula that shows the relationship between each term and the next in a numerical sequence. For example, a sequence may be defined as follows:

n = t + 3, f = 1
... where n is the next term, t is the current term and f is the first term in the sequence.

Recurrence in mathematics is very similar to recursion in computer programming in a lot of ways:

In both recurrence and recursion, the main problem invokes a simpler problem of the same nature. For example, in recurrence formulae, calculation of the seventh term of the sequence requires the sixth term of the sequence, whose calculation then requires the fifth term of the sequence and so on.
In both recurrence and recursion, there is always something called the base case which kind of acts like a floor - without it, the calculation (or invocation) process would never end and nothing would be solved! For example, the base case in recurrence formulae is the first term, which always has to be explicitly and separately defined for the whole sequence to work. In computer programming, it would be a special case where the function no longer invokes itself and instead just returns a value.
Going back to the formula above, our first term is 1 and each next term is the current term added by 3. Thus we have:

First term: 1
Second term: 1 + 3 = 4
Third term: 4 + 3 = 7
7 + 3 = 10
13
... and so on.

Task
Your task is to create a function, recurrence(base, formula, term) where base is the base case or first term of the sequence, formula is the recurrence formula given as a function/method and term is the number of the term of the series which your function/method has to calculate. For example:

recurrence(1, n => n + 3, 4) === 10
recurrence(3, n => 2 * n, 5) === 48
 */

function recurrence(base, formula, term) {
  return base == term ? 1 : 3 + recurrence(base, formula, term - 1);
  /*  if (term < -2) {
    return base;
  } else {
    return base + recurrence(base, formula, term - 1);
  } */
}

/*


n = 2 * t, f = 3
recurrence(3, n => 2 * n, 2)

n = 3 * t + 8, f = 4
recurrence(4, n => 3* n + 8, 2)


*/
recurrence(1, (n) => n + 3, 1); // 1
recurrence(1, (n) => n + 3, 3); // 1
recurrence(1, (n) => n + 3, 5);
recurrence(1, (n) => n + 3, 9);

/* recurrence(3, (n) => 2 * n, 1);

recurrence(4, (n) => 3 * n + 8, 1); */

/* 1 contexto:

*/

// should work for n = 2 * t, f = 3
// should work for n = 3 * t + 8, f = 4
// should work for random tests

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let factor = 2;
  let factores = [1]; // se agrega el 1 pq lo pide el test queriendo decir que todo número se divide por 1.

  while (num > 1) {
    if (num % factor === 0) {
      factores.push(factor);
      num = num / factor;
    } else factor++;
  }
  return factores;
}

// Otra posibilidad:

let array = [1];
for (var i = 2; i < num + 1; i++) {
  if (num % i === 0) {
    array.push(i);
    num = num / i;
    i = i - 1;
  }
}

return array;

// Implementar la función countArray: a partir de un array en el cual cada posición puede ser un único
// número u otro array anidado de números, determinar la suma de todos los números contenidos en el array.
// El array será recibido por parámetro.
// Ejemplo:
//    const array = [1, [2, [3,4]], [5,6], 7];
//    countArray(array); --> Debería devolver 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)
// Pista: utilizar el método Array.isArray() para determinar si algun elemento de array es un array anidado
// [Para más información del método: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/isArray]

var countArray2 = function (array) {
  let suma = 0;

  array.forEach((elemento) => {
    if (Array.isArray(elemento)) {
      // si es array tal cosa A
      suma += countArray2(elemento);
    } // si no es array tal otra B
    else {
      suma += elemento;
    }
  });
  return suma;
};

console.log("count", countArray2([1, [2, [3, 4]], [5, 6], 7])); // count 28

// Otra solución sin recursividad:

/* var countArray = function (array) {
  // Tu código aca:
  array = array.flat(Infinity);

  let total = 0;

  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
};

countArray([1, [2, [3, 4]], [5, 6], 7]); // 28 */

// Implementar la función countProps: a partir de un objeto en el cual cada propiedad puede contener
// cualquier tipo de dato, determinar la cantidad de propiedades de objetos en cualquier nivel, ya sea el inicial
// u objetos anidados
// Ejemplo:
// var obj = {
//   a: {
//     a1: 10,
//     a2: 'Franco',
//     a3: {f: 'r', a: 'n', c: {o: true}}
//   },
//   b: 2,
//   c: [1, {a: 1}, 'Franco']
// }
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

// EJERCICIO DE LOS SIMPSONS

var isAncestor = function (genealogyTree, ancestor, descendant) {
  // Tu código aca:
  /* for (let mujer in genealogyTree) {
    if (mujer === ancestor) {
      for (let hija of genealogyTree[mujer]) {
        if (hija === descendant) return true;
      }
      for (let hija of genealogyTree[mujer])
        if (isAncestor(genealogyTree, hija, descendant)) return true;
    }
  }
  return false;
}; */
};

var isAncestor = function (genealogyTree, ancestor, descendant) {
  for (prop in genealogyTree) {
    if (genealogyTree[prop].includes(descendant) && prop !== ancestor) {
      isAncestor(genealogyTree, ancestor, prop);
    }

    if (genealogyTree[prop].includes(descendant) && prop === ancestor) {
      return true;
    }
    return false;
  }
};

// ---- Recursión ----
// EJERCICIO 7
// Implementar la función restArray: a partir de un array en el cual cada posición puede ser un único
// número u otro array anidado de números, determinar la suma de todos los números contenidos en el array.
// El array será recibido por parámetro.
// Ejemplo:
//    const array = [3, [7, [5,6]], [9,6], 4];
//    restArray(array); --> Debería devolver 40 y al resultado lo restas por la cantidad de arrays, sin contar al padre.
// Ejemplo:
//      40-3 = 37
// Pista: utilizar el método Array.isArray() para determinar si algun elemento de array es un array anidado
// [Para más información del método: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/isArray]

var restArray = function (array) {
  // Tu código acá
  let arrayCounter = 0,
    sumArray = 0;

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      arrayCounter += 1;
      sumArray += restArray(array[i]);
    } else {
      sumArray += array[i];
    }
  }
  return sumArray - arrayCounter;
};

// ---- Recursión ----
// EJERCICIO 8
// La función countDeep recibe por parámetro un arreglo que contiene numbers, strings, booleanos, undefined y/o arreglos
// (este ultimo contienen, a su vez, más numbers, strings, booleanos, undefined y/o arreglos).
// Deberas contar la cantidad de cada uno y realizar las siguientes operaciones para llegar al resultado final.
// la cantidad de arrays (contando el array padre) menos la cantidad de numbers, al resultado multiplicarlo por la cantidad de strings, al resultado dividirlo por la cantidad de booleanos y a ese resultado elevarlo a la cantidad de undefined.

// Ejemplo:
// countDeep( [ 1, 2, 3, ["hi"], [ undefined, "hola", [ true, "bye" ] ], undefined, [ false ], "9"] ) ----> Debería retornar 2
// number = 3, string = 4, boolean = 2, undefined = 2, array = 5:
// la ecuacion quedaria 5-3 = 2, 2*4 = 8, 8/2 = 4, 4^2 ------> resultado = 16

function countDeep(arr) {
  // Tu código aca:
  function countArray(arr) {
    let arrays = 0;

    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        arrays += countArray(arr[i]);
      }
    }
    return arrays + 1;
  }

  let totalArrays = countArray(arr);

  let numbers = 0,
    strings = 0,
    booleans = 0,
    undefineds = 0;

  arr = arr.flat(Infinity);

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      numbers += 1;
    }
    if (typeof arr[i] === "string") {
      strings += 1;
    }
    if (typeof arr[i] === "boolean") {
      booleans += 1;
    }
    if (arr[i] === undefined) {
      undefineds += 1;
    }
  }

  return (((totalArrays - numbers) * strings) / booleans) ** undefineds;
}
