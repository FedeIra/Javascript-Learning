// FOREACH: el metodo forEach es una forma mas declarativo de ejecutar ese ciclo

/*
    FOREACH: 
    ejecuta la funcion indicada una vez por cada elemento del array
    array.forEach(element => {
    });
  
      Recibe tres parametros el callback de foreach: currentvalue (el elemento actul siendo procesado), index (que indice del arreglo esta en el momento) y array (todo el arreglo)

      foreach tomo una callback como su unico argumento, e itera sobre cada elemento de la matriz y llama al callback en el. El callback puede tomar dos argumentos, el primero es el elemento en si, el segundo es el indice del elemento (este argumento es opcional)
    */

//reduce, map y forEach son todos callbacks. Es una funcion que se pasa a otra como argumento y se ejecuta despues de q se haya completado una cosa

// Con callbacks:
// El foreach aca invoca la funcion de console.log(elemento) por cada elemento que hay en alumnos. Esto en lugar de ponerle lo siguiente: let i = 0; i < alumnos.length; i++
alumnos.forEach(function (elemento, indice) {
  //esta funcion es el callback q recibe dos parametros. El indice es opcional
  console.log(elemento);
});

//REST:
function sumar(a, b, ...c) {
  // aca pongo los 3 puntos suspensivos
  let resultado = a + b;
  c.forEach(function (n) {
    resultado += n;
  });
  return resultado;
}
console.log(sumar(1, 2));
console.log(sumar(1, 2, 3, 4, 5));
console.log(sumar(1, 2, 3, 4, 5, 6, 7, 8)); //gracias a los puntos suspensivos le puedo ir agregando parametros.

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  let nuevoArray = [];

  array.forEach(function (elemento, indice) {
    if (elemento.charAt(0) === "a") {
      nuevoArray.push(array[indice]);
    }
  });
  return nuevoArray;
}

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

const numeros = [1, 2, 3, 4, 5];

numeros.forEach = (el, index) =>
  console.log(`${el} esta en la posicion ${index}`);

// REPASO FOR EACH

const numeros = [1, 2, 3, 4, 5];

// Para recorrer un arreglo podemos usar el método for Each.

/* function escribirNumero(item, index, arr) {
  console.log(`a[${ index }]=${item}`);
}

numeros.forEach(escribirNumero); */ /* Por cada elemento que se llama hace la función escribirNumero */
/* 
a[0]=1 
a[1]=2 
a[2]=3 
a[3]=4 
a[4]=5 */

/* Esto se puede reducir en un arrow function: */

numeros.forEach((item, index, arr) => {
  console.log(`a[${index}]=${item}`);
});
/* a[0]=1 
a[1]=2 
a[2]=3 
a[3]=4 
a[4]=5 */

//Suma de los elementos del arreglo:

let suma = 0;

numeros.forEach((element) => (suma += element)); /*? suma  */ // = 15

const letras = ["a", "b", "c", "d", "e"];

let array = [];

array = letras.forEach((element) => {
  array.push(element); /* ? */
});

// Cuantas veces se repite una letra dentro del arreglo

const letras2 = ["a", "b", "a", "b", "c", "a", "d"];

let contador = {};

letras2.forEach((item) => {
  if (contador[item]) {
    contador[item]++;
  } else {
    contador[item] = 1; /*? contador  */
  }
});

console.log(contador); // { a: 3, b: 2, c: 1, d: 1 }
