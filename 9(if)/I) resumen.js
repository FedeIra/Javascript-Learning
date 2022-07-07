// IF BASICO:

if (!!(1 == 2)) {
  // El ! es not, si le sumo otro el nuevo ! cancela el anterior !, por lo que queda if solo.
  console.log("Es true");
} else {
  console.log("es false");
}

// If con else, OR y  prompt:
loteria = prompt("Te ha tocado la loteria??");

if (dineroAhorrado >= precioCoche || loteria == "si") {
  // || equivale a OR
  alert("Puedes comprar el coche");
} else {
  alert("Comprate una bici y no jodas");
}

// If con else, elseif y && :
if (hora > 0 && hora <= 5) {
  // && equivale a AND
  console.log(buenosDias);
} else if (hora >= 0 && hora <= 11) {
  console.log(buenasTardes);
} else if (hora >= 12 && hora <= 18) {
  console.log(buenasNoches);
} else {
  ("no me jodas");
}

// If dentro de funciones:
function elegi_clase(clase) {
  if (clase == "sorcerer") {
    console.log("Nice class");
  } else if (clase == "mage") {
    console.log("meh");
  } else {
    console.log("you suck");
  }
}

// OTROS CONDICIONALES

// 1) Sirve para react, angular y objetos
let edad2 = 18;
let eresMayor =
  edad2 >= 18
    ? "Eres mayor de edad" //el ? reemplaza if
    : "Eres menor de edad"; //  el : reemplaza else

//Puede ser de la siguiente forma tambien:
edad2 >= 18
  ? console.log("Eres mayor de edad")
  : console.log("Eres menor de edad");

// 2) SWITCH:
let dia = 2;

switch (dia) {
  case 0:
    console.log("Domingo");
    break; //break para que salga del switch
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
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
  default: // default equivale a else.
    console.log("El dia no existe");
    break;
}
