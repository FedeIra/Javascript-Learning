// FORMAS DE CREAR OBJETOS LITERALES (definidos por variables):

// 1)
const c = new Object(); // MUY poco utilizada

// 2)
const fede = {
  // se puede hacer con var y let tambien
  nombre: nombre,
  apellido: "Irarrazaval",
  edad: 33,
  comportamiento: ["correr", "estudiar"],
  soltero: false,
  contacto: {
    email: "fedeirar@gmail.com",
    cell: 1567887879,
  },
  decirMiNombre: function () {
    console.log(
      `Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} anios y me podes llamar a ${this.contacto.cell}`
    ); //this referencia al mismo objeto pq esta en su contexto.
  },
};

console.log(fede.apellido);
console.log(fede["apellido"]); // se puede invocar de esta forma tambien. Cuando hay que intercalar con variables o recorrer objeto es mejor esta pq se pueden hacer mas cosas.
console.log(fede.decirMiNombre()); //con esto invoco la funcion saludos de fede

delete fede[comportamiento];
fede.edad = 43; // cambio el valor
fede.gritando = "poneleeeee"; //agrego una propiedad

console.log(Object.keys(fede)); //permite listar todas las llaves (atributos y metodos) de un objeto.

console.log(Object.values(fede)); // te lista los valores, no los atributos.

console.log(fede.hasOwnProperty("nombre")); // tira true or false si hay una propiedad en el objeto  q sea nombre.

// 3) Esto no es un objeto literal. Es un objeto creado con una clase.
class VehiculosMotorizados {
  ancho = 3;
  largo = 5;
  color = "amarillo";
}

let unCoche = VehiculosMotorizados;
unCoche.acelera();

// PARA HTML:
let miboton = document.getElementById("boton1"); // almacenamos dentro de la variable miboton el objeto boton1 dentro del document

/* Modify an Array Stored in an Object:
Now you've seen all the basic operations for JavaScript objects. You can add, modify, and remove key-value pairs, check if keys exist, and iterate over all the keys in an object. As you continue learning JavaScript you will see even more versatile applications of objects. Additionally, the Data Structures lessons located in the Coding Interview Prep section of the curriculum also cover the ES6 Map and Set objects, both of which are similar to ordinary objects but provide some additional features. Now that you've learned the basics of arrays and objects, you're fully prepared to begin tackling more complex problems using JavaScript!

Take a look at the object we've provided in the code editor. The user object contains three keys. The data key contains five keys, one of which contains an array of friends. From this, you can see how flexible objects are as data structures. We've started writing a function addFriend. Finish writing it so that it takes a user object and adds the name of the friend argument to the array stored in user.data.friends and returns that array. */

let user = {
  name: "Kenneth",
  age: 28,
  data: {
    username: "kennethCodesAllDay",
    joinDate: "March 26, 2016",
    organization: "freeCodeCamp",
    friends: ["Sam", "Kira", "Tomo"],
    location: {
      city: "San Francisco",
      state: "CA",
      country: "USA",
    },
  },
};

function addFriend(userObj, friend) {
  // Only change code below this line
  userObj.data.friends.push(friend);
  return userObj.data.friends;
  // Only change code above this line
}

console.log(addFriend(user, "Pete")); //["Sam", "Kira", "Tomo", "Pete"]

/* 
user tiene 3 keys: name, age y data.
La key data a su vez, tiene 5 keys. Una de ellas, friends, tiene un array.

La funcion tiene que tomar un userObj = user y un string que hay que agregarlo al array de friends.

Luego debe retornar el array friends.
*/
