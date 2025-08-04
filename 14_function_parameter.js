// Function parameters are variables listed inside the
//  parentheses when you define a function. They act like
//  placeholders for the values (called arguments) you pass when calling the function.

// ex:01

function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Tarek"); // Output: Hello, Tarek!


// ex: 02
function multiply(x, y) {
  return x * y;
}

let result = multiply(4, 6);
console.log(result); // Output: 24
