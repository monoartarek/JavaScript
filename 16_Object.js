// In JavaScript, an object is a non-primitive data type 
// used to store key-value pairs.

const person = {
  name: "Tarek",
  age: 25,
  isStudent: true
};

console.log(person.name);       // Output: Tarek
console.log(person["age"]);    // Output: 25

// adding new properties
person.country = "Bangladesh";
// deleting properties
delete person.isStudent;
