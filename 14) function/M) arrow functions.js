/* Use Arrow Functions to Write Concise Anonymous Functions
In JavaScript, we often don't need to name our functions, especially when passing a function as an argument to another function. Instead, we create inline functions. We don't need to name these functions because we do not reuse them anywhere else.

To achieve this, we often use the following syntax: */

const myFunc = function () {
  const myVar = "value";
  return myVar;
};
// ES6 provides us with the syntactic sugar to not have to write anonymous functions this way. Instead, you can use arrow function syntax:

const myFunc2 = () => {
  const myVar = "value";
  return myVar;
};
/* When there is no function body, and only a return value, arrow function syntax allows you to omit the keyword return as well as the brackets surrounding the code. This helps simplify smaller functions into one-line statements: */

const myFunc3 = () => "value";
// This code will still return the string value by default.

/* Rewrite the function assigned to the variable magic which returns a new Date() to use arrow function syntax. Also, make sure nothing is defined using the keyword var. */

var magic = function () {
  return new Date();
};

const magic = () => new Date();

/* Write Arrow Functions with Parameters
Just like a regular function, you can pass arguments into an arrow function. */

const doubler = (item) => item * 2;
doubler(4);
// doubler(4) would return the value 8.

// If an arrow function has a single parameter, the parentheses enclosing the parameter may be omitted.

const doubler2 = (item) => item * 2;
// It is possible to pass more than one argument into an arrow function.

const multiplier = (item, multi) => item * multi;
multiplier(4, 2);
// multiplier(4, 2) would return the value 8.

// Rewrite the myConcat function which appends contents of arr2 to arr1 so that the function uses arrow function syntax.

var myConcat = function (arr1, arr2) {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));

const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));

/* Set Default Parameters for Your Functions
In order to help us create more flexible functions, ES6 introduces default parameters for functions.

Check out this code: */

const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());
/* The console will display the strings Hello John and Hello Anonymous.

The default parameter kicks in when the argument is not specified (it is undefined). As you can see in the example above, the parameter name will receive its default value Anonymous when you do not provide a value for the parameter. You can add default values for as many parameters as you want.

Modify the function increment by adding default parameters so that it will add 1 to number if value is not specified. */

const increment = (number, value = 1) => number + value;
