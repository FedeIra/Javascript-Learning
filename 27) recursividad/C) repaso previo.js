/* 
RECURSIÓN:
Funciones que se llaman a si mismas. Recursión es cuando una función se llama a si misma. Y también hay una condición de corte "hasta acá llegas". Cuando llega a ese punto, empieza a volver hacía atrás hasta que llega a la primera de todas. Cuando llega ahí continúa con su flujo normal.

Hay algunos problemas que por naturaleza son más fáciles resolver con recursividad. Ej: fibonachi
*/

// Factorial 4! = 4 x 3 x 2 x 1 / 4 x 3!
// Factorial 3! = 3 x 2 x 1 / 3 x 2!
// Factorial 2! = 2 x 1 / 2 x 1!
// Factorial 1! = 1
// Factorial 0! = 1

/* Si no le metas un condicional de corte se mete en un loop infinito */

// Hipotesis: suponemos que x es un número entero
function factorial(x) {
  // Casos de corte / caso base
  if (x === 0 || x === 1)
    return 1; // Cuando -1 < x < 2. Esto es para devolver factorial de 1 y 0 = 1
  else if (x < 0) return 0; // para el caso de que sean número negativos
  return (
    x /* Va a arrancar siendo 4 */ *
    factorial(
      x - 1
    ) /* el 4 se multiplica por 4-1, es decir 3. Luego, para la próxima función se le resta 1 */
  ); // esta es la parte de RECURSIÓN
}

factorial(4); // 24

/* EN LIMPIO: */

function factorial(x) {
  if (x === 0 || x === 1) return 1; //
  else if (x < 0) return 0;
  return x * factorial(x - 1);
}

factorial(4); // 24

/* return x
Antes de devolver o retornar x, se ejecuta de vuelta factorial(x-1) que es una función. Es decir, no se termina de ejecutar completamente la función cuando ya la estamos invocando nuevamente. Entonces el execution stack es el siguiente:

EXECUTION STACK:
factorial(1) ACÁ LLEGAS AL CORTE PQ SE CUMPLE EL IF. ENTONCES ACÁ SE VUELVE PARA ATRÁS. 
factorial(2)
factorial(3)
factorial(4) 
Global
*/

/* 
CUMPLIDO EL CORTE SE VAN ELIMINANDO LAS TAREAS DEL EXECUTION STACK en el siguiente orden:
factorial(1), Acá la x vale 1
factorial(2), Acá la x vale 2
factorial(3), Acá la x vale 6
factorial(4), Acá la x vale 24
Entonces, te devuelve 24!!!

EN OTRAS PALABRAS, PARA RETIERAR:

factorial(4) ==> 4 * factorial(x-1) STOP! (no sé cuánto es factorial(x-1)) SE VA AL EXECUTION STACK
factorial(3) ==> 3 * factorial(x-1) STOP! (no sé cuánto es factorial(x-1)) SE VA AL EXECUTION STACK
factorial(2) ==> 2 * factorial(x-1) STOP! (no sé cuánto es factorial(x-1)) SE VA AL EXECUTION STACK
factorial(1) ==> Entra al IF por lo que retorna 1 SE VA AL EXECUTION STACK (al ser el último en entrar es el último en salir también y te da el valor de x para el próximo factorial(2) que está esperando en el execution stack, y así so on y so on por lo que puede resolverse las funciones retornando la última el valor de x último que sería = 4 * factorial(x-1) que es equivalente a 6 pq el anterior (3) era 3 * 2)
*/
