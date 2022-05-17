/*
    BUCLES EN GENERAL: si necesitamos q dependiendo de cierta condicion se ejecuten lineas de codigo hasta q se ejecuten la condicion pero entra en juego el incremento o decremento q repite las lineas de codigo hasta que el incremento o decremento llegue a cierto valor.

    Para esto sirve el while, do while, for, y for/in for/of
    
    */
// FOR: es una estructura de 3 partes, q son las mismas q el while. El i seria el contador

for (let index = 0; index < 10; index++) {
  // el index inicial es la inicializacion de la variable. La segunda parte es la condicion para que se ejecute. La tercera parte es el decremento o incremento. Todo dentro de los parentesis.
  console.log("for" + index); // lo que esta dentro del {} es lo q ejecuta o las lineas de codigo que va a ejecutar el for
}

let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];

for (let i = 0; i < numeros.length; i++) {
  // se va a repetir la cantidad de elementos del arreglo
  console.log(numeros[i]); // el i pasa a ser cada posicion o numero de elemento del array
}

// FOREACH: el metodo forEach es una forma mas declarativo de ejecutar ese ciclo

//FOR IN: es un loop q permite recorrer las propiedades de un objeto. Es un for especial para un objeto. Permite recorrer y iterar los atributos y propiedades de un objeto

const objeto = {
  nombre: "Federico",
  apellido: "Irarrazaval",
  edad: 35,
};

for (const propiedad in objeto) {
  //te recorre o itera todas las propiedades de un objeto
  console.log(objeto);
  console.log(objeto.apellido); // puedo pedirle q devuelva el valor de una de sus propiedades
  console.log(`Key:${propiedad}, Value: ${objeto[propiedad]}`);
}

// FOR OF: nos va a permitir recorrer todos los elementos de cualquier objeto q sea iterable en JS. Sirve mas para arreglos en general. Recorre cualquier elemento de JS q sea iterable, arreglos o cadenas de texto q cada caracter se puede recorrer.

for (const elemento of numeros) {
  //aca le pedimos q recorra cada elemento q se encuentra dentro de numeros
  console.log(elemento); //te imprime los numeros del arreglo
}

let cadena = "Hola Mundo"; //tambien es iterable por cada uno de los caracteres de la variable
for (const caracter of cadena) {
  console.log(caracter);
}

/*
BUCLES FOR:

for (inicio; condicion; incremento/decremento) {
    // codigo a repetir mientras la condicion del bucle sea cierta
}
// continuacion del programa


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
*/
