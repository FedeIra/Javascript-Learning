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
