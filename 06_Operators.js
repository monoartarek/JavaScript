/*There are 5 types of operator available in JS:
1. Arithmetic 
2. Assignment
3. Comparison
4. Logical
5. Unary & Ternary 

✅ 1. Arithmetic Operators
Used to perform mathematical calculations.

Operator	Description	        Example

+	        Addition	        5 + 2 → 7
-	        Subtraction	        5 - 2 → 3
*	        Multiplication	    5 * 2 → 10
/	        Division	        5 / 2 → 2.5
%	        Modulus (remainder)	5 % 2 → 1
**	        Exponentiation	    2 ** 3 → 8
++	        Increment	        let x = 1; x++
--	        Decrement	        let x = 1; x--

✅ 2. Assignment Operators
Assign values to variables.

Operator	Example	    Same As

=	        x = 10	    Assign 10
+=	        x += 5	    x = x + 5
-=	        x -= 5	    x = x - 5
*=	        x *= 5	    x = x * 5
/=	        x /= 5	    x = x / 5
%=	        x %= 5	    x = x % 5

✅ 3. Comparison Operators
Compare two values and return a Boolean (true or false).

Operator	Description	                Example

==	        Equal to (loose)	        5 == '5' → true
===	        Equal to (strict)	        5 === '5' → false
!=	        Not equal to (loose)	    5 != '5' → false
!==	        Not equal to (strict)	    5 !== '5' → true
>	        Greater than	            5 > 3 → true
<	        Less than	                3 < 5 → true
>=	        Greater than or equal to	5 >= 5 → true
<=	        Less than or equal to	    4 <= 5 → true

✅ 4. Logical Operators
Used to combine multiple conditions.

Operator	Description	        Example

&&	        AND	            true && false      → false
||          OR		        true || False      -> true                   `
!	        NOT	            !true → false

✅ 5. Unary & Ternary Operators
🔹 Unary Operator
Works with a single operand.

let x = 5;
console.log(typeof x); // "number"
console.log(-x);       // -5 (unary negation)

🔹 Ternary Operator
A shortcut for if...else.

Syntax:

condition ? value_if_true : value_if_false;
Example:

let age = 18;
let result = (age >= 18) ? "Adult" : "Minor";
console.log(result); // Adult

*/