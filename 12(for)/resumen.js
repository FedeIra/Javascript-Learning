const numeros = [1, 2, 3, 4, 5, 6, 7];

for (let i = 0; i < numeros.length; i++) {
  if (i === 5) {
    continue; // omite el console.log cuando se cumple la condicion y vuelve al bucle (sigue con la ejecucion normal del ciclo), es decir, no te imprime el 6(pq arranca desde el 0)
    break; // se sale de la estructura en la que esta si se cumple la condicion. Es decir solo te imprime hasta el 5 (pq arranca desde el 0)
  }
  console.log(numeros[i]);
}

var meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

for (var i = 0; i < 12; i++) {
  // igual a 0 pq un array arranca desde 0. Menos a 12 pq se q diciembre es la posicion 11 del array
  document.write(meses[i] + "<br/>"); // el nombre de la variable del for, por convenio, suele ser i, z o j porque no se utiliza fuera del bucle. Igual se puede poner lo q quieras.
}

const usuario = {
  edad: 13,
  apellido: "Irarrazaval",
  nombre: "Federico",
  abogado: true,
};

for (const value in usuario) {
  console.log(value);
  console.log(usuario[value]);
}

let stringInvertida = "";
let string = "Hola";
for (let i = this.length - 1; i >= 0; i--) {
  stringInvertida = stringInvertida + string.charAt(i); // el charAlta :charAt() is a method that returns the character from the specified index. Characters in a string are indexed from left to right.The index of the first character is 0, and the index of the last character in a string, called stringName, is stringName.length – 1.
}

for (let i = 0; i < array.length; i++) {
  array[i]++;
}
console.log(array);

function promedioResultadosTest(resultadosTest) {
  let suma = 0;

  for (let i = 0; i < resultadosTest.length; i++) {
    suma += resultadosTest[i];
  }
  return suma / resultadosTest.length;
}

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let array_meses = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] == "Enero" || array[i] == "Marzo" || array[i] == "Noviembre") {
      array_meses.push(array[i]);
    }
  }
  if (array_meses.length > 2) {
    return array_meses;
  } else {
    return "No se encontraron los meses pedidos";
  }
}
