class Animal {
  // las clases no reciben parametros
  constructor(nombre, genero) {
    // las clases tienen un metodo especial constructor q recibe las propiedades
    this.nombre = nombre;
    this.genero = genero;
  }
  sonar() {
    // los metodos no se definen igual que en los prototipos. Las clases simplifican la escritura.
    console.log("groarrr");
  }
  saludar() {
    // los metodos los hacia fuera de la funcion constructora en los prototipos. Pero aca los dejamos en el constructor. No hay que sacarlos pq al estar en clases JS lo arregla solo.
    console.log(`Hola ${this.nombre}`);
  }
}
const tigre = new Animal("Tigre", "Hembra");

// HERENCIA
// Si quiero crear ahora una clase que hereda del prototipo (o clase) Animal:

class Perro extends Animal {
  // el extends se refiere a que hereda de tal lugar, en este caso, de Animal
  constructor(nombre, genero, tamanio) {
    super(nombre, genero); // super es un metodo que manda a llamar al constructor de la clase padre. Con la funcion super obtengo de la clase padre lo siguiente: this.nombre = nombre; y this.genero = genero; Por esa razon es q le tengo q pasar parametros de nombre y genero
    this.tamanio = tamanio; // le tengo q agregar this.tamanio pq se trata de una propiedad que la clase padre no tenia
  }
  sonar() {
    // aca le pongo la misma funcion de sonar, pero le agrego algo, por lo q pasa a ser una nueva funcion
    console.log("groarrr soy un perro");
  }
  ladrar() {
    // aca le agrego una nueva funcion a la clase perro. No le agregue la funcion de saludar, ya que directamente la hereda del prototipo Animal y la quiero dejar tal cual esta.
    console.log("Guauuu Guauuu");
  }
}

// OTRO EJEMPLO:
class Persona {
  constructor(nombre, apellido, edad, domicilio) {
    // Tu código:
    (this.nombre = nombre),
      (this.apellido = apellido),
      (this.edad = edad),
      (this.domicilio = domicilio);
    this.detalle = function () {
      // OTRA FORMA DE AGREGAR FUNCION CON THIS
      return {
        Nombre: this.nombre, //se puede imprimir el nombre de la propiedad poniendolo en Mayuscula
        Apellido: this.apellido,
        Edad: this.edad,
        Domicilio: this.domicilio,
      };
    };
  }
}

// OBJETO LITERAL:
const objeto_literal = {
  // const, var o let. Esto es un OBJETO LITERAL: literal pq escribo exactamente lo q es
  nombre: "Agus", // propiedades y metodos
  apellido: "Aceiro",
}; // esta es la formula para crear un objeto literal

console.log(objeto_literal); // en la consola, a diferencia del objeto fede, no te aparece adelante "Persona". Esto es pq no hereda de nada al ser un objeto literal

// FUNCION CONSTRUCTORA (o factory como fabrica de objetos) y NEW:
function Persona(nombre, apellido) {
  // cuando se hace una funcion constructora se pone MAYUSCULA. Es buenas practicas
  this.nombre = nombre; // sin el this no te sirven los atributos de los objetos que heredan de Persona
  this.apellido = apellido;
  // la funcion constructora no returna
  // la funcion constructora tiene this
}
const fede = new Persona("Fede", "Irarrazaval");

function Animal(animal, sexo, tamanio) {
  this.animal = animal || "perro"; // con el || le digo q en caso de que no le pongan el parametro correspondiente va a ser perro. Lo mismo con macho
  this.sexo = sexo || "macho";
  this.tamanio = tamanio && "grande"; // si se le da valor a tamanio te tira "grande". Es para controlar si existe una propiedad en el objeto.
}

function Auto(modelo, marca) {
  this.modelo = modelo;
  this.marca = marca;
}

const audi = new Auto("2015", "audi");

function Persona(edad) {
  this.edad = edad; // el this es pq no sabes q objeto vas a crear despues de haber hecho la funcion constructora.
}

Persona.prototype.getEdad = function () {
  // con esto le agrego una funcion al prototipo
  return this.edad;
};

const objt1 = new Persona(22);
objt1.getEdad = function (edad) {
  return this.edad * 2;
};

const objt2 = new Persona(23);

class Deporte {
  constructor(deporte, jugadores) {
    (this.deporte = deporte), (this.jugadores = jugadores);
  }
  jugar() {
    console.log(
      `juguemos al ${this.deporte}! necesitamos ${this.jugadores} jugadores!`
    );
  }
}

const futbol = new Deporte("futbol", 11);

class Rugby extends Deporte {
  //la clase deporte tiene un constructur. La clase rugby extiende a la clase deporte equipo y victorias
  constructor(deporte, jugadores, equipo, victorias) {
    super(deporte, jugadores); // super quiere decir q estoy invocando el constructor de la clase q extiendo (Deporte)
    this.equipo = equipo;
    this.victorias = victorias;
  }
}

const sic = new Rugby("rugby", 11, "SIC", 31);

function crearUsuario() {
  function Usuario(opciones) {
    this.usuario = opciones.usuario;
    this.nombre = opciones.nombre;
    this.email = opciones.email;
    this.password = opciones.password;
  }

  Usuario.prototype.saludar = function () {
    return `Hola, mi nombre es ${this.nombre}`;
  };
  return Usuario;
}

function agregarMetodo() {
  Persona.prototype.datos = function () {
    return `${this.nombre}, ${this.edad} años`;
  };
}
