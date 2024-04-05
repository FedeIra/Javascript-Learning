/*
Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher.
In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

function rot13(str) {
  const alphabetx2 = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  let stringToArray = str.split('');

  let decipheredCode = [];

  for (let index = 0; index < stringToArray.length; index++) {
    if (alphabetx2.includes(stringToArray[index])) {
      let indexAssignLetter = alphabetx2.indexOf(stringToArray[index]) + 13;
      decipheredCode.push(alphabetx2[indexAssignLetter]);
    } else {
      decipheredCode.push(stringToArray[index]);
    }
  }

  decipheredCode = decipheredCode.join('');

  return decipheredCode;
}

// rot13('SERR PBQR PNZC'); // FREE CODE CAMP
// rot13('SERR CVMMN!'); // FREE PIZZA!
// rot13('SERR YBIR?'); // FREE LOVE?
// rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.'); // THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.

// ----------------------------------------
// Optimized solution:
function optimizedRot13(str) {
  // A function to shift a single character
  function shiftChar(char) {
    let charCode = char.charCodeAt(0);
    // Check if the character is uppercase alphabetic
    if (charCode >= 65 && charCode <= 90) {
      // Shift the character code by 13, wrapping around if necessary
      charCode = ((charCode - 65 + 13) % 26) + 65;
    }
    return String.fromCharCode(charCode);
  }

  // Transform each character of the input string
  let result = str.split('').map(shiftChar).join('');
  return result;
}

console.log(optimizedRot13('SERR PBQR PNZC'));
