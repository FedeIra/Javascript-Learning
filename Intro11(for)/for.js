var lista = [1,2,3,4,5];

for (var i = 0; i < lista.length; i++) { // tenes un valor que se llama i, y va a ir avanzando de a uno, hasta el maximo del length de la lista menos uno
    console.log(lista[i]); // entonces te va tirando los objetos de la lista del 0 al 4, es decir uno menos al length de la lista que seria 5, pero al contar desde 0 agarras todos los elementos
}


while (lista.length > 0) {
    console.log(lista.pop()); // te va eliminando los items del final y te los dice. Te vacia la lista.
}