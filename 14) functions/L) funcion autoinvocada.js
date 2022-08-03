// FUNCION AUTOINVOCADA

/*
Es una funcion que la defino, la pongo entreparentesis e inmediatamente la ejecuto.
*/
var instructor = "Fede";

(function () {
  if (true) {
    var instructor = "Franco";
    console.log(instructor); //Franco
  }
})();

console.log(instructor); // Fede

//FUNCION AUTOINVOCADA

(function funcionAutoinvocada(argumento) {
  console.log(argumento);
})("Hola, soy el argumento"); // Hola, soy el argumento

var variableArgumento = "Hola soy la variable con el argumento";

(function funcionAutoinvocada2(argumento2) {
  console.log(argumento2);
})(variableArgumento); // Hola soy la variable con el argumento

(function funcionAutoinvocada3(argumento3) {
  console.log(argumento3);
})(a); // ReferenceError: a is not defined

(function funcionAutoinvocada3() {
  console.log("Soy una funcion autoinvocada simple");
})();
