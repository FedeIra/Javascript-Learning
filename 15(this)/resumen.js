const obj = {
  nombre: "Contexto Objeto",
  imprimir: function () {
    //es una funcion anonima y no esta declarada en el scope global
    console.log(this.nombre); //este this esta en un contexto no global, especifico de esta funcion
  },
};

const obj3 = {
  nombre: "Contexto Objeto 3",
  imprimir: () => {
    // uso arrow function. Mantiene el enlace del contexto en el que fue creado, es decir, el contexto global. Las funciones arrow no crean su propio scope porlo que el this.nombre ==  "Contexto Global" que es el this.nombre global. En cambio, en el resto que son funciones anonimas y crean su propio scope, el this.nombre es el nombre que haya definido su propia funcion.
    // Por esto, cuando definis funciones dentro de objetos no es recomendable usar arrow functions porque la arrow function no crea un scope.
    console.log(this.nombre);
  },
};

function persona2(nombre) {
  this.nombre = nombre;
  return () => console.log(this.nombre); //ahora al ser una arrow function busca el this.nombre primero en el contexto de la funcion donde fue creada, es decir, person2, y por eso te imprime Jon2
}
let jon2 = new persona2("Jon2");
jon2();

let persona2 = {
  nombre: "Agus",
  saludo2: () => console.log("Hola" + this.nombre), // me devuelde undefined pq al ser una arrow function el this busca en el contexto global donde no esta definido nombre
};

//Defino la funcion en el contexto global
function saludar() {
  console.log(`Hola ${this.nombre}`); // SIN EL THIS TENDRIA Q HACER UNA FUNCION ESPECIFICA PARA CADA UNO YA Q EL VALUE DE NOMBRE SE DEFINE EN EL CONTEXTO DE CADA OBJETO. No quiero crear una funcion para cada uno. Es mejor definir una funcion global que use el keyword this, y luego puedo ponerle el nombre de la funcion a cada objeto
}
