/* 
!HASH TABLE
Es otra estructura de datos. MUY IMPORTANTE.

En Js los objetos están hechos por medio de hash tables y en JS todo es un objeto.

Cómo hago para acceder a un objeto sin tener que recorrer toda la lista. Esto tiene SOLUCIÓN y conozco exactamente el lugar donde debería haber quedado guardada la info o el objeto.

Ej: si tenes un millón espacios donde podría haber quedado guardado...Es imposible acordarte dónde está cada uno... peeeero si sé el método por el que se agregó a la memoria cada objeto puedo acceder al objeto que quiera.

Acá entra en juego el HASHTABLE: tenemos un input de info que tenemos que guardar. Esa info. pasa a través de una función hash y te devuelve la posición en memoria donde va a quedar guardado ese dato.

La función hash puede ser cualquier cosa, en la medida que te devuelva UN SOLO espacio para cada objeto. 

Si por el hash guardas dos cosas en un mismo espacio, COLISIONAN. Podes agregarle cosas a la función hash para que no se guarde todo en un mismo lugar y así resolver la colisión. Podes agregarle un array en otra posición u objeto. En vez de guardar el dato directamente en la memoria, si hay dos o más datos para el mismo espacio le puedo meter una lista enlazada por ejemplo. El tema de hacer esto una lista enlazada es q va a ser lento para la búsqueda. 

Lo podemos solucionar con un objeto generando propiedades para cada uno de los datos. Y a los objetos podemos acceder directamente.
*/
