//EVERY()
// Determina si todos los elementos en el array satisfacen una condición.

const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true

//arr.every(callback(element[, index[, array]])[, thisArg])

// 3) Have all the orders been delivered?
orders.every((delivery) => delivery.delivered);
//false

const colores = () => Math.floor(Math.random() * 16).toString(16);

const randomColor = () => "#" + Array.from({ length: 6 }).map(colores).join("");

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

// Exercises
// 3) Have all the orders been delivered?
orders.every((delivery) => delivery.delivered);
//false

/*
write a javascript function that returns true if the provided predicate function returns true for all elements in a collection, false otherwise. 

[1,2,3,4,5], (x) => x > 3
*/

let numeros = [1, 2, 3, 4, -1];

const mayorOmenor = (numero) => numero >= 0;

const mayorOmenor2 = (x) => x >= 0;

console.log(numeros.every(mayorOmenor));
console.log(numeros.every(mayorOmenor2));
