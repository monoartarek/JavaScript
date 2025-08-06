/*
In JavaScript, the Math object is a built-in object that provides mathematical constants and functions.
It is not a constructor, so you don't create instances of it — you use it directly, like Math.PI or Math.sqrt(25).
✅ Math Constants:

| Constant       | Description              |
| -------------- | ------------------------ |
| `Math.PI`      | 3.141592653589793        |
| `Math.E`       | Euler’s number (\~2.718) |
| `Math.LN2`     | Natural log of 2         |
| `Math.LN10`    | Natural log of 10        |
| `Math.LOG2E`   | Log base 2 of E          |
| `Math.LOG10E`  | Log base 10 of E         |
| `Math.SQRT1_2` | Square root of 1/2       |
| `Math.SQRT2`   | Square root of 2         |

🔢 Math Methods:

| Method          | Description               | Example                 |
| --------------- | ------------------------- | ----------------------- |
| `Math.abs(x)`   | Absolute value            | `Math.abs(-5)` → `5`    |
| `Math.round(x)` | Rounds to nearest integer | `Math.round(4.6)` → `5` |
| `Math.ceil(x)`  | Rounds up                 | `Math.ceil(4.1)` → `5`  |
| `Math.floor(x)` | Rounds down               | `Math.floor(4.9)` → `4` |
| `Math.trunc(x)` | Removes decimal           | `Math.trunc(4.9)` → `4` |

📈 Power & Roots:
| Method           | Description      | Example                |
| ---------------- | ---------------- | ---------------------- |
| `Math.pow(x, y)` | x to the power y | `Math.pow(2, 3)` → `8` |
| `Math.sqrt(x)`   | Square root      | `Math.sqrt(25)` → `5`  |
| `Math.cbrt(x)`   | Cube root        | `Math.cbrt(27)` → `3`  |

📐 Trigonometry:
| Method         | Description     | Example               |
| -------------- | --------------- | --------------------- |
| `Math.sin(x)`  | Sine (x in rad) | `Math.sin(Math.PI/2)` |
| `Math.cos(x)`  | Cosine          |                       |
| `Math.tan(x)`  | Tangent         |                       |
| `Math.asin(x)` | Arc Sine        |                       |
| `Math.acos(x)` | Arc Cosine      |                       |
| `Math.atan(x)` | Arc Tangent     |                       |

🔢 Logarithmic & Exponential
| Method          | Description          | Example                  |
| --------------- | -------------------- | ------------------------ |
| `Math.log(x)`   | Natural log (base e) | `Math.log(10)`           |
| `Math.log10(x)` | Base-10 log          | `Math.log10(1000)` → `3` |
| `Math.exp(x)`   | e^x                  | `Math.exp(1)` → \~2.718  |

🎲 Random & Min/Max
| Method              | Description           | Example                    |
| ------------------- | --------------------- | -------------------------- |
| `Math.random()`     | Random number \[0, 1) | `Math.random()` → 0.123... |
| `Math.min(...nums)` | Smallest number       | `Math.min(4,1,7)` → `1`    |
| `Math.max(...nums)` | Largest number        | `Math.max(4,1,7)` → `7`    |

🎯 Other Useful Methods
| Method             | Description                     | Example                  |
| ------------------ | ------------------------------- | ------------------------ |
| `Math.sign(x)`     | Returns sign: `-1`, `0`, or `1` | `Math.sign(-5)` → `-1`   |
| `Math.clz32(x)`    | Leading zero bits in 32-bit int | `Math.clz32(1)` → `31`   |
| `Math.hypot(a, b)` | √(a² + b²)                      | `Math.hypot(3, 4)` → `5` |
| `Math.fround(x)`   | Nearest 32-bit float            | `Math.fround(1.337)`     |
*/

console.log(Math.PI);              // 3.141592653589793
console.log(Math.round(4.7));      // 5
console.log(Math.floor(4.7));      // 4
console.log(Math.pow(2, 3));       // 8
console.log(Math.sqrt(49));        // 7
console.log(Math.max(5, 10, 15));  // 15
console.log(Math.random());        // Random number
