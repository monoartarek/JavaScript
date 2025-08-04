// ✅ 1. array.at(index)
// Returns the element at the specified index. Supports negative indexing.
const nums = [10, 20, 30, 40];

console.log(nums.at(1));   // 20
console.log(nums.at(-1));  // 40 (last element)


// ✅ 2. array.concat(array2)
// Merges two or more arrays without changing the original arrays.
const a = [1, 2];
const b = [3, 4];

const merged = a.concat(b);

console.log(merged);  // [1, 2, 3, 4]


// ✅ 3. array.every(callback)
// Returns true if every element passes the condition.
const ages = [22, 25, 30];

const allAdults = ages.every(age => age >= 18);

console.log(allAdults);  // true


// ✅ 4. array.filter(callback)
// Returns a new array with all elements that pass the condition.
const nums1 = [1, 2, 3, 4, 5];

const evens = nums1.filter(n => n % 2 === 0);

console.log(evens);  // [2, 4]


// ✅ 5. array.find(callback)
// Returns the first element that matches the condition.
const nums2 = [5, 12, 8, 130, 44];

const firstBig = nums2.find(n => n > 10);

console.log(firstBig);  // 12


// ✅ 6. array.findIndex(callback)
// Returns the index of the first matching element. Returns -1 if not found.
const nums3 = [5, 12, 8, 130, 44];

const index = nums3.findIndex(n => n > 100);

console.log(index);  // 3
