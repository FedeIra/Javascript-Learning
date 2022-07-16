// EVENT LOOP

function saludarMasTarde() {
  var saludo = "Hola";
  setTimeout(function () {
    console.log(saludo);
  }, 3000);
}
saludarMasTarde();

function otroSaludo(saludo) {
  setTimeout(() => console.log(saludo), 6000);
}

otroSaludo("Hola Fede");
