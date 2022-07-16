/*  Para trabajar la asincronía JS tiene diferentes mecanismos. El primero de ellos es las callbacks.

La callback es una función que se va a ejecutar después de que otra la haga. Es el mecanismo por excelenciai ncluso para invocar otra función.

Las funciones son ciudadanos de primer orden porque podemos hacer de todo con ellas, incluso devolver una función con una función o usarlas de párametros.

El callback es primer mecanismo para poder trabajar con la asincronía.

A continuacoón, ejemplo de recursividad utilizando callback:
*/

function cuadradoCallback(value, callback) {
  setTimeout(() => {
    callback(value, value * value);
  }, 0 | (Math.random() * 100));
}

cuadradoCallback(0, (value, result) => {
  console.log("Inicia Callback");
  console.log(`Callback: ${value}, ${result}`);
  cuadradoCallback(1, (value, result) => {
    console.log(`Callback: ${value}, ${result}`);
  });
  console.log(`Callback: ${value}, ${result}`);
  cuadradoCallback(2, (value, result) => {
    console.log(`Callback: ${value}, ${result}`);
  });
  console.log(`Callback: ${value}, ${result}`);
  cuadradoCallback(3, (value, result) => {
    console.log(`Callback: ${value}, ${result}`);
  });
  console.log(`Callback: ${value}, ${result}`);
  cuadradoCallback(4, (value, result) => {
    console.log(`Callback: ${value}, ${result}`);
  });
}); /* Acá invoco a la función de arriba cuadradoCallback, y le paso como parámetro una función que la defino directamente adentro del parámetro. */

// ---------------------

/* function operacionMatematica(operacion) {
  return operacion;
}

function superOperacionMatematica(operacion1, operacion2, operacion3, operacion4) {
  let total = operacion1 + operacion2 + operacion3 + operacion4;
  return total;
}

function superOperacionMatematicaSimplificada(
  operacion1,
  operacion2,
  operacion3,
  operacion4,
  a,
  b
) {
  let total = operacion1 + operacion2 + operacion3 + operacion4;
  return total;
} */

const notasAlumnos = {
  fede: 5,
  nacho: 7,
  juan: 2,
  emi: 10,
  juanPablo: 5,
  turop: 1,
};

function operacionPromedio(notas) {
  console.log(
    `A continuación, el promedio de los siguientes alumnos: ${Object.keys(
      notasAlumnos
    )}`
  );
  return notas.reduce((sumador, nota) => (sumador += nota)) / notas.length;
}

console.log(operacionPromedio(Object.values(notasAlumnos)));

/* operacionMatematica(resta(10, 2), 5 ,2); */
/* operacionMatematica(suma(10, 2)); */
/* operacionMatematica(multiplica(10, 2), 5, 2);
operacionMatematica(divide(10, 2), 5, 2);  */
/* superOperacionMatematicaSimplificada(suma, divide, multiplica, resta, 2, 2); */

/*
Todas las llamadas asincronas, se van a agregando al callstack (callback queue). 

Si una de esas funciones hacen uso de la asincronia.

Es el paralelo de que tengo una pila de platos para lavar y de repente uno tiene mucha comida pegada, entonces lo tengo en remojo y lo dejo a un costado. Antes de terminar de lavar ese plato aunque ya este listo para lavar, lavo todo el resto y solo cuando termino de lavar el resto lavo ese plato.

La web api, adonde va la funcion asincronica lo q hace es "ir aflojandole la comida pegada y una vez q se aflojo mandarla a la lista de espera".

Le da una prioridad diferente. Priorizo lo q estoy ejecutando en hilo.
*/
