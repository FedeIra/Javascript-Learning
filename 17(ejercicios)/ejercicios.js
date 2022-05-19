function sumaTodosImpares(array) {
  // La funcion llamada 'sumaTodosImpares" recibe como argumento un array de enteros.
  // y debe devolver la suma total entre todos los numeros impares
  //ej:
  //sumaTodosImpares([1,5,2,9,6,4]) devuelve 1+5+9=15
  //tu codigo aca:
  let sumaTotal = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      sumaTotal += array[i];
    }
  }
  return sumaTotal;
}

console.log(sumaTodosImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// return array.reduce((a, c) => (c%2 !== 0 ? a + c : a), 0);

function stringMasLarga(str) {
  //La funcion llamada "stringMasLarga", recibe como argumento una frase (string) "str"
  // y debe devolver la palabra (string) mas larga que haya en esa fase (Es decir el que de mayor cantidad de caracteres)
  //Ej:
  //StringMasLarga("Ayer me fui a pasear a una plaza") debe retornar "pasear"
  //Tip: podes usar el metodo de String "split"
  //Tu codigo aca:
  let array = str.split(" ");
  let arrayLarga = [array[0]];

  for (let i = 1; i < array.length; i++) {
    if (arrayLarga[0].length < array[i].length) {
      arrayLarga[0] = array[i];
    }
  }
  return arrayLarga[0];
}
console.log(
  stringMasLarga(
    "Hola como estamos todo bien. Queria preguntar si por casualdiad tenian chorizos a la cacerola amigo, avisamepleaskiofas o sino sabes que"
  )
);
// return str.split(" ").reduce((a, c) => (c.length > a.length ? c : a), "");

function estaOffline(usuarios, nombre) {
  //La funcion llamada "estaOffline" recibe como argumento un array de objetos llamado "usuarios" y un string llamada "nombre".
  //cada objeto tiene una property "nombre" que es un string y otra llamada "online" que es un booleano.
  //La funcion debe retornar true si el usuario se encuentra offline, de lo contrario false.
  //ej:
  // var usuarios = [
  //  { nombre: "toni",
  //    online: true
  //  },
  //  {
  //    nombre: "emi",
  //    online: true
  //   },
  //   {
  //    nombre: "Agus",
  //    online: false
  //   }
  // ];
  // estaOffline(usuarios, "agus") retorna true
  // estaOffline(usuarios, "emi") retorna false
  // tu codigo aca:

  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].nombre == nombre) {
      if (usuarios[i].online !== true) {
        return true;
      } else {
        return false;
      }
    }
  }
}

let usuarios = [
  { nombre: "Toni", online: true }, // deberia dar False
  { nombre: "Emi", online: true }, // deberia dar False
  { nombre: "Agus", online: false }, // deberia dar True
  { nombre: "Tomi", online: false }, // deberia dar False
  { nombre: "Juan", online: true }, // deberia dar False
  { nombre: "Fede", online: true }, // deberia dar False
];

console.log(estaOffline(usuarios, "Emi"));
// let users = {};
// usuarios.map((usuario) => (users[usuario.nombre] = usuario.online));
// return !users[nombre];

function actividadesEnComun(persona1, persona2) {
  //La funcion llamada "actividadesEnComun" recibe como argumento dos arrays de actividades (strings) llamados "persona1" y "persona2"
  // y debe devolver un array de strings con las actividades en comun (aquellas que se repiten) entre cada array.
  //ej> persona1 = ["leer", "comer", "pasear", "dormir", "jugar"]
  //      persona2 = ["comer", "dormir", "futbol"]
  // actividadesEnComun(persona1, persona2) => ["comer", "dormir"]
  // Tip: podes usar cilos for anidados.
  // Tu codigo aca:
  let actividadesComunes = [];

  for (let i = 0; i < persona1.length; i++) {
    persona2.forEach((element) => {
      if (element == persona1[i]) {
        actividadesComunes.push(element);
      }
    });
  }
  return actividadesComunes;
}
console.log(
  actividadesEnComun(
    [
      "leer",
      "comer",
      "pasear",
      "dormir",
      "jugar",
      "correr",
      "tomar",
      "estudiar",
    ], // devuelve ["comer", "dormir", "leer", "correr"]
    ["comer", "dormir", "futbol", "correr", "leer", "invocar"]
  )
);

//let res = [];
//for (let actividad of persona1) {
//  if (persona2.includes(actividad)) res.push(actividad)
//  }
//  return res;
//}

function buscaDestruye(arreglo, num) {
  //La funcion "buscadestruye" recibe como argumento un array de enteros "arreglo" y un entero "num".
  //esta funcion tiene que eliminar los numeros del array que coincidan el numero recibido como argumento.
  // La funcion debe retornar el array sin los numeros sacados
  //Ej: buscaDestruye([1, 2, 3, 4], 2) devuelve => [1, 3, 4]
  //Nota: Si el numero se repite mas de una vez, tambien hay que eliminarlo.
  //Ej> buscaDestruye([1, 2, 3, 4, 1] 1) devuelve => [2, 3, 4]
  //
  //Tu codigo aca:

  let arreglo2 = [];

  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] !== num) {
      arreglo2.push(arreglo[i]);
    } else {
      continue;
    }
  }
  arreglo = arreglo2;
  return arreglo;
}

console.log(buscaDestruye([1, 2, 4, 5, 6, 8, 9], 6));

//  return arreglo.filter((e) => e !== num);

function sumarelTipo(arreglo) {
  //La funcion llamada "sumarEltipo" recibe un array de strings como argumento
  //que contiene tipos de vehiculos y debe devolver un objeto con la cantidad
  //de veces que se repita cada tipo
  //Ej:
  // sumarElTipo(["auto", "moto", "auto"]); debe retornar {auto: 2, moto: 1}
  // Tip: podes usar el ciclo for o el metodo de Array "reduce"
  //Tu codigo aca:
}

function crearClaseEmprendedor() {
  class Emprendedor {
    constructor(nombre, apellido, libros, mascotas) {
      //El constructor de la clase Emprendedor recibo nombre (string), apellido (string), libros (array de objetos), mascotas (array de strings)
      //Inicializar las propiedades del emprendedor con los valores recibidos como argumento
      //Tu codigo aca
      this.nombre = nombre;
      this.apellido = apellido;
      this.libros = libros;
      this.mascotas = mascotas;
    }

    addMascota(mascota) {
      //este metodo debe agregar una mascota (mascota) al arreglo de mascotas del emprendedor.
      //no debes retornar nada.
      //Tu codigo aca:
      this.mascotas.push(mascota);
    }
    getMascotas() {
      //El metodo "getMascotas" debe retornar la cantidad de mascotas que tiene el emprendedor.
      //Ej:
      //Suponiendo que el emprendedor tiene estas mascotas: ["perro", "gato"]
      //emprendedor.getMascotas() deberia devolver 2
      //Tu codigo aca:
      return this.mascotas.length;
    }
    addBook(book, autor) {
      //El metodo "addbook" recibe un string "book" y un string "autor" y debe agregar un objeto:
      //{nombre: book, autor: autor} al arreglo de libros del emprendedor.
      //No debes retornar nada.
      //Tu codigo aca:
      this.libros.push({
        nombre: book,
        autor,
      });
    }
    getBooks() {
      //El metodo "getBooks" debe retornar un arreglo con solo los nombres del arreglo de libros del emprendedor.
      //Ej:
      //Suponiendo que el emprendedor tiene estos libros: [{nombre: "El senior de las moscas", autor: "William Golding"}, {nombre: "Fundacion", autor: "Isaac Asimov"}]
      //emprendedor.getBooks() deberia devolver ["El senior de las moscas", "Fundacion"]
      //Tu codigo aca:
      let arreglo = [];
      for (let i = 0; i < this.libros.length; i++) {
        arreglo.push(this.libros[i]["nombre"]);
      }
      return arreglo;
    }
    getFullName() {
      //El metodo getFullName debe retornar un string con el nombre y apellido del emprendedor.
      //ej:
      //Suponiendo que el emprendedor tiene: nombre: "Elon" y apellido: "Musk"
      //emprendedor.getFullName() deberia devolver "Elon Musk"
      //Tu codigo aca:
      return `${this.nombre} ${this.apellido}`;
    }
  }
  return Emprendedor;
}

function mapear() {
  //Escribi una funcion mapear en el prototipo del objeto global "Array"
  //que recibe una funcion callback, que se ejecuta por cada elemento del array
  //mapear los elementos de ese array segun la funcion callback
  //Esta funcion tiene que devolver un array nuevo con los elementos mapeados.
  //NO USAR LA FUNCION MAP DE ARRAYS.
  //ej:
  //var numeros = [1, 2, 3, 4];
  //numeros.mapear(function(numero) {
  //  return numero + 1;
  // }) devuelve [2, 3, 4, 5]
  // Tu codigo aca:
}

// Write a Javascript program to check two numbers and return true if one of the number is 100 or if the sum of the two numbers is 100

let numeros = [30, 70];

const chequear = (a, b) => a === 100 || b === 100 || a + b === 100;
console.log(chequear(10, 90)); //true

// Write a javascript program to get the extension of a filename.

const getFileExtension = (str) => str.slice(str.lastIndexOf("."));

console.log(getFileExtension("index.html")); //.html

//Write a javascript program to replace every character in a given string with the character following it in the alphabet

//String.fromCharCode
//charCodeAt

const moveCharsForward = (str) =>
  str
    .split("")
    .map((char) => String.fromCharCode(char.charCodeAt(0) + 1))
    .join("");

console.log(moveCharsForward("Hola")); // Ipmb

const SumadorDeUno = (str2) => str2.map((char2) => char2 + 1).join("");

console.log(SumadorDeUno([1, 2, 3, 4])); // 2345

// Write a Javascript program to get the current date.
// Expected output:
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
// asking to take the current dat and print it on these formats

const formatDate = (date = new Date()) => {
  const days = date.getDate();
  const months = date.getMonth() + 1;
  const years = date.getYear();

  return `${days}/${months}/${years}`;
};

console.log(formatDate()); //19/5/122. Nose pq tira anio 122

// Write a javascript program to create a new string adding "New!" in front of a given string.
// If the given string begins with "New!" already then return the original string.
// if the string has the new at the start we have to leave it as it was at the start

function retornaNew(string) {
  string = string.split(" ");
  let string2 = ["New!"];

  if (string[0] !== "New!") {
    string.unshift(string2[0]);
  }
  return string.join(" ");
}

console.log(retornaNew("Wine"));

// Mejor Forma de resolverlo:

const addNew = (str) => (str.indexOf("New!") === 0 ? str : `New! ${str}`);

console.log(addNew("New! Product")); // New! Product
console.log(addNew("Product")); // New! Product
