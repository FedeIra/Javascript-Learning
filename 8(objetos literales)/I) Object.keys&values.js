/* Generate an Array of All Object Keys with Object.keys():
We can also generate an array which contains all the keys stored in an object with the Object.keys() method. This method takes an object as the argument and returns an array of strings representing each property in the object. Again, there will be no specific order to the entries in the array.

Finish writing the getArrayOfUsers function so that it returns an array containing all the properties in the object it receives as an argument. */

let users = {
  Alan: {
    age: 27,
    online: false,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: false,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

function getArrayOfUsers(obj) {
  // Only change code below this line
  return Object.keys(obj);
  // Only change code above this line
}

console.log(getArrayOfUsers(users)); // [ 'Alan', 'Jeff', 'Sarah', 'Ryan' ]

// OTROS EJEMPLOS:

console.log(Object.keys(fede)); //es un metodo del Object q me permite listar todas las llaves de un objeto. Te lista los atributos y metodos

console.log(Object.keys(fede)); // mismo que antes, pero te lista los atributos

// OBJECT KEY VALUES
console.log(Object.values(fede)); // te lista los valores, no los atributos.
