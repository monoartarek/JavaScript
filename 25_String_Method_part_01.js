// ✅ 1. charAt(index)
// Returns the character at the specified position.
let str = "Hello";
console.log(str.charAt(1)); // → 'e'

// ✅ 2. concat()
// Joins two or more strings.
let str1 = "Hello";
let str2 = "World";
console.log(str1.concat(" ", str2)); // → 'Hello World'

// ✅ 3. includes(substring)
// Checks if a string contains a substring. Returns true or false.
let sentence = "JavaScript is awesome";
console.log(sentence.includes("awesome")); // → true

// ✅ 4. indexOf(substring)
// Returns the index of the first occurrence of a substring. Returns -1 if not found.
let text = "banana";
console.log(text.indexOf("a")); // → 1

// ✅ 5. lastIndexOf(substring)
// Returns the index of the last occurrence of a substring.
let word = "banana";
console.log(word.lastIndexOf("a")); // → 5

// ✅ 6. startsWith(substring)
// Checks if a string starts with the given substring.
let msg = "Hello world";
console.log(msg.startsWith("Hello")); // → true

// ✅ 7. endsWith(substring)
// Checks if a string ends with the given substring.
let file = "report.pdf";
console.log(file.endsWith(".pdf")); // → true

// ✅ 8. match(regex)
// Matches string against a regular expression and returns an array of matches.
let data = "My phone number is 123-456-7890";
console.log(data.match(/\d{3}-\d{3}-\d{4}/)); // → ['123-456-7890']

// ✅ 9. replace(searchValue, newValue)
// Replaces matched part of the string with a new value.
let greet = "Hi Tarek";
console.log(greet.replace("Tarek", "Monoar")); // → 'Hi Monoar'
