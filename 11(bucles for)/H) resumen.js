// FOR:
let numeros = [1, 2, 3, 4, 5, 6, 7];

for (let i = 0; i < numeros.length; i++) {
  if (i === 5) {
    break;
  }
  console.log(numeros[i]);
}

// For en una funcion:
function mesesDelAño(array) {
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

// Otro ejemplo:
let stringInvertida = "";
let string = "Hola";
for (let i = this.length - 1; i >= 0; i--) {
  stringInvertida = stringInvertida + string.charAt(i); // charAt() retorna el caracter especificado del string o array.
}

//FOR IN: para objetos
const objeto = {
  nombre: "Federico",
  apellido: "Irarrazaval",
  edad: 35,
};

for (const propiedad in objeto) {
  //itera las propiedades de un objeto
  console.log(objeto);
  console.log(objeto.apellido);
  console.log(`Key:${propiedad}, Value: ${objeto[propiedad]}`);
}

//FOR OF:
for (const elemento of numeros) {
  //itera los elementos del array numeros
  console.log(elemento);
}

let cadena = "Hola Mundo"; //tambien es iterable un string
for (const caracter of cadena) {
  console.log(caracter);
}
