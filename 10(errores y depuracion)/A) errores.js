/*
Todos los navegadores abren una consola apretando f12

Ejemplo, estan en googlechrome, apretas f12 y te muestra la consola. ahi podes ver los errores

En la pestania element ves el codigo y en la pestania consola te dice el error. Hasta te indica en que linea esta el error
Si apretas sobre el error te dirige al error.

Hay que acordarse de refrescar la consola con f5 por si le agregue contenido. A veces no aparece el error y es pq tenes q apretar f5 para refrescar. Pasa especialmente con internet explorer.

Te dice la fila y columna donde esta el error.
*/

/* Use the JavaScript Console to Check the Value of a Variable
Both Chrome and Firefox have excellent JavaScript consoles, also known as DevTools, for debugging your JavaScript.

You can find Developer tools in your Chrome's menu or Web Console in Firefox's menu. If you're using a different browser, or a mobile phone, we strongly recommend switching to desktop Firefox or Chrome.

The console.log() method, which "prints" the output of what's within its parentheses to the console, will likely be the most helpful debugging tool. Placing it at strategic points in your code can show you the intermediate values of variables. It's good practice to have an idea of what the output should be before looking at what it is. Having check points to see the status of your calculations throughout your code will help narrow down where the problem is.

Here's an example to print the string Hello world! to the console: */

console.log("Hello world!");

/* Understanding the Differences between the freeCodeCamp and Browser Console:
You may have noticed that some freeCodeCamp challenges include their own console. This console behaves a little differently than the browser console.

There are many methods to use with console to output messages. log, warn, and clear to name a few. The freeCodeCamp console will only output log messages, while the browser console will output all messages. When you make changes to your code, it will automatically run and show the logs. The freeCodeCamp console is then cleared each time your code runs.

First, open your browser console so you can see the logs. To do that, you can right-click the freeCodeCamp navigation bar at the top and click inspect on most browsers. Then find the console tab in the window that opens.

After that, use console.log to log the output variable. View the two consoles to see the log. Finally, use console.clear after your log to clear the browser console. View the difference in the two consoles. */

let output =
  "Get this to show once in the freeCodeCamp console and not at all in the browser console";
console.log(output);
console.clear();

/* Catch Mixed Usage of Single and Double Quotes:
JavaScript allows the use of both single (') and double (") quotes to declare a string. Deciding which one to use generally comes down to personal preference, with some exceptions.

Having two choices is great when a string has contractions or another piece of text that's in quotes. Just be careful that you don't close the string too early, which causes a syntax error.

Here are some examples of mixing quotes: */

const grouchoContraction =
  "I've had a perfectly wonderful evening, but this wasn't it.";
const quoteInString =
  "Groucho Marx once said 'Quote me as saying I was mis-quoted.'";
/* const uhOhGroucho = 'I've had a perfectly wonderful evening, but this wasn't it.'; */

/* The first two are correct, but the third is incorrect.

Of course, it is okay to use only one style of quotes. You can escape the quotes inside the string by using the backslash (\) escape character:

const allSameQuotes = 'I\'ve had a perfectly wonderful evening, but this wasn\'t it.';
Fix the string so it either uses different quotes for the href value, or escape the existing ones. Keep the double quote marks around the entire string. */

let innerHtml = '<p>Click here to <a href="#Home">return home</a></p>';
console.log(innerHtml);

/* Catch Missing Open and Closing Parenthesis After a Function Call
When a function or method doesn't take any arguments, you may forget to include the (empty) opening and closing parentheses when calling it. Often times the result of a function call is saved in a variable for other use in your code. This error can be detected by logging variable values (or their types) to the console and seeing that one is set to a function reference, instead of the expected value the function returns.

The variables in the following example are different: */

function myFunction() {
  return "You rock!";
}
let varOne = myFunction;
let varTwo = myFunction();
/* Here varOne is the function myFunction, and varTwo is the string You rock!.

Fix the code so the variable result is set to the value returned from calling the function getNine. */
function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}

let result = getNine();
console.log(result);

/* Catch Off By One Errors When Using Indexing:
Off by one errors (sometimes called OBOE) crop up when you're trying to target a specific index of a string or array (to slice or access a segment), or when looping over the indices of them. JavaScript indexing starts at zero, not one, which means the last index is always one less than the length of the item. If you try to access an index equal to the length, the program may throw an "index out of range" reference error or print undefined.

When you use string or array methods that take index ranges as arguments, it helps to read the documentation and understand if they are inclusive (the item at the given index is part of what's returned) or not. Here are some examples of off by one errors: */

let alphabet = "abcdefghijklmnopqrstuvwxyz";
let len = alphabet.length;
for (let i = 0; i <= len; i++) {
  console.log(alphabet[i]);
}
for (let j = 1; j < len; j++) {
  console.log(alphabet[j]);
}
for (let k = 0; k < len; k++) {
  console.log(alphabet[k]);
}
/* The first example here loops one too many times, and the second loops one too few times (missing the first index, 0). The third example is correct.

Fix the two indexing errors in the following function so all the numbers 1 through 5 are printed to the console. */

function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;
  // Only change code below this line
  for (let i = 0; i < len; i++) {
    // Only change code above this line
    console.log(firstFive[i]);
  }
}

countToFive(); // 1 2 3 4 5

/* Use Caution When Reinitializing Variables Inside a Loop:
Sometimes it's necessary to save information, increment counters, or re-set variables within a loop. A potential issue is when variables either should be reinitialized, and aren't, or vice versa. This is particularly dangerous if you accidentally reset the variable being used for the terminal condition, causing an infinite loop.

Printing variable values with each cycle of your loop by using console.log() can uncover buggy behavior related to resetting, or failing to reset a variable.

The following function is supposed to create a two-dimensional array with m rows and n columns of zeroes. Unfortunately, it's not producing the expected output because the row variable isn't being reinitialized (set back to an empty array) in the outer loop. Fix the code so it returns a correct 3x2 array of zeroes, which looks like [[0, 0], [0, 0], [0, 0]]. */

function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];
  let row = [];
  for (let i = 0; i < m; i++) {
    // Adds the m-th row into newArray

    for (let j = 0; j < n; j++) {
      // Pushes n zeroes into the current row to create the columns
      row.push(0);
    }
    // Pushes the current row, which now has n zeroes in it, to the array
    newArray.push(row);
    row = [];
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix); // [ [ 0, 0 ], [ 0, 0 ], [ 0, 0 ] ]

/* Prevent Infinite Loops with a Valid Terminal Condition:
The final topic is the dreaded infinite loop. Loops are great tools when you need your program to run a code block a certain number of times or until a condition is met, but they need a terminal condition that ends the looping. Infinite loops are likely to freeze or crash the browser, and cause general program execution mayhem, which no one wants.

There was an example of an infinite loop in the introduction to this section - it had no terminal condition to break out of the while loop inside loopy(). Do NOT call this function! */

function loopy() {
  while (true) {
    console.log("Hello, world!");
  }
}
/* It's the programmer's job to ensure that the terminal condition, which tells the program when to break out of the loop code, is eventually reached. One error is incrementing or decrementing a counter variable in the wrong direction from the terminal condition. Another one is accidentally resetting a counter or index variable within the loop code, instead of incrementing or decrementing it.

The myFunc() function contains an infinite loop because the terminal condition i != 4 will never evaluate to false (and break the looping) - i will increment by 2 each pass, and jump right over 4 since i is odd to start. Fix the comparison operator in the terminal condition so the loop only runs for i less than or equal to 4. */

function myFunc() {
  for (let i = 1; i <= 4; i += 2) {
    console.log("Still going!");
  }
}
