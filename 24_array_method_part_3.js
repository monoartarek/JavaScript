// ✅ push()
// Adds elements to the end of an array.
let fruits = ['apple'];
fruits.push('banana');
console.log(fruits); // ['apple', 'banana']

// ✅ reverse()
// Reverses the array in place.
let nums = [1, 2, 3];
nums.reverse();
console.log(nums); // [3, 2, 1]

// ✅ shift()
// Removes the first element from an array.
let items = ['a', 'b', 'c'];
items.shift();
console.log(items); // ['b', 'c']

// ✅ slice(start, end)
// Returns a shallow copy from start to (but not including) end.
let nums1 = [0, 1, 2, 3];
let part = nums1.slice(1, 3);
console.log(part); // [1, 2]

// ✅ some(callback)
// Checks if at least one element passes the test.
let nums2 = [1, 2, 3];
let hasEven = nums2.some(n => n % 2 === 0);
console.log(hasEven); // true

// ✅ sort()
// Sorts array lexicographically(dictionary order) by default.
let nums3 = [10, 2, 1];
nums3.sort(); 
console.log(nums3); // [1, 10, 2]

nums3.sort((a, b) => a - b); // proper numeric sort
console.log(nums3); // [1, 2, 10]


// ✅ splice(start, deleteCount, ...items)
// Adds/removes items at specified index.
let nums4 = [1, 2, 3, 4];
nums4.splice(1, 2, 9, 8); 
console.log(nums4); // [1, 9, 8, 4]

// ✅ toString()
// Converts array to a comma-separated string.
let arr = [1, 2, 3];
console.log(arr.toString()); // "1,2,3"

// ✅ unshift()
// Adds elements to the beginning of an array.
let nums5 = [2, 3];
nums5.unshift(0, 1);
console.log(nums5); // [0, 1, 2, 3]
