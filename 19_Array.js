// In JavaScript, an array is a special variable that can hold multiple values in a single variable.

const fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]); // Apple
console.log(fruits[2]); // Mango

// Modifying Array Elements
fruits[1] = "Orange";  // Banana → Orange
// Array Length
console.log(fruits.length); // 3

/*
🔹 Common Array Methods
Method	            Description
-----------------------------------
push()	            Add element to the end
pop()	            Remove element from the end
unshift()	        Add element to the beginning
shift()	            Remove element from the beginning
includes()	        Check if element exists
indexOf()	        Find index of an element
join()	            Convert array to string
slice()	            Copy part of an array
splice()	        Add/remove elements at any position

*/

// An array can hold strings, numbers, booleans, objects, or even other arrays.
const mixed = ["Tarek", 25, true, { city: "Dhaka" }, [1, 2, 3]];


//  Array of Objects (Advanced)
const students = [
  { name: "Tarek", age: 25 },
  { name: "Monoar", age: 22 }
];

console.log(students[1].name); // Monoar
