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

// CLOSURES

function saludar(saludo) {
  return function (nombre) {
    console.log(saludo + " " + nombre);
  };
}
var saludarHola = saludar("Hola"); // Esto devuelve una función
//console.log(saludarHola);
saludarHola("Toni"); // 'Hola Toni'

// Otro ejemplo:
function aniosYAltura(anios) {
  return function (altura) {
    console.log(`Tengo ${anios} anios y mi altura es ${altura}`);
  };
}

let federico = aniosYAltura(33);

federico(1.9);

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
arr[0](); // 3 sale un 3, qué esperaban ustedes??
arr[1](); // 3

/* CLOSURES:

Necesitamos 3 ingredientes:

1) Función escrita adentro de otra función (función anidada): */

function crearContador0() {
  return function incrementar0() {};
}

/*2) Variable en el scope de la función más grande y que la función de adentro la utilice de alguna manera: */

function crearContador1() {
  let contador1 = 0;
  return function incrementar1() {
    contador1 = contador1 + 1;
    return contador1;
  };
}

/*3) Invocar a la función interna desde otro scope, pero no desde el scope desde donde está escrita, sino desde otro scope. Como a una variable le podemos asignar un número o string, también le podemos asignar una función. Entonces podemos hacer que cuando llamemos a nuestra función más grande (crearContador) y engloba la de adentro esta nos va a devolver la función interna que podemos guardar en una variable para llamar más adelante. Ahora la función interna se ha convertida en un closure ya que al contener una referencia a una variable declarada en el scope de una función superior, es como el scope contuviera una variable y se generara un vínculo entre ellas. Desde el scope global no podemos acceder a la función interna incrementar(), sin embargo cuando invoquemos la función más grande, esta va a estar vinculada a la función local  y va a poder accederla normalmente: */

function crearContador2() {
  let contador2 = 0;
  return function incrementar2() {
    contador2 = contador2 + 1;
    return contador2;
  };
}

const contador3 = crearContador2();
contador3();
contador3();
contador3();

const contador4 = crearContador2();
contador4();

/* En resumen, las closure son funciones anidadas que recuerdan el conjunto de variables a las que podían acceder, por más que se las invoque desde otro lugar, desde otro scope. */

/* USOS:
Interactuar con este objeto pero protegiendo las variables internas.

Podríamos agregar la funcionalidad para decrementar el contador y retornar contador.
*/

function crearContador() {
  let contador = 0;

  return {
    incrementar: function () {
      contador = contador + 1;
      return contador;
    },
    decrementar: function () {
      contador = contador - 1;
      return contador;
    },
    obtenerValor: function () {
      return contador;
    },
  };
}

const contador1 = crearContador();

contador1.incrementar(); // 1
contador1.incrementar(); // 2
contador1.decrementar(); // 1
contador1.obtenerValor(); // 1

const contador2 =
  crearContador(); /* El contador2 pertenece a un nuevo scope distinto al contador 1. */
contador2.obtenerValor(); // 0

/* Decimos que se protege el valor interno de la función porque no se lo puede cambiar desde afuera (sin acceder a la función interna): */

contador1.contador = 3;
contador1.obtenerValor(); // 1 /* El valor de contador interno sigue siendo uno a pesar de que lo intentamos cambiar desde afuera. */

/* También sirven como fabrica de funciones. Ej: fabricar un contador que empiece en 10:

Para esto usamos un párametro y las clausuras pueden acceder al contador como antes*/

function crearContador(contador = 0) {
  /* le pongo que por default arranque en 0 */
  return {
    incrementar: function () {
      contador = contador + 1;
      return contador;
    },
    decrementar: function () {
      contador = contador - 1;
      return contador;
    },
    obtenerValor: function () {
      return contador;
    },
  };
}

const contador1 = crearContador(10);

contador1.incrementar(); // 11

/*%c esto hace que te tome los párametros del background y color*/

function crearImpresoraDeMensajes(tipo, estilos) {
  return function mensaje(str) {
    console.log(`%c ${tipo}: ${str}`, estilos);
  };
}

const error = crearImpresoraDeMensajes(
  `Error`,
  `background: red; color: white;`
);

const warning = crearImpresoraDeMensajes(
  "Warn",
  "background: orange; color: white;"
);

const exito = crearImpresoraDeMensajes(
  "Éxito",
  "background: green; color: white;"
);

console.log(
  exito("Hola")
); /* El párametro de la función mensaje (str) lo paso al invocar la función */ // Éxito: Hola

// Puedo usar esta función para otras cosas:

const holaFede = crearImpresoraDeMensajes(
  "Fede es el mejor, por qué?",
  "background: red; color: white, style: bold"
);

console.log(holaFede("simplemente porque lo és")); // Fede es el mejor, por qué?: simplemente porque lo és
undefined;

/*%c Si quiero que haya una constante dentro de las funciones internas en lugar de declararlo en la función padre y crear cada entorno de las funciones interas esta constanta (lo que ocupa espacio, especialmente si es un objeto), la puedo crear en el entorno global del que se va a agarrar esta función.*/

const constanteGlobal =
  "background: black; color: green;"; /*Aca se guarda x1 en el entorno global. Si lo declarara dentro de la función, se guardaría una vez por cada función interna, es decir x3. Ocuparía el triple de espacio. Le guardo un formato de background y color por defecto. En caso de que se complete luego, el nuevo sobreescribe este*/

function crearImpresoraDeMensajes(tipo, estilos) {
  return function mensaje(str) {
    console.log(`%c ${tipo} : ${str}`, constanteGlobal + estilos);
  };
}

const error3 = crearImpresoraDeMensajes(
  `Error`,
  `background: red; color: white;`
);

const error2 = crearImpresoraDeMensajes(`Error`);

const warning3 = crearImpresoraDeMensajes(
  "Warn",
  "background: orange; color: white;"
);

const exito3 = crearImpresoraDeMensajes(
  "Éxito",
  "background: green; color: white;"
);

console.log(error2("Fede")); // Error : Fede (pero con otro color)

/*%c Si quiero que haya una constante dentro de las funciones internas en lugar de declararlo en la función padre y crear cada entorno de las funciones interas esta constanta (lo que ocupa espacio, especialmente si es un objeto), la puedo crear en el entorno global del que se va a agarrar esta función.*/

const constanteGlobal6 =
  "background: black; color: green;"; /*Aca se guarda x1 en el entorno global. Si lo declarara dentro de la función, se guardaría una vez por cada función interna, es decir x3. Ocuparía el triple de espacio. Le guardo un formato de background y color por defecto. En caso de que se complete luego, el nuevo sobreescribe este*/

function crearImpresoraDeMensajes(tipo, estilos) {
  return function mensaje(str) {
    console.log(`%c ${tipo} : ${str}`, constanteGlobal + estilos);
  };
}

const error4 = crearImpresoraDeMensajes(
  `Error`,
  `background: red; color: white;`
);

const error5 = crearImpresoraDeMensajes(`Error`);

const warning4 = crearImpresoraDeMensajes(
  "Warn",
  "background: orange; color: white;"
);

const exito4 = crearImpresoraDeMensajes(
  "Éxito",
  "background: green; color: white;"
);

/* console.log(exito("Hola")); */ /* El párametro de la función mensaje (str) lo paso al invocar la función */ // Éxito: Hola

console.log(error5("Fede")); // Error : Fede (pero con otro color)
// Puedo usar esta función para otras cosas:

/* const holaFede = crearImpresoraDeMensajes(
  "Fede es el mejor, por qué?",
  "background: red; color: white, style: bold"
);

console.log(holaFede("simplemente porque lo és")); // Fede es el mejor, por qué?: simplemente porque lo és
undefined */
