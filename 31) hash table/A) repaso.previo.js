/* 
!HASH TABLE
Es una función de javascript.

La función de hash (más abajo) es algo interno que usa la función hash table. La hash table es la estructura de datos y en cada posición va guardando algo. La hash table para guardar y saber dónde está guardado usa la hash function.

Los objetos trabajan como si fueran hash tables (incluyendo el lexical environmente). Por eso tienen la búsqueda tan rápida. Por adentro, los datos están implementados como si fueran una hash table.

A modo de ejemplo> tenemos los siguientes casilleros para guardar remeras:

  0   1   2   3   4   5   6   7   8   9
 [ ] [ ] [ ] [ ] [K] [ ] [ ] [ ] [ ] [G]   // esto es el hash table

Después tenes método para meter, sacar, obtener, hashear, etc.

  Considerando el largo del valor del name los voy a guardar en cada casillero:
*/
var remera = {
  name: "Ginobilli",
  number: 20,
  team: "Spurs",
};

function hash1(remera) {
  return remera.name.length();
} /* Está es una mala función. Lo explico: */

/* Remera:
- Ginobilli 20 --> hash1(..) --> 9 (va al casillero 9)
- Kobe 8 --------> hash1(..) --> 4 (va al casillero 4)
- Nash 13 --------> hash1(..) --> 4 OPA! Ya estaba la de Kobe. ESTO ES UNA COLISIÓN

Cuando a partir de dos entradas, al aplicar la función hash van al mismo bracket o casillero.

Hay formas de resolver esto. Una de ellas, y la más común, es dentro de ese bracket armar una substructura como un array o un objeto:

  0   1   2   3      4     5   6   7   8   9
 [ ] [ ] [ ] [ ] [[K, N]] [ ] [ ] [ ] [ ] [G]

HASH: Las funciones de hash tienen a evitar esas colisiones. Ya hay funciones de hash conocidas que distribuyen los valores para evitar las colisiones. La función que hicimos antes es PÉSIMA!! Ni siquiera garantiza que pueda entrar a un nombre de más de 9 letras. Se puede mejorar!!:
*/

function hash1(remera) {
  return (
    remera.name.length() % 10
  ); /* Nos aseguramos de que caiga entre el casillero 0 y 9 (10 posiciones). El % es el resto que te da por dividirlo por 10 por lo que siempre te va a retornar un valor entre 0 y 9. */
}
/* Entonces así organizamos mejor los casilleros y permite que se puedan distribuir remeras con nombres más largos que 10:
- Ginobilliiii 20 --> hash1(..) --> 12 % 10 ==> 2
- Ginobilli 20 -----> hash1(..) --> 9 % 10 ==> 9
- Kobe 8 -----------> hash1(..) --> 4 % 10 ==> 4
- Nash 13 ----------> hash1(..) --> 4 % 10 ==> 4

  0   1   2   3      4     5   6   7   8   9
 [ ] [ ] [G] [ ] [[K, N]] [ ] [ ] [ ] [ ] [G]

Pero sigue sin solucionarse la colisión: [K/N]. Para solucionar esto:
*/

function hash1(remera) {
  return (
    (remera.name.length() + remera.number) %
    10 /* uso el valor del número para distriburlo por otros casilleros */
  );
} /* Sigue sin ser una función muy eficiente, pero mejoró. Te soluciona la COLISIÓN:

- Ginobilli 20 -----> hash1(..) --> (9 + 20) % 10 ==> 9
- Kobe 8 -----------> hash1(..) --> (4 + 8) % 10 ==> 2
- Nash 13 ----------> hash1(..) --> (4 + 13) % 10 ==> 7

  0   1   2   3   4   5   6   7   8   9
 [ ] [ ] [K] [ ] [N] [ ] [ ] [ ] [ ] [G]

Lo podríamos haber guardado de una manera random, pero cuándo la quiera buscar? Ahora la puedo buscar con la siguiente formula: remera.name.length() + remera.number
*/
