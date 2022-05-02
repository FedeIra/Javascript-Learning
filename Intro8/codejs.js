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

if (!(1 == 2)) {                      // cualquier numero para js es true (incluso numeros negativos), salvo el 0 que es false
    console.log("Es true")              // agregandole el ! le digo lo contrario. Es decir, si 1 es distinto a 2 devolveme true.
}
else {
    console.log("es false")
}

if (!!(1 == 2)) {                      // le puedo agregar todos los ! q quiera, haciendolo la negativa de la negativa de la negativa...
    console.log("Es true")                 // en este aso te dice si paso lo contrario a que uno no es distinto a 2, entonces tirame true. Aca sale false entonces
}
else {
    console.log("es false")
}

// Hay otros datos que de por si son verdaderos aparte de los numeros:
[]
{}
""
function hola (){};
// Todos estos datos son de por si true.

// Utilidad del ===

1 == 1 // es true

1 == "1" // tambien es true aunque sean valores de distintos tipos, string y numero. Te convierte el string a numero asi, no al revez.
// Pero a veces tambien quiero comparar el valor
1 === "1" // aca te va tirar false, pq te compara el numero, pero tambien el dato
// PAra no tener estos errores es sugerible usar el triple igual (===)
// Para usar el triple, pero diciendo que son distintos se usa lo siguiente:
1 !== 2

// En condicionales se usa mucho el AND, OR y NOT

// && and
// ||  or
// !  not

// Se pueden hacer combinaciones con todas estas operaciones
// ejemplo:  (!a || !b) aca te dice si es distinto a a o es distinto a b, hacer tal cosa
// otro ejemplo !(!a || !b)  aca te dice si NO es distinto a a o es distinto a b, hacer tal cosa