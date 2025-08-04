/*
The for...in loop is used to iterate over the properties (keys) of an object.
syntax:
for (let key in object) {
  // code block to be executed
}
*/

const person = {
  name: "Tarek",
  age: 25,
  city: "Dhaka"
};

for (let key in person) {
  console.log(key);           // prints: name, age, city
  console.log(person[key]);   // prints: Tarek, 25, Dhaka
}

/*
Loop	        Works With	        Iterates Over
----------------------------------------------------
for...in	    Objects,Arrays	    Keys (index or property)
for...of	    Arrays,Strings	    Values

🔸 for...in is mainly for objects
🔹 for...of is mainly for arrays
*/
