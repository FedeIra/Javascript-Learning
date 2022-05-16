function condicional(age) {
  if (age > 18) {
    return true;
  }
  return false;
}

function elegi_clase(clase) {
  if (clase == "sorcerer") {
    console.log("Nice class");
  } else if (clase == "mage") {
    console.log("meh");
  } else {
    console.log("you suck");
  }
}

loteria = prompt("Te ha tocado la loteria??");

if (dineroAhorrado >= precioCoche || loteria == "si") {
  // con el && le agrego una nueva condicion que tiene q cumplir para poder comprarte un auto
  alert("Puedes comprar el coche"); // con el || si se cumpla cualquier de las dos condiciones me puedo comprar el auto
} else {
  alert("Comprate una bici y no jodas");
}

if (!!(1 == 2)) {
  // le puedo agregar todos los ! q quiera, haciendolo la negativa de la negativa de la negativa...
  console.log("Es true"); // en este aso te dice si paso lo contrario a que uno no es distinto a 2, entonces tirame true. Aca sale false entonces
} else {
  console.log("es false");
}

if (hora > 0 && hora <= 5) {
  //cuando solo compara < o > sin el =, se excluye ese valor
  console.log(buenosDias);
} else if (hora >= 0 && hora <= 11) {
  console.log(buenasTardes);
} else if (hora >= 12 && hora <= 18) {
  console.log(buenasNoches);
} else {
  ("no me jodas");
}

let dia = 2;

switch (dia) {
  case 0:
    console.log("Domingo");
    break; //la palabra break le dice q se sale de la estructura de la q esta, es decir, el switch. Si la omitis pasa a leer el resto de los casos
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes"); // te va a devolver "Martes" pq el valor de dia es 2 y cae en este caso
    break;
  case 3:
    console.log("Miercoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sabado");
    break;
  default: // el default es lo mismo q else. Si no cae en ninguno de los casos, cae en este caso
    console.log("El dia no existe");
    break;
}
