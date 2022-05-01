/* 

Puedo crear varias variables de la siguiente forma */ 

var a =1, b = 2, c= 3

/* 

Arrays o arreglos o matrices  

En lugar de ir creando distintos espacios para cada variable que creamos, creamos un espacio comun donde vamos a almacenar dos o mas variables. 

Es como una gran variables donde almacenamos varios valores

Como un archivador con varias pestanias y cada pestania es un valor. O como una cajonera, cada cajon un valor, pero en la misma cajonera.

*/

var articles = ["snickers", "trouser", "shirt", true, 0, "sockets"]

var articles2 = new Array("jacket", 1.56, false) // estas dos son las formas de crear arrays o conjunto de valores. Es parecido a las listas de python

// el primer elemento de un array arranca desde 0. Los podes usar con el [0] , [1], etc.

// alert(articles[2]); // con este agarras el tercer articulo del array de articulos, es decir, shirt

/* 
PROPIEDAD Y METODOS DEL ARRAY IMPORTANTES

Al ser un lenguaje orientada a metodos (javascript), tiene propiedades y metodos. Igual que python con las clases.

Propiedad lenght: cuanto es la longitud o elementos que tiene un array
*/

articles.length = 4;


console.log(articles.length);

var articles3 = new Array("jacket", 1.56, false)

// para agregar un elemento mas esta el metodo push. Los agrega al final

articles3.push("hat")

// el metodo unshift hace lo mismo q el push pero los agrega al ppio

articles3.unshift(4)

console.log(articles3) // te va a imprimir = [ 4, 'jacket', 1.56, false, 'hat' ]

// metodo shift es para eliminar elementos al principio y metodo pop para eliminar al final

articles3.shift()
articles3.pop()

console.log(articles3) // es igual a = [ 'jacket', 1.56, false ]