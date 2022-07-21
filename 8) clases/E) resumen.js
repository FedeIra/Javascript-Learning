// OBJETO LITERAL:
const animal = {
  nombre: "tigre",
  sonido() {
    console.log("groarrr");
  },
};

// PROTOTIPO: mecanismo por el cual un objeto puede heredar atributos y metodos de un objeto padre.

// FUNCION CONSTRUCTORA: con esto creo prototipos.
function Animal(nombre, genero) {
  this.nombre = nombre;
  this.genero = genero;
}

Animal.prototype.saludar = function () {
  console.log(`Hola ${this.nombre}`);
};

const tigreDeBengala = new Animal("tigre de bengala", "masculino"); // creo un objeto

tigreDeBengala.sexo = "masculino"; // agrego propiedad
tigreDeBengala.getEdad = function (edad) {
  return this.edad * 2;
}; // con esto le agrego una funcion

console.log(tigreDeBengala.__proto__); //con esto veo el prototipo

// SUB FUNCION CONSTRUCTORA: la creo tomando propiedades y metodos de la Funcion constructora:
function Felino(nombre, genero, fuerza) {
  Animal.call(this, nombre, genero); // el this y call es para obtener las propiedades de Animal. Luego agrego las nuevas de Felino
  this.fuerza = fuerza;
}
Felino.prototype = Object.create(Animal.prototype);

Felino.prototype.constructor = Felino;

const tigre = new Felino("tigre", "macho", 33);

tigre.saludar();
console.log(tigre);

// Funcion constructora con DEAFAULT OPERATORS (|| y &&):
function Animal2(animal, sexo, tamanio) {
  this.animal = animal || "perro"; // || = en caso de que no tenga parametro va a ser perro (como default).
  this.sexo = sexo || "macho";
  this.tamanio = tamanio && "grande"; // && = si tamanio le dan parametro su valor pasa a ser "grande".
}
const tigre2 = new Animal2();

// PROTOTIPOS CON CLASES:

class Animal3 {
  constructor(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
    this.saludar = function () {
      return {
        Nombre: this.nombre, //se puede imprimir el nombre de la propiedad poniendolo en Mayuscula
        Genero: this.genero,
      };
    };
  }
}
const tigre3 = new Animal3("Tigre", "Hembra");

//SUB CLASE

class Perro extends Animal3 {
  // el extends se refiere a que hereda de tal lugar
  constructor(nombre, genero, fuerza) {
    super(nombre, genero); // super llama al constructor de la clase padre. La funcion la hereda automaticamente
    this.fuerza = fuerza;
    this.ladrar = function () {
      console.log("Guauuu Guauuu");
    };
  }
}

Animal.prototype.comer = function () {
  return "tengo hambre";
};

const billy = new Perro("Billy", "macho", 15);

Perro.comer(); // tengo hambre

console.log(billy);
billy.ladrar();
console.log(billy.saludar());

// OTRA FORMA DE CREAR OBJETOS QUE HEREDEN DE UN PROTOTIPO. Pero no muy utilizada:

let ropa = {
  tela: "lana",
  marca: "prana",
};

Object.assign(ropa, { precio: 3000, calidad: "buena" }); // le asigno nuevas propiedades con valores

let pantalon = Object.create(ropa); //creo un objeto que hereda de ropa

console.log(ropa);
console.log(pantalon.tela); // "lana"
