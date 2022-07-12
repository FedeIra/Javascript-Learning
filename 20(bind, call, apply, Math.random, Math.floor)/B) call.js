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
