// CLOSURE

/*
Escribir el codigo una vez y lo reutilizo como para hacer dos cosas. ejemplo, para sumar de a 5 o de a 10:

*/

//let result = 0; Si pongo el result aca en lugar de en la funcion, las dos instancias se van a agarrar de esta variable y depositar su resultado aca, por lo que en lugar de funcionar como dos instancias distintas, estarian depositando valor en una misma variable en el scope del contexto general y por lo tanto se estarian tocando. De ser asi, el resultado seria el siguiente (usando los console.log de abajo):

//sumador5 5
//sumador10 15
//sumador5 20
//sumador10 30

// Es decir, si tengo esta variable en el global, seria compartido por todas las instancias.

function sumador(base) {
  // yo puedo crear una funcion auxiliar q cada vez q se ejecute ir sumando en base al valor que puse para base
  let result = 0;
  //console.log(result);
  //esta primer parte es la funcion padre q crea al closure
  return function () {
    result += base;
    return result;
    // esta parte es la funcion hija o resultante del padre
  };
}

//suma de a 5
const sumador5 = sumador(5); // esto puede ser var, let o const. Pusimos const pq no va a cambiar. Cada uno de estos son instancias de la funcion sumador. Son funciones creadas al ejecutar la funcion padre.

//console.log(sumador5()); // 5
//console.log(sumador5()); // 10
//console.log(sumador5()); // 15
//console.log(sumador5()); // 20
//console.log(sumador5()); // 25

// suma de a 10
const sumador10 = sumador(10); // esta variable es una funcio. Si le hago console.log(sumaro10) te tira [Function(anonymus)]

console.log("sumador5", sumador5()); //  5. Al ejecutar esto devuelve otra funcion. Esa funcion tiene acceso a los valores y estados de la funcion padre, pero no se ejecuta la funcion sumador sino la funcion hija.
console.log("sumador10", sumador10()); // 10
console.log("sumador5", sumador5()); // 10
console.log("sumador10", sumador10()); // 20

// la misma funcion yo puedo crear instancias de esa funcion y esto es lo q va sumando el const sumador5 y cont sumador10, cada uno con su propia memoria y no se mezcaln. Reutilizo la misma funcion para hacer dos cosas similares y le doy cierto grado de practicidad a la funcion y evito codigo, dinamismo.

// El closure tiene una funcion creadora en la q tiene un contexto de ejecucion propio y la funcion hija hereda ese contexto de ejecucion. Crea un nuevo contexto de ejecucion q esta enlazado al contexto de ejecucion del padre. La funcion sumador dejo de existir pero le quedo la herencia de las variables (base y result) q se las paso a la funcion hija.

// sumador5 y sumador10 son dos instancias de la misma funcion, pero con contexto diferente y por eso guardan valores distintos aunque comparten los valores heredados de la funcion padre.

// Los valores que guard

console.log(sumador10); //[Function (anonymous)]
console.log(sumador5); // [Function (anonymous)]. Es decir, se trata de una funcion la variable. Por eso la puedo invocar con el ()

// OTRA FORMA de hacer lo anterior, pero mas larga

function sumador2(base2) {
  var result2 = 0;
  function sumadora2() {
    result2 += base2;
    return result2;
  }
  function reset() {
    result2 = 0;
    return result2;
  }
  return [sumadora2, reset];
}

var sumador52 = sumador2(5);

console.log(sumador52[0]()); // 5
console.log(sumador52[0]()); // 10
console.log(sumador52[0]()); // 15
console.log(sumador52[1]()); // aca invoco la segunda funcion del array de la variable sumador52, que es el reset. Por lo tanto, el valor de result2 pasa a ser 0 de vuelta.
console.log(sumador52[0]()); // 5
console.log(sumador52[0]()); // 10
console.log(sumador52[0]()); // 15

// Ejemplo anterior, pero en lugar de array es un objeto:
function sumador3(base3) {
  var result3 = 0;
  function sumadora3() {
    result3 += base3;
    return result3;
  }
  function reset3() {
    result3 = 0;
    return result3;
  }
  return { sumadora3, reset3 }; // aca lo cambio de array a objeto
}

var sumador53 = sumador3(5);

//Para invocarlo es distinto. Se hace del siguiente modo:
console.log(sumador53.sumadora3()); // 5
console.log(sumador53.sumadora3()); // 10
console.log(sumador53.sumadora3()); // 15
console.log(sumador53.reset3()); // aca invoco la segunda funcion del objeto de la variable sumador53, que es el reset. Por lo tanto, el valor de result2 pasa a ser 0 de vuelta.
console.log(sumador53.sumadora3()); // 5
console.log(sumador53.sumadora3()); // 10
console.log(sumador53.sumadora3()); // 15

/*
En resumen, una closure no es necesariamente una funcion que devuelve otra funcion, sino que una funcion q devuelve funciones, sea una funcion, un array con funciones o un objeto con funciones, que mantienen el contexto de ejecucion con algunas variables que son heredadas (result y base).

Puede funcionar con strings, pero los va a concatenar:

Hola
HolaHola
HolaHolaHola

Hola
HolaHola
HolaHolaHola
*/

// OTRO EJEMPLO DE ClOSURE

var creaFuncion = function () {
  var arreglo = [];
  for (var i = 0; i < 3; i++) {
    arreglo.push(function () {
      console.log(i);
    });
  }
  return arreglo;
};
var arr = creaFuncion();
arr[0](); // 3 sale un 3 porque lo q te imprime es la i, y siempre que arranques esta funcion, por el for, el ultimo valor de la i va a ser 3
arr[1](); // 3
arr[2](); // 3

// OTRO EJEMPLO DE ClOSURE

var creaFuncion = function () {
  var arreglo = [];
  for (var i = 0; i < 3; i++) {
    // IIFE
    arreglo.push(
      (function (j) {
        //esto es una funcion autoinvocada (IIFE)
        // j = i conforme la autoinvocacion
        return function () {
          console.log(j); // j es igual al valor j q le pase al invocar la funcion en arr. Es decir al ponerle arr[0] esto hace referencia al primer i del array q es igual a 0 o asi sucesivamente. = j. Al ser primitivo, cada j es una j nueva con su propio valor. Lo que realmente se guarda en el array es function () {
          console.log(j);
        };
      })(i) // aca se autoinvoca y le paso el valor que va a tomar la funcion. Es decir, la i va a ser la j.
    );
  }
  return arreglo;
};
var arr = creaFuncion();
arr[0](); // 0
// En esta primera vuelta, i = 0 pq es el primer push. Por lo tanto, al autoinvocarsee, usa como valor de i = 0, y por lo tanto j = 0. Entonces al hacer console.log(j) esto da 0.
arr[1](); // 1 . Y asi sucesivamente.
arr[2](); // 2

//FUNCION AUTOINVOCADA

(function funcionAutoinvocada(argumento) {
  console.log(argumento);
})("Hola, soy el argumento"); // Hola, soy el argumento

var variableArgumento = "Hola soy la variable con el argumento";

(function funcionAutoinvocada2(argumento2) {
  console.log(argumento2);
})(variableArgumento); // Hola soy la variable con el argumento

(function funcionAutoinvocada3(argumento3) {
  console.log(argumento3);
})(a); // ReferenceError: a is not defined

(function funcionAutoinvocada3() {
  console.log("Soy una funcion autoinvocada simple");
})();

// BIND, CALL Y APPLY

//BIND
/*
El metodo bind hace dos cosas:
1) asociarle un contexto global, es decir el this. Puedo sobreescribir el this
2) a partir del segundo argumento del bind ponerle los argumentos que piden la funcion
3) agrega un nuevo contexto, un nuevo this.
4)puede asignarle por defecto algun argumento de la funcion

El bind retorna una nueva funcion
*/

const mati = {
  name: "Matias",
};

const diego = {
  name: "Diego",
};

function log() {
  console.log("Hola", this.name); // si le saco el this, aparece como undifined
}

const logMati = log.bind(mati); // Puedo hacer un bind con esta funcion y asociarla tanto a diego como a mati (ambos objetos).
const logDiego = log.bind(diego);

// O sea el bind es el metodo de la funcion q me devuelve una nueva funcion y me deja asignarle su this. Sin el bind te tira undefined

logMati(); // Hola Matias
logDiego(); // Hola Diego

log(); // Hola undefined. Ya que no existe la propiedad name en el contexto global, sino que solo en los contextos de los objetos. Al asignarle o bindearle su this al scope del objeto, ahi me lo conecta.

/*
Bind hace otras cosas:
*/

function log2(saludar) {
  console.log(saludar, this.name);
}

const logMati2 = log2.bind(mati, "Hola"); // en el primero le paso el valor del this. En el segundo los parametros de la funcion

logMati2(); // Hola Matias

const logMati3 = log2.bind(mati);
logMati3("chau"); // chau Matias

// Puedo tener mas argumentos: los vas agregando en orden

function log3(saludar, saludar2, saludar3) {
  console.log(saludar, this.name, saludar2, saludar3);
}

const log2Diego = log3.bind(diego, "Hola", "como estas?", "todo bien?"); // primer argumento es el contexto que es el objeto en este caso, luego van los argumentos en orden segun posicion.

log2Diego(); // Hola Diego como estas? todo bien?

const log3Diego = log3.bind(diego, "Holasss", "como estas amigo?"); // puedo no pasarle todos los paremetos y luego pasarle uno cuando la invoque

log3Diego("tudu bene??"); // Holasss Diego como estas amigo? tudu bene??

function sumar(a, b) {
  return a + b;
}

console.log(sumar(1, 3)); //4

const suma5 = sumar.bind(null, 5); //aca no hace uso del this por lo que podes poner lo que quieras como primer parametro

console.log(suma5()); //NaN. esto pq le tire null como primer parametro
console.log(suma5(1)); //6 le puedo poner numero y el primer parametro al ser nulo no se toma y el segundo pasa a ser el primero y este el segundo.

// CALL

/*
La funcion call es muy similar a la BIND.  La diferencia es q no retorna nada sino q directamente ejecuta lo q le pasamos.


*/

const obj = {
  saludo: "holaaa",
};

function sumar(a, b) {
  console.log(this.saludo);
  return a + b;
}

console.log(sumar.call(obj, 5, 5));
// holaaa
// 10

// APPLY

/*
Hace exactamente lo mismo que el call, pero la diferencia es q en vez de pasar los argumentos de forma normal, se los pasamos como un array.

Solo acepta dos argumentos, el this y un array con los argumentos q le pasemos a ese array.

En lugar del bin q te devuelve una funcion nueva q podes reutilizar, el call y el apply la llama de una. El apply, la difeencia es q los argumentos la pasamos dentro de un array y no directamente. Acepta el this y el array nada mas.

En general, se usa el bind. 

*/

const obj2 = {
  saludo: "holaaa",
};

function sumar(a, b) {
  console.log(this.saludo);
  return a + b;
}

console.log(sumar.apply(obj2, [5, 5])); //en lugar de poner los argumentos con coma obj, 5, 5 ... se los pasamos con un array. Te tira el mismo resultado.
// holaaa
// 10
