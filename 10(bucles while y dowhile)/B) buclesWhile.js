/* 
Los bucles tambien hace control de flujo. Especificamente, hacen que el flujo vuelva para atras y se repita en cierta forma

Hay dos tipos de bucles: los determinados e indeterminados. Los dos repiten codigo. Repiten x veces unas cuantas de las lineas.

Los determinados sabemos cuantas veces van a repetir esas lineas. For (for)

Los indeterminados no sabemos a priori cuantas veces van a repetir ciertas lineas (While y Do While)

while = mientras

While (condicion) {
    //codigo a repetir mientas la condicion del bucle sea cierta
}
// continuacion del programa

Si la condicion siempre es verdad entonces se va a repetir infinitamente el bucle.

En un momento la condicion deja de ser verdad para ser mentira y continua la ejecucion del programa.


BUCLE DO WHILE

la utilidad es exactamente igual q el bucle while pero una matiz distinta

do {
    //codigo a repetir mientras la condicion del bucle sea cierta
} while (condicion);
// continuacion del programa

La diferencia con el while es q si la condicion del while no se cumple entonces no se llega a realizar nunca.

En Do While, se hace la primera vez, y luego se continua haciendo en la medida que cumpla su condicion

El bucle determinado for sabemos cuantas veces va a ejecutar el codigo en su interior

BUCLES FOR:

for (inicio; condicion; incremento/decremento) {
    // codigo a repetir mientras la condicion del bucle sea cierta
}
// continuacion del programa
*/

// BUCLES FOR

// primero le decis por donde arranca, luego donde termina y por ultimo como avanza. En el inicio en general arrancas con var i, por un tema de practicas

/*
function imprime1aN(n) {
    for (var i=1; i <= n; i++) {
        if (i % 2 === 0) { // con el === comparo tipo de dato tambien
            console.log(i);
        }
        if (i > 200) { // hasta q i no sea mayor a 200 el siguiente for no se va a ejecutar pq no cumple con esta condicion. Entonces luego de 200 imprime 1 a 9
            for (var j = 0; j<10;j++) {
                console.log(j);
            }
            return; // con el return salis del bucle
        }
    }
}

imprime1aN(300); 

function matriz(n,m) {
    for (var i=0; i<n; i++) {
        for (var j = 0; j < m ; j++){
            console.log(i+ "," + j);
        }
    }
}
matriz(2,2); 

//BUCLE WHILE
Mientras tal condicion sea verdadera, este bloque de codigos se va a repetir indifinidamente.

while (condicion) {
    //bloque de codigo
}

var i = 0;

while (i < 100) {
    console.log(i);
    i++;
} */

function matriz(n, m) {
  var j = 0;
  var i = 0;
  while (i < n) {
    while (j < m) {
      console.log(i, j);
      j = j + 1;
    }
    j = 0;
    i = i + 1;
  }
}

matriz(2, 3);

// en el for sabes cuando va a terminar. Si no sabes la condicion de parada tenes que usar si o si while
