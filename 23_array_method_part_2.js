// ✅ Array.from()
// string ke array te convert kore
const str = "hello";
const arr = Array.from(str);
console.log(arr); // ['h', 'e', 'l', 'l', 'o']

// ✅ Array.includes()
// Checks if an array includes a specific element.
//search kore ache kina check kora jay.
const fruits = ['apple', 'banana', 'mango'];
console.log(fruits.includes('banana')); // true
console.log(fruits.includes('orange')); // false

// ✅ Array.join()
// Joins all elements of an array into a string.
//array ke string e convert kore.
const words = ['I', 'love', 'JS'];
const sentence = words.join(' ');
console.log(sentence); // "I love JS"

// ✅ Array.lastIndexOf()
// Returns the last index at which a given element can be found.

const numbers = [1, 2, 3, 2, 1];
//last 2 jekhane thakbe sekhankar index number ouput debe
console.log(numbers.lastIndexOf(2)); // 3
//jodi na thake tahole -1 return kore
console.log(numbers.lastIndexOf(5)); // -1 

// ✅ Array.length
// Returns the number of elements in an array.
const colors = ['red', 'green', 'blue'];
console.log(colors.length); // 3

// ✅ Array.pop()
// Removes the last element from an array and returns it.
const stack = [1, 2, 3];
const last = stack.pop();
console.log(last); // 3
console.log(stack); // [1, 2]
