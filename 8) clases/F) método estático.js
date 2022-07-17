/* MÉTODO ESTÁTICO: LA CLAVE ES QUE LA PUEDO INVOCAR SIN LA NECESIDAD DE CREAR UNA INSTANCIA Y NO VA A ESTAR COMO MÉTODO ADENTRO DEL PRÓTOTIPO: EJEMPLO MÁS ABAJO: */

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

// HERENCIA (prototipo)

/* Hay clases privadas en JS. Que una clase tenga atributos o métodos privados significa que esos solamente los vamos a poder utilizar dentro del cuerpo de la clase. Es decir, no la puedo invocar desde afuera con un billy.sonar(). Pero en JS NO EXISTEN LOS PRIVADOS O PROTEGIDOS CON CLASES (porque es azucar sintáctico). Esto se reemplaza con el método estático */

class Perro extends Animal {
  constructor(nombre, genero, tamanio) {
    super(nombre, genero);
    this.tamanio = tamanio;
  }
  sonar() {
    console.log("groarrr soy un perro");
  }
  ladrar() {
    console.log("Guauuu Guauuu");
  }
  // MÉTODO ESTÁTICO: es aquel que se puede ejecutar sin la necesidad de instanciar la clase. Va un ejemplo:
  static queEres() {
    console.log("Los perros son el mejor amigo del hombre");
  }
}

/* Ahora invoco el método estático: */

Perro.queEres(); // Los perros son el mejor amigo del hombre. Me lo invoca sin la necesidad de crear un objeto perro. Mirá ahora la diferencia con otra de los métodos no estáticos:
/* Perro.sonar();  */ //Directamente me tira error: "Perro.sonar is not a function"

const billy = new Perro("Billy", "macho", "pequeño");

billy.queEres(); /* Al igual que en los private, no puedo invocar desde afuera con un prototipo a la funcion queEres. Me tira billy.queEres is not a function  */

billy.sonar(); // Por lo contrario, esto si funciona y me devuelve: groarrr soy un perro
