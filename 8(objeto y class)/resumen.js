class VehiculosMotorizados {
  ancho = 3;
  largo = 5;
  color = "amarillo";
}

var unCoche = VehiculosMotorizados;
unCoche.acelera(); // esto es un metodo

const c = new Object(); // pero casi nadie utiliza esta estrcutura

const fede = {
  nombre: "Fede", //va con coma en lugar de punto y coma
  apellido: "Irarrazaval",
  edad: 33,
  comportamiento: ["correr", "estudiar"],
  soltero: false, //puede tener todo tipo de datos
  contacto: {
    email: "fedeirar@gmail.com",
    cell: 1567887879, //hasta puede tener sus propios objetos
  },
  saludos: function () {
    console.log("HOLA!"); //hasta le puedo agregar una funcion
  },
  decirMiNombre: function () {
    console.log(
      `Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} anios y me podes llamar a ${this.contacto.cell}`
    ); //this es el contexto en el que nos encontramos. This hace referencia al mismo objeto. De vos mismo, hace tal cosa
  },
};

console.log(Object.values(fede)); // esto es casi lo mismo q key pero te lista los valores, no los atributos. Los valores son los valores del atributo. El atributo seria como una variable

console.log(fede.hasOwnProperty("nombre")); // esto te tira true si hay una propiedad en el objeto fede q sea nombre. Aca te tira true

const perro = {
  nombre: nombre, //aca le estoy asignando como valor de nombre la variable nombre cuyo valor es kEnAi
  edad: edad, //aca le estoy asignando como valor de edad la variable edad cuyo valor es 7
  ladrar: function () {
    console.log("GUAU");
  },
};

console.log(objeto2.propiedad1); //la ventaja de invocar la propiedad con el objeto.propiedad es q es mas facil.
console.log(objeto2["propiedad1"]); // se puede invocar de esta forma tambien. Cuando hay que intercalar con variables o recorrer objeto es mejor esta pq se pueden hacer mas cosas

var miboton = document.getElementById("boton1"); // almacenamos dentro de la variable miboton el objeto boton1 dentro del document // a partir de ahora con poner miboton js sabe q nos referimos a boton1

delete objeto[unaPropiedad];
