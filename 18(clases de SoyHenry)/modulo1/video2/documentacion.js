//  THIS en el contexto global inicial

// en el browser esto es verdad:

console.log(this === window);

this.a = 37;

console.log(window.a); //37

//en el contexto de una funcion:

function f1() {
  return this;
}

f1() === window; // global object
