//SCOPE Y HOISTING

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

// COERCION DE DATOS
/*


*/
console.log(6 / "3"); // 2
console.log("2" * "3"); // 6. en ambos se reconocen como numeros, no como strings
console.log(4 + 5 + "px"); // 9px. Primero es una operacion aritmetica de suma de izq a derecha por lo que suma 4 y 5 = 9, luego se concatena con el string por lo que te queda un string
console.log("$" + 4 + 5); // $45. La primer operacion te da $4 por lo que se hace un string por lo que el proximo numero se suma como string.
console.log("4" - 2); // 2. Te los reconoce como numeros
console.log("4px" - 2); // NaN (not a number). Yo no puedo restarle aritmeticamente algo a un string
console.log(7 / 0); // infinity pq es infinito
console.log({}[0]); // [0]. Esto si yo lo hago en node te da undefined.
console.log(parseInt("09")); // 9
console.log(5 && 2); // 2. Aca lo que hacemos es como una especie de ternario. Si el valor de mi izq es verdadero voy a mostrar el valor de la derecha. En otras palabras, al ser un numero positivo es por lo tanto true, y por eso te imprime el siguente
console.log(2 && 5); // 5. Lo mismo q en el anterior.
console.log(5 || 0); // 5. Va 5 pq el valor 0 es uno falso.
console.log(0 || 5); // 5. Lo mismo que el anterior. Igual que arriba, te dice "tenes algo en el primero? No? entonces que sea el otro". Es como una especie de default. Ejemplo:

function defaultEjemplo(a, b) {
  return (
    (a || "si no tenes una a definidio entonces me devolves esta string") +
    (b || "si no tenes una b definidio entonces me devolves esta string")
  );
}

console.log(defaultEjemplo("En el primero si te puse un valor.")); // En el primero si te puse un valor.si no tenes una b definidio entonces me devolves esta string. Sirve tambien si le pasas un valor false o undefined

console.log([3] + [3] - [10]); // 23. el primero lo concatena como un 33. Sin embargo, el segundo no es posible concatenarlo, pero si es posible realizar una resta aritmetica por lo que hace eso.

console.log(3 > 2 > 1); // false. Esto pq primero realiza la primera operacion 3>2 y esto es igual a true. Sin embargo, al realizar la segunda operacion, true > 1, esto es falso ya que true es igual a 1:

console.log(true == 1); // true

console.log([] == ![]); // true. No tiene sentido, pero bue... la explicacion podria ser que son dos array, y q esten vacios no significa q sean lo mismo.

function test() {
  console.log(a); //undefined
  console.log(foo()); //2
  //  console.log(hola()); //ReferenceError: Cannot access 'hola' before initialization. No se puede invocar a una funcion arrow antes de q sea declarada

  var a = 1;
  function foo() {
    return 2;
  }

  const hola = () => "funcion arrow";

  console.log(hola()); // funcion arrow. si la puedo invocar luego de ser declarada
}

test();
//hola(); // ReferenceError: hola is not defined. No la puedo invocar pq esta en el scope de la funcion test
//foo(); // ReferenceError: foo is not defined. Lo mismo q la funcion hola()

//THIS
var fullname = "Juan Perez";

var obj = {
  fullname: "Natalia Nerea",
  prop: {
    fullname: "Aurelio de Rosa",
    getFullname: function () {
      return this.fullname;
    },
  },
};

console.log(obj.prop.getFullname()); //  Aurelio de Rosa

var test = obj.prop.getFullname; // aca meto la funcion en el contexto global, por lo que luego al llamarla, se lo hace en el contexto global, donde el this no funciona, y por lo tanto el fullname en el contexto global es Juan Perez.

console.log(test()); // Juan Perez porque la extraimos de la funcion y la ejecutamos porr fuera en el contexto global donde fullname es igual a Juan Perez

//THIS con arrow function
var fullname2 = "Juan Perez";
var obj2 = {
  fullname2: "Natalia Nerea",
  prop2: {
    fullname2: "Aurelio de Rosa",
    getFullname2: () => {
      return this.fullname2;
    },
  },
};

console.log(obj2.prop2.getFullname2()); //  Juan Perez
