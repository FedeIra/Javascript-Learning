/*
Roman Numeral Converter

Convert the given number into a roman numeral.

Roman numerals	Arabic numerals
M	            1000
CM	            900
D	            500
CD	            400
C	            100
XC	            90
L	            50
XL	            40
X	            10
IX	            9
V	            5
IV	            4
I	            1

All roman numerals answers should be provided in upper-case.

Idea general:
1) Armar un string vacío
2) meter un for
3) el for tiene que ir chequean el % de cada divisón por los números de arriba y si tiene un resto descontarle ese número al num y agregar el correspondiente string al string vacio.
4) retornar el string
*/

function convertToRoman(num) {
  // 1) Define roman numbers
  const romanNumbersAssigns = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  const romanNumberIndex = Object.keys(romanNumbersAssigns);

  let changingNumber = num;

  // 2) Create final roman number to be returned:
  let finalRomanNumber = [];

  // 3) map roman number index, doing the maths and forming roman number final:
  for (let indexRomanNumber = 0; changingNumber > 0; indexRomanNumber++) {
    // 4) Assign amount of roman specific letters to be added
    const amountLettersAssigned = Math.floor(
      changingNumber / romanNumbersAssigns[romanNumberIndex[indexRomanNumber]]
    );
    // 5) if there are roman letter to be add
    if (amountLettersAssigned > 0) {
      for (let index = 0; index < amountLettersAssigned; index++) {
        // 6) add roman letters
        finalRomanNumber.push(romanNumberIndex[indexRomanNumber]);
        // 6) discount numbers to total initial number
        changingNumber =
          changingNumber -
          romanNumbersAssigns[romanNumberIndex[indexRomanNumber]];
      }
    }
  }

  finalRomanNumber = finalRomanNumber.join('');
  return finalRomanNumber;
}

// IMPROVED VERSION:
function convertToRoman2(num) {
  const romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let result = '';

  // Iterate through each numeral, from largest to smallest
  for (let key in romanNumerals) {
    // Find the highest numeral that fits into the remaining number
    while (num >= romanNumerals[key]) {
      // Add the corresponding numeral to the result string
      result += key;
      // Subtract its value from the number
      num -= romanNumerals[key];
    }
  }

  return result;
}

convertToRoman2(2);
// convertToRoman(3);
// convertToRoman(4);
// convertToRoman(5);
// convertToRoman(9);
// convertToRoman(12);
// convertToRoman(16);
// convertToRoman(29);
// convertToRoman(44);
// convertToRoman(45);
// convertToRoman(68);
// convertToRoman(83);
// convertToRoman(97);
// convertToRoman(99);
// convertToRoman(400);
// convertToRoman(500);
// convertToRoman(501);
// convertToRoman(649);
// convertToRoman(798);
// convertToRoman(891);
// convertToRoman(1000);
// convertToRoman(1004);
// convertToRoman(1006);
// convertToRoman(1023);
// convertToRoman(2014);
// convertToRoman(3999);
