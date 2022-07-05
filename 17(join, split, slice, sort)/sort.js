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
