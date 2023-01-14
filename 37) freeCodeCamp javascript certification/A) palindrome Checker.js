/*
Palindrome Checker
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.

*/

function palindrome(str) {
  // 1) remove all except letters
  // 2) all to lowercase
  // 3) rule out if lenght is not impair
  // 4) if pair, remove middle letter
  // 4) make two arrays diving first and second half without middle
  // 5) compare arrays and if equal return true, else false

  // 1) remove all except letters
  // 2) all to lowercase

  let str2 = str;

  str = str
    .replace(/[^a-z]+/gi, '')
    .toLowerCase()
    .split('')
    .filter((e, index) => index /* ? */ === str2.length / 2 + 1 /*  */);

  console.log(str);

  // 3) rule out if length is not impair
  // 4) if pair, remove middle letter
  console.log(str.length);
  console.log(str);
  // if (str.length % 2 !== 0) {
  //   str.split(str.length/2, str.length/2+1)
  // }

  let part_one = str.slice(0, str.length / 2);
  let part_two = str
    .slice(str.length / 2 + 1)
    .split('')
    .reverse()
    .join('');

  console.log(part_one);
  console.log(part_two);

  if (part_one === part_two) {
    return true;
  }

  return false;
}

palindrome('eye');
// palindrome('_eYe');
// palindrome('race car');
// palindrome('not a palindrome');
// palindrome('A man, a plan, a canal. Panama');
// palindrome('never odd or even');
