// SCOPE
/*
Algo similar al contexto de ejecucion. Pero para las variables no pasa nada, aunque entra en juego las let y const. Ley y const hacen uso del scope y var del contexto.

No es lo mismo scope que contexto, pero para identificar donde hay un scope es cada vez q abris llaves, no contexto. Lo q ponga adentro de un for tiene su propio scope y let y const hacen uso de eso.
*/

var global = "Hola!";
function a() {
  // como no hay una variable llamada global en este contexto,
  // busca en el outer que es el global
  console.log(global);
  global = "Hello!"; // cambia la variable del contexto global
}
function b() {
  // declaramos una variable global en nuestro contexto
  // esta es independiente
  var global = "Chao";
  console.log(global);
}

function c() {
  console.log(global);
  var global = "Chao"; //aca tira undefined pq se define el global antes del log y debido al hoisting q reconoce que hay una definicion de global, no recurre a la definicion global del contexto ("Hola!"). Distinto seria si le saco el var, en cuyo caso en lugar de crea una nueva variable solo estaria modificando la variable del contexto global y entonces al no haber una nueva variable en este scope podria recurrir a la variable global.
}

a(); // 'Hola!'
b(); // 'Chao'
c(); // undefined
console.log(global); // 'Hello'

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

//OTRO EJEMPLO DE VAR Y LET

var snack = "Meow Mix";

function getFood(food) {
  if (food) {
    var snack = "Friskies";
    return snack;
  }
}
console.log(getFood(false)); //undefined
console.log(getFood(0)); //undefined
console.log(getFood(null)); //undefined
console.log(getFood(undefined)); //undefined
console.log(getFood(1)); //Friskies. Pq cualquier positivo es true, incluyendo una string:
console.log(getFood("Hola")); //Friskies.

//Ahora con let
let snack2 = "Meow Mix";

function getFood2(food2) {
  if (food2) {
    let snack2 = "Friskies";
    return snack2;
  }
}
console.log(getFood2(false)); //undefined
console.log(getFood2(0)); //undefined
console.log(getFood2(null)); //undefined
console.log(getFood2(undefined)); //undefined
console.log(getFood2(1)); //Friskies. Pq cualquier positivo es true, incluyendo una string:
console.log(getFood2("Hola")); //Friskies.
console.log(snack2); // "Meow Mix", pero si le saco el let snack2 = "Meow Mix" del contexto global te tira snack2 is not defined
console.log(snack2);
