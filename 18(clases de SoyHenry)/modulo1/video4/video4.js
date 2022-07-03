//SCOPE Y HOISTING

/*


*/

// FUNCION AUTOINVOCADA

/*
Es una funcion que la defino, la pongo entreparentesis e inmediatamente la ejecuto.
*/
var instructor = "Fede";

(function () {
  if (true) {
    var instructor = "Franco";
    console.log(instructor); //Franco
  }
})();

console.log(instructor); // Fede

// VAR, LET Y CONST Y SCOPES
var instructor = "Tony";
let pm = "Franco";
const constante = "Hola";

if (true) {
  var instructor = "The Flash";
  let pm = "Reverse Flash";
  console.log(instructor); // The Flash
  console.log(pm); // Reverse Flash
}
console.log(instructor); // The Flash
console.log(pm); //  Franco. En este ultimo sale Franco pq tanto let como const estan asignados al scope y por lo tanto solo vive dentro del scope. No le importa el contexto, sino que el scope. Al tipo var solo le importa el contexto.

pm = "Francisco"; //Francisco
console.log(pm);

//constante = "Chau";
//console.log(constante); aca te tira error: TypeError: Assignment to constant variable. No se puede reasignar un const.

// En el mismo scope no puede haber dos variables let o scope. Let solo hace caso dentro del scope.

// La diferencia entre const y let es que una vez que se crea una const no puede ser ni reasignada ni sobreescrita de ninguna manera. Cada vez q vemos un const, dentro de ese scope no puede existir otro.

// Podemos tener tantos let como vars en diferentes scopes.

// Los let si los haces en un contexto, ejemplo funcion o {}, no funcionan fuera de ese scope, mientras que las var si. Ejemplo;

if (true) {
  let variableLet = "no funciona fuera de este scope";
  var variableVar = "si funciona fuera de este scope";
  const variableConstante = "no funciona fuera de este scope";
}

console.log(variableLet); // ReferenceError: variableLet is not defined. Es decir, la declare dentro del scope del statement if, y no funciona fuera de ese scope.
console.log(variableConstante); // ReferenceError: variableConstante is not defined. Es dcir, al igual que el let no funciona fuera del scope del statement if.
console.log(variableVar); // si funciona fuera de este scope. Es decir, la declare en el scope del statement if, y funciona fuera de ese scope.

//Pero ademas, en el contexto general o incluso dentro de un scope, la variable const no se la puede modificar. Ejemplo:

const variableConst =
  "no se puede modificar esta variable aunque sea en el mismo scope, a diferencia del let y var que si se pueden modificar dentro del mismo scope o contexto";

variableConst = "lo trato de cambiar de valor, pero me va a tirar error";

console.log(variableConst); // TypeError: Assignment to constant variable. Es decir, le asignamos un nuevo valor a una variable constante lo que no es posible y por eso nos tira error.
