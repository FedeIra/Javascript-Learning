/*
Palindrome Checker
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.
*/

function palindrome(str) {
  // 1) remove all except letters and numbers
  const strClean = str.replace(/[^a-z0-9]+/gi, '');

  // 2) all to lowercase
  const strLowerCase = strClean.toLowerCase();

  // 3) make two arrays diving first and second half without middle
  const splitStrPart1 = strLowerCase
    .slice(0, strLowerCase.length / 2)
    .split('');

  const splitStrPart2 = strLowerCase
    .slice(Math.round(strLowerCase.length / 2))
    .split('')
    .reverse();

  // 4) compare arrays and if equal return true, else false
  for (let index = 0; index < splitStrPart1.length; index++) {
    if (splitStrPart1[index] !== splitStrPart2[index]) {
      console.log('is not the same letter');
      return false;
    }
  }
  return true;
}

// palindrome('efcsYacfe');
// palindrome('_e1Y1e');
// palindrome('race car');
// palindrome('not a palindrome');
// palindrome('A man, a plan, a canal. Panama');
// palindrome('neveroddoreven');
// palindrome('0_0 (: /- :) 0-0');

// OPTIMIZED SOLUTION
function palindrome(str) {
  // Limpiar la cadena y convertirla a minúsculas
  const strClean = str.replace(/[^a-z0-9]/gi, '').toLowerCase();

  // Calcular la mitad de la longitud de la cadena limpia
  const halfLength = Math.floor(strClean.length / 2);

  // Comparar caracteres desde los extremos hacia el centro
  for (let i = 0; i < halfLength; i++) {
    if (strClean[i] !== strClean[strClean.length - 1 - i]) {
      console.log('No es un palíndromo');
      return false;
    }
  }

  console.log('Es un palíndromo');
  return true;
}
