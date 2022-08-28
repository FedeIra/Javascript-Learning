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
