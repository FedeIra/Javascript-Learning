// EXPRESIONES Y STATEMENTS

/*


*/

// Expresion
1 + 1;
a = 3;
//Statement
if (condicion) {
  // bloque de código
}
// function statement (declarada)
function saludo() {
  console.log("hola");
}
// function expression. Es una variable que esta igualada a una funcion. La accedo desde una variable. Al ser variable el hositing no la reconoce si no esta declarada todavia.
var saludo = function () {
  console.log("Hola!");
};
console.log(function () {
  //hola;
});

console.log("Hola, como estas");

let saludo = "Hola mi nombre es " + nombre + " " + apellido + ".";

let saludo2 = `Hola mi nombre correcto es ${nombre} ${apellido}.`;

console.log(saludos1 + saludos2);

// PARA HTML: para meter codigo js necesito meterlo entre scripts. El codigo js se puede incluir en el head, en el body y en archivo externo
<script>alert("choose subclass");</script>;

alert("Hola alumnos che");

<script>document.write("WORLD OF WARCRAFT");</script>;
