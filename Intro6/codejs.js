/* 

Puedo crear varias variables de la siguiente forma */ 

var a =1, b = 2, c= 3

/* 

Arrays o arreglos o matrices  

En lugar de ir creando distintos espacios para cada variable que creamos, creamos un espacio comun donde vamos a almacenar dos o mas variables. 

Es como una gran variables donde almacenamos varios valores

Como un archivador con varias pestanias y cada pestania es un valor. O como una cajonera, cada cajon un valor, pero en la misma cajonera.

*/

var articles = ["snickers", "trouser", "shirt", True, 0, "sockets"]

var articles2 = new Array("jacket", 1.56, False) // estas dos son las formas de crear arrays o conjunto de valores. Es parecido a las listas de python

// el primer elemento de un array arranca desde 0. Los podes usar con el [0] , [1], etc.

alert(articles[2]); // con este agarras el tercer articulo del array de articulos, es decir, shirt

/* 
PROPIEDAD Y METODOS DEL ARRAY IMPORTANTES

Al ser un lenguaje orientada a metodos (javascript), tiene propiedades y metodos. Igual que python con las clases.

Propiedad lenght: cuanto es la longitud o elementos que tiene un array
*/

articles.length


console.log(articles.length);
