//alert("Build your class");

let nombre = "federico";

let apellido = "Irarrazaval";

//concatenar es unir en una cadena a distintas variables> concatenacion

let saludo = "Hola mi nombre es " + nombre + " " + apellido + ".";

//Interpolacion de variables: para q sea mas dinamico: TEMPLATE STRING
//usa el backtick o acento invertido

let saludo2 = `Hola mi nombre correcto es ${nombre} ${apellido}.`; //es mas natural asi

console.log(saludo);
console.log(saludo2);

//TEMPLATE STRINGS: te permiten hacerlo mas dinamico y menos textoso y resptar el orden
// las backtick sirven tambien para el DOM
// Meto un ejemplo en el archivo de ejemplo1.html
let ul2 = `  
      <ul>
        <li> Sorcerers</li>
        <li> Warlocks</li>
        <li>Mages</li>
        <li>Necromancers</li>
      </ul>
    `; //esto te sirve mucho para html
console.log(ul2);

let ul3 = "<ul>";

ul3 += "<li> Sorcerers</li>";
