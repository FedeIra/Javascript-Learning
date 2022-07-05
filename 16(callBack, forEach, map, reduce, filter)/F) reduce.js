/*
    REDUCE: ejecuta una funcion reductora sobre cada elemento de un array devolviendo un unico valor.
    Recibe cuatro argumentos:
    1) Acumulador (acc)> es obligatorio
    2) Valor Actual (cur) > es obligatorio
    3) Indice Actual (idx) > no es obligatorio
    4) Array (src) > no es obligatorio

    El valor devuelto de la funcion reductora se asigna al acumulador cuyo valor se recuerda en cada iteracion de la matriz y en ultima instancia se convierte en el valor final, unico y resultante.

    Reduce ejecutra un bucle en nuestra matriz (array) con la intencion de reducir cada elemento que se devuelve. Como es el primer argumento, acepta un callback que toma dos argumentos, primero un "acumulador" (el resultado del metodo de reduccion hasta ahora), y el segundo es el elemento en el que se encuentra actualmente. El callback debe contener siempre una declaracio nde devolucion ("return"). reduce tambien toma un segundo argumento opcional, que seria el acumulador de arranque ("starting accumulator"). si no suministra el acumulador de arranque, la reduccion comenzara en el primer elemento de la matriz. Reduce siempre devolvera el acumulador cuando termine de recorrer los elementos.

    //reduce, map y forEach son todos callbacks. Es una funcion que se pasa a otra como argumento y se ejecuta despues de q se haya completado una cosa
    */

// ------------------------------------------------------- REDUCE ------------------------------------------------------------------------------
// REDUCE: reduce el array original a un unico valor. Nosotros escribimos la funcion reductora.
// Necesita un array y un valor inicial que le tenemos que indicar nosotros. con cada vuelta opera con el valor y tras operar con todos obtenemos un unico valor. Es un acumulador.

//Como lo hariamos normalmente
const numeros4 = [3, 10, 20, 50];
let total = 0;

for (let i = 0; i < numeros4.length; i++) {
  total += numeros4[i];
}
console.log(total); //83

//Con REDUCE:
const total2 = numeros4.reduce(function (acumulador, numero) {
  return acumulador + numero;
}, 0);
console.log(total2); //83

// Reduce con Arrow function:
const total3 = numeros4.reduce((acc, num) => acc + num); //no hace falta poner el 0, porque por default arrance en 0. De lo contrario, lo indoc con ,1)  o la otra posicion desde la q quiero arrancar el contador.

console.log(total3); //83

// Reduce con arrow con callback:
const reduccion = (acumulador, numero) => acumulador + numero; // esta funcion recibe dos parametros.
let total4 = numeros4.reduce(reduccion, 0); // en esta funcion "reduce" con callback invoco la funcion reduccion y le paso los dos atributos conforme los dos parametros que designamos en la funcion reduccion.

console.log(total4); //83

// Otro ejemplo: obtener nuevo array con dobles de cada numero usando reduce

const numeros5 = [71, 41, 18, 88, 3, 65];

const acumularDobles = (acumulador, numero) => {
  acumulador.push(numero * 2);
  return acumulador;
};

const dobles5 = numeros5.reduce(acumularDobles, []);

console.log(dobles5); // [ 142, 82, 36, 176, 6, 130 ]

let nums = [1, 2, 3, 4, 5, 6, 7];

//Sin callbacks:
let suma = 0;
for (let i = 0; i < nums.length; i++) {
  suma = suma + nums[i];
}

//Con callbacks:
let sumaReduce = nums.reduce(function (acumulador, elemento) {
  //el sumaReduce va a ser un unico valor
  return acumulador + elemento; // el resultado de acumulador que arranca desde 0 mas cada elemento del array lo va sumando en acumulador. Lo llamamos "acumulador", pero le podemos poner cualquier cosa, es como el index
}, 0); // este parametro es el valor con el q el acumulador va a empezar. Esto dice acumulador = 0. Por defecto es 0, asi q en realidad no es necesario ponerle 0 si queremso empezar desde ese valor. Podemos ponerle string, arreglo, etc vacios = "" / {} / []

// acumulador = 0;
// return 0 + 1 = acumulador
// y asi sucesivamente, pero se acumula en acumulador, no en un array
console.log(sumaReduce); // te devuelve la suma de toda la lista de numeros, es decir, 27

// OTRO EJEMPLO Q NO ES MUY PRACTICO:

let sumaReduce2 = nums.reduce(function (acc, elemento) {
  return elemento;
});
console.log(sumaReduce2); // en este caso, el acumulador va pasando por cada uno hasta pasar por el elemento 7. Entonces te retorna este ultimo elemento, 7

let MultiplicaReduce2 = nums.reduce(function (acc, elemento) {
  return acc * elemento;
}); // por default al tratarse una multiplicacion, el acc arranca en 1, a diferencia q en el resto de los casos que arranca por 0. De lo contrario, cualquier resultado daria 0.
console.log(MultiplicaReduce2); // te va acumulando la multiplicacion de los numeros de la lista sumados, es decir, 5040

function sumaTodosImpares2(array2) {
  // La funcion llamada 'sumaTodosImpares" recibe como argumento un array de enteros.
  // y debe devolver la suma total entre todos los numeros impares
  //ej:
  //sumaTodosImpares([1,5,2,9,6,4]) devuelve 1+5+9=15
  //tu codigo aca:

  return array2.reduce((acc, ele) => (ele % 2 !== 0 ? acc + ele : acc), 0);
}

console.log(sumaTodosImpares2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  let sumatotal = numeros.reduce(function (acc, elemento) {
    return acc + elemento;
  }, 0);
  cb(sumatotal);
}

// OTRO EJERCICIO CON OBJETOS

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

// Otro ejercicio con objetos

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

function sumaTodosImpares(array) {
  // La funcion llamada 'sumaTodosImpares" recibe como argumento un array de enteros.
  // y debe devolver la suma total entre todos los numeros impares
  //ej:
  //sumaTodosImpares([1,5,2,9,6,4]) devuelve 1+5+9=15
  //tu codigo aca:
  let sumaTotal = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      sumaTotal += array[i];
    }
  }
  return sumaTotal;
}

console.log(sumaTodosImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// return array.reduce((a, c) => (c%2 !== 0 ? a + c : a), 0);

function stringMasLarga(str) {
  //La funcion llamada "stringMasLarga", recibe como argumento una frase (string) "str"
  // y debe devolver la palabra (string) mas larga que haya en esa fase (Es decir el que de mayor cantidad de caracteres)
  //Ej:
  //StringMasLarga("Ayer me fui a pasear a una plaza") debe retornar "pasear"
  //Tip: podes usar el metodo de String "split"
  //Tu codigo aca:
  let array = str.split(" ");
  let arrayLarga = [array[0]];

  for (let i = 1; i < array.length; i++) {
    if (arrayLarga[0].length < array[i].length) {
      arrayLarga[0] = array[i];
    }
  }
  return arrayLarga[0];
}
console.log(
  stringMasLarga(
    "Hola como estamos todo bien. Queria preguntar si por casualdiad tenian chorizos a la cacerola amigo, avisamepleaskiofas o sino sabes que"
  )
);
// return str.split(" ").reduce((a, c) => (c.length > a.length ? c : a), "");
