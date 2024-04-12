/* EXPRESIONES REGULARES

Las expresiones regulares son patrones que se utilizan para hacer coincidir combinaciones de caracteres en cadenas. En JavaScript, las expresiones regulares también son objetos. Estos patrones se utilizan con los métodos exec() y test() de RegExp, y con match(), matchAll(), replace(), replaceAll() (en-US), search() y split() métodos de String. Este capítulo describe las expresiones regulares de JavaScript.

Son una secuencia de caracteres que forma un patrón de búsqueda, principalmente utilizada para la búsqueda de patrones
de cadenas de caracteres.

No es algo exclusivo de javascript. Facilita la vida para muchas cosas.

https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions */

// Ejemplo de expresión regular
function telephoneCheck2(str) {
  // Consolidated and optimized regex pattern checks all conditions at once
  const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([-\s]?)\d{3}([-\s]?)\d{4}$/;

  if (phoneRegex.test(str)) {
    console.log("It's a valid phone number.");
    return true;
  } else {
    console.log("It's NOT a valid phone number.");
    return false;
  }
}

/*
  ^: Este símbolo se usa para indicar el inicio de una cadena. Si se coloca al principio de una expresión regular, la búsqueda coincidirá solo si el patrón se encuentra al comienzo de la cadena.

\s: Representa un carácter de espacio en blanco. Esto incluye espacios, tabulaciones, saltos de página y otros caracteres de espacio en blanco. Es útil para dividir texto basado en espacios y validar si hay espacios en las cadenas .

?: Este símbolo se utiliza para indicar que el carácter o grupo precedente es opcional. Significa que el elemento puede aparecer cero o una vez. Por ejemplo, colou?r coincidiría tanto con "color" como con "colour".

\d: Representa cualquier dígito decimal (0-9). Es una forma corta para el conjunto [0-9], y es ampliamente utilizado en patrones que requieren números, como fechas y números de teléfono.

$: Este símbolo se usa para indicar el final de una cadena. Si se coloca al final de una expresión regular, la búsqueda coincidirá solo si el patrón se encuentra al final de la cadena.
  */
// telephoneCheck('555-555-5555'); // 1) true
// telephoneCheck('1 555-555-5555'); // 2) true
// telephoneCheck('1 (555) 555-5555'); // 3) true
// telephoneCheck('5555555555'); // 4) true
// telephoneCheck('555-555-5555'); // 5) true
// telephoneCheck('(555)555-5555'); // 6) true
// telephoneCheck('1(555)555-5555'); // 7) true
// telephoneCheck('555-5555'); // 8) false
// telephoneCheck('5555555'); // 9) false
// telephoneCheck('1 555)555-5555'); // 10) false
// telephoneCheck('1 555 555 5555'); // 11) true
// telephoneCheck('1 456 789 4444'); // 12) true
// telephoneCheck('123**&!!asdf#'); // 13) false
// telephoneCheck('55555555'); // 14) false
// telephoneCheck('(6054756961)'); // 15) false
// telephoneCheck('2 (757) 622-7382'); // 16) false
// telephoneCheck('0 (757) 622-7382'); // 17) false
// telephoneCheck('-1 (757) 622-7382'); // 18) false
// telephoneCheck('2 757 622-7382'); // 19) false
// telephoneCheck('10 (757) 622-7382'); // 20) false
// telephoneCheck('27576227382'); // 21) false
// telephoneCheck('(275)76227382'); // 22) false
// telephoneCheck('2(757)6227382'); // 23) false
// telephoneCheck('2(757)622-7382'); // 24) false
// telephoneCheck('555)-555-5555'); // 25) false
// telephoneCheck('(555-555-5555'); // 26) false
// telephoneCheck('(555)5(55?)-5555'); // 26) false
// telephoneCheck('55 55-55-555-5'); // 27) false
// telephoneCheck('11 555-555-5555'); // 28) false
