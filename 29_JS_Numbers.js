/*
In JavaScript, numbers are a primitive data type used for integers, floats (decimals), and special numeric values like Infinity and NaN.
🔢 Basic Number Types:*/
let intNum = 10;         // Integer
let floatNum = 10.5;     // Floating-point
let negativeNum = -5;    // Negative number

/*

+    Addition
-    Subtraction
*    Multiplication
/    Division
%    Modulus (Remainder)
**   Exponentiation

*/

console.log(5 + 3);    // 8
console.log(5 % 2);    // 1
console.log(2 ** 3);   // 8

/*
✅ Number Properties
Number.MAX_VALUE → Largest possible number

Number.MIN_VALUE → Smallest positive number

Number.POSITIVE_INFINITY

Number.NEGATIVE_INFINITY

Number.NaN → Not a Number
*/

let num = 123.456;

/*

| Method            | Description                        | Example                           |
| ----------------- | ---------------------------------- | --------------------------------- |
| `toFixed(n)`      | Rounds to `n` decimal places       | `num.toFixed(2)` → `'123.46'`     |
| `toPrecision(n)`  | Formats number to `n` total digits | `num.toPrecision(5)` → `'123.46'` |
| `toString()`      | Converts number to string          | `num.toString()` → `'123.456'`    |
| `valueOf()`       | Returns primitive number           | `num.valueOf()` → `123.456`       |
| `parseInt(str)`   | Converts string to integer         | `parseInt('10.99')` → `10`        |
| `parseFloat(str)` | Converts string to float           | `parseFloat('10.99')` → `10.99`   |
| `isNaN(val)`      | Checks if value is Not-a-Number    | `isNaN('abc')` → `true`           |
| `isFinite(val)`   | Checks if value is a finite number | `isFinite(100)` → `true`          |

*/
// ✅ Special Values
console.log(1 / 0);         // Infinity
console.log(-1 / 0);        // -Infinity
console.log(0 / 0);         // NaN

// 🔁 Type Conversion
Number("123");          // 123
parseInt("100.5");      // 100
parseFloat("100.5");    // 100.5

// 🧠 Number vs NaN
isNaN("Hello")         // true
isNaN(123)             // false
