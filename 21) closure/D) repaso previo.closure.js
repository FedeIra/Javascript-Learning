/* 
CLOSURES: Nosotros accedemos desde una función a una variable que está afuera de su contexto. Lo explico:

Son muy útiles para: 

1) Simular datos privados. Ejemplo: en el ejercicio siguiente, el único que puede acceder a la variable saludo es la función. Es muy útil para reservar variables y así solo pueden ser accedidas desde funciones. Es lo más parecido a un dato o variable privada.

2) Son fábricas de funciones: generadoras de funciones similares. Con el ejemplo siguiente te das cuenta que podes generar funciones similares con valores distintos. Es una fábrica de funciones con pequeñas variaciones. Así es como invento mil tipos de saludos con una sola función.
*/

function saludar(saludo) {
  // saludo = "Hola"
  return function (nombre) {
    // nombre = "Toni"
    console.log(saludo + " " + nombre);
  };
}

var saludarHola = saludar("Hola"); // Esto devuelve una función. ACÁ SE GENERA EL CLOSURE. Básicamente reserva el valor de "hola" para que después la función siguiente pueda acceder a este valor pq sabe que lo va a necesitar.

saludarHola("Toni"); // Hola Toni

/* Si lo vas a ejecutar una sola vez no hace falta hacer la variable y directamente haces lo siguiente: */

saludar("Hola")("Fede"); // Hola Fede. Pero si queres ejecutarla varias veces es mejor hacer lo anterior.

/*
Execution stack del closure:

Global context:
Lexical Environment: 1) saludar(), 2) saludarHola (indefinido), this.


Cuando llega a var saludarHola = saludar("Hola") se genera otro contexto con su propio lexical environment:
Saludar Context:
Lexical Environment: 1) saludo (como párametro). Está la función, pero como se retorna no está en el lexical environment.  

Cuando termina de leerlo, y continúa con el resto del código su contexto se ELIMINA.

Llegamos entonces al saludarHola() generandonse su contexto:

SaludarHola Context:
Lexical environment: 1) nombre. Pero qué pasa con saludo? si ya se destruyó. En efecto, su caja es la siguiente:

return function (nombre) { // nombre = "Toni"
    console.log(saludo + " " + nombre);
  };

Dónde está definido saludo?? Esto es lo raro. De dónde saco su valor??? Acá entra en juego el CLOSURE:

Nosotros accedemos desde una función a una variable que está afuera de su contexto. 

No se elimina el valor de saludo generado por la línea saludarHola = saludar("Hola") porque el hoisting se dió cuenta de que lo iba a necesitar en la función saludar en el que aparece la variable saludo. Sabe que alguien en el futuro la va a necesitar.

Lo lindo del closure es que no tengo que repetir distintas formas de invocar a la función saludar. Ejemplo:
*/

function saludar(saludo) {
  return function (nombre) {
    console.log(saludo + " " + nombre);
  };
}

var saludarHola =
  saludar(
    "Hola"
  ); /* LA CLAVE ES ESTO: creo una variable que usa la función con un parámetro ya determinado. */

saludarHola("Toni"); // Hola Toni
saludarHola(
  "uso la misma variable para invocar la función sin la necesidad de pasarle el valor de saludo que ya está declarado en la variable saludarHola. No repito código."
);
saludarHola("reitero lo anterior");
saludarHola("insisto");

/* Pero si quiero puedo cambiar el valor de saludo: */

var saludarOtroValorDistinto =
  saludar(
    "Chau"
  ); /* Ahora te deja guardado en el contexto global esta valor de saludo para el caso de que invoques la función con la variable saludarOtroValorDistinto. Queda guardado al igual que el valor saludo = hola en un espacio en el que no se elimina pq el hoisting sabe que lo va a usar luego. No se vuelve a crear el contexto de la variable, sino solo el valor de saludo en el limbo.*/

saludarHola(
  "Opa. Ahora invoco la misma función, pero con otro valor de saludo"
);
saludarHola("reitero lo anterior");
saludarHola("insisto");

// Otro ejemplo similar, pero con objeto:

function saludar(saludo) {
  return {
    funcionOne: function (nombre) {
      console.log(saludo + " " + nombre);
    },
    funcionTwo: function (nombre) {
      console.log(saludo + " " + nombre + "!!!!");
    },
  };
}

var saludarHola = saludar("Hola");

saludarHola.funcionOne("Fede"); // Hola Fede

var saludarChao = saludar("Chao");
saludarChao.funcionTwo("Fede"); // Chao Fede!!!!

// Otro ejemplo:

var creaFuncion = function () {
  var arreglo = [];

  for (var i = 0; i < 3; i++) {
    // hace un for 3 veces
    arreglo.push(function () {
      console.log(i); //
    });
  }
  // i = 3 (queda reservado en el espacio de memoria gracias al closure. Quedo guardado gracias al for y la función que está afuera del contexto del for donde está i puede acceder a i gracias al closure.)
  return arreglo; //
};

var arr = creaFuncion();

arr[0](); //
arr[1](); //
arr[2](); //

/* En el arr tengo lo siguiente:

arr = [
  function(){console.log(i)}, 
  function(){console.log(i)},
  function(){console.log(i)}
]

arr[0] = function(){console.log(i)}
arr[1] = function(){console.log(i)}
arr[2] = function(){console.log(i)}

arr[0] = console.log(i)
arr[1] = console.log(i)
arr[2] = console.log(i)

Acá ya sabemos que si o si tienen que dar lo mismo.

Ahora, qué valor tiene i en el contexto de la función: console.log(i).

Sabemos que debido al for, el último i terminó siendo igual a 3, por lo que en su contexto, i = 3.

Por lo tanto, console.log(i) = 3.

Al igual que en el ejercicio anterior, se produjo un valo de i que se guardó porque el hoisting sabía que lo iban a necesitar.

TRADUCIDO:
*/

// Paso 0 ==> i = 0
// arreglo = [] ==> arreglo = [function () { console.log(i)}]

// Paso 1 ==> i = 1
// arreglo = [function() {console.log(i)}] ==> arreglo = [function() {console.log(i)}], function() {console.log(i)}

// Paso 2 ==> i = 2
// arreglo = [function() {console.log(i)}, function() {console.log(i)} ==> arreglo = [function() {console.log(i)}], function() {console.log(i)}

// Paso 3 ==> i = 3
// No entra al for.

var creaFuncion = function () {
  var arreglo = [];
  for (var i = 0; i < 3; i++) {
    // IIFE
    arreglo.push(
      (function (j) {
        return function () {
          console.log(j);
        };
      })(
        i
      ) /* Con esto te sacas de encima el closure pq el hoisting entiende que no vas a necesitar recurrir al valor i pq ya lo usaste en el momento. Esto pq en vez de pushear la función, pushea la función ya ejecutada. J va a valer lo que valga i en ese momento. No te sirve guardar el i pq se usa en el momento pq es una función que se autoinvoca. Es decir, se ejecuta de una.*/
    );
  }
  return arreglo;
};

var arr = creaFuncion();

arr[0](); // 0
arr[1](); // 1
arr[2](); // 2

/* Comparación con el ejemplo anterior:

Ejemplo anterior:
arr[0] = function(){console.log(i)}
arr[1] = function(){console.log(i)}
arr[2] = function(){console.log(i)}

Ejemplo de ahora:
arr[0] = function(){console.log(0)} Esto debido a que cuando lo invoco ya le estaba pasando el valor con el i al final (i)
arr[1] = function(){console.log(1)}
arr[2] = function(){console.log(2)}

*/

function hacerSaludo(lenguaje) {
  if (lenguaje === "en") {
    return function () {
      console.log("Hi!");
    };
  }

  if (lenguaje === "es") {
    return function () {
      console.log("Hola!");
    };
  }
}

var saludoIngles = hacerSaludo("en");
var saludoEspaniol = hacerSaludo("es");

saludoIngles(); // Hi
saludoEspaniol(); // Hola!
