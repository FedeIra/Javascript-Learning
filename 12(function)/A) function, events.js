/* FUNCIONES

Es un bloque de codigo con su propio contenido independiente al scope o ambito global. Se define una sola vez y se puede ejecutar en cualquier momento. Puede o no recibir parametros. Puede devolver o no valores.

Las funciones son un objeto, tipo de dato especial. Son muy importantes en js. Puedes retornar incluso la ejecucion de una funcion adicional con una funcion.

Particularmente las arrow functions son muy importantes.

function nombre (parametros) {
  //codigo a ejecutar;
}

nombre_de_la_funcion(); //esto es para llamarla


PARAMETROS DE UNA FUNCION

function suma (num1, num2) {
  let resultado = num1+num2;
}

suma(5,7); //llamamos la funcion pasandole los dos parametros.

es el equivalente a decirl let num1 = 5 y let num2= 7
*/

//Funcion declarada (no tiene parametros dentro del parentesis):
function estoEsunaFuncion() {
  console.log("Unos");
  console.log("Dos");
  console.log("Tres");
}

//invocacion de funcion
estoEsunaFuncion(); //los parentesis indican q una funcion se va a ejecutar

function unaFuncionQueDevuelveValor() {
  console.log("Unos");
  return 19; // el return corta la funcion. Ignora todas las lineas de abajo y retorna el valor como valor de la funcion
  console.log("Dos");
  console.log("Tres");
  return "La funcion ha retornado una cadena de texto"; //cuando una funcion devuelve un valor usamos la palabra reservada return
}
console.log(unaFuncionQueDevuelveValor()); // si no le pongo consola la palabra return la genera, pero no sale en la consola

//Otra forma de invocarla, mejor, es asi:
let valorDeFuncion = unaFuncionQueDevuelveValor();
console.log(valorDeFuncion);

// FUNCIONES CON PARAMETROS

function saludar(nombre, edad) {
  console.log(`hola ${nombre}`);
  console.log(`tengo ${edad}`);
}
saludar("fede", 33);
saludar(); // Si no le pongo parametros me va a devolver el hola undefined y tengo undefined.

function saludar2(nombre2 = "fede", edad2 = 32) {
  //le puedo asignar valores predeterminados
  console.log(`hola ${nombre2}`);
  console.log(`tengo ${edad2}`);
}
saludar2(); // al no definir los parametros se toman los q se designaron por defecto en la funcion

/* 
Funciones declaradas VS. Funciones expresadas

*/
//FUNCION DECLARADA:
funcionDeclarada(); // se puede invocar la funcion incluso antes de hacerla. Esto es por el hoisting. Js en cierta forma la sube arriba de todo.
funcionExpresada(); //aca invoco la funcion expresada y me tira error pq si o si la tengo q poner despues de haberla expresada, a diferencia de la funcion declarada

function funcionDeclarada() {
  console.log(
    "Esto es una funcion declarada, puede invocarse en cualquier parte de nuestro codigo, incluso antes de que la funcion sea declarada"
  );
}
//se puede crear una funcion y asignarla a una variable. Se utiliza const, no let

//FUNCION EXPRESADA:est estilo de funcion esta siendo cada vez mas practicada con las introducciones de react, angular, etc. A nivel de buenas practicas, hacerlo de manera expresada te evita errores de compilacion al forzarte a ponerlas arriba de todo

const funcionExpresada = function () {
  //aca no tenemos q poner el nombre la funcion pq ya esta en la variable. Se conoce como funcion anonima (que no tiene nombre)
  console.log(
    "Esto es una funcion expresada. Es decir, una funcion que se le ha asignado como valor a una variable, si invocamos esta funcion antes de su definicion JS nos dira error"
  );
};
funcionExpresada();

/*
EVENTOS
Los eventos: son desencadenantes de la accion. Cuando navegamos por internet hacemos acciones, click, pasar por encima, etc. Esto interactua con nosotros.

El evento es un suceso q ocurre en un momento determinado. Ejemplo, hacer click, pasar el raton por encima de la imagen, etc. Ese evento desencadena una accion.

Nosotros le decimos q cuando ocurra ese evento llame a una funcion en la cual pasa algo.

Eventos -- descripcion ----------------------------------------- elementos par los que esta definido (<>)
-------------------------------------------------------------------------------------------------------------------------
onblur -- se desencadena cuando se deselecciona un elemento ---- <button>, <input>, <label>, <select>, <textarea>, <body>

onchange -- deseleccionar un elemento que se ha modificado ---- <input>, <select>, <textarea>

onclick -- pinchar y soltar el raton -------------------------- todos los elementos

ondblclick -- pinchar dos veces seguidas con el raton----------- todos los elementos

onfocus ---- seleccionar un elemento ---------------------------- <button>, <input>, <label>, <select>, <textarea>,<body>

onkeydown ---pulsar una tecla (sin soltar) ---------------------- elementos de formulario y <body>

onkeypress --- pulsar una tecla --------------------------------- elementos de formulario y <body>

onkeyup ------ soltar una tecla pulsada ------------------------- elementos de formulario y <body>

onload-------- la pagina se ha cargado completamente ------------<body>

onmousedown----pulsar (sin soltar) un boton del rato ----------- todos los elementos

onmousemove ---mover el raton -----------------------------------todos los elementos

onmouseout---el raton "sale" del elemento(pasa por encima de otro elemento)--- todos los elementos

onmouseover ---el raton "entra" en elemento(pasa por encima) -------todos los elementos

onmouseup---soltar el boton que estaba pulsado en el raton -----------todos los elementos

onreset----inicializar el formulario(borrar todos sus datos) ---------- <form>

onresize---se ha modificado el tamanio de la ventana del navegador --- <body>

*/
