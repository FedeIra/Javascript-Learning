class Animal {
  constructor(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
  }
  sonar() {
    console.log("groarrr");
  }
  saludar() {
    console.log(`Hola ${this.nombre}`);
  }
}

// HERENCIA (prototipo). La verdad es que Perro es tan solo un prototipo. No es una clase... JS es un lenguaje basado en prototipos y no en clases como python.

class Perro extends Animal {
  constructor(nombre, genero, tamanio) {
    super(nombre, genero);
    this.tamanio = tamanio;
    this.raza =
      null; /* Acá agregamos una propiedad para demostrar cómo funcionan los getters y setters. No lo metemos en los párametros. */
  }
  sonar() {
    console.log("groarrr soy un perro");
  }
  ladrar() {
    console.log("Guauuu Guauuu");
  }

  static queEres() {
    /* Este es el método estático del doc. anterior (métodos estáticos) */
    console.log("Los perros son el mejor amigo del hombre");
  }
  /* SETTER Y GETTERS: son métodos especiales que nos permiten establecer y obtener los valores de atributos que existen en nuestra clase, pero que el usuario a la hora que creo o nosotros cuando la invocamos no lo definimos. Ejemplo: con la raza: */
  get getRaza() {
    return this.raza;
  } /* Generalmente, para detectar que son métodos obtenedores o establecedores se antepone get o set. Si le pones get es que la función te va a permitir obtener el valor. Si le pones set es que la función lo va a establecer. */
  /* Ahora, aprovechando que no le habíamos puesto el valor (lo dejamos en null), hacemos un método set que le establece el valor: */
  set setRaza(raza) {
    this.raza = raza;
  }
}

const billy = new Perro("Billy", "macho", "pequeño");

/* billy.queEres(); */ //el método estático no se puede invocar desde billy, sino que desde perro.
billy.getRaza; // null  . No se obtiene invocando una función, ya que aunque sea un método obtenedor, se invoca como una PROPIEDAD. Te dice null porque era el valor original que tenía.

/* billy.getRaza(); */ // NO SE PUEDE. Te tira error, y dice que billi.getRaza() no es una función.

billy.setRaza =
  "Russel Terrier"; /* Al igual que el método getter, lo tenes que invocar como una propiedad. Así entonces le seteamos el valor. */

billy.raza; /* Ahora cuando chequeamos la propiedad raza, en lugar de null nos dice Russel Terrier. Lo mismo con el getter: */

billy.getRaza; // Russel Terrier

billy; /* te tira la siguiente definición de Billy: 
Perro { nombre: 'Billy',
  genero: 'macho',
  tamanio: 'pequeño',
  raza: 'Russel Terrier' } 
  */
