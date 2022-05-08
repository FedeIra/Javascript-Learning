/* 
POO: se refiereo a programacion orientada a objetos
OOP: en ingles. es lo mismo

Javascript, al igual que python, es orientada a objetos. Asimila la vida real al codigo de programacion.

En la vida real tenemos miles de objetos. Los objetos tienen algo en comun: caracteristicas y capacidades.

caracteristicas (propiedad): ancho, largo, peso, color, volumen, temperatura, etc

capacidades (metodo): ej: una lavador puede lavar ropa, es una capacidad. Una mesa puede soportar objetos. Un coche puede arrancar, girar, acelerar. 

Los objetos son las cosas: coche, mesa, lavadora, etc.

Cuando hay dos objetos que son el mismo objeto pero con propiedades y o metodos distintos no dejan de ser mismos objetos: coches popr ejemplo.

Traducido en programacion:

Podes tener un boton de formulario, que tiene sus propiedades (color, ancho) y metodos (puede capturar un foco, puede moverse, puede seleccionarse)

Desde javascript podemos modificar las propiedades y metodos.

Esto se modifica a traves de lo que se denomina: NOMENCLATURA DEL PUNTO

NOMENCLATURA DEL PUNTO:

renault.color = "azul";   nombre del ojeto.propiedad igual a valor que quiera asignarle

*/

class coches {
  ancho = 3;
  largo = 5;
  color = "amarillo";
}

var coche1 = coches;

coche1.ancho = 4;
coche1.color = "azul"; // esto son las propiedades

coche1.acelera(); // esto es un metodo

// Ejemplo con un boton de una pagina web

/*
class boton1 {
    document.write();
    window.alert(); // antes lo poniamos sin el window pq en el alert siempre esta presente el objeto window. Por eso lo podemos omitir. Si lo pones funciona igual
    boton.style.width = "500px"; // con esto modifico el ancho de un boton
    boton.style.backgroundColor="red"; // con esto modifico el color del boton
    boton.focus(); // esto es para acceder a la funcion del boton
}
*/
// prompt(); tambien es un metodo del window y por eso no es necesario ponerle el window inicialmente. Si lo pones no cambia nada

let a = new String("Hola");
console.log(a);

// podemos usar constantes para definir objetos

const b = {
  // es bueno usar const cuando creamos objetos, para evitar q un nuevo objeto cambie la referencia a este
};

// un objeto es una coleccion de llaves valor parecido a una regla de css.
