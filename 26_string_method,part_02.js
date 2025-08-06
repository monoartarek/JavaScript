// ### ✅ **1. `replace()`**
// Replaces part of the string with another string 
let str1 = "Hello World";
console.log(str1.replace("World", "JavaScript")); // "Hello JavaScript"


// ### ✅ **2. `slice(start, end)`**
// Extracts a part of the string and returns it.
let str2 = "JavaScript";
console.log(str2.slice(0, 4)); // "Java"


// ### ✅ **3. `split(separator)`**
// Splits string into an array based on the separator.
let str3 = "apple,banana,orange";
console.log(str3.split(",")); // ["apple", "banana", "orange"]


// ### ✅ **4. `substring(start, end)`**
// Similar to `slice()`, but doesn't accept negative indexes.
let str5 = "JavaScript";
console.log(str5.substring(4, 10)); // "Script"


// ### ✅ **5. `toLowerCase()`**
// Converts string to lowercase.
let str6 = "HELLO";
console.log(str6.toLowerCase()); // "hello"


// ### ✅ **6. `toUpperCase()`**
// Converts string to uppercase.
let str7 = "hello";
console.log(str7.toUpperCase()); // "HELLO"


// ### ✅ **7. `trim()`**
// Removes whitespace from both ends.
let str8 = "  Hello  ";
console.log(str8.trim()); // "Hello"


// ### ✅ **8. `trimStart()` / `trimLeft()`**
// Removes whitespace from the **start** only.
let str9 = "  Hello  ";
console.log(str9.trimStart()); // "Hello  "


// ### ✅ **9. `trimEnd()` / `trimRight()`**
// Removes whitespace from the **end** only.
let str10 = "  Hello  ";
console.log(str10.trimEnd()); // "  Hello"


// ### ✅ **10. `valueOf()`**
// Returns the primitive value of a string object.
let str11 = new String("Hello");
console.log(str11.valueOf()); // "Hello"


// ### ✅ **11. `toString()`**
// Returns a string representation of the object.
let num = 123;
console.log(num.toString()); // "123"


// ### ✅ **12. `length`*
// Returns the length (number of characters).
let str = "Hello";
console.log(str.length); // 5