/*
    METODO MAP: crea un nuevo array con los resultados de la llamada a la funcion indicada aplicados a cada uno de sus elementos
    
    map se usa cuando queremos cambiar cada elemento de una matriz de la misma manera. Map toma una devolucion de llamada como unico argumento. al igual que el metodo forEach, el callback tiene el elemento y el indice de argumentos opcionales. A diferencia de reduce, map devolvera toda la matriz o array.

    //reduce, map y forEach son todos callbacks. Es una funcion que se pasa a otra como argumento y se ejecuta despues de q se haya completado una cosa
    */

// ---------------------------------------------------------------- MAP -----------------------------------------------------------------------
// MAP: cuando tenemos un array y queremos obtener un nuevo array de otra cosa. Lo que hagamos en el map tiene que ser sincrono si o si (igual que con filter y reduce)

const numeros = [3, 10, 20, 50]; // Tenemos el primer array

const dobles = numeros.map(function (numero, posicion, numeros) {});

// recibe como parametros el numero o elemento del array. El segundo es la posicion del array que solemos denominar i. Incluso se le puede agregar un tercer parametros q es el array que se invoca. No hace falta escribir los parametros dos y tres si no los vamos a utilizar.

const dobles2 = numeros.map(function (numero) {});

//Si queremos solo poner la segunda posicion lo podemos hacer del siguiente modo

const dobles3 = numeros.map(function (_, posicion) {});

// Sigamos con el ejemplo:

const dobles4 = numeros.map(function (numero) {
  return numero * 2;
});

console.log(numeros); // [ 3, 10, 20, 50 ]
console.log(dobles4); // [ 6, 20, 40, 100 ]

//Otro ejemplo:
const productos = [
  {
    nombre: "Pera",
    precio: 10,
  },
  {
    nombre: "Manzana",
    precio: 15,
  },
  {
    nombre: "banana",
    precio: 20,
  },
];

const productosDescuentos = productos.map(function (producto) {
  return {
    ...producto, //nombre: producto.nombre,
    precio: producto.precio * 0.25,
  };
});

console.log(productos); //[{ nombre: 'Pera', precio: 10 },nombre: 'Manzana', precio: 15 }, { nombre: 'banana', precio: 20 }]
console.log(productosDescuentos); // [{ nombre: 'Pera', precio: 2.5 }, { nombre: 'Manzana', precio: 3.75 }, { nombre: 'banana', precio: 5 }]

//array con solo los nombres de los productos

const productosNombres = productos.map(function (producto) {
  return producto.nombre;
});

// console.log(productosNombres); // [ 'Pera', 'Manzana', 'banana' ]

// Puedo escribir lo mismo de una forma mas corta con ARROW FUNCTION:
//1) se saca la palabra function y se la reemplaza con una flecha
//2) como solo hay un parametro, la variable "producto" no tiene que estar entre parentesis. Se lo sacamos
//3) como solo contiene una instruccion de retorno, le podemos sacar y dejar el valor de retorno de manera implica. Es decir, solo "producto.nombre"
//4) como estamos repitiendo dos veces la palabra producto, pero nos importa el nombre, l;a palabra "producto" inicial puede llamarse de cualquier otra manera. Le ponemos "nombreProducto"

const productosNombres2 = productos.map((producto) => producto.nombre);

console.log(productosNombres2);

let numbers = [1, 5, 10, 15];

let doubles = numbers.map(function (i) {
  // esto se convierte en un arreglo nuevo.
  return i * 2; //tiene que retornar algo pq ese algo lo usa para reconstruir el arreglo. Mapea todos los elementos del arreglo para generar uno nuevo
});

console.log(doubles); // [2,1,0,20,30]

let alumnos2 = ["mati", "fede", "leo", "tincho", "emi", "juan"];

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1); // charAt() is a string method that is used to retrieve a character at a specific position in a string. El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará. UpperCase le pone mayuscula.
};

//Con callbacks MAP

let nuevoAlumnos = alumnos.map(function (elemento, indice) {
  // con el map evito lo siguiente: let nuevoArray = []; for (let i = 0; i < alumnos.length; i++) {
  return elemento.capitalize(); //aprovecho la funcion capitalize para ponerle mayuscula
});
console.log(nuevoAlumnos);

// Sin callbacks
let nuevoArray = [];
for (let i = 0; i < alumnos.length; i++) {
  nuevoArray.push(alumnos[i].capitalize()); //aprovecho la funcion capitalize para ponerle mayuscula
}
console.log(nuevoArray); // te da el mismo resultado que usando map

// OTROS EJEMPLOS DE MAP:

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  let nuevoArray = array.map(function (i) {
    return cb(i);
  });
  return nuevoArray;
}

function filtrar(funcion) {
  Array.prototype.filtrar = (funcion, productos) =>
    productos.map((productos) => productos.funcion());
}

/* 
write a javascript program to convert comma-separate values (CSV) string to a 2D array. A new line indicates a new row in the array.

Example: 
abc, def, ghi
jkl, mno, pqr
stu, vwx, yza

*/

const creadorArray = (string) =>
  string.split("\n").map((row) => row.split(","));

let palabras = "abc, def, ghi \n jkl, mno, pqr \n stu, vwx, yza";

console.log(creadorArray(palabras));

/*
write a javascript program to generate a random hexadecimal color code.

#ff0033

*/

const colores = () => Math.floor(Math.random() * 16).toString(16);

const randomColor = () => "#" + Array.from({ length: 6 }).map(colores).join("");

console.log(randomColor());

// USO DE MAP CON OBJETO

const orders = [
  {
    orderId: "123",
    customerId: "123",
    deliveryDate: "01-01-2020",
    delivered: true,
    items: [
      { productId: "123", price: 55 },
      { productId: "234", price: 30 },
    ],
  },
  {
    orderId: "234",
    customerId: "234",
    deliveryDate: "01-02-2020",
    delivered: false,
    items: [{ productId: "234", price: 30 }],
  },
  {
    orderId: "345",
    customerId: "234",
    deliveryDate: "05-01-2020",
    delivered: true,
    items: [
      { productId: "567", price: 30 },
      { productId: "678", price: 80 },
    ],
  },
  {
    orderId: "456",
    customerId: "345",
    deliveryDate: "12-01-2020",
    delivered: true,
    items: [
      { productId: "789", price: 12 },
      { productId: "890", price: 90 },
    ],
  },
  {
    orderId: "578",
    customerId: "456",
    deliveryDate: "12-01-2020",
    delivered: true,
    items: [
      { productId: "901", price: 43 },
      { productId: "123", price: 55 },
    ],
  },
];

// 2) Create a new property on each order with the total price of items ordered.

console.log(
  orders.map((delivery) => ({
    ...delivery, // con los 3 puntos suspensivos seguido de coma es para agregarle una propiedad al objeto respetando sus propiedades anteriores
    orderTotal: delivery.items.reduce((acc, item) => acc + item.price, 0), //defino la propiedad a traves de un reduce de los valores de los items
  }))
);

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

//Write a javascript program to replace every character in a given string with the character following it in the alphabet

//String.fromCharCode
//charCodeAt

const moveCharsForward = (str) =>
  str
    .split("")
    .map((char) => String.fromCharCode(char.charCodeAt(0) + 1))
    .join("");

console.log(moveCharsForward("Hola")); // Ipmb

const SumadorDeUno = (str2) => str2.map((char2) => char2 + 1).join("");

console.log(SumadorDeUno([1, 2, 3, 4])); // 2345
