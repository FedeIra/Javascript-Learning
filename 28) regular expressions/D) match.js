/* Extract Matches
So far, you have only been checking if a pattern exists or not within a string. You can also extract the actual matches you found with the .match() method.

To use the .match() method, apply the method on a string and pass in the regex inside the parentheses.

Here's an example: */

'Hello, World!'.match(/Hello/); // [ 'Hello', index: 0, input: 'Hello, World!', groups: undefined ]

let ourStr = 'Regular expressions';
let ourRegex = /expressions/;
ourStr.match(ourRegex); // [ 'expressions', index: 8, input: 'Regular expressions', groups: undefined ]
// Here the first match would return ["Hello"] and the second would return ["expressions"].

// Note that the .match syntax is the "opposite" of the .test method you have been using thus far:

'string'.match(/regex/); // null
/regex/.test('string'); // false
// Apply the .match() method to extract the string coding.

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex); /*[ 'coding',
  index: 18,
  input: 'Extract the word \'coding\' from this string.',
  groups: undefined ]  */

/* Find More Than the First Match
So far, you have only been able to extract or search a pattern once. */

let testStr = 'Repeat, Repeat, Repeat';
let ourRegex2 = /Repeat/;
testStr.match(ourRegex);
// Here match would return ["Repeat"].

// To search or extract a pattern more than once, you can use the global search flag: g.

let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);
// And here match returns the value ["Repeat", "Repeat", "Repeat"]

/* Using the regex starRegex, find and extract both Twinkle words from the string twinkleStar.

Note: You can have multiple flags on your regex like /search/gi */

let twinkleStar = 'Twinkle, twinkle, little star';
let starRegex = /Twinkle/gi;
let result2 = twinkleStar.match(starRegex); // [ 'Twinkle', 'twinkle' ]

/* Match Anything with Wildcard Period
Sometimes you won't (or don't need to) know the exact characters in your patterns. Thinking of all words that match, say, a misspelling would take a long time. Luckily, you can save time using the wildcard character: .

The wildcard character . will match any one character. The wildcard is also called dot and period. You can use the wildcard character just like any other character in the regex. For example, if you wanted to match hug, huh, hut, and hum, you can use the regex /hu./ to match all four words. */

let humStr = "I'll hum a song";
let hugStr = 'Bear hug';
let hugStr2 = 'Bear hugsdflwefnxcln';
let huRegex = /hu./;
huRegex.test(humStr); // true
huRegex.test(hugStr); // true
huRegex.test(hugStr2); // true
// Both of these test calls would return true.

// Complete the regex unRegex so that it matches the strings run, sun, fun, pun, nun, and bun.Your regex should use the wildcard character.

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result3 = unRegex.test(exampleStr); // true

/* Match Single Character with Multiple Possibilities
You learned how to match literal patterns (/literal/) and wildcard character (/./). Those are the extremes of regular expressions, where one finds exact matches and the other matches everything. There are options that are a balance between the two extremes.

You can search for a literal pattern with some flexibility with character classes. Character classes allow you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets.

For example, you want to match bag, big, and bug but not bog. You can create the regex /b[aiu]g/ to do this. The [aiu] is the character class that will only match the characters a, i, or u. */

let bigStr = 'big';
let bagStr = 'bag';
let bugStr = 'bug';
let bogStr = 'bog';
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex);
bagStr.match(bgRegex);
bugStr.match(bgRegex);
bogStr.match(bgRegex);
/* In order, the four match calls would return the values ["big"], ["bag"], ["bug"], and null.

Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to find all the vowels in the string quoteSample.

Note: Be sure to match both upper- and lowercase vowels. */

let quoteSample =
  'Beware of bugs in the above code; I have only proved it correct, not tried it.';
let vowelRegex = /[aeiou]/gi;
let result4 = quoteSample.match(vowelRegex); // [ 'e',  'a',  'e', 'o', 'u', 'i', 'e', 'a', 'o', 'e', 'o', 'e', 'I', 'a', 'e', 'o', 'o', 'e', 'i', 'o', 'e', 'o',  'i',  'e',  'i' ]

/* Match Letters of the Alphabet
You saw how you can use character sets to specify a group of characters to match, but that's a lot of typing when you need to match a large range of characters (for example, every letter in the alphabet). Fortunately, there is a built-in feature that makes this short and simple.

Inside a character set, you can define a range of characters to match using a hyphen character: -.

For example, to match lowercase letters a through e you would use [a-e]. */

let catStr = 'cat';
let batStr = 'bat';
let matStr = 'mat';
let bgRegex2 = /[a-e]at/;
catStr.match(bgRegex);
batStr.match(bgRegex);
matStr.match(bgRegex);
/* In order, the three match calls would return the values ["cat"], ["bat"], and null.

Match all the letters in the string quoteSample.

Note: Be sure to match both uppercase and lowercase letters.
 */
let quoteSample2 = 'The quick brown fox jumps over the lazy dog.';
let alphabetRegex = /[a-z]/gi;
let result5 = quoteSample.match(alphabetRegex); // [ 'T', 'h', 'e', 'q', 'u', 'i', 'c', 'k', 'b', 'r', 'o', 'w', 'n', 'f', 'o', 'x', 'j', 'u', 'm', 'p', 's', 'o', 'v', 'e', 'r', 't', 'h', 'e', 'l', 'a', 'z', 'y', 'd', 'o', 'g' ]
