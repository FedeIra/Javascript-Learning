/* Sort an Array Alphabetically using the sort Method
The sort method sorts the elements of an array according to the callback function.

For example: */

function ascendingOrder(arr) {
  return arr.sort(function (a, b) {
    return a - b;
  });
}

ascendingOrder([1, 5, 2, 3, 4]);
/* This would return the value [1, 2, 3, 4, 5]. */

function reverseAlpha(arr) {
  return arr.sort(function (a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}

reverseAlpha(["l", "h", "z", "b", "s"]);
/* This would return the value ['z', 's', 'l', 'h', 'b'].

JavaScript's default sorting method is by string Unicode point value, which may return unexpected results. Therefore, it is encouraged to provide a callback function to specify how to sort the array items. When such a callback function, normally called compareFunction, is supplied, the array elements are sorted according to the return value of the compareFunction: 

-If compareFunction(a,b) returns a value LESS THAN 0 for two elements a and b, then A will come before B. 
-If compareFunction(a,b) returns a value GREATER than 0 for two elements a and b, then B will come before A. 
-If compareFunction(a,b) returns a value EQUAL to 0 for two elements a and b, then A and B will remain unchanged. */

/* Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order. The function should return a new array, and not mutate the globalArray variable. */

function alphabeticalOrder(arr) {
  // Only change code below this line
  arr.sort(function (a, b) {
    return a < b ? -1 : a == b ? 0 : 1;
  });
  return arr;
  // Only change code above this line
}

alphabeticalOrder(["a", "d", "c", "a", "z", "g"]); // ["a", "a", "c", "d", "g", "z"]
alphabeticalOrder(["x", "h", "a", "m", "n", "m"]); // ["a", "h", "m", "m", "n", "x"]
alphabeticalOrder(["a", "a", "a", "a", "x", "t"]); // ["a", "a", "a", "a", "t", "x"]

/* Return a Sorted Array Without Changing the Original Array
A side effect of the sort method is that it changes the order of the elements in the original array. In other words, it mutates the array in place. One way to avoid this is to first concatenate an empty array to the one being sorted (remember that slice and concat return a new array), then run the sort method.

Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order. The function should return a new array, and not mutate the globalArray variable. */

const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
  let newArray = arr
    .map((number) => number)
    .sort((a, b) => (a > b ? 1 : a == b ? 0 : -1));

  return newArray;
  // Only change code above this line
}

nonMutatingSort(globalArray);
globalArray;

//SORT:
// El método sort() ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado. La ordenación no es necesariamente estable. El modo de ordenación por defecto responde a la posición del valor del string de acuerdo a su valor Unicode.
console.log(
  people.sort(
    (personA, personB) => new Date(personB.DOB) - new Date(personA.DOB)
  )
);

/*
write a javascript function that returns a passed string with letter in alphabetical order.

example string: "webmaster"
expected output: "abeemrstw"

*/

const convertidor = (string) => string.split("").sort().join("");

const convertidor2 = (string) =>
  string
    .split("")
    .sort((a, b) => (a > b ? 1 : -1))
    .join("");

console.log(convertidor("webmaster")); // "abeemrstw"
console.log(convertidor2("webmaster")); // "abeemrstw"

const convertidor3 = (string) =>
  string
    .split("")
    .sort((a, b) => (a > b ? -1 : 1))
    .join("");

console.log(convertidor3("webmaster")); // wtsrmeeba;

// 4) Get a list of people in the array ordered from youngest to oldest.

const people = [
  {
    firstName: "Sam",
    lastName: "Hughes",
    DOB: "07/07/1978",
    department: "Development",
    salary: "45000",
  },
  {
    firstName: "Terri",
    lastName: "Bishop",
    DOB: "02/04/1989",
    department: "Development",
    salary: "35000",
  },
  {
    firstName: "Jar",
    lastName: "Burke",
    DOB: "11/01/1985",
    department: "Marketing",
    salary: "38000",
  },
  {
    firstName: "Julio",
    lastName: "Miller",
    DOB: "12/07/1991",
    department: "Sales",
    salary: "40000",
  },
  {
    firstName: "Chester",
    lastName: "Flores",
    DOB: "03/15/1988",
    department: "Development",
    salary: "41000",
  },
  {
    firstName: "Madison",
    lastName: "Marshall",
    DOB: "09/22/1980",
    department: "Sales",
    salary: "32000",
  },
  {
    firstName: "Ava",
    lastName: "Pena",
    DOB: "11/02/1986",
    department: "Development",
    salary: "38000",
  },
  {
    firstName: "Gabriella",
    lastName: "Steward",
    DOB: "08/26/1994",
    department: "Marketing",
    salary: "46000",
  },
  {
    firstName: "Charles",
    lastName: "Campbell",
    DOB: "09/04/1977",
    department: "Sales",
    salary: "42000",
  },
  {
    firstName: "Tiffany",
    lastName: "Lambert",
    DOB: "05/11/1990",
    department: "Development",
    salary: "34000",
  },
  {
    firstName: "Antonio",
    lastName: "Gonzalez",
    DOB: "03/24/1985",
    department: "Office Management",
    salary: "49000",
  },
  {
    firstName: "Aaron",
    lastName: "Garrett",
    DOB: "09/04/1985",
    department: "Development",
    salary: "39000",
  },
];

console.log(
  people.sort(
    (personA, personB) => new Date(personB.DOB) - new Date(personA.DOB)
  )
);
