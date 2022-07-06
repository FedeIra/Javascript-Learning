/* 
----------------------ESTRUCTURA DE CONTROL DE FLUJOS:-------------------

la finalidad es de dotar de cierta inteligencia a las paginas web

Modifican el flujo de ejecucion del programa. Va de arriba a abajo. Estas modifican el flujo lineal para abajo saltando a otros lados.

Condicionales y bucles


-------------------------CONDICIONALES: ---------------------- 
Son statements. Distinto a expresiones
 
el codigo toma funciones por condiciones. Ejemplo:cuando el usuario llena un formulario. 

Le planteamos si el usuario llena la casilla de nombre que la envie. como ejemplo

Se puede agregar varias condiciones a una sola

Se hace con el if, seguida de () que es la condicion, seguido de {} que es lo q va a hacer si se cumple la condicion

El else tambien esta pero no tiene pq estar agregado. Es para el caso de q no se cumpla la condicion que haga algo.

Para chequear si se cumple la condicion tenemos para usar los OPERADORES DE COMPARACION


-----------------OPERADORES DE COMPARACION:----------------------

==  Igual que..
!= Diferente que.. Siempre el igual va a la derecha
> mayor que ..
< menor que..
>= mayor o igual que..
<= menor o igual que
=== estrictamente igual que (comprueba tambien tipos, es decir, string, booleano o numero)
!== estrictamente diferente que... (comprueba tipos)

Aparte contamos con los OPERADORES LOGICOS

&&  Y logico (en python es el AND) se tienen q cumplir las dos condiciones
|| O logico (en python es el OR) se tiene que cumplir una de las dos condiciones


*/

if (!(1 == 2)) {
  // cualquier numero para js es true (incluso numeros negativos), salvo el 0 que es false
  console.log("Es true"); // agregandole el ! le digo lo contrario. Es decir, si 1 es distinto a 2 devolveme true.
} else {
  console.log("es false");
}

if (!!(1 == 2)) {
  // le puedo agregar todos los ! q quiera, haciendolo la negativa de la negativa de la negativa...
  console.log("Es true"); // en este aso te dice si paso lo contrario a que uno no es distinto a 2, entonces tirame true. Aca sale false entonces
} else {
  console.log("es false");
}

// Hay otros datos que de por si son verdaderos aparte de los numeros:
[];
{
}
("");
function hola() {}
// Todos estos datos son de por si true.

// Utilidad del ===
/* 
Comparison with the Strict Equality Operator:
Strict equality (===) is the counterpart to the equality operator (==). However, unlike the equality operator, which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion.

If the values being compared have different types, they are considered unequal, and the strict equality operator will return false.

Examples */

3 === 3; // true
3 === "3"; // false
/* In the second example, 3 is a Number type and '3' is a String type. */

1 == 1; // es true

1 == "1"; // tambien es true aunque sean valores de distintos tipos, string y numero. Te convierte el string a numero asi, no al revez.
// Pero a veces tambien quiero comparar el valor
1 === "1"; // aca te va tirar false, pq te compara el numero, pero tambien el dato
// PAra no tener estos errores es sugerible usar el triple igual (===)
// Para usar el triple, pero diciendo que son distintos se usa lo siguiente:
1 !== 2;

// En condicionales se usa mucho el AND, OR y NOT

// && and
// ||  or
// !  not

// Se pueden hacer combinaciones con todas estas operaciones
// ejemplo:  (!a || !b) aca te dice si es distinto a a o es distinto a b, hacer tal cosa
// otro ejemplo !(!a || !b)  aca te dice si NO es distinto a a o es distinto a b, hacer tal cosa

/* Use Conditional Logic with If Statements
if statements are used to make decisions in code. The keyword if tells JavaScript to execute the code in the curly braces under certain conditions, defined in the parentheses. These conditions are known as Boolean conditions and they may only be true or false.

When the condition evaluates to true, the program executes the statement inside the curly braces. When the Boolean condition evaluates to false, the statement inside the curly braces will not execute.

Pseudocode */

/* if (condition is true) {
  statement is executed
}
Example */

function test(myCondition) {
  if (myCondition) {
    return "It was true";
  }
  return "It was false";
}

test(true);
test(false);
/* test(true) returns the string It was true, and test(false) returns the string It was false.

When test is called with a value of true, the if statement evaluates myCondition to see if it is true or not. Since it is true, the function returns It was true. When we call test with a value of false, myCondition is not true and the statement in the curly braces is not executed and the function returns It was false.  */

/* Comparison with the Inequality Operator
The inequality operator (!=) is the opposite of the equality operator. It means not equal and returns false where equality would return true and vice versa. Like the equality operator, the inequality operator will convert data types of values while comparing.

Examples */

1 != 2; // true
1 != "1"; // false
1 != "1"; // false
1 != true; // false
0 != false; // false

/* Comparison with the Strict Inequality Operator:
The strict inequality operator (!==) is the logical opposite of the strict equality operator. It means "Strictly Not Equal" and returns false where strict equality would return true and vice versa. The strict inequality operator will not convert data types.

Examples */

3 !== 3; // false
3 !== "3"; // true
4 !== 3; // true
