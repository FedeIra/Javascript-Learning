function convertCtoF(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

convertCtoF(30);

//-------------------------------------------------------

function reverseString(str) {
  return str.split('').reverse().join('');
}

reverseString('hello'); //olleh

//-------------------------------------------------------
function factorialize(num) {
  if (num === 1 || num === 0) {
    return 1;
  }
  return num * factorialize(num - 1);
}

factorialize(5); //120
factorialize(10); // 3628800
factorialize(20); // 2432902008176640000
factorialize(0); // 1

const factorialize2 = (num) =>
  num === 1 || num === 0 ? 1 : num * factorialize2(num - 1);

factorialize2(5); // 120
factorialize2(10); // 3628800
factorialize2(20); // 2432902008176640000
factorialize2(0); // 1

//-------------------------------------------------------
function findLongestWordLength(str) {
  return str
    .split(' ')
    .map((word) => word.length)
    .reduce((acc, number) => (number > acc ? (acc = number) : acc), 0);
}

findLongestWordLength('The quick brown fox jumped over the lazy dog'); // 6
findLongestWordLength('May the force be with you'); // 5
findLongestWordLength('Google do a barrel roll'); // 6
findLongestWordLength(
  'What is the average airspeed velocity of an unladen swallow'
); // 8
findLongestWordLength(
  'What if we try a super-long word such as otorhinolaryngology'
); // 19

//-------------------------------------------------------
function largestOfFour(arr) {
  return arr.map((array) =>
    array.reduce((acc, number) => (number > acc ? number : acc))
  );
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]); // [ 5, 27, 39, 1001 ]

largestOfFour([
  [4, 9, 1, 3],
  [13, 35, 18, 26],
  [32, 35, 97, 39],
  [1000000, 1001, 857, 1],
]); // [ 9, 35, 97, 1000000 ]

largestOfFour([
  [17, 23, 25, 12],
  [25, 7, 34, 48],
  [4, -10, 18, 21],
  [-72, -3, -17, -10],
]); // [ 25, 48, 21, -3 ]

//-------------------------------------------------------
const confirmEnding = (str, target) =>
  str.slice(-target.length) === target ? true : false;

confirmEnding('Bastian', 'n'); // true
confirmEnding('Congratulation', 'on'); // true
confirmEnding('Connor', 'n'); // false
confirmEnding(
  'Walking on water and developing software from a specification are easy if both are frozen',
  'specification'
); // false
confirmEnding('He has to give me a new name', 'name'); // true
confirmEnding('Open sesame', 'same'); // true

//-------------------------------------------------------
const repeatStringNumTimes = (str, num) => {
  let string = '';

  while (num > 0) {
    string = string.concat(str);
    num--;
  }
  return string;
};

repeatStringNumTimes('*', 3); // ***
repeatStringNumTimes('abc', 3); // abcabcabc
repeatStringNumTimes('abc', 4); // abcabcabcabc
repeatStringNumTimes('abc', 1); // abc
repeatStringNumTimes('*', 8); // ********
repeatStringNumTimes('abc', -2); // ``
repeatStringNumTimes('abc', 0); // ""

// Otra forma de hacerlo:
function repeatStringNumTimes2(str, num) {
  return str.repeat(num);
}

repeatStringNumTimes2('abc', 3); // abcabcabc

// Otra forma:
function repeatStringNumTimes3(str, num) {
  let accumulatedStr = '';

  for (let i = 0; i < num; i++) {
    accumulatedStr += str;
  }

  return accumulatedStr;
}

repeatStringNumTimes3('abc', 3); // abcabcabc

// Otra forma con recursividad:
function repeatStringNumTimes4(str, num) {
  if (num < 1) {
    return '';
  } else {
    return str + repeatStringNumTimes4(str, num - 1);
  }
}

// recursividad con arrow function:
const repeatStringNumTimes5 = (str, num) =>
  num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';

repeatStringNumTimes5('abc', 3); // abcabcabc

//-------------------------------------------------------
const truncateString = (str, num) =>
  str.length > num ? str.split('').splice(0, num).join('').concat('...') : str;

truncateString('A-tisket a-tasket A green and yellow basket', 8); // A-tisket....
truncateString('Peter Piper picked a peck of pickled peppers', 11); // Peter Piper...
truncateString(
  'A-tisket a-tasket A green and yellow basket',
  'A-tisket a-tasket A green and yellow basket'.length
); // A-tisket a-tasket A green and yellow basket
truncateString(
  'A-tisket a-tasket A green and yellow basket',
  'A-tisket a-tasket A green and yellow basket'.length + 2
); // A-tisket a-tasket A green and yellow basket
truncateString('A-', 1); // A...
truncateString('Absolutely Longer', 2); // Ab...

// Otra opción:
function titleCase(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map((val) => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
    .join(' ');
}

titleCase("I'm a little tea pot");

//-------------------------------------------------------
const frankenSplice = (arr1, arr2, n) =>
  arr2.slice(0, n).concat(arr1).concat(arr2.slice(n));

frankenSplice(['claw', 'tentacle'], ['head', 'shoulders', 'knees', 'toes'], 2); // ["head", "shoulders", "claw", "tentacle", "knees", "toes"]
frankenSplice([1, 2, 3], [4, 5], 1); // [4, 1, 2, 3, 5]
//-------------------------------------------------------
const bouncer = (arr) => arr.filter((element) => element);

bouncer([7, 'ate', '', false, 9]); // [7, "ate", 9]

// Otra solución:
function getIndexToIns2(arr, num) {
  return arr.filter((val) => num > val).length;
}

getIndexToIns2([10, 20, 30, 40, 50], 35); // 3

// Otra solución:
function getIndexToIns3(arr, num) {
  return arr
    .concat(num)
    .sort((a, b) => a - b)
    .indexOf(num);
}

getIndexToIns3([10, 20, 30, 40, 50], 35); // 3

//-------------------------------------------------------
const mutation = (arr) => {
  let array1 = arr[1].toLowerCase().split('');
  let array2 = arr[0].toLowerCase().split('');

  for (let i = 0; i < array1.length; i++) {
    if (!array2.includes(array1[i])) {
      return false;
    }
  }
  return true;
};

mutation(['hello', 'hey']); // false
mutation(['hello', 'Hello']); // true
mutation(['hello', 'Hello']); // true
mutation(['zyxwvutsrqponmlkjihgfedcba', 'qrstu']); // true
mutation(['Mary', 'Army']); // true
mutation(['Mary', 'Aarmy']); // true
mutation(['Alien', 'line']); // true
mutation(['Noel', 'Ole']); // true

//-------------------------------------------------------

function chunkArrayInGroups(arr, size) {
  let finalArray = [];
  while (arr.length > 0) {
    finalArray.push(arr.splice(0, size));
  }
  return finalArray;
}

chunkArrayInGroups(['a', 'b', 'c', 'd'], 2); // [['a', 'b'], ['c', 'd']]
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3); // [[0, 1, 2], [3, 4, 5]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2); // [[0, 1], [2, 3], [4, 5]]
