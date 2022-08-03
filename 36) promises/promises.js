/*
!PROMISES:

Promises es una librería para mejorar la programación asíncrónica. Las Promises son una representación de tipo first-class de un valor que va a estar disponible en el futuro. Esto también ya existia con otras librerías de terceros.

Funciona como una promesa en la vida real. Algo que todavía no sucedió. O se cumple o no se cumple.

Por lo general son códigos asincrónicos que terminan yendo al callback queue.


 */

function timeout(duration = 0) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration);
  });
}

var p = timeout(1000)
  .then(() => { //El punto then es el plan que tenes para el caso de que la promesa se cumpla.
    return timeout(2000);
  })
  .then(() => {
    throw new Error("hmm");
  })
  .catch((err) => { //Si la promesa no se cumple está el plan .catch
    return Promise.all([timeout(100), timeout(200)]);
  });

/* Se puede implementar llamadas recursivas sin tener que agregar un un frame al call stack haciendo que sea segura la ejecución de una función recursiva (sin temer por el stack overflow). */

function factorial(n, acc = 1) {
    'use strict';
    if (n <= 1) return acc;
    return factorial(n - 1, n * acc);
}

// Stack overflow in most implementations today,
// but safe on arbitrary inputs in ES6
factorial(100000)