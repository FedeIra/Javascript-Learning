// write a javascript program to find the number divisibles por dos
//
let array = [1, 2, 3, 4, 5, 6];

const arrayEvenNumber = array.filter((elemento) => elemento % 2 == 0);

console.log(arrayEvenNumber); //[2,4,6]

// Otra forma:
function retornaPares(array) {
  return array.filter((elemento) => elemento % 2 == 0);
}
console.log(retornaPares([1, 2, 3, 4, 5, 6, 23, 24, 548, 1234, 785, 12, 5, 1])); //[2, 4, 6, 24, 548, 1234, 12]

// EJERCICIO DE ARRAYS

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

// Exercises

// 1) What is the average income of all the people in the array?

const sumaSalarios = people.reduce(
  (acc, person) => acc + parseInt(person.salary),
  0
); // el 0 es el numero inicial, y al ser un numero pasa a ser number

const cantidadEmpleados = people.reduce((acc) => acc + 1, 0); // el 0 es el numero inicial, y al ser un numero pasa a ser number

const promedioSalarios = sumaSalarios / cantidadEmpleados;

console.log(promedioSalarios);

// 2) Who are the people that are currently older than 30?
const mayores30 = people.filter(
  (person) => new Date().getFullYear() - new Date(person.DOB).getFullYear() > 30
);

console.log(mayores30.length); // te imprime 10 pq son 10 las personas mayores a 30

// 3) Get a list of the people's full name (firstName and lastName).

const listaNombreCompleto = people.map(
  (person) => `${person.firstName} ${person.lastName}`
);

console.log(listaNombreCompleto); //["Sam Hughes","Terri Bishop","Jar Burke","Julio Miller","Chester Flores","Madison Marshall","Ava Pena","Gabriella Steward","Charles Campbell","Tiffany Lambert","Antonio Gonzalez","Aaron Garrett"];

// Otra forma de hacerlo:

const listaNombreCompleto2 = people.map(
  ({ firstName, lastName }) => `${firstName} ${lastName}`
);
console.log(listaNombreCompleto2);

//Le puedo agregar el nombre completo a todas estas personas:

console.log(
  people.map((person) => ({
    ...person,
    fullName: `${person.firstName} ${person.lastName}`,
  }))
);

// 4) Get a list of people in the array ordered from youngest to oldest.

console.log(
  people.sort(
    (personA, personB) => new Date(personB.DOB) - new Date(personA.DOB)
  )
);

// 5) How many people are there in each department?
console.log(
  people.reduce(
    (acc, person) => ({
      ...acc,
      [person.department]: acc[person.department] + 1 || 1,
    }),
    {}
  )
); // { Marketing: 2, Sales: 3, Development: 6, 'Office Management': 1 }
