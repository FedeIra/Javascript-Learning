console.log(lorem.includes("panqueques")); // con el includes te busca si esta la palabra en el string y te tira un booleano. Aca te tira true

function actividadesEnComun(persona1, persona2) {
  //La funcion llamada "actividadesEnComun" recibe como argumento dos arrays de actividades (strings) llamados "persona1" y "persona2"
  // y debe devolver un array de strings con las actividades en comun (aquellas que se repiten) entre cada array.
  //ej> persona1 = ["leer", "comer", "pasear", "dormir", "jugar"]
  //      persona2 = ["comer", "dormir", "futbol"]
  // actividadesEnComun(persona1, persona2) => ["comer", "dormir"]
  // Tip: podes usar cilos for anidados.
  // Tu codigo aca:
  let res = [];
  for (let actividad of persona1) {
    if (persona2.includes(actividad)) res.push(actividad);
  }
  return res;
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

function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let cadenaModificada = "";
  let eliminar = ["a", "b", "c"];

  for (let i = 0; i < i < cadena.length; i++) {
    if (eliminar.includes(cadena[i])) continue; //includes es un metodo de array que verifica si el elemento pasado como argfumento existe dentro de eliminar. Dice si incluye la letra q estas iterando continua sin hacer nada, o sea no las incluye a cadena modificada.
    cadenaModificada = cadenaModificada + cadena[i];
  }
}

function buscoInterseccion(arreglo1, arreglo2) {
  arrayInterseccion = arreglo1.filter((value) => arreglo2.includes(value));
  return arrayInterseccion;
}
