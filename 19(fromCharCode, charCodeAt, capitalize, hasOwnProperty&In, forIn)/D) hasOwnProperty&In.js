/* Testing Objects for Properties
Sometimes it is useful to check if the property of a given object exists or not. We can use the .hasOwnProperty(propname) method of objects to determine if that object has the given property name. .hasOwnProperty() returns true or false if the property is found or not.

Example */

const myObj = {
  top: "hat",
  bottom: "pants",
};

myObj.hasOwnProperty("top");
myObj.hasOwnProperty("middle");
/* The first hasOwnProperty returns true, while the second returns false.

Modify the function checkObj to test if an object passed to the function (obj) contains a specific property (checkProp). If the property is found, return that property's value. If not, return "Not Found". */

function checkObj(obj, checkProp) {
  // Only change code below this line
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }

  // Only change code above this line
}

// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

/* 
EJERCICIO:
Profile Lookup
We have an array of objects representing different people in our contacts lists.

A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

If both are true, then return the "value" of that property.

If name does not correspond to any contacts then return the string No such contact.

If prop does not correspond to any valid properties of a contact found to match name then return the string No such property. */

/* 
1) Detectar que el primer valor coincida con algunos de los firstnames de los objetos del array. OK
2) Si no coincide entonces devuelve "No such contact" OK
3) Si coincide, detectado el objeto que coincida el firstname, chequear que el segundo valor coincida con alguna de las propiedades del objeto detecado.
4) Si no coincide el segundo valor con una de las propiedades del objeto, entonces devolver "No such property"
5) Si pasa 1) y 2) (es decir coincide el nombre y coincide la propiedad) entonces tiene que devolver el valor de la propiedad del punto 2.
*/

function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (name == contacts[i].firstName) {
      /*  return "pasa primer punto"; */
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}

console.log(lookUpProfile("Kristian", "lastName")); // Vos
console.log(lookUpProfile("Sherlock", "likes")); // ["Intriguing Cases", "Violin"]
console.log(lookUpProfile("Harry", "likes")); // array
console.log(lookUpProfile("Bob", "number")); // No such contact
console.log(lookUpProfile("Bob", "potato")); // No such contact
console.log(lookUpProfile("Akira", "address")); // No such property

/* Check if an Object has a Property:
Now we can add, modify, and remove keys from objects. But what if we just wanted to know if an object has a specific property? JavaScript provides us with two different ways to do this. One uses the hasOwnProperty() method and the other uses the in keyword. If we have an object users with a property of Alan, we could check for its presence in either of the following ways:
 */

users.hasOwnProperty("Alan");
"Alan" in users;

/* Both of these would return true.

Finish writing the function so that it returns true if the object passed to it contains all four names, Alan, Jeff, Sarah and Ryan and returns false otherwise. */

let users = {
  Alan: {
    age: 27,
    online: true,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: true,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

function isEveryoneHere(userObj) {
  // Only change code below this line
  if (
    "Alan" in userObj &&
    "Jeff" in userObj &&
    "Sarah" in userObj &&
    "Ryan" in userObj
  ) {
    return true;
  } else {
    return false;
  }
  // Only change code above this line
}

console.log(isEveryoneHere(users)); // true
