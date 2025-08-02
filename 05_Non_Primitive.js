// Non-primitive (Reference/ memory address) data types are 3 types:

// 1. Object:
//Used to store key-value pairs.
let person = {
  name: "Tarek",
  age: 25,
  isStudent: true
};
console.log(person.name);

// 2. Array:
// A special type of object that stores ordered collections (indexed list).
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]); // Apple

// 3. Function:
// A block of code designed to perform a particular task. In JavaScript, functions are 
// first-class objects,meaning they can be assigned to variables or passed as arguments.
function greet(name) {
  return `Hello, ${name}`;
}

console.log(greet("Tarek")); // Hello, Tarek

