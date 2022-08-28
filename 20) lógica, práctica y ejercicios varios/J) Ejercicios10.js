// Te pasaremos un arreglo de dos números. Devuelve la suma de estos dos números más la suma de todos los números entre ellos. El número más bajo no siempre será el primero.

// Por ejemplo, sumAll([4,1])> debe devolver 10 porque la suma de todos los números entre 1 y 4 (ambos incluidos) es 10.
//-------------------------------------------------------
const sumAll = (arr) => {
  arr.sort((a, b) => (a > b ? 1 : -1));
  let number = arr[1],
    arrayFinal = [];
  while (number > arr[0]) {
    arrayFinal.push(number);
    number--;
  }
  return arrayFinal.concat(arr[0]).reduce((acc, number) => acc + number);
};

// for (let i = 0; i < array.length; i++) {
//   const element = array[i];

// reduce((acc, number) => acc + number)

sumAll([1, 4]); // 10.
sumAll([4, 1]); // 10.
sumAll([5, 10]); // 45.
sumAll([10, 5]); // 45.

// Otra solución:
function sumAll2(arr) {
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);
  let sumBetween = 0;
  for (let i = min; i <= max; i++) {
    sumBetween += i;
  }
  return sumBetween;
}

sumAll2([1, 4]); //10

// Otra solución:
function sumAll3(arr) {
  const [first, last] = [...arr].sort((a, b) => a - b);
  return first !== last ? first + sumAll([first + 1, last]) : first;
}

sumAll3([1, 4]); // 10

//-------------------------------------------------------
function diffArray(arr1, arr2) {
  let newArray = arr1;
  arr1 = arr1.filter((element) => !arr2.includes(element));
  arr2 = arr2.filter((element) => !newArray.includes(element));
  newArray = [...arr1, ...arr2];
  return newArray;
}
// diffArray(['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']); // ["pink wool"]

// diffArray(['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'], ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']); // ["diorite", "pink wool"]

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); // 4
diffArray(
  ['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
  ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
); // ["diorite", "pink wool"]
diffArray([1, 'calf', 3, 'piglet'], [7, 'filly']); // ["calf", "piglet", "filly"]

// Otras soluciones
function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter((x) => !arr1.includes(x) || !arr2.includes(x));
}

// Otra solución:
function diffArray(arr1, arr2) {
  return [...diff(arr1, arr2), ...diff(arr2, arr1)];

  function diff(a, b) {
    return a.filter((item) => b.indexOf(item) === -1);
  }
}

//-------------------------------------------------------

function destroyer(arr) {
  let allArguments = [];
  for (let i = 1; i < arguments.length; i++) {
    allArguments.push(arguments[i]);
  }
  return arguments[0].filter((element) => !allArguments.includes(element));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3); // [1, 1]
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3); // [1, 5, 1]
destroyer(['tree', 'hamburger', 53], 'tree', 53); // ["hamburger"]
destroyer([3, 5, 1, 2, 2], 2, 3, 5); // [1]

// Otra solución:
function destroyer(arr, ...valsToRemove) {
  return arr.filter((elem) => !valsToRemove.includes(elem));
}
