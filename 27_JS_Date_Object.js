// The JavaScript Date object is used to work with dates and times.
let now = new Date(); //current date and time
console.log(now)

let specificDate = new Date("2023-08-05"); //specific date
console.log(specificDate)

let withNumbers = new Date(2023, 7, 5); //(Year, month-0, day) month are 0 indexed(jan = 0, Aug = 7)


/*
📅 Common Date Methods

| Method          | Description                           | Example                         |
| --------------- | ------------------------------------- | ------------------------------- |
| `getFullYear()` | Gets the 4-digit year                 | `now.getFullYear()` → `2025`    |
| `getMonth()`    | Gets the month (0–11)                 | `now.getMonth()` → `7` (August) |
| `getDate()`     | Gets the day of the month (1–31)      | `now.getDate()`                 |
| `getDay()`      | Gets the weekday (0–6, Sunday = 0)    | `now.getDay()`                  |
| `getHours()`    | Gets the hour (0–23)                  | `now.getHours()`                |
| `getMinutes()`  | Gets the minutes (0–59)               | `now.getMinutes()`              |
| `getSeconds()`  | Gets the seconds (0–59)               | `now.getSeconds()`              |
| `getTime()`     | Gets timestamp (ms since Jan 1, 1970) | `now.getTime()`                 |



⏱ Set Methods

| Method                | Description               |
| --------------------- | ------------------------- |
| `setFullYear(year)`   | Sets the year             |
| `setMonth(month)`     | Sets the month (0–11)     |
| `setDate(day)`        | Sets the day of the month |
| `setHours(hours)`     | Sets the hour             |
| `setMinutes(minutes)` | Sets the minutes          |
| `setSeconds(seconds)` | Sets the seconds          |


📌 Formatting Dates

| Method                 | Output                                           |
| ---------------------- | ------------------------------------------------ |
| `toDateString()`       | `"Tue Aug 05 2025"`                              |
| `toTimeString()`       | `"15:42:01 GMT+0600 (Bangladesh Standard Time)"` |
| `toISOString()`        | `"2025-08-05T09:42:01.000Z"`                     |
| `toLocaleDateString()` | `"8/5/2025"` (based on locale)                   |
| `toLocaleTimeString()` | `"3:42:01 PM"` (based on locale)                 |

*/

let date = new Date();
date.setFullYear(2030);
console.log(date);

// ⏳ Example: Difference Between Dates
let date1 = new Date("2025-08-05");
let date2 = new Date("2025-09-01");
let diff = date2 - date1; // in milliseconds
let days = diff / (1000 * 60 * 60 * 24);
console.log(days); // 27
